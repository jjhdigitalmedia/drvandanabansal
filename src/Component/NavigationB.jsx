// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "aos/dist/aos.css";
// import "../Style/Style.css";
// import "../Style/neonStyle.css";
// import DrVandanaLogo from '../assets/DrVandanaLogo.png'
// import { IoLocationOutline } from "react-icons/io5";
// import { IoCallOutline } from "react-icons/io5";
// import {
//   ChevronDownIcon,
//   PlusIcon,
//   XMarkIcon,
//   Bars3Icon,
// } from "@heroicons/react/24/solid";
// import { CiMenuFries } from "react-icons/ci";
// function NavigationB() {
//   const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
//   const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState({});
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   const toggleAboutDropdown = () => {
//     setIsAboutDropdownOpen((prev) => !prev);
//     setIsServicesDropdownOpen(false); // Close Services dropdown if About is opened
//   };

//   const toggleServicesDropdown = () => {
//     setIsServicesDropdownOpen((prev) => !prev);
//     setIsAboutDropdownOpen(false); // Close About dropdown if Services is opened
//   };

//   const toggleNestedDropdown = (menu) => {
//     setIsNestedDropdownOpen((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }));
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const navClose = () => {
//     setIsOpen(false);
//   };
//   return (
//     <>
//       <div className=" hidden md:flex flex-wrap z-50 justify-between py-2 px-3 bg-pink-800">
//         <div>
//           <span className="pr-8 text-sm text-white">
//             <IoCallOutline className="inline mr-2" />
//             <a className="pr-3 text-sm text-white" href="tel:9151037784">+91 9151037784</a>
//             <a className="pr-6 text-sm text-white" href="tel:6390103002">+91 6390103002</a>
//             <a className="pr-6 text-sm text-white" href="tel:6390103004">+91 6390103004</a>
//           </span>
//         </div>
//         <div>
//           <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' target='_blank' className="pr-8 text-sm text-white">
//             <IoLocationOutline className="inline " />Jeevan Jyoti Hospital, Prayagraj - 211003
//           </a>
//         </div>
//       </div>
//       <nav className="bg-white py-2 md:py-1 px-1 md:px-4 shadow-sm sticky top-0 z-20">
//         <div className="containe flex items-center justify-between">
//           <Link to='/' className="flex items-center flex-shrink-0 ml-1 md:ml-6 lg:ml-10 lg:mr-32">
//             <img src={DrVandanaLogo} className="w-52 md:w-80" alt="Dr Vandana Logo" />
//           </Link>
//           <div className="hidden md:flex space-x-4 relative">
//             <Link to='/' className="text-black text-sm font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-800 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Home</Link>
//             <Link to='about'
//               className="text-black focus:outline-none font-semibold text-sm relative inline-block after:block after:h-[2px] after:bg-rose-800 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 "
//             >
//               About Dr. Vandana
//             </Link>
//             <div
//               className={`dropdown mt-0 font-semibold text-sm lg:inline-block lg:mt-0 text-black md:text-whi focus:outline-none relative inline-block after:block after:h-[2px] after:bg-rose-800 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ${isOpen ? "py-3" : ""
//                 }`}
//             >
//               Specialities
//               <div className="dropdown-content font-thin mt-1 rounded-lg bg-ros-800 w-72">
//                 <Link to="treatments/iui" onClick={navClose} className="px-6 hover:text-black">
//                   IUI
//                 </Link>
//                 <Link to="treatments/ivf-et" onClick={navClose} className="px-6 my-2">
//                   IVF ET
//                 </Link>
//                 <Link to="treatments/icsi" onClick={navClose} className="my-2 px-6">
//                   ICSI
//                 </Link>
//                 <Link to="treatments/laser-assisted-hatching" onClick={navClose} className="my-2 px-6">
//                   Laser Assisted Hatching (LAH)
//                 </Link>
//                 <Link to="treatments/imsi" onClick={navClose} className="my-2 px-6">
//                   IMSI
//                 </Link>
//                 <Link to="treatments/embryo-donation" onClick={navClose} className="my-2 px-6">
//                   Embryo Donation (ED)
//                 </Link>
//                 <Link to="treatments/oocyte-donation" onClick={navClose} className="my-2 px-6">
//                   Occyte Donation (OD)
//                 </Link>
//                 <Link to="treatments/blastocyst-transfer" onClick={navClose} className="my-2 px-6">
//                   Blastocyst Transfer
//                 </Link>
//                 <Link to="treatments/semen-cryopreservation" onClick={navClose} className="my-2 px-6">
//                   Semen Cryopreservation
//                 </Link>
//                 <Link to="treatments/oocyte-cryopreservation" onClick={navClose} className="my-2 px-6">
//                   Oocyte Cryopreservation
//                 </Link>
//                 <Link to="treatments/embryo-bank" onClick={navClose} className="my-2 px-6">
//                   Embryo Banking (Cryopreservation)
//                 </Link>
//                 <Link to="treatments/mesa-microepididymal-sperm-aspiration" onClick={navClose} className="my-2 px-6 border-zinc-300">
//                   MESA (Microepididymal Sperm Aspiration)
//                 </Link>
//                 <Link to="treatments/tesa-testicular-sperm-aspiration-cryopreservation" onClick={navClose} className="my-2 px-6">
//                   TESA (Testicular Sperm Aspiration and Cryopreservation)
//                 </Link>
//               </div>
//             </div>

//             <Link to='news-paper-images' className="text-black text-sm font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-800 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
//               In News
//             </Link>
//             <Link to='patients-guide' className="text-black text-sm font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-800 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
//               Patients Guide
//             </Link>
//             <Link to='gallery' className="text-black text-sm font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-800 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
//               Gallery
//             </Link>
//             <Link to='https://www.youtube.com/@DrVandanaBansal' target="_blank" className="text-sm bg-rose-700 text-white px-2 rounded-md font-semibold relative inline-block after:block after:h-[2px] after:bg-rose-800 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
//               Youtube Channel
//             </Link>
//           </div>
//           <Link to='book-appointment' className="hidden md:block text-white bg-pink-800 px-3 py-2 text-sm rounded-xl">
//             Make an Appointment
//           </Link>
//           <button
//             className="md:hidden text-black focus:outline-none"
//             onClick={toggleMobileMenu}
//           >
//             {isMobileMenuOpen ? (
//               <XMarkIcon className="h-6 w-6" />
//             ) : (
//               <CiMenuFries className="h-6 w-6" />
//             )}
//           </button>
//         </div>


//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-white p-4">
//             <div className="flex flex-col space-y-2">
//               <Link to='/' className="text-black py-3 border-b-2 font-semibold">
//                 Home
//               </Link>
//               <button
//                 className="text-black py-3 font-semibold text-left border-b-2 focus:outline-none"
//               >
//                 About Us
//                 <ChevronDownIcon className="h-5 w-5 inline" />
//               </button>
//               <button
//                 onMouseEnter={() => setIsServicesDropdownOpen(true)}
//                 onMouseLeave={() => setIsServicesDropdownOpen(false)}
//                 onClick={toggleServicesDropdown}
//                 className="text-black py-3 text-left border-b-2 focus:outline-none"
//               >
//                 Services
//                 <ChevronDownIcon className="h-5 w-5 inline" />
//               </button>
//               {isServicesDropdownOpen && (
//                 <div
//                   onMouseEnter={() => setIsServicesDropdownOpen(true)}
//                   onMouseLeave={() => setIsServicesDropdownOpen(false)}
//                   className="ml-4"
//                 >
//                   <button
//                     onClick={() => toggleNestedDropdown("ivf")}
//                     className="flex justify-between items-center px-4 py-2 text-gray-700 w-full text-left"
//                   >
//                     Treatment
//                     <PlusIcon className="h-5 w-5 text-gray-600" />
//                   </button>
//                   {isNestedDropdownOpen.ivf && (
//                     <div className="ml-4">
//                       <Link to='treatments/iui' className="block px-4 py-2 text-gray-500">
//                         IUI
//                       </Link>
//                       <Link to='treatments/ivf-et' className="block px-4 py-2 text-gray-500">
//                         IVF ET
//                       </Link>
//                       <Link to='treatments/icsi' className="block px-4 py-2 text-gray-500">
//                         ICSI
//                       </Link>
//                       <Link to='treatments/laserassistedhatcing' className="block px-4 py-2 text-gray-500">
//                         Laser Assisted Hatching (LAH)
//                       </Link>
//                       <Link to='treatments/imsi' className="block px-4 py-2 text-gray-500">
//                         IMSI
//                       </Link>
//                       <Link to='treatments/embryo-donation' className="block px-4 py-2 text-gray-500">
//                         Embryo Donation (ED)
//                       </Link>
//                       <Link to='treatments/oocyte-donation' className="block px-4 py-2 text-gray-500">
//                         Oocyte Donation (OD)
//                       </Link>
//                       <Link to='treatments/blastocyst-transfer' className="block px-4 py-2 text-gray-500">
//                         Blastocyst Transfer
//                       </Link>
//                       <Link to='treatments/semen-cryopreservation' className="block px-4 py-2 text-gray-500">
//                         Semen Cryopreservation
//                       </Link>
//                       <Link to='treatments/oocyte-cryopreservation' className="block px-4 py-2 text-gray-500">
//                         Oocyte Cryopreservation
//                       </Link>
//                       <Link to='treatments/embryobank' className="block px-4 py-2 text-gray-500">
//                         Embryo Banking
//                       </Link>
//                       <Link to='treatments/mesa-microepididymal-sperm-aspiration' className="block px-4 py-2 text-gray-500">
//                         MESA (Microepididymal Sperm Aspiration)
//                       </Link>
//                       <Link to='treatments/tesa-testicular-sperm-aspiration-cryopreservation' className="block px-4 py-2 text-gray-500">
//                         TESA (Testicular Sperm Aspiration and Cryopreservation)
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               )}
//               <Link to='patients-guide' className="text-black py-3 border-b-2 font-semibold">
//                 Patients Guide
//               </Link>
//               <Link to='achievments' className="text-black py-3 border-b-2 font-semibold">
//                 Success Rate
//               </Link>
//               <Link to='ivf-team' className="text-black py-3 border-b-2 font-semibold">
//                 Our IVF Team
//               </Link>
//               <Link to='news-paper-images' className="text-black py-3 border-b-2 font-semibold">
//                 In News
//               </Link>
//               <Link to='gallery' className="text-black py-3 border-b-2 font-semibold">
//                 Gallery
//               </Link>
//               <Link to='book-appointment' className="text-white text-center border-b-2 bg-pink-800 px-2 py-2 my-5 rounded">
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }
// export default NavigationB;



import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "../Style/Style.css";
import "../Style/neonStyle.css";

import DrVandanaLogo from "../assets/DrVandanaLogo.png";

import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { ChevronDownIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { CiMenuFries } from "react-icons/ci";

function NavigationB() {

  const location = useLocation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState({});

  const dropdownRef = useRef(null);

  const treatments = [
    {
      name: "IUI",
      path: "/treatments/iui",
    },
    {
      name: "IVF ET",
      path: "/treatments/ivf-et",
    },
    {
      name: "ICSI",
      path: "/treatments/icsi",
    },
    {
      name: "Laser Assisted Hatching (LAH)",
      path: "/treatments/laser-assisted-hatching",
    },
    {
      name: "IMSI",
      path: "/treatments/imsi",
    },
    {
      name: "Embryo Donation (ED)",
      path: "/treatments/embryo-donation",
    },
    {
      name: "Oocyte Donation (OD)",
      path: "/treatments/oocyte-donation",
    },
    {
      name: "Blastocyst Transfer",
      path: "/treatments/blastocyst-transfer",
    },
    {
      name: "Semen Cryopreservation",
      path: "/treatments/semen-cryopreservation",
    },
    {
      name: "Oocyte Cryopreservation",
      path: "/treatments/oocyte-cryopreservation",
    },
    {
      name: "Embryo Banking (Cryopreservation)",
      path: "/treatments/embryo-bank",
    },
    {
      name: "MESA (Microepididymal Sperm Aspiration)",
      path: "/treatments/mesa-microepididymal-sperm-aspiration",
    },
    {
      name: "TESA (Testicular Sperm Aspiration and Cryopreservation)",
      path: "/treatments/tesa-testicular-sperm-aspiration-cryopreservation",
    },
  ];

  const isTreatmentPage = location.pathname.startsWith("/treatments");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen((prev) => !prev);
  };

  const toggleNestedDropdown = (menu) => {
    setIsNestedDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsNestedDropdownOpen({});
  };

  // Close menus whenever route changes
  useEffect(() => {
    closeAllMenus();
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown with ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeAllMenus();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Common NavLink Style
  const navLinkClass = ({ isActive }) =>
    `text-black text-sm font-semibold relative inline-block
    after:block after:h-[2px]
    after:bg-rose-800
    after:transition-transform
    after:duration-300
    after:origin-left
    ${isActive
      ? "text-rose-800 after:scale-x-100"
      : "after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <>
      {/* =================== TOP HEADER =================== */}

      <div className="hidden md:flex flex-wrap z-50 justify-between py-2 px-3 bg-pink-800">
        <div>
          <span className="pr-8 text-sm text-white">
            <IoCallOutline className="inline mr-2" />
            <a
              className="pr-3 text-sm text-white"
              href="tel:9151037784"
            >
              +91 9151037784
            </a>
            <a
              className="pr-6 text-sm text-white"
              href="tel:6390103002"
            >
              +91 6390103002
            </a>
            <a
              className="pr-6 text-sm text-white"
              href="tel:6390103004"
            >
              +91 6390103004
            </a>
          </span>
        </div>

        <div>
          <a
            href="https://www.google.com/maps/place/..."
            target="_blank"
            rel="noopener noreferrer"
            className="pr-8 text-sm text-white"
          >
            <IoLocationOutline className="inline" />
            Jeevan Jyoti Hospital, Prayagraj - 211003
          </a>
        </div>
      </div>

      {/* =================== NAVBAR =================== */}

      <nav className="bg-white py-2 md:py-1 px-1 md:px-4 shadow-sm sticky top-0 z-20">

        <div className="containe flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center flex-shrink-0 ml-1 md:ml-6 lg:ml-10 lg:mr-32"
          >
            <img
              src={DrVandanaLogo}
              className="w-52 md:w-80"
              alt="Dr Vandana Logo"
            />
          </Link>

          {/* DESKTOP NAV */}

          <div className="hidden md:flex items-center space-x-4 relative">

            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={navLinkClass}
            >
              About Dr. Vandana
            </NavLink>

            {/* SPECIALITIES */}

            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                className={`text-sm font-semibold relative inline-flex items-center gap-1
                after:block after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-rose-800 after:transition-transform after:duration-300
                ${isTreatmentPage
                    ? "text-rose-800 after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
              >
                Specialities
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isServicesDropdownOpen && (

                <div className="absolute left-0 mt-2 w-72 rounded-lg bg-white shadow-xl border border-gray-200 py-2 z-50">

                  {treatments.map((item) => (

                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={closeAllMenus}
                      className={({ isActive }) =>
                        `block px-6 py-2 text-sm transition
                        ${isActive
                          ? "bg-rose-100 text-rose-800 font-semibold"
                          : "hover:bg-gray-100"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>

                  ))}

                </div>
              )}

            </div>

            <NavLink
              to="/news-paper-images"
              className={navLinkClass}
            >
              In News
            </NavLink>
            <NavLink
              to="/patients-guide"
              className={navLinkClass}
            >
              Patients Guide
            </NavLink>

            <NavLink
              to="/gallery"
              className={navLinkClass}
            >
              Gallery
            </NavLink>
            <a
              href="https://www.youtube.com/@DrVandanaBansal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-rose-700 text-white px-2 py-2 rounded-md font-semibold"
            >
              Youtube Channel
            </a>

          </div>

          {/* APPOINTMENT */}
          <NavLink
            to="/book-appointment"
            className={({ isActive }) =>
              `hidden md:block px-3 py-2 text-sm rounded-xl transition
              ${isActive
                ? "bg-rose-900 text-white"
                : "bg-pink-800 text-white hover:bg-pink-900"
              }`
            }
          >
            Make an Appointment
          </NavLink>

          {/* MOBILE MENU BUTTON */}

          <button
            className="md:hidden text-black"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <CiMenuFries className="h-6 w-6" />
            )}
          </button>

        </div>
        {/* ================= MOBILE MENU ================= */}

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white p-4 border-t">

            <div className="flex flex-col space-y-1">

              <NavLink
                to="/"
                end
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `py-3 border-b font-semibold ${isActive
                    ? "text-rose-800"
                    : "text-black"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `py-3 border-b font-semibold ${isActive
                    ? "text-rose-800"
                    : "text-black"
                  }`
                }
              >
                About Dr. Vandana
              </NavLink>

              {/* MOBILE SPECIALITIES */}
              <button
                onClick={toggleServicesDropdown}
                className={`flex justify-between items-center py-3 border-b font-semibold ${isTreatmentPage
                    ? "text-rose-800"
                    : "text-black"
                  }`}
              >
                <span>Specialities</span>

                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform duration-300 ${isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isServicesDropdownOpen && (

                <div className="ml-3 border-l pl-3">

                  <button
                    onClick={() => toggleNestedDropdown("treatment")}
                    className="flex justify-between items-center w-full py-2 font-semibold"
                  >
                    Treatment

                    <PlusIcon
                      className={`h-5 w-5 transition-transform ${isNestedDropdownOpen.treatment
                          ? "rotate-45"
                          : ""
                        }`}
                    />
                  </button>

                  {isNestedDropdownOpen.treatment && (

                    <div className="ml-3">

                      {treatments.map((item) => (

                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={closeAllMenus}
                          className={({ isActive }) =>
                            `block py-2 text-sm ${isActive
                              ? "text-rose-800 font-semibold"
                              : "text-gray-700"
                            }`
                          }
                        >
                          {item.name}
                        </NavLink>

                      ))}

                    </div>
                  )}
                </div>

              )}

              <NavLink
                to="/patients-guide"
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `py-3 border-b font-semibold ${isActive
                    ? "text-rose-800"
                    : "text-black"
                  }`
                }
              >
                Patients Guide
              </NavLink>

              <NavLink
                to="/achievments"
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `py-3 border-b font-semibold ${isActive
                    ? "text-rose-800"
                    : "text-black"
                  }`
                }
              >
                Success Rate
              </NavLink>

              <NavLink
                to="/ivf-team"
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `py-3 border-b font-semibold ${isActive
                    ? "text-rose-800"
                    : "text-black"
                  }`
                }
              >
                Our IVF Team
              </NavLink>

              <NavLink
                to="/news-paper-images"
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `py-3 border-b font-semibold ${isActive
                    ? "text-rose-800"
                    : "text-black"
                  }`
                }
              >
                In News
              </NavLink>

              <NavLink
                to="/gallery"
                onClick={closeAllMenus}
                className={({ isActive }) =>
                  `py-3 border-b font-semibold ${isActive
                    ? "text-rose-800"
                    : "text-black"
                  }`
                }
              >
                Gallery
              </NavLink>

              <NavLink
                to="/book-appointment"
                onClick={closeAllMenus}
                className="mt-4 text-center bg-pink-800 text-white py-3 rounded-lg font-semibold hover:bg-pink-900 transition"
              >
                Make an Appointment
              </NavLink>
            </div>
          </div>
        )}

      </nav>

    </>
  );
}

export default NavigationB;