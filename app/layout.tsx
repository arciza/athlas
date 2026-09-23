import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Athlas – Becas Deportivas en USA",
    template: "%s · Athlas",
  },
  description:
    "Acceso para atletas talentosos a becas académicas y deportivas en universidades de Estados Unidos.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${poppins.variable} h-full scroll-smooth antialiased`}>
      <head>
        <link
          rel="preload"
          href="/fonts/DharmaGothicE_ExBold_I.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full bg-background font-sans text-foreground">{children}</body>
    </html>
  );
}
