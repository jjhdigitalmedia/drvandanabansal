import React from "react";
import { Link } from "react-router-dom";
import speaker1 from "../assets/speaker1.jpg";
import IVFvideo from '../assets/videos/IVFvideo.mp4';
import lab from "../assets/lab.png";
import patientweb from "../assets/icons/patientweb.png";
import { Document, Page, pdfjs } from 'react-pdf';
// import HospitalProfile from './HospitalProfile.pdf'
import { usePDF } from 'react-to-pdf';


export const Rewards = () => {
  const { toPDF, targetRef } = usePDF({ filename: 'HospitalProfile.pdf' });
  return (
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
              IVF Labs
            </h2>
            <p class="text-gray-700 leading-tight mb-4">
              Dr. Vandana Bansal In simple terms IVF means fertilisation outside the body. After ovarian stimulation, eggs are collected from the women's ovaries and then fertilized by the husband's sperms in a petri dish or a test tube in a controlled laboratory environment.
            </p>
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
          </div>
        </Link>
      </div>

      <video data-aos='flip-left' class="h-11/12 m-auto w-11/12 border-8 border-rose-100 rounded-3xl " controls>
        <source
          src={IVFvideo}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* <embed className="h-screen" src="src\Component\HospitalProfile.pdf" width="500" height="375"
        type="application/pdf"></embed> */}

    </div>
  );
};