import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const LaproscopicHysteroscopicSurgeries = () => {
  return (
      <>
        <Helmet>
          <title>Fertility Enhancing Laparoscopic and Hysteroscopic Surgeries: Arpit Test Tube Baby Centre Prayagraj</title>
          <meta name="description" content="Fertility-Enhancing Laparoscopic and Hysteroscopic Surgeries – Laparoscopic and hysteroscopic surgeries are highly effective for treating uterine fibroids, ovarian cysts, endometriosis, and tubal blockages. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal specializes in these minimally invasive procedures, which improve fertility and increase the success rates of natural conception or assisted reproductive treatments like IVF. These surgeries ensure faster recovery and minimal discomfort for patients." />
          <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
          <meta property="og:title" content="Best Gynecology Services" />
          <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
        </Helmet>
  <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
       <div>
         <h1 className='text-2xl md:text-4xl my-4 font-medium'>Fertility Enhancing Laparoscopic and Hysteroscopic Surgeries</h1>
         <p>Minimally invasive surgeries such as laparoscopy and hysteroscopy are used to diagnose and treat fertility-related issues.</p>
         <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
         <ul className='list-disc'>
           <li>Women with endometriosis or fibroids</li>
           <li>Patients with uterine adhesions or polyps</li>
           <li>Unexplained infertility cases</li>
         </ul>
         <h2 className='text-2xl my-4'>Procedure Overview</h2>
         <ul className='list-disc'>
           <li>Laparoscopy: A thin camera is inserted through a small abdominal incision to view pelvic organs.</li>
           <li>Hysteroscopy: A camera is passed through the cervix to view the uterine cavity.</li>
           <li>Surgical Treatment: Abnormalities are corrected.Embryo Transfer: The embryo is transferred into the uterus.</li>
         </ul>
         <h2 className='text-2xl my-4'>Advantages:</h2>
         <ul className='list-disc'>
           <li>Minimally invasive with quick recovery</li>
           <li>Effective diagnosis and treatment in one procedure</li>
         </ul>
         <h2 className='text-2xl my-4'>Disadvantages:</h2>
         <ul className='list-disc'>
           <li>Requires anesthesia</li>
           <li>Risk of infection or bleeding</li>
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

export default LaproscopicHysteroscopicSurgeries