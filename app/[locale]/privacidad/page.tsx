import { PageHero } from "@/components/page-hero";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";
import { privacySections } from "@/lib/privacy";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);

  return (
    <>
      <PageHero title={copy.privacy.title} subtitle={copy.privacy.updated} image="/media/team-cover.webp" />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        {privacySections[locale].map((section) => (
          <section key={section.title} className="mt-10 first:mt-0">
            <h2 className="font-heading text-2xl font-semibold">{section.title}</h2>
            <p className="mt-3 text-[15px] leading-7 text-[#083677]/85">{section.body}</p>
            {"bullets" in section && section.bullets ? (
              <ul className="mt-4 list-disc space-y-3 pl-5 text-[15px] leading-7 text-[#083677]/85">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>
    </>
  );
}
