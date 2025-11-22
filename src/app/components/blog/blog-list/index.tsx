"use client";
import { getAllBlogs } from "@/lib/blogmarkdown";
import Image from "next/image";
import Link from "next/link";

const BlogList = () => {
    type Blog = {
        title: string;
        slug: string;
        date: string;
        coverImage: string;
        excerpt?: string;
    };

    const Blogs: Blog[] = getAllBlogs(["title", "slug", "coverImage", "date", "excerpt"]);

    return (
        <section className="bg-secondary py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-24">
                        {/* Header Section - matching Services component style */}
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span className="bg-primary py-1.5 px-2.5 text-base font-medium rounded-full text-white">
                                    05
                                </span>
                                <div className="h-px w-16 bg-white/12" />
                                <p className="text-base font-medium text-secondary bg-white py-1.5 px-4 rounded-full">
                                    Insights & Updates
                                </p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5">
                                    <h2 className="max-w-3xl text-white">Expert Car Detailing Tips & Industry News</h2>
                                    <p className="max-w-2xl text-white/70">
                                        Stay informed with professional advice, latest trends, and insights from Dubai's premium car care specialists.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Blog Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {Blogs.map((value, index) => {
                                const formattedDate = new Date(value.date).toLocaleDateString("en-US", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                });

                                return (
                                    <Link 
                                        href={`/blog/${value.slug}`} 
                                        key={index} 
                                        className="group flex flex-col h-full"
                                    >
                                        <div className="flex flex-col gap-5 h-full border-t border-white/12 pt-6 hover:border-primary/50 transition-colors duration-300">
                                            <div className="w-full h-60 overflow-hidden relative">
                                                <Image
                                                    src={value.coverImage}
                                                    alt={value.title}
                                                    width={805}
                                                    height={450}
                                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                                            </div>
                                            <div className="flex flex-col gap-3 flex-grow">
                                                <span className="text-sm text-white/60">{formattedDate}</span>
                                                <h3 className="text-white group-hover:text-primary transition-colors line-clamp-2">{value.title}</h3>
                                                {value.excerpt && (
                                                    <p className="text-white/70 text-base line-clamp-3">{value.excerpt}</p>
                                                )}
                                                <div className="flex items-center text-primary font-medium mt-auto">
                                                    Read Article
                                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogList;
