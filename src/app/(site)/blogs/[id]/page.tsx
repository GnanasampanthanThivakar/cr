import { blogs } from "@/app/api/blogs-data/data";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const blog = blogs.find((b) => b.id === parseInt(resolvedParams.id));
    if (!blog) {
        return {
            title: "Blog Not Found | Crystal Shine Auto Center",
        };
    }
    return {
        title: `${blog.title} | Crystal Shine Auto Center`,
        description: blog.summary,
    };
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id.toString(),
    }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const blog = blogs.find((b) => b.id === parseInt(resolvedParams.id));

    if (!blog) {
        notFound();
    }

    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png" // Reusing About Us banner
                heading="Blog Details"
                desc={blog.title}
            />

            <section className="py-20 md:py-32 bg-[#273338]">
                <div className="container max-w-4xl">
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden p-8 md:p-12">
                        {/* Header Info */}
                        <div className="flex items-center gap-4 mb-8 text-white/60 text-sm md:text-base">
                            <span>{blog.date}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{blog.author}</span>
                        </div>

                        {/* Main Image */}
                        <div className="relative w-full h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div
                            className="prose prose-lg prose-invert max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-p:text-white/80 prose-p:leading-relaxed
                prose-li:text-white/80
                prose-strong:text-white prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
