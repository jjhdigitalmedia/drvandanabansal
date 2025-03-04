import React from 'react'
import Contact from '../Component/Contact';
import PageBanner from './PageBanner';
import { Helmet } from 'react-helmet';
const BookYourAppointment = () => {
    return (
        <>
            <Helmet>
                <title>Book your appointment with Dr. Vandana Bansal</title>
                <meta name="description" content="Book your appointment at Arpit Test Tube Baby Centre with Dr. Vandana Bansal, a leading IVF expert and gynaecologist. With extensive experience in treating infertility and offering advanced fertility solutions, Dr. Bansal provides compassionate care tailored to each patient’s needs. Whether you're looking for IVF, IUI, or advice on general women's health, Dr. Bansal ensures you receive the best care for your family-building goals. Schedule your consultation today and take the first step toward achieving parenthood." />
                <meta name="keywords" content="gynecologist, women's health, pregnancy care, PCOS treatment, doctors for pregnancy" />
                <meta property="og:title" content="Best Gynecology Services" />
                <meta property="og:description" content="Expert women's healthcare with trusted gynecologists." />
            </Helmet>
            <PageBanner />
            <div className='text-center pt-12'>
                {/* <div className="lg:flex-grow mt-3 text-center m-auto md:w-4/5 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center">
                    <h1 className="title-font text-center m-auto sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dr. Vandana Bansal
                    </h1>
                    <p className="mb-8 text-center leading-relaxed">DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery – since 18 years. Besided, she is Director of 500-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre & Vandana Women’s Hospital Allahabad. Jeevan Jyoti Hospital has completed 25th years in Oct-2013 Silver Jubilee celebration.</p>
                </div> */}
                <div className='mx-auto bg-red-100 w-fit mb-2 py-1 px-3 rounded-xl'> <span className='mb-2'>Contact US - </span>
                    <div className="relative inline-flex">
                        {/* <button
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl py-3 px-6 rounded-lg bg-gray-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button">
                            6390103002</button> */}
                            <a  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl py-3 px-6 rounded-lg bg-gray-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" href="tel:9151037784">6390103002</a>
                        <span
                            className="absolute min-w-[25px] min-h-[25px] rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-rose-700 text-white">
                        </span>
                    </div>
                </div>
                <Contact />
            </div>
        </>
    )
}

export default BookYourAppointment;