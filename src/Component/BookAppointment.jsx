import React from 'react'
import bookvandana from "../assets/bookvandana.jpg";

const BookAppointment = () => {
    return (
        <div className='text-center pt-28'>
            <div className='bg-amber-100 p-4 m-3 text-center'>
                <div className='m-auto w-fit mb-2'> <span className='mb-2'>Book Your Appointment through this mobile no. - </span>
                    <h1 className=' text-center relative flex h-3 w-3'>
                        <span className='text-rose-700 font-bold m-auto absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 bot'>+911000000001</span>
                    </h1>
                </div>
            </div>
            <div class="lg:flex-grow mt-3 text-center m-auto md:w-4/5 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center">
                <h1 class="title-font text-center m-auto sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dr. Vandana Bansal
                </h1>
                <p class="mb-8 text-center leading-relaxed">DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery – since 18 years. Besided, she is Director of 500-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre & Vandana Women’s Hospital Allahabad. Jeevan Jyoti Hospital has completed 25th years in Oct-2013 Silver Jubilee celebration.</p>
            </div>
            <div className='m-auto w-80 h-80 mb-11'>
                <img
                    class="border-4 w-full mb-10 border-rose-700 object-cover object-center rounded-2xl md:rounded-full"
                    alt="hero"
                    src={bookvandana}
                />
            </div>
            <div className='mx-40 my-8 flex justify-center'>
                <div className='ms-5 text-left'>
                    <h1 className='font-bold text-3xl mb-3'>Expertise</h1>
                    <ul>
                        <li type='circle'>Comprehensive Eye Exams</li>
                        <li type='circle'>Cataract Surgery</li>
                        <li type='circle'>LASIK and Refractive Surgery</li>
                        <li type='circle'>Glaucoma Management</li>
                        <li type='circle'>Pediatric Ophthalmology</li>
                        <li type='circle'>Treatment of Macular Degeneration</li>
                        <li type='circle'>Diabetic Eye Care</li>
                    </ul>
                </div>
                <div className='ms-5 text-left'>
                    <h1 className='font-bold text-3xl mb-3'>Achievements</h1>
                    <ul>
                        <li type='circle'>
                            🏆  First IVF Triplet Baby of Allahabad 7 February 2002
                        </li>
                        <li type='circle'>
                            🏆  First Test Tube Baby of Allahabad 27 November 2000
                        </li>
                        <li type='circle'>
                            🏆 First Blastocyst transfer of Allahabad 20 August 2007 </li>
                        <li type='circle'>
                            🏆First Frozen Embryo Transfer (vitrification) Baby of Allahabad 23 June 2008
                        </li>
                        <li type='circle'>
                            🏆 First Surrogate mother delivered baby in Allahabad on 18 April 2008
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment