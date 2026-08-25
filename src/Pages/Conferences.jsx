import React from "react";
import speaker1 from '../assets/speaker1.jpg'
import Eshre from '../assets/ConferencesActivity/Eshre.jpg'
// import Fogsi from '../assets/Fogsi.jpg'
import Fogsi from '../assets/ConferencesActivity/Fogsi.jpg'
import ISOPARBJuly from '../assets/ConferencesActivity/ISOPARBJuly.jpg'
import ISOPPARBJune from '../assets/ConferencesActivity/ISOPPARBJune.jpg'
import ISOPARBApr from '../assets/ConferencesActivity/ISOPARBApr.jpg'
import LongevitySummit from '../assets/ConferencesActivity/LongevitySummit.png'

const conferencesData = [
    {
        image: ISOPARBJuly,
        title: "A Successful CME on Fertility-Preserving Management of Fibroids",
        description:
            "It was a privilege to serve as the President of ISOPARB Prayagraj and be part of a successful CME on Fertility-Preserving Management of Fibroids: Where Does Relugolix Combination Therapy Fit?",
            date:'19-07-2026'
    },
    {
        image: Fogsi,
        title: "Delivered a Talk on Hormone Replacement Therapy at Dr. Reddy's CME",
        description:
        "Honoured to have been invited as a Speaker at the Dr. Reddy's Continued Medical Education (CME), organized in association with the Allahabad Obstetric & Gynaecological Society (AOGS).",
        date:'18-07-2026'
    },
    {
        image: LongevitySummit,
        title: "Exploring the Future of Health & Longevity 2026",
        description:
            "An enriching experience at Longevity Summit India 2026, exploring emerging ideas in longevity, preventive health, and healthcare innovation. Participated in the panel “What Are You Burning For? Fuel, Family, Fertility & The Energy That Outlives Us”, sharing perspectives on fertility, family, and longevity.",
            date:'18-07-2026'
    },
    {
        image: Eshre,
        title: "ESHRE Annual Conference | Advancing Fertility Care Through Global Learning",
        description:
            "Honoured to be a part of ESHRE (European Society of Human Reproduction and Embryology), one of the world’s leading platforms for reproductive medicine and fertility research.",
            date:'05-07-2026'
    },
    {
        image: ISOPPARBJune,
        title: "Leading the ISOPARB Prayagraj Scientific Program",
        description:
            "As President of ISOPARB Prayagraj, I had the privilege of leading the Scientific Program, fostering academic discussions and advancing evidence-based practices in reproductive medicine and gynecology.",
            date:'23-06-2026'
    },
    {
        image: ISOPARBApr,
        title: "Delivered a Lecture at the ISOPARB CME on Medical Management of Uterine Fibroids",
        description:
            "As President of ISOPARB Prayagraj, I delivered a Scientific Session on Medical Management of Uterine Fibroids, sharing evidence-based approaches and the latest advances in uterine fibroid management.",
            date:'25-04-2026'
    },
];


export default function conferences() {
    return (
        <section className="relative py-32 mb-16 overflow-hidden bg-pink-800">

            <div
                className="absolute top-0 left-0 w-full h-24 bg-[#f1f1f1]"
                style={{
                    clipPath: "ellipse(75% 100% at 50% 0%)",
                }}
            ></div>

            {/* Decorative Blur */}
            {/* <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-pink-200 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-rose-200 opacity-20 blur-3xl"></div> */}

            <div className="max-w-7x mx-auto px-6">

                {/* Heading */}



                <div className="text-center max-w-3xl mx-auto mb-16">

                    <span className="inline-block px-5 py-2 rounded-full bg-pink-100 text-pink-700 mb-4">
                        Conferences & Seminars
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-cambria font-cormorant font-semibold text-white leading-tigh">

                        Learning, Sharing &
                        <span className="text-white font-cambria font-cormorant font-semibold"> Advancing Women's Healthcare</span>

                    </h2>

                    <p className="mt-6 text-gray-100 leading-8 text-lg">
                        Continuous learning and active participation in conferences,
                        seminars, and scientific meetings help us stay updated with the
                        latest medical advancements, ensuring better care for every patient.
                    </p>

                </div>

                {/* Infinite Slider */}

                <div className="relative overflow-hidde">

                    <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">

                        {[...conferencesData, ...conferencesData].map((item, index) => (

                            <div
                                key={index}
                                className="group w-[340px] mx-5 rounded-3xl bg-white shadow-xl overflow-hidden border border-pink-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                            >

                                <div className="overflow-hidden h-64">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                                    />

                                </div>

                                <div className="p-6">

                                    <h3 className="text-xl font-semibold text-gray-800 mb-3">

                                        {item.title} -
                                        <span className="font-thin px-3 text-sm">{item.date}</span>
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-7">

                                        {item.description}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            <style>{`
      
      @keyframes marquee {

        from{
          transform:translateX(0);
        }

        to{
          transform:translateX(-50%);
        }

      }

      .animate-marquee{

        animation:marquee 35s linear infinite;

      }

      `}</style>

        </section>
    );
}