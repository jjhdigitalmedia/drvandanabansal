import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <hr className="text-gray-300" />
        <div className="container flex flex-wrap px-5 py-12 mx-auto ">
          {/* <div className="flex flex-wrap md:text-left order-first"> */}

          <div className="lg:w-1/4 md:w-1/2 w-full md:pr-16">
            <h1 className="font-bold text-2xl my-10">Arpi Test Tube Baby Centre</h1>
            <p>Arpit Test Tube Baby Centre is situasacrifice after creating thh falls once every 12 years, is always held in Prayagraj. An entire sea of humanity descends upon the riverside town during this time. </p>
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
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full md:px-4">
            <h2 className="font-bold text-2xl my-10">
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
          <div className="lg:w-1/4 md:w-1/2 w-full md:px-4">
            <h2 className="font-bold text-2xl my-10">
              Important Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to='/' className="text-black hover:text-red-600">Home</Link>
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
          <div className="lg:w-1/4 md:w-1/2 w-full md:px-1">
            <h2 className="font-bold text-2xl my-10">
              Contact Info
            </h2>
            <nav className="list-none mb-10">
              <li>

               
              </li>
            </nav>
            <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' className="my-4 text-black" target="_blank">
              <IoLocationOutline className="inline text-red-700 text-xl" />162 Bai Ka Bagh, Lowther Road, Pincode - 211003, Prayagraj
              (Allahabad) UTTAR PRADESH, INDIA
            </a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0597529168485!2d81.84401430943906!3d25.43626577746421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb4375248d9b%3A0x385a6afccbc59834!2sDr.%20Vandana%20Bansal%20-%20Best%7CGynaecologist%20Doctors%7CHigh%20Risk%20Pregnancy%20Doctor%7CLaproscopy%20Doctor%7CInfertility%20Doctor%20in%20Allahabad!5e0!3m2!1sen!2sin!4v1720863709269!5m2!1sen!2sin" style={{ border: 0, width: '100%', marginTop: 10, borderRadius: 17 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <a href="bookappointment">
              <button className="bg-rose-700 text-white py-2 px-6 rounded-3xl">
                Book Appointment
              </button>
            </a>
          </div>


          {/* </div> */}
        </div>
        <div className="border-t-2">
          <div className="container px-5 w-fit py-6 mx-auto 
            sm:flex-row flex-col">
            {/* <a className="text-white flex title-font font-medium items-center md:justify-start justify-center">
              <span className="ml-3 text-xl">Best IVF Centre in Prayagraj</span>
            </a> */}
            <p className="text-sm text-gray-700 sm:ml-6 sm:mt-0">
              © 2024 All rights reserved by Arpit Test Tube Baby Centre
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
