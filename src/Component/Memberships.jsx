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
  "Life Member IMA College of General Practitioners",
];

const Membership = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {memberships.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 border-b border-gray-200 pb-3"
            >
              <span className="text-pink-800 text-lg mt-0.5">●</span>

              <span className="text-gray-700 text-base md:text-lg font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;