import React from "react";

const memberships = [
  "President of ISOPARB Society",
  "President Elect AOGS",
  "Life Member FOGSI",
  "Life Member ISAR",
  "Life Member ISPAT",
  "Life Member IAGE",
  "Life Member IMA",
  "Member of ESHRE",
  "Life Member IFS",
  "Life Member ISARM",
  "Member of AICOG",
  "Member RCOG (UK)",
  "Life Member IMA College of General Practitioners",
];

const Membership = () => {
  return (
    <section className="bg-white py-10 overflow-hidden">
  

      <div className="relative overflow-hidden border-y border-pik-400 bg-pink-800 text-white py-5">
        {/* Left Fade */}
        {/* <div className="hidden md:absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div> */}
        {/* Right Fade */}
        {/* <div className="hidden md:absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div> */}
        <div className="marquee group">
          <div className="marquee-content">

            {[...memberships, ...memberships].map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-lg md:text-xl font-semibold text-gray0 whitespace-nowrap">
                  {item}
                </span>

                <span className="mx-8 text-gray-200 text-3xl leading-none">
                  ●
                </span>
              </React.Fragment>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;