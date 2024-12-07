import React from 'react'
import Contact from '../Component/Contact';

const BookYourAppointment = () => {
    return (
        <>
            <div className='text-center pt-12'>

                {/* <div className="lg:flex-grow mt-3 text-center m-auto md:w-4/5 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center">
                    <h1 className="title-font text-center m-auto sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dr. Vandana Bansal
                    </h1>
                    <p className="mb-8 text-center leading-relaxed">DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery – since 18 years. Besided, she is Director of 500-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre & Vandana Women’s Hospital Allahabad. Jeevan Jyoti Hospital has completed 25th years in Oct-2013 Silver Jubilee celebration.</p>
                </div> */}
                <div className='mx-auto bg-red-100 w-fit mb-2 py-1 px-3 rounded-xl'> <span className='mb-2'>Contact US - </span>
                    <div className="relative inline-flex">
                        <button
                            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xl py-3 px-6 rounded-lg bg-gray-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button">
                            6390103002</button>
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