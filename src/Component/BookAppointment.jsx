import React from 'react'
import vandana1 from "../assets/vandana1.jpg";

const BookAppointment = () => {
    return (
        <div className='text-center pt-28'>
            <div className='bg-amber-100 p-4 m-3 text-center'>
                <div className='m-auto w-fit mb-2'> <span className='mb-2'>Book Your Appointment through this mobile no. - </span>
                    <h1 className=' text-center relative flex h-3 w-3'>
                        <span className='text-red-700 font-bold m-auto absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 bot'>8527175870</span>
                    </h1>
                </div>
            </div>
            <div class="lg:flex-grow mt-3 text-center m-auto md:w-4/5 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center">
                <h1 class="title-font text-center m-auto sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dr. Mool Narayan Verma
                </h1>
                <p class="mb-8 text-center leading-relaxed">I have been involved in hospital administration, focusing on implementing standards and ensuring smooth operations through effective planning, implementation, monitoring, and evaluation. With strong analytical and managerial skills, I excel in administering hospitals with over 350 beds, handling administration, expenditure control, NABH accreditation, and HRD programs. As an ophthalmologist, I have successfully applied theoretical knowledge to practical settings, achieving desired results.</p>
            </div>
            <div className='m-auto w-fit mb-11'>
                <img
                    class="border-2 w-full mb-10 border-blue-950 object-cover object-center rounded-2xl md:rounded-full"
                    alt="hero"
                    src={vandana1}
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
                            🏆  ICMR Project “Ocular Involvement in Leprosy” 1981 to 1986
                        </li>
                        <li type='circle'>
                            🏆  MCH Awareness Generation Training Programme: New Delhi, 1999
                        </li>
                        <li type='circle'>
                            🏆 Electrotherapy Training: at Jaipur, 2000 </li>
                        <li type='circle'>
                            🏆 NABH POI Course 5th Edition October 2022, NABH New Delhi, 2022
                        </li>
                        <li type='circle'>
                            🏆 Materials Management in Hospitals at National Academy of Indian Railways: Vadodara, 2010
                        </li>
                    </ul>
                </div>
                <div className='ms-5 text-left'>
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
        </div>
    )
}

export default BookAppointment