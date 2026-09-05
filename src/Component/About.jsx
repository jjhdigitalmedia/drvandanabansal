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


import Stetho from "../assets/Stetho.png";
import DrVandanaa from "../assets/DrVandanaa.png";

function About() {
  return (
    <div className="min-h-xsvh flex items-center justify-center bg-[f2f2f2] md:p-6 pb-0">

      <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl pb-0 py-8 px-1 md:p-12 max-w-[80%] w-full flex flex-col md:flex-row-reverse items-center md:gap-20 overflow-hidden">
        <img
          src={Stetho}
          alt="stethoscope"
          className="hidden md:absolute left-[-220px] bottom-[0px] w-96 opacity-20 pointer-events-none"
        />
        {/* Right Image Section */}
        <div className="relative">
          {/* <div className="w-72 h-72  md:w-96 md:h-96 rounded-full border-2 p-3 border-pink-600 overflow-hidden shado-md"> */}
          <img
            // src={CheckDr} // 👈 dummy image
            src={DrVandanaa} // 👈 dummy image
            alt="Doctor"
            className="w-80 h-full object-cover"
          />
          {/* </div> */}
          {/* Decorative Icon */}
          {/* <div className="absolute bottom-2 w-16 h-16 left-10 bg-pink-800 text-white p-3 rounded-full shadow-md">
            <CiMedicalCross className=" text-pink-800" />
          </div> */}
        </div>

        {/* Left Content Section */}
        <div className="flex-1 text-cente">
          <h1 className="text-4xl md:text-5xl text-ceter lg:text-left font-serif text-pink-700">
            About Dr. Vandana Bansal
          </h1>
          <p className="mt-2 text-gray-700 font-medium">
            MBBS, MS, DGO, FCGP
          </p>
          <p className="text-pink-800 font-semibold mt-1">
            Infertility & IVF Expert, Laparoscopic & Hysteroscopic Surgeon
          </p>
          {/* Description */}
          <p className="mt-6 md:pr-10 text-gray-600 leading-relaxed text-justify">
            Dr. Vandana Bansal is a senior Gynaecologist, Obstetrician, Fertility & IVF Specialist, Aesthetic Gynaecologist, and Minimally Invasive Gynaecological Surgeon in Prayagraj, with more than three decades of experience in women’s healthcare.
          </p>
          <p className="mt-4 md:pr-20 text-gray-600 leading-relaxed text-justify">
            Her expertise encompasses IVF and infertility treatment, advanced laparoscopy and hysteroscopy, high-risk obstetrics, menopause management, and comprehensive gynaecological care. She combines extensive clinical experience with an individualized, evidence-based approach to ensure that every woman receives the right care at the right stage of life.
          </p>
          <p className="mt-4 md:pr-20 text-gray-600 leading-relaxed text-justify">
            With a special focus on fertility and reproductive health, Dr. Bansal is committed to helping couples navigate their fertility journey with clarity, confidence, and personalized treatment. Her minimally invasive surgical expertise enables effective treatment with a focus on patient comfort and recovery. From fertility and pregnancy to menopause and healthy ageing, she looks beyond individual symptoms to promote long-term reproductive, metabolic, sexual, and overall wellbeing, while building a trusted doctor-patient relationship where women feel comfortable discussing their concerns and actively participate in their healthcare decisions.
          </p>
          <p className="mt-4 md:pr-20 text-gray-600 text-pin-700 opacity-60 italic leading-relaxed">
            My mission is to provide personalized, safe, and high-quality care in a compassionate environment where every woman feels heard, respected, and confident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
