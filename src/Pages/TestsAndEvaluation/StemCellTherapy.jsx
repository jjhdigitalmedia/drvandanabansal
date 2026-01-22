import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const StemCellTherapy = () => {
  return (
    <>
    <Helmet>
      <title>Stem Cell Therapy: Arpit Test Tube Baby Centre Prayagraj</title>
      <meta name="description" content="Stem Cell Therapy – Stem cell therapy for fertility is an emerging treatment that helps restore ovarian function and improve uterine health. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal offers cutting-edge stem cell treatments for women with premature ovarian failure, poor ovarian reserve, or recurrent IVF failures. This innovative approach provides hope to women who have limited fertility treatment options." />
      <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
      <meta property="og:title" content="Best Gynecology Services" />
      <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
    </Helmet>
 <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
      <div>
        <h1 className='text-2xl md:text-4xl my-4 font-medium'>Stem Cell Therapy</h1>
        <p>Stem cell therapy is a cutting-edge treatment that uses regenerative cells to restore ovarian and endometrial function.</p>
        <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
        <ul className='list-disc'>
          <li>Women with premature ovarian failure</li>
          <li>Poor ovarian responders</li>
          <li>Individuals with thin endometrium</li>
        </ul>
        <h2 className='text-2xl my-4'>Procedure Overview</h2>
        <ul className='list-disc'>
          <li>Stem Cell Extraction: Stem cells are harvested from bone marrow or adipose tissue.</li>
          <li>Processing: The cells are processed in a laboratory.</li>
          <li>Injection: Stem cells are injected into the ovaries or uterus.</li>
        </ul>
        <h2 className='text-2xl my-4'>Advantages:</h2>
        <ul className='list-disc'>
          <li>Regenerates damaged reproductive tissues</li>
          <li>May enhance ovarian function and egg quality</li>
          <li>Can improve endometrial thickness and receptivity</li>
          <li>Offers a non-invasive alternative to some surgeries</li>
        </ul>
        <h2 className='text-2xl my-4'>Disadvantages:</h2>
        <ul className='list-disc'>
          <li>Experimental and not widely available</li>
          <li>Potential risk of infection or immune response</li>
          <li>Potential lack of genetic connection.</li>
          <li>May require multiple treatmentsPotential lack of genetic connection.</li>
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

export default StemCellTherapy