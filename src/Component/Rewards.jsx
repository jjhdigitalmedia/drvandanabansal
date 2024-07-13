import React from "react";
import { Link } from "react-router-dom";
import speaker1 from "../assets/speaker1.jpg";
import vandanapc1 from "../assets/vandanapc1.jpg";
import lab from "../assets/lab.png";
import patientweb from "../assets/icons/patientweb.png";

export const Rewards = () => {
  return (
    // <div className="text-center border-4 w-11/12 mx-auto flex justify-right -mt-24 mb-5 overflow-x-scroll md:justify-center ">
    <div className="flex lg:justify-center flex-wrap bg-transparent lg:w-4/5 mx-auto -mt-20">

      <div class="flex flex-col justify-center rounded-3xl items-center border-8 border-white  bg-gray-100 m-2 min-hscreen">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden  max-w-80 w-full">
          <img
            src={speaker1}
            alt="Mountain"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              Guest Speaker
            </h2>
            <p class="text-gray-700 leading-tight mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eu sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex
              at turpis rutrum viverra.
            </p>
            {/* <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                  class="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span class="text-gray-800 font-semibold">John Doe</span>
              </div>
              <span class="text-gray-600">2 hours ago</span>
            </div> */}
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center rounded-3xl items-center border-8 border-white bg-gray-100 m-2 min-hscreen">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden max-w-80 w-full">
          <img
            src={lab}
            alt="Mountain"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              IVF Treatments
            </h2>
            <p class="text-gray-700 leading-tight mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eu sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex
              at turpis rutrum viverra.
            </p>
            {/* <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                  class="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span class="text-gray-800 font-semibold">John Doe</span>
              </div>
              <span class="text-gray-600">2 hours ago</span>
            </div> */}
          </div>
        </div>
      </div>

      <div class="flex flex-col justify-center rounded-3xl items-center border-8 border-white bg-gray-100 m-2 min-hscreen">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden  max-w-80 w-full">
          <img
            src={patientweb}
            alt="Mountain"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              Patient's satisfaction
            </h2>
            <p class="text-gray-700 leading-tight mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eu sapien porttitor, blandit velit ac, vehicula elit. Nunc et ex
              at turpis rutrum viverra.
            </p>
            {/* <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Avatar"
                  class="w-8 h-8 rounded-full mr-2 object-cover"
                />
                <span class="text-gray-800 font-semibold">John Doe</span>
              </div>
              <span class="text-gray-600">2 hours ago</span>
            </div> */}
          </div>
        </div>
      </div>



    </div>
    // </div>
  );
};

{
  /* <div
  class="my-4 mx-1 md:mx-4 rounded-2xl bg-stone-800 border-4 border-white w-full md:w-11/12 "
  data-aos="flp-right"
>
  <Link to="advanceLaparoscopy">
    <div class="px-4 py-6">
      <img
        alt="ecommerce"
        class="object-cover object-center p-3 w-full h-full block"
        src={patientweb}
      />
      <h2 class="title-font font-medium text-2xl text-white">
        Guest Speaker
      </h2>
      <p class="leading-relaxed text-white">Know more</p>
    </div>
  </Link>
</div> */
}
