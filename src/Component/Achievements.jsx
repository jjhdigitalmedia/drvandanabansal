import React from "react";
import newlab2 from "../assets/newlab2.jpg";
import { Link } from "react-router-dom";

const Achievements = () => {
  return (
    <section className="text-gray-600 z-1 mt-14 body-font">
      <div className="container mx-auto  flex px-5 py-10 md:flex-row flex-col items-center">
        {/* <div className="lg:max-w-lg lg:w-full align-top md:w-1/2 w-5/6 mb-10 md:mb-0 ">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={newlab2}
          />
        </div> */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:item zs-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Arpit Test Tube Baby Centre
          </h1>
          <div className="p-2 text-justify">
            The success rate of Arpit Test Tube Baby Centre is over 65% due to
            the long experience of the medical team, being pioneers in
            infertility and IVF treatment, for the last 25 years we have been at
            the forefront of helping couples achieve their dreams of parenthood
            with regular upgradation of newer technologies. It's not just about
            providing medical assistance but also offering hope and support to
            those who are struggling with fertility issues.
          </div>
          <div className="p-2 text-justify">
            Our IVF centre is known for its high success rate and for managing
            multiple failed IVF cases. We follow a patient-friendly approach to
            make infertile couples or pregnant women feel comfortable throughout
            their treatment and care process. Arpit Test Tube Baby Centre has a
            policy to maintain transparency, confidential patient data,
            affordable pricing, and provide utmost care and support.
          </div>
          <div className="p-2 text-justify">
            Several factors influence the success rate of in vitro fertilization
            (IVF) treatment. These factors include:
          </div>
          <div className='text-justify' >
            <span className="font-semibold">1. Age: </span> Age is one of the most significant factors
            affecting IVF success. Generally, the younger the woman, the higher
            the chances of success, as fertility declines with age.
          </div>
          <div className='text-justify' >
            <span className="font-semibold">2. Cause of Infertility: </span> The underlying cause of infertility, whether it's related to issues with the woman's reproductive system, the man's reproductive system, or both, can impact IVF success rates.
          </div>
          <div className='text-justify' >
            <span className="font-semibold">3. Ovarian Reserve: </span>  The quality and quantity of a woman's eggs, known as ovarian reserve, can affect the success of IVF. Women with a higher ovarian reserve typically have better outcomes.
          </div>
          <div className='text-justify' >
            <span className="font-semibold">4. Response to Ovarian Stimulation:</span> The woman's response to ovarian stimulation medications, which are used to induce the development of multiple eggs, can influence IVF success. A poor response may result in fewer eggs retrieved, affecting the chances of success.
          </div>
          <div className='text-justify' >
            <span className="font-semibold">5. Semen Quality: </span> The quality of the man's sperm, including parameters such as sperm count, motility, and morphology, plays a crucial role in IVF success. Poor semen quality can decrease the chances of fertilization and embryo development.
          </div>
          <div className='text-justify' >
            <span className="font-semibold">1. Age: </span> Age is one of the most significant factors
            affecting IVF success. Generally, the younger the woman, the higher
            the chances of success, as fertility declines with age.
          </div>
          <div className='text-justify' >
            <span className="font-semibold">6. Embryo Quality: </span> The quality of embryos transferred during IVF, as determined by their morphology and developmental stage, is a significant predictor of success. Higher-quality embryos have a better chance of implanting and resulting in a successful pregnancy.
          </div>
          <div className='text-justify' >
            <span className="font-semibold">6. Embryo Quality: </span> The quality of embryos transferred during IVF, as determined by their morphology and developmental stage, is a significant predictor of success. Higher-quality embryos have a better chance of implanting and resulting in a successful pregnancy.
          </div>
          <div className='text-justify' >
            <span className="font-semibold"> 7.	Previous IVF Attempts:</span> The number of previous IVF attempts can impact success rates. Women who have undergone multiple unsuccessful cycles may have lower chances of success in subsequent attempts.
          </div>
          <div className='text-justify' >
            <span className="font-semibold">8.	Lifestyle Factors: </span>  Certain lifestyle factors, such as smoking, alcohol consumption, obesity, and stress, can affect IVF success rates. Adopting healthy lifestyle habits may improve outcomes.
          </div>
          <div className='text-justify' >
            <span className="font-semibold">9.	Reproductive Health Conditions:  </span> 9.	Reproductive Health Conditions: Pre-existing reproductive health conditions, such as endometriosis, polycystic ovary syndrome (PCOS), and uterine abnormalities, can affect IVF success rates.
          </div>
          <div className="text-justify">
            <span className="font-semibold">10.	Clinic and Laboratory Factors: </span>The fertility clinic's expertise, the medical team's experience, and the laboratory facilities' quality can influence IVF success rates.
          </div>
          <div className="flex justify-center">
            <Link to="bookappointment">
              <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">
                Book Appoinment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
