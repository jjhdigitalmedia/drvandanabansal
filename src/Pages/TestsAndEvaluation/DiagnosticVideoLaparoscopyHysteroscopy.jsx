import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const DiagnosticVideoLaparoscopyHysteroscopy = () => {
  return (
       <>
          <Helmet>
            <title>Diagnostic Video Laparoscopy / Hysteroscopy: Arpit Test Tube Baby Centre Prayagraj</title>
            <meta name="description" content="Diagnostic Video Laparoscopy / Hysteroscopy – Video laparoscopy and hysteroscopy provide high-definition imaging of the reproductive organs, allowing precise diagnosis of infertility causes. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal uses advanced technology to identify issues such as uterine polyps, adhesions, or endometrial abnormalities. These diagnostic tools guide personalized fertility treatment plans for better outcomes." />
            <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
            <meta property="og:title" content="Best Gynecology Services" />
            <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
          </Helmet>
 <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
      <div>
        <h1 className='text-2xl md:text-4xl my-4 font-medium'>Diagnostic Video Laparoscopy / Hysteroscopy</h1>
        <p>Diagnostic laparoscopy and hysteroscopy are advanced imaging procedures to visually examine reproductive organs.</p>
        <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
        <ul className='list-disc'>
          <li>Women with pelvic pain or irregular periods</li>
          <li>Unexplained infertility cases</li>
          <li>Recurrent miscarriage patients</li>
        </ul>
        <h2 className='text-2xl my-4'>Procedure Overview</h2>
        <ul className='list-disc'>
          <li>Laparoscopy: Involves inserting a camera through a small incision to examine internal organs.</li>
          <li>Hysteroscopy: Uses a thin, lighted camera inserted through the cervix to examine the uterus.</li>
        </ul>
        <h2 className='text-2xl my-4'>Advantages:</h2>
        <ul className='list-disc'>
          <li>Provides a clear and detailed view of reproductive organs</li>
          <li>Allows diagnosis and treatment in one procedure</li>
          <li>Minimally invasive with small incisions</li>
          <li>Faster recovery time compared to open surgery</li>
        </ul>
        <h2 className='text-2xl my-4'>Disadvantages:</h2>
        <ul className='list-disc'>
          <li>Requires general anesthesia</li>
          <li>Risk of infection, bleeding, or injury to surrounding organs</li>
          <li>Rare possibility of post-operative pain or scarring</li>
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

export default DiagnosticVideoLaparoscopyHysteroscopy