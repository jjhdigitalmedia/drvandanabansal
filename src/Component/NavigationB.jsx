import React, { useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../Style/Style.css";
import "../Style/neonStyle.css";
import ATTBClogo1 from "../assets/ATTBClogo1.png";
import { IoLocationOutline } from "react-icons/io5";

import {
  ChevronDownIcon,
  PlusIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
function NavigationB() {
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
    // <>
    // <div className="flex flex-wrap z-50 justify-between py-1 px-3 bg-neutral-800">
    //   <div>
    //     <span className="pr-8 text-xs text-white">
    //       Phone: +91 6390103002 | Email: arpitivf@gmail.com
    //     </span>
    //   </div>
    //   <div className="text-xs text-white md:mt-2 mt-0">
    //     <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' target="_blank">
    //       <IoLocationOutline className="inline text-white text-lg text-wrap" />
    //       <span className="">
    //       162 Bai Ka Bagh, Lowther Road, (211003), Prayagraj, UP
    //       </span>
    //     </a>
    //   </div>
    // </div>

    //   <nav
    //     className={`themess z-50 bg-gray-100 md:text-white sticky top-0
    //        text-black fixd shadow-md w-full flex items-center justify-between
    //         flex-wrap p-2 md:bg-white ${isOpen ? " shadow-xl" : ""
    //       }`}>
    // <div className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
    //   <span
    //     className=" font-bol flex md:font-thin text-roe-400 ">
    //     <img src={ATTBClogo1} className="d-block w-12" alt="..." />
    //     <span className="text-red-600 font-semibold ml-2">
    //       ARPIT TEST TUBE
    //       <br />
    //       BABY CENTRE
    //     </span>
    //   </span>
    // </div>
    //     <div className={`block lg:hidden bg-opacity-30 text-xl`}>
    //       <button
    //         onClick={() => setIsOpen(!isOpen)}
    //         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
    //         <svg
    //           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg">
    //           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //         </svg>
    //         <svg
    //           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
    //         </svg>
    //       </button>
    //     </div>
    //     <div
    //       className={`w-full block text-center h-full md:h-auto
    //         p-2 flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block pb-20 bg-rose-50" : "hidden"
    //         }`}>
    //       <div className="text-sm lg:flex-grow p-1">
    //         <Link
    //           to="/"
    //           className={`block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white md:mr-4 ${isOpen ? "py-3" : ""
    //             }`} onClick={navClose}>
    //           Home
    //         </Link>

    //         <div className={` dropdown block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white md:mr-2 ${isOpen ? "py-3" : ""
    //             }`}
    //         >
    //           <button className="dropbtn">About US</button>
    //           <div className="dropdown-content font-thin">
    //             <Link to='ourfounder' className="" onClick={navClose}>
    //               Our founders
    //             </Link>
    //             <Link to='ourprofile' className="" onClick={navClose}>
    //               Our Profile
    //             </Link>
    //             <Link to='ourvisionmission' className="" onClick={navClose}>
    //               Our Vision & Mission
    //             </Link>
    //             <Link to='spiritualjourney' className="" onClick={navClose}>
    //               Spiritual Journey
    //             </Link>
    //           </div>
    //         </div>

    //         <div className={`dropdown block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white md:mr-2 ${isOpen ? "py-3" : ""
    //             }`}
    //         >
    //           <button className="dropbtn">Services</button>
    //           <div className="dropdown-content font-thin">
    //             <a className="dropdownn">
    //               <button className="dropbtnn">Treatments</button>
    //               <div className="dropdown-contentt font-thin">
    //                 <Link to="iuitreatment" onClick={navClose}>IUI</Link>
    //                 <Link to="ivfet" onClick={navClose}>IVF ET</Link>
    //                 <Link to="icsi" onClick={navClose}>ICSI</Link>
    //                 <Link to="ivmtreatment" onClick={navClose}>IVM</Link>
    //                 <Link to="imsitreatment" onClick={navClose}>IMSI</Link>
    //                 <Link to="embryomonitoring" onClick={navClose}>Embryo Monitoring</Link>
    //                 <Link to="laserassisted" onClick={navClose}>Laser Assisted Hatching</Link>
    //               </div>
    //             </a>
    //             <a className="dropdownn">
    //               <button className="dropbtnn">Test & Evaluation</button>
    //               <div className="dropdown-contentt font-thin">
    //                 <Link to="endocrine" onClick={navClose}>Endocrine Profile</Link>
    //                 <Link to="sonography" onClick={navClose}>Sonography</Link>
    //                 <Link to="hsgsono" onClick={navClose}>HSG / SONO</Link>
    //                 <Link to="semenbank" onClick={navClose}>Semen Bank</Link>
    //               </div>
    //             </a>
    //             <a className="dropdownn">
    //               <button className="dropbtnn">Other Services</button>
    //               <div className="dropdown-contentt font-thin">
    //                 <Link to="embryobank" onClick={navClose}>Embryo Bank</Link>
    //                 <Link to="blastocyst" onClick={navClose}>Blastocyst Culture</Link>
    //                 <Link to="eggdonation" onClick={navClose}>Egg Donation</Link>
    //                 <Link to="cryopreservation" onClick={navClose}>Cryopreservation</Link>
    //               </div>
    //             </a>
    //           </div>
    //         </div>

    //         <Link
    //           to="/facilities"
    //           className={`block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white md:mr-4 ${isOpen ? "py-3" : ""
    //             }`} onClick={navClose}>
    //           Facilities
    //         </Link>
    //          <Link
    //           to="/patientsguide"
    //           className={`block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white md:mr-4 ${isOpen ? "py-3" : ""
    //             }`} onClick={navClose}>
    //           Paitents Guide
    //         </Link>
    //         <Link
    //           to="achievements"
    //           className={`block mt-0 hover:underline font-semibold lg:inline-block
    //              text-black md:text-white lg:mt-0 md:mr-4 ${isOpen ? "py-3" : ""
    //             }`} onClick={navClose}>
    //           Our Success Rate
    //         </Link>
    //         <Link
    //           to="ivfteam"
    //           className={`block mt-0 hover:underline font-semibold lg:inline-block
    //              text-black md:text-white lg:mt-0  md:mr-4 ${isOpen ? "py-3" : ""
    //             }`} onClick={navClose}>
    //           Our IVF Team
    //         </Link>
    //         <Link
    //           to="gallery"
    //           className={`block mt-0 hover:underline font-semibold
    //              lg:inline-block text-black md:text-white lg:mt-0 md:mr-4 ${isOpen ? "py-3" : ""
    //             }`} onClick={navClose}>
    //           Gallery
    //         </Link>
    //       </div>

    //       <button className="rounded-3xl inline-flex text-xs hover:bg-red-700
    //        items-center bg-red-700 border-0 py-2 px-4 text-white">
    //         <Link to="bookappointment" onClick={navClose}>Contact US</Link>
    //       </button>
    //     </div>
    //   </nav>
    // </>


    
    <>
      <div className="flex flex-wrap z-50 justify-between py-1 px-3 bg-neutral-800">
        <div>
          <span className="pr-8 text-xs text-white">
            Phone: +91 6390103002 | Email: arpitivf@gmail.com
          </span>
        </div>
        <div className="text-xs text-white md:mt-2 mt-0">
          <a
            href="https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            <IoLocationOutline className="inline text-white text-lg text-wrap" />
            <span className="">
              162 Bai Ka Bagh, Lowther Road, (211003), Prayagraj, UP
            </span>
          </a>
        </div>
      </div>
      <nav className="bg-gray-50 py-2 px-4 shadow-sm sticky top-0 z-20">
        <div className="containe flex items-center justify-between">
          {/* <div className="text-white text-lg font-bold">ARPIT TEST TUBE BABY CENTRE</div> */}
          <div className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
            <span className=" font-bol flex md:font-thin text-roe-400 ">
              <img src={ATTBClogo1} className="d-block w-12" alt="..." />
              <span className="text-pink-600 font-bold ml-2">
                ARPIT TEST TUBE
                <br />
                BABY CENTRE
              </span>
            </span>
          </div>
          <div className="hidden md:flex space-x-4 relative">
          <Link to='/' className="text-black text-sm font-semibold">Home</Link>
            <Link
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
                <Link to='ourfounder' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Founder
                </Link>
                <Link to='ourprofile' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Profile
                </Link>
                <Link to='ourvisionmission' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Vision & Mission
                </Link>
                <Link to='spiritualjourney' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Spiritual Journey
                </Link>
              </div>
            )}
            {/* <button
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
              onClick={toggleServicesDropdown}
              className="text-black focus:outline-none">
              Services
              <ChevronDownIcon className="h-5 w-5 inline" />
            </button> */}
            {/* {isServicesDropdownOpen && (
              <div> */}
            <div
              className={`dropdown block mt-0 hover:underline transition duration-300 font-semibold lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white md:mr-1 ${
                isOpen ? "py-3" : ""
              }`}
            >
              <Link className="dropbtn font-semibold text-sm mr-0">
                Services
              </Link>
              <div className="dropdown-content font-thin">
                <a className="dropdownn">
                  <Link className="dropbtnn">Treatments</Link>
                  <div className="dropdown-contentt font-thin">
                    <Link to="iuitreatment" onClick={navClose}>
                      IUI
                    </Link>
                    <Link to="ivfet" onClick={navClose}>
                      IVF ET
                    </Link>
                    <Link to="icsi" onClick={navClose}>
                      ICSI
                    </Link>
                    <Link to="ivmtreatment" onClick={navClose}>
                      IVM
                    </Link>
                    <Link to="imsitreatment" onClick={navClose}>
                      IMSI
                    </Link>
                    <Link to="embryomonitoring" onClick={navClose}>
                      Embryo Monitoring
                    </Link>
                    <Link to="laserassisted" onClick={navClose}>
                      Laser Assisted Hatching
                    </Link>
                  </div>
                </a>
                <a className="dropdownn">
                  <button className="dropbtnn">Test & Evaluation</button>
                  <div className="dropdown-contentt font-thin">
                    <Link to="endocrine" onClick={navClose}>
                      Endocrine Profile
                    </Link>
                    <Link to="sonography" onClick={navClose}>
                      Sonography
                    </Link>
                    <Link to="hsgsono" onClick={navClose}>
                      HSG / SONO
                    </Link>
                    <Link to="semenbank" onClick={navClose}>
                      Semen Bank
                    </Link>
                  </div>
                </a>
                <a className="dropdownn">
                  <button className="dropbtnn">Other Services</button>
                  <div className="dropdown-contentt font-thin">
                    <Link to="embryobank" onClick={navClose}>
                      Embryo Bank
                    </Link>
                    <Link to="blastocyst" onClick={navClose}>
                      Blastocyst Culture
                    </Link>
                    <Link to="eggdonation" onClick={navClose}>
                      Egg Donation
                    </Link>
                    <Link to="cryopreservation" onClick={navClose}>
                      Cryopreservation
                    </Link>
                  </div>
                </a>
              </div>
            </div>
            {/* <div
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="absolute mt-5 w-48 bg-white rounded-md shadow-lg z-10">
                  <button
                    onClick={() => toggleNestedDropdown('ivf')}
                    className="flex justify-between items-center px-4 py-2 text-gray-800 w-full text-left">
                    Treatments
                    <PlusIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  {isNestedDropdownOpen.ivf && (
                    <div className="ml-4">
                      <button className="block px-4 py-2 text-gray-500">IUI</button>
                      <button className="block px-4 py-2 text-gray-500">IVF ET</button>
                      <button className="block px-4 py-2 text-gray-500">ICSI</button>
                      <button className="block px-4 py-2 text-gray-500">IVM</button>
                      <button className="block px-4 py-2 text-gray-500">IMSI</button>
                      <button className="block px-4 py-2 text-gray-500">Embryo Monitoring</button>
                      <button className="block px-4 py-2 text-gray-500">Laser Assisted Hatching</button>
                    </div>
                  )}
                </div> */}
            {/* </div>
            )} */}

            <Link to='facilities' className="text-black text-sm font-semibold">
              Facilities
            </Link>
            <Link to='patientsguide' className="text-black text-sm font-semibold">
              Patients Guide
            </Link>
            <Link to='achievements' className="text-black text-sm font-semibold">
              Success Rate
            </Link>
            <Link to='ivfteam' className="text-black text-sm font-semibold">
              Our IVF Team
            </Link>
            <Link to='gallery' className="text-black text-sm font-semibold">
              Gallery
            </Link>
          </div>
          <Link to='bookappointment' className="hidden md:block text-white bg-pink-700 px-3 py-1 text-sm rounded-xl">
            Contact Us
          </Link>
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white p-4">
            <div className="flex flex-col space-y-2">
              <Link to='/' className="text-black py-3 border-b-2 font-semibold">
                Home
              </Link>
              <button
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                onClick={toggleAboutDropdown}
                className="text-black py-3 font-semibold text-left border-b-2 focus:outline-none"
              >
                About Us
                <ChevronDownIcon className="h-5 w-5 inline" />
              </button>
              {isAboutDropdownOpen && (
                <div
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  className="ml-4"
                >
                  <Link to='ourfounders' className="block px-4 py-2 text-gray-700">
                    Our Founders
                  </Link>
                  <Link to='ourprofile' className="block px-4 py-2 text-gray-700">
                    Our Profile
                  </Link>
                  <Link to='ourvisionmission' className="block px-4 py-2 text-gray-700">
                    Our Vision & Mission
                  </Link>
                  <Link to='spiritualjourney' className="block px-4 py-2 text-gray-700">
                    Spiritual Journey
                  </Link>
                </div>
              )}
              <button
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
                onClick={toggleServicesDropdown}
                className="text-black py-3 text-left border-b-2 focus:outline-none"
              >
                Services
                <ChevronDownIcon className="h-5 w-5 inline" />
              </button>
              {isServicesDropdownOpen && (
                <div
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="ml-4"
                >
                  <button
                    onClick={() => toggleNestedDropdown("ivf")}
                    className="flex justify-between items-center px-4 py-2 text-gray-700 w-full text-left"
                  >
                    Treatment
                    <PlusIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  {isNestedDropdownOpen.ivf && (
                    <div className="ml-4">
                      <Link to='iui' className="block px-4 py-2 text-gray-500">
                        IUI
                      </Link>
                      <Link to='ivfet' className="block px-4 py-2 text-gray-500">
                        IVF ET
                      </Link>
                      <Link to='icsi' className="block px-4 py-2 text-gray-500">
                        ICSI
                      </Link>
                      <Link to='ivm' className="block px-4 py-2 text-gray-500">
                        IVM
                      </Link>
                      <Link to='imsi' className="block px-4 py-2 text-gray-500">
                        IMSI
                      </Link>
                      <Link to='embryomonitorign' className="block px-4 py-2 text-gray-500">
                        Embryo Monitoring
                      </Link>
                      <Link to='laserassistedhatcing' className="block px-4 py-2 text-gray-500">
                        Laser Assisted Hatching
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {isServicesDropdownOpen && (
                <div
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="ml-4"
                >
                  <button
                    onClick={() => toggleNestedDropdown("ivf")}
                    className="flex justify-between items-center px-4 py-2 text-gray-700 w-full text-left"
                  >
                    Test & Evaluation
                    <PlusIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  {isNestedDropdownOpen.ivf && (
                    <div className="ml-4">
                      <Link to ='endocrineprofile' className="block px-4 py-2 text-gray-500">
                        Endocrine Profile
                      </Link>
                      <Link to ='sonography' className="block px-4 py-2 text-gray-500">
                        Sonography
                      </Link>
                      <Link to ='hsgsno' className="block px-4 py-2 text-gray-500">
                        HSG/SNO
                      </Link>
                      <Link to ='semenbank' className="block px-4 py-2 text-gray-500">
                        Semen Bank
                      </Link>
                    </div>
                  )}
                </div>
              )}
              {isServicesDropdownOpen && (
                <div
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="ml-4"
                >
                  <button
                    onClick={() => toggleNestedDropdown("ivf")}
                    className="flex justify-between items-center px-4 py-2 text-gray-700 w-full text-left"
                  >
                    Other Services
                    <PlusIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  {isNestedDropdownOpen.ivf && (
                    <div className="ml-4">
                      <Link className="block px-4 py-2 text-gray-500">
                        Ebmryo Bank
                      </Link>
                      <Link className="block px-4 py-2 text-gray-500">
                        Blastocyst culture
                      </Link>
                      <Link className="block px-4 py-2 text-gray-500">
                        Egg Donation
                      </Link>
                      <Link className="block px-4 py-2 text-gray-500">
                        Cyopreservation
                      </Link>
                    </div>
                  )}
                </div>
              )}
              <Link to='facilities' className="text-black py-3 border-b-2 font-semibold">
                Facilities
              </Link>
              <Link to='patientsguide' className="text-black py-3 border-b-2 font-semibold">
                Patients Guide
              </Link>
              <Link to='achievments' className="text-black py-3 border-b-2 font-semibold">
                Success Rate
              </Link>
              <Link to='ivfteam' className="text-black py-3 border-b-2 font-semibold">
                Our IVF Team
              </Link>
              <Link to='gallery' className="text-black py-3 border-b-2 font-semibold">
                Gallery
              </Link>
              <Link to='contact' className="text-white text-center border-b-2 bg-red-700 px-2 py-2 my-5 rounded">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
export default NavigationB;
