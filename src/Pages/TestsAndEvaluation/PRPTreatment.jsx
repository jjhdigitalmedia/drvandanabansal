import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const PRPTreatment = () => {
  return (
     <>
        <Helmet>
          <title>PRP Treatment of Endometrium & Ovary: Arpit Test Tube Baby Centre Prayagraj</title>
          <meta name="description" content="PRP Treatment of Endometrium & Ovary – Platelet-Rich Plasma (PRP) therapy is a revolutionary treatment for women with thin endometrium or low ovarian reserve. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal uses PRP injections to rejuvenate the ovarian function and improve the endometrial lining, increasing the chances of embryo implantation in IVF treatments. This natural and safe therapy enhances fertility potential in women with recurrent implantation failures." />
          <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
          <meta property="og:title" content="Best Gynecology Services" />
          <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
        </Helmet>
   <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
        <div>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>PRP Treatment of Endometrium & Ovar</h1>
          <p>Platelet-rich plasma (PRP) therapy involves injecting a concentration of the patient’s own platelets into the uterus or ovaries to rejuvenate tissue and improve fertility.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Women with thin endometrium</li>
            <li>Poor ovarian response patients</li>
            <li>Individuals with recurrent implantation failure</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Blood Collection: Blood is drawn from the patient.</li>
            <li>PRP Preparation: Platelets are concentrated using centrifugation.</li>
            <li>Injection: The PRP is injected into the endometrium or ovaries.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>Promotes tissue regeneration and healing</li>
            <li>Enhances endometrial thickness and receptivity</li>
            <li>May improve ovarian function in some cases</li>
            <li>Low risk of complications as it uses the patient’s own blood</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>Results may vary from patient to patient</li>
            <li>Multiple sessions may be required</li>
            <li>Limited clinical evidence in some applications</li>
            <li>Mild discomfort during the procedure</li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>The success rate of embryo donation is approximately 40-50% per transfer.</p>
        </div>
        <div>
          <img
            src={lab0}
            alt="Mountain"
            className="w-full  object-cover border-8 border-white rounded-2xl"
          />
        </div>
      </div>
    </>
  )
}

export default PRPTreatment