import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";
import { cn } from "@/lib/utils";

function TravelPhoto({ src }: { src: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-[#FAFAFA]">
      <div className="relative aspect-[3/4]">
        <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    </figure>
  );
}

export default async function TravelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);

  return (
    <>
      <PageHero
        title={copy.travel.title}
        subtitle={copy.travel.different}
        image="/media/travel/surfing.jpg"
        action={
          <a
            href="#travel-contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 px-6 text-base font-semibold bg-[#FFC53A] text-[#292929] hover:bg-[#FFC53A]/90"
            )}
          >
            {copy.travel.bookNow}
          </a>
        }
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-3xl space-y-4 text-[15px] leading-7 text-[#292929]/85">
          <p>{copy.travel.lead}</p>
          <p>{copy.travel.custom}</p>
        </div>

        <h2 className="font-heading mt-12 text-2xl font-semibold">{copy.travel.slotTeamTitle}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <TravelPhoto src="/media/travel/surf-boards.jpg" />
          <TravelPhoto src="/media/travel/surf-lesson.jpg" />
          <TravelPhoto src="/media/travel/surf-practice.jpg" />
          <TravelPhoto src="/media/travel/surfing.jpg" />
        </div>

        <h2 className="font-heading mt-14 text-2xl font-semibold">{copy.travel.slotTurtlesTitle}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <TravelPhoto src="/media/travel/turtle-briefing.jpg" />
          <TravelPhoto src="/media/travel/beach-line.jpg" />
          <TravelPhoto src="/media/travel/verdiazul-bin.jpg" />
          <TravelPhoto src="/media/travel/verdiazul-fruit.jpg" />
        </div>
      </section>

      <section id="travel-contact" className="scroll-mt-20 bg-[#36348E] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold">{copy.travel.inquireLead}</h2>
            <a
              href="mailto:travel@athlas.org?subject=Athlas%20Travel"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-12 px-6 text-base font-semibold bg-[#FFC53A] text-[#292929] hover:bg-[#FFC53A]/90"
              )}
            >
              {copy.travel.inquireCta}
            </a>
          </div>
          <div className="rounded-2xl bg-white p-6 text-[#292929] ring-1 ring-white/10">
            <ContactForm locale={locale} variant="travel" subject="Athlas Travel" />
          </div>
        </div>
      </section>
    </>
  );
}
