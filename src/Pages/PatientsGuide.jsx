import React from 'react'
import PageBanner from './PageBanner';
import { Helmet } from 'react-helmet';

const PatientsGuide = () => {
  return (
    <>
      <Helmet>
        <title>Patients Education by Dr. Vandana Bansal</title>
        <meta name="description" content="Dr. Vandana Bansal provides comprehensive patient education to empower individuals with the knowledge they need to make informed decisions about their health. Through detailed resources, guidance on fertility treatments such as IVF, IUI, and hormonal therapies, as well as general gynecological care, Dr. Bansal ensures that patients are well-informed and supported at every step of their healthcare journey. Learn about fertility, reproductive health, and preventive care with personalized, expert advice. Take control of your health with the resources offered by Dr. Vandana Bansal." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
      <PageBanner />
      <div className='w-11/12 md:w-4/5 m-auto pt-10 pb-24'>
        <h1 className='font-bold text-3xl my-3'> PatientsGuide</h1>
        <div className="my-8">
          <script src="https://static.elfsight.com/platform/platform.js" async></script>
          <div class="elfsight-app-600351c2-8ab0-4b23-8acf-fd491a40022f" data-elfsight-app-lazy></div>
        </div>

      </div>
    </>
  )
}

export default PatientsGuide;