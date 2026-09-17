import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Award,
  BookOpen,
  BriefcaseMedical,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  Hospital,
  Microscope,
  Stethoscope,
  Users,
} from "lucide-react";

// =====================================================
// IMAGE PATHS
// Apne actual image paths yahan set kar dena
// =====================================================

import DoctorHero from "../assets/DoctorHero.png";
import OPD from '../assets/Treatments/OPD.png'
import OTSurgery from '../assets/Treatments/OTSurgery.jpeg'
// import doctorIntro from "../assets/About/dr-vandana-intro.jpg";
// import hospitalImage from "../assets/About/jeevan-jyoti-hospital.jpg";
// import awardImage from "../assets/About/dr-vandana-award.jpg";

const imagePaths = {
  hero: DoctorHero,
  intro: OTSurgery,
  hospital: OPD,
  award: DoctorHero,
};

const AboutPage = () => {
  const qualifications = [
    "MBBS",
    "DGO",
    "MS",
    "FCGP",
    "FICGP",
    "CIMP",
    "D.Phil in IVF from Allahabad University – Gold Medalist",
    "Diploma in Endoscopic Surgery, Germany",
  ];

  const interests = [
    "Infertility & IVF",
    "ICSI",
    "Pregnancy & Maternity Care",
    "High-Risk Pregnancy",
    "PCOS / PCOD",
    "Menstrual Disorders",
    "Laparoscopic Surgery",
    "Hysteroscopic Surgery",
    "Fibroid Management",
    "Abnormal Uterine Bleeding",
    "Reproductive Health",
    "Aesthetic Gynaecology",
    "Menopause Management",
    "Healthy Aging & Longevity",
  ];

  const memberships = [
    "Indian Medical Association (IMA)",
    "FOGSI",
    "Indian Society for Assisted Reproduction (ISAR)",
    "Indian Fertility Society (IFS)",
    "Indian Menopause Society (IMS)",
    "AAGL",
    "IAGE",
    "Society of Fetal Medicine",
    "PCOS Society India",
    "FICMCH & ICMCH",
    "ISPAT",
    "ISARM",
    "FIGO & AOFOG",
    "ESHRE",
    "Rotary Club of Allahabad-East",
    "Rotary Allahabad Midtown",
    "International Integration & Growth Society (IIGS)",
  ];

  const carePrinciples = [
    {
      title: "Compassion",
      text: "Understanding the emotional and individual needs of every patient.",
    },
    {
      title: "Communication",
      text: "Making medical information easier for patients to understand.",
    },
    {
      title: "Personalized Care",
      text: "Treatment planning based on individual clinical requirements.",
    },
    {
      title: "Evidence-Based Practice",
      text: "Using appropriate medical knowledge and modern treatment approaches.",
    },
    {
      title: "Continuity of Care",
      text: "Supporting patients through important stages of their healthcare journey.",
    },
  ];

  const stats = [
    {
      number: "38+",
      label: "Years of Experience",
      icon: <BriefcaseMedical size={23} />,
    },
    {
      number: "40,000+",
      label: "Successful Pregnancies",
      icon: <HeartPulse size={23} />,
    },
    {
      number: "50,000+",
      label: "Women Cared For",
      icon: <Users size={23} />,
    },
    {
      number: "640+",
      label: "Successful IVF Pregnancies",
      icon: <Microscope size={23} />,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          About Dr. Vandana Bansal | Gynaecologist & IVF Specialist in
          Prayagraj
        </title>

        <meta
          name="description"
          content="Learn about Dr. Vandana Bansal, Senior Gynaecologist, Obstetrician, Infertility & IVF Specialist and Laparoscopic & Hysteroscopic Surgeon in Prayagraj."
        />
      </Helmet>

      <main className="bg-white text-gray-800">

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="bg-[#f1f1f1]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">

              {/* LEFT */}
              <div>

                <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-5">
                  About Dr. Vandana Bansal
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.12] text-gray-900">
                  Expertise. Experience.
                  <span className="block text-pink-800 mt-2">
                    Compassionate Women's Healthcare.
                  </span>
                </h1>

                <div className="w-16 h-1 bg-pink-800 my-7" />

                <p className="text-lg leading-8 text-gray-600 max-w-2xl">
                  With over 38 years of experience in Obstetrics,
                  Gynaecology and Infertility care, Dr. Vandana Bansal is a
                  senior Gynaecologist, Infertility & IVF Specialist and
                  Advanced Laparoscopic & Hysteroscopic Surgeon in Prayagraj.
                </p>

                <p className="mt-5 text-lg leading-8 text-gray-600 max-w-2xl">
                  As the Director of Jeevan Jyoti Hospital and Arpit Test Tube
                  Baby Centre, she is committed to providing comprehensive
                  women's healthcare with modern medical expertise and
                  individualized patient care.
                </p>

              </div>


              {/* RIGHT - DOCTOR IMAGE */}
              <div className="relative">

                <div className="absolute -bottom-4 -left-4 w-28 h-28 border-l-4 border-b-4 border-pink-800" />

                <div className="relative bg-white p-3 shadow-sm">
                  <img
                    src={imagePaths.hero}
                    alt="Dr. Vandana Bansal - Senior Gynaecologist and IVF Specialist in Prayagraj"
                    className="w-full h-[520px] lg:h-[600px] object-cover object-top"
                  />
                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 border-r-4 border-t-4 border-pink-800" />

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            DOCTOR INTRODUCTION
        ====================================================== */}

        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* IMAGE */}

              <div className="relative">

                <div className="absolute top-5 left-5 w-full h-full border border-pink-800" />

                <img
                  src={imagePaths.intro}
                  alt="Dr. Vandana Bansal providing women's healthcare"
                  className="relative w-full h-[450px] lg:h-[520px] object-cover"
                />

              </div>


              {/* CONTENT */}

              <div>

                <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-4">
                  Meet Dr. Vandana Bansal
                </p>

                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                  A Journey Dedicated to
                  <span className="block text-pink-800">
                    Women's Healthcare
                  </span>
                </h2>

                <div className="mt-7 space-y-5 text-lg text-gray-600 leading-8">

                  <p>
                    Dr. Vandana Bansal is a renowned Senior Gynaecologist and
                    Obstetrician with 38+ years of experience in women's
                    healthcare, infertility, pregnancy care and advanced
                    gynecological surgery.
                  </p>

                  <p>
                    She is the Director of Jeevan Jyoti Hospital, Prayagraj,
                    and Arpit Test Tube Baby Centre, where she provides
                    specialized care in infertility and IVF, pregnancy and
                    maternity care, high-risk pregnancy, PCOS, gynecological
                    disorders, laparoscopic and hysteroscopic surgery,
                    aesthetic gynaecology and menopause management.
                  </p>

                  <p>
                    Her professional journey has been guided by a simple
                    principle — to combine medical expertise with
                    compassionate and personalized care.
                  </p>

                  <p>
                    Over the years, she has remained closely involved in
                    patient care as well as the development of specialized
                    healthcare services, with the aim of making advanced
                    medical treatment accessible to patients in Prayagraj
                    and surrounding regions.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            EXPERIENCE
        ====================================================== */}

        <section className="bg-[#f1f1f1] py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mb-12">

              <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-3">
                38+ Years of Experience
              </p>

              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                A Long-Standing Commitment to
                <span className="block text-pink-800">
                  Women's Health
                </span>
              </h2>

            </div>


            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-300">

              {/* {stats.map((item, index) => (
                <div
                  key={index}
                  className={`
                    py-8 pr-6
                    ${index < 3 ? "lg:border-r border-gray-300" : ""}
                    ${index % 2 === 0 ? "border-r border-gray-300 lg:border-r" : ""}
                  `}
                >

                  <div className="text-pink-800 mb-4">
                    {item.icon}
                  </div>

                  <div className="text-3xl lg:text-4xl font-semibold text-gray-900">
                    {item.number}
                  </div>

                  <p className="mt-2 text-gray-600">
                    {item.label}
                  </p>

                </div>
              ))} */}

            </div>


            <div className="mt-10 max-w-4xl text-gray-600 leading-8 text-lg space-y-4">

              <p>
                With more than three decades of clinical experience, Dr.
                Vandana Bansal has cared for women across different stages
                of life — from reproductive health and fertility to pregnancy,
                gynecological surgery and menopause.
              </p>

              <p>
                Her experience includes the management of routine as well as
                complex gynecological and obstetric conditions, along with
                advanced fertility and minimally invasive surgical care.
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            QUALIFICATIONS
        ====================================================== */}

        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">

              <div>

                <div className="w-12 h-12 bg-pink-800 text-white flex items-center justify-center rounded-full mb-6">
                  <GraduationCap size={23} />
                </div>

                <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-4">
                  Medical Education
                </p>

                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                  Strong Academic Foundation.
                  <span className="block text-pink-800">
                    Advanced Medical Training.
                  </span>
                </h2>

                <p className="mt-6 text-lg text-gray-600 leading-8">
                  Her academic achievements and specialized training have
                  helped her develop expertise in modern infertility
                  treatment, reproductive medicine and minimally invasive
                  gynecological surgery.
                </p>

              </div>


              <div className="border-t border-gray-300">

                {qualifications.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 py-4 border-b border-gray-300"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-pink-800 mt-1 shrink-0"
                    />

                    <span className="text-gray-700 leading-7">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROFESSIONAL JOURNEY + IMAGE
        ====================================================== */}

        <section className="bg-[#f1f1f1] py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* IMAGE */}

              <div className="order-2 lg:order-1">

                <img
                  src={imagePaths.hospital}
                  alt="Jeevan Jyoti Hospital Prayagraj"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />

              </div>


              {/* TEXT */}

              <div className="order-1 lg:order-2">

                <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-4">
                  Professional Journey
                </p>

                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                  From a Small Beginning to
                  <span className="block text-pink-800">
                    Advanced Women's Healthcare
                  </span>
                </h2>

                <div className="mt-8 space-y-5 text-lg text-gray-600 leading-8">

                  <p>
                    Dr. Vandana Bansal's professional journey is closely
                    connected with the development of specialized healthcare
                    services in Prayagraj.
                  </p>

                  <p>
                    In 1988, Dr. Vandana Bansal and Dr. A.K. Bansal began
                    their healthcare journey with a small clinic in Allahabad.
                    Their vision was to build a healthcare institution that
                    could provide modern medical facilities and specialized
                    treatment while remaining accessible to the common man.
                  </p>

                  <p>
                    Over the years, this vision developed into Jeevan Jyoti
                    Hospital and later into Arpit Test Tube Baby Centre,
                    creating dedicated facilities for women's healthcare,
                    fertility and reproductive medicine.
                  </p>

                  <p>
                    Dr. Vandana Bansal has continued to remain actively
                    involved in clinical practice, patient care and the
                    development of advanced women's healthcare services.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            AREAS OF INTEREST
        ====================================================== */}

        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mb-12">

              <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-3">
                Areas of Special Interest
              </p>

              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Specialized Care for Every Stage
                <span className="block text-pink-800">
                  of a Woman's Life
                </span>
              </h2>

              <p className="mt-5 text-lg text-gray-600 leading-8">
                Her approach focuses on understanding the individual needs of
                every patient and providing appropriate treatment based on
                clinical requirements.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-300">

              {interests.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 py-4 border-b border-gray-300"
                >
                  <span className="w-2 h-2 rounded-full bg-pink-800 shrink-0" />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            SPECIALIZED CARE
        ====================================================== */}

        <section className="bg-[#f1f1f1] py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mb-14">

              <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-3">
                Specialized Care
              </p>

              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Comprehensive Women's Healthcare
              </h2>

            </div>


            <div className="space-y-0">

              {/* IVF */}

              <div className="grid lg:grid-cols-[270px_1fr] gap-8 py-10 border-t border-gray-300">

                <div>
                  <h3 className="text-2xl font-semibold text-pink-800">
                    Infertility & IVF Care
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Helping Couples Move Forward
                  </p>
                </div>

                <div className="text-gray-600 leading-8 text-lg space-y-4">

                  <p>
                    Infertility treatment requires careful evaluation,
                    accurate diagnosis and individualized planning.
                  </p>

                  <p>
                    Dr. Vandana Bansal specializes in infertility management
                    and assisted reproductive care, helping couples understand
                    their fertility concerns and available treatment options.
                  </p>

                  <p>
                    At Arpit Test Tube Baby Centre, fertility care is
                    supported by specialized reproductive medicine services
                    and modern treatment approaches.
                  </p>

                </div>

              </div>


              {/* Pregnancy */}

              <div className="grid lg:grid-cols-[270px_1fr] gap-8 py-10 border-t border-gray-300">

                <div>
                  <h3 className="text-2xl font-semibold text-pink-800">
                    Pregnancy & Women's Healthcare
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Complete Care Through Pregnancy
                  </p>
                </div>

                <div className="text-gray-600 leading-8 text-lg">

                  <p>
                    Pregnancy is a unique journey for every woman. Dr.
                    Vandana Bansal provides comprehensive antenatal and
                    maternity care tailored to the individual needs of each
                    pregnancy.
                  </p>

                  <p className="mt-4">
                    Her goal is to provide women with appropriate medical
                    guidance and continuous support throughout pregnancy and
                    maternity care.
                  </p>

                </div>

              </div>


              {/* Surgery */}

              <div className="grid lg:grid-cols-[270px_1fr] gap-8 py-10 border-t border-gray-300">

                <div>
                  <h3 className="text-2xl font-semibold text-pink-800">
                    Laparoscopic & Hysteroscopic Surgery
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Minimally Invasive Gynaecological Surgery
                  </p>
                </div>

                <div className="text-gray-600 leading-8 text-lg space-y-4">

                  <p>
                    Dr. Vandana Bansal has extensive experience in
                    Laparoscopic and Hysteroscopic Surgery, providing
                    minimally invasive treatment for a range of gynecological
                    conditions.
                  </p>

                  <p>
                    Hysteroscopy can also be used for pre-IVF uterine
                    evaluation, while laparoscopy may be recommended for
                    appropriate gynecological and fertility-related conditions.
                  </p>

                  <p>
                    The focus is on selecting the right surgical approach
                    according to the patient's condition and clinical
                    requirements.
                  </p>

                </div>

              </div>


              {/* Menopause */}

              <div className="grid lg:grid-cols-[270px_1fr] gap-8 py-10 border-t border-gray-300">

                <div>
                  <h3 className="text-2xl font-semibold text-pink-800">
                    Menopause, Healthy Aging & Longevity
                  </h3>

                  <p className="mt-2 text-gray-500">
                    Women's Health Beyond Reproductive Years
                  </p>
                </div>

                <div className="text-gray-600 leading-8 text-lg">

                  <p>
                    Women's healthcare continues throughout life. Dr. Vandana
                    Bansal provides specialized care for women during
                    perimenopause, menopause and healthy aging.
                  </p>

                  <p className="mt-4">
                    The approach focuses on helping women understand hormonal
                    changes, manage symptoms appropriately and pay attention
                    to long-term health.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            LEADERSHIP + CME
        ====================================================== */}

        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16">

              <div>

                <div className="w-12 h-12 bg-pink-800 text-white flex items-center justify-center rounded-full mb-6">
                  <Stethoscope size={23} />
                </div>

                <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-4">
                  Leadership & Professional Roles
                </p>

                <h2 className="text-3xl font-semibold text-gray-900">
                  Clinical Expertise Beyond
                  <span className="block text-pink-800">
                    the Consultation Room
                  </span>
                </h2>

                <p className="mt-6 text-gray-600 leading-8 text-lg">
                  Alongside her clinical practice, Dr. Vandana Bansal has
                  remained actively involved in professional organizations,
                  medical education and healthcare leadership.
                </p>

                <div className="mt-8 space-y-4">

                  {[
                    "Director – Jeevan Jyoti Hospital, Prayagraj",
                    "Director – Arpit Test Tube Baby Centre, Prayagraj",
                    "President – ISOPARB Society",
                    "President Elect – AOGS",
                  ].map((role, index) => (
                    <div key={index} className="flex gap-3">

                      <CheckCircle2
                        size={20}
                        className="text-pink-800 mt-1 shrink-0"
                      />

                      <span className="text-gray-700">
                        {role}
                      </span>

                    </div>
                  ))}

                </div>

              </div>


              <div>

                <div className="w-12 h-12 bg-pink-800 text-white flex items-center justify-center rounded-full mb-6">
                  <BookOpen size={23} />
                </div>

                <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-4">
                  Academic & CME Activities
                </p>

                <h2 className="text-3xl font-semibold text-gray-900">
                  Continuing Medical Education &
                  <span className="block text-pink-800">
                    Professional Development
                  </span>
                </h2>

                <div className="mt-6 text-gray-600 leading-8 text-lg space-y-4">

                  <p>
                    Dr. Vandana Bansal actively participates in CME programmes,
                    medical conferences, academic meetings and professional
                    discussions to remain connected with developments in
                    modern women's healthcare.
                  </p>

                  <p>
                    Her academic and professional activities include
                    discussions around infertility, gynecology, menopause,
                    reproductive medicine and advanced treatment approaches.
                  </p>

                  <p>
                    A recent example includes the ISOPARB CME on
                    Fertility-Preserving Management of Fibroids, held on 19
                    July 2026, where Dr. Vandana Bansal served as President
                    of ISOPARB Prayagraj.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            AWARDS + IMAGE
        ====================================================== */}

        <section className="bg-[#f1f1f1] py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">

              <div>

                <img
                  src={imagePaths.award}
                  alt="Dr. Vandana Bansal receiving professional recognition"
                  className="w-full h-[420px] object-cover"
                />

              </div>


              <div>

                <div className="w-12 h-12 bg-pink-800 text-white flex items-center justify-center rounded-full mb-6">
                  <Award size={23} />
                </div>

                <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-4">
                  Awards & Felicitations
                </p>

                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                  Recognition for
                  <span className="block text-pink-800">
                    Professional Contribution
                  </span>
                </h2>

                <p className="mt-6 text-lg text-gray-600 leading-8">
                  Dr. Vandana Bansal has been recognized through various
                  awards, felicitations and professional honours during her
                  medical career.
                </p>

                <div className="grid sm:grid-cols-2 mt-8">

                  {[
                    "Obstetrics",
                    "Gynaecology",
                    "Infertility & IVF",
                    "Women's healthcare",
                    "Medical education",
                    "Professional healthcare initiatives",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="py-3 border-b border-gray-300 flex items-center gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-pink-800" />
                      <span className="text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            MEMBERSHIPS
        ====================================================== */}

        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mb-12">

              <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-3">
                Professional Memberships
              </p>

              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Professional Associations &
                <span className="block text-pink-800">
                  Medical Organizations
                </span>
              </h2>

              {/* <p className="mt-5 text-lg text-gray-600 leading-8">
                Dr. Vandana Bansal is associated with several national and
                international medical and professional organizations,
                reflecting her continued engagement with medical education,
                reproductive medicine and women's healthcare.
              </p> */}

            </div>


            <div className="">

              <p className="py-4">Dr. Vandana Bansal is associated with several national and international medical and professional organizations, including the Indian Medical Association (IMA), Federation of Obstetric and Gynaecological Societies of India (FOGSI), Indian Society for Assisted Reproduction (ISAR), Indian Fertility Society (IFS), Indian Menopause Society (IMS), AAGL, IAGE, Society of Fetal Medicine, PCOS Society India, FICMCH & ICMCH, ISPAT, ISARM, FIGO & AOFOG, European Society of Human Reproduction and Embryology (ESHRE), Rotary Club of Allahabad-East, Rotary Allahabad Midtown, and International Integration & Growth Society (IIGS).

              </p>
              <p> Her professional associations reflect her continued engagement with medical education, reproductive medicine, women's health, professional development and community-oriented initiatives.</p>

            </div>

          </div>
        </section>


        {/* =====================================================
            PATIENT CARE
        ====================================================== */}

        <section className="bg-[#f1f1f1] py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14">

              <div>

                <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-4">
                  Patient Care Philosophy
                </p>

                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                  More Than Treatment —
                  <span className="block text-pink-800">
                    Understanding, Guiding & Supporting
                  </span>
                </h2>

              </div>


              <div>

                <p className="text-lg text-gray-600 leading-8">
                  For Dr. Vandana Bansal, healthcare goes beyond simply
                  diagnosing and treating a medical condition.
                </p>

                <p className="mt-5 text-lg text-gray-600 leading-8">
                  She believes in listening to patients, explaining their
                  condition, discussing appropriate treatment options and
                  helping them make informed decisions about their healthcare.
                </p>


                <div className="mt-10 border-t border-gray-300">

                  {carePrinciples.map((item, index) => (
                    <div
                      key={index}
                      className="py-5 border-b border-gray-300"
                    >

                      <h3 className="font-semibold text-gray-900">
                        <span className="text-pink-800">
                          {item.title}
                        </span>
                      </h3>

                      <p className="mt-2 text-gray-600 leading-7">
                        {item.text}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            HOSPITALS
        ====================================================== */}

        <section className="py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mb-14">

              <p className="text-pink-800 font-semibold uppercase tracking-[0.15em] text-sm mb-3">
                Healthcare Institutions
              </p>

              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
                Jeevan Jyoti Hospital &
                <span className="block text-pink-800">
                  Arpit Test Tube Baby Centre
                </span>
              </h2>

            </div>


            <div className="grid lg:grid-cols-2 gap-10 items-start">

              {/* IMAGE */}

              <div>

                <img
                  src={imagePaths.hospital}
                  alt="Jeevan Jyoti Hospital, Prayagraj"
                  className="w-full h-[420px] object-cover"
                />

              </div>


              {/* CONTENT */}

              <div className="space-y-10">

                <div className="border-t-4 border-pink-800 pt-6">

                  <div className="flex items-center gap-4">

                    <Hospital
                      className="text-pink-800"
                      size={28}
                    />

                    <h3 className="text-2xl font-semibold text-gray-900">
                      Jeevan Jyoti Hospital
                    </h3>

                  </div>

                  <div className="mt-5 text-gray-600 leading-8 text-lg space-y-4">

                    <p>
                      Jeevan Jyoti Hospital, Prayagraj is a multi-specialty
                      healthcare institution associated with Dr. Vandana
                      Bansal and Dr. A.K. Bansal.
                    </p>

                    <p>
                      The hospital was developed with a vision of bringing
                      modern medical facilities and specialized healthcare
                      services to people in Prayagraj and surrounding regions.
                    </p>

                  </div>

                </div>


                <div className="border-t-4 border-pink-800 pt-6">

                  <div className="flex items-center gap-4">

                    <Microscope
                      className="text-pink-800"
                      size={28}
                    />

                    <h3 className="text-2xl font-semibold text-gray-900">
                      Arpit Test Tube Baby Centre
                    </h3>

                  </div>

                  <div className="mt-5 text-gray-600 leading-8 text-lg space-y-4">

                    <p>
                      Arpit Test Tube Baby Centre, Prayagraj is dedicated to
                      infertility and reproductive healthcare.
                    </p>

                    <p>
                      The centre provides specialized fertility services
                      including IVF and ICSI, infertility evaluation and
                      individualized fertility treatment planning.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="bg-pink-800 text-white py-20 lg:py-24">

          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">

            <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-5">
              Comprehensive Women's Healthcare in Prayagraj
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Experience You Can Trust.
              <span className="block mt-2">
                Care Designed Around You.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/90 max-w-3xl mx-auto">
              Dr. Vandana Bansal provides comprehensive care for infertility,
              IVF, pregnancy, PCOS, gynecological conditions, advanced
              gynecological surgery and menopause-related concerns.
            </p>

            <div className="mt-9">

              <a
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-pink-800 font-semibold rounded-md hover:bg-[#f1f1f1] transition-colors duration-300"
              >
                Book an Appointment
              </a>

            </div>

          </div>

        </section>

      </main>
    </>
  );
};

export default AboutPage;