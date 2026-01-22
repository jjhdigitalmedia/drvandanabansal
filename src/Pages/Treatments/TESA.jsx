import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'
const TESA = () => {
  return (
    <>
      <Helmet>
        <title>TESA (Testicular Sperm Aspiration and Cryopreservation): Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="TESA (Testicular Sperm Aspiration & Cryopreservation) – TESA is a minimally invasive sperm retrieval method for men with non-obstructive azoospermia. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal provides expert TESA services, extracting viable sperm directly from the testes for fertility treatments. This method is highly effective for men with low sperm production or failed vasectomy reversals." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <div className='flex mx-auto flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>TESA (Testicular Sperm Aspiration and Cryopreservation)</h1>
          <p>
            TESA is a procedure to extract sperm directly from the testes for men with non-obstructive azoospermia or other severe male infertility issues.
          </p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Men with no sperm in their semen</li>
            <li>Men with non-obstructive azoospermia</li>
            <li>Cancer survivors with impaired sperm production</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Anesthesia: TESA is typically done under local anesthesia.</li>
            <li>Sperm Extraction: A fine needle is inserted into the testes to aspirate tissue containing sperm.</li>
            <li>Sperm Processing: The sample is examined, and viable sperm are isolated.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>Minimally invasive.</li>
            <li>Effective in cases of non-obstructive azoospermia.</li>
            <li>Allows genetic parenthood.</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>May require multiple attempts.</li>
            <li>Risk of discomfort or swelling.</li>
            <li>Lower sperm retrieval rate compared to other methods.</li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>TESA has a sperm retrieval success rate of around 40-50%. When combined with ICSI, the overall pregnancy rate is approximately 30-50% per cycle.</p>
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

export default TESA