import React from 'react'
import { Link } from 'react-router-dom'
import vandana1 from '../assets/vandana1.jpg'

export const Rewards = () => {
    return (
        <div className='text-center w-4/5  mx-auto flex overflow-scroll md:justify-center -mt-24 mb-20'>
            <div class="m-4 mx-1 rounded-2xl bg-stone-800 border-4 border-white md:w-1/4 sm:w-1/2 " data-aos='fde-up'>
                <Link to='advanceLaparoscopy'>
                    <div class="px-4 py-6">
                        <img
                            alt="ecommerce"
                            class="object-cover object-center p-4 w-full h-full block"
                            src={vandana1}
                        />
                        <h2 class="title-font font-medium text-md text-white">Patient's satisfaction
                        </h2>
                        <p class="leading-relaxed text-white">Know more</p>
                    </div>
                </Link>
            </div>
            <div class="m-4 mx-1 rounded-2xl bg-stone-800 border-4 border-white md:w-1/4 sm:w-1/2 w-full" data-aos='fde-up'>
                <Link to='advanceLaparoscopy'>
                    <div class="px-4 py-6">
                        <img
                            alt="ecommerce"
                            class="object-cover object-center p-4 w-full h-full block"
                            src={vandana1}
                        />
                        <h2 class="title-font font-medium text-md text-white">Patient's satisfaction
                        </h2>
                        <p class="leading-relaxed text-white">Know more</p>
                    </div>
                </Link>
            </div>
            <div class="m-4 mx-1 rounded-2xl bg-stone-800 border-4 border-white md:w-1/4 sm:w-1/2 w-full" data-aos='fad-up'>
                <Link to='advanceLaparoscopy'>
                    <div class="px-4 py-6">
                        <img
                            alt="ecommerce"
                            class="object-cover object-center p-4 w-full h-full block"
                            src={vandana1}
                        />
                        <h2 class="title-font font-medium text-md text-white">Fertility Treatments</h2>
                        <p class="leading-relaxed text-white">Know more</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
