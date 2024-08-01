import React from 'react'

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
            <span class="inline-flex sm:ml-auto sm:mt-0 justify-center sm:justify-start">
              <a href='https://www.facebook.com/vandana.bansal.33' target='_blank' class="text-rose-700">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href='https://x.com/bansaldrvandana?lang=en' target='_blank' class="ml-3 text-rose-700 ">
              
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              
              {/* <FontAwesomeIcon icon="fa-brands fa-youtube" /> */}

              <a href='https://www.instagram.com/drvandanabansal_gynaecologist/' target='_blank' class="text-rose-700 ml-3 ">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href='https://www.linkedin.com/in/dr-vandana-bansal-5916279b/' target='_blank' class="text-rose-700 ml-3">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer