import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import speaker1 from "../assets/speaker1.jpg";
import IVFvideo from '../assets/videos/IVFvideo.mp4';
import lab from "../assets/lab.png";
import patientweb from "../assets/patientweb.png";

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


export const Rewards = () => {
  const slides = [
    {
      url: "https://i.postimg.cc/mg2tNwfX/hospital-Profile-Website0001.jpg",
    },
    {
      url: 'https://i.postimg.cc/vHXmBVgW/hospital-Profile-Website0002.jpg',
    },
    {
      url: 'https://i.postimg.cc/q76BjDmL/hospital-Profile-Website0003.jpg',
    },

    {
      url: 'https://i.postimg.cc/LXz9MYFg/hospital-Profile-Website0004.jpg',
    },
    {
      url: 'https://i.postimg.cc/W3RNKmCP/hospital-Profile-Website0005.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex text-xs justify-center flex-wrap bg-transparent lg:w-11/12 mx-auto -mt-20">

      {/* <div data-aos='fade-up' class="flex  flex-col justify-center rounded-3xl items-center border-8 border-white bg-gray-100 m-2 min-hscreen"> */}
        <Link to="guestspeaker" class="bg-whie m-2 rounded-2xl shadow-lg overflow-hidden max-w-72">
          <img
            src={speaker1}
            alt="Mountain"
            class="w-full h-60 object-cover border-8 border-white rounded-2xl"
          />
          <div class="p-4">
            <h2 class="text-xl font-bold text-gray-800 mb-2">
              Guest Speaker
            </h2>
            <p class="text-gray-700  leading-tight mb-4">
              Rrenowned gynecologist who has gained international recognition for her expertise and contributions to women's health. With a distinguished career spanning several decades, she has become a sought-after guest speaker at conferences and seminars around the globe.
            </p>
          </div>
        </Link>
      {/* </div> */}

      {/* <div data-aos='fade-up' class="flex  flex-col justify-center rounded-3xl items-center border-8 border-white bg-gray-100 m-2 min-hscreen"> */}
        <Link to="guestspeaker" class="bg-white m-2 rounded-2xl shadow-lg overflow-hidden max-w-72">
          <img
            src={lab}
            alt="Mountain"
            class="w-full h-60 object-cover border-8 border-white rounded-2xl"
          />
          <div class="p-4">
            <h2 class="text-xl font-bold text-gray-800 mb-2">
              IVF Labs
            </h2>
            <p class="text-gray-700 leading-tight mb-4">
              Dr. Vandana Bansal In simple terms IVF means fertilisation outside the body. After ovarian stimulation, eggs are collected from the women's ovaries and then fertilized by the husband's sperms in a petri dish or a test tube in a controlled laboratory environment.
            </p>
          </div>
        </Link >
      {/* </div> */}

      {/* <div data-aos='fade-up' class="flex flex-col justify-center rounded-3xl items-center border-8 border-white bg-gray-100 m-2 min-hscreen"> */}
        <Link to='patientsreview' class="bg-white m-2 rounded-2xl shadow-lg overflow-hidden  max-w-72">
          <img
            src={patientweb}
            alt="Mountain"
            class="w-full h-60 object-cover border-8 border-white rounded-2xl"
          />
          <div class="p-4 pb-10">
            <h2 class="text-xl font-bold text-gray-800 mb-2">
              Patient's satisfaction
            </h2>
            <p class="text-gray-700 leading-tight mb-4">
              At our healthcare facility, patient satisfaction is at the core of everything we do. We believe that providing high-quality care goes beyond medical treatments and extends to ensuring a positive, and supportive experience for every patient.
            </p>
          </div>
        </Link>
      {/* </div> */}

      <video data-aos='flip-left' class="h-11/12 m-auto w-11/12 border-8 border-rose-100 rounded-3xl " controls>
        <source
          src={IVFvideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* <embed className="h-96 md:h-screen" src={HospitalProfile} width="500" height="375"
        type="application/pdf"></embed> */}


      <div className='max-w-[350px] h-[520px] border-2 rounded-2xl border-rose-200 w-full m-auto py-0 px-0 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};