import React from 'react'
import lab0 from '../../assets/lab0.png'
import { Helmet } from "react-helmet";

const EmbryoDonation = () => {
  return (
    <>
        <Helmet>
          <title>Embryo Donation: Arpit Test Tube Baby Centre Prayagraj</title>
          <meta name="description" content="Embryo Donation (ED) – Embryo donation is a highly successful fertility treatment where high-quality donor embryos are transferred to women who cannot conceive with their own eggs and sperm. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal provides ethical and secure embryo donation programs, helping couples struggling with infertility experience the joy of parenthood. Embryo adoption is a wonderful option for those looking for an alternative to traditional IVF or surrogacy." />
          <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
          <meta property="og:title" content="Best Gynecology Services" />
          <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
        </Helmet>
    <div className='flex mx-auto flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
      <div className='md:-1/2'>
        <h1 className='text-2xl md:text-4xl my-4 font-medium'>Embryo Donation (ED)</h1>
        <p>Embryo donation involves transferring embryos from a donor couple to a recipient's uterus.</p>
        <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
        <ul className='list-disc'>
          <li>Women with poor egg quality</li>
          <li>Couples with genetic disorders</li>
          <li>Unsuccessful IVF attempts</li>
        </ul>
        <h2 className='text-2xl my-4'>Procedure Overview</h2>
        <ul className='list-disc'>
          <li>Donor Embryo Selection: Embryos are selected based on compatibility.</li>
          <li>Donor Embryo Selection: Embryos are selected based on compatibility.</li>
          <li>Embryo Transfer: The embryo is transferred into the uterus.</li>
        </ul>
        <h2 className='text-2xl my-4'>Advantages:</h2>
        <ul className='list-disc'>
          <li>Women with poor egg quality</li>
          <li>Couples with genetic disorders</li>
          <li>Unsuccessful IVF attempts</li>
        </ul>
        <h2 className='text-2xl my-4'>Disadvantages:</h2>
        <ul className='list-disc'>
          <li>Emotional and ethical considerations.</li>
          <li>Legal complexities.</li>
          <li>Potential lack of genetic connection.</li>
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

export default EmbryoDonation