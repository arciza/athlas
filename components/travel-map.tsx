"use client";

import { useMemo, useState, type ComponentType } from "react";
import {
  Droplets,
  Mountain,
  MountainSnow,
  TreePalm,
  Trees,
  Turtle,
  WavesHorizontal,
  Wind,
  type LucideProps,
} from "lucide-react";
import { TravelPhotoCarousel } from "@/components/travel-photo-carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/messages";
import {
  travelLocations,
  type TravelIcon,
  type TravelLocation,
} from "@/lib/travel-locations";

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

const icons: Record<TravelIcon, ComponentType<LucideProps>> = {
  turtle: Turtle,
  surf: WavesHorizontal,
  wind: Wind,
  waterfall: Droplets,
  volcano: Mountain,
  forest: Trees,
  crater: MountainSnow,
  wildlife: TreePalm,
};

function project(lon: number, lat: number) {
  const innerW = WIDTH - PAD_X * 2;
  const innerH = HEIGHT - PAD_Y * 2;
  return {
    x: PAD_X + ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * innerW,
    y: PAD_Y + ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * innerH,
  };
}

function outlinePath() {
  return `${outline
    .map(([lon, lat], index) => {
      const { x, y } = project(lon, lat);
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ")} Z`;
}

function labelClass(location: TravelLocation) {
  switch (location.label) {
    case "left":
      return "right-full mr-2 top-1/2 -translate-y-1/2 text-right";
    case "right":
      return "left-full ml-2 top-1/2 -translate-y-1/2 text-left";
    case "top":
      return "bottom-full mb-2 left-1/2 -translate-x-1/2 text-center";
    case "bottom":
      return "top-full mt-2 left-1/2 -translate-x-1/2 text-center";
  }
}

export function TravelMap({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const [activeId, setActiveId] = useState<string | null>(null);
  const land = useMemo(() => outlinePath(), []);
  const active = travelLocations.find((location) => location.id === activeId) ?? null;
  const place = active ? copy.travel.places[active.id as keyof typeof copy.travel.places] : null;

  return (
    <div>
      <h2 className="font-heading text-3xl font-semibold sm:text-4xl">{copy.travel.mapTitle}</h2>
      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#083677]/85">{copy.travel.mapLead}</p>

      <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#e7f3f8] ring-1 ring-[#083677]/10">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-label={copy.travel.mapTitle}
          className="h-auto w-full"
        >
          <path d={land} fill="#8fbc5a" stroke="#6f9d3f" strokeWidth="3" strokeLinejoin="round" />
          <text
            x="70"
            y="430"
            className="font-heading"
            fill="#7aa7b8"
            fontSize="18"
            transform="rotate(-90 70 430)"
          >
            {copy.travel.oceanPacific}
          </text>
          <text x="620" y="90" className="font-heading" fill="#7aa7b8" fontSize="18">
            {copy.travel.oceanCaribbean}
          </text>
        </svg>

        {travelLocations.map((location) => {
          const { x, y } = project(location.lon, location.lat);
          const Icon = icons[location.icon];
          const selected = location.id === activeId;
          return (
            <button
              key={location.id}
              type="button"
              onClick={() => setActiveId(location.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(x / WIDTH) * 100}%`, top: `${(y / HEIGHT) * 100}%` }}
              aria-label={location.name[locale]}
            >
              <span
                className={`flex size-12 items-center justify-center rounded-full bg-white text-[#083677] shadow-md ring-1 ring-[#083677]/10 ${
                  selected ? "ring-2 ring-[#b8283f]" : ""
                }`}
              >
                <Icon className="size-6" strokeWidth={1.75} />
              </span>
              <span
                className={`absolute whitespace-nowrap font-heading text-xs font-semibold tracking-wide text-[#3d4a2a] uppercase sm:text-sm ${labelClass(location)}`}
              >
                {location.name[locale]}
              </span>
            </button>
          );
        })}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActiveId(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
          {active && place ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading text-3xl font-semibold text-[#083677]">
                  {active.name[locale]}
                </DialogTitle>
                <DialogDescription className="text-[15px] leading-7 text-[#083677]/85">
                  {place.description}
                </DialogDescription>
              </DialogHeader>
              <div>
                <p className="font-heading text-xl font-semibold text-[#083677]">
                  {copy.travel.mapActivities}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-7 text-[#083677]/85">
                  {place.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
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
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
