import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { sportList } from "@/lib/data";
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
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl space-y-4 text-[15px] leading-7 text-[#083677]/85">
          <p>{copy.scholarshipsPage.p1}</p>
          <p>{copy.scholarshipsPage.p2}</p>
          <p>{copy.scholarshipsPage.p3}</p>
        </div>
        <ul className="mt-10 flex flex-wrap gap-x-2 gap-y-3 text-[17px] leading-7 text-[#083677]">
          {sportList.map((sport) => (
            <li
              key={sport.slug}
              className="after:ml-2 after:text-[#083677]/40 after:content-['·'] last:after:content-none"
            >
              <Link
                href={localePath(locale, `/becas/${sport.slug}`)}
                className="font-medium text-[#083677] underline-offset-4 hover:underline"
              >
                {sport.name[locale]}
              </Link>
            </li>
          ))}
          <li>
            <span>{copy.home.sportsMore}</span>
          </li>
        </ul>
        <Link
          href={localePath(locale, "/proceso")}
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-10 inline-flex h-11 bg-[#083677] px-5 text-white hover:bg-[#083677]/90"
          )}
        >
          {copy.home.start}
        </Link>
      </section>
    </>
  );
}
