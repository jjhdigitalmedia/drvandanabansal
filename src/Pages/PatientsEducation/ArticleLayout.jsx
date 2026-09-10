import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Articles } from "./ArticleList.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ArticleLayout() {
    const { slug } = useParams();

    // console.log(slug+"skgh")
    const blog = Articles.find((item) => `${item.slug}` === slug);

    console.log(blog)
    const [search, setSearch] = useState("");


    if (!blog) {
        return <h1 className="text-center py-20">Blog Not Found</h1>;
    }

    const BlogComponent = blog.component;

    const relatedBlogs = Articles.filter(
        (item) =>
            item.id !== blog.id &&
            item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto py-16 px-5">

            {/* Top Layout */}

            <div className="grid lg:grid-cols-10 gap-10">

                {/* Left 70% */}

                <div className="lg:col-span-7">

                    <BlogComponent />

                </div>

                {/* Right 30% */}

                <div className="lg:col-span-3">

                    {/* Search */}

                    <input
                        type="text"
                        placeholder="Search article..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full border rounded-lg p-3 mb-8"
                    />

                    {/* Related Articles */}

                    <h2 className="text-2xl font-bold mb-5">
                        Related Articles
                    </h2>

                    <div className="space-y-4">
                        {relatedBlogs.slice(0, 5).map((item) => (
                            <Link
                                key={item.id}
                                to={`/patients-education/${item.slug}`}
                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition border border-gray-100"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                                />

                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>

            </div>

            {/* Learn More */}

            <section className="mt-20">
                <h2 className="text-4xl font-bold mb-8">
                    Learn More
                </h2>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    loop={true}
                    spaceBetween={20}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {Articles
                        .filter((item) => item.id !== blog.id)
                        .map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link
                                    to={`/patients-education/${item.slug}`}
                                    className="block bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />

                                    <div className="p-4">
                                        <h3 className="font-semibold text-lg line-clamp-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                                            {item.description}
                                        </p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </section>

        </div>
    );
}