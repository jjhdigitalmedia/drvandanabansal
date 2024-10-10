import React, { useEffect } from "react";
import IVFet from "../assets/icons/Treatment/IVFet.jpg";
import iui from "../assets/icons/Treatment/iui.png";
import icsi from "../assets/icons/Treatment/icsi.png";
import ivm from "../assets/icons/Treatment/ivm.png";
import IMSI from "../assets/icons/Treatment/IMSI.png";
import laproo from "../assets/icons/Treatment/laproo.png";
import lasehatching from "../assets/icons/Treatment/lasehatching.png";
import embryo from "../assets/icons/Treatment/embryo.png";
import IVFvideo from '../assets/videos/IVFvideo.mp4';
import Aos from "aos";
import 'aos/dist/aos.css'
import '../Style/Style.css'
import { Link } from "react-router-dom";

const Treatements = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  return (<>
    <section className="text-gray-600 body-font">
    
      <div className="container px-1 md:px-5 py-16 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Treatments Provided by Dr. Vandana Bansal</h1>
          <p className="lg:w-2/3 mx-auto text-sm leading-relaxed">Dr. Vandana Bansal is a highly regarded medical professional known for expertise and compassionate care. With extensive experience, Dr. Bansal specializes in advanced treatments, combining cutting-edge technology with personalized care. Her commitment to excellence and patient well-being has earned him a reputation as a trusted figure in the medical community.</p>
        </div>
        <div className="flex flex-wrap text-center mx-auto m-0 md:m-4 lg:w-4/5 ">

            <Link to='iuitreatment' className="p-4 md:w-1/4 sm:w-1/2 w-full   ">
              <div className=" shadow-md order-gray-200 px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={iui}
                />
                <h2 className="title-font font-medium text-md text-gray-900">IUI Treatment</h2>
                <p className="leading-relaxed text-sm text-rose-600">know more</p>
              </div>
            </Link>
            <Link to='ivfet' className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="shadow-md py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={IVFet}
                />
                <h2 className="title-font font-medium text-md text-gray-900">IVF-ET Treatment</h2>
                <p className="leading-relaxed text-sm text-rose-600">know more</p>
              </div>
            </Link>
            <Link to='icsi' className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="shadow-md px-4 py-8 rounded-lg">
                <img
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={icsi}
                />
                <h2 className="title-font font-medium text-md text-gray-900">ICSI Treatment</h2>
                <p className="leading-relaxed text-sm text-rose-600">know more</p>
              </div>
            </Link>
            <Link to='ivmtreatment' className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="shadow-md px-4 py-8 rounded-lg">
                <img
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={ivm}
                />
                <h2 className="title-font font-medium text-md text-gray-900">IVM Treatment</h2>
                <p className="leading-relaxed text-sm text-rose-600">know more</p>
              </div>
            </Link>
            <Link to='imsitreatment' className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="shadow-md px-4 py-8 rounded-lg">
                <img
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={IMSI}
                />
                <h2 className="title-font font-medium text-md text-gray-900">IMSI Treatment</h2>
                <p className="leading-relaxed text-sm text-rose-600">know more</p>
              </div>
            </Link>
            <Link to='embryomonitoring' className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="shadow-md px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={embryo}
                />
                <h2 className="title-font font-medium text-md text-gray-900">Embryo Monitoring</h2>
                <p className="leading-relaxed text-sm text-rose-600">know more</p>
              </div>
            </Link>
            <Link to='laserassisted' className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="shadow-md px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={lasehatching}
                />
                <h2 className="title-font font-medium text-md text-gray-900">Laser Assisted Hatching</h2>
                <p className="leading-relaxed text-sm text-rose-600">know more</p>
              </div>
            </Link>
            <Link to='laparoscopy' className="p-4 md:w-1/4 sm:w-1/2 w-full ">
              <div className="shadow-md px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  className="object-cover object-center p-4 w-full h-full block"
                  src={laproo}
                />
                <h2 className="title-font font-medium text-md text-gray-900">Laproscopy</h2>
                <p className="leading-relaxed text-sm text-rose-600">know more</p>
              </div>
            </Link>
        </div>
      </div>
    </section>
    <div className="w-full md:px-52 py-10 bg-red-200 my-5">
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

export default Treatements;
