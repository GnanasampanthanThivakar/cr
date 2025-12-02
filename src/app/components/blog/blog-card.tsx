import { Blog } from "@/app/api/blogs-data/data";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog, variant = "default" }: { blog: Blog; variant?: "primary" | "secondary" | "default" }) => {
    return (
        <Link
            href={`/blogs/${blog.id}`}
            className="group flex flex-col h-full"
        >
            <div className="flex flex-col gap-5 h-full border-t border-white/12 pt-6 hover:border-primary/50 transition-colors duration-300">
                <div className="relative h-60 w-full overflow-hidden">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                </div>

                <div className="flex flex-col gap-3 flex-grow">
                    <div className="flex items-center gap-4 text-sm text-white/60">
                        <span>{blog.date}</span>
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        <span>{blog.author}</span>
                    </div>

                    <h3 className="text-white group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                    </h3>

                    <p className="text-white/70 text-base line-clamp-3 flex-grow">
                        {blog.summary}
                    </p>

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
};

export default BlogCard;
