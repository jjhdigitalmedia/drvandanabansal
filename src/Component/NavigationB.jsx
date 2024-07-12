import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'
import '../Style/Style.css'

function NavigationB() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(false)
    console.log(theme)
    return (
        <nav className={`themess bg-lack md:text-white bg-rose-100 text-black fixed shadow-md w-full z-30 flex items-center justify-between flex-wrap p-2 md:p-2 md:bg-rose-400 lg:bg-opacity-30 ${isOpen ? " shadow-xl" : ""}`}>

            <div className="flex items-center flex-shrink-0 ml-6 lg:ml-10 lg:mr-32">
                <span className=' font-bol font-thin text-2xl md:text-3xl text-rose-400 md:text-white md:[text-shadow:_0_2px_0_rgb(0_0_0_/_30%)]'>Best Gynaecologist</span>
            </div>
            <div className={`block lg:hidden ${isOpen ? "bg-rose-100" : "bg-rose-100 rounded-md"}`}>
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
                className={`w-full block text-center p-2 flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block bg-rose-100 rounded-xl" : "hidden"}`}
            >
                <div className="text-sm lg:flex-grow p-1">
                    <a href="/" className={`block mt-0 lg:inline-block lg:mt-0 md:text-black text-white mr-4 ${isOpen ? "py-2" : ""}`}>
                        Home
                    </a>
                    <a href="#about" className={`block mt-0 lg:inline-block md:text-black text-white lg:mt-0 text-white-200 mr-4 ${isOpen ? "py-2" : ""}`}>
                        About
                    </a>
                    <a href="achievements" className={`block mt-0 lg:inline-block md:text-black text-white lg:mt-0 text-white-200 mr-4 ${isOpen ? "py-2" : ""}`}>
                        Achievements
                    </a>
                    <a href="#contact" className={`block mt-0 lg:inline-block md:text-black text-white lg:mt-0 text-white-200 mr-4 ${isOpen ? "py-2" : ""}`}>
                        Contact
                    </a>

                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold border-sm border-pink-800 ring-1 ring-inset ring-white hover:bg-gray-50 text-white">
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
                    </Menu>
                </div>
                {/* <div className="md:text-right">
                   
                    <p className='font-bold text-gray-200'>UPMCI Registration No: <span className="text-rose-500">24503</span>  </p>
                </div> */}
                {/* <div> */}
                <button className="rounded-lg inline-flex items-center bg-rose-700 border-0 py-2 px-4 text-white">
                    <a href="bookappointment"></a>
                    Book Appointment
                </button>
                {/* </div> */}
            </div>
        </nav>
    );
}
export default NavigationB;