import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { t } from "@/lib/messages";
import { localePath, type Locale } from "@/lib/i18n";
import { sports } from "@/lib/data";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = t(locale);

  return (
    <footer className="bg-[#1c1b4a] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <BrandLogo locale={locale} inverted />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/75">{copy.footer.tagline}</p>
          <p className="mt-4 text-sm text-white/70">{copy.footer.address}</p>
          <a
            href="mailto:info@athlas.org"
            className="mt-2 inline-block text-sm font-medium text-[#FFC53A] hover:underline"
          >
            {copy.footer.email}
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
            {copy.nav.sports}
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {sports.map((sport) => (
              <li key={sport.slug}>
                <Link
                  href={localePath(locale, `/becas/${sport.slug}`)}
                  className="text-white/80 hover:text-[#FFC53A]"
                >
                  {sport.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">Athlas</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={localePath(locale, "/travel")} className="text-white/80 hover:text-[#FFC53A]">
                {copy.nav.travel}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/fundacion")} className="text-white/80 hover:text-[#FFC53A]">
                {copy.nav.foundation}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/entrenadores")} className="text-white/80 hover:text-[#FFC53A]">
                {copy.nav.coaches}
              </Link>
            </li>
            <li>
              <Link
                href={localePath(locale, "/preguntas-frecuentes")}
                className="text-white/80 hover:text-[#FFC53A]"
              >
                {copy.nav.faq}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/privacidad")} className="text-white/80 hover:text-[#FFC53A]">
                {copy.footer.privacy}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/45">
        {copy.footer.rights}
      </div>
    </footer>
  );
}
