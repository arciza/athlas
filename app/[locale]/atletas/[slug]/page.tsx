import Image from "next/image";
import { notFound } from "next/navigation";
import { athletes, getAthlete } from "@/lib/athletes";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { locales } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    athletes.map((athlete) => ({ locale, slug: athlete.slug }))
  );
}

export default async function AthletePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale(params);
  const athlete = getAthlete(slug);
  if (!athlete) notFound();
  const copy = t(locale);

  return (
    <>
      <PageHero title={athlete.name} subtitle={athlete.sport[locale]} image={athlete.cover} />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[280px_1fr]">
        <div className="overflow-hidden rounded-2xl bg-[#083677]/8">
          <Image
            src={athlete.image}
            alt={athlete.name}
            width={640}
            height={900}
            className="w-full object-contain"
          />
        </div>
        <div>
          <p className="text-[15px] leading-7 text-[#083677]/85">{athlete.summary[locale]}</p>
          <h2 className="font-heading mt-10 text-2xl font-semibold">{copy.athlete.education}</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-7 text-[#083677]/85">
            {athlete.education.map((item) => (
              <li key={item.es}>{item[locale]}</li>
            ))}
          </ul>
          <h2 className="font-heading mt-10 text-2xl font-semibold">{copy.athlete.history}</h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-7 text-[#083677]/85">
            {athlete.history.map((item) => (
              <li key={item.es}>{item[locale]}</li>
            ))}
          </ul>
          <a
            href={`mailto:info@athlas.org?subject=${encodeURIComponent(athlete.name)}`}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 inline-flex h-11 bg-[#247360] px-5 text-white hover:bg-[#247360]/90"
            )}
          >
            {copy.athlete.support}
          </a>
          <div className="mt-12 rounded-2xl bg-[#ffffff] p-6">
            <h3 className="font-heading text-3xl font-semibold sm:text-4xl">{copy.athlete.joinTitle}</h3>
            <p className="mt-3 leading-7 text-[#083677]/80">{copy.athlete.joinBody}</p>
            <p className="mt-3 leading-7 text-[#083677]/80">{copy.athlete.joinCta}</p>
          </div>
        </div>
      </section>
    </>
  );
}
