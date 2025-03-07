import React, { useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../Style/Style.css";
import "../Style/neonStyle.css";
import ATTBClogo1 from "../assets/ATTBClogo1.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

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
    <>
      <div className=" hidden md:flex flex-wrap z-50 justify-between py-1 px-3 bg-pink-800">
        <div>
          <span className="pr-8 text-sm text-white">
            <IoCallOutline className="inline" />
            <a className="pr-8 text-sm text-white" href="tel:9151037784">Phone: +91 6390103002</a>
          </span>
          <span className="pr-8 text-sm text-white">
            <MdOutlineMail className="inline" />
            Email: arpitivf@gmail.com
          </span>
        </div>
        <div>
          <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' target='_blank' className="pr-8 text-sm text-white">
            <IoLocationOutline className="inline " />162, Jeevan Jyoti Hospital, Lowther Rd, Himmat Ganj, Bai Ka Bagh, Prayagraj, Uttar Pradesh 211003
          </a>
        </div>
      </div>
      <nav className="bg-white py-3 px-4 shadow-sm sticky top-0 z-20">
        <div className="containe flex items-center justify-between">
          {/* <div className="text-white text-lg font-bold">ARPIT TEST TUBE BABY CENTRE</div> */}
          <div className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
            <span className=" font-bol flex md:font-thin text-roe-400 ">
              <span className="text-pink-600 text-2xl font-bold ml-2">
                Dr Vandana Bansal
              </span>
            </span>
          </div>
          <div className="hidden md:flex space-x-4 relative">
            <Link to='/' className="text-black text-sm font-semibold">Home</Link>
            <Link to='/about'
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
                <Link to='/about/founders' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Founder
                </Link>
                <Link to='/about/profile' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Profile
                </Link>
                <Link to='/about/vision-mission' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Vision & Mission
                </Link>
                <Link to='/about/spiritual-journey' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Spiritual Journey
                </Link>
              </div>
            )}

            <div
              className={`dropdown block mt-0 hover:underline transition duration-300 font-semibold text-sm lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white  ${isOpen ? "py-3" : ""
                }`}
            >
              Services
              <div className="dropdown-content font-thin">
                <a className="dropdownn">
                  <Link to='treatments' className="dropbtnn">Treatments</Link>
                  <div className="dropdown-contentt font-thin">
                    <Link to="/treatments/iui" onClick={navClose}>
                      IUI
                    </Link>
                    <Link to="/treatments/ivf-et" onClick={navClose}>
                      IVF ET
                    </Link>
                    <Link to="/treatments/icsi" onClick={navClose}>
                      ICSI
                    </Link>
                    <Link to="/treatments/ivm" onClick={navClose}>
                      IVM
                    </Link>
                    <Link to="/treatments/imsi" onClick={navClose}>
                      IMSI
                    </Link>
                    <Link to="/treatments/embryo-monitoring" onClick={navClose}>
                      Embryo Monitoring
                    </Link>
                    <Link to="/treatments/laser-assisted-hatching" onClick={navClose}>
                      Laser Assisted Hatching
                    </Link>
                  </div>
                </a>
                <a className="dropdownn">
                  <button className="dropbtnn">Test & Evaluation</button>
                  <div className="dropdown-contentt font-thin">
                    <Link to="/treatments/endocrine" onClick={navClose}>
                      Endocrine Profile
                    </Link>
                    <Link to="/treatments/sonography" onClick={navClose}>
                      Sonography
                    </Link>
                    <Link to="/treatments/hsg-sono" onClick={navClose}>
                      HSG / SONO
                    </Link>
                    <Link to="/treatments/semen-bank" onClick={navClose}>
                      Semen Bank
                    </Link>
                  </div>
                </a>
                <a className="dropdownn">
                  <button className="dropbtnn">Other Services</button>
                  <div className="dropdown-contentt font-thin">
                    <Link to="/treatments/embryo-bank" onClick={navClose}>
                      Embryo Bank
                    </Link>
                    <Link to="/treatments/blastocyst" onClick={navClose}>
                      Blastocyst Culture
                    </Link>
                    <Link to="/treatments/egg-donation" onClick={navClose}>
                      Egg Donation
                    </Link>
                    <Link to="/treatments/cryopreservation" onClick={navClose}>
                      Cryopreservation
                    </Link>
                  </div>
                </a>
              </div>
            </div>

            <Link to='/facilities' className="text-black  hover:border-b-2 hover:border-rose-600 transition-all ease-out duration-400 border-transparent text-sm font-semibold">
              Facilities
            </Link>
            <Link to='/patients-guide' className="text-black text-sm font-semibold">
              Patients Guide
            </Link>
            <Link to='/achievements' className="text-black text-sm font-semibold">
              Success Rate
            </Link>
            <Link to='/ivf-team' className="text-black text-sm font-semibold">
              Our IVF Team
            </Link>
            <Link to='/gallery' className="text-black text-sm font-semibold">
              Gallery
            </Link>
          </div>
          <Link to='/book-appointment' className="hidden md:block text-white bg-pink-700 px-3 py-1 text-sm rounded-xl">
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
                  <Link to='/about/founders' className="block px-4 py-2 text-gray-700">
                    Our Founders
                  </Link>
                  <Link to='/about/profile' className="block px-4 py-2 text-gray-700">
                    Our Profile
                  </Link>
                  <Link to='/about/vision-mission' className="block px-4 py-2 text-gray-700">
                    Our Vision & Mission
                  </Link>
                  <Link to='/about/spiritual-journey' className="block px-4 py-2 text-gray-700">
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
                      <Link to='/treatments/iui' className="block px-4 py-2 text-gray-500">
                        IUI
                      </Link>
                      <Link to='/treatments/ivf-et' className="block px-4 py-2 text-gray-500">
                        IVF ET
                      </Link>
                      <Link to='/treatments/icsi' className="block px-4 py-2 text-gray-500">
                        ICSI
                      </Link>
                      <Link to='/treatments/ivm' className="block px-4 py-2 text-gray-500">
                        IVM
                      </Link>
                      <Link to='/treatments/imsi' className="block px-4 py-2 text-gray-500">
                        IMSI
                      </Link>
                      <Link to='/treatments/embryo-monitoring' className="block px-4 py-2 text-gray-500">
                        Embryo Monitoring
                      </Link>
                      <Link to='/treatments/laser-assisted-hatching' className="block px-4 py-2 text-gray-500">
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
                      <Link to='/treatments/endocrineprofile' className="block px-4 py-2 text-gray-500">
                        Endocrine Profile
                      </Link>
                      <Link to='/treatments/sonography' className="block px-4 py-2 text-gray-500">
                        Sonography
                      </Link>
                      <Link to='/treatments/hsg-sno' className="block px-4 py-2 text-gray-500">
                        HSG/SNO
                      </Link>
                      <Link to='/treatments/semen-bank' className="block px-4 py-2 text-gray-500">
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
                      <Link to="/treatments/embryo-bank" className="block px-4 py-2 text-gray-500">
                        Ebmryo Bank
                      </Link>
                      <Link to="/treatments/blastocyst" className="block px-4 py-2 text-gray-500">
                        Blastocyst culture
                      </Link>
                      <Link to="/treatments/egg-donation" className="block px-4 py-2 text-gray-500">
                        Egg Donation
                      </Link>
                      <Link to="/treatments/cryopreservation" className="block px-4 py-2 text-gray-500">
                        Cyopreservation
                      </Link>
                    </div>
                  )}
                </div>
              )}
              <Link to='/facilities' className="text-black py-3 border-b-2 font-semibold">
                Facilities
              </Link>
              <Link to='/patients-guide' className="text-black py-3 border-b-2 font-semibold">
                Patients Guide
              </Link>
              <Link to='/achievments' className="text-black py-3 border-b-2 font-semibold">
                Success Rate
              </Link>
              <Link to='/ivf-team' className="text-black py-3 border-b-2 font-semibold">
                Our IVF Team
              </Link>
              <Link to='/gallery' className="text-black py-3 border-b-2 font-semibold">
                Gallery
              </Link>
              <Link to='/book-appointment' className="text-white text-center border-b-2 bg-red-700 px-2 py-2 my-5 rounded">
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
