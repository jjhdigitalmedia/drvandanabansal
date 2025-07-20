import React, { useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../Style/Style.css";
import "../Style/neonStyle.css";
// import ATTBClogo1 from "../assets/ATTBClogo1.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
// import LogoAB from '../assets/LogoAB.png'
import {
  ChevronDownIcon,
  PlusIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
// import { Button } from "@material-tailwind/react";
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
      <div className=" hidden md:flex flex-wrap z-50 justify-between py-2 px-3 bg-rose-400">
        <div>
          <span className="pr-8 text-sm text-white">
            <IoCallOutline className="inline mr-2" />  
            {/* Phone: +91 6390103002, +91 9151037783 */}
            <a className="pr-3 text-sm text-white" href="tel:9151037784">Phone: +91 9151037784,</a>
            <a className="pr-6 text-sm text-white" href="tel:9151037783">+91 7705910037</a>
            <a className="pr-6 text-sm text-white" href="tel:5322417248">+91 532 241 7248</a>
          </span>
          <span className="pr-8 text-sm text-white">
            <MdOutlineMail className="inline mr-2" /> 
            {/* Email: arpitivf@gmail.com */}
            <a href="mailto:arpitivf@gmail.com?subject=Inquiry&body=Hello, I have a question about..." className='' target="_blank">arpitivf@gmail.com</a>
          </span>
        </div>
        <div>
          <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' target='_blank' className="pr-8 text-sm text-white">
            <IoLocationOutline className="inline " />162 Bai Ka Bagh, Lowther Rd, Jeevan Jyoti Hospital, Prayagraj, Uttar Pradesh 211003
          </a>
        </div>
      </div>
      <nav className="bg-white py-3 px-4 shadow-sm sticky top-0 z-20">
        <div className="containe flex items-center justify-between">
          <Link to ='/' className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
            <span className="font-bold flex text-xl md:text-2xl md:font- font-asap text-rose-600 ">
              {/* <img src={LogoAB} className="w-44 md:w-56" alt="" /> */} Dr Vandana Bansal
  
            </span>
          </Link>
          <div className="hidden md:flex space-x-4 relative">
            <Link to='/' className="text-black text-sm font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Home</Link>
            <Link
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              onClick={toggleAboutDropdown}
              className="text-black focus:outline-none font-semibold text-sm relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 "
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
                <Link to='about/our-founders' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Founder
                </Link>
                <Link to='our-profile' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Profile
                </Link>
                <Link to='our-vision-mission' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Our Vision & Mission
                </Link>
                <Link to='spiritual-journey' className="block px-4 py-2 text-gray-800 w-full text-left">
                  Spiritual Journey
                </Link>
              </div>
            )}
            <div
              className={`dropdown mt-0 font-semibold text-sm lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white focus:outline-none relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${isOpen ? "py-3" : ""
                }`}
            >
              Services
              <div className="dropdown-content font-thin mt-1">
                <a className="dropdownn">
                  <Link to='treatments' className="dropbtnn">Treatments</Link>
                  <div className="dropdown-contentt w-72 py-2 font-medium bg-rose-50">
                    <Link to="treatments/iui" onClick={navClose} className=" px-6 bg-rose-50">
                      IUI
                    </Link>
                    <Link to="treatments/ivf-et" onClick={navClose} className="px-6 my-2 bg-rose-50">
                      IVF ET
                    </Link>
                    <Link to="treatments/icsi" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      ICSI
                    </Link>
                    <Link to="treatments/laser-assisted" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Laser Assisted Hatching (LAH)
                    </Link>
                    <Link to="treatments/imsi" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      IMSI
                    </Link>
                    <Link to="treatments/embryo-donation" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Embryo Donation (ED)
                    </Link>
                    <Link to="treatments/oocyte-donation" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Occyte Donation (OD)
                    </Link>
                    <Link to="treatments/blastocyst-transfer" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Blastocyst Transfer
                    </Link>
                    <Link to="treatments/semen-cryopreservation" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Semen Cryopreservation
                    </Link>
                    <Link to="treatments/oocyte-cryopreservation" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Oocyte Cryopreservation
                    </Link>
                    <Link to="treatments/embryo-bank" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Embryo Banking (Cryopreservation)
                    </Link>
                    <Link to="treatments/mesa-microepididymal-sperm-aspiration" onClick={navClose} className="my-2 px-6 border-zinc-300 bg-rose-50">
                      MESA (Microepididymal Sperm Aspiration)
                    </Link>
                    <Link to="treatments/tesa-testicular-sperm-aspiration-cryopreservation" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      TESA (Testicular Sperm Aspiration and Cryopreservation)
                    </Link>
                  </div>
                </a>
                <a className="dropdownn">
                  <button className="dropbtnn">Test & Evaluation</button>
                  <div className="dropdown-contentt w-72 font-medium bg-rose-50">
                    <Link to="test-evaluation/hormonal-analysis" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Hormonal Analysis
                    </Link>
                    <Link to="test-evaluation/3d-4d-ultrasound-colour-doppler" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      3D & 4D Ultrasound & Colour Doppler
                    </Link>
                    <Link to="test-evaluation/hsg-ssg" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Hysterosalpinography (HSG) & Sono Salpinography
                    </Link>
                    <Link to="test-evaluation/ovulation-induction" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Ovulation Induction with Follicle Monitoring
                    </Link>
                    <Link to="test-evaluation/ai-semen-analysis" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      AI Assisted Semen Analysis
                    </Link>
                    <Link to="test-evaluation/fertility-enhancing-laparoscopic-hysteroscopic-surgeries" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Fertility Enhancing Laparoscopic and Hysteroscopic Surgeries
                    </Link>
                    <Link to="test-evaluation/diagnostic-video-laparoscopic-hysteroscopic" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Dignostic Video Laparoscopy / Hysterosocpy
                    </Link>
                    <Link to="test-evaluation/surgery-for-male-infertility" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Surgery for Male Infertility
                    </Link>
                    <Link to="test-evaluation/prp-treatment" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      PRP treatment for Endometrium & Ovary
                    </Link>
                    <Link to="test-evaluation/stemcell-therapy" onClick={navClose} className="my-2 px-6 bg-rose-50">
                      Stem Cell Therapy
                    </Link>
                   
                  </div>
                </a>
              </div>
            </div>

            <Link to='news-paper-images' className="text-black text-sm font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              In News
            </Link>
            <Link to='patients-guide' className="text-black text-sm font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Patients Guide
            </Link>
            <Link to='achievements' className="text-black text-sm font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Success Rate
            </Link>
            <Link to='ivf-team' className="text-black text-sm font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Our IVF Team
            </Link>
            <Link to='gallery' className="text-black text-sm font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Gallery
            </Link>
          </div>
          <Link to='book-appointment' className="hidden md:block text-white bg-rose-700 px-3 py-1 text-sm rounded-xl">
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
                  <Link to='our-founder' className="block px-4 py-2 text-gray-700">
                    Our Founders
                  </Link>
                  <Link to='our-profile' className="block px-4 py-2 text-gray-700">
                    Our Profile
                  </Link>
                  <Link to='our-vision-mission' className="block px-4 py-2 text-gray-700">
                    Our Vision & Mission
                  </Link>
                  <Link to='spiritual-journey' className="block px-4 py-2 text-gray-700">
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
                    {/* <Link to='treatments'> */}
                    Treatment
                    {/* </Link> */}
                    <PlusIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  {isNestedDropdownOpen.ivf && (
                    <div className="ml-4">
                      <Link to='treatments/iui' className="block px-4 py-2 text-gray-500">
                        IUI
                      </Link>
                      <Link to='treatments/ivf-et' className="block px-4 py-2 text-gray-500">
                        IVF ET
                      </Link>
                      <Link to='treatments/icsi' className="block px-4 py-2 text-gray-500">
                        ICSI
                      </Link>
                      <Link to='treatments/laserassistedhatcing' className="block px-4 py-2 text-gray-500">
                        Laser Assisted Hatching (LAH)
                      </Link>
                      <Link to='treatments/imsi' className="block px-4 py-2 text-gray-500">
                        IMSI
                      </Link>
                      <Link to='treatments/embryo-donation' className="block px-4 py-2 text-gray-500">
                        Embryo Donation (ED)
                      </Link>
                      <Link to='treatments/oocyte-donation' className="block px-4 py-2 text-gray-500">
                        Oocyte Donation (OD)
                      </Link>
                      <Link to='treatments/blastocyst-transfer' className="block px-4 py-2 text-gray-500">
                        Blastocyst Transfer
                      </Link>
                      <Link to='treatments/semen-cryopreservation' className="block px-4 py-2 text-gray-500">
                        Semen Cryopreservation
                      </Link>
                      <Link to='treatments/oocyte-cryopreservation' className="block px-4 py-2 text-gray-500">
                        Oocyte Cryopreservation
                      </Link>
                      <Link to='treatments/embryobank' className="block px-4 py-2 text-gray-500">
                        Embryo Banking
                      </Link>
                      <Link to='treatments/mesa-microepididymal-sperm-aspiration' className="block px-4 py-2 text-gray-500">
                        MESA (Microepididymal Sperm Aspiration)
                      </Link>
                      <Link to='treatments/tesa-testicular-sperm-aspiration-cryopreservation' className="block px-4 py-2 text-gray-500">
                        TESA (Testicular Sperm Aspiration and Cryopreservation)
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
                      <Link to="test-evaluation/hormonal-analysis" onClick={navClose} className="block px-4 py-2 text-gray-500">
                        Hormonal Analysis
                      </Link>
                      <Link to="test-evaluation/3d-4d-ultrasound-colour-doppler" onClick={navClose} className="block px-4 py-2 text-gray-500">
                        3D & 4D Ultrasound & Colour Doppler
                      </Link>
                      <Link to="test-evaluation/hsgssg" onClick={navClose} className="block px-4 py-2 text-gray-500">
                        Hysterosalpinography (HSG) & Sono Salpinography
                      </Link>
                      <Link to="test-evaluation/ovulation-induction" onClick={navClose} className="block px-4 py-2 text-gray-500">
                        Ovulation Induction with Follicle Monitoring
                      </Link>
                      <Link to="test-evaluation/ai-semen-analysis" onClick={navClose} className="block px-4 py-2 text-gray-500">
                        AI Assisted Semen Analysis
                      </Link>
                      <Link to="test-evaluation/fertility-enhancing-laparoscopic-hysteroscopic-surgeries" onClick={navClose} className="block px-4 py-2 text-gray-500">
                        Fertility Enhancing Laparoscopic and Hysteroscopic Surgeries
                      </Link>
                      <Link to="test-evaluation/diagnostic-video-laparoscopic-hysteroscopic" onClick={navClose} className="block px-4 py-2 text-gray-500">
                        Dignostic Video Laparoscopy / Hysterosocpy
                      </Link>
                      <Link to="test-evaluation/surgery-for-male-infertility" onClick={navClose} className="block px-4 py-2 text-gray-500">
                        Surgery for Male Infertility
                      </Link>
                      <Link to="test-evaluation/prp-treatment" onClick={navClose} className="block px-4 py-2 text-gray-500">
                        PRP treatment for Endometrium & Ovary
                      </Link>
                      <Link to="test-evaluation/stemcell-therapy" onClick={navClose} className="block px-4 py-2 text-gray-500">
                        Stem Cell Therapy
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
              <Link to='patients-guide' className="text-black py-3 border-b-2 font-semibold">
                Patients Guide
              </Link>
              <Link to='achievments' className="text-black py-3 border-b-2 font-semibold">
                Success Rate
              </Link>
              <Link to='ivf-team' className="text-black py-3 border-b-2 font-semibold">
                Our IVF Team
              </Link>
              <Link to='news-paper-images' className="text-black py-3 border-b-2 font-semibold">
                In News
              </Link>
              <Link to='gallery' className="text-black py-3 border-b-2 font-semibold">
                Gallery
              </Link>
              <Link to='book-appointment' className="text-white text-center border-b-2 bg-red-700 px-2 py-2 my-5 rounded">
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