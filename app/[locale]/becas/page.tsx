import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { sportList, sports } from "@/lib/data";
import { localePath } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";

export default async function SportsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);

  return (
    <>
      <PageHero title={copy.home.sportsTitle} subtitle={copy.home.sportsLead} image="/media/hero-05.webp" />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="flex flex-wrap gap-x-2 gap-y-3 text-[17px] leading-7 text-[#292929]">
          {sportList.map((sport) => (
            <li
              key={sport.name.en}
              className="after:ml-2 after:text-[#36348E]/40 after:content-['·'] last:after:content-none"
            >
              <Link
                href={localePath(locale, `/becas/${sport.slug}`)}
                className="font-medium text-[#36348E] underline-offset-4 hover:underline"
              >
                {sport.name[locale]}
              </Link>
            </li>
          ))}
          <li>
            <span>{copy.home.sportsMore}</span>
          </li>
        </ul>
        <div className="mt-12 grid gap-4">
          {sports.map((sport) => (
            <Link
              key={sport.slug}
              href={localePath(locale, `/becas/${sport.slug}`)}
              className="rounded-2xl bg-white p-5 ring-1 ring-[#36348E]/10 hover:ring-[#36348E]/25"
            >
              <h2 className="font-heading text-lg font-semibold">{sport.title[locale]}</h2>
              <p className="mt-2 text-sm leading-6 text-[#292929]/75">{sport.intro[locale]}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
