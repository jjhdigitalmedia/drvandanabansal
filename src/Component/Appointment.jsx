import React from 'react'
import { Link } from 'react-router-dom'

const Appointment = () => {
  return (
    <>
    <section className="bg-white py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-4xl font-bold text-pink-800">
            Book a Consultation
          </h2>
          <p className="mb-8 text-lg leading-8 text-gray-700">
            If you are experiencing irregular periods or abnormal menstrual
            symptoms, consult our specialists for accurate diagnosis and
            effective treatment.
          </p>

          <div className="rounded-3xl bg-[#f2f2f2] p-10 shadow-xl">
            <h3 className="mb-3 text-3xl font-bold text-pink-800">
              Dr. Vandana Bansal
            </h3>
            <p className="mb-6 text-lg text-gray-700">
              Expert Care for Women’s Health & Hormonal Wellness
            </p>

            <button className="rounded-full bg-pink-800 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-pink-800">
              Contact Now
            </button>
          </div>
        </div>
      </section>
    {/* <div className="bg-[#f2f2f2] flex flex-wrap md:px-16 md:py-10 w-full m-auto ">
      <div className=" text-left md:w-1/2 w-full py-10 px-10">
        <h1 className=' text-2xl text-centre md:text-4xl mb-2 text-pink-800 font-bold'>Request an Appointment</h1>
        <span className='text-xl md:text-left'>Don't Wait, Consult with Dr. Vandana Bansal Today!</span>
      </div>

      <Link to='book-appointment' className='bg-pink-800 text-white shadow-md text-center h-fit align-middle my-10 py-3 md:w-72 w-48 mx-auto rounded-3xl text-2xl px-10'>Book Now</Link>

    </div> */}
    </>
  )
}

export default Appointment