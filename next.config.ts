import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/fundacion-athlas", destination: "/fundacion", permanent: false },
      { source: "/en/fundacion-athlas", destination: "/en/fundacion", permanent: false },
      { source: "/faq", destination: "/preguntas-frecuentes", permanent: false },
      { source: "/en/faq", destination: "/en/preguntas-frecuentes", permanent: false },
      { source: "/politica-de-privacidad", destination: "/privacidad", permanent: false },
      { source: "/en/politica-de-privacidad", destination: "/en/privacidad", permanent: false },
      { source: "/becas-de-futbol-en-usa", destination: "/becas/futbol", permanent: false },
      { source: "/en/becas-de-futbol-en-usa", destination: "/en/becas/futbol", permanent: false },
      { source: "/becas-de-atletismo-en-usa", destination: "/becas/atletismo", permanent: false },
      { source: "/en/becas-de-atletismo-en-usa", destination: "/en/becas/atletismo", permanent: false },
      { source: "/becas-de-natacion-en-usa", destination: "/becas/natacion", permanent: false },
      { source: "/en/becas-de-natacion-en-usa", destination: "/en/becas/natacion", permanent: false },
      { source: "/becas-de-golf-en-usa", destination: "/becas/golf", permanent: false },
      { source: "/en/becas-de-golf-en-usa", destination: "/en/becas/golf", permanent: false },
      { source: "/becas-de-baloncesto-en-usa", destination: "/becas/baloncesto", permanent: false },
      { source: "/en/becas-de-baloncesto-en-usa", destination: "/en/becas/baloncesto", permanent: false },
      { source: "/becas-de-beisbol-en-usa", destination: "/becas/beisbol", permanent: false },
      { source: "/en/becas-de-beisbol-en-usa", destination: "/en/becas/beisbol", permanent: false },
      { source: "/entrenadores-deportivos-en-usa", destination: "/entrenadores", permanent: false },
      { source: "/en/entrenadores-deportivos-en-usa", destination: "/en/entrenadores", permanent: false },
      { source: "/fabiana-aguilar", destination: "/atletas/fabiana-aguilar", permanent: false },
      { source: "/en/fabiana-aguilar", destination: "/en/atletas/fabiana-aguilar", permanent: false },
      { source: "/genesis-bolandi", destination: "/atletas/genesis-bolandi", permanent: false },
      { source: "/en/genesis-bolandi", destination: "/en/atletas/genesis-bolandi", permanent: false },
      { source: "/jurgen-mongalo", destination: "/atletas/jurgen-mongalo", permanent: false },
      { source: "/en/jurgen-mongalo", destination: "/en/atletas/jurgen-mongalo", permanent: false },
      { source: "/gary-altamirano", destination: "/atletas/gary-altamirano", permanent: false },
      { source: "/en/gary-altamirano", destination: "/en/atletas/gary-altamirano", permanent: false },
      { source: "/reichell-ramirez", destination: "/atletas/reichell-ramirez", permanent: false },
      { source: "/en/reichell-ramirez", destination: "/en/atletas/reichell-ramirez", permanent: false },
    ];
  },
};

export default nextConfig;
