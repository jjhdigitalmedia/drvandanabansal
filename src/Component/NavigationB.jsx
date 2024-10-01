import React, { useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../Style/Style.css";
import "../Style/neonStyle.css";
import ATTBClogo1 from "../assets/ATTBClogo1.png";
import { IoLocationOutline } from "react-icons/io5";

function NavigationB() {
  const [isOpen, setIsOpen] = useState(false);
  const navClose = () => {
    // if (isOpen===true){
    setIsOpen(false)
    // }
  }
  return (
    <>
      <div className="flex flex-wrap text-center justify-between py-1 px-3 bg-red-800">
        <div>
          <span className="pr-8 text-xs text-white">
            Phone: +91 6390103002 | Email: arpitivf@gmail.com
          </span>
        </div>
        <div className="text-xs text-white">
          <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' target="_blank">
            <IoLocationOutline className="inline text-white text-lg text-wrap" />
            <span className="hidden lg:visible">
            162 Bai Ka Bagh, Lowther Road, Pincode - 211003, Prayagraj (Allahabad)
            UTTAR PRADESH, INDIA
            </span>
          </a>
        </div>
      </div>

      <nav
        className={`themess bg-lack z-50 bg-gray-100 md:text-white
           text-black fixd shadow-md w-full flex items-center justify-between
            flex-wrap p-1 md:p-2 md:bg-white bg-opacity-70 md:bg-opacity50 ${isOpen ? " shadow-xl" : ""
          }`}>
        <div className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
          <span
            className=" font-bol flex md:font-thin text-roe-400 ">
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
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
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
          className={`w-full block text-center h-screen md:h-auto 
            p-2 flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block h-screen bg-rose-50" : "hidden"
            }`}>
          <div className="text-sm lg:flex-grow p-1">
            <Link
              to="/"
              className={`block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white mr-4 ${isOpen ? "py-2" : ""
                }`} onClick={navClose}>
              Home
            </Link>

            <div class="dropdown text-sm lg:flex-grow p-1">
              <button class="dropbtn">About US</button>
              <div class="dropdown-content">
                <Link to='ourfounder' class="" onClick={navClose}>
                  Our founders
                </Link>
                <Link to='ourprofile' class="" onClick={navClose}>
                  Our Profile
                </Link>
                <Link to='ourvisionmission' class="" onClick={navClose}>
                  Our Vision & Mission
                </Link>
                <Link to='spiritualjourney' class="" onClick={navClose}>
                  Spiritual Journey
                </Link>
              </div>
            </div>

            <div class="dropdown text-sm lg:flex-grow p-1">
              <button class="dropbtn">Services</button>
              <div class="dropdown-content">
                <a class="dropdownn">
                  <button class="dropbtnn">Treatments</button>
                  <div class="dropdown-contentt">
                    <Link to="iuitreatment" onClick={navClose}>IUI</Link>
                    <Link to="ivfet" onClick={navClose}>IVF ET</Link>
                    <Link to="icsi" onClick={navClose}>ICSI</Link>
                    <Link to="ivmtreatment" onClick={navClose}>IVM</Link>
                    <Link to="imsitreatment" onClick={navClose}>IMSI</Link>
                    <Link to="embryomonitoring" onClick={navClose}>Embryo Monitoring</Link>
                    <Link to="laserassisted" onClick={navClose}>Laser Assisted Hatching</Link>
                  </div>
                </a>
                <a class="dropdownn">
                  <button class="dropbtnn">Test & Evaluation</button>
                  <div class="dropdown-contentt">
                    <Link to="endocrine" onClick={navClose}>Endocrine Profile</Link>
                    <Link to="sonography" onClick={navClose}>Sonography</Link>
                    <Link to="hsgsono" onClick={navClose}>HSG / SONO</Link>
                    <Link to="semenbank" onClick={navClose}>Semen Bank</Link>
                  </div>
                </a>
                <a class="dropdownn">
                  <button class="dropbtnn">Other Services</button>
                  <div class="dropdown-contentt">
                    <Link to="embryobank" onClick={navClose}>Embryo Bank</Link>
                    <Link to="blastocyst" onClick={navClose}>Blastocyst Culture</Link>
                    <Link to="eggdonation" onClick={navClose}>Egg Donation</Link>
                    <Link to="cryopreservation" onClick={navClose}>Cryopreservation</Link>
                  </div>
                </a>
              </div>
            </div>

            <a
              className={`block mt-0 font-semibold lg:inline-block
                 text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`}>
              <Link to="/facilities" className="hover:underline" onClick={navClose}>
                Patients Guide
              </Link>
            </a>
            <Link
              to="achievements"
              className={`block mt-0 hover:underline font-semibold lg:inline-block
                 text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`} onClick={navClose}>
              Our Success Rate
            </Link>
            <Link
              to="ivfteam"
              className={`block mt-0 hover:underline font-semibold lg:inline-block
                 text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`} onClick={navClose}>
              Our IVF Team
            </Link>
            <Link
              to="gallery"
              className={`block mt-0 hover:underline font-semibold
                 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${isOpen ? "py-2" : ""
                }`} onClick={navClose}>
              Gallery
            </Link>
          </div>

          <button className="rounded-3xl inline-flex text-xs hover:bg-red-700
           items-center bg-red-600 border-0 py-2 px-4 text-white">
            <Link to="bookappointment" onClick={navClose}>Contact US</Link>
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavigationB;
