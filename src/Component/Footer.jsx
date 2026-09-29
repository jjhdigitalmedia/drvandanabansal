// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import DrVandanaLogo from '../assets/DrVandanaLogo.png'


// const Footer = () => {
//   const socialLinks = [
//     { Icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
//     { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
//     { Icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
//     { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
//   ];
//   return (
//     <footer className="bg-[#F7F7F] text-[#3A4A63] pt-24">
//       <div className="max-w-full lg:px-10 mx-auto px-6">

//         <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 pb-16">

//           <div>
//             <img
//               src={DrVandanaLogo}
//               alt="Dr Vandana Bansal"
//               className="h-16 mb-2"
//             />

//             <p className="text-gray-500 leading-8 text-base">
//               Advanced IVF, fertility and women's healthcare with over
//               38+ years of experience. Providing ethical and personalized
//               treatment for every patient.
//             </p>

//             <Link
//               to="/book-appointment"
//               className="inline-flex items-center gap-3 mt-8 px-8 py-3 rounded-full bg-pink-800 text-white font-medium hover:scale-105 duration-300 shadow-lg"
//             >
//               Book Appointment →
//             </Link>
//           </div>

//           {/* Treatments */}
//           <div>
//             <h3 className="uppercase text-xs tracking-[3px] text-gray-400 mb-6">
//               Treatments
//             </h3>

//             <ul className="space-y-4">
//               <li><Link to="/treatments/iui">IUI</Link></li>
//               <li><Link to="/treatments/ivf-et">IVF Treatment</Link></li>
//               <li><Link to="/treatments/icsi">ICSI</Link></li>
//               <li><Link to="/treatments/imsi">IMSI</Link></li>
//               <li><Link to="/treatments/blastocyst-transfer">Blastocyst</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="uppercase text-xs tracking-[3px] text-gray-400 mb-6">
//               Services
//             </h3>

//             <ul className="space-y-4">
//               <li>High Risk Pregnancy</li>
//               <li>Infertility Treatment</li>
//               <li>Laparoscopy</li>
//               <li>Gynecology</li>
//               <li>Menopause Care</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="uppercase text-xs tracking-[3px] text-gray-400 mb-6">
//               Explore
//             </h3>

//             <ul className="space-y-4">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About</Link></li>
//               <li><Link to="/gallery">Gallery</Link></li>
//               <li><Link to="/blog">Blog</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="uppercase text-xs tracking-[3px] text-gray-400 mb-6">
//               Contact
//             </h3>

//             <div className="space-y-5">

//               <a
//                 href="tel:+916390103002"
//                 className="block hover:text-pink-600"
//               >
//                 +91 6390103002
//               </a>
//               <a
//                 href="tel:+916390103004"
//                 className="block hover:text-pink-600"
//               >
//                 +91 6390103004
//               </a>

//               <a
//                 href="mailto:bansal.drvandana@gmail.com"
//                 className="block hover:text-pink-600 break-all"
//               >
//                 bansal.drvandana@gmail.com
//               </a>

//               <p className="leading-7 text-gray-500">
//                 162 Bai Ka Bagh,
//                 Lowther Road,
//                 Prayagraj,
//                 Uttar Pradesh - 211003
//               </p>

//             </div>
//           </div>
//         </div>

//         <div className="border-t px-10 border-pink-800 opacity-50"></div>

//         <div className="flex px-10 flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-500">

//           <p>
//             © 2026 Dr Vandana Bansal. All rights reserved.
//           </p>

//           <div className="flex gap-8 mt-4 md:mt-0">
//             <Link to="/privacy-policy">
//               Privacy
//             </Link>

//             <Link to="/terms-and-condition">
//               Terms
//             </Link>

//             <Link to="/contact">
//               Contact
//             </Link>
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  ChevronRight,
} from "lucide-react";

import { treatmentsData } from "../Pages/Treatements";
import DrVandanaLogo from "../assets/DrVandanaLogo.png";

const Footer = ({ logoSrc }) => {
  const currentYear = new Date().getFullYear();

  // Show all categories in footer
  const specialities = treatmentsData || [];

  return (
    <footer className="relative overflow-hidden bg-[#f8f7f7] text-gray-700">

      {/* =========================================================
          TOP DECORATIVE ELEMENT
      ========================================================= */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-pink-800/[0.035] blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-pink-800/[0.03] blur-3xl" />

      {/* =========================================================
          APPOINTMENT CTA
      ========================================================= */}
      <div className="relative border-b border-gray-200/80">
        <div className="mx-auto max-w-[1920px] px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-2xl bg-pink-800 px-6 py-8 shadow-[0_15px_45px_rgba(157,23,77,0.18)] sm:px-8 lg:px-10 lg:py-9">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-10 -top-20 h-56 w-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-2 -top-12 h-40 w-40 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-white/[0.04]" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              {/* CTA CONTENT */}
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-7 bg-white/60" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
                    Women's Healthcare
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  Your Health. Your Journey.
                  <br className="hidden sm:block" />
                  Your Care Matters.
                </h2>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">
                  Get personalised care and expert guidance for your
                  reproductive, pregnancy and women's health needs.
                </p>
              </div>

              {/* CTA BUTTON */}
              <Link
                to="/book-your-appointment"
                className="group flex w-full shrink-0 items-center justify-center gap-2.5 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-pink-800 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
              >
                <CalendarDays size={18} />

                <span>Make an Appointment</span>

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div className="relative mx-auto max-w-[1920px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16 xl:px-16">

        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.75fr_1fr_1.15fr] lg:gap-10 xl:gap-16">

          {/* =====================================================
              COLUMN 1 — BRAND
          ===================================================== */}
          <div>
            {/* LOGO */}
            <Link
              to="/"
              className="inline-flex items-center"
            >
              {/* {logoSrc ? (
                <img
                  src={logoSrc}
                  alt="Dr. Vandana Bansal"
                  className="h-[68px] w-auto object-contain"
                />
              ) : (
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-pink-800 text-pink-800">
                    <span className="text-xl font-bold">VB</span>
                  </div>

                  <div className="leading-none">
                    <div className="font-serif text-xl font-bold tracking-tight text-pink-800">
                      DR. VANDANA BANSAL
                    </div>

                    <div className="mt-1 text-[8px] tracking-[0.22em] text-gray-500">
                      GYNAECOLOGIST & IVF SPECIALIST
                    </div>
                  </div>
                </div>
              )} */}
              <img
                  src={DrVandanaLogo}
                  alt="Dr. Vandana Bansal"
                  className="h-[85px] w-auto rounded-xl object-contain"
                />
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[390px] text-[13px] leading-6 text-gray-500">
              Dr. Vandana Bansal is a senior Gynaecologist, Infertility &
              IVF Specialist and Advanced Laparoscopic & Hysteroscopic
              Surgeon providing comprehensive women's healthcare in
              Prayagraj.
            </p>

            {/* HOSPITAL */}
            <div className="mt-6 space-y-3">

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-800">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold text-gray-800">
                    Jeevan Jyoti Hospital
                  </p>

                  <p className="mt-0.5 text-[12px] leading-5 text-gray-500">
                    Prayagraj - 211003, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-800">
                  <Clock3 size={16} />
                </div>

                <div>
                  <p className="text-[12px] font-semibold text-gray-800">
                    Consultation & Appointments
                  </p>

                  <p className="mt-0.5 text-[12px] leading-5 text-gray-500">
                    Please call for appointment availability
                  </p>
                </div>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-7 flex items-center gap-2.5">

              <a
                href="https://www.instagram.com/dr.vandanabansal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 transition-all duration-300 hover:border-pink-800 hover:bg-pink-800 hover:text-white"
              >
                <Instagram
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.facebook.com/vandana.bansal.33"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 transition-all duration-300 hover:border-pink-800 hover:bg-pink-800 hover:text-white"
              >
                <Facebook
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              <a
                href="https://www.youtube.com/@DrVandanaBansal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="group flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 transition-all duration-300 hover:border-pink-800 hover:bg-pink-800 hover:text-white"
              >
                <Youtube
                  size={16}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* =====================================================
              COLUMN 2 — QUICK LINKS
          ===================================================== */}
          <div>
            <FooterHeading title="Quick Links" />

            <div className="space-y-1.5">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Dr. Vandana" />
              <FooterLink to="/achievements" label="Achievements" />
              <FooterLink to="/news" label="In News" />
              <FooterLink to="/gallery" label="Gallery" />
              <FooterLink
                to="/patients-education"
                label="Patients Guide"
              />
              <FooterLink
                to="/book-your-appointment"
                label="Book an Appointment"
              />
            </div>
          </div>

          {/* =====================================================
              COLUMN 3 — SPECIALITIES
          ===================================================== */}
          <div>
            <FooterHeading title="Specialities" />

            <div className="space-y-1.5">
              {specialities.map((category) => (
                <div key={category.key}>
                  <div className="group flex items-start gap-2 py-1.5">
                    <ChevronRight
                      size={14}
                      className="mt-0.5 shrink-0 text-pink-800 transition-transform duration-200 group-hover:translate-x-1"
                    />

                    <span className="text-[13px] leading-5 text-gray-500 transition-colors duration-200 group-hover:text-pink-800">
                      {category.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              COLUMN 4 — CONTACT
          ===================================================== */}
          <div>
            <FooterHeading title="Contact Us" />

            <div className="space-y-4">

              {/* PHONE 1 */}
              <a
                href="tel:+916390103002"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-pink-800 transition-all duration-300 group-hover:bg-pink-800 group-hover:text-white">
                  <Phone size={16} />
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Call Us
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-gray-700 transition-colors group-hover:text-pink-800">
                    +91 6390103002
                  </p>
                </div>
              </a>

              {/* PHONE 2 */}
              <a
                href="tel:+916390103004"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-pink-800 transition-all duration-300 group-hover:bg-pink-800 group-hover:text-white">
                  <Phone size={16} />
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Appointment Line
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-gray-700 transition-colors group-hover:text-pink-800">
                    +91 6390103004
                  </p>
                </div>
              </a>

              {/* PHONE 3 */}
              <a
                href="tel:+919151037784"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-pink-800 transition-all duration-300 group-hover:bg-pink-800 group-hover:text-white">
                  <Phone size={16} />
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Contact
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-gray-700 transition-colors group-hover:text-pink-800">
                    +91 9151037784
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@drvandanabansal.in"
                className="group flex items-start gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-pink-800 transition-all duration-300 group-hover:bg-pink-800 group-hover:text-white">
                  <Mail size={16} />
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                    Email
                  </p>

                  <p className="mt-0.5 break-all text-[13px] font-medium text-gray-700 transition-colors group-hover:text-pink-800">
                    info@drvandanabansal.in
                  </p>
                </div>
              </a>

            </div>

            {/* HOSPITAL BOX */}
            <div className="mt-7 rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-pink-800">
                Visit Us
              </p>

              <p className="mt-2 text-[13px] font-semibold text-gray-800">
                Jeevan Jyoti Hospital
              </p>

              <p className="mt-1 text-[12px] leading-5 text-gray-500">
                Prayagraj - 211003
                <br />
                Uttar Pradesh, India
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Jeevan+Jyoti+Hospital+Prayagraj"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-pink-800 transition-colors hover:text-pink-900"
              >
                Get Directions
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          LOWER FOOTER
      ========================================================= */}
      <div className="relative border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-[1920px] flex-col gap-3 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 xl:px-16">

          {/* COPYRIGHT */}
          <p className="text-center text-[11px] text-gray-400 md:text-left">
            © {currentYear} Dr. Vandana Bansal. All rights reserved.
          </p>

          {/* RIGHT LINKS */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
            <Link
              to="/privacy-policy"
              className="text-[11px] text-gray-400 transition-colors hover:text-pink-800"
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-gray-200" />

            <Link
              to="/terms-and-conditions"
              className="text-[11px] text-gray-400 transition-colors hover:text-pink-800"
            >
              Terms & Conditions
            </Link>

            <span className="h-3 w-px bg-gray-200" />

            <span className="text-[11px] text-gray-400">
              Designed with care
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* =============================================================
   FOOTER HEADING
============================================================= */
const FooterHeading = ({ title }) => {
  return (
    <div className="mb-5">
      <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-gray-900">
        {title}
      </h3>

      <div className="mt-2 flex items-center gap-1.5">
        <span className="h-[2px] w-7 rounded-full bg-pink-800" />
        <span className="h-[2px] w-2 rounded-full bg-pink-800/30" />
      </div>
    </div>
  );
};

/* =============================================================
   FOOTER LINK
============================================================= */
const FooterLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="group flex items-center gap-2 py-1.5 text-[13px] text-gray-500 transition-colors duration-200 hover:text-pink-800"
    >
      <ChevronRight
        size={13}
        className="shrink-0 text-gray-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-pink-800"
      />

      <span>{label}</span>
    </Link>
  );
};

export default Footer;
