"use client";
import { blogs } from "@/app/api/blogs-data/data";
import BlogCard from "@/app/components/blog/blog-card";
import Link from "next/link";

const Resources = () => {
    const latestBlogs = blogs.slice(0, 3);

    return (
        <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-14 xl:gap-24">
                            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                    <span className="bg-primary text-white py-1.5 px-2.5 text-base font-medium rounded-full">09</span>
                                    <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                    <p className="section-bedge py-1.5 px-4 rounded-full">Latest News</p>
                                </div>
                                <div className="flex flex-col gap-11">
                                    <div className="flex flex-col gap-5 ">
                                        <h2 className="max-w-3xl">Latest News</h2>
                                        <p className="max-w-2xl text-secondary/70 dark:text-white/70">Stay updated with the latest car detailing tips, product reviews, and Crystal Shine news from Dubai's premier auto detailing center.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {latestBlogs.map((blog) => (
                                    <BlogCard key={blog.id} blog={blog} />
                                ))}
                            </div>
                            <div className="flex justify-center">
                                <Link
                                    href="/blogs"
                                    className="inline-flex items-center justify-center px-8 py-4 border border-white/20 rounded-full text-white font-medium hover:bg-primary hover:border-primary transition-all duration-300"
                                >
                                    View All News
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resources;
