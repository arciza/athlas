import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  title,
  subtitle,
  image,
  action,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  action?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#083677] text-white">
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
      ) : null}
      <div className={`absolute inset-0 ${image ? "bg-[#083677]/55" : "bg-[#083677]"}`} />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="font-heading max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p> : null}
        {action ? <div className="mt-8">{action}</div> : null}
      </div>
    </section>
  );
}
