import React from 'react'
import nn from "../assets/nn.jpg";

const BookAppointment = () => {
    return (
        <div className='text-center pt-28'>
            <div className='bg-amber-100 p-4 m-3 text-center'>
                <div className='m-auto w-fit mb-2'> <span className='mb-2'>Book Your Appointment through this mobile no. - </span>
                    <h1 className=' text-center relative flex h-3 w-3'>
                        <span className='text-red-700 font-bold m-auto animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 bot'>8527175870</span>
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
                    src={nn}
                />
            </div>
        </div>
    )
}

export default BookAppointment