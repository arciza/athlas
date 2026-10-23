import nodemailer from "nodemailer";
import type { Locale } from "@/lib/i18n";

export type ContactVariant = "athlete" | "coach" | "travel";

export type ContactPayload = {
  locale: Locale;
  variant: ContactVariant;
  name: string;
  email: string;
  phone: string;
  country: string;
  sport: string;
  team: string;
  institution: string;
  message: string;
};

export function inboxFor(variant: ContactVariant) {
  return variant === "travel" ? "travel@athlas.org" : "info@athlas.org";
}

export function confirmationCopy(locale: Locale, variant: ContactVariant, name: string) {
  const inbox = inboxFor(variant);
  const brand = variant === "travel" ? "Athlas Travel" : "Athlas";

  if (locale === "en") {
    return {
      subject:
        variant === "travel"
          ? "We received your inquiry — Athlas Travel"
          : "We received your message — Athlas",
      text: `Hi ${name},\n\nWe received your information. The ${brand} team will contact you shortly.\n\nIf you want to write us directly: ${inbox}\n\n— ${brand}`,
    };
  }

  return {
    subject:
      variant === "travel"
        ? "Recibimos tu consulta — Athlas Travel"
        : "Recibimos tu mensaje — Athlas",
    text: `Hola ${name},\n\nRecibimos tu información. El equipo de ${brand} te contactará en breve.\n\nSi quieres escribirnos directo: ${inbox}\n\n— ${brand}`,
  };
}

export function staffCopy(payload: ContactPayload) {
  const { locale, variant, name } = payload;
  const labels = fieldLabels(locale);
  const lines = [
    `${labels.name}: ${payload.name}`,
    `${labels.email}: ${payload.email}`,
    `${labels.phone}: ${payload.phone || "—"}`,
  ];

  if (variant === "athlete") {
    lines.push(`${labels.country}: ${payload.country || "—"}`);
    lines.push(`${labels.sport}: ${payload.sport || "—"}`);
  } else if (variant === "travel") {
    lines.push(`${labels.team}: ${payload.team || "—"}`);
    lines.push(`${labels.sport}: ${payload.sport || "—"}`);
  } else {
    lines.push(`${labels.institution}: ${payload.institution || "—"}`);
  }

  lines.push("");
  lines.push(`${labels.message}:`);
  lines.push(payload.message);

  const subject =
    locale === "en"
      ? variant === "travel"
        ? `New Athlas Travel inquiry — ${name}`
        : `New Athlas inquiry — ${name}`
      : variant === "travel"
        ? `Nueva consulta Athlas Travel — ${name}`
        : `Nueva consulta Athlas — ${name}`;

  return { subject, text: lines.join("\n") };
}

function fieldLabels(locale: Locale) {
  if (locale === "en") {
    return {
      name: "Name",
      email: "Email",
      phone: "Phone",
      country: "Country",
      sport: "Sport",
      team: "Team or school",
      institution: "Institution",
      message: "Message",
    };
  }

  return {
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Teléfono",
    country: "País",
    sport: "Deporte",
    team: "Equipo o escuela",
    institution: "Institución",
    message: "Mensaje",
  };
}

function smtpAuth() {
  const user = process.env.CONTACT_SMTP_USER?.trim();
  const pass = process.env.CONTACT_SMTP_PASS?.trim();
  if (!user || !pass) return null;
  return { user, pass };
}

export async function sendContactMessages(payload: ContactPayload) {
  const auth = smtpAuth();
  const staff = staffCopy(payload);
  const confirm = confirmationCopy(payload.locale, payload.variant, payload.name);
  const to = inboxFor(payload.variant);

  if (!auth) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] SMTP not set; logging messages in development");
      console.info("[contact] staff", { to, ...staff });
      console.info("[contact] confirm", { to: payload.email, ...confirm });
      return;
    }
    throw new Error("CONTACT_SMTP_USER / CONTACT_SMTP_PASS are not set");
  }

  const host = process.env.CONTACT_SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.CONTACT_SMTP_PORT || 465);
  const fromName = payload.variant === "travel" ? "Athlas Travel" : "Athlas";
  const from = `${fromName} <${auth.user}>`;
  const transport = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth,
  });

  await transport.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: staff.subject,
    text: staff.text,
  });

  await transport.sendMail({
    from,
    to: payload.email,
    replyTo: to,
    subject: confirm.subject,
    text: confirm.text,
  });
}
