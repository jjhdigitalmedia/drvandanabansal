import React from "react";
import speaker1 from '../assets/speaker1.jpg'

const conferencesData = [
    {
        image: speaker1,
        title: "A Successful CME on Fertility-Preserving Management of Fibroids",
        description:
            "It was a privilege to serve as the President of ISOPARB Prayagraj and be part of a successful CME on Fertility-Preserving Management of Fibroids: Where Does Relugolix Combination Therapy Fit?",
    },
    {
        image: speaker1,
        title: "Delivering a Talk on Hormone Replacement Therapy at Dr. Reddy's CME",
        description:
            "Honoured to have been invited as a Speaker at the Dr. Reddy's Continued Medical Education (CME), organized in association with the Allahabad Obstetric & Gynaecological Society (AOGS).",
    },
    {
        image: speaker1,
        title: "Medical Workshop",
        description:
            "Hands-on learning with leading specialists and healthcare experts.",
    },
    {
        image: speaker1,
        title: "International Fertility Summit",
        description:
            "Collaborating with global experts in reproductive medicine.",
    },
    {
        image: speaker1,
        title: "Scientific Session",
        description:
            "Discussing evidence-based practices in obstetrics & gynecology.",
    },
];


export default function conferences() {
    return (
        <section className="relative py-32 mb-16 overflow-hidden bg-pink-800">

            <div
                className="absolute top-0 left-0 w-full h-24 bg-white"
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

                    <span className="inline-block px-5 py-2 rounded-full bg-pink-100 text-pink-700 font-serif mb-4">
                        Conferences & Seminars
                    </span>

                    <h2 className="text-4xl lg:text-5xl text-white leading-tight">

                        Learning, Sharing &
                        <span className="text-white font-serif"> Advancing Women's Healthcare</span>

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

                                        {item.title}

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