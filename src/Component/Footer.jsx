import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-rd-50">
        <hr className="text-gray-300" />
        <div className="container px-5 py-16 mx-auto ">
          <div className="flex flex-wrap md:text-left  order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                Treatment
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-black hover:text-white">
                    IUI
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-white">
                    ICSI
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-white">
                     IMSI
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-white">
                    IVF-ET
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-white">
                    IVM
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-white">
                    Embryo Monitoring
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-white">
                    Sonography
                  </a>
                </li>
                <li>
                  <a className="text-black hover:text-white">
                    Laser Assisted Hatching
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                Important Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href='/' className="text-black hover:text-red-600">Home</a>
                </li>
                <li>
                  <a className="text-black hover:text-red-600">Patients Guide</a>
                </li>
                <li>
                  <a className="text-black hover:text-red-600">
                    Facilities
                  </a>
                </li>
                <li>
                  <a className="text-black hover:tewhite">Our IVF Team</a>
                </li>
                <li>
                  <a className="text-black hover:tewhite">Our Success Rate</a>
                </li>
                <li>
                  <a className="text-black hover:tewhite">Gallery</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-1">
              <h2 className="title-font font-medium text-black tracking-widest text-lg mb-3">
                Contact Info
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' className="my-4 text-black" target="_blank">
                  <IoLocationOutline className="inline text-red-700 text-xl" />162 Bai Ka Bagh, Lowther Road, Pincode - 211003, Prayagraj
                    (Allahabad) UTTAR PRADESH, INDIA
                  </a>
                  <div className="flex m-auto my-4">
                    <a
                      href="https://www.instagram.com/drvandanabansal_gynaecologist/"
                      target="_blank"
                    >
                      <FaInstagram className="mx-2 text-rose-700 text-xl" />
                    </a>
                    <a
                      href="https://www.facebook.com/vandana.bansal.33"
                      target="_blank"
                    >
                      <FaFacebook className="mx-2 text-rose-700 text-xl" />
                    </a>
                    <a
                      href="https://www.youtube.com/@DrVandanaBansal"
                      target="_blank"
                    >
                      <FaYoutube className="mx-2 text-rose-700 text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/"
                      target="_blank"
                    >
                      <FaLinkedinIn className="mx-2 text-rose-700 text-xl" />
                    </a>
                  </div>
                </li>
              </nav>
            </div>
            <div className="align-middle py-12 m-auto">
              <a href="bookappointment">
                <button className="bg-rose-700  text-white py-2 px-6 rounded-3xl">
                  Book Appointment
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 border-t-2">
          <div className="container px-5 w-fit py-6 mx-auto 
            sm:flex-row flex-col">
            {/* <a className="text-white flex title-font font-medium items-center md:justify-start justify-center">
              <span className="ml-3 text-xl">Best IVF Centre in Prayagraj</span>
            </a> */}
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0">
              © 2024 Dr Vandana Bansal All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
