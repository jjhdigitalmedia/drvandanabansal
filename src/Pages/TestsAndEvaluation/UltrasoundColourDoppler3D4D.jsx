import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const UltrasoundColourDoppler3D4D = () => {
  return (
        <>
      <Helmet>
        <title>3D & 4D Ultrasound & Colour Doppler: Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="3D & 4D Ultrasound & Colour Doppler – Advanced 3D & 4D ultrasound with color Doppler technology provides high-resolution imaging of the uterus and ovaries, helping in accurate fertility diagnosis. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal utilizes these advanced scans to assess endometrial thickness, ovarian reserve, and blood flow to reproductive organs. This precise imaging enhances treatment planning for IVF, ICSI, and other fertility procedures." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
   <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between w-11/12 items-cente'>
        <div>
          <h1 className='text-4xl my-4 font-medium'>3D & 4D Ultrasound & Colour Dopple</h1>
          <p>Advanced ultrasound imaging, including 3D and 4D technology, provides detailed views of reproductive organs. Colour Doppler assesses blood flow to the uterus and ovaries.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Women with uterine abnormalities</li>
            <li>Couples with recurrent pregnancy loss</li>
            <li>Patients undergoing fertility treatment</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Ultrasound Imaging: Performed transvaginally or abdominally.</li>
            <li>3D Imaging: Provides three-dimensional views of the uterus and ovaries.</li>
            <li>4D Imaging: Offers real-time motion images.</li>
            <li>Colour Doppler: Evaluates blood flow patterns.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>•	Provides a detailed view of reproductive organs</li>
            <li>•	Provides a detailed view of reproductive organs</li>
            <li>•	Non-invasive and painless</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>May not detect small abnormalities</li>
            <li>Accuracy depends on operator skill</li>
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

      export default UltrasoundColourDoppler3D4D