import React from 'react'
import aboutvandana from '../assets/aboutvandana.jpg'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <section id='about' class="text-gray-600 mt-14 body-font">
                <h1 className='mx-16 ml-32 font-bold text-4xl'>About me</h1>
                <div class="container mx-auto  flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full p-5 md:w-1/2 w-5/6 mb-10 md:mb-0 ">
                        <img class="object-cover object-center rounded" alt="hero" src={aboutvandana} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dr. Vandana Bansal
                        </h1>
                        <p class="mb-8 text-left leading-relaxed"> DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. She is specialized in Laparoscopy and Hysteroscopic Surgery – since 18 years. Besided, she is Director of 500-bedded, multi-speciality Jeevan Jyoti Hospital, Arpit Test Tube Baby Centre & Vandana Women’s Hospital Allahabad. Jeevan Jyoti Hospital has completed 25th years in Oct-2013 Silver Jubilee celebration.</p>
                        <div class="flex justify-center">
                            <Link to='bookappointment'>
                                <button class="inline-flex text-white bg-rose-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">Book Appoinment</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mx-5 md:mx-40 my-8 flex flex-wrap justify-left md:justify-center'>
                    <div className='ms-5  p-5'>
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
                    <div className='ms-5  p-5'>
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
                    <div className='ms-5  p-5'>
                        <h1 className='font-bold text-3xl mb-3'>Qualification</h1>
                        <ul>
                            <li type='circle'><span className='font-bold'>MS/Ophthalmology</span>,1984, Govt Medical College, Gorakhpur, UP
                            </li>
                            <li type='circle'>
                            <span className='font-bold'>MBBS</span>,1979, Govt. Medical College, Gorakhpur, UP
                            </li>
                        </ul>
                    </div>
                    <div className='ms-5 text-left p-5'>
                        <h1 className='font-bold text-3xl mb-3'>Memberships</h1>
                        <ul>
                            <li type='circle'>
                                Indian Medical Association – Life- 1990, 12531/UP/452/57/L
                            </li>
                            <li type='circle'>
                                All Indian Ophthalmological Society – Life- 1994, M-2917
                            </li>
                            <li type='circle'>
                                UP State Ophthalmological Society - Life </li>
                            <li type='circle'>
                                Delhi Ophthalmological Society - Life – 1997, N-541
                            </li>
                            <li type='circle'>
                                Indian Red Cross Society - Life -1999
                            </li>
                            <li type='circle'>
                                Indian Public Health Association- Life -2008
                            </li>
                            <li type='circle'>
                                Association of Indian Occupational Health -Life - 2011
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About







