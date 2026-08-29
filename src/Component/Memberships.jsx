import { Award } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const memberships = [
  {
    organization: "Indian Medical Association (Allahabad)",
    type: "Life Member",
    number: "UP/2611/1/34/44396/95-96/CL",
  },
  // {
  //   organization: "Indian Medical Association",
  //   type: "Life Member",
  //   number: "BHR/4405/80/154/81330/2000-01/L",
  // },
  // {
  //   organization: "Royal Society of Health, London",
  //   type: "Associate Member (AMRSH)",
  //   number: "Since March 1991",
  // },
  {
    organization: "Indian Society for Prenatal Diagnosis & Therapy",
    type: "Member",
    number: null,
  },
  // {
  //   organization: "International Integration & Growth Society (IIGS)",
  //   type: "Member",
  //   number: "2005-2006",
  // },
  {
    organization: "FOGSI",
    type: "Life Member",
    number: "ALL0094",
  },
  {
    organization: "Association of Gynaecological Endoscopists",
    type: "Member",
    number: null,
  },
  {
    organization: "Rotary Club of Allahabad-East",
    type: "",
    number: null,
  },
  {
    organization: "Indian Society for Assisted Reproduction",
    type: "Member",
    number: null,
  },
  // {
  //   organization: "Bombay Endoscopy Academy & Centre for Minimally Invasive Surgery",
  //   type: "Member",
  //   number: null,
  // },
  {
    organization: "IMA College of General Practitioners",
    type: "Fellow",
    number: "UP-182/LM-9548",
  },
  {
    organization: "National Neonatology Forum",
    type: "Life Member",
    number: null,
  },
  {
    organization: "USUI SHIKI RYOHO",
    type: "Certified in REIKI Natural Healing",
    number: null,
  },
  {
    organization: "FIGO & AOFOG",
    type: "Life & International Member",
    number: null,
  },
  {
    organization:
      "National Association for Voluntary Sterilization & Family Welfare of India",
    type: "Life Member",
    number: null,
  },
  {
    organization: "FICMCH & ICMCH",
    type: "Fellow",
    number: null,
  },
  {
    organization: "Indian Menopause Society",
    type: "Life Member",
    number: "L-632",
  },
  {
    organization: "AAGL",
    type: "Life Member",
    number: null,
  },
  {
    organization: "FOGSI Social Security Scheme",
    type: "Member",
    number: "851",
  },
  {
    organization: "PCOS Society India",
    type: "Member",
    number: "September-2016",
  },
  {
    organization: "ISAR Mumbai",
    type: "Life Member",
    number: "ISAR/000163 | Reg ID: ISAR2500031",
  },
  {
    organization: "Rotary Allahabad Midtown",
    type: "Member",
    number: "District 3120 | Charter No.15407 | ID:1939869",
  },
  {
    organization: "Indian Fertility Society (IFS)",
    type: "Life Member",
    number: "IFS-3665",
  },
  {
    organization: "IAGE",
    type: "Life Member",
    number: "IAGE/LM/0176",
  },
  {
    organization: "Society of Fetal Medicine",
    type: "Member",
    number: "4990",
  },
  {
    organization: "ISPAT",
    type: "Life Member",
    number: "ISPAT-L/0074",
  },
];

export default function MembershipSlider() {
  return (
    <section className="py-20 bg-[#f1f1f1]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-pink-800">
            Professional Memberships
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Dr. Vandana Bansal is associated with leading National and
            International Medical Organizations dedicated to Women's
            Healthcare, Infertility and Minimally Invasive Surgery.
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={25}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {memberships.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-white rounded-3xl border border-gray-200 hover:border-pink-300 shadow-md hover:shadow-2xl transition-all duration-300 h-[310px] p-6 flex flex-col">

                {/* <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-5 group-hover:bg-pink-800 transition">

                  <Award
                    className="text-pink-800 group-hover:text-white"
                    size={30}
                  />
                </div> */}

                <h3 className="font-bold text-lg leading-6 text-gray-800">
                  {item.organization}
                </h3>

                <span className="inline-block mt-3 bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full w-fit">
                  {item.type}
                </span>

                <div className="flex-grow"></div>

                {item.number && (
                  <div className="mt-6 bg-pink-50 rounded-2xl p-4 border border-pink-100">

                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Membership Number
                    </p>

                    <p className="font-semibold text-gray-800 text-sm break-words leading-6">
                      {item.number}
                    </p>

                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}