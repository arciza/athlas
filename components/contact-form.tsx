"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { t } from "@/lib/messages";
import type { Locale } from "@/lib/i18n";

type Variant = "athlete" | "coach";

export function ContactForm({
  locale,
  variant,
  subject,
}: {
  locale: Locale;
  variant: Variant;
  subject: string;
}) {
  const copy = t(locale);
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    const extras =
      variant === "athlete"
        ? `${copy.form.country}: ${String(data.get("country") ?? "")}\n${copy.form.sport}: ${String(data.get("sport") ?? "")}\n${copy.form.phone}: ${String(data.get("phone") ?? "")}`
        : `${copy.form.institution}: ${String(data.get("institution") ?? "")}\n${copy.form.phone}: ${String(data.get("phone") ?? "")}`;

    const body = `${copy.form.name}: ${name}\n${copy.form.email}: ${email}\n${extras}\n\n${message}`;
    window.location.href = `mailto:info@athlas.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-2">
        <Label htmlFor="name">{copy.form.name}</Label>
        <Input id="name" name="name" required className="h-10" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">{copy.form.email}</Label>
        <Input id="email" name="email" type="email" required className="h-10" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">{copy.form.phone}</Label>
        <Input id="phone" name="phone" className="h-10" />
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
      {status === "success" ? (
        <p role="status" className="text-sm text-[#36348E]">
          {copy.apply.success}
        </p>
      ) : null}
      <Button type="submit" className="h-10 bg-[#36348E] text-white hover:bg-[#36348E]/90">
        {copy.form.submit}
      </Button>
    </form>
  );
}
