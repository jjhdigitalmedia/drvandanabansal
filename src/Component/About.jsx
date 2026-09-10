

import Stetho from "../assets/Stetho.png";
import DrVandanaas from "../assets/DrVandanaas.png";

function About() {
  return (
    <div className="min-h-xsvh flex items-center justify-center bg-[f2f2f2] xl:p-6 pb-0">

      <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl pb-0 py-8 md:p-12 max-w-[95%] 2xl:max-w-[80%] w-full flex flex-col lg:flex-row-reverse items-center md:gap-20 overflow-hidden">
        <img
          src={Stetho}
          alt="stethoscope"
          className="hidden md:absolute left-[-220px] bottom-[0px] w-96 opacity-20 pointer-events-none"
        />
        {/* Right Image Section */}
        <div className="relative">
          <div className="w-72 h-72  md:w-96 md:h-96 rounded-full border-2 p-3 border-pink-600 overflow-hidden shado-md">
          <img
            src={DrVandanaas} // 👈 dummy image
            alt="Doctor"
            className="w-80 mb-10 h-full object-cover"
          />
          </div>
          {/* Decorative Icon */}
          <div className="absolute bottom-2 w-16 h-16 left-10 bg-pink-800 text-white p-3 rounded-full shadow-md">
            {/* <CiMedicalCross className=" text-pink-800" /> */}
          </div>
        </div>

        {/* Left Content Section */}
        <div className="flex-1 text-cente">
          <h1 className="text-4xl md:text-5xl text-center lg:text-left font-serif text-pink-700">
            About Dr. Vandana Bansal
          </h1>
          {/* <p className="mt-2 text-gray-700 text-center lg:text-left font-medium">
            MBBS, MS, DGO, FCGP
          </p> */}
          <p className="text-pink-800 font-semibold lg:text-left text-center mt-1">
            Senior Gynecologist, IVF & Women's Longevity Specialist
          </p>
          {/* Description */}
          <p className="mt-6 md:pr-5 text-gray-600 leading-relaxed text-justify">
            Dr. Vandana Bansal is a senior Gynaecologist, Obstetrician, Fertility & IVF Specialist, Aesthetic Gynaecologist, and Minimally Invasive Gynaecological Surgeon in Prayagraj, with more than three decades of experience in women’s healthcare.
          </p>
          <p className="mt-4 md:pr-5 text-gray-600 leading-relaxed text-justify">
            Her expertise encompasses IVF and infertility treatment, advanced laparoscopy and hysteroscopy, high-risk obstetrics, menopause management, and comprehensive gynaecological care. She combines extensive clinical experience with an individualized, evidence-based approach to ensure that every woman receives the right care at the right stage of life.
          </p>
          <p className="mt-4 md:pr-5 text-gray-600 leading-relaxed text-justify">
            With a special focus on fertility and reproductive health, Dr. Bansal is committed to helping couples navigate their fertility journey with clarity, confidence, and personalized treatment. Her minimally invasive surgical expertise enables effective treatment with a focus on patient comfort and recovery. From fertility and pregnancy to menopause and healthy ageing, she looks beyond individual symptoms to promote long-term reproductive, metabolic, sexual, and overall wellbeing, while building a trusted doctor-patient relationship where women feel comfortable discussing their concerns and actively participate in their healthcare decisions.
          </p>
          <p className="mt-4 md:pr-5 text-gray-600 text-pin-700 opacity-60 italic leading-relaxed">
            My mission is to provide personalized, safe, and high-quality care in a compassionate environment where every woman feels heard, respected, and confident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
