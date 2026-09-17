import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { sports } from "@/lib/data";
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
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {sports.map((sport) => (
          <Link
            key={sport.slug}
            href={localePath(locale, `/becas/${sport.slug}`)}
            className="group overflow-hidden rounded-2xl bg-white ring-1 ring-[#36348E]/10"
          >
            <div className="relative h-44">
              <Image
                src={sport.image}
                alt=""
                fill
                className="object-cover transition group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="font-heading text-lg font-semibold">{sport.title[locale]}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#292929]/75">{sport.intro[locale]}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
