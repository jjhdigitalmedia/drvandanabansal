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
import AestheticGynae from '../assets/Treatments/AestheticGynae.png'
import AestheticGynaecology from '../assets/Treatments/AestheticGynaecology.png'
import FibroidRemoval from '../assets/Treatments/FibroidRemoval.jpeg'
import Lapro from '../assets/Treatments/Lapro.png'
import BreastCancer from '../assets/Treatments/BreastCancer.png'
import MenopauseManagement from '../assets/Treatments/MenopauseManagement.png'
import HeavyMenstrualBleeding from '../assets/Treatments/HeavyMenstrualBleeding.png'
import PainlessEpidural from '../assets/Treatments/PainlessEpidural.png'
import EmbryoDonation from '../assets/Treatments/EmbryoDonation.png'
import OocyteDonation from '../assets/Treatments/OocyteDonation.png'
import MESA from '../assets/Treatments/MESA.png'
import TESA from '../assets/Treatments/TESA.png'
import LaserAssistedHatching from '../assets/Treatments/LaserAssistedHatching.png'
import MenopauseAndLongevity from '../assets/Treatments/MenopauseAndLongevity.png'

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
          description: "Advanced fertility treatment to help achieve a successful pregnancy.",
          image: IVFETPic,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "IUI",
          description: "A simple fertility treatment to improve the chances of conception.",
          image: IUIPic,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "ICSI",
          description: "Advanced fertilization technique for selected male and female infertility cases.",
          image: ICSI,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "IMSI",
          description: "Advanced sperm selection technique used in selected IVF treatments.",
          image: IUIPic,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Blastocyst Transfer",
          description: "Transfer of a developed embryo to improve the chances of implantation.",
          image: BlastocystTransferPic,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Semen Cryopreservation",
          description: "Safe freezing and storage of sperm for future fertility treatment.",
          image: SemenCryopreservationPhoto,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Oocyte Cryopreservation",
          description: "Freezing and preserving eggs for future fertility treatment.",
          image: OocyteCryopreservation,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Laser Assisted Hatching",
          description: "A technique that may help the embryo implant during selected IVF treatments.",
          image: LaserAssistedHatching,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "MESA",
          description: "A surgical technique to retrieve sperm from the epididymis for fertility treatment.",
          image: MESA,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "TESA",
          description: "A minimally invasive technique to retrieve sperm directly from the testis.",
          image: TESA,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Embryo Banking",
          description: "Freezing and storing embryos for future fertility treatment or transfer.",
          image: EmbryoBanking,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Embryo Donation",
          description: "Using donated embryos to help eligible patients achieve pregnancy.",
          image: EmbryoDonation,
          link: 'treatments/cervical-cancer',
        },
        {
          title: "Oocyte Donation",
          description: "Using donated eggs as part of fertility treatment to help achieve pregnancy.",
          image: OocyteDonation,
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
          description: "Diagnosis and treatment for irregular, painful or abnormal menstrual cycles.",
          image: IrregularPeriodsImage,
          link: 'treatments/irregular-periods'
        },
        {
          title: "PCOS & PCOD",
          description: "Personalized care to manage PCOS, PCOD and related hormonal concerns.",
          image: PCOSAdnPCOD,
          link: 'treatments/pcos-pcod'
        },
        {
          title: "Menopause Management",
          description: "Personalized care to manage menopause symptoms and support healthy ageing.",
          image: MenopauseManagement,
          link: 'treatments/menopause-management'
        },
        {
          title: "Heavy Menstrual Bleeding",
          description: "Evaluation and treatment for heavy or prolonged menstrual bleeding.",
          image: HeavyMenstrualBleeding,
          link: 'treatments/heavy-menstrual-bleeding'
        },

      ],
    },
    {
      category: "Aesthetic Gynae & Functional Medicine",
      key: "aesthetic",
      treatments: [
        {
          title: "Stress Urinary Incontinence",
          description: "Advanced evaluation and non-surgical or minimally invasive treatment for urinary leakage during daily activities.",
          image: AestheticGynaecology,
          link: "treatments/stress-urinary-incontinence"
        },
        {
          title: "Hymenoplasty",
          description: "Confidential surgical restoration of the hymen performed with a personalized approach, ensuring privacy, safety, and compassionate care.",
          image: AestheticGynaecology,
          link: "treatments/hymenoplasty"
        },
        {
          title: "Pelvic Floor Treatment",
          description: "Comprehensive therapies to strengthen pelvic floor muscles and improve bladder control and pelvic health.",
          image: AestheticGynaecology,
          link: "treatments/pelvic-floor-rehabilitation"
        },
        {
          title: "Intimate Wellness & Vaginal Rejuvenation",
          description: "Personalized laser-based treatments to improve vaginal health, elasticity, lubrication, comfort, and confidence.",
          image: VaginalTightening,
          link: 'treatments/cervical-cancer'
        },
        // {
        //   title: "Vaginal Rejuvenation",
        //   description: "Non-surgical treatments designed to improve vaginal health, comfort, elasticity, and overall intimate wellness.",
        //   image: LaserTreatment,
        //   link: "treatments/vaginal-rejuvenation"
        // },
        // {
        //   title: "Vaginal Dryness",
        //   description: "Laser-based care to help relieve vaginal dryness and related discomfort.",
        //   image: VaginalDryness,
        //   link: 'treatments/cervical-cancer'
        // },
        // {
        //   title: "Genitourinary Syndrome of Menopause (GSM)",
        //   description: "Personalized treatment for vaginal dryness, irritation, and urinary symptoms associated with menopause.",
        //   image: AestheticGynaecology,
        //   link: "treatments/genitourinary-syndrome-of-menopause"
        // },
        // {
        //   title: "Vaginismus Treatment",
        //   description: "Personalized care to help overcome painful intercourse and pelvic floor muscle spasm.",
        //   image: AestheticGynaecology,
        //   link: "treatments/vaginismus-treatment"
        // },
        {
          title: "Labiaplasty",
          description: "Surgical reshaping of the labia to improve comfort, function, and appearance.",
          image: AestheticGynaecology,
          link: "treatments/labiaplasty"
        },
        {
          title: "Vaginismus Treatment",
          description: "Personalized care to help overcome painful intercourse and pelvic floor muscle spasm.",
          image: AestheticGynaecology,
          link: "treatments/vaginismus-treatment"
        },
        {
          title: "Sexual Wellness & Intimate Health",
          description: "Comprehensive care for female sexual health concerns, including pain, dryness, and reduced sexual well-being.",
          image: AestheticGynaecology,
          link: "treatments/sexual-wellness"
        },
        {
          title: "Functional Medicine for Women's Health",
          description: "A holistic approach to optimize hormonal balance, metabolism, gut health, and overall well-being through personalized care.",
          image: AestheticGynaecology,
          link: "treatments/functional-medicine"
        }
      ]
    },
    {
      category: "High-Risk Pregnancy and Maternity Care",
      key: "pregnancy",
      treatments: [
        {
          title: "Cesarean (C-section Delivery",
          description: "Safe and personalized surgical care when a C-section is medically recommended.",
          image: CesareanDelivery,
          link: 'treatments/cesarean-section-delivery'
        },
        {
          title: "Painless (Epidural) Delivery",
          description: "Experience a more comfortable childbirth with safe epidural pain relief under expert obstetric and anesthetic care.",
          image: PainlessEpidural,
          link: "treatments/painless-epidural-delivery"
        },
        {
          title: "High BP and Diabetes in Pregnancy",
          description: "Specialized monitoring and management of blood pressure and diabetes during pregnancy.",
          image: HighBPAndDiabetesInPregnancy,
          link: 'treatments/high-bp-and-diabetes-in-pregnancy'
        },
        {
          title: "Pretem Labour",
          description: "Timely diagnosis and specialized care to manage the risk of premature delivery.",
          image: PretemLabour,
          link: 'treatments/pretem-labour'
        },
        {
          title: "Recurrent Pregnancy Loss",
          description: "Comprehensive evaluation and personalized care to identify and manage causes of repeated pregnancy loss.",
          image: RecurrentPregnancyLoss,
          link: 'treatments/recurrent-pregnancy-loss'
        },
        {
          title: "Normal Delivery",
          description: "Personalized maternity care to support a safe and healthy vaginal delivery.",
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
          description: "Minimally invasive surgery to treat ovarian cysts with smaller incisions and faster recovery.",
          image: Lapro,
          link: 'treatments/ovarian-cyst-laparoscopic-surgery'
        },
        {
          title: "Fibroid Removal Surgeries",
          description: "Minimally invasive procedures to remove uterine fibroids while preserving the uterus when possible.",
          image: FibroidRemoval,
          link: 'treatments/fibroid-removal-laparoscopic-surgery'
        },
        {
          title: "Endometriosis",
          description: "Laparoscopic treatment to diagnose and manage endometriosis and related pelvic pain.",
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
          description: "Minimally invasive removal of uterine polyps to improve uterine health and symptoms.",
          image: Hysteroscopy,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Pre IVF Hysterocopy Evaluation",
          description: "Hysteroscopic evaluation of the uterus before IVF to identify possible abnormalities.",
          image: HysteroscopyForIVF,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Ahdesion Removal",
          description: "Minimally invasive removal of uterine adhesions to restore the normal uterine cavity.",
          image: AdhesionRemoval,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Abnormal Uterine Bleeding",
          description: "Hysteroscopic evaluation and treatment of conditions causing abnormal uterine bleeding.",
          image: AbnormalUterineBleeding,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Diagnostic Hysteroscopy",
          description: "A minimally invasive procedure to examine the inside of the uterus and identify abnormalities.",
          image: DiagnosticHysteroscopy,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Uterine Septum Resection",
          description: "Hysteroscopic removal of a uterine septum to improve the uterine cavity and reproductive outcomes.",
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
          description: "Laser-based treatment to help manage selected cases of urinary leakage and improve bladder control.",
          image: LaserTreatment,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Vaginal Dryness",
          description: "Laser-based care to help relieve vaginal dryness and related discomfort.",
          image: VaginalDryness,
          link: 'treatments/cervical-cancer'
        },
        {
          title: "Vaginal Tightening",
          description: "Laser-based treatment to improve vaginal tissue tone and address selected concerns.",
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
          description: "Early screening and evaluation for breast health and related concerns.",
          image: BreastHealthCheckup,
          link: 'treatments/breast-health-checkup'
        },
        {
          title: "Pap Smear Screening",
          description: "A screening test for early detection of cervical cell changes and cervical cancer.",
          image: PapSmear,
          link: 'treatments/pap-smear-screening'
        },
        {
          title: "Bone Health Screening",
          description: "Assessment of bone health to identify bone loss and the risk of osteoporosis.",
          image: PapSmear,
          link: 'treatments/bone-health-screening'
        },
        {
          title: "Mammography",
          description: "An advanced breast imaging test for early detection of breast abnormalities and cancer.",
          image: Mammography,
          link: 'treatments/mammography'
        },
        {
          title: "HPV Vaccination",
          description: "Vaccination to help protect against HPV-related diseases, including cervical cancer.",
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
          description: "Ovarian Cancer Comprehensive evaluation and specialized care for ovarian cancer and related conditions.",
          image: OvarianCancer,
        },
        {
          title: "Cervial Cancer",
          link: 'treatments/cervical-cancer',
          description: "Screening, diagnosis and comprehensive care for cervical cancer and precancerous changes.",
          image: CervicalCancer,
        },
        {
          title: "Uterine (Endometrial) Cancer",
          link: 'treatments/uterus-cancer',
          description: "Evaluation and specialized treatment for cancers affecting the uterus and uterine lining.",
          image: UterusCancer,
        },
        {
          title: "Breast Cancer",
          link: "treatments/breast-cancer",
          description: "Early detection, diagnosis, and comprehensive treatment for breast cancer with personalized care.",
          image: BreastCancer,
        },
      ],
    },
  ];

  const SpecializationSection = [
    {
      key: 'ivf',
      Cardtitle: "Infertility and IVf",
      CardDesc: "Personalized IVF care with advanced fertility treatments.",
      CardIcon: InfertilitIVFIcon,
    },
    {
      key: 'gynae',
      Cardtitle: "Advanced Gynecological care",
      CardDesc: "Expert care for a wide range of women’s health concerns.",
      CardIcon: AdvancedGynecologicalCareIcon,
    },
    {
      key: 'aesthetic',
      Cardtitle: "Aesthetic Gynae & Functional Medicine",
      CardDesc: "Advanced care for women's intimate health.",
      CardIcon: AestheticGynae,
    },
    {
      key: 'menopause',
      Cardtitle: "Menopause, Healthy Aging & Longevity",
      CardDesc: "Personalized care to support menopause, hormonal balance, and longevity.",
      CardIcon: MenopauseAndLongevity,
    },
    {
      key: 'pregnancy',
      Cardtitle: "High Risk Pregnancy and Maternity Care",
      CardDesc: "Comprehensive care for high-risk pregnancies and maternity.",
      CardIcon: HighRiskPregnancyIcon,
    },
    {
      key: 'laparoscopy',
      Cardtitle: "Laparoscopic Surgery",
      CardDesc: "Minimally invasive surgery with faster recovery.",
      CardIcon: LaparoscopicIcon,
    },
    {
      key: 'hysteroscopy',
      Cardtitle: "Hysteroscopic Surgery",
      CardDesc: "Minimally invasive treatment for uterine conditions.",
      CardIcon: HysteroscopicIcon,
    },
    // {
    //   key: 'laser',
    //   Cardtitle: "Vaginal Laser Treatment",
    //   CardDesc: "Advanced laser care for selected vaginal health concerns.",
    //   CardIcon: VaginalLaserIcon,
    // },
    {
      key: 'womens',
      Cardtitle: "Preventive Womens Care",
      CardDesc: "Preventive care and screening at every stage of life.",
      CardIcon: PreventiveWomensIcon,
    },
    {
      key: 'gynaecancer',
      Cardtitle: "Gynaec Cancer Care",
      CardDesc: "Screening and comprehensive care for gynaecological cancers.",
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
          <h2 className="text-4xl md:text-6xl font-cormorant font-semibold text-pink-700 mb-5">
            Womens Care at Every Stage
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