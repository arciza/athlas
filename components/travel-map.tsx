"use client";

import { useState, type ComponentType } from "react";
import {
  Droplets,
  Fish,
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
import { MAP, projectLonLat } from "@/lib/travel-map-geo";
import { t } from "@/lib/messages";
import {
  travelLocations,
  type TravelIcon,
  type TravelLocation,
} from "@/lib/travel-locations";

const icons: Record<TravelIcon, ComponentType<LucideProps>> = {
  turtle: Turtle,
  surf: WavesHorizontal,
  wind: Wind,
  waterfall: Droplets,
  volcano: Mountain,
  forest: Trees,
  crater: MountainSnow,
  wildlife: TreePalm,
  palm: TreePalm,
  fish: Fish,
};

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
  const active = travelLocations.find((location) => location.id === activeId) ?? null;
  const place = active ? copy.travel.places[active.id as keyof typeof copy.travel.places] : null;
  const nicaragua = projectLonLat(-85.2, 11.28);
  const panama = projectLonLat(-82.15, 8.22);
  const pacific = projectLonLat(-86.35, 9.15);
  const caribbean = projectLonLat(-82.35, 10.55);

  return (
    <div>
      <h2 className="font-heading text-3xl font-semibold sm:text-4xl">{copy.travel.mapTitle}</h2>
      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#083677]/85">{copy.travel.mapLead}</p>

      <div className="relative mt-8 overflow-hidden rounded-[28px] bg-[#f4f4f4] ring-1 ring-[#083677]/10">
        <svg
          viewBox={`0 0 ${MAP.width} ${MAP.height}`}
          role="img"
          aria-label={copy.travel.mapTitle}
          className="h-auto w-full"
        >
          <path d={MAP.nicaragua} fill="#ddd4c6" stroke="#8a7f70" strokeWidth="1.1" strokeLinejoin="round" />
          <path d={MAP.panama} fill="#ddd4c6" stroke="#8a7f70" strokeWidth="1.1" strokeLinejoin="round" />
          <path d={MAP.costaRica} fill="#c4c4c4" stroke="#4a4a4a" strokeWidth="1.6" strokeLinejoin="round" />
          <text x={nicaragua.x} y={nicaragua.y} textAnchor="middle" fill="#8a8a8a" fontSize="16" className="font-heading">
            {copy.travel.countryNicaragua}
          </text>
          <text x={panama.x} y={panama.y} textAnchor="middle" fill="#8a8a8a" fontSize="16" className="font-heading">
            {copy.travel.countryPanama}
          </text>
          <text x={pacific.x} y={pacific.y} textAnchor="middle" fill="#9aa7ad" fontSize="14" className="font-heading">
            {copy.travel.oceanPacific}
          </text>
          <text x={caribbean.x} y={caribbean.y} textAnchor="middle" fill="#9aa7ad" fontSize="14" className="font-heading">
            {copy.travel.oceanCaribbean}
          </text>
        </svg>

        {travelLocations.map((location) => {
          const point = projectLonLat(location.lon, location.lat);
          const x = point.x + (location.nudge?.x ?? 0);
          const y = point.y + (location.nudge?.y ?? 0);
          const Icon = icons[location.icon];
          const selected = location.id === activeId;
          return (
            <button
              key={location.id}
              type="button"
              onClick={() => setActiveId(location.id)}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(x / MAP.width) * 100}%`, top: `${(y / MAP.height) * 100}%` }}
              aria-label={location.name[locale]}
            >
              <span
                className={`flex size-11 items-center justify-center rounded-full bg-white text-[#083677] shadow-md ring-1 ring-[#083677]/15 sm:size-12 ${
                  selected ? "ring-2 ring-[#b8283f]" : ""
                }`}
              >
                <Icon className="size-5 sm:size-6" strokeWidth={1.75} />
              </span>
              <span
                className={`absolute whitespace-nowrap font-heading text-[11px] font-semibold tracking-wide text-[#3f3f3f] uppercase sm:text-xs ${labelClass(location)}`}
              >
                {location.name[locale]}
              </span>
            </button>
          );
        })}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActiveId(null)}>
        <DialogContent className="w-[min(92vw,26rem)] max-w-none gap-3 overflow-hidden p-4 sm:max-w-none">
          {active && place ? (
            <>
              <DialogHeader className="gap-1.5">
                <DialogTitle className="font-heading text-2xl leading-none font-semibold text-[#083677]">
                  {active.name[locale]}
                </DialogTitle>
                <DialogDescription className="text-sm leading-5 text-[#083677]/80">
                  {place.description}
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-1.5">
                {place.activities.map((activity) => (
                  <span
                    key={activity}
                    className="rounded-full bg-[#083677]/8 px-2.5 py-1 text-xs font-medium text-[#083677]"
                  >
                    {activity}
                  </span>
                ))}
              </div>
              {active.photos.length > 0 ? (
                <TravelPhotoCarousel
                  compact
                  className="mt-0 max-w-none"
                  photos={active.photos}
                  previousLabel={locale === "es" ? "Foto anterior" : "Previous photo"}
                  nextLabel={locale === "es" ? "Foto siguiente" : "Next photo"}
                />
              ) : (
                <p className="rounded-xl bg-[#083677]/5 px-3 py-4 text-sm leading-5 text-[#083677]/80">
                  {copy.travel.mapEmpty}
                </p>
              )}
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
