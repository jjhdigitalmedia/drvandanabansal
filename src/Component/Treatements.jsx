import { useEffect, useState } from "react";
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
import PapSmear from '../assets/Treatments/PapSmear.png'
import OvarianCancer from '../assets/Treatments/OvarianCancer.png'
import CervicalCancer from '../assets/Treatments/CervicalCancer.png'
import UterusCancer from '../assets/Treatments/UterusCancer.png'
import IrregularPeriodsImage from '../assets/Treatments/IrregularPeriodsImage.png'
import PCOSAdnPCOD from '../assets/Treatments/PCOSAdnPCOD.png'
import LaparoscopicEndometriosis from '../assets/Treatments/LaparoscopicEndometriosis.jpg'
import EmbryoBanking from '../assets/Treatments/EmbryoBanking.jpg'
import OocyteCryopreservation from '../assets/Treatments/OocyteCryopreservation.jpg'
import SemenCryopreservationPhoto from '../assets/Treatments/SemenCryopreservationPhoto.png'
import IVFETPic from '../assets/Treatments/IVFETPic.jpg'
import IUIPic from '../assets/Treatments/IUIPic.jpg'
import ICSI from '../assets/Treatments/ICSI.png'
import BlastocystTransferPic from '../assets/Treatments/BlastocystTransferPic.png'
import InfertilitIVFIcon from '../assets/Treatments/InfertilitIVFIcon.png'
import AdvancedGynecologicalCareIcon from '../assets/Treatments/AdvancedGynecologicalCareIcon.png'
import HighRiskPregnancyIcon from '../assets/Treatments/HighRiskPregnancyIcon.png'
import LaparoscopicIcon from '../assets/Treatments/LaparoscopicIcon.png'
import HysteroscopicIcon from '../assets/Treatments/HysteroscopicIcon.png'
import VaginalLaserIcon from '../assets/Treatments/VaginalLaserIcon.png'
import GynaecCancerIcon from '../assets/Treatments/GynaecCancerIcon.png'
import PreventiveWomensIcon from '../assets/Treatments/PreventiveWomensIcon.png'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Treatments() {
  const [data, setData] = useState("ivf")
  const HandleSpecialization = (key, i) => {

    setData(key)

  }

  // useEffect(() => {
  //   setInterval(() => {
  //     for (let index = 0; ; index++) {
        
  //       if(SpecializationSection[index].key === data){
          
  //         if(index===SpecializationSection.length){
  //           let b=0;
  //           indext=b
  //         }
  //         let a = SpecializationSection[index+1].key;
  //         setData(a)

  //       }
  //     }
  //   }, 5000)
  // }, [data])

  const treatmentsData = [
    {
      category: "Infertility & IVF Treatment",
      key: "ivf",
      treatments: [
        {
          title: "IVF ET",
          description: "Advanced fertility solutions to help you conceive",
          image: IVFETPic,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "IUI",
          description: "Simple and effective fertility treatment",
          image: IUIPic,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "ICSI",
          description: "Simple and effective fertility treatment",
          image: ICSI,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "IMSI",
          description: "Simple and effective fertility treatment",
          image: LaparoPhoto,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Blastocyst Transfer",
          description: "Simple and effective fertility treatment",
          image: BlastocystTransferPic,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Semen Cryopreservation",
          description: "Simple and effective fertility treatment",
          image: SemenCryopreservationPhoto,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Oocyte Cryopreservation",
          description: "Simple and effective fertility treatment",
          image: OocyteCryopreservation,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Laser Assisted Hatching",
          description: "Simple and effective fertility treatment",
          image: LaparoPhoto,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "MESA",
          description: "Simple and effective fertility treatment",
          image: LaparoPhoto,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "TESA",
          description: "Simple and effective fertility treatment",
          image: LaparoPhoto,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Embryo Banking",
          description: "Simple and effective fertility treatment",
          image: EmbryoBanking,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Embryo Donation",
          description: "Simple and effective fertility treatment",
          image: LaparoPhoto,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Oocyte Donation",
          description: "Simple and effective fertility treatment",
          image: LaparoPhoto,
          link: 'treatments/cervical-cancer',
        },
      ],
    },
    {
      category: "Advanced Gynecological Care",
      key: "gynae",
      treatments: [
        {
          title: "Irregular Periods",
          description: "Expert care for complicated pregnancies",
          image: IrregularPeriodsImage,
          link: 'treatments/irregular-periods'
        },
        {
          title: "PCOS & PCOD",
          description: "Safe and comfortable vaginal delivery",
          image: PCOSAdnPCOD,
          link: 'treatments/pcos-pcod'
        },
        {
          title: "Menopause Management",
          description: "Safe and comfortable vaginal delivery",
          image: LaparoPhoto,
          link: 'treatments/menopause-management'
        },
        {
          title: "Heavy Menstrual Bleeding",
          description: "Safe and comfortable vaginal delivery",
          image: LaparoPhoto,
          link: 'treatments/heavy-menstrual-bleeding'
        },

      ],
    },
    {
      category: "High-Risk Pregnancy and Maternity Care",
      key: "pregnancy",
      treatments: [
        {
          title: "Cesarean (C-section Delivery",
          description: "Complete hormonal and cycle management",
          image: CesareanDelivery,
          link: 'treatments/cesarean-section-delivery'
        },
        {
          title: "High BP and Diabetes in Pregnancy",
          description: "Diagnosis and treatment of cycle issues",
          image: HighBPAndDiabetesInPregnancy,
          link: 'treatments/high-bp-and-diabetes-in-pregnancy'
        },
        {
          title: "Pretem Labour",
          description: "Diagnosis and treatment of cycle issues",
          image: PretemLabour,
          link: 'treatments/pretem-labour'
        },
        {
          title: "Recurrent Pregnancy Loss",
          description: "Diagnosis and treatment of cycle issues",
          image: RecurrentPregnancyLoss,
          link: 'treatments/recurrent-pregnancy-loss'
        },
        {
          title: "Normal Delivery",
          description: "Diagnosis and treatment of cycle issues",
          image: NormalDelivery,
          link: 'treatments/normal-delivery'
        },
      ],
    },
    {
      category: "Laparoscopic Surgery",
      key: "laparoscopy",
      treatments: [
        {
          title: "Ovarian Cyst Surgery",
          description: "Minimally invasive keyhole surgery",
          image: LaparoPhoto,
          link: 'treatments/ovarian-cyst-laparoscopic-surgery'
        },
        {
          title: "Fibroid Removal Surgeries",
          description: "Uterus procedures without cuts",
          image: LaparoPhoto,
          link: 'treatments/fibroid-removal-laparoscopic-surgery'
        },
        {
          title: "Endometriosis",
          description: "Uterus procedures without cuts",
          image: LaparoscopicEndometriosis,
          link: 'treatments/endometriosis-treatment'
        },
      ],
    },
    {
      category: "Hysterocopic Surgery",
      key: "hysteroscopy",
      treatments: [
        {
          title: "Uterine polyp Removal",
          description: "Early detection of cervical cancer",
          image: Hysteroscopy,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Pre IVF Hysterocopy Evaluation",
          description: "Regular screening for breast health",
          image: HysteroscopyForIVF,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Ahdesion Removal",
          description: "Regular screening for breast health",
          image: AdhesionRemoval,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Abnormal Uterine Bleeding",
          description: "Regular screening for breast health",
          image: AbnormalUterineBleeding,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Diagnostic Hysteroscopy",
          description: "Regular screening for breast health",
          image: DiagnosticHysteroscopy,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Uterine Septum Resection",
          description: "Regular screening for breast health",
          image: UterineSeptumResection,
          link: 'treatments/cervical-cancer'
        },

      ],
    },
    {
      category: "Vaginal Laser Treatment",
      key: "laser",
      treatments: [
        {
          title: "Urine Leakage Treatment",
          description: "Early detection of cervical cancer",
          image: LaserTreatment,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Vaginal Dryness",
          description: "Regular screening for breast health",
          image: VaginalDryness,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Vaginal Tightening",
          description: "Regular screening for breast health",
          image: VaginalTightening,
          link: 'treatments/cervical-cancer'
        },
      ],
    },
    {
      category: "Preventive Womens Care",
      key: "womens",
      treatments: [
        {
          title: "Breast Health Checkup",
          description: "Early detection of breast cancer and breast-related problems",
          image: BreastHealthCheckup,
          link: 'treatments/breast-health-checkup'
        },
        {
          title: "Pap Smear Screening",
          description: "Screening test for early detection of cervical cancer",
          image: PapSmear,
          link: 'treatments/pap-smear-screening'
        },
        {
          title: "Mammography",
          description: "Advanced imaging test for early detection of breast cancer",
          image: Mammography,
          link: 'treatments/mammography'
        },
        {
          title: "HPV Vaccination",
          description: "Prevention of cervical cancer caused by HPV infection",
          image: HPVVaccination,
          link: 'treatments/hpv-vaccination'
        },
      ],
    },
    {
      category: "Gynec Cancer Care",
      key: "gynaecancer",
      treatments: [
        {
          title: "Ovarian Cancer",
          link: 'treatments/ovarian-cancer',
          description: "Early detection of cervical cancer",
          image: OvarianCancer,
        },
        {
          title: "Cervial Cancer",
          link: 'treatments/cervical-cancer',
          description: "Regular screening for breast health",
          image: CervicalCancer,
        },
        {
          title: "Uterus Cancer",
          link: 'treatments/uterus-cancer',
          description: "Regular screening for breast health",
          image: UterusCancer,
        },
      ],
    },
  ];

  const SpecializationSection = [
    {
      key: 'ivf',
      Cardtitle: "Infertility and IVf",
      CardDesc: "Advanced IVF treatments with personalized care and global success rates.",
      CardIcon: InfertilitIVFIcon,
    },
    {
      key: 'gynae',
      Cardtitle: "Advanced Gynecological care",
      CardDesc: "Expert care for high-risk pregnancies and fetal interventions.",
      CardIcon: AdvancedGynecologicalCareIcon,
    },
    {
      key: 'pregnancy',
      Cardtitle: "High Risk Pregnancy and Maternity Care",
      CardDesc: "Complete care through pregnancy, delivery and postnatal journey.",
      CardIcon: HighRiskPregnancyIcon,
    },
    {
      key: 'laparoscopy',
      Cardtitle: "Laparoscopic Surgery",
      CardDesc: "Comprehensive women healthcare from teenage to menopause.",
      CardIcon: LaparoscopicIcon,
    },
    {
      key: 'hysteroscopy',
      Cardtitle: "Hysteroscopic Surgery",
      CardDesc: "PCOS, endometriosis, fibroids and other complex conditions.",
      CardIcon: HysteroscopicIcon,
    },
    {
      key: 'laser',
      Cardtitle: "Vaginal Laser Treatment",
      CardDesc: "PCOS, endometriosis, fibroids and other complex conditions.",
      CardIcon: VaginalLaserIcon,
    },
    {
      key: 'womens',
      Cardtitle: "Preventive Womens Care",
      CardDesc: "PCOS, endometriosis, fibroids and other complex conditions.",
      CardIcon: PreventiveWomensIcon,
    },
    {
      key: 'gynaecancer',
      Cardtitle: "Gynaec Cancer Care",
      CardDesc: "PCOS, endometriosis, fibroids and other complex conditions.",
      CardIcon: GynaecCancerIcon,
    },
  ]

  return (
    <>
      <Helmet>
        <title>Gynecology, IVF & Infertility Treatments in Prayagraj | Dr. Vandana Bansal</title>
        <meta name="description" content="Discover advanced gynecology, IVF, infertility, pregnancy, laparoscopy, hysteroscopy, PCOS, and women’s health treatments by Dr. Vandana Bansal in Prayagraj with personalized and compassionate care." />
        <meta name="keywords" content="gynecology treatments in Prayagraj, IVF treatment Prayagraj, infertility specialist Prayagraj, gynecologist in Prayagraj, women health specialist, pregnancy care doctor, PCOS treatment, irregular periods treatment, laparoscopy surgeon Prayagraj, hysteroscopy treatment, fertility specialist Prayagraj, best gynecologist in Prayagraj, infertility treatment near me, female infertility doctor, high risk pregnancy specialist, ovarian cyst treatment, fibroid treatment, normal delivery doctor, Dr Vandana Bansal, IVF specialist Prayagraj" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>

      <section className="w-full bg-5] py-20 px-6 md:px-16">
        <div className="max-w-full mx-auto text-center">
          {/* Heading */}
          <p className="text-pink-500 uppercase tracking-[4px] text-sm font-semibold mb-3">
            Specializations
          </p>
          <h2 className="text-4xl md:text-5xl font-cambria text-pink-700 mb-5">
            Comprehensive Care for Every <br />
            Stage of Womanhood
          </h2>
          <div className="w-24 h-[2px] bg-pink-700 mx-auto mb-14"></div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center w-full mx-auto gap-6">

            {/* <marquee behavior="" direction=""> */}
            {SpecializationSection.map((item, i) => (
              <>
                {/* {data === 'ghfg' ? ( */}
                <div className={`bg-whit border cursor-pointer flex border-pink-100 w-96 h-32 rounded-3xl p-4 hover:shadow-xl transition duration-300 ${item.key === data ? "bg-pink-800 shadow-md border-white text-white" : ''}`} onClick={() => { HandleSpecialization(item.key, item.i) }}>
                  <img className="w-20 h-20 mx-auto" src={item.CardIcon} alt="" />
                  <div className="ml-6">
                    <h3 className={`text-lg font-cambria text-left text-[#3d1d46] ${item.key === data ? "text-white" : ''} `}>
                      {item.Cardtitle}
                    </h3>
                    <p className={`text-gray-600 text-left leading-relaxed text-sm ${item.key === data ? "text-white" : ''} `}>
                      {item.CardDesc}
                    </p>
                  </div>
                </div>
                {/* ) : ''} */}
              </>
            ))}
            {/* </marquee> */}

          </div>
        </div>
      </section>

      <section className="bg-[#f2f2f2] py-14 px-4">

        {/* All Categories */}
        {treatmentsData.map((category, k) => (
          <>
            {data === category.key ? (
              <div key={category.key} className="mb-14">

                {/* Category Title */}
                <h3 className="text-2xl font-cambria text-pink-800 mb-6 border-l-4 border-pink-800 pl-3">
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
                        <Link to={item.link} className="mt-4 text-pink-800 opacity-65 font-medium hover:underline">
                          View More →
                        </Link>
                      </div>
                    </div>

                  ))}
                </div>
              </div>
            ) : ''}
          </>
        ))}

        {/* Bottom Line */}
        <div className="text-center mt-10">
          <p className="text-gray-600 italic">
            Trusted by thousands of women for safe & advanced care
          </p>
        </div>

      </section>
    </>
  );
}
export default Treatments;