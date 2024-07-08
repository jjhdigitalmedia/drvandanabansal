import React from 'react'
import Naryanverma from '../assets/Naryanverma.png'

const About = () => {
    return (
        <>
            <section id='about' class="text-gray-600 mt-14 body-font">
                <h1 className='mx-16 ml-32 font-bold text-4xl'>About me</h1>
                <div class="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center rounded" alt="hero" src={Naryanverma} />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dr. Mool Narayan Verma
                        </h1>
                        <p class="mb-8 text-left leading-relaxed">I have been involved in hospital administration, focusing on implementing standards and ensuring smooth operations through effective planning, implementation, monitoring, and evaluation. With strong analytical and managerial skills, I excel in administering hospitals with over 350 beds, handling administration, expenditure control, NABH accreditation, and HRD programs. As an ophthalmologist, I have successfully applied theoretical knowledge to practical settings, achieving desired results.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">Book Appoinment</button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Know me</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About







