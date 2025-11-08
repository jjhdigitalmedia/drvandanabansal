import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 bg-rose-800 body-font">
        {/* <hr className="text-gray-300" /> */}
        <div className="container flex flex-wrap px-5 py-12 mx-auto ">
          {/* <div className="flex flex-wrap md:text-left order-first"> */}

          <div className="lg:w-1/4 md:w-1/2 w-full md:px-4">
            <h2 className="text-white font-asap font-bold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Treatment
            </h2>
            <ul class="text-gray-200  flex flex-col mt-2 space-y-2 text-base">
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/iui">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <IoIosArrowForward className="inline" />
                  <span className="">IUI</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/ivf-et">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>IVF-ET</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/icsi">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>ICSI</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/laser-assisted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Laser Assisted Hatching</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/imsi">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span> IMSI</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/embryo-donation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Embryo Donation (ED)</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/oocyte-donation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Oocyte Donation (OD)</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/blastocyst-transfer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Blastocyst Transfer</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/semen-cryopreservation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Semen Cryopreservation</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/oocyte-cryopreservation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span> Oocyte Cryopreservation</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/embryo-bank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Embryo Banking</span>
                </Link>
              </li>
              {/* <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/treatments/mesa-microepididymal-sperm-aspiration">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>MESA (Microedpididymal Sperm Aspiration)</span>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="lg:w-1/6 md:w-1/3 w-full md:px-4">
            <h2 className="text-white font-asap font-bold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100 ">
              Test & Evaluation
            </h2>
            <ul class="text-gray-200 flex flex-col mt-2 space-y-2 text-base">
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/hormonal-analysis">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Hormonal Analysis</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/ai-semen-analysis">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>AI Assisted Semen Analysis</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/surgery-for-male-infertility">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Surgery for Male Infertility</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/prp-treatment">
                  <FaArrowRight />
                  <span>PRP Treatment of Endometrium & Ovary</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/test-evaluation/stemcell-therapy">
                  <FaArrowRight />
                  <span>Stem Cell Therapy</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/6 md:w-1/3 w-full md:px-4">
            <h2 className="text-white font-asap font-bold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Important Links
            </h2>
            <ul class="text-gray-200 flex flex-col mt-2 space-y-2 text-base">
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/patients-guide">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Patients Guide</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/ivf-team">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Our IVF Team</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/achievements">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Our Success Rates</span>
                </Link>
              </li>
              <li>
                <Link class="flex hover:text-white items-center hover:text-primary gap-1 hover:ml-1 duration-200" to="/gallery">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg><span>Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full md:px-1">
            <h2 className="text-white font-asap font-bold text-2xl mt-10 relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">
              Contact Info
            </h2>
            <nav className="list-none mb-10 ">
            </nav>
            <a href='https://www.google.com/maps/place/%F0%9D%97%94%F0%9D%97%BF%F0%9D%97%BD%F0%9D%97%B6%F0%9D%98%81+%F0%9D%97%A7%F0%9D%97%B2%F0%9D%98%80%F0%9D%98%81+%F0%9D%97%A7%F0%9D%98%82%F0%9D%97%AF%F0%9D%97%B2+%F0%9D%97%95%F0%9D%97%AE%F0%9D%97%AF%F0%9D%98%86+%F0%9D%97%96%F0%9D%97%B2%F0%9D%97%BB%F0%9D%98%81%F0%9D%97%BF%F0%9D%97%B2+-+Best+IVF+Centre+Allahabad%2F+Best+Test+Tube+Baby+Centre%2F+IVF+Centre+And+Hospital%2F+IVF+Specialist/@25.4362706,81.844079,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3985354ad3d262eb:0xab072cc57813c85!8m2!3d25.4362706!4d81.8466593!16s%2Fg%2F1tf9lnwq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' className="my-4 text-white" target="_blank">
              <IoLocationOutline className="inline text-white text-xl" />162 Bai Ka Bagh, Lowther Road, Pincode - 211003, Prayagraj
              (Allahabad) UTTAR PRADESH, INDIA
            </a>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0597529168485!2d81.84401430943906!3d25.43626577746421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb4375248d9b%3A0x385a6afccbc59834!2sDr.%20Vandana%20Bansal%20-%20Best%7CGynaecologist%20Doctors%7CHigh%20Risk%20Pregnancy%20Doctor%7CLaproscopy%20Doctor%7CInfertility%20Doctor%20in%20Allahabad!5e0!3m2!1sen!2sin!4v1720863709269!5m2!1sen!2sin" style={{ border: 0, width: '100%', marginTop: 10, borderRadius: 17 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <button className="bg-white text-black py-2 px-6 mt-4 rounded-md">
              <Link to="/book-appointment">
                Book Appointment
              </Link>
            </button>
          </div>

          <div className="lg:w-full md:w-1/2 w-full md:pr-16">
            <h1 className="text-white font-bold text-2xl md:text-3xl mt-10 mb-1 font-asap relative inline-block after:block after:h-[2px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100">Arpi Test Tube Baby Centre</h1>
            <p className="text-white text-justify">Arpit Test Tube Baby Centre is a trusted name in fertility and reproductive healthcare, known for delivering hope to countless couples through advanced fertility treatments and personalized care. With a strong focus on ethical practices, high success rates, and patient well-being, we offer a full range of services including IVF, ICSI, IUI, and fertility preservation. Backed by a dedicated team of fertility specialists and a state-of-the-art embryology lab, our center ensures the highest standards of care and comfort. Having completed 25 successful years in the field of fertility treatment, we take pride in being a part of thousands of beautiful parenthood journeys. At Arpit IVF, we believe every couple deserves a chance to build a family—and we are here to make that journey possible with compassion, expertise, and unwavering support.</p>
            <div className="flex m-auto my-4">
              <a
                href="https://www.instagram.com/dr.vandanabansal"
                target="_blank"
              >
                <FaInstagram className="mx-2 text-white text-xl" />
              </a>
              <a
                href="https://www.facebook.com/vandana.bansal.33"
                target="_blank"
              >
                <FaFacebook className="mx-2 text-white text-xl" />
              </a>
              <a
                href="https://www.youtube.com/@DrVandanaBansal"
                target="_blank"
              >
                <FaYoutube className="mx-2 text-white text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/dr-vandana-bansal-5916279b/"
                target="_blank"
              >
                <FaLinkedinIn className="mx-2 text-white text-xl" />
              </a>
            </div>
          </div>

        </div>
        <div className="bg-zinc-50 border-t-2">
          <div className="container px-5 w-fit py-6 mx-auto 
            sm:flex-row flex-col">
            <p className="text-sm text-gray-700 sm:ml-6 sm:mt-0">
              © 2025 Arpit Test Tube Baby Centre | All rights reserved
            </p>
            <div className="text-center">
              <Link to='terms-and-condition'>
                Term & Condition
              </Link>
              |
              <Link to="privacy-policy texy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;