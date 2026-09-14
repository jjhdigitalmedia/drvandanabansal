import React, { useMemo, useState } from "react";

import A from "../assets/Gallery/AwardsPhotos/A.jpg";
import B from "../assets/Gallery/AwardsPhotos/B.jpg";
import C from "../assets/Gallery/AwardsPhotos/C.jpg";
import D from "../assets/Gallery/AwardsPhotos/D.jpg";
import E from "../assets/Gallery/AwardsPhotos/E.jpg";
import F from "../assets/Gallery/AwardsPhotos/F.jpg";
// import H from "../assets/Gallery/AwardsPhotos/H.jpg";

import OTA from "../assets/Gallery/OT/OTA.jpg";
import OTB from "../assets/Gallery/OT/OTB.png";
import OTC from "../assets/Gallery/OT/OTC.jpeg";

import ConferenceA from "../assets/Gallery/EventsConferences/ConferenceA.jpg";
import ConferenceB from "../assets/Gallery/EventsConferences/ConferenceB.jpg";
import ConferenceC from "../assets/Gallery/EventsConferences/ConferenceC.jpg";
import ConferenceD from "../assets/Gallery/EventsConferences/ConferenceD.jpg";
import ConferenceE from "../assets/Gallery/EventsConferences/ConferenceE.png";

import IVFLabA from "../assets/Gallery/IVFLab/IVFLabA.jpg";
import IVFLabB from "../assets/Gallery/IVFLab/IVFLabB.jpg";
import IVFLabC from "../assets/Gallery/IVFLab/IVFLabC.png";
import IVFLabD from "../assets/Gallery/IVFLab/IVFLabD.jpg";
import IVFLabE from "../assets/Gallery/IVFLab/IVFLabE.jpg";
import IVFLabF from "../assets/Gallery/IVFLab/IVFLabF.jpg";
import IVFLabG from "../assets/Gallery/IVFLab/IVFLabG.jpg";
import IVFLabH from "../assets/Gallery/IVFLab/IVFLabH.png";


const galleryItems = [
  { id: 1, src: A, category: "Awards & Felicitations", title: "" },
  { id: 2, src: B, category: "Awards & Felicitations", title: "" },
  { id: 3, src: C, category: "Awards & Felicitations", title: "" },
  { id: 4, src: D, category: "Awards & Felicitations", title: "" },
  { id: 5, src: E, category: "Awards & Felicitations", title: "" },
  { id: 6, src: F, category: "Awards & Felicitations", title: "" },
  { id: 7, src: OTA, category: "OT", title: "" },
  { id: 8, src: OTB, category: "OT", title: "" },
  { id: 9, src: OTC, category: "OT", title: "" },
  { id: 10, src: ConferenceA, category: "Events & Conferences", title: "" },
  { id: 11, src: ConferenceB, category: "Events & Conferences", title: "" },
  { id: 12, src: ConferenceC, category: "Events & Conferences", title: "" },
  { id: 13, src: ConferenceD, category: "Events & Conferences", title: "" },
  { id: 14, src: ConferenceE, category: "Events & Conferences", title: "" },
  { id: 15, src: IVFLabA, category: "IVF Lab", title: "" },
  { id: 16, src: IVFLabB, category: "IVF Lab", title: "" },
  { id: 17, src: IVFLabC, category: "IVF Lab", title: "" },
  { id: 18, src: IVFLabD, category: "IVF Lab", title: "" },
  { id: 19, src: IVFLabE, category: "IVF Lab", title: "" },
  { id: 20, src: IVFLabF, category: "IVF Lab", title: "" },
  { id: 21, src: IVFLabG, category: "IVF Lab", title: "" },
  { id: 22, src: IVFLabH, category: "IVF Lab", title: "" },
  
];

const categories = ["All", "Clinic & Hospital", "OT", "IVF Lab", "Events & Conferences", "Awards & Felicitations"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const openNext = (direction) => {
    if (!selected) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selected.id);
    const nextIndex =
      (currentIndex + direction + filteredItems.length) % filteredItems.length;
    setSelected(filteredItems[nextIndex]);
  };

  return (
    <main className="min-h-screen bg-[#f1f1f1] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-pink-950">
              <span className="h-px w-10 bg-pink-800" />
              Dr. Vandana Bansal
              <span className="h-px w-10 bg-pink-800" />
            </p>
            <h1 className="text-4xl text-center font-semibold leading-tight tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
              A glimpse into our
              <span className="block text-pink-800">journey of care</span>
            </h1>
            <p className="mt-6 text-center text-base leading-7 text-pink-900 sm:text-lg">
              Explore moments from clinical practice, professional events,
              conferences and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border-2 border-pink-800 px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "border-pink-800 bg-pink-800 text-white shadow-lg shadow-pink-900/15"
                    : "border-slate-300 bg-white text-slate-600 hover:border-pink-300 hover:text-pink-800"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Responsive masonry-style grid */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelected(item)}
              className="group relative mb-5 block w-full overflow-hidden border-[1px] border-gray-500 rounded-2xl bg-white text-left shadow-md ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-pink-950/85 via-pink-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-200">
                  {item.category}
                </span>
                <h2 className="mt-1 text-lg font-medium text-white">{item.title}</h2>
              </div>

              <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-pink-900 opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="m15 3 6 6m0-6-6 6M21 3l-9 9" />
                  <path d="M13 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <p className="text-slate-500">No images found in this category.</p>
          </div>
        )}
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <span className="text-2xl leading-none">×</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openNext(-1);
            }}
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            ←
          </button>

          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="max-h-[78vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">
                {selected.category}
              </p>
              <p className="mt-1 text-lg font-medium text-white">{selected.title}</p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openNext(1);
            }}
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </main>
  );
}
