import React, { useEffect } from "react";
import fertilization from "../assets/icons/Treatment/fertilization.png";
import Aos from "aos";
import 'aos/dist/aos.css'
import '../Style/Style.css'
import { Link } from "react-router-dom";

const Treatements = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })

  return (<>
    {/* <section class="text-gray-950 body-font">
      <div class="containe px-1 py-8-auto">
        <div className="">
          <h1 className="text-4xl md:text-5xl mx-24 my-3 font-bold">Treatments</h1>
        </div>
        <div class=" flex flex-wrap w-full justify-center">

          <div class="m-2 lg:w-1/4 md:w-64 md:h-64 p-3 py-2 w-full shadow-md rounded-3xl  bg-gradient-to-b from-pink-200">

            <Link to='advanceLaparoscopy'>
              <div to='advanceLaparoscopy' class="block relative w-44 rounded p-3 overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={RefractiveErrors3}
                />
              </div>
              <div class="mt-4 text-center">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Infection and STD Treatment
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>

          </div>

          <div class="m-2 lg:w-1/4 md:w-1/2 p-3 w-full shadow-md rounded-3xl bg-gradient-to-b from-pink-200">
            <Link to='generalSurery'>
              <Link to='generalSurery' class="block relative h- rounded p-5 overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={cataract}
                />
              </Link>
              <div class="mt-4 text-center">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Contraception and Family Planning:
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>
          </div>
          <div class="m-2 lg:w-1/4 md:w-1/2 p-3 w-full shadow-md rounded-3xl tt bg-gradient-to-b from-pink-200">
            <Link to='lasersurgery'>
              <Link to='lasersurgery' class="block relative h- rounded p-5 overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={glaucoma}
                />
              </Link>
              <div class="mt-4 text-center">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Pregnancy-Related Services:
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>
          </div>
          <div class="m-2 lg:w-1/4 md:w-1/2 p-3 w-full shadow-md rounded-3xl tt bg-gradient-to-b from-pink-200">
            <Link to='bariaticweightloss'>
              <Link to='bariaticweightloss' class="block relative h- rounded p-5 overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={AgeRelated}
                />
              </Link>
              <div class="mt-4 text-center">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Routine Exams and Screenings
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>
          </div>
          <div class="m-2 lg:w-1/4 md:w-1/2 p-3 w-full shadow-md rounded-3xl tt bg-gradient-to-b from-pink-200">
            <Link to='breastclinic'>
              <Link to='breastclinic' class="block relative h- rounded p-5 overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={dryEye}
                />
              </Link>
              <div class="mt-4 text-center">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Fertility Treatments:
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>
          </div>
          <div class=" m-2 lg:w-1/4 border md:w-1/2 p-3 w-full shadow-md rounded-3xl tt bg-gradient-to-b from-pink-200">
            <Link to='surgicaloncology'>
              <Link to='surgicaloncology' class="block relative h- rounded p-5 overflow-hidden">
                <img
                  alt="ecommerce"
                  class="object-cover object-center w-full h-full block"
                  src={diabetic}
                />
              </Link>
              <div class="mt-4 text-center">
                <h2 class="text-gray-900 title-font text-lg font-medium">
                  Preventive Screenings:
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section> */}




    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">

          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={fertilization}
                />
                <h2 class="title-font font-medium text-md text-gray-900">Preventive Screenings:</h2>
                <p class="leading-relaxed">Downloads</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={fertilization}
                />
                <h2 class="title-font font-medium text-md text-gray-900">Fertility Treatments:</h2>
                <p class="leading-relaxed">Users</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-8 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={fertilization}
                />
                <h2 class="title-font font-medium text-md text-gray-900"> Routine Exams and Screenings</h2>
                <p class="leading-relaxed">Files</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-8 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={fertilization}
                />
                <h2 class="title-font font-medium text-md text-gray-900">Pregnancy-Related Services:</h2>
                <p class="leading-relaxed">Places</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-8 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={fertilization}
                />
                <h2 class="title-font font-medium text-md text-gray-900">Contraception and Family Planning:</h2>
                <p class="leading-relaxed">Places</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='fade-up'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={fertilization}
                />
                <h2 class="title-font font-medium text-md text-gray-900">Infection and STD Treatment</h2>
                <p class="leading-relaxed">Places</p>
              </div>
            </Link>
          </div>
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full" data-aos='flip-right'>
            <Link to='advanceLaparoscopy'>
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  alt="ecommerce"
                  class="object-cover object-center p-4 w-full h-full block"
                  src={fertilization}
                />
                <h2 class="title-font font-medium text-md text-gray-900">46</h2>
                <p class="leading-relaxed">Places</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default Treatements;
