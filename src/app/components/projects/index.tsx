import { getAllProjects } from "@/lib/markdown";
import Link from "next/link";
import { ourWorks } from "@/app/data/ourWorks";

const ProjectList = () => {
    const galleryItems = ourWorks;
    return (
        <section className="dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {galleryItems.map((item, index) => {
                            return (
                                <div key={index} className="flex flex-col gap-5">
                                    <div className="relative group">
                                        <img src={item.coverImage} alt={item.title} className="w-full" />
                                        <div className="absolute top-0 left-0 backdrop-blur-xs bg-black/70 w-full h-full hidden group-hover:flex">
                                            <span className="flex justify-center items-center p-5 w-full">
                                                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.333374" width="64" height="64" rx="32" fill="#C1FF72" />
                                                    <path d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666" stroke="#1F2A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <h3>{item.title}</h3>
                                        <p className="text-secondary/70 dark:text-white/70 text-sm">{item.description}</p>
                                        <div className="flex gap-3">
                                            {item.services.map((service, serviceIndex) => {
                                                return (
                                                    <p key={serviceIndex} className="text-base hover:bg-primary border border-secondary/12 dark:border-white/12 dark:hover:text-secondary w-fit py-1 px-4 rounded-full">{service}</p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ProjectList;
