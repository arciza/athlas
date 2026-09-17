import Image from "next/image";

export function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#1c1b4a] text-white">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#1c1b4a]/55" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="font-heading max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p> : null}
      </div>
    </section>
  );
}
