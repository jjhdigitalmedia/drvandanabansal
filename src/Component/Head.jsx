import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import BannerMain from "../assets/Banners/BannerMain.jpg";
import qwq from "../assets/Banners/qwq.jpg";
import FirstBanner from "../assets/Banners/FirstBanner.png";
import "../Style/Style.css";

const Head = () => {
  const images = [
    qwq,
    BannerMain,
    FirstBanner
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  return;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // Call the nextImage function to move to the next slide
    }, 6000); // 2 seconds interval

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  
  return (
    <>
      <div className="relative h-auto mx-auto overflow-hidden">
        {/* Left Arrow Button */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-black z-10 bg-opacity-50 p-2 rounded-full text-xl"
          onClick={prevImage}
        >
          ‹
        </button>
        {/* Image Container with Sliding Effect */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        {/* Right Arrow Button */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full text-xl"
          onClick={nextImage}
        >
          ›
        </button>

        {/* Dot Indicators at the Bottom */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-rose-700' :  'bg-gray-200'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Head;
{/* ca377e color theme for website */ }