import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../Style/Style.css";
import "../Style/neonStyle.css";
import ATTBClogo1 from "../assets/ATTBClogo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function NavigationB() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap text-center justify-between py-1 px-3 bg-red-800">
        <div>
          <span className="pr-8 text-xs text-white">
            Phone: +91 6390103002        |       Email: arpitivf@gmail.com
          </span>
          {/* <span className='text-xs'>Email: arpitivf@gmail.com</span> */}
        </div>
        <div className="text-xs text-white">
        <a  href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' target="_blank">
          <IoLocationOutline className="inline text-white text-lg text-wrap" />
          162 Bai Ka Bagh, Lowther Road, Pincode - 211003, Prayagraj (Allahabad)
          UTTAR PRADESH, INDIA
        </a>
        </div>
      </div>

      <nav
        className={`themess bg-lack z-50 bg-gray-100 md:text-white text-black fixd shadow-md w-full flex items-center justify-between flex-wrap p-1 md:p-2 md:bg-white bg-opacity-70 md:bg-opacity50 ${isOpen ? " shadow-xl" : ""
          }`}
      >
        <div className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
          <span
            className=" font-bol flex md:font-thin text-roe-400 
          "
          >
            {/* md:[text-shadow:_0_2px_0_rgb(0_0_0_/_30%)] */}
            <img src={ATTBClogo1} class="d-block w-12" alt="..." />
            <span className="text-red-600 font-semibold ml-2">
              ARPIT TEST TUBE
              <br />
              BABY CENTRE
            </span>
          </span>
        </div>
        <div className={`block lg:hidden bg-opacity-30 text-xl`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block text-center h-screen md:h-auto p-2 flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block h-screen bg-rose-50" : "hidden"
            }`}
        >
          <div className="text-sm lg:flex-grow p-1">
            <Link
              to="/"
              className={`block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              Home
            </Link>


            <div class="dropdown">
              <button class="dropbtn">About US</button>
              <div class="dropdown-content">
                <a class="">
                 Our Profile
                </a>
                <a class="">
                 Our founders
                </a>
              </div>
            </div>


            <div class="dropdown">
              <button class="dropbtn">Services</button>
              <div class="dropdown-content">
                <a class="dropdownn">
                  <button class="dropbtnn">Treatments</button>
                  <div class="dropdown-contentt">
                    <a href="#">IUI</a>
                    <a href="#">IVF ET</a>
                    <a href="#">ICSI</a>
                    <a href="#">IVM</a>
                    <a href="#">IMSI</a>
                    <a href="#">Embryo Monitoring</a>
                    <a href="#">Laser Assisted Hatching</a>
                  </div>
                </a>
                <a class="dropdownn">
                  <button class="dropbtnn">Test & Evaluation</button>
                  <div class="dropdown-contentt">
                    <a href="#">Endocrine Profile</a>
                    <a href="#">Sonography</a>
                    <a href="#">HSG / SONO</a>
                    <a href="#">Semen Bank</a>
                  </div>
                </a>
                <a class="dropdownn">
                  <button class="dropbtnn">Other Services</button>
                  <div class="dropdown-contentt">
                    <a href="#">Embryo Bank</a>
                    <a href="#">Blascyst Culture</a>
                    <a href="#">Egg Donation</a>
                    <a href="#">Cryopreservation</a>
                  </div>
                </a>
              </div>
            </div>

           
            <a
              className={`block mt-0 font-semibold lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              <Link to="/facilities" className="hover:underline">
                Patients Guide
              </Link>
            </a>
            <Link
              to="achievements"
              className={`block mt-0 hover:underline font-semibold lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              Our Success Rate
            </Link>
            <Link
              to="ivfteam"
              className={`block mt-0 hover:underline font-semibold lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              Our IVF Team
            </Link>
            <Link
              to="gallery"
              className={`block mt-0 hover:underline font-semibold lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              Gallery
            </Link>
            {/* <Link
              to="contact"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}
            >
              Contact
            </Link> */}
          </div>

          <button className="rounded-3xl inline-flex text-xs hover:bg-red-700 items-center bg-red-600 border-0 py-2 px-4 text-white">
            <Link to="bookappointment">Contact US</Link>
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavigationB;
