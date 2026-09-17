import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Instagram,
  Heart,
  ExternalLink,
  X,
} from "lucide-react";

import IVFSuccessInsta from "../assets/InstaCover/IVFSuccessInsta.png";
import PreparePregnancy from "../assets/InstaCover/PreparePregnancy.png";
import LongevitySummit from "../assets/InstaCover/LongevitySummit.png";
import PCOSUnderstand from "../assets/InstaCover/PCOSUnderstand.png";
import ChancesConcieving from "../assets/InstaCover/ChancesConcieving.png";

const reels = [
  {
    id: 1,
    image: IVFSuccessInsta,
    title: "Understanding Women's Health",
    // description:      "Important women's health tips and expert guidance by Dr. Vandana Bansal.",
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    image: PreparePregnancy,
    title: "IVF & Fertility Care",
    // description:      "Know more about fertility, IVF and advanced reproductive care.",
    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    image: LongevitySummit,
    title: "Pregnancy & Maternity Care",
    // description:      "Helpful pregnancy guidance for a healthier and safer journey.",
    link: "https://www.instagram.com/",
  },
  {
    id: 4,
    image: ChancesConcieving,
    title: "Improve your chances of Conceiving",
    // description:      "Helpful pregnancy guidance for a healthier and safer journey.",
    link: "https://www.instagram.com/",
  },
  {
    id: 5,
    image: PCOSUnderstand,
    title: "PCOS: What should you know",
    // description:      "Helpful pregnancy guidance for a healthier and safer journey.",
    link: "https://www.instagram.com/",
  },

];

export default function InstagramReels() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedReel, setSelectedReel] = useState(null);

  const total = reels.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Get visible cards
  const visibleReels = [
    reels[currentIndex % total],
    reels[(currentIndex + 1) % total],
    reels[(currentIndex + 2) % total],
    reels[(currentIndex + 3) % total],
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[#f1f1f1] py-20 sm:py-24">

        {/* Soft background decoration */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-800/5 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-pink-800/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <h2
              className="text-3xl font-bold leading-tight text-gray-700 sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "Cambria, serif" }}
            >
              Instagram{" "}
              <span className="text-pink-800">in Action</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
              Real patient care, educational insights, behind-the-scenes
              moments, and women's health tips — straight from
              Dr. Vandana Bansal's Instagram.
            </p>
          </div>

          {/* Slider */}
          <div className="relative mt-12 sm:mt-14">

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous reels"
              className="absolute -left-8 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-pink-800/10 bg-white text-pink-800 shadow-lg transition-all duration-300 hover:bg-pink-800 hover:text-white lg:flex"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Cards */}
            <div className="grid grid-cols-1 h-full gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {visibleReels.map((reel, index) => (
                <div
                  key={`${reel.id}-${index}`}
                  className={`
                    group relative overflow-hidden rounded-[24px]
                    bg-black shadow-md
                    transition-all duration-500
                    hover:-translate-y-2 hover:shadow-2xl
                    ${index > 0 ? "hidden sm:block" : ""}
                    ${index > 1 ? "sm:hidden lg:block" : ""}
                  `}
                >

                  {/* Image */}
                  <div
                    onClick={() => setSelectedReel(reel)}
                    className="relative aspect-[9/16] cursor-pointer overflow-hidden"
                  >

                    <img
                      src={reel.image}
                      alt={reel.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark gradient */}
                    <div
                      className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-black via-black/20 to-transparent
                      "
                    />

                    {/* Reel Badge */}
                    <div
                      className="
                        absolute left-4 top-4
                        flex items-center gap-2
                        rounded-full
                        bg-black/65 px-3 py-1.5
                        backdrop-blur-md
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-pink-500" />

                      <span className="text-[11px] font-semibold uppercase tracking-wide text-white">
                        Reel
                      </span>
                    </div>

                    {/* Play Button */}
                    <div
                      className="
                        absolute left-1/2 top-1/2
                        flex h-14 w-14
                        -translate-x-1/2 -translate-y-1/2
                        items-center justify-center
                        rounded-full
                        bg-white/95
                        text-pink-800
                        shadow-xl
                        transition-all duration-300
                        group-hover:scale-110
                      "
                    >
                      <Play
                        size={22}
                        fill="currentColor"
                        className="ml-1"
                      />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">

                      <h3
                        className="
                          line-clamp-2
                          text-lg font-bold leading-snug text-white
                        "
                      >
                        {reel.title}
                      </h3>

                      {/* <p className="
                        mt-2 line-clamp-2
                        text-xs leading-5 text-white/80
                      ">
                        {reel.description}
                      </p> */}

                      <div className="mt-4 flex items-center gap-2 text-xs text-white/85">
                        <Heart size={13} fill="currentColor" />
                        <span>Watch on Instagram</span>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next reels"
              className="absolute -right-8 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-pink-800/10    bg-white text-pink-800 shadow-lg transition-all duration-300 hover:bg-pink-800 hover:text-white lg:flex"
            >
              <ChevronRight size={22} />
            </button>

          </div>

          {/* Mobile Navigation */}
          <div className="mt-7 flex items-center justify-center gap-3 lg:hidden">

            <button
              onClick={prevSlide}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-pink-800/20
                bg-white text-pink-800 shadow-sm
              "
            >
              <ChevronLeft size={19} />
            </button>

            <div className="flex items-center gap-1.5">
              {reels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    h-1.5 rounded-full transition-all duration-300
                    ${index === currentIndex
                      ? "w-7 bg-pink-800"
                      : "w-1.5 bg-pink-800/20"
                    }
                  `}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-full border border-pink-800/20
                bg-white text-pink-800 shadow-sm
              "
            >
              <ChevronRight size={19} />
            </button>

          </div>

          {/* Instagram CTA */}
          <div className="mt-10 flex justify-center">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-pink-800bg-white px-7 py-3 text-sm font-semibold text-pink-800 shadow-sm       transition-all duration-300hover:bg-pink-800 hover:text-white hover:shadow-lg"
            >
              <Instagram size={17} />

              Follow Us on Instagram

              <ExternalLink
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

          </div>

        </div>
      </section>

      {/* ================= MODAL ================= */}

      {selectedReel && (
        <div
          className="
            fixed inset-0 z-[999]
            flex items-center justify-center
            bg-black/80 p-5
            backdrop-blur-sm
          "
          onClick={() => setSelectedReel(null)}
        >

          <div
            className="relative max-h-[92vh] w-full max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={() => setSelectedReel(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center  rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black"
            >
              <X size={20} />
            </button>

            {/* Large Image */}
            <div className="bg-black">
              <img
                src={selectedReel.image} alt={selectedReel.title} className="max-h-[72vh] w-full object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="p-5">

              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pink-800" />

                <span className="text-xs font-semibold uppercase tracking-wider text-pink-800">
                  Instagram Reel
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {selectedReel.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {selectedReel.description}
              </p>

              <a
                href={selectedReel.link} target="_blank" rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2  rounded-xl bg-pink-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-900"
              >
                <Instagram size={17} />
                Watch on Instagram
              </a>

            </div>

          </div>
        </div>
      )}
    </>
  );
}