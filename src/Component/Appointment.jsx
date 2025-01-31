import React from 'react'
import { Link } from 'react-router-dom'

const Appointment = () => {
  return (
    <div className="bg-rose-200 flex flex-wrap md:px-16 md:py-10 w-full m-auto ">
      <div className=" text-left md:w-1/2 w-full py-10 px-10">
        <h1 className=' text-2xl text-centre md:text-4xl mb-2 text-gray-600 font-bold'>Request an Appointment</h1>
        <span className='text-xl md:text-left text-white'>Don't Wait, Consult with Dr. Vandana Bansal Today!</span>
      </div>

      <Link to='bookappointment' className='bg-white text-center h-fit align-middle my-10 py-3 md:w-72 w-48 mx-auto rounded-3xl text-2xl px-10'>Book Now</Link>

    </div>
  )
}

export default Appointment