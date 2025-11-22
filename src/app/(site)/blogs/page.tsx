import { blogs } from "@/app/api/blogs-data/data";
import BlogCard from "@/app/components/blog/blog-card";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs & News | Crystal Shine Auto Center",
    description:
        "Stay updated with the latest news, tips, and insights on car detailing, paint protection, and automotive care from Crystal Shine Auto Center.",
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png" // Reusing About Us banner for now as requested to match style
                heading="Blogs & News"
                desc="Latest <span>insights and updates</span> from the world of premium car care."
            />

            <section className="py-20 md:py-32 bg-[#273338]">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
