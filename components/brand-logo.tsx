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
          "relative block h-12 w-12 shrink-0 overflow-hidden rounded-sm",
          inverted ? "bg-white/10" : "bg-[#083677]"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/logo.svg"
          alt=""
          className="absolute left-0 top-0 h-12 w-[125px] max-w-none"
        />
      </span>
      <span
        className={cn(
          "font-wordmark text-4xl font-semibold tracking-[0.08em]",
          inverted ? "text-white" : "text-[#083677]"
        )}
      >
        ATHLAS
      </span>
    </Link>
  );
}
