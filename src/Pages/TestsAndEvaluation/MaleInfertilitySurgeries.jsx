import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const MaleInfertilitySurgeries = () => {
  return (
    <>
    <Helmet>
      <title>Male Infertility Surgeries: Arpit Test Tube Baby Centre Prayagraj</title>
      <meta name="description" content="Surgery for Male Infertility – Male infertility treatments such as varicocele repair, TESA (Testicular Sperm Aspiration), and MESA (Microepididymal Sperm Aspiration) can significantly improve sperm quality. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal offers expert surgical solutions to help men with low sperm count, motility issues, or azoospermia achieve biological fatherhood. These surgeries are often combined with advanced fertility treatments like ICSI for better results." />
      <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
      <meta property="og:title" content="Best Gynecology Services" />
      <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
    </Helmet>
  <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
       <div>
         <h1 className='text-2xl md:text-4xl my-4 font-medium'>Male Infertility Surgeries</h1>
         <p>Surgical procedures are performed to treat male infertility, often due to blocked sperm ducts or varicoceles.</p>
         <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
         <ul className='list-disc'>
           <li>Men with obstructive azoospermia</li>
           <li>Varicocele-related infertility</li>
           <li>Testicular sperm extraction candidates</li>
         </ul>
         <h2 className='text-2xl my-4'>Procedure Overview</h2>
         <ul className='list-disc'>
           <li>Varicocelectomy: Removal of enlarged veins in the scrotum</li>
           <li>Micro-TESE: Extraction of sperm directly from the testes</li>
           <li>Vasectomy Reversal: Reconnection of the vas deferens</li>
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

export default MaleInfertilitySurgeries