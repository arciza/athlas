import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
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
        <div className="space-y-4 text-[15px] leading-7 text-[#083677]/85">
          <p>{copy.foundation.p1}</p>
          <p>{copy.foundation.p2}</p>
        </div>
        <h2 className="font-heading mt-12 text-3xl font-semibold">{copy.foundation.differenceTitle}</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-7 text-[#083677]/85">
          <p>{copy.foundation.differenceP1}</p>
          <p>{copy.foundation.differenceP2}</p>
        </div>
        <h2 className="font-heading mt-12 text-3xl font-semibold">{copy.foundation.goalTitle}</h2>
        <div className="mt-4 space-y-4 text-[15px] leading-7 text-[#083677]/85">
          <p>{copy.foundation.goalP1}</p>
          <p>{copy.foundation.goalP2}</p>
          <p>{copy.foundation.goalP3}</p>
        </div>
        <a
          href="mailto:info@athlas.org?subject=Donaci%C3%B3n%20Athlas"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-8 inline-flex h-11 bg-[#247360] px-5 text-white hover:bg-[#247360]/90"
          )}
        >
          {copy.foundation.donateCta}
        </a>
        <p className="mt-4 text-sm text-[#083677]">{copy.foundation.donateNote}</p>
      </section>
    </>
  );
}
