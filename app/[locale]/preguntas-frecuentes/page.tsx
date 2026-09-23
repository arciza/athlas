import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/lib/faq";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);

  return (
    <>
      <PageHero title={copy.faq.title} image="/media/hero-05.webp" />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <p className="text-[15px] leading-7 text-[#083677]/85">{copy.faq.intro}</p>
        <Accordion className="mt-10" defaultValue={[faqs[locale][0].q]}>
          {faqs[locale].map((item) => (
            <AccordionItem key={item.q} value={item.q} className="border-[#083677]/15">
              <AccordionTrigger className="py-4 text-left text-base font-medium">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-7 text-[#083677]/80">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
}
