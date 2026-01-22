import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const OocyteCryopreservation = () => {
  return (
    <>
        <Helmet>
          <title>Oocyte Cryopreservation: Arpit Test Tube Baby Centre Prayagraj</title>
          <meta name="description" content="Oocyte Cryopreservation – Egg freezing, or oocyte cryopreservation, is a fertility preservation method for women who want to delay pregnancy. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal provides advanced egg freezing services, ideal for women with medical conditions, career-focused individuals, or those planning late motherhood. Frozen eggs retain their quality, allowing women to conceive at a later stage." />
          <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
          <meta property="og:title" content="Best Gynecology Services" />
          <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
        </Helmet>
      <div className='flex mx-auto flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
          <div className='md:w-1/2'>
            <h1 className='text-2xl md:text-4xl my-4 font-medium'>Oocyte cryopreservation</h1>
            <p>Oocyte cryopreservation, commonly known as egg freezing, allows women to preserve their fertility for future family planning.</p>
            <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
            <ul className='list-disc'>
              <li>Women delaying childbirth for personal or medical reasons</li>
              <li>Cancer patients undergoing chemotherapy or radiation</li>
              <li>Individuals with a family history of premature ovarian failure</li>
            </ul>
            <h2 className='text-2xl my-4'>Procedure Overview</h2>
            <ul className='list-disc'>
              <li>Ovarian Stimulation: Hormonal medications stimulate the ovaries to produce multiple eggs.</li>
              <li>Egg Retrieval: Eggs are retrieved using a minimally invasive procedure.</li>
              <li>Freezing: Mature eggs are vitrified (rapidly frozen) using advanced techniques.</li>
              <li>Storage: The frozen eggs are stored for future use in fertility treatments.</li>
            </ul>
            <h2 className='text-2xl my-4'>Advantages:</h2>
            <ul className='list-disc'>
              <li>Preserves fertility.</li>
              <li>Flexibility in family planning.</li>
              <li>Effective for medical conditions.</li>
            </ul>
            <h2 className='text-2xl my-4'>Disadvantages:</h2>
            <ul className='list-disc'>
              <li>Expensive.</li>
              <li>Hormonal side effects.</li>
              <li>Not guaranteed to result in pregnancy.</li>
            </ul>
            <h3 className='text-2xl font-semibold my-4'>Success Rate:</h3>
            <p>Egg freezing success rates vary, with a 60-80% survival rate upon thawing. The overall chance of pregnancy using frozen eggs is around 30-60%, depending on age and egg quality.</p>
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

export default OocyteCryopreservation