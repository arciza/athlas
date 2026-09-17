import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { localePath } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";
import { cn } from "@/lib/utils";

export default async function FoundationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);

  return (
    <>
      <PageHero title={copy.foundation.title} subtitle={copy.foundation.lead} image="/media/team-cover.webp" />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-4 text-[15px] leading-7 text-[#292929]/85">
          <p>{copy.foundation.p1}</p>
          <p>{copy.foundation.p2}</p>
        </div>
        <h2 className="font-heading mt-12 text-3xl font-semibold">{copy.foundation.differenceTitle}</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-7 text-[#292929]/85">
          <p>{copy.foundation.differenceP1}</p>
          <p>{copy.foundation.differenceP2}</p>
        </div>
        <h2 className="font-heading mt-12 text-3xl font-semibold">{copy.foundation.goalTitle}</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-7 text-[#292929]/85">
          <p>{copy.foundation.goalP1}</p>
          <p>{copy.foundation.goalP2}</p>
          <p>{copy.foundation.goalP3}</p>
        </div>
        <a
          href="mailto:info@athlas.org?subject=Donaci%C3%B3n%20Athlas"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 inline-flex h-11 bg-[#FFC53A] px-5 text-[#292929] hover:bg-[#FFC53A]/90"
          )}
        >
          {copy.foundation.donateCta}
        </a>
        <p className="mt-4 text-sm text-[#545454]">{copy.foundation.donateNote}</p>
        <Link
          href={localePath(locale, "/donaciones-costarica")}
          className="mt-6 inline-block text-sm font-medium text-[#36348E] underline-offset-4 hover:underline"
        >
          {copy.nav.costaRica}
        </Link>
      </section>
    </>
  );
}
