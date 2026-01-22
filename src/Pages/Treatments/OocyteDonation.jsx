import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const OocyteDonation = () => {
  return (
    <>
      <Helmet>
        <title>Oocyte Donation: Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="Oocyte Donation (OD) – Oocyte donation is a fertility solution for women with low ovarian reserve, premature ovarian failure, or genetic conditions. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal offers a well-screened donor egg program, ensuring the highest quality eggs for successful IVF treatment. This method significantly improves pregnancy chances, giving women the opportunity to experience pregnancy and motherhood." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <div className='flex mx-auto flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
        <div className='md:w-1/2'>
          <h1 className='text-2xl md:text-4xl my-4 font-medium'>Oocyte Donation (OD)</h1>
          <p>Oocyte donation involves using eggs from a donor for fertilization and embryo transfer.</p>
          <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
          <ul className='list-disc'>
            <li>Women with low ovarian reserve</li>
            <li>Premature ovarian failure</li>
            <li>Genetic disorders</li>
          </ul>
          <h2 className='text-2xl my-4'>Procedure Overview</h2>
          <ul className='list-disc'>
            <li>Donor Egg Collection: Eggs are retrieved from the donor.</li>
            <li>Fertilization: Eggs are fertilized with sperm.</li>
            <li>Embryo Transfer: The resulting embryo is transferred to the recipient's uterus.</li>
          </ul>
          <h2 className='text-2xl my-4'>Advantages:</h2>
          <ul className='list-disc'>
            <li>High success rate.</li>
            <li>Allows women with ovarian issues to conceive.</li>
            <li>Safe and well-established procedure.</li>
          </ul>
          <h2 className='text-2xl my-4'>Disadvantages:</h2>
          <ul className='list-disc'>
            <li>Emotional and psychological challenges..</li>
            <li>Costly.</li>
            <li>Limited genetic connection to the child.</li>
          </ul>
          <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
          <p>Oocyte donation has a success rate of around 50-60% per cycle.</p>
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

export default OocyteDonation