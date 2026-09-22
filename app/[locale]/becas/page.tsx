import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { localePath } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";
import { cn } from "@/lib/utils";

export default async function SportsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);

  return (
    <>
      <PageHero
        title={copy.scholarshipsPage.title}
        subtitle={copy.scholarshipsPage.lead}
        image="/media/hero-05.webp"
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-4 text-[15px] leading-7 text-[#292929]/85">
          <p>{copy.scholarshipsPage.p1}</p>
          <p>{copy.scholarshipsPage.p2}</p>
          <p>{copy.scholarshipsPage.p3}</p>
        </div>
        <Link
          href={localePath(locale, "/proceso")}
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-10 inline-flex h-11 bg-[#36348E] px-5 text-white hover:bg-[#36348E]/90"
          )}
        >
          {copy.home.start}
        </Link>
      </section>
    </>
  );
}
