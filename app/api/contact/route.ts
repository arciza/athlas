import { NextResponse } from "next/server";
import {
  sendContactMessages,
  type ContactPayload,
  type ContactVariant,
} from "@/lib/contact-mail";
import { isLocale, type Locale } from "@/lib/i18n";

const VARIANTS: ContactVariant[] = ["athlete", "coach", "travel"];
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const hits = new Map<string, number[]>();

function takeSlot(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

function text(value: unknown, max: number) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!takeSlot(ip)) {
    return NextResponse.json({ ok: false, error: "rate" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  if (text(body.website, 80)) {
    return NextResponse.json({ ok: true });
  }

  const locale: Locale = isLocale(String(body.locale ?? "")) ? (body.locale as Locale) : "es";
  const variant = VARIANTS.includes(body.variant as ContactVariant)
    ? (body.variant as ContactVariant)
    : null;
  const name = text(body.name, 120);
  const email = text(body.email, 200);
  const message = String(body.message ?? "").trim().slice(0, 4000);

  if (!variant || !name || !isEmail(email) || message.length < 2) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const payload: ContactPayload = {
    locale,
    variant,
    name,
    email,
    phone: text(body.phone, 80),
    country: text(body.country, 120),
    sport: text(body.sport, 120),
    team: text(body.team, 160),
    institution: text(body.institution, 160),
    message,
  };

  try {
    await sendContactMessages(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "send failed";
    console.error("contact send failed", detail);
    return NextResponse.json({ ok: false, error: "send" }, { status: 502 });
  }
}
