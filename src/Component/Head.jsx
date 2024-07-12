{/* md:bg-[url(https://i.postimg.cc/bNnz1Sr6/bgfinal6.png)] bg-[url(https://i.postimg.cc/2yDfw2V2/bg.jpg)] */ }
{/* https://i.postimg.cc/15W218N9/bgvandana1.png */ }
import React from "react";
// bg-gradient-to-r from-blue-500
// bg-gradient-to-r from-black
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'
import '../Style/Style.css'
const Head = () => {
  return (
    <>
      <section className=" body-font md:bg-[url(https://i.postimg.cc/YSSTYvqh/vandanabgphoto.jpg)] bg-[url(https://i.postimg.cc/YSSTYvqh/vandanabgphoto.jpg)] bg-hero g-no-repeat bg-cover bg-center bg-fixed h-4/5" >
        <div className="container md:mx-20 md:w-3/5 flex text-center flex-col items-center px-2 pt-28 pb-36 md:pt-32 md:pb-16 md:flex-row lg:pt-20 lg:pb-24 lg:w-3/5 lg:pr-32">

          <div className="pr-0 md:w-3/5 m-auto text-center flex flex-col  md:w/2 md:pr-8 md:items-start lg:w-72 lg:flex-grow lg:pl-8 lg:py-10 lg: rounded-lg">

            <h1 data-aos='fade-right' className="title-font font-serif sm:text-4xl md:text-left lg:text-4xl mb-4 text-rose-50 md:text-rose-100 font-thin [text-shadow:_0_2px_0_rgb(0_0_0_/_10%)]">
              Best Gynaecologist in Prayagraj
            </h1>
            <span data-aos='fade-right' className="font-bold mb-2 text-white text-lg md: text-left">DR. VANDANA BANSAL – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. </span>
            <p data-aos='fade-right' className="mb-2 text-sm leading-relaxed md:text-left text-white">
              To deliver diagnostic, surgical, and medical services to all inpatients
              and outpatients, manage hospital administration, and establish protocols for
              comprehensive patient care.
            </p>
            <span className="font-bold text-xl text-rose-300 my-3 [text-shadow:_0_2px_0_rgb(0_0_0_/_10%)]">40 years of experience</span>
            {/* <div className="mb-3">
              <h1 className="font-bold text-xl text-white">Medical Council Registration </h1>
              <p className="text-white">UP State Medical Council Registration No: <span className="">24503</span>  </p>
            </div> */}
            <Link to='bookappointment' className="rounded-lg animate-bounce inline-flex items-center bg-rose-700 border-0 py-2 px-4 text-white">
              <button>
                book Appointment
              </button>
            </Link>
          </div>

          {/* <div className="mb-10 shadow-4xl md:px-8 lg:px-0  md:mb-0">
            <img data-aos='flip-right'
              className="border-2  border-rose-200 w-72 h-72 m-auto text-center border-gradient-to-r from-blue-500 object-cover object-center rounded-2xl md:rounded-xl"
              alt="hero"
              src={mamphoto}
            />
          </div> */}
        </div>
      </section>

    </>
  );
};

export default Head;
