import React from "react";
import { Link } from "react-router-dom";
import speaker1 from "../assets/speaker1.jpg";
import IVFvideo from'../assets/videos/IVFvideo.mp4';
import lab from "../assets/lab.png";
import patientweb from "../assets/icons/patientweb.png";

export const Rewards = () => {
  return (
    // <div className="text-center border-4 w-11/12 mx-auto flex justify-right -mt-24 mb-5 overflow-x-scroll md:justify-center ">
    <div className="flex justify-center flex-wrap bg-transparent lg:w-11/12 mx-auto -mt-20">

      <div data-aos='fade-up' class="flex flex-col justify-center rounded-3xl items-center border-8 border-white  bg-gray-100 m-2 min-hscreen">
        <Link to="guestspeaker" class="bg-white rounded-2xl shadow-lg overflow-hidden  max-w-80 w-full">
          <img
            src={speaker1}
            alt="Mountain"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              Guest Speaker
            </h2>
            <p class="text-gray-700 leading-tight mb-4">
              Rrenowned gynecologist who has gained international recognition for her expertise and contributions to women's health. With a distinguished career spanning several decades, she has become a sought-after guest speaker at conferences and seminars around the globe.
            </p>
            {/* <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                  class="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span class="text-gray-800 font-semibold">John Doe</span>
              </div>
              <span class="text-gray-600">2 hours ago</span>
            </div> */}
          </div>
        </Link>
      </div>

      <div data-aos='fade-up' class="flex flex-col justify-center rounded-3xl items-center border-8 border-white bg-gray-100 m-2 min-hscreen">
        <Link to='guestspeaker' class="bg-white rounded-2xl shadow-lg overflow-hidden max-w-80 w-full">
          <img
            src={lab}
            alt="Mountain"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              IVF Treatments
            </h2>
            <p class="text-gray-700 leading-tight mb-4">
              Dr. Vandana Bansal In simple terms IVF means fertilisation outside the body. After ovarian stimulation, eggs are collected from the women's ovaries and then fertilized by the husband's sperms in a petri dish or a test tube in a controlled laboratory environment.
            </p>
            {/* <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                  class="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span class="text-gray-800 font-semibold">John Doe</span>
              </div>
              <span class="text-gray-600">2 hours ago</span>
            </div> */}
          </div>
        </Link >
      </div>

      <div data-aos='fade-up' class="flex flex-col justify-center rounded-3xl items-center border-8 border-white bg-gray-100 m-2 min-hscreen">
        <Link to='patientsreview' class="bg-white rounded-2xl shadow-lg overflow-hidden  max-w-80 w-full">
          <img
            src={patientweb}
            alt="Mountain"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              Patient's satisfaction
            </h2>
            <p class="text-gray-700 leading-tight mb-4">
              At our healthcare facility, patient satisfaction is at the core of everything we do. We believe that providing high-quality care goes beyond medical treatments and extends to ensuring a positive, and supportive experience for every patient.
            </p>
            {/* <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                  class="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span class="text-gray-800 font-semibold">John Doe</span>
              </div>
              <span class="text-gray-600">2 hours ago</span>
            </div> */}
          </div>
        </Link>
      </div>
     
      <div class="grid min-h-[140px] w-full text-2xl md:text-4xl place-items-center rounded-lg p-6 lg:overflow-visible">
        <div class="flex items-center gap-2 font-bold text-blue-gray-500">
          4.9
          <div class="inline-flex items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-yellow-500 cursor-pointer">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-yellow-500 cursor-pointer">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-yellow-500 cursor-pointer">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 h-6 text-yellow-500 cursor-pointer">
                <path fill-rule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clip-rule="evenodd"></path>
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6 text-yellow-500 cursor-pointer text-blue-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                </path>
              </svg>
            </span>
          </div>
          <p class="block font-sans text-xl md:text-3xl antialiased font-medium leading-relaxed text-blue-gray-500">
            Based on 166 Reviews
          </p>
        </div>
      </div>

      <video data-aos='flip-left' class="h-11/12 m-auto w-11/12 border-8 border-rose-100 rounded-3xl " controls>
        <source
          src={IVFvideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

    </div>
    // </div>
  );
};