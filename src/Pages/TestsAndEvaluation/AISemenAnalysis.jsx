import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const AISemenAnalysis = () => {
  return (
    <>
      <Helmet>
        <title>AI Assisted Semen Analysis: Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="Semen Analysis by AI Technology – Advanced AI-based semen analysis at Arpit Test Tube Baby Centre, Prayagraj ensures precise assessment of sperm count, motility, morphology, and DNA fragmentation. Dr. Vandna Bansal utilizes AI-driven technology to improve the accuracy of male infertility diagnosis and treatment planning. This advanced method helps couples choose the best fertility treatments, such as IUI, IVF, or ICSI, based on their sperm health." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
        <div>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>AI Assisted Semen Analysis</h1>
          <p>Semen analysis assesses sperm count, motility, and morphology using advanced AI technology for accurate results.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Couples with male infertility concerns</li>
            <li>Men with low sperm count or poor motility</li>
            <li>Individuals undergoing ART procedures</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Sample Collection: A semen sample is provided.</li>
            <li>AI Analysis: AI algorithms evaluate sperm parameters.</li>
            <li>Results Interpretation: Detailed reports are provided.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>Provides quick and precise results</li>
            <li>Minimizes human error</li>
            <li>Detects subtle abnormalities</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>May require multiple samples for accurate results</li>
            <li>Limited availability in some regions</li>
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

export default AISemenAnalysis