import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../Style/Style.css";
import ATTBClogo1 from "../assets/ATTBClogo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function NavigationB() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-wrap text-center justify-between py-1 px-3 bg-red-500">
        <div>
          <span className="pr-8 text-xs">
            Phone: 6390103002 | Email: arpitivf@gmail.com
          </span>
          {/* <span className='text-xs'>Email: arpitivf@gmail.com</span> */}
        </div>
        <div className="flex ">
          <a
            href="https://www.instagram.com/drvandanabansal_gynaecologist/"
            target="_blank"
          >
            <FaInstagram className="mx-2 text-white text-md" />
          </a>
          <a href="https://www.facebook.com/vandana.bansal.33" target="_blank">
            <FaFacebook className="mx-2 text-white text-md" />
          </a>
          <a href="https://www.youtube.com/@DrVandanaBansal" target="_blank">
            <FaYoutube className="mx-2 text-white text-md" />
          </a>
          <a
            href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/"
            target="_blank"
          >
            <FaLinkedinIn className="mx-2 text-white text-md" />
          </a>
        </div>
      </div>
      <nav
        className={`themess bg-lack md:text-white bg-rose-400 text-black fixd shadow-2xl w-full z-30 flex items-center justify-between flex-wrap p-1 md:p-2 md:bg-white bg-opacity-70 md:bg-opacity50 ${
          isOpen ? " shadow-xl" : ""
        }`}
      >
        <div className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
          <span className=" font-bol text-white md:font-thin text-2xl md:text-2xl text-roe-400 md:text-white  md:[text-shadow:_0_2px_0_rgb(0_0_0_/_30%)]">
            <img
              src={ATTBClogo1}
              class="d-block shadow-md shadow-white w-14"
              alt="..."
            />
          </span>
        </div>
        <div
          className={`block lg:hidden bg-opacity-30 ${
            isOpen ? "bg-rose-400" : "bg-rose-400 rounded-md"
          }`}
        >
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
          className={`w-full block text-center p-2 flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block bg-rose-100 rounded-xl" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow p-1">
            <a
              href="/"
              className={`block mt-0 lg:inline-block lg:mt-0 hover:text-red-600 text-black md:text-white mr-4 ${
                isOpen ? "py-2" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0 mr-4 ${
                isOpen ? "py-2" : ""
              }`}
            >
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Our Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Our Founders
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Somet
                    </a>
                  </li>
                </ul>
              </div>
            </a>
            <a
              href="achievements"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${
                isOpen ? "py-2" : ""
              }`}
            >
              <div class="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="dropdown">
                        <button
                          class="btn btn-secondary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Treatments
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Test Evaluation
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Other Services
                    </a>
                  </li>
                </ul>
              </div>
            </a>
            <a
              href="achievements"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${
                isOpen ? "py-2" : ""
              }`}
            >
              Facilities
            </a>
            <a
              href="achievements"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${
                isOpen ? "py-2" : ""
              }`}
            >
              Our Success Rate
            </a>
            <a
              href="achievements"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${
                isOpen ? "py-2" : ""
              }`}
            >
              Our IVF Team
            </a>
            <a
              href="achievements"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${
                isOpen ? "py-2" : ""
              }`}
            >
              Patient Guide
            </a>
            <a
              href="#contact"
              className={`block mt-0 lg:inline-block text-black md:text-white lg:mt-0  mr-4 ${
                isOpen ? "py-2" : ""
              }`}
            >
              Contact
            </a>

            {/* <Menu as="div" className="relative inline-block text-left">
                        <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold border-sm border-pink-800 ring-1 ring-inset ring-white hover:bg-gray-50 md:text-white text-black">
                        Options
                        <ChevronDownIcon aria-hidden="true" className=" -mr-1 h-5 w-5 text-white" />
                        </MenuButton>
                        </div>
                        
                        <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                        <div className="py-1">
                        <MenuItem>
                        <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                        Account settings
                        </a>
                        </MenuItem>
                        <MenuItem>
                        <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                        Support
                        </a>
                        </MenuItem>
                        <MenuItem>
                        <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                        License
                        </a>
                        </MenuItem>
                        </div>
                        </MenuItems>
                        </Menu> */}
          </div>

          <button className="rounded-3xl inline-flex text-xs items-center bg-rose-600 border-0 py-2 px-4 text-white">
            <a href="bookappointment">Book Appointment</a>
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavigationB;
