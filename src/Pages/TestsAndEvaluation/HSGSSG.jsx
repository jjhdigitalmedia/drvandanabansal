import React from 'react'
import { Helmet } from "react-helmet";
import lab0 from '../../assets/lab0.png'

const HSGSSG = () => {
  return (
    <>
      <Helmet>
        <title>Hysterosalpingography (HSG) & Sono Salpingography (SSG): Arpit Test Tube Baby Centre Prayagraj</title>
        <meta name="description" content="Hysterosalpingography (HSG) & Sono Salpingography (SSG) – HSG and SSG are diagnostic tests that check for blockages in the fallopian tubes, a common cause of female infertility. At Arpit Test Tube Baby Centre, Prayagraj, Dr. Vandna Bansal performs these safe and effective tests using minimally invasive techniques. Detecting tubal blockages early allows for timely intervention through laparoscopic surgery or IVF treatment." />
        <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment" />
        <meta property="og:title" content="Best Gynecology Services" />
        <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
      </Helmet>
    <div className='flex mx-auto shadow-xl flex-wrap p-10 pl-28 my-20 justify-between md:w-11/12 items-cente'>
         <div className='md:w-1/2'>
           <h1 className='text-2xl md:text-4xl my-4 font-medium'>Hysterosalpingography (HSG) & Sono Salpingography (SSG)</h1>
           <p>HSG and SSG are specialized imaging techniques used to evaluate the fallopian tubes and uterine cavity.</p>
           <h2 className='text-2xl my-6'>Who Can Benefit from Embryo Donation?</h2>
           <ul className='list-disc'>
             <li>Women with suspected tubal blockages</li>
             <li>Couples with unexplained infertility</li>
             <li>Recurrent pregnancy loss patients</li>
           </ul>
           <h2 className='text-2xl my-4'>Procedure Overview</h2>
           <ul className='list-disc'>
             <li>HSG: A contrast dye is injected into the uterus and X-ray images are taken.</li>
             <li>SSG: Saline solution is used to visualize the uterine cavity using ultrasound.</li>
           </ul>
           <h2 className='text-2xl my-4'>Advantages:</h2>
           <ul className='list-disc'>
             <li>Effective in detecting tubal blockages and uterine abnormalities</li>
             <li>Minimally invasive</li>
             <li>Quick results</li>
           </ul>
           <h2 className='text-2xl my-4'>Disadvantages:</h2>
           <ul className='list-disc'>
             <li>May cause mild discomfort or cramping</li>
             <li>Risk of infection or allergic reaction to contrast dye</li>
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

export default HSGSSG