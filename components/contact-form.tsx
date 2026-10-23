"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { t } from "@/lib/messages";
import type { Locale } from "@/lib/i18n";

type Variant = "athlete" | "coach" | "travel";

export function ContactForm({
  locale,
  variant,
}: {
  locale: Locale;
  variant: Variant;
  subject?: string;
}) {
  const copy = t(locale);
  const [status, setStatus] = useState<"idle" | "sending" | "error" | "sendError" | "success">(
    "idle"
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          variant,
          name,
          email,
          phone: String(data.get("phone") ?? "").trim(),
          country: String(data.get("country") ?? "").trim(),
          sport: String(data.get("sport") ?? "").trim(),
          team: String(data.get("team") ?? "").trim(),
          institution: String(data.get("institution") ?? "").trim(),
          website: String(data.get("website") ?? "").trim(),
          message,
        }),
      });
      const payload = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || !payload?.ok) {
        setStatus("sendError");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("sendError");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="text-base leading-7 text-[#083677]">
        {variant === "travel" ? copy.travel.success : copy.apply.success}
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="relative grid gap-4" noValidate>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <Label htmlFor="website">Website</Label>
        <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="name">{copy.form.name}</Label>
        <Input id="name" name="name" required className="h-10" autoComplete="name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">{copy.form.email}</Label>
        <Input id="email" name="email" type="email" required className="h-10" autoComplete="email" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">{copy.form.phone}</Label>
        <Input id="phone" name="phone" className="h-10" autoComplete="tel" />
      </div>
      {variant === "athlete" ? (
        <>
          <div className="grid gap-2">
            <Label htmlFor="country">{copy.form.country}</Label>
            <Input id="country" name="country" className="h-10" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sport">{copy.form.sport}</Label>
            <Input id="sport" name="sport" className="h-10" />
          </div>
        </>
      ) : variant === "travel" ? (
        <>
          <div className="grid gap-2">
            <Label htmlFor="team">{copy.form.team}</Label>
            <Input id="team" name="team" className="h-10" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sport">{copy.form.sport}</Label>
            <Input id="sport" name="sport" className="h-10" />
          </div>
        </>
      ) : (
        <div className="grid gap-2">
          <Label htmlFor="institution">{copy.form.institution}</Label>
          <Input id="institution" name="institution" className="h-10" />
        </div>
      )}
      <div className="grid gap-2">
        <Label htmlFor="message">{copy.form.message}</Label>
        <Textarea id="message" name="message" required className="min-h-28" />
      </div>
      {status === "error" ? (
        <p role="alert" className="text-sm text-destructive">
          {copy.apply.error}
        </p>
      ) : null}
      {status === "sendError" ? (
        <p role="alert" className="text-sm text-destructive">
          {variant === "travel" ? copy.travel.sendError : copy.apply.sendError}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "sending"}
        className="h-10 bg-[#083677] text-white hover:bg-[#083677]/90"
      >
        {status === "sending"
          ? copy.form.sending
          : variant === "travel"
            ? copy.travel.formSubmit
            : copy.form.submit}
      </Button>
    </form>
  );
}
