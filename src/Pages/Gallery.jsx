import React, { useMemo, useState } from "react";

// Images — replace/add imports here whenever your gallery changes.
import gallery02 from "../assets/Gallery/gallery02.jpg";
import gallery03 from "../assets/Gallery/gallery03.jpg";
import gallery04 from "../assets/Gallery/gallery04.jpg";
import gallery05 from "../assets/Gallery/gallery05.jpg";
import gallery06 from "../assets/Gallery/gallery06.jpg";
import gallery09 from "../assets/Gallery/gallery09.png";
import gallery10 from "../assets/Gallery/gallery10.png";
import gallery11 from "../assets/Gallery/gallery11.png";
import A013 from "../assets/Gallery/A013.jpg";
import B02 from "../assets/Gallery/B02.jpg";

const galleryItems = [
  { id: 1, src: gallery02, category: "Clinic & Hospital", title: "Clinic & Hospital" },
  { id: 2, src: gallery03, category: "Clinic & Hospital", title: "Patient Care" },
  { id: 3, src: gallery04, category: "Events & Conferences", title: "Medical Conference" },
  { id: 4, src: gallery05, category: "Events & Conferences", title: "Professional Event" },
  { id: 5, src: gallery06, category: "Clinic & Hospital", title: "Healthcare Environment" },
  { id: 6, src: gallery09, category: "Awards & Achievements", title: "Recognition & Achievement" },
  { id: 7, src: gallery10, category: "Awards & Achievements", title: "Professional Recognition" },
  { id: 8, src: gallery11, category: "Events & Conferences", title: "Conference Moments" },
  { id: 9, src: A013, category: "Clinic & Hospital", title: "Clinical Care" },
  { id: 10, src: B02, category: "Events & Conferences", title: "Medical Event" },
];

const categories = ["All", "Clinic & Hospital", "Events & Conferences", "Awards & Achievements"];

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
      <section className="relative overflow-hidden bg-pink-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(244,114,182,0.22),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-pink-200">
              <span className="h-px w-10 bg-pink-300" />
              Dr. Vandana Bansal
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              A glimpse into our
              <span className="block text-pink-200">journey of care</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-pink-100/80 sm:text-lg">
              Explore moments from clinical practice, professional events,
              conferences and achievements.
            </p>
          </div>

          {/* <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-white/15 pt-6 text-white">
            <div>
              <p className="text-2xl font-semibold">{galleryItems.length}+</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-pink-100/60">Moments</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">3</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-pink-100/60">Categories</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">Care</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-pink-100/60">At heart</p>
            </div>
          </div> */}
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
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
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
              className="group relative mb-5 block w-full overflow-hidden rounded-2xl bg-white text-left shadow-sm ring-1 ring-slate-200/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
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
