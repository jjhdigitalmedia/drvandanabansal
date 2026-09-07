import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    ArrowRight,
    CalendarDays,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Articles } from './ArticleList.js'

// const articles = [
//     {
//         id: 1,
//         title: "Healthy Pregnancy Diet: Foods Every Mother Should Eat",
//         description:
//             "Discover the best nutrition tips and foods that support a healthy pregnancy for both mother and baby.",
//         image:
//             "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900",
//         category: "Pregnancy",
//         date: "12 Mar 2026",
//         link: 'patients-education'
//     },
//     {
//         id: 2,
//         title: "PCOS Symptoms Every Woman Should Know",
//         description:
//             "Understand the early signs of PCOS, treatment options, and lifestyle changes for better health.",
//         image:
//             "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900",
//         category: "Women's Health",
//         date: "18 Mar 2026",
//         link: 'pcos-symptoms'
//     },
//     {
//         id: 3,
//         title: "Preparing Yourself for a Normal Delivery",
//         description:
//             "Simple exercises, healthy habits, and preparation tips to make childbirth easier.",
//         image:
//             "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900",
//         category: "Delivery",
//         date: "22 Mar 2026",
//         link: 'patients-education'
//     },
//     {
//         id: 4,
//         title: "Importance of Regular Gynecological Checkups",
//         description:
//             "Routine gynecological visits help detect health issues early and ensure overall wellness.",
//         image:
//             "https://images.unsplash.com/photo-1584515933487-779824d29309?w=900",
//         category: "Gynecology",
//         date: "26 Mar 2026",
//         link: 'patients-education'
//     },
//     {
//         id: 5,
//         title: "Common Infertility Myths You Should Stop Believing",
//         description:
//             "Separate myths from facts and understand the real causes of infertility.",
//         image:
//             "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900",
//         category: "IVF",
//         date: "30 Mar 2026",
//         link: 'patients-education'
//     },
//     {
//         id: 6,
//         title: "Post Pregnancy Care Guide for New Mothers",
//         description:
//             "Recovery tips, nutrition advice, and emotional wellness after childbirth.",
//         image:
//             "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=900",
//         category: "Mother Care",
//         date: "05 Apr 2026",
//         link: 'patients-education'
//     },
//     {
//         id: 7,
//         title: "Best Exercises During Pregnancy",
//         description:
//             "Safe workouts that improve flexibility, reduce pain, and prepare your body for delivery.",
//         image:
//             "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900",
//         category: "Fitness",
//         date: "08 Apr 2026",
//         link: 'patients-education'
//     },
//     {
//         id: 8,
//         title: "Breastfeeding Tips for First-Time Mothers",
//         description:
//             "Everything you need to know about breastfeeding and caring for your newborn.",
//         image:
//             "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=900",
//         category: "Mother Care",
//         date: "12 Apr 2026",
//         link: 'patients-education'
//     },
//     {
//         id: 9,
//         title: "Understanding Menstrual Health",
//         description:
//             "Know what's normal, when to seek medical advice, and how to maintain hormonal balance.",
//         image:
//             "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=900",
//         category: "Women's Health",
//         date: "16 Apr 2026",
//         link: 'patients-education'
//     },
// ];

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