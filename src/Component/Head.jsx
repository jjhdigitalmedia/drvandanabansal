import React from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'
import '../Style/Style.css'

{/* md:bg-[url(https://i.postimg.cc/bNnz1Sr6/bgfinal6.png)] bg-[url(https://i.postimg.cc/2yDfw2V2/bg.jpg)] */ }
{/* https://i.postimg.cc/15W218N9/bgvandana1.png */ }
// bg-gradient-to-r from-blue-500
// bg-gradient-to-r from-black

const Head = () => {
  return (
    <>
    {/* md:bg-[url(https://i.postimg.cc/YSSTYvqh/vandanabgphoto.jpg)] */}
    {/* https://i.postimg.cc/YSSTYvqh/vandanabgphoto.jpg */}
      <section className=" body-font bg-[url(https://i.postimg.cc/0NRx12fd/vandanabgphoto.jpg)] bg-hero bg-no-repeat bg-cover bg-center bg-fixed h-3/5" >
        <div className="container md:mx-20 md:w-3/5 flex text-center flex-col items-center px-2 pt-28 pb-36 md:pt-32 lg:text-left md:pb-16 md:flex-row lg:pt-32 lg:pb-24 lg:w-3/5 lg:pr-32">

          <div className="pr-0 md:w-3/5 m-auto text-center lg:text-left flex flex-col md:pr-8 md:items-start lg:w-72 lg:flex-grow lg:pl-8 lg:py-10 lg:rounded-lg">

            <h1 data-aos='fade-right' className="title-font font-serif text-center text-2xl sm:text-4xl lg:text-left lg:text-4xl mb-4 text-rose-50 md:text-rose-100 font-thin [text-shadow:_0_2px_0_rgb(0_0_0_/_10%)]">
              Senior IVF Expert
            </h1>
            <span data-aos='fade-right' className=" font-thin mb-2 text-white md:text-left lg:text-left "><span className="font-bold">DR. VANDANA BANSAL</span> – MBBS, DGO, MS, D.Phil (Gold Medalist) FCGP is one of the renowned and Senior Gynaecologists and Obstetricians of the state of Uttar Pradesh. </span>
            <p data-aos='fade-right' className="mb-2 text-sm leading-relaxed md:text-left lg:text-left text-white">
              To deliver diagnostic, surgical, and medical services to all inpatients
              and outpatients, manage hospital administration, and establish protocols for
              comprehensive patient care.
            </p>
            <span className=" text-xl text-rose-300 my-3 [text-shadow:_0_2px_0_rgb(0_0_0_/_10%)]"><span className="font-thin">38</span> years of experience</span>
            <Link to='bookappointment' className="rounded-lg animate-bounce items-center bg-rose-700 border-0 py-2 px-4 w-3/4 md:w-1/2 text-center text-white">
              <button>
                book Appointment
              </button>
              
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Head;
