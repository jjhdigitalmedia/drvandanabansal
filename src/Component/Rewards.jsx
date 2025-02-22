import React from "react";
import { Link } from "react-router-dom";
import speaker1 from "../assets/speaker1.jpg";
import lab0 from "../assets/lab0.png";
import patientweb from "../assets/patientweb.png";
import qqq1 from '../assets/Banners/qqq1.jpg';

export const Rewards = () => {

  const RewarComponent = [
    {
      link: '',
      img: lab0,
      heading: 'IVF Lab....aa',
      contn: ' Dr. Vandana Bansal In simple terms IVF means fertilisation outside the body. After ovarian stimulation, eggs are collected from the womens ovaries and then fertilized by the husbands sperms in a petri dish or a test tube in a controlled laboratory environment.'
    },
    {
      link: 'patientsreview',
      img: patientweb,
      heading: 'Testimonials',
      contn: ' At our healthcare facility, patient satisfaction is at the core of everything we do. We believe that providing high-quality care goes beyond medical treatments and extends to ensuring a positive, and supportive experience for every patient.'
    },
    {
      link: 'guestspeaker',
      img: speaker1,
      heading: ' Guest Speaker',
      contn: ' Dr. Vandana Bansal is a distinguished guest speaker at various global conferences,  where she shares her expertise in [your area of expertise] and ignites engaging conversations.'
    }
  ]
  return (
    <>
    <div className="-mb-16 md:-mb-80">
        <img src={qqq1} alt="" />
      </div>
      <div className="flex text-xs justify-center flex-wrap bg-transparent lg:w-11/12 mx-auto lg:mt-10"></div>
      <div className="flex text-xs justify-center flex-wrap bg-transparent lg:w-11/12 mx-auto mt-10">
        {RewarComponent.map((ind, k) => (
          <Link key={k} to={ind.link} className="bg-white m-2 h-auto rounded-2xl shadow-xl overflow-hidden max-w-72">
            <img
              src={ind.img}
              alt="Mountain"
              className="w-full  object-cover border-8 border-white rounded-2xl"
            />
            <div className="px-4 py-0 pt-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {ind.heading}
              </h2>
              <p className="text-gray-700 leading-tight mb-4">
                {ind.contn}
              </p>
            </div>
          </Link >
        ))
        }
      </div>
    </>
  );
};
