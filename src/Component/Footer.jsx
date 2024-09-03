import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <footer class="text-gray-600 body-font bg-gradient-to-b from-rose-50">
        <div class="container px-5 py-16 mx-auto ">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Treatment</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Preventive Screenings</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fertility Treatments</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Hormonal disorder</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Pregnancy & child birth</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Important Links</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600  hover:text-gray-800">Home</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Achievements</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Contacts</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div>
              <a href='bookappointment'>
                <button className='bg-rose-700 text-white p-3 rounded-md'>
                  Book Appointment
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="bg-slate-100">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a class="text-rose-700 flex title-font font-medium items-center md:justify-start justify-center">
              <span class="ml-3 text-xl">Best IVF Expert in Prayagraj</span>
            </a>
            <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0">© 2024 All rights reserved by Dr. Vandana Bansal
            </p>
            <div className='flex m-auto w-fit'>
                <a href="https://www.instagram.com/drvandanabansal_gynaecologist/">
                  <FaInstagram className='mx-2 text-rose-600 text-xl' />
                </a>
                <a href="https://www.facebook.com/vandana.bansal.33">
                  <FaFacebook className='mx-2 text-rose-600 text-xl' />
                </a>
                <a href="https://www.youtube.com/@DrVandanaBansal">
                  <FaYoutube className='mx-2 text-rose-600 text-xl' />
                </a>
                <a href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/">
                  <FaLinkedinIn className='mx-2 text-rose-600 text-xl' />
                </a>
              </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer