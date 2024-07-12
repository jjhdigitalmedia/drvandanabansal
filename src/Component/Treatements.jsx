import React, { useEffect } from "react";
import IVFet1 from "../assets/icons/Treatment/IVFet1.jpg";
import iui1 from "../assets/icons/Treatment/iui1.png";
import icsi1 from "../assets/icons/Treatment/icsi1.png";
import ivm1 from "../assets/icons/Treatment/ivm1.png";
import IMSI1 from "../assets/icons/Treatment/IMSI1.png";
import laproo1 from "../assets/icons/Treatment/laproo1.png";
import lasehatching from "../assets/icons/Treatment/lasehatching.png";
import embryo1 from "../assets/icons/Treatment/embryo1.png";
import Aos from "aos";
import 'aos/dist/aos.css'
import '../Style/Style.css'
import { Link } from "react-router-dom";

const Treatements = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  return (<>
    <section class="text-gray-600 body-font">
      <div class="container px-1 md:px-5 py-6 mx-auto">
        <div class="flex flex-col text-center w-full mb-10">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Treatments Provided by Dr. Vandana Bansal</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Dr. Vandana Bansal is a distinguished medical professional renowned for his expertise and compassionate care. With a wealth of experience in his field, Dr. Vandana Bansal offers a comprehensive range of treatments, specializing in the latest medical advancements and personalized patient care. His approach integrates cutting-edge technology with a deep commitment to patient well-being, ensuring that each individual receives tailored treatment plans that address their specific needs. Dr. Bansal’s dedication to excellence and his empathetic approach have earned him a reputation for delivering high-quality healthcare, making him a trusted and respected figure in the medical community.</p>
        </div>
        <div class="flex flex-wrap text-center mx-auto m-0 md:m-4 lg:w-4/5 ">

          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={iui1}
                />
                <h2 class="title-font font-medium text-md text-gray-900">IUI Treatment</h2>
                <p class="leading-relaxed">read</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={IVFet1}
                />
                <h2 class="title-font font-medium text-md text-gray-900">IVF-ET Treatment</h2>
                <p class="leading-relaxed">read</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-8 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={icsi1}
                />
                <h2 class="title-font font-medium text-md text-gray-900">ICSI Treatment</h2>
                <p class="leading-relaxed">read</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-8 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={ivm1}
                />
                <h2 class="title-font font-medium text-md text-gray-900">IVM Treatment</h2>
                <p class="leading-relaxed">read</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-8 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={IMSI1}
                />
                <h2 class="title-font font-medium text-md text-gray-900">IMSI Treatment</h2>
                <p class="leading-relaxed">read</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={embryo1}
                />
                <h2 class="title-font font-medium text-md text-gray-900">Embryo Monitoring</h2>
                <p class="leading-relaxed">read</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='flip-right'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={lasehatching}
                />
                <h2 class="title-font font-medium text-md text-gray-900">Laser Assisted Hatching</h2>
                <p class="leading-relaxed">read</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='flip-right'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={laproo1}
                />
                <h2 class="title-font font-medium text-md text-gray-900">Laproscopy</h2>
                <p class="leading-relaxed">View more</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Treatements;
