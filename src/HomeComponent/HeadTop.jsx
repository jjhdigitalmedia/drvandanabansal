import React from "react";
import "aos/dist/aos.css";
import Banner02Final from "/public/Banner02Final.png";
import BannerFinal from "/public/BannerFinal.png";
import vandanabgphoto from "/public/vandanabgphoto.jpg";
import banner03final from "/public/banner03final.png";
import slide02 from "/public/slide02.jpg";
import banner05 from "/public/banner05.png";
import banner06 from "/public/banner06.png";
import slide04 from "/public/slide04.jpg";
import slide05 from "/public/slide05.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
// import IVFvideo from '/public/videos/IVFvideo.mp4';

const HeadTop = () => {
  const settings = {
    dots: true,             // Show dots navigation
    infinite: true,         // Loop the slides infinitely
    speed: 500,             // Transition speed
    slidesToShow: 1,        // Number of images shown at once
    slidesToScroll: 1,      // Number of images to scroll per swipe
    autoplay: true,         // Auto-play functionality
    autoplaySpeed: 3000,    // Speed for auto-play in ms
  };

  const images = [
    Banner02Final,
    BannerFinal,
    vandanabgphoto,
    banner03final,
    slide05
  ];

  return (
    <div className='w-full mx-auto'>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <Image
            src={src}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', objectFit:'cover' }} //
            alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeadTop;