import React from 'react'
import { Link } from 'react-router-dom'
import speaker1 from '../assets/speaker1.jpg'
import vandanapc from '../assets/vandanapc.jpg'
import patientweb from '../assets/icons/patientweb.png'


export const Rewards = () => {
    return (
        <div className='text-center w-4/5 mx-auto flex erflow-scroll md:justify-center -mt-24 mb-5'>
            <div class="m-4 mx-1 md:mx-4 rounded-2xl bg-stone-800 border-4 border-white md:w-1/4 sm:w-1/2" data-aos='flip-right'>
                <Link to='advanceLaparoscopy'>
                    <div class="px-4 py-6">
                        <img
                            alt="ecommerce"
                            class="object-cover object-center p-3 w-full h-full block"
                            src={speaker1}
                        />
                        <h2 class="title-font font-medium text-md text-white">Guest Speaker
                        </h2>
                        <p class="leading-relaxed text-white">Know more</p>
                    </div>
                </Link>
            </div>
            <div class="m-4 mx-1 md:mx-4 rounded-2xl bg-stone-800 border-4 border-white md:w-1/4 sm:w-1/2 w-full" data-aos='flip-right'>
                <Link to='advanceLaparoscopy'>
                    <div class="px-4 py-6">
                        <img
                            alt="ecommerce"
                            class="object-cover object-center p-3 w-full h-full block"
                            src={patientweb}
                        />
                        <h2 class="title-font font-medium text-md text-white">Patient's satisfaction
                        </h2>
                        <p class="leading-relaxed text-white">Know more</p>
                    </div>
                </Link>
            </div>
            <div class="m-4 mx-1 md:mx-4 rounded-2xl bg-stone-800 border-4 border-white md:w-1/4 sm:w-1/2 w-full" data-aos='flip-right'>
                <Link to='advanceLaparoscopy'>
                    <div class="px-4 py-6 ">
                        <img
                            alt="ecommerce"
                            class="object-cover rounded-lg object-center p-3 w-full h-full block"
                            src={vandanapc}
                        />
                        <h2 class="title-font font-medium text-md text-white">Fertility Treatments</h2>
                        <p class="leading-relaxed text-white">Know more</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
