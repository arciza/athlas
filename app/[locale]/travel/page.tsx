import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";

function TravelPhoto({
  src,
  caption,
}: {
  src: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-[#FAFAFA]">
      <div className="relative aspect-[3/4]">
        <Image src={src} alt={caption} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <figcaption className="px-4 py-3 text-sm leading-6 text-[#292929]/75">{caption}</figcaption>
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
      <PageHero title={copy.travel.title} subtitle={copy.travel.subtitle} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#36348E] uppercase">
          {copy.travel.eyebrow}
        </p>
        <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-7 text-[#292929]/85">
          <p>{copy.travel.different}</p>
          <p>{copy.travel.lead}</p>
          <p>{copy.travel.custom}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-semibold">{copy.travel.slotDiscoverTitle}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#292929]/80">
              {copy.travel.slotDiscoverBody}
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold">{copy.travel.slotPlayTitle}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#292929]/80">{copy.travel.slotPlayBody}</p>
          </div>
        </div>

        <h2 className="font-heading mt-14 text-2xl font-semibold">{copy.travel.slotTeamTitle}</h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#292929]/80">{copy.travel.slotTeamBody}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <TravelPhoto src="/media/travel/surf-boards.jpg" caption={copy.travel.captionSurfBoards} />
          <TravelPhoto src="/media/travel/surf-lesson.jpg" caption={copy.travel.captionSurfLesson} />
          <TravelPhoto src="/media/travel/surf-practice.jpg" caption={copy.travel.captionSurfPractice} />
          <TravelPhoto src="/media/travel/surfing.jpg" caption={copy.travel.captionSurfing} />
        </div>

        <h2 className="font-heading mt-14 text-2xl font-semibold">{copy.travel.slotTurtlesTitle}</h2>
        <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#292929]/80">
          {copy.travel.slotTurtlesBody}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <TravelPhoto
            src="/media/travel/turtle-briefing.jpg"
            caption={copy.travel.captionTurtleBriefing}
          />
          <TravelPhoto src="/media/travel/beach-line.jpg" caption={copy.travel.captionBeachLine} />
          <TravelPhoto
            src="/media/travel/verdiazul-bin.jpg"
            caption={copy.travel.captionVerdiazulBin}
          />
          <TravelPhoto
            src="/media/travel/verdiazul-fruit.jpg"
            caption={copy.travel.captionVerdiazulFruit}
          />
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold">{copy.travel.inquireTitle}</h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[#292929]/80">
              {copy.travel.inquireLead}
            </p>
            <a
              href="mailto:info@athlas.org?subject=Athlas%20Travel"
              className="mt-6 inline-block text-sm font-medium text-[#36348E] underline-offset-4 hover:underline"
            >
              {copy.travel.inquireCta}
            </a>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-[#36348E]/10">
            <ContactForm locale={locale} variant="travel" subject="Athlas Travel" />
          </div>
        </div>
      </section>
    </>
  );
}
