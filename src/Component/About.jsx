// import '../Style/neonStyle.css'
// import PhotoDrVandana from '../assets/PhotoDrVandana.jpeg';
// import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import { Helmet } from 'react-helmet'

// const About = () => {
//     return (
//         <>
//             <Helmet>
//                 <title>Dr Vandana Bansal Best Gynecologist in Prayagraj</title>
//                 <meta name="description" content="Dr. Vandana Bansal – MBBS, DGO, MS, D.Phil (Gold Medalist), FCGP is a renowned and senior gynecologist and obstetrician in Uttar Pradesh, with extensive experience in high-risk pregnancy care, infertility management, and IVF. She has been specializing in advanced laparoscopic and hysteroscopic surgeries for over 18 years, offering minimally invasive solutions with excellent clinical outcomes. She is the Director of Jeevan Jyoti Hospital, a 200-bedded multi-specialty healthcare institution, and Arpit Test Tube Baby Centre, Allahabad (Prayagraj). Jeevan Jyoti Hospital proudly completed its Silver Jubilee (25 years) in October 2013, reflecting a long-standing commitment to quality patient care in obstetrics and gynecology." />
                
//                 <meta name="keywords" content="gynecologist, women's health, pregnancy care, IVF expert in allahabad, High risk pregnancy, Infertility treatment, senior gynaecologist, Laparoscopic surgeon, Hysteroscopic surgeon,  PCOS treatment, doctors for pregnancy" />
//                 <meta property="og:title" content="Best Gynecology Services" />
//                 <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
//             </Helmet>
//             <section id='about' className="text-gray-600 w-11/12 mx-auto mt-14 body-font">
//                 <div className="container mx-auto flex px-3 py- md:flex-row flex-col items-center">
//                     <div className="pt- pb-0 md:w-96 w-5/6 ">
//                         <img className=" object-cover object-center rounded-3xl w-96" alt="hero" src={PhotoDrVandana} />
//                     </div>
//                     <div className="lg:flex-grow md:rounded-3xl my-2 md:w-1/2 text-white py-3 pr-1 md:bg-pink-800 lg:pl-8 md:pl-8 flex flex-col md:items-start text-center md:text-left items-center ">
//                         <h1 className="title-font sm:text-3xl text-2xl md:mb-2 font-medium text-white"> Dr. Vandana Bansal
//                         </h1>

//                         <div className='flex'>
//                             <a href="https://www.instagram.com/drvandanabansal_gynaecologist/" target='_blank'>
//                                 <FaInstagram className='m-2 md:text-whit text-xl' />
//                             </a>
//                             <a href="https://www.facebook.com/vandana.bansal.33" target='_blank'>
//                                 <FaFacebook className='m-2 md:text-whie text-xl' />
//                             </a>
//                             <a href="https://www.youtube.com/@DrVandanaBansal" target='_blank'>
//                                 <FaYoutube className='m-2 md:text-whie text-xl' />
//                             </a>
//                             <a href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/" target='_blank'>
//                                 <FaLinkedinIn className='m-2 md:text-wite text-xl' />
//                             </a>
//                         </div>

//                         <p className="mb-8 md:text-left text-sm leading-relaxed font-semibold text-justify"> DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists, High Risk Pregnancy Care, Infertility & IVF and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery. Besided, she is Director of 200-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre Allahabad.
//                             </p>
//                             <p className="mb-8 md:text-left text-sm leading-relaxed font-semibold text-justify">Dr. Vandana Bansal is a trusted gynecologist, IVF specialist, and dedicated to women's health. With 38+ years of experience and a compassionate approach, she offers advanced care in infertility, laparoscopy, menopause, and high-risk pregnancies. Patients value her for ethical practice, clear communication, and personalized treatment plans. Book your appointment today for expert care and guidance on your reproductive health journey.</p>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default About






import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { CiMedicalCross } from "react-icons/ci";

// 👇 Stethoscope PNG import (tum apni file path set karna)
import Stetho from "../assets/Stetho.png";
import DrVandanaa from "../assets/DrVandanaa.png";
import { Link } from "react-router-dom";

function About () {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[f2f2f2] md:p-6">
      
      <div className="relative bg-white/70 backdrop-blur-lg bg-50 rounded-3xl shadw-xl py-8 px-1 md:p-12 max-w-[80%] w-full flex flex-col md:flex-row items-center gap-20 overflow-hidden">
        
        {/* 🩺 Stethoscope Background Image */}
        <img
          src={Stetho}
          alt="stethoscope"
          className="absolute right-[-35px] bottom-[30px] w-96 opacity-20 pointer-events-none"
        />

        {/* Left Image Section */}
        <div className="relative">
          <div className="w-72 h-72  md:w-96 md:h-96 rounded-full border-1 p-3 border-pink-800 overflow-hidden shado-md">
            <img
              src={DrVandanaa} // 👈 dummy image
              alt="Doctor"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative Icon */}
          <div className="absolute bottom-2 w-16 h-16 left-10 bg-pink-800 text-white p-3 rounded-full shadow-md">
            <CiMedicalCross className=" text-pink-800" />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="flex-1 text-cente">
          <h1 className="text-4xl md:text-5xl text-ceter lg:text-left font-serif text-pink-700">
            Dr. Vandana Bansal
          </h1>

          <p className="mt-2 text-gray-700 font-medium">
            MBBS, MS, DGO, (Obstetrics & Gynecology)
          </p>

          <p className="text-pink-800 font-semibold mt-1">
            Infertility & IVF Expert
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-1 md:gap-4 mt-3">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="bg--100 shadow-md p-3 rounded-full text-pink-600 hover:bg-pink-800 hover:text-white transition duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              )
            )}
          </div>

          {/* Description */}
          <p className="mt-6 md:pr-10 text-gray-600 leading-relaxed">
           Dr. Vandana Bansal is a highly experienced and compassionate Obstetrician & Gynaecologist in Prayagraj, dedicated to providing comprehensive women’s healthcare, including pregnancy care, infertility treatment, high-risk pregnancy management, and advanced gynecological services. With a patient-first approach and strong clinical expertise, she has successfully supported numerous women through normal delivery, IVF treatments, and various reproductive health concerns with confidence and care. Known as a trusted <Link to='about' className='fontbold text-pink-800'>gynecologist and infertility specialist in Prayagraj</Link>, she focuses on accurate diagnosis, modern treatment solutions, and personalized care, ensuring the best outcomes for both mother and baby while promoting women’s health, and overall well-being.
          </p>

          <p className="mt-4 md:pr-20 text-gray-600 leading-relaxed">
         Expertise includes advanced laparoscopic gynecological surgery, management of complex reproductive health conditions, and evidence-based treatment protocols designed for safe and effective outcomes.
          </p>
          <p className="mt-4 md:pr-20 text-gray-600 leading-relaxed">
           Committed to delivering result-oriented care with a focus on accurate diagnosis, modern treatment techniques, and continuous support to improve long-term women’s health and quality of life in Prayagraj.
          </p>

          <p className="mt-4 md:pr-20 text-gray-600 text-pin-700 opacity-60 italic leading-relaxed">
           My mission is to deliver personalized, safe, and high-quality care in a compassionate environment where every patient feels heard, respected, and confident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
