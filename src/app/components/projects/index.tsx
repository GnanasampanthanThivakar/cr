import { getAllProjects } from "@/lib/markdown";
import Link from "next/link";

const ProjectList = () => {
    // Static gallery data for car detailing transformations
    const galleryItems = [
        {
            title: "BMW M5 Ceramic Coating",
            slug: "bmw-m5-ceramic-coating",
            services: ["Ceramic Coating", "Interior Detailing"],
            coverImage: "/images/gallary/campbell-3ZUsNJhi_Ik-unsplash.jpg",
            description: "Complete ceramic coating transformation with interior restoration"
        },
        {
            title: "Mercedes G-Wagon PPF",
            slug: "mercedes-g-wagon-ppf",
            services: ["Paint Protection Film", "Wheel Protection"],
            coverImage: "/images/gallary/hyundai-motor-group-V1DFo8C4JPA-unsplash.jpg",
            description: "Full body PPF protection for luxury SUV"
        },
        {
            title: "Audi R8 Interior Restoration",
            slug: "audi-r8-interior-restoration",
            services: ["Interior Detailing", "Leather Conditioning"],
            coverImage: "/images/gallary/josh-berquist-_4sWbzH5fp8-unsplash.jpg",
            description: "Premium interior detailing and leather restoration"
        },
        {
            title: "Porsche 911 Paintless Dent Removal",
            slug: "porsche-911-dent-removal",
            services: ["Paintless Dent Removal", "Paint Correction"],
            coverImage: "/images/gallary/lance-asper-N9Pf2J656aQ-unsplash.jpg",
            description: "Expert PDR service restoring perfect bodywork"
        },
        {
            title: "Lamborghini Huracan Alloy Repair",
            slug: "lamborghini-huracan-alloy-repair",
            services: ["Alloy Wheel Repair", "Ceramic Coating"],
            coverImage: "/images/gallary/rishab-lamichhane-iflRMZelx0M-unsplash.jpg",
            description: "Wheel restoration and protection for supercar"
        },
        {
            title: "Range Rover Engine Bay Detailing",
            slug: "range-rover-engine-bay-detailing",
            services: ["Engine Bay Cleaning", "Ceramic Coating"],
            coverImage: "/images/gallary/campbell-3ZUsNJhi_Ik-unsplash.jpg",
            description: "Professional engine bay detailing and protection"
        }
    ];

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
                                        <p className="text-secondary-text/70 dark:text-white/70 text-sm">{item.description}</p>
                                        <div className="flex gap-3">
                                            {item.services.map((service, serviceIndex) => {
                                                return (
                                                    <p key={serviceIndex} className="text-base hover:bg-primary border border-secondary/12 dark:border-white/12 dark:hover:text-secondary-text w-fit py-1 px-4 rounded-full">{service}</p>
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
