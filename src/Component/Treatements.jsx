// import React, { useEffect } from "react";
// import IVFet from "../assets/icons/Treatment/IVFet.jpg";
// import iui from "../assets/icons/Treatment/iui.png";
// import icsi from "../assets/icons/Treatment/icsi.png";
// import ivm from "../assets/icons/Treatment/ivm.png";
// import IMSI from "../assets/icons/Treatment/IMSI.png";
// import embryo from "../assets/icons/Treatment/embryo.png";
// import lasehatching from "../assets/icons/Treatment/lasehatching.png";
// import Sonography from "../assets/icons/Treatment/Sonography.png";
// import IVFvideo from '../assets/videos/IVFvideo.mp4';
// import Aos from "aos";
// import 'aos/dist/aos.css'
// import '../Style/Style.css'
// import { Link } from "react-router-dom";

// const Treatements = () => {
//   useEffect(() => {
//     Aos.init({ duration: 2000 })
//   })

//   const TreatmentData = [
//     {
//       img: iui,
//       link: '/treatments/iui',
//       heading: "IUI Treatment",
//       more: 'view more'

//     },
//     {
//       img: IVFet,
//       link: '/treatments/ivf-et',
//       heading: "IVF-ET",
//       more: 'view more'

//     },
//     {
//       img: icsi,
//       link: '/treatments/icsi',
//       heading: "ICSI Treatment",
//       more: 'view more'

//     },
//     {
//       img: ivm,
//       link: '/treatments/ivm',
//       heading: "IVM Treatment",
//       more: 'view more'

//     },
//     {
//       img: IMSI,
//       link: '/treatments/imsi',
//       heading: "IMSI Treatment",
//       more: 'view more'

//     },
//     {
//       img: embryo,
//       link: '/treatments/laser-assisted-hatching',
//       heading: "Embryo Monitoring",
//       more: 'view more'

//     },
//     {
//       img: lasehatching,
//       link: '/treatments/embryo-monitoring',
//       heading: "Laser Assisted Hatching",
//       more: 'view more'

//     },
//     {
//       img: Sonography,
//       link: '/treatments/sonography',
//       heading: "Sonography",
//       more: 'view more'
//     }
//   ]

//   return (<>
//     <section className="text-gray-600 body-font">

//       <div className="container px-1 md:px-5 py-16 mx-auto">
//         <div className="flex flex-col text-center w-full mb-10">
//           <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-pink-800 font-serif">Fertility Treatments</h1>
//           <p className="lg:w-2/3 mx-auto text-sm leading-relaxed">Dr. Vandana Bansal is a highly regarded medical professional known for expertise and compassionate care. With extensive experience, Dr. Bansal specializes in advanced treatments, combining cutting-edge technology with personalized care. Her commitment to excellence and patient well-being has earned him a reputation as a trusted figure in the medical community.</p>
//         </div>
//         <div className="flex flex-wrap text-center mx-auto m-0 md:m-4 lg:w-4/5 ">
//           { TreatmentData && TreatmentData.map((treat) => (
//             <Link to={treat.link} className="p-4 md:w-1/4 sm:w-1/2 w-full">
//               <div className=" shadow-md order-gray-200 px-3 py-5 rounded-lg">
//                 <img
//                   alt="ecommerce"
//                   className="object-cover object-center p-4 w-full h-full block"
//                   src={treat.img}
//                 />
//                 <h2 className="title-font font-medium text-md text-gray-900">{treat.heading}</h2>
//                 <p className="leading-relaxed text-sm text-rose-600">{treat.more}</p>
//               </div>
//             </Link>
//           ))
//           }
//         </div>
//       </div>
//     </section>
//   </>
//   );
// };

// export default Treatements;


import { useState } from "react";
import LaparoPhoto from '../assets/LaparoPhoto.jpg'
import Hysteroscopy from '../assets/Treatments/Hysteroscopy.jpeg'
import VaginalDryness from '../assets/Treatments/VaginalDryness.jpeg'
import LaserTreatment from '../assets/Treatments/LaserTreatment.jpeg'
import UterineSeptumResection from '../assets/Treatments/UterineSeptumResection.jpeg'
import DiagnosticHysteroscopy from '../assets/Treatments/DiagnosticHysteroscopy.jpg'
import AdhesionRemoval from '../assets/Treatments/AdhesionRemoval.png'
import AbnormalUterineBleeding from '../assets/Treatments/AbnormalUterineBleeding.jpg'
import VaginalTightening from '../assets/Treatments/VaginalTightening.jpeg'
import HysteroscopyForIVF from '../assets/Treatments/HysteroscopyForIVF.png'
import CesareanDelivery from '../assets/Treatments/CesareanDelivery.jpg'
import RecurrentPregnancyLoss from '../assets/Treatments/RecurrentPregnancyLoss.png'
import HighBPAndDiabetesInPregnancy from '../assets/Treatments/HighBPAndDiabetesInPregnancy.png'
import NormalDelivery from '../assets/Treatments/NormalDelivery.png'
import PretemLabour from '../assets/Treatments/PretemLabour.png'
import Mammography from '../assets/Treatments/Mammography.png'
import BreastHealthCheckup from '../assets/Treatments/BreastHealthCheckup.png'
import HPVVaccination from '../assets/Treatments/HPVVaccination.png'


// import FibroidRemovalSurgery from '../assets/Treatments/FibroidRemovalSurgery.jpeg'

function Treatments() {

  const treatmentsData = [
    {
      category: "Infertility & IVF Treatment",
      key: "ivf",
      treatments: [
        {
          title: "IVF",
          description: "Advanced fertility solutions to help you conceive",
          image: LaparoPhoto,
        },
        {
          title: "IUI",
          description: "Simple and effective fertility treatment",
          image: LaparoPhoto,
        },
        {
          title: "ICSI",
          description: "Simple and effective fertility treatment",
          image: LaparoPhoto,
        },
      ],
    },
    {
      category: "Advanced Gynecological Care",
      key: "pregnancy",
      treatments: [
        {
          title: "Irregular Periods",
          description: "Expert care for complicated pregnancies",
          image: LaparoPhoto,
        },
        {
          title: "PCOS & PCOD",
          description: "Safe and comfortable vaginal delivery",
          image: LaparoPhoto,
        },
        {
          title: "Menopause Management",
          description: "Safe and comfortable vaginal delivery",
          image: LaparoPhoto,
        },
        {
          title: "Heavy Bleeding",
          description: "Safe and comfortable vaginal delivery",
          image: LaparoPhoto,
        },

      ],
    },
    {
      category: "High-Risk Pregnancy and Maternity Care",
      key: "gynae",
      treatments: [
        {
          title: "Cesarean (C-section Delivery",
          description: "Complete hormonal and cycle management",
          image: CesareanDelivery,
        },
        {
          title: "High BP and Diabetes in Pregnancy",
          description: "Diagnosis and treatment of cycle issues",
          image: HighBPAndDiabetesInPregnancy,
        },
        {
          title: "Pretem Labour",
          description: "Diagnosis and treatment of cycle issues",
          image: PretemLabour,
        },
        {
          title: "Recurrent Pregnancy Loss",
          description: "Diagnosis and treatment of cycle issues",
          image: RecurrentPregnancyLoss,
        },
        {
          title: "Normal Delivery",
          description: "Diagnosis and treatment of cycle issues",
          image: NormalDelivery,
        },
      ],
    },
    {
      category: "Laparoscopic Surgery",
      key: "surgery",
      treatments: [
        {
          title: "Ovarian Cyst Surgery",
          description: "Minimally invasive keyhole surgery",
          image: LaparoPhoto,
        },
        {
          title: "Fibroid Removal Surgeries",
          description: "Uterus procedures without cuts",
          image: LaparoPhoto,
        },
        {
          title: "Endometriosis",
          description: "Uterus procedures without cuts",
          image: LaparoPhoto,
        },
      ],
    },
    {
      category: "Hysterocopic Surgery",
      key: "preventive",
      treatments: [
        {
          title: "Uterine polyp Removal",
          description: "Early detection of cervical cancer",
          image: Hysteroscopy,
        },
        {
          title: "Pre IVF Hysterocopy Evaluation",
          description: "Regular screening for breast health",
          image: HysteroscopyForIVF,
        },
        {
          title: "Ahdesion Removal",
          description: "Regular screening for breast health",
          image: AdhesionRemoval,
        },
        {
          title: "Abnormal Uterine Bleeding",
          description: "Regular screening for breast health",
          image: AbnormalUterineBleeding,
        },
        {
          title: "Diagnostic Hysteroscopy",
          description: "Regular screening for breast health",
          image: DiagnosticHysteroscopy,
        },
        {
          title: "Uterine Septum Resection",
          description: "Regular screening for breast health",
          image: UterineSeptumResection,
        },

      ],
    },
    {
      category: "Vaginal Laser Treatment",
      key: "preventive",
      treatments: [
        {
          title: "Urine Leakage Treatment",
          description: "Early detection of cervical cancer",
          image: LaserTreatment,
        },
        {
          title: "Vaginal Dryness",
          description: "Regular screening for breast health",
          image: VaginalDryness,
        },
        {
          title: "Vaginal Tightening",
          description: "Regular screening for breast health",
          image: VaginalTightening,
        },
      ],
    },
    {
      category: "Preventive Womens Care",
      key: "preventive",
      treatments: [
        {
          title: "Breast Health Checkup",
          description: "Early detection of breast cancer and breast-related problems",
          image: BreastHealthCheckup,
        },
        {
          title: "Pap Smear Screening",
          description: "Screening test for early detection of cervical cancer",
          image: LaparoPhoto,
        },
        {
          title: "Mammography",
          description: "Advanced imaging test for early detection of breast cancer",
          image: Mammography,
        },
        {
          title: "HPV Vaccination",
          description: "Prevention of cervical cancer caused by HPV infection",
          image: HPVVaccination,
        },
      ],
    },
    {
      category: "Gynec Cancer Care",
      key: "preventive",
      treatments: [
        {
          title: "Ovarian Cancer",
          description: "Early detection of cervical cancer",
          image: LaparoPhoto,
        },
        {
          title: "Cervial Cancer",
          description: "Regular screening for breast health",
          image: LaparoPhoto,
        },
        {
          title: "Uterus Cancer",
          description: "Regular screening for breast health",
          image: LaparoPhoto,
        },
      ],
    },
  ];

  return (
    <section className="bg-[#f2f2f2] py-14 px-4">

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-serif text-pink-800">
          Our Treatments & Services
        </h2>
        <p className="text-gray-600 mt-3">
          Comprehensive care for every stage of a woman’s health journey
        </p>
      </div>

      {/* All Categories */}
      {treatmentsData.map((category) => (
        <div key={category.key} className="mb-14">

          {/* Category Title */}
          <h3 className="text-2xl font-semibold text-pink-800 mb-6 border-l-4 border-pink-800 pl-3">
            {category.category}
          </h3>

          {/* Treatments Grid */}
          <div className="flex flex-wrap gap-6">
            {category.treatments.map((item, index) => (

              <div
                key={index}
                className="w-full sm:w-[48%] md:w-[31%] bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover hover:scale-105 transition duration-300"
                />

                {/* Content */}
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-pink-800">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm mt-2">
                    {item.description}
                  </p>

                  {/* Button */}
                  <button className="mt-4 text-pink-800 font-medium hover:underline">
                    View More →
                  </button>
                </div>

              </div>

            ))}
          </div>
        </div>
      ))}

      {/* Bottom Line */}
      <div className="text-center mt-10">
        <p className="text-gray-600 italic">
          Trusted by thousands of women for safe & advanced care
        </p>
      </div>

    </section>
  );
}
export default Treatments;