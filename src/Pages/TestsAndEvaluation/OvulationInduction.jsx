import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const OvulationInduction = () => {
  return (
    <>
    <Helmet>
      <title>Ovulation Induction with Follicle Monitoring: Arpit Test Tube Baby Centre Prayagraj</title>
      <meta name="description" content="Ovulation Induction with Follicle Monitoring – For women facing irregular ovulation or PCOS-related infertility, ovulation induction with follicle monitoring is a key treatment. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal uses customized ovulation stimulation protocols combined with ultrasound-guided follicle tracking to maximize the chances of conception through natural intercourse or IUI. This method helps optimize egg quality and timing for successful pregnancy." />
      <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
      <meta property="og:title" content="Best Gynecology Services" />
      <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
    </Helmet>
  <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
       <div>
         <h1 className='text-2xl md:text-4xl my-4 font-medium'>Ovulation Induction</h1>
         <p>Ovulation induction involves stimulating the ovaries with medications to produce and release eggs. Follicle monitoring tracks egg development using ultrasound.</p>
         <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
         <ul className='list-disc'>
           <li>Women with irregular ovulation</li>
           <li>Polycystic Ovary Syndrome (PCOS) patients</li>
           <li>Couples undergoing IUI or IVF</li>
         </ul>
         <h2 className='text-2xl my-4'>Procedure Overview</h2>
         <ul className='list-disc'>
           <li>Medications: Oral or injectable medications stimulate egg production.</li>
           <li>Monitoring: Regular ultrasounds and hormone tests track follicle growth.</li>
           <li>Trigger Injection: A final injection triggers ovulation.</li>
         </ul>
         <h2 className='text-2xl my-4'>Advantages:</h2>
         <ul className='list-disc'>
           <li>Increases chances of conception</li>
           <li>Can be combined with IUI or timed intercourse</li>
           <li>Non-invasive monitoring</li>
         </ul>
         <h2 className='text-2xl my-4'>Disadvantages:</h2>
         <ul className='list-disc'>
           <li>Risk of multiple pregnancies</li>
           <li>Possible side effects like bloating or mood swings</li>
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

export default OvulationInduction