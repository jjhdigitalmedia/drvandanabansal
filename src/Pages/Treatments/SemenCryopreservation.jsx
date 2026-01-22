import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const SemenCryopreservation = () => {
  return (
    <>
      <Helmet>
        <title>Semen Cryopreservation: Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="Semen Cryopreservation – Semen cryopreservation, or sperm freezing, allows men to store their sperm for future fertility treatments. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal offers advanced sperm banking services for men undergoing medical treatments, facing fertility challenges, or planning future pregnancies. This technique ensures sperm viability for years, giving men the option to conceive when they are ready." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <div className='flex mx-auto flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
          <div className='md:w-1/2'>
            <h1 className='text-2xl md:text-4xl my-4 font-medium'>Semen Cryopreservation</h1>
            <p>Semen cryopreservation involves freezing and storing sperm for future use. It is a reliable option for preserving male fertility.</p>
            <h2 className='text-2xl my-6'>Who Can Benefit from Semen Cryopreservation?</h2>
            <ul className='list-disc'>
              <li>Men undergoing cancer treatment</li>
              <li>Individuals with low sperm count</li>
              <li>Before vasectomy procedures</li>
              <li>Sperm donation programs</li>
            </ul>
            <h2 className='text-2xl my-4'>Procedure Overview</h2>
            <ul className='list-disc'>
              <li>Semen Collection: A semen sample is collected and analyzed.</li>
              <li>Preparation: The sample is processed to remove impurities.</li>
              <li>Freezing: Sperm is cryopreserved using liquid nitrogen at extremely low temprature. </li>
              <li>Storage: The sperm is stored in a specialized facility for future use.</li>
            </ul>
            <h2 className='text-2xl my-4'>Advantages:</h2>
            <ul className='list-disc'>
              <li>Long-term fertility preservation.</li>
              <li>Provides reproductive options for men.</li>
              <li>High post-thaw viability.</li>
            </ul>
            <h2 className='text-2xl my-4'>Disadvantages:</h2>
            <ul className='list-disc'>
              <li>Cost of storage.</li>
              <li>Slight reduction in sperm quality over time.</li>
              <li>Not all frozen sperm result in successful pregnancy.</li>
            </ul>
            <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
            <p>Semen cryopreservation has a high success rate, with sperm remaining viable for up to 20 years. The success of achieving pregnancy using frozen sperm through IUI or IVF is around 30-50%.</p>
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

export default SemenCryopreservation