import React from 'react'
import newlab2 from '../assets/newlab2.jpg'
import { Link } from 'react-router-dom'

const Achievements = () => {
  return (
    <section className="text-gray-600 z-1 mt-14 body-font">
      <h1 className='mx-16 ml-32 font-bold text-4xl'>About me</h1>
      <div className="container mx-auto  flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
          <img className="object-cover object-center rounded" alt="hero" src={newlab2} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Dr. Mool Narayan Verma
          </h1>
          <div className='  p-5'>
            <h1 className='font-bold text-3xl mb-3'>Achievements</h1>
            <ul>
              <li type='circle'>🏆 Comprehensive Eye Exams</li>
              <li type='circle'>🏆 Cataract Surgery</li>
              <li type='circle'>🏆 LASIK and Refractive Surgery</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Link to='bookappointment'>
              <button className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-900 rounded text-lg">Book Appoinment</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements