import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
// import ATTBClogo1 from './public/ATTBClogo1.png'

const NavigationB = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen((prev) => !prev);
    setIsServicesDropdownOpen(false); // Close Services dropdown if About is opened
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen((prev) => !prev);
    setIsAboutDropdownOpen(false); // Close About dropdown if Services is opened
  };

  const toggleNestedDropdown = (menu) => {
    setIsNestedDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const [isOpen, setIsOpen] = useState(false);
  const navClose = () => {
    setIsOpen(false);
  };
  return (
    <>

      <div className=" hidden md:flex flex-wrap z-50 justify-between py-1 px-3 bg-pink-800">
        <div>
          <span className="pr-8 text-sm text-white">
            <MdOutlineMail className="inline" />
            <Link href='Home'>Phone: +91 6390103002</Link>
          </span>
          <span className="pr-8 text-sm text-white">
            <IoCallOutline className="inline" />
            Email: arpitivf@gmail.com
          </span>

        </div>
        <div>
          <span className="pr-8 text-sm text-white">
            <IoLocationOutline className="inline " />
            162 Bai Ka Bagh, Lowther Road, 211003, Prayagraj UP
          </span>
        </div>
      </div>
      <nav className="bg-gray-50 py-4 px-4 shadow-sm sticky top-0 z-20">
        <div className="containe flex items-center justify-between">
          {/* <div className="text-white text-lg font-bold">ARPIT TEST TUBE BABY CENTRE</div> */}
          <div className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
            <span className=" font-bol flex md:font-thin text-roe-400 ">
              {/* <img src={ATTBClogo1} className="d-block w-12" alt="..." /> */}
              <span className="text-pink-600 font-bold ml-2">
                Dr Vandana Bansal
              </span>
            </span>
          </div>
          <div className="hidden md:flex space-x-4 relative">
            <Link href='/' className="text-black text-sm font-semibold">Home</Link>
            <Link href='/'
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              onClick={toggleAboutDropdown}
              className="text-black focus:outline-none font-semibold text-sm"
            >
              About Us
              {/* <ChevronDownIcon className="h-5 w-5 inline" /> */}
            </Link>
            {isAboutDropdownOpen && (
              <div
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                className="absolute mt-4 pt-3 w-48 bg-white rounded-md shadow-lg z-10"
              >
                <Link href='ourfounder' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Founder
                </Link>
                <Link href='ourprofile' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Profile
                </Link>
                <Link href='ourvisionmission' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Vision & Mission
                </Link>
                <Link href='spiritualjourney' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Spiritual Journey
                </Link>
              </div>
            )}
            
            {/* <div
            className={`dropdown block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white md:mr-1 ${isOpen ? "py-3" : ""
              }`} >
            <Link href='/' className="dropbtn font-semibold text-sm mr-0">
              Services
            </Link>
            <div className="dropdown-content font-thin">
              <a className="dropdownn">
                <button className="dropbtnn">Treatments</button>
                <div className="dropdown-contentt font-thin">
                  <Link href="iuitreatment" onClick={navClose}>
                    IUI
                  </Link>
                  <Link href="ivfet" onClick={navClose}>
                    IVF ET
                  </Link>
                  <Link href="icsi" onClick={navClose}>
                    ICSI
                  </Link>
                  <Link href="ivmtreatment" onClick={navClose}>
                    IVM
                  </Link>
                  <Link href="imsitreatment" onClick={navClose}>
                    IMSI
                  </Link>
                  <Link href="embryomonitoring" onClick={navClose}>
                    Embryo Monitoring
                  </Link>
                  <Link href="laserassisted" onClick={navClose}>
                    Laser Assisted Hatching
                  </Link>
                </div>
              </a>
              <a className="dropdownn">
                <button className="dropbtnn">Test & Evaluation</button>
                <div className="dropdown-contentt font-thin">
                  <Link href="endocrine" onClick={navClose}>
                    Endocrine Profile
                  </Link>
                  <Link href="sonography" onClick={navClose}>
                    Sonography
                  </Link>
                  <Link href="hsgsono" onClick={navClose}>
                    HSG / SONO
                  </Link>
                  <Link href="semenbank" onClick={navClose}>
                    Semen Bank
                  </Link>
                </div>
              </a>
              <a className="dropdownn">
                <button className="dropbtnn">Other Services</button>
                <div className="dropdown-contentt font-thin">
                  <Link href="embryobank" onClick={navClose}>
                    Embryo Bank
                  </Link>
                  <Link href="blastocyst" onClick={navClose}>
                    Blastocyst Culture
                  </Link>
                  <Link href="eggdonation" onClick={navClose}>
                    Egg Donation
                  </Link>
                  <Link href="cryopreservation" onClick={navClose}>
                    Cryopreservation
                  </Link>
                </div>
              </a>
            </div>
          </div> */}
            <Link href='facilities' className="text-black text-sm font-semibold">
              Facilities
            </Link>
            <Link href='patientsguide' className="text-black text-sm font-semibold">
              Patients Guide
            </Link>
            <Link href='achievements' className="text-black text-sm font-semibold">
              Success Rate
            </Link>
            <Link href='ivfteam' className="text-black text-sm font-semibold">
              Our IVF Team
            </Link>
            <Link href='gallery' className="text-black text-sm font-semibold">
              Gallery
            </Link>
          </div>
          <Link href='bookappointment' className="hidden md:block text-white bg-pink-700 px-3 py-1 text-sm rounded-xl">
            Contact Us
          </Link>
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              // <XMarkIcon className="h-6 w-6" />
              <p>sfg</p>

            ) : (
              // <Bars3Icon className="h-6 w-6" />
              <p>sdfg</p>
            )}
          </button>
        </div>
      </nav >

    </>
  )
}

export default NavigationB