"use client";

import { useMemo, useState } from "react";
import { TravelPhotoCarousel } from "@/components/travel-photo-carousel";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { travelLocations, type TravelLocation } from "@/lib/travel-locations";

const LON_MIN = -85.941725;
const LON_MAX = -82.546196;
const LAT_MIN = 8.225028;
const LAT_MAX = 11.217119;
const WIDTH = 900;
const HEIGHT = 820;
const PAD_X = 110;
const PAD_Y = 88;

const outline: [number, number][] = [
  [-82.965783, 8.225028],
  [-83.508437, 8.446927],
  [-83.711474, 8.656836],
  [-83.596313, 8.830443],
  [-83.632642, 9.051386],
  [-83.909886, 9.290803],
  [-84.303402, 9.487354],
  [-84.647644, 9.615537],
  [-84.713351, 9.908052],
  [-84.97566, 10.086723],
  [-84.911375, 9.795992],
  [-85.110923, 9.55704],
  [-85.339488, 9.834542],
  [-85.660787, 9.933347],
  [-85.797445, 10.134886],
  [-85.791709, 10.439337],
  [-85.659314, 10.754331],
  [-85.941725, 10.895278],
  [-85.71254, 11.088445],
  [-85.561852, 11.217119],
  [-84.903003, 10.952303],
  [-84.673069, 11.082657],
  [-84.355931, 10.999226],
  [-84.190179, 10.79345],
  [-83.895054, 10.726839],
  [-83.655612, 10.938764],
  [-83.40232, 10.395438],
  [-83.015677, 9.992982],
  [-82.546196, 9.566135],
  [-82.932891, 9.476812],
  [-82.927155, 9.07433],
  [-82.719183, 8.925709],
  [-82.868657, 8.807266],
  [-82.829771, 8.626295],
  [-82.913176, 8.423517],
  [-82.965783, 8.225028],
];

function project(lon: number, lat: number) {
  const innerW = WIDTH - PAD_X * 2;
  const innerH = HEIGHT - PAD_Y * 2;
  return {
    x: PAD_X + ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * innerW,
    y: PAD_Y + ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * innerH,
  };
}

function outlinePath() {
  return outline
    .map(([lon, lat], index) => {
      const { x, y } = project(lon, lat);
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function labelPoint(location: TravelLocation, x: number, y: number) {
  switch (location.label) {
    case "left":
      return { x: x - 16, y: y + 4, anchor: "end" as const };
    case "right":
      return { x: x + 16, y: y + 4, anchor: "start" as const };
    case "top":
      return { x, y: y - 20, anchor: "middle" as const };
    case "bottom":
      return { x, y: y + 24, anchor: "middle" as const };
  }
}

export function TravelMap({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const [activeId, setActiveId] = useState<string | null>(null);
  const land = useMemo(() => `${outlinePath()} Z`, []);
  const active = travelLocations.find((location) => location.id === activeId) ?? null;

  return (
    <div>
      <h2 className="font-heading text-3xl font-semibold sm:text-4xl">{copy.travel.mapTitle}</h2>
      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#083677]/85">{copy.travel.mapLead}</p>

      <div className="mt-8 overflow-hidden rounded-[28px] bg-[#d7eef8] ring-1 ring-[#083677]/10">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-label={copy.travel.mapTitle}
          className="h-auto w-full"
        >
          <path d={land} fill="#247360" />
          {travelLocations.map((location) => {
            const { x, y } = project(location.lon, location.lat);
            const label = labelPoint(location, x, y);
            const selected = location.id === activeId;
            return (
              <g key={location.id}>
                <text
                  x={label.x}
                  y={label.y}
                  textAnchor={label.anchor}
                  className="font-heading"
                  fill="#b8283f"
                  fontSize="18"
                  fontWeight="700"
                >
                  {location.name[locale]}
                </text>
                <circle cx={x} cy={y} r={selected ? 15 : 13} fill="#ffffff" />
                <circle cx={x} cy={y} r={selected ? 7 : 6} fill="#b8283f" />
                <circle
                  cx={x}
                  cy={y}
                  r="22"
                  fill="transparent"
                  className="cursor-pointer"
                  onClick={() => setActiveId(location.id)}
                >
                  <title>{location.name[locale]}</title>
                </circle>
              </g>
            );
          })}
        </svg>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {travelLocations.map((location) => (
          <li key={location.id}>
            <button
              type="button"
              onClick={() => setActiveId(location.id)}
              className="rounded-full bg-[#083677]/6 px-3 py-1.5 text-sm font-medium text-[#083677] hover:bg-[#083677]/12"
            >
              {location.name[locale]}
            </button>
          </li>
        ))}
      </ul>

      <Sheet open={active !== null} onOpenChange={(open) => !open && setActiveId(null)}>
        <SheetContent side="bottom" className="max-h-[90vh] overflow-y-auto sm:max-w-none">
          {active ? (
            <>
              <SheetHeader>
                <SheetTitle className="font-heading text-3xl font-semibold text-[#083677]">
                  {active.name[locale]}
                </SheetTitle>
                <SheetDescription>{copy.travel.mapLead}</SheetDescription>
              </SheetHeader>
              <div className="px-4 pb-6">
                {active.photos.length > 0 ? (
                  <TravelPhotoCarousel
                    className="mt-0 max-w-none"
                    photos={active.photos}
                    previousLabel={locale === "es" ? "Foto anterior" : "Previous photo"}
                    nextLabel={locale === "es" ? "Foto siguiente" : "Next photo"}
                  />
                ) : (
                  <p className="text-[15px] leading-7 text-[#083677]/85">{copy.travel.mapEmpty}</p>
                )}
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  );
}
