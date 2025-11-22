import { Blog } from "@/app/api/blogs-data/data";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }: { blog: Blog }) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
            <div className="relative h-60 w-full overflow-hidden">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span>{blog.author}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blogs/${blog.id}`}>
                        <span className="absolute inset-0" />
                        {blog.title}
                    </Link>
                </h3>

                <p className="text-white/70 line-clamp-3 mb-6 flex-grow">
                    {blog.summary}
                </p>

                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Read Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
