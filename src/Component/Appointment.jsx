import React from 'react'

const Appointment = () => {
  return (
    <div className="bg-rose-200 flex flex-wrap md:p-16 w-full m-auto ">
    <div className=" text-lef md:w-1/2 w-full py-10 px-10">
      <h1 className=' text-2xl text-centre md:text-4xl mb-2 text-gray-600 font-bold'>Request an Appointment</h1>
      <span className='text-xl md:text-left text-white'>Don't Wait, Consult with Dr. Vandana Bansal Today!</span>
    </div>

     <div className="text-right items-center md:w-1/2 w-full px-4">
      <button className='bg-white py-3 md:w-96 w-48 mx-auto rounded-3xl text-2xl px-10'>Book Now</button>
    </div>
    
      {/* <span className='text-3xl text-white font-extrabold'>1100+</span> */}

    {/*
    <div className="lg:w-1/4 md:border-r-2 text-center md:w-1/2 w-full px-4">
      <h1 className='mb-8 text-2xl font-bold'>Happy Patients</h1>
      <span className='text-3xl text-white font-extrabold'>5265+</span>
    </div>

    <div className="lg:w-1/4 text-center md:w-1/2 w-full px-1">
      <h1 className='mb-8 text-2xl font-bold'>Happy Patients</h1>
      <span className='text-3xl text-white font-extrabold'>99999+</span>
    </div> */}



  </div>
  )
}

export default Appointment