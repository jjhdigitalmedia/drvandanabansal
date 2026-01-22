import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const HormonalAnalysis = () => {
  return (
    <>
    <Helmet>
      <title>Hormonal Analysis: Arpit Test Tube Baby Centre Prayagraj</title>
      <meta name="description" content="Hormonal Analysis – Hormonal imbalances can be a major cause of infertility in both men and women. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal offers comprehensive hormonal analysis, including tests for estrogen, progesterone, AMH, FSH, LH, and thyroid levels. Early detection and correction of hormonal issues improve the chances of natural conception or successful fertility treatments like IUI and IVF. Book your consultation today to optimize your reproductive health." />
      <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
      <meta property="og:title" content="Best Gynecology Services" />
      <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
    </Helmet>
 <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
      <div>
        <h1 className='md:text-4xl my-4 font-medium'>Hormonal Analysis</h1>
        <p>Hormonal analysis involves a series of blood tests to assess hormone levels that regulate ovulation, menstruation, and overall reproductive health.</p>
        <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
        <ul className='list-disc'>
          <li>Women with irregular periods or absent periods</li>
          <li>Couples facing unexplained infertility</li>
          <li>Individuals with suspected hormonal imbalances</li>
        </ul>
        <h2 className='text-2xl my-4'>Procedure Overview</h2>
        <ul className='list-disc'>
          <li>Blood Sample Collection: A simple blood draw is taken, typically on specific days of the menstrual cycle.</li>
          <li>Hormone Evaluation: Levels of hormones like FSH, LH, AMH, Prolactin, and Thyroid hormones are measured.</li>
          <li>Diagnosis: Based on the results, doctors can identify hormonal causes of infertility.</li>
        </ul>
        <h2 className='text-2xl my-4'>Advantages:</h2>
        <ul className='list-disc'>
          <li>Non-invasive and straightforward</li>
          <li>Provides accurate diagnosis of hormonal issues</li>
          <li>Helps customize fertility treatments</li>
        </ul>
        <h2 className='text-2xl my-4'>Disadvantages:</h2>
        <ul className='list-disc'>
          <li>Hormonal levels can vary, requiring multiple tests</li>
          <li>Results may be affected by stress or medications</li>
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

export default HormonalAnalysis