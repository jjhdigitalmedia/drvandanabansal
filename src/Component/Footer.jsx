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
    <footer className="bg-[#F7F7F] text-[#3A4A63] pt-24">
  <div className="max-w-full lg:px-20 mx-auto px-6">

    {/* Main Footer */}
    <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-12 pb-16">

      {/* About */}
      <div>
        <img
          src={DrVandanaLogo}
          alt="Dr Vandana Bansal"
          className="h-16 mb-6"
        />

        <p className="text-gray-500 leading-8 text-base">
          Advanced IVF, fertility and women's healthcare with over
          38 years of experience. Providing ethical and personalized
          treatment for every patient.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8">

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-pink-800 hover:text-white duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-pink-800 hover:text-white duration-300"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-pink-800 hover:text-white duration-300"
          >
            <FaXTwitter />
          </a>

        </div>

        {/* CTA Button */}
        <Link
          to="/book-appointment"
          className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-pink-800 text-white font-medium hover:scale-105 duration-300 shadow-lg"
        >
          Book Appointment →
        </Link>
      </div>

      {/* Treatments */}
      <div>
        <h3 className="uppercase text-xs tracking-[3px] text-gray-400 mb-6">
          Treatments
        </h3>

        <ul className="space-y-4">
          <li><Link to="/treatments/iui">IUI</Link></li>
          <li><Link to="/treatments/ivf-et">IVF Treatment</Link></li>
          <li><Link to="/treatments/icsi">ICSI</Link></li>
          <li><Link to="/treatments/imsi">IMSI</Link></li>
          <li><Link to="/treatments/blastocyst-transfer">Blastocyst</Link></li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="uppercase text-xs tracking-[3px] text-gray-400 mb-6">
          Services
        </h3>

        <ul className="space-y-4">
          <li>High Risk Pregnancy</li>
          <li>Infertility Treatment</li>
          <li>Laparoscopy</li>
          <li>Gynecology</li>
          <li>Menopause Care</li>
        </ul>
      </div>

      {/* Explore */}
      <div>
        <h3 className="uppercase text-xs tracking-[3px] text-gray-400 mb-6">
          Explore
        </h3>

        <ul className="space-y-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="uppercase text-xs tracking-[3px] text-gray-400 mb-6">
          Contact
        </h3>

        <div className="space-y-5">

          <a
            href="tel:+919999999999"
            className="block hover:text-pink-600"
          >
            +91 6390103002
          </a>

          <a
            href="mailto:bansal.drvandana@gmail.com"
            className="block hover:text-pink-600 break-all"
          >
            bansal.drvandana@gmail.com
          </a>

          <p className="leading-7 text-gray-500">
            162 Bai Ka Bagh,
            Lowther Road,
            Prayagraj,
            Uttar Pradesh - 211003
          </p>

        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t px-10 border-pink-800 opacity-50"></div>

    {/* Bottom Footer */}
    <div className="flex px-10 flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-500">

      <p>
        © 2026 Dr Vandana Bansal. All rights reserved.
      </p>

      <div className="flex gap-8 mt-4 md:mt-0">
        <Link to="/privacy-policy">
          Privacy
        </Link>

        <Link to="/terms-and-condition">
          Terms
        </Link>

        <Link to="/contact">
          Contact
        </Link>
      </div>

    </div>

  </div>
</footer>
  );
};

export default Footer;