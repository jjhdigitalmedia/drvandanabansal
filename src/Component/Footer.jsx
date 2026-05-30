// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoLocationOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa6";
// const Footer = () => {
//   return (
//     <>
//       <footer className="text-gray-600 bg-pink-800 body-font">
//         <div className="container flex flex-wrap px-5 py-12 mx-auto ">

//           <div className="lg:w-1/4 md:w-1/2 w-full md:px-4">
//             <h2 className="text-white font-asap font-bold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
//               Treatment
//             </h2>
//             <ul class="text-gray-200  flex flex-col mt-2 space-y-2 text-base">
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/iui">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span className="">IUI</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/ivf-et">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span>IVF-ET</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/icsi">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span>ICSI</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/laser-assisted">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span>Laser Assisted Hatching</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/imsi">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span> IMSI</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/embryo-donation">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span>Embryo Donation (ED)</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/oocyte-donation">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span>Oocyte Donation (OD)</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/blastocyst-transfer">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span>Blastocyst Transfer</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/semen-cryopreservation">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span>Semen Cryopreservation</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/oocyte-cryopreservation">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span> Oocyte Cryopreservation</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/embryo-bank">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span>Embryo Banking</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           <div className="lg:w-1/6 md:w-1/3 w-full md:px-4">
//             <h2 className="text-white font-asap font-bold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
//               Important Links
//             </h2>
//             <ul class="text-gray-200 flex flex-col mt-2 space-y-2 text-base">
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
//                   <span>Home</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/patients-guide">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Patients Guide</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/ivf-team">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Our IVF Team</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/achievements">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Our Success Rates</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/gallery">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Gallery</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="lg:w-1/3 md:w-1/2 w-full md:px-1">
//             <h2 className="text-white font-asap font-bold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
//               Contact Info
//             </h2>
//             <nav className="list-none mb-10 ">
//             </nav>
//             <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' className="my-4 text-white" target="_blank">
//               <IoLocationOutline className="inline text-white text-xl" />162 Bai Ka Bagh, Lowther Road, Pincode - 211003, Prayagraj
//               (Allahabad) UTTAR PRADESH, INDIA
//             </a>
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0597529168485!2d81.84401430943906!3d25.43626577746421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb4375248d9b%3A0x385a6afccbc59834!2sDr.%20Vandana%20Bansal%20-%20Best%7CGynaecologist%20Doctors%7CHigh%20Risk%20Pregnancy%20Doctor%7CLaproscopy%20Doctor%7CInfertility%20Doctor%20in%20Allahabad!5e0!3m2!1sen!2sin!4v1720863709269!5m2!1sen!2sin" style={{ border: 0, width: '100%', marginTop: 10, borderRadius: 17 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//             <button className="bg-white text-black py-2 px-6 mt-4 rounded-md">
//               <Link to="/book-appointment">
//                 Book Appointment
//               </Link>
//             </button>
//           </div>

//           <div className="lg:w-full md:w-1/2 w-full md:pr-16">
//             <h1 className="text-white font-bold text-2xl md:text-3xl mt-10 mb-1 font-asap relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Dr Vandana Bansal</h1>
//             <p className="text-white text-justify">Dr. Vandana Bansal is a trusted gynecologist, IVF specialist, and dedicated to women's health. With 38+ years of experience and a compassionate approach, she offers advanced care in infertility, laparoscopy, menopause, and high-risk pregnancies. Patients value her for ethical practice, clear communication, and personalized treatment plans. Book your appointment today for expert care and guidance on your reproductive health journey.</p>
//             <div className="flex m-auto my-4">
//               <a
//                 href="https://www.instagram.com/dr.vandanabansal"
//                 target="_blank"
//               >
//                 <FaInstagram className="mx-2 text-white text-xl" />
//               </a>
//               <a
//                 href="https://www.facebook.com/vandana.bansal.33"
//                 target="_blank"
//               >
//                 <FaFacebook className="mx-2 text-white text-xl" />
//               </a>
//               <a
//                 href="https://www.youtube.com/@DrVandanaBansal"
//                 target="_blank"
//               >
//                 <FaYoutube className="mx-2 text-white text-xl" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/"
//                 target="_blank"
//               >
//                 <FaLinkedinIn className="mx-2 text-white text-xl" />
//               </a>
//             </div>
//           </div>

//         </div>
//         <div className="bg-zinc-50 border-t-2">
//           <div className="container px-5 w-fit py-6 mx-auto 
//             sm:flex-row flex-col">
//             <p className="text-sm text-gray-700 sm:ml-6 sm:mt-0">
//               © 2026 Dr Vandana Bansal | All rights reserved
//             </p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import DrVandanaLogo from '../assets/DrVandanaLogo.png'
import DrVandanaLogoWhite from '../assets/DrVandanaLogoWhite.png'

const Footer = () => {
  return (
    <footer className="bg-pink-800 text-white pt-16 pb-6">
      <div className="max-wxl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 border-b border-gray-700 pb-10">

          {/* ABOUT */}
          <div>
            {/* <h2 className="text-lg font-bold uppercase mb-5">
              DR VANDANA BANSAL
            </h2> */}
             <img
              src={DrVandanaLogoWhite}
              alt="logo"
              className="h-20 w-full"
            />
            
            {/* <Link to='/' className="flex items-center flex-shrink-0 ml-1 md:ml-6 lg:ml-10 lg:mr-32">
              <img src={DrVandanaLogo} className="w-52 md:w-96" alt="Dr Vandana Logo" />
            </Link> */}
            <p className="text-gray-300 leading-7 text-sm">
              Dr. Vandana Bansal is one of Prayagraj’s trusted IVF &
              Gynecology specialists with 38+ years of experience in
              infertility, high-risk pregnancy, laparoscopy, and women’s
              healthcare. We provide ethical, advanced, and compassionate
              fertility treatment with personalized care.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <p className="text-gray-300">
                Email:
                <a
                  href="mailto:info@drvandanabansal.com"
                  className="text-pink-400 ml-1 hover:text-pink-300"
                >
                  bansal.drvandana@gmail.com
                </a>
              </p>

              <p className="text-gray-300">
                For appointments & support,
                <Link
                  to="/contact"
                  className="underline ml-1 hover:text-pink-400"
                >
                  click here
                </Link>
              </p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-lg font-bold uppercase mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-pink-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-pink-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments/ivf-et"
                  className="hover:text-pink-600 transition"
                >
                  IVF Treatment
                </Link>
              </li>

              <li>
                <Link
                  to="/patients-guide"
                  className="hover:text-pink-600 transition"
                >
                  Patient Guide
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-pink-600 transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-pink-600 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* QUICK LINKS */}
          <div>
            <h2 className="text-lg font-bold uppercase mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-pink-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-pink-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/treatments/ivf-et"
                  className="hover:text-pink-600 transition"
                >
                  IVF Treatment
                </Link>
              </li>

              <li>
                <Link
                  to="/patients-guide"
                  className="hover:text-pink-600 transition"
                >
                  Patient Guide
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-pink-600 transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-pink-600 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* TREATMENTS */}
          <div>
            <h2 className="text-lg font-bold uppercase mb-5">
              Treatments
            </h2>

            <div className="grid grid-cols-1 gap-y-3 text-sm text-gray-300">
              <Link
                to="/treatments/iui"
                className="hover:text-pink-400"
              >
                IUI
              </Link>

              <Link
                to="/treatments/ivf-et"
                className="hover:text-pink-400"
              >
                IVF-ET
              </Link>

              <Link
                to="/treatments/icsi"
                className="hover:text-pink-400"
              >
                ICSI
              </Link>

              <Link
                to="/treatments/imsi"
                className="hover:text-pink-400"
              >
                IMSI
              </Link>

              <Link
                to="/treatments/blastocyst-transfer"
                className="hover:text-pink-400"
              >
                Blastocyst
              </Link>

              <Link
                to="/treatments/laser-assisted"
                className="hover:text-pink-400"
              >
                Laser Hatching
              </Link>

              <Link
                to="/treatments/oocyte-donation"
                className="hover:text-pink-400"
              >
                Oocyte Donation
              </Link>

              <Link
                to="/treatments/embryo-donation"
                className="hover:text-pink-400"
              >
                Embryo Donation
              </Link>

              <Link
                to="/treatments/semen-cryopreservation"
                className="hover:text-pink-400"
              >
                Semen Freezing
              </Link>

              <Link
                to="/treatments/oocyte-cryopreservation"
                className="hover:text-pink-400"
              >
                Egg Freezing
              </Link>
            </div>
          </div>

          {/* MAP + SOCIAL */}
          <div className="flex flex-col items-center lg:items-end">

            {/* INDIA MAP IMAGE */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0597529168485!2d81.84401430943906!3d25.43626577746421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb4375248d9b%3A0x385a6afccbc59834!2sDr.%20Vandana%20Bansal%20-%20Best%7CGynaecologist%20Doctors%7CHigh%20Risk%20Pregnancy%20Doctor%7CLaproscopy%20Doctor%7CInfertility%20Doctor%20in%20Allahabad!5e0!3m2!1sen!2sin!4v1720863709269!5m2!1sen!2sin" style={{ border: 0, width: '100%', marginTop: 10, borderRadius: 17 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:border-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 text-sm text-gray-400">

          {/* LOGO */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            {/* <img
              src={DrVandanaLogoWhite}
              alt="logo"
              className="h-10"
            /> */}

            <span className="font-semibold text-white text-lg">
              Dr Vandana Bansal
            </span>
          </div>

          {/* TERMS */}
          <div className="flex gap-5">
            <Link
              to="/terms-and-condition"
              className="hover:text-pink-400"
            >
              Terms of Use
            </Link>

            <Link
              to="/privacy-policy"
              className="hover:text-pink-400"
            >
              Privacy Policy
            </Link>
          </div>

          {/* COPYRIGHT */}
          <p className="mt-4 md:mt-0">
            ©2026 Dr Vandana Bansal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;