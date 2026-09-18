"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { t } from "@/lib/messages";
import {
  alternateLocale,
  localePath,
  stripLocalePrefix,
  type Locale,
} from "@/lib/i18n";
import { sports } from "@/lib/data";
import { cn } from "@/lib/utils";

function navItems(locale: Locale) {
  const copy = t(locale);
  return [
    { href: localePath(locale, "/#como-funciona"), label: copy.nav.how },
    { href: localePath(locale, "/becas"), label: copy.nav.sports },
    { href: localePath(locale, "/travel"), label: copy.nav.travel },
    { href: localePath(locale, "/fundacion"), label: copy.nav.foundation },
    { href: localePath(locale, "/entrenadores"), label: copy.nav.coaches },
    { href: localePath(locale, "/preguntas-frecuentes"), label: copy.nav.faq },
  ];
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const pathname = usePathname() ?? "/";
  const other = alternateLocale(locale);
  const languageHref = localePath(other, stripLocalePrefix(pathname));
  const items = navItems(locale);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#36348E] text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <BrandLogo locale={locale} inverted />
        <nav className="hidden items-center gap-3 xl:gap-5 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-[#FFC53A]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={languageHref}
            className="hidden rounded-md border border-white/25 px-2.5 py-1 text-xs font-semibold tracking-wide text-white/90 hover:bg-white/10 sm:inline-flex"
            hrefLang={other}
          >
            {copy.nav.language}
          </Link>
          <Link
            href={localePath(locale, "/proceso")}
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden h-8 bg-[#FFC53A] text-[#292929] hover:bg-[#FFC53A]/90 md:inline-flex"
            )}
          >
            {copy.nav.apply}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? copy.nav.closeMenu : copy.nav.openMenu}
            type="button"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-[#2c2a75] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <p className="mt-2 px-2 text-xs tracking-[0.16em] text-white/50 uppercase">
              {copy.nav.sports}
            </p>
            {sports.map((sport) => (
              <Link
                key={sport.slug}
                href={localePath(locale, `/becas/${sport.slug}`)}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-white/85 hover:bg-white/10"
              >
                {sport.title[locale]}
              </Link>
            ))}
            <Link
              href={languageHref}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md px-2 py-2 text-sm font-semibold"
            >
              {copy.nav.languageLabel}
            </Link>
            <Link
              href={localePath(locale, "/proceso")}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[#FFC53A] px-3 py-2.5 text-center text-sm font-semibold text-[#292929]"
            >
              {copy.nav.apply}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
