import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sports } from "@/lib/data";
import { localePath } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { getLocale } from "@/lib/params";
import { cn } from "@/lib/utils";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await getLocale(params);
  const copy = t(locale);

  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-[#0d0c2b] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-mobile.jpg"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0d0c2b]/55" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24">
          <p className="text-sm font-semibold tracking-[0.28em] text-[#FFC53A] uppercase">
            {copy.home.heroTitle}
          </p>
          <h1 className="font-heading mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            {copy.home.heroSubtitle}
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={localePath(locale, "/proceso")}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-[#FFC53A] px-5 text-[#292929] hover:bg-[#FFC53A]/90"
              )}
            >
              {copy.home.start}
            </Link>
            <Link
              href={localePath(locale, "/#como-funciona")}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-white/40 bg-transparent px-5 text-white hover:bg-white/10"
              )}
            >
              {copy.home.howCta}
            </Link>
          </div>
          <p className="mt-8 text-xs text-white/60">{copy.home.videoCredit}</p>
        </div>
      </section>

      <section className="bg-[#CDD4FB]/35 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#36348E] uppercase">
              {copy.home.servicesEyebrow}
            </p>
            <p className="mt-4 text-lg leading-7 text-[#292929]/80">{copy.home.servicesLead}</p>
            <Link
              href={localePath(locale, "/proceso")}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 h-11 bg-[#36348E] px-5 text-white hover:bg-[#36348E]/90"
              )}
            >
              {copy.home.start}
            </Link>
          </div>
          <div className="grid gap-4">
            {[
              [copy.home.service1Title, copy.home.service1Body],
              [copy.home.service2Title, copy.home.service2Body],
              [copy.home.service3Title, copy.home.service3Body],
            ].map(([title, body]) => (
              <Card key={title} className="bg-white">
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-[#36348E]">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-[15px] leading-7 text-[#292929]/80">{body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/media/team-1.webp"
              alt=""
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-4xl font-semibold text-[#292929]">{copy.home.whoTitle}</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-7 text-[#292929]/80">
              <p>{copy.home.whoP1}</p>
              <p>{copy.home.whoP2}</p>
              <p>{copy.home.whoP3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#36348E] uppercase">
            {copy.home.purposeEyebrow}
          </p>
          <h2 className="font-heading mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
            {copy.home.purposeLead}
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-[#292929]/80">{copy.home.purposeBody}</p>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#292929]/80">{copy.home.purposeClose}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-[#36348E]">{copy.home.missionTitle}</CardTitle>
              </CardHeader>
              <CardContent className="leading-7 text-[#292929]/80">{copy.home.missionBody}</CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-[#36348E]">{copy.home.visionTitle}</CardTitle>
              </CardHeader>
              <CardContent className="leading-7 text-[#292929]/80">{copy.home.visionBody}</CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">{copy.home.processTitle}</h2>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {copy.processSteps.map((step) => (
              <li key={step.n} className="rounded-2xl bg-[#36348E] p-5 text-white">
                <p className="text-sm font-semibold text-[#FFC53A]">{step.n}</p>
                <h3 className="font-heading mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/80">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#CDD4FB]/25 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl font-semibold">{copy.home.leadersTitle}</h2>
            <p className="mt-5 leading-7 text-[#292929]/80">{copy.home.leadersP1}</p>
            <p className="mt-4 leading-7 text-[#292929]/80">{copy.home.leadersP2}</p>
            <Link
              href={localePath(locale, "/entrenadores")}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 h-11 bg-[#36348E] px-5 text-white hover:bg-[#36348E]/90"
              )}
            >
              {copy.home.talk}
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/media/recruiters.webp"
              alt=""
              width={1200}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
          {[
            ["2000", copy.home.statUnis],
            ["20", copy.home.statSports],
            ["100", copy.home.statCountries],
          ].map(([stat, label]) => (
            <div key={stat} className="rounded-2xl bg-white p-6 ring-1 ring-[#36348E]/10">
              <p className="font-heading text-4xl font-semibold text-[#36348E]">{stat}</p>
              <p className="mt-2 text-sm leading-6 text-[#292929]/75">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">{copy.home.sportsTitle}</h2>
          <p className="mt-3 max-w-2xl text-[#292929]/75">{copy.home.sportsLead}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sports.map((sport) => (
              <Link
                key={sport.slug}
                href={localePath(locale, `/becas/${sport.slug}`)}
                className="group overflow-hidden rounded-2xl bg-[#0d0c2b] text-white"
              >
                <div className="relative h-44">
                  <Image
                    src={sport.image}
                    alt=""
                    fill
                    className="object-cover opacity-70 transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="px-4 py-4 font-medium">{sport.title[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold">{copy.home.scholarshipsTitle}</h2>
            <div className="mt-5 space-y-4 leading-7 text-[#292929]/80">
              <p>{copy.home.scholarshipsP1}</p>
              <p>{copy.home.scholarshipsP2}</p>
              <p>{copy.home.scholarshipsP3}</p>
            </div>
            <Link
              href={localePath(locale, "/fundacion")}
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-6 h-11 bg-[#FFC53A] px-5 text-[#292929] hover:bg-[#FFC53A]/90"
              )}
            >
              {copy.nav.donate}
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/media/hero-03.webp"
              alt=""
              width={1000}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
            {copy.home.testimonialsTitle}
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#292929]/75">{copy.home.testimonialsLead}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {copy.testimonials.map((item) => (
              <Card key={item.name} className="overflow-hidden bg-white pt-0">
                <div className="relative h-56">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="33vw" />
                </div>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="leading-7 text-[#292929]/80">{item.quote}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#36348E] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold">{copy.home.donationsTitle}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/80">{copy.home.donationsLead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={localePath(locale, "/fundacion")}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-[#FFC53A] px-5 text-[#292929] hover:bg-[#FFC53A]/90"
              )}
            >
              {copy.nav.donate}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
