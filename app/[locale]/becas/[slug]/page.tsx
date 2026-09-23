import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { getSport, sports } from "@/lib/data";
import { localePath, locales } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return locales.flatMap((locale) => sports.map((sport) => ({ locale, slug: sport.slug })));
}

export default async function SportPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const locale = await getLocale(params);
  const sport = getSport(slug);
  if (!sport) notFound();
  const copy = t(locale);

  return (
    <>
      <PageHero title={sport.title[locale]} image={sport.image} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-sm text-[#083677]">
          {copy.sportsPage.author} · {copy.sportsPage.date}
        </p>
        <p className="mt-6 text-[15px] leading-7 text-[#083677]/85">{sport.intro[locale]}</p>
        {sport.sections.map((section) => (
          <section key={section.title.es} className="mt-10">
            <h2 className="font-heading text-2xl font-semibold">{section.title[locale]}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#083677]/85">{section.body[locale]}</p>
          </section>
        ))}
        <h2 className="font-heading mt-10 text-2xl font-semibold">
          {locale === "es" ? "Conclusión" : "Conclusion"}
        </h2>
        <p className="mt-3 text-[15px] leading-7 text-[#083677]/85">{sport.conclusion[locale]}</p>
        <h2 className="font-heading mt-12 text-2xl font-semibold">{copy.sportsPage.apply}</h2>
        <p className="mt-3 leading-7 text-[#083677]/80">{copy.sportsPage.applyLead}</p>
        <Link
          href={localePath(locale, "/proceso")}
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-6 inline-flex h-11 bg-[#083677] px-5 text-white hover:bg-[#083677]/90"
          )}
        >
          {copy.home.start}
        </Link>
      </article>
    </>
  );
}
