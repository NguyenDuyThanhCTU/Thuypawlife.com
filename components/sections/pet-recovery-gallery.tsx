"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { CollectionProps } from "@/assets/props/Props";

type PetRecoveryImage = {
  src: string;
  alt: string;
};

export function PetRecoveryGallery({
  Collections,
}: {
  Collections: CollectionProps[];
}) {
  const ImgData = Collections.filter((item) => item.type === "hinh-anh");

  return (
    <section className="bg-sky-50/60 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-sky-700">
            Bộ sưu tập thú cưng
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Những bé cún đã được chăm sóc tại phòng khám
          </h2>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Grid, Navigation]}
            loop={true}
            spaceBetween={20}
            grid={{
              rows: 3,
              fill: "row",
            }}
            slidesPerView={4}
            navigation
            className="pet-recovery-swiper pb-12"
          >
            {ImgData.map((image) => (
              <SwiperSlide key={image.image}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-sm">
                  <Image
                    src={image.image}
                    alt={image.image}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
