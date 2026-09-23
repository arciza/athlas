import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";

export default async function CoachesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);

  return (
    <>
      <PageHero title={copy.coaches.title} image="/media/recruiters.webp" />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="space-y-4 text-[15px] leading-7 text-[#083677]/85">
          <p>{copy.coaches.p1}</p>
          <p>{copy.coaches.p2}</p>
          <p>{copy.coaches.p3}</p>
        </div>
        <div className="rounded-2xl bg-[#ffffff] p-6 ring-1 ring-[#083677]/10">
          <h2 className="font-heading text-2xl font-semibold">{copy.coaches.formTitle}</h2>
          <p className="mt-3 mb-6 text-sm leading-6 text-[#083677]/75">{copy.coaches.formLead}</p>
          <ContactForm
            locale={locale}
            variant="coach"
            subject={locale === "es" ? "Consulta de entrenador" : "Coach inquiry"}
          />
        </div>
      </section>
    </>
  );
}
