import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { PhotoSlot } from "@/components/photo-slot";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";

export default async function TravelPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);
  const eyebrow = copy.travel.photosLead;

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

        <PhotoSlot
          className="mt-10 min-h-72"
          eyebrow={eyebrow}
          label={copy.travel.slotHero}
          caption={copy.travel.photosNote}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-semibold">{copy.travel.slotDiscoverTitle}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#292929]/80">
              {copy.travel.slotDiscoverBody}
            </p>
            <PhotoSlot className="mt-5" eyebrow={eyebrow} label={copy.travel.slotDiscoverTitle} />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold">{copy.travel.slotTeamTitle}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#292929]/80">{copy.travel.slotTeamBody}</p>
            <PhotoSlot className="mt-5" eyebrow={eyebrow} label={copy.travel.slotTeamTitle} />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold">{copy.travel.slotPlayTitle}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#292929]/80">{copy.travel.slotPlayBody}</p>
            <PhotoSlot className="mt-5" eyebrow={eyebrow} label={copy.travel.slotPlayTitle} />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold">{copy.travel.slotTurtlesTitle}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#292929]/80">
              {copy.travel.slotTurtlesBody}
            </p>
            <PhotoSlot className="mt-5" eyebrow={eyebrow} label={copy.travel.slotTurtlesTitle} />
          </div>
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
