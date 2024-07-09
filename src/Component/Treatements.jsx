import React from "react";
import RefractiveErrors3 from "../assets/icons/Treatment/RefractiveErrors3.png";
import AgeRelated from "../assets/icons/Treatment/AgeRelated.png";
import glaucoma from "../assets/icons/Treatment/glaucoma.png";
import cataract from "../assets/icons/Treatment/cataract.png";
import diabetic from "../assets/icons/Treatment/diabetic.png";
import dryEye from "../assets/icons/Treatment/dryEye.png";
import '../Style/Style.css'
import { Link } from "react-router-dom";

const Treatements = () => {
 
  return (
    <section class="text-gray-950 body-font">
      <div class="container px-1 py-8 mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Treatments</h1>
        </div>
        <div class=" flex flex-wrap justify-center">
          
            <div class="m-4 lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt bg-gradient-to-b from-blue-200">
              <Link to='advanceLaparoscopy'>
                <Link to='advanceLaparoscopy' class="block relative h- rounded p-5 overflow-hidden">
                  <img
                    alt="ecommerce"
                    class="object-cover object-center w-full h-full block"
                    src={RefractiveErrors3}
                    />
                </Link>
                <div class="mt-4 text-center">
                  <h2 class="text-gray-900 title-font text-lg font-medium">
                    Refractive Errors
                  </h2>
                  <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                    View more
                  </h3>
                </div>
              </Link>
            </div>
     
          <div class="m-4 lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt bg-gradient-to-b from-blue-200">
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
                  Cataract
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>
          </div>
          <div class="m-4 lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-200">
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
                  Glaucoma
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>
          </div>
          <div class="m-4 lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-200">
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
                  Age-Related Macular Degeneration (AMD)
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>
          </div>
          <div class=" m-4 lg:w-1/4 md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-200">
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
                  Dry Eye Syndrome
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>
          </div>
          <div class=" m-4 lg:w-1/4 border md:w-1/2 p-4 w-full shadow-md rounded-3xl trt tt bg-gradient-to-b from-blue-200">
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
                  Diabetic Retinopathy
                </h2>
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                  View more
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatements;
