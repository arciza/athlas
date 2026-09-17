import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { athletes } from "@/lib/athletes";
import { localePath } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";

export default async function CostaRicaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);

  return (
    <>
      <PageHero title={copy.costaRica.hero} image="/media/cr-hero.webp" />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl space-y-4 text-[15px] leading-7 text-[#292929]/85">
          <p>{copy.costaRica.p1}</p>
          <p>{copy.costaRica.p2}</p>
          <p>{copy.costaRica.p3}</p>
        </div>
        <h2 className="font-heading mt-14 text-3xl font-semibold">{copy.costaRica.meet}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {athletes.map((athlete) => (
            <Link
              key={athlete.slug}
              href={localePath(locale, `/atletas/${athlete.slug}`)}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-[#36348E]/10"
            >
              <div className="relative h-72 bg-[#CDD4FB]/40">
                <Image
                  src={athlete.image}
                  alt={athlete.name}
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="font-heading text-lg font-semibold">{athlete.shortName}</p>
                <p className="mt-1 text-sm text-[#36348E]">{athlete.sport[locale]}</p>
                <p className="mt-3 text-sm font-medium text-[#36348E]">{copy.costaRica.more}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
