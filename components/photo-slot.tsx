export function PhotoSlot({
  eyebrow,
  label,
  caption,
  className = "",
}: {
  eyebrow: string;
  label: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure
      className={`flex aspect-[16/10] flex-col items-center justify-center rounded-2xl border border-dashed border-[#36348E]/30 bg-[#CDD4FB]/30 px-6 text-center ${className}`}
    >
      <p className="text-xs font-semibold tracking-[0.16em] text-[#36348E] uppercase">
        {eyebrow}
      </p>
      <figcaption className="mt-2 max-w-sm">
        <p className="font-heading text-lg font-semibold text-[#292929]">{label}</p>
        {caption ? <p className="mt-2 text-sm leading-6 text-[#292929]/70">{caption}</p> : null}
      </figcaption>
    </figure>
  );
}
