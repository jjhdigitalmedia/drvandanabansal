import React, { useState } from "react";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "../Style/Style.css";

import VaginalLaserTreatment from "../assets/Banners/VaginalLaserTreatment.jpg";
import LaparoscopicSurgery from "../assets/Banners/LaparoscopicSurgery.jpg";
import HysteroscopySurgery from "../assets/Banners/HysteroscopySurgery.jpg";
import DrVandanaIntro from "../assets/Banners/DrVandanaIntro.png";
import InfertilityIVF from "../assets/Banners/InfertilityIVF.png";
import AestheticGynae from "../assets/Banners/AestheticGynae.png";
import BannerMainWebsite1 from "../assets/Banners/BannerMainWebsite1.png";

const Head = () => {
  const images = [
    BannerMainWebsite1,
    DrVandanaIntro,
    InfertilityIVF,
    AestheticGynae,
    HysteroscopySurgery,
    VaginalLaserTreatment,
    LaparoscopicSurgery,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">

      {/* ================= SLIDER ================= */}

      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={700}
        slidesPerView={1}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto select-none"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ================= CUSTOM DOTS ================= */}

      <div className="custom-pagination">

        {[-2, -1, 0, 1, 2].map((offset) => {
          const total = images.length;

          const dotIndex =
            (activeIndex + offset + total) % total;

          let dotClass = "small-dot";

          if (offset === 0) {
            dotClass = "active-dot";
          } else if (Math.abs(offset) === 1) {
            dotClass = "medium-dot";
          }

          return (
            <button
              key={offset}
              type="button"
              className={dotClass}
              onClick={() => {
                // Dot click intentionally kept simple
              }}
              aria-label={`Slide ${dotIndex + 1}`}
            />
          );
        })}

      </div>
    </div>
  );
};

export default Head;