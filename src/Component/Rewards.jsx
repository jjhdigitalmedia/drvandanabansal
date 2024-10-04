import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import speaker1 from "../assets/speaker1.jpg";
import IVFvideo from '../assets/videos/IVFvideo.mp4';
import lab from "../assets/lab.png";
import patientweb from "../assets/patientweb.png";

export const Rewards = () => {
  return (
    <>
      <div className="flex text-xs justify-center flex-wrap bg-transparent lg:w-11/12 mx-auto mt-10">

        <Link to="guestspeaker" className="bg-whie m-2 rounded-2xl shadow-lg overflow-hidden max-w-72">
          <img
            src={speaker1}
            alt="Mountain"
            className="w-full h-60 object-cover border-8 border-white rounded-2xl"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Guest Speaker
            </h2>
            <p className="text-gray-700  leading-tight mb-4">
              Rrenowned gynecologist who has gained international recognition for her expertise and contributions to women's health. With a distinguished career spanning several decades, she has become a sought-after guest speaker at conferences and seminars around the globe.
            </p>
          </div>
        </Link>

        <Link to="guestspeaker" className="bg-white m-2 rounded-2xl shadow-lg overflow-hidden max-w-72">
          <img
            src={lab}
            alt="Mountain"
            className="w-full h-60 object-cover border-8 border-white rounded-2xl"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              IVF Lab
            </h2>
            <p className="text-gray-700 leading-tight mb-4">
              Dr. Vandana Bansal In simple terms IVF means fertilisation outside the body. After ovarian stimulation, eggs are collected from the women's ovaries and then fertilized by the husband's sperms in a petri dish or a test tube in a controlled laboratory environment.
            </p>
          </div>
        </Link >

        <Link to='patientsreview' className="bg-white m-2 rounded-2xl shadow-lg overflow-hidden  max-w-72">
          <img
            src={patientweb}
            alt="Mountain"
            className="w-full h-60 object-cover border-8 border-white rounded-2xl"
          />
          <div className="p-4 pb-10">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Patient's Review
            </h2>
            <p className="text-gray-700 leading-tight mb-4">
              At our healthcare facility, patient satisfaction is at the core of everything we do. We believe that providing high-quality care goes beyond medical treatments and extends to ensuring a positive, and supportive experience for every patient.
            </p>
          </div>
        </Link>

      </div>
      <div className="w-full px-52 py-10 bg-red-100 my-5">
        <video className="h-11/12 m-auto w-screen border-rose-50 " controls>
          <source
            src={IVFvideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};