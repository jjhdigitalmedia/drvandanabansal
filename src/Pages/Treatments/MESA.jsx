import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const MESA = () => {
  return (
    <>
      <Helmet>
        <title>MESA (Microepididymal Sperm Aspiration): Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="MESA (Microepididymal Sperm Aspiration) – MESA is a specialized surgical sperm retrieval procedure for men with obstructive azoospermia. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal performs MESA with precision, ensuring high-quality sperm retrieval for IVF and ICSI treatments. This technique helps men with blocked sperm ducts achieve biological fatherhood." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <div className='flex mx-auto flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>MESA (Microepididymal Sperm Aspiration)</h1>
          <p>MESA is a surgical technique used to retrieve sperm directly from the epididymis in men with obstructive azoospermia.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Men with blocked sperm ducts</li>
            <li>Post-vasectomy patients</li>
            <li>Genetic conditions causing obstructive infertility</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Anesthesia: The procedure is performed under local or general anesthesia.</li>
            <li>Sperm Retrieval: A fine needle is used to aspirate sperm from the epididymis.</li>
            <li>Cryopreservation: Retrieved sperm can be used immediately for ICSI or cryopreserved for future use.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>Minimally invasive.</li>
            <li>High success in sperm retrieval.</li>
            <li>Allows genetic parenthood.</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>Surgical risks.</li>
            <li>May require multiple attempts.</li>
            <li>Expensive.</li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>MESA has a high sperm retrieval success rate of 80-90%, and the pregnancy success rate using ICSI with MESA sperm is approximately 50-60% per cycle.</p>
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

export default MESA