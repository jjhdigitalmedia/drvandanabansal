

import Stetho from "../assets/Stetho.png";
import PhotoDrVandana from "../assets/PhotoDrVandana.jpeg";

function About() {
  return (
    <div className="min-h-xsvh flex items-center justify-center bg-[f2f2f2] xl:p-6 pb-0">

      <div className="relative bg-white/70 backdrop-blur-lg rounded-3xl pb-0 py-8 md:p-12 max-w-[95%] 2xl:max-w-[80%] w-full flex flex-col lg:flex-row-reverse items-center md:gap-20 overflow-hidden">
        <img
          src={Stetho}
          alt="stethoscope"
          className="hidden md:absolute left-[-220px] bottom-[0px] w-96 opacity-20 pointer-events-none"
        />
        
        {/* <div className="relative"> */}
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-md border-1 p-3 border-pink-700 overflow-hidden shado-md">
          <img
            src={PhotoDrVandana}
            alt="Doctor"
            className="w-96 mb-10 h-full object-cover"
          />
        </div>
        {/* <div className="absolute bottom-2 w-16 h-16 left-10 bg-pink-800 text-white p-3 rounded-full shadow-md">
          </div> */}
        {/* <CiMedicalCross className=" text-pink-800" /> */}
        {/* </div> */}

        {/* Left Content Section */}
        <div className="flex-1 text-cente">
          <h1 className="text-4xl md:text-5xl text-center lg:text-left font-serif text-pink-700">
            About Dr. Vandana Bansal
          </h1>
          {/* <p className="mt-2 text-gray-700 text-center lg:text-left font-medium">
            MBBS, MS, DGO, FCGP
          </p> */}
          <p className="text-pink-800 font-semibold lg:text-left text-center mt-1">
           Director – Jeevan Jyoti Hospital & Arpit Test Tube Baby Centre, Prayagraj, Uttar Pradesh
          </p>
          {/* Description */}
          <p className="mt-6 md:pr-5 text-gray-600 leading-relaxed text-justify">
           Dr. Vandana Bansal is a distinguished senior gynaecologist, infertility specialist, IVF expert and advanced laparoscopic and hysteroscopic surgeon, with more than three decades of experience in the field of women's healthcare and reproductive medicine. As the Director of Jeevan Jyoti Hospital and Arpit Test Tube Baby Centre, Prayagraj, she has made significant contributions to the development and advancement of specialised gynaecological and fertility services in Eastern Uttar Pradesh.
          </p>
          <p className="mt-4 md:pr-5 text-gray-600 leading-relaxed text-justify">
          Widely recognised for her clinical expertise, academic accomplishments and pioneering initiatives, Dr. Bansal has been instrumental in introducing advanced reproductive technologies and minimally invasive gynaecological procedures to the region. Her professional philosophy combines scientific advancement, evidence-based clinical practice and compassionate, patient-centred care, with a particular emphasis on helping couples overcome infertility and achieve their dream of parenthood.
          </p>
          <p className="mt-4 md:pr-5 text-gray-600 leading-relaxed text-justify">
            Her philosophy is to look beyond an individual symptom or diagnosis and help women achieve better reproductive health, metabolic and bone health, sexual wellbeing and healthy ageing.
          </p>
          <p className="mt-4 md:pr-5 text-gray-600 text-pin-700 opacity-60 italic leading-relaxed">
           My mission is to empower women, support couples in their journey towards parenthood and make quality reproductive and gynaecological healthcare accessible, ethical and patient-centred.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
