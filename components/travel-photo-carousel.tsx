"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TravelPhotoCarousel({
  photos,
  previousLabel,
  nextLabel,
}: {
  photos: readonly string[];
  previousLabel: string;
  nextLabel: string;
}) {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full max-w-2xl">
      <CarouselContent>
        {photos.map((src) => (
          <CarouselItem key={src}>
            <figure className="overflow-hidden rounded-2xl bg-[#FAFAFA]">
              <div className="relative aspect-[3/4]">
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="left-3 z-10 size-10 border-0 bg-white/90 text-[#36348E] shadow-sm hover:bg-white"
        aria-label={previousLabel}
      />
      <CarouselNext
        className="right-3 z-10 size-10 border-0 bg-white/90 text-[#36348E] shadow-sm hover:bg-white"
        aria-label={nextLabel}
      />
    </Carousel>
  );
}
