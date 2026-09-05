import React from "react";

const memberships = [
  "President of ISOPARB Society",
  "President Elect AOGS",
  "Executive Member FOGSI",
  "Member of RCOG (UK)",
  "Life Member IMA",
  "Life Member ISAR",
  "Life Member NARCHI",
  "Member of AICOG",
];

const Membership = () => {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <p className="uppercase tracking-[4px] text-gray-500 font-semibold mb-3">
          Professional Excellence
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-pink-800">
          Society & Memberships
        </h2>

        <p className="text-gray-500 mt-5 max-w-3xl mx-auto leading-8">
          Dr. Vandana Bansal actively contributes to leading national and
          international medical organizations, demonstrating her commitment to
          excellence in women's healthcare, research, education, and clinical
          leadership.
        </p>
      </div>

      <div className="relative overflow-hidden border-y border-pik-400  bg-pink-800 text-white py-5">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
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