import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        speed={700}
        slidesPerView={1}
        grabCursor={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 5,
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
    </div>
  );
};

export default Head;