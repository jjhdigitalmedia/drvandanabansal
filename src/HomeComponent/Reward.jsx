import React from "react";
import speaker1 from "/public/speaker1.jpg";
import lab0 from "/public/lab0.png";
import patientweb from "/public/patientweb.png";
// import IVFvideo from '/public/videos/IVFvideo.mp4';
import Link from "next/link";
import Image from 'next/image'

export const Rewards = () => {
  const RewarComponent = [
    {
      img: lab0,
      heading: 'IVF Lab',
      contn: ' Dr. Vandana Bansal In simple terms IVF means fertilisation outside the body. After ovarian stimulation, eggs are collected from the womens ovaries and then fertilized by the husbands sperms in a petri dish or a test tube in a controlled laboratory environment.'
    },
    {
      img: patientweb,
      heading: ' Patients Review',
      contn: ' At our healthcare facility, patient satisfaction is at the core of everything we do. We believe that providing high-quality care goes beyond medical treatments and extends to ensuring a positive, and supportive experience for every patient.'
    },
    {
      img: speaker1,
      heading: ' Guest Speaker',
      contn: ' Dr. Vandana Bansal is a distinguished guest speaker at various global conferences,  where she shares her expertise in [your area of expertise] and ignites engaging conversations.'
    }
  ]
  return (
    <>
      <div className="flex text-xs justify-center flex-wrap bg-transparent lg:w-11/12 mx-auto mt-10">
        {RewarComponent.map((cntnt)=>(
          <Link href="guestspeaker" className="bg-white m-2 h-auto rounded-2xl shadow-xl overflow-hidden max-w-72">
            <Image
              src={cntnt.img}
              width={500}
              height={500}
              alt="Picture of the author"
              />
            <div className="px-4 py-0 pt-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {cntnt.heading}
              </h2>
              <p className="text-gray-700 leading-tight mb-4">
               {cntnt.contn}
              </p>
            </div>
          </Link >
            ))
        }
      </div>

      <div className="w-full md:px-32 py-3 mx-auto">
        <div className="my-8">
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div className="elfsight-app-ad2e5e08-1de5-4fde-8a64-b8282d48abb7" data-elfsight-app-lazy></div>
        </div>
      </div>
      {/* <div className="w-full md:px-52 py-10 bg-red-200 my-5">
        <video className="h-11/12 m-auto w-screen border-rose-50 " controls>
          <source
            src={IVFvideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </>
  );
};