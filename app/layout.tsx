import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Dharma Gothic E is not in the repo. Oswald is the condensed gothic stand-in
// until Ari uploads a licensed Dharma Gothic E file.
const heading = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading-face",
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
    <html
      lang="es"
      className={`${poppins.variable} ${heading.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">{children}</body>
    </html>
  );
}
