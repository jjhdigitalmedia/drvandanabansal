import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    CalendarDays,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Articles } from './ArticleList.js'

export default function PatientEducation() {
    const currentPage = 1;
    const cardsPerPage = 6;

    const totalPages = Math.ceil(Articles.length / cardsPerPage);

    const [page, setPage] = useState(currentPage);

    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    const currentArticles = Articles.slice(startIndex, endIndex);

    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="mb-14 text-center">

                    <span className="rounded-full bg-[#f1f1f1] px-4 py-2 font-serif text-sm font-semibold uppercase tracking-widest text-gray-600">
                        Patient Education
                    </span>

                    <h2 className="mt-5 text-4xl font-serif text-pink-700 md:text-5xl">
                        Women's Health Resources
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-gray-600">
                        Explore expert advice, pregnancy tips, gynecology care,
                        fertility guidance and women's wellness articles by
                        <span className="font-semibold text-pink-800">
                            {" "}
                            Dr. Vandana Bansal
                        </span>
                        .
                    </p>

                </div>

                {/* Cards Grid */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {currentArticles.map((article) => (

                        <div
                            key={article.id}
                            className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {/* Image */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute left-4 top-4 rounded-full bg-pink-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
                                    {article.category}
                                </div>

                            </div>

                            {/* Card Content */}

                            <div className="p-6">

                                <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">

                                    <CalendarDays size={16} />

                                    {article.date}

                                </div>

                                <h3 className="mb-4 text-2xl font-bold leading-snug text-slate-900 transition group-hover:text-pink-800">
                                    {article.title}
                                </h3>

                                <p className="mb-6 line-clamp-3 text-gray-600">
                                    {article.description}
                                </p>

                                {/* Continue in Part 2 */}

                                <Link to={article.link} className="flex items-center gap-2 font-semibold text-pink-800 transition-all duration-300 group-hover:gap-4">
                                    Read Article
                                    {/* <ArrowRight size={18} /> */}
                                </Link>

                            </div>
                        </div>

                    ))}

                </div>

                {/* Pagination */}

                <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-8 sm:flex-row">

                    <button
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                        className={`flex items-center gap-2 rounded-xl border px-6 py-3 font-medium transition-all ${page === 1
                            ? "cursor-not-allowed border-gray-200 text-gray-400"
                            : "border-pink-200 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-800"
                            }`}
                    >
                        <ChevronLeft size={18} />
                        Previous
                    </button>

                    <div className="flex items-center gap-2">

                        {[...Array(totalPages)].map((_, index) => {

                            const pageNumber = index + 1;

                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => setPage(pageNumber)}
                                    className={`h-11 w-11 rounded-full font-semibold transition-all ${page === pageNumber
                                        ? "bg-pink-800 text-white shadow-lg"
                                        : "border border-gray-300 text-gray-700 hover:border-pink-800 hover:text-pink-700"
                                        }`}
                                >
                                    {pageNumber}
                                </button>
                            );

                        })}

                    </div>

                    <button
                        onClick={() =>
                            setPage((prev) => Math.min(prev + 1, totalPages))
                        }
                        disabled={page === totalPages}
                        className={`flex items-center gap-2 rounded-xl px-6 py-3 font-medium transition-all ${page === totalPages
                            ? "cursor-not-allowed bg-pink-200 text-white"
                            : "bg-pink-800 text-white hover:bg-pink-700"
                            }`}
                    >
                        Next
                        <ChevronRight size={18} />
                    </button>

                </div>

            </div>
        </section>
    );
}