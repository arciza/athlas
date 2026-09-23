import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function BrandLogo({
  locale,
  inverted = false,
  className,
}: {
  locale: Locale;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={localePath(locale, "/")}
      className={cn("flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "relative block h-11 w-11 overflow-hidden rounded-sm sm:h-12 sm:w-12",
          inverted ? "bg-white/10" : "bg-[#083677]"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/logo.svg"
          alt=""
          className="absolute left-0 top-0 h-11 w-[115px] max-w-none sm:h-12 sm:w-[125px]"
        />
      </span>
      <span
        className={cn(
          "font-heading text-3xl font-semibold tracking-[0.12em] sm:text-4xl",
          inverted ? "text-white" : "text-[#083677]"
        )}
      >
        ATHLAS
      </span>
    </Link>
  );
}
