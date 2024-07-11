import React from "react";
// bg-gradient-to-r from-blue-500
import mamphoto from "../assets/mamphoto.png";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'
import '../Style/Style.css'
const Head = () => {
  return (
    <>
    {/* md:bg-[url(https://i.postimg.cc/bNnz1Sr6/bgfinal6.png)] bg-[url(https://i.postimg.cc/2yDfw2V2/bg.jpg)] */}
    {/* https://i.postimg.cc/15W218N9/bgvandana1.png */}
      <section class="text-gray-600 body-font  md:bg-[url(https://i.postimg.cc/zXwQmTfH/collage-4-1.jpg)] bg-[url(https://i.postimg.cc/zXwQmTfH/collage-4-1.jpg)] bg-hero g-no-repeat bg-cover bg-center bg-fixed bg-red-50" >
        <div class="container mx-auto w-11/12 flex px-2 pt-28 pb-36 md:pt-32 md:pb-16 lg:pt-32 lg:w-4/5 md:flex-row text-center flex-col items-center">

          <div data-aos='fade-right' class="pr-0 w-11/12 m-auto text-center flex flex-col bg-gradient-to-r from-black bg-opacity-50 md:w/2 md:pr-8 md:items-start lg:pr-24 lg:flex-grow lg:pl-8 lg:py-5 lg: rounded-lg">

            <h1 class="title-font sm:text-4xl md:text-left text-3xl mb-3 text-rose-50 md:text-rose-100 font-bold [text-shadow:_0_2px_0_rgb(0_0_0_/_10%)]">
              Best Gynaecologist in Allahabad
            </h1>
            <span className="font-bold mb-2 text-white text-xl md: text-left">Retired Chief Medical Superintendent
              Indian Railways </span>
            <p class="mb-2 leading-relaxed md:text-left text-white">
              To deliver diagnostic, surgical, and medical services to all inpatients
              and outpatients, manage hospital administration, and establish protocols for
              comprehensive patient care.
            </p>
            <span className="font-bold text-xl text-rose-300 my-3 [text-shadow:_0_2px_0_rgb(0_0_0_/_10%)]">40 years of experience</span>
            <div className="mb-3">
              <h1 className="font-bold text-xl text-white">Medical Council Registration </h1>
              <p className="text-white">UP State Medical Council Registration No: <span className="">24503</span>  </p>
            </div>
            <Link to='bookappointment' className="rounded-lg inline-flex items-center bg-rose-600 border-0 py-2 px-4 text-white">
              <button>
                book Appointment
              </button>
            </Link>
          </div>

          <div class="mb-10 shadow-4xl md:px-8 lg:px-0  md:mb-0">
            <img data-aos='flip-right'
              class="border-2  border-rose-200 w-72 h-72 m-auto text-center border-gradient-to-r from-blue-500 object-cover object-center rounded-2xl md:rounded-xl"
              alt="hero"
              src={mamphoto}
            />
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Head;
