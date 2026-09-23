import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { TravelPhotoCarousel } from "@/components/travel-photo-carousel";
import { buttonVariants } from "@/components/ui/button";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";
import { cn } from "@/lib/utils";

const teamPhotos = [
  "/media/travel/surf-boards.jpg",
  "/media/travel/surf-lesson.jpg",
  "/media/travel/surf-practice.jpg",
  "/media/travel/surfing.jpg",
] as const;

const verdiazulPhotos = [
  "/media/travel/turtle-briefing.jpg",
  "/media/travel/beach-line.jpg",
  "/media/travel/verdiazul-bin.jpg",
  "/media/travel/verdiazul-fruit.jpg",
] as const;

function TravelPhoto({ src }: { src: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-[#FAFAFA]">
      <div className="relative aspect-[3/4]">
        <Image src={src} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    </figure>
  );
}

function TravelPhotos({
  photos,
  previousLabel,
  nextLabel,
}: {
  photos: readonly string[];
  previousLabel: string;
  nextLabel: string;
}) {
  return (
    <>
      <TravelPhotoCarousel
        className="md:hidden"
        photos={photos}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
      />
      <div className="mt-6 hidden gap-6 md:grid md:grid-cols-2">
        {photos.map((src) => (
          <TravelPhoto key={src} src={src} />
        ))}
      </div>
    </>
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
        <TravelPhotos
          photos={teamPhotos}
          previousLabel={locale === "es" ? "Foto anterior" : "Previous photo"}
          nextLabel={locale === "es" ? "Foto siguiente" : "Next photo"}
        />

        <h2 className="font-heading mt-14 text-2xl font-semibold">{copy.travel.slotTurtlesTitle}</h2>
        <TravelPhotos
          photos={verdiazulPhotos}
          previousLabel={locale === "es" ? "Foto anterior" : "Previous photo"}
          nextLabel={locale === "es" ? "Foto siguiente" : "Next photo"}
        />
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
