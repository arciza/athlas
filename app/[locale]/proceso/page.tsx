import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);

  return (
    <>
      <PageHero title={copy.apply.title} subtitle={copy.apply.lead} image="/media/hero-03.webp" />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <ol className="grid gap-4">
          {copy.processSteps.map((step) => (
            <li key={step.n} className="rounded-2xl border border-[#083677]/10 p-5">
              <p className="text-sm font-semibold text-[#083677]">{step.n}</p>
              <h2 className="font-heading mt-2 text-2xl font-semibold sm:text-3xl">{step.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#083677]/75">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="rounded-2xl bg-[#ffffff] p-6 ring-1 ring-[#083677]/10">
          <ContactForm
            locale={locale}
            variant="athlete"
            subject={locale === "es" ? "Solicitud Athlas" : "Athlas application"}
          />
        </div>
      </section>
    </>
  );
}
