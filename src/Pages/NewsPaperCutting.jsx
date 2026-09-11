import React, { useState } from "react";

import A from "../assets/NewsPapers/A.jpg";
import B from "../assets/NewsPapers/B.jpg";
import C from "../assets/NewsPapers/C.jpg";
import D from "../assets/NewsPapers/D.jpg";
import E from "../assets/NewsPapers/E.jpg";
import F from "../assets/NewsPapers/F.jpg";
import G from "../assets/NewsPapers/G.jpg";
import H from "../assets/NewsPapers/H.jpg";
import I from "../assets/NewsPapers/I.jpg";
import J from "../assets/NewsPapers/J.jpg";
import K from "../assets/NewsPapers/K.jpg";
import L from "../assets/NewsPapers/L.jpg";
import M from "../assets/NewsPapers/M.jpg";
import N from "../assets/NewsPapers/N.jpg";
import O from "../assets/NewsPapers/O.jpg";

import {
    X,
    ChevronLeft,
    ChevronRight,
    Maximize2,
} from "lucide-react";

import { Helmet } from "react-helmet";

const NewsPaperCutting = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const data = [
        { imageLink: A },
        { imageLink: B },
        { imageLink: C },
        { imageLink: D },
        { imageLink: E },
        { imageLink: F },
        { imageLink: G },
        { imageLink: H },
        { imageLink: I },
        { imageLink: J },
        { imageLink: K },
        { imageLink: L },
        { imageLink: M },
        { imageLink: N },
        { imageLink: O },
    ];

    // Open image
    const openImage = (index) => {
        setSelectedImage(index);
    };

    // Close image
    const closeImage = () => {
        setSelectedImage(null);
    };

    // Previous image
    const previousImage = (e) => {
        e.stopPropagation();

        setSelectedImage((prev) =>
            prev === 0 ? data.length - 1 : prev - 1
        );
    };

    // Next image
    const nextImage = (e) => {
        e.stopPropagation();

        setSelectedImage((prev) =>
            prev === data.length - 1 ? 0 : prev + 1
        );
    };

    // Keyboard navigation
    React.useEffect(() => {

        const handleKeyDown = (e) => {

            if (selectedImage === null) return;

            if (e.key === "Escape") {
                closeImage();
            }

            if (e.key === "ArrowLeft") {
                setSelectedImage((prev) =>
                    prev === 0 ? data.length - 1 : prev - 1
                );
            }

            if (e.key === "ArrowRight") {
                setSelectedImage((prev) =>
                    prev === data.length - 1 ? 0 : prev + 1
                );
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, [selectedImage]);

    return (
        <>
            <Helmet>

                <title>
                    In News | Dr. Vandana Bansal
                </title>

                <meta
                    name="description"
                    content="Explore newspaper features, media coverage and recognition of Dr. Vandana Bansal."
                />

                <meta
                    name="keywords"
                    content="Dr Vandana Bansal news, Dr Vandana Bansal recognition, gynecologist Prayagraj, women healthcare"
                />

                <meta
                    property="og:title"
                    content="In News | Dr. Vandana Bansal"
                />

                <meta
                    property="og:description"
                    content="Explore media coverage and recognition of Dr. Vandana Bansal."
                />

            </Helmet>


            {/* =========================
                SECTION
            ========================== */}

            <section className="bg-white py-8 md:py-12">

                {/* Heading */}

                <div className="mx-auto mb-8 max-w-7xl px-5 md:px-10">

                    <div className="flex items-center gap-3">

                        <span className="h-[2px] w-10 bg-pink-800"></span>

                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-800">
                            Media & Recognition
                        </span>

                    </div>

                    <h1 className="mt-2 font-serif text-2xl font-semibold text-gray-800 md:text-4xl">
                        Recognition
                    </h1>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
                        Dr. Vandana Bansal's work and contribution to women's
                        healthcare have been featured across various media
                        platforms.
                    </p>

                </div>


                {/* =========================
                    IMAGE GRID
                ========================== */}

                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-10">

                    {data.map(({ imageLink }, index) => (

                        <div
                            key={index}
                            onClick={() => openImage(index)}
                            className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl"
                        >

                            <div className="relative overflow-hidden rounded-lg bg-gray-100">

                                <img
                                    src={imageLink}
                                    alt={`Dr. Vandana Bansal newspaper recognition ${index + 1}`}
                                    loading="lazy"
                                    className="h-64 w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                />


                                {/* Hover Overlay */}

                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                                    <div className="flex w-full items-center justify-between p-4">

                                        <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-pink-800 shadow">
                                            Media Recognition
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-pink-800 shadow-lg">
                                            <Maximize2 size={16} />
                                        </span>

                                    </div>

                                </div>

                            </div>


                            {/* Bottom Accent */}

                            <div className="mx-auto mt-2 h-1 w-0 rounded-full bg-pink-800 transition-all duration-500 group-hover:w-16"></div>

                        </div>

                    ))}

                </div>

            </section>


            {/* =========================
                LIGHTBOX
            ========================== */}

            {selectedImage !== null && (

                <div
                    onClick={closeImage}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                >

                    {/* Close Button */}

                    <button
                        onClick={closeImage}
                        className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-pink-800"
                        aria-label="Close image"
                    >
                        <X size={24} />
                    </button>


                    {/* Image Counter */}

                    <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                        {selectedImage + 1} / {data.length}
                    </div>


                    {/* Previous Button */}

                    <button
                        onClick={previousImage}
                        className="absolute left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-pink-800 md:left-6"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={28} />
                    </button>


                    {/* Main Image */}

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative flex max-h-[92vh] max-w-[92vw] items-center justify-center"
                    >

                        <img
                            src={data[selectedImage].imageLink}
                            alt={`Dr. Vandana Bansal newspaper recognition ${selectedImage + 1}`}
                            className="max-h-[88vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
                        />

                    </div>


                    {/* Next Button */}

                    <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-pink-800 md:right-6"
                        aria-label="Next image"
                    >
                        <ChevronRight size={28} />
                    </button>


                    {/* Bottom Hint */}

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs text-gray-200 backdrop-blur-md">
                        Click outside to close
                    </div>

                </div>

            )}

        </>
    );
};

export default NewsPaperCutting;

