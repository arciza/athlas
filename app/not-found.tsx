import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-start justify-center px-4">
      <h1 className="font-heading text-3xl font-semibold">Página no encontrada</h1>
      <p className="mt-3 text-[#083677]/75">Esa ruta no existe en este sitio.</p>
      <Link
        href="/"
        className={cn(buttonVariants({ size: "lg" }), "mt-6 h-11 bg-[#083677] px-5 text-white")}
      >
        Volver al inicio
      </Link>
    </div>
  );
}
