import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Car Detailing Services in Dubai | Crystal Shine Auto Center",
    description: "Explore our full range of professional car detailing, ceramic coating, PPF, interior cleaning, and restoration services in Dubai.",
};

const services = [
    {
        slug: "car-interior-cleaning-dubai",
        title: "Car Interior Cleaning Dubai",
        description: "Complete interior detailing including vacuuming, steam cleaning, and surface treatment to restore a fresh, hygienic cabin.",
    },
    {
        slug: "car-ceramic-paint-protection-dubai",
        title: "Car Ceramic Paint Protection Dubai",
        description: "Advanced ceramic coating that delivers long-lasting gloss, UV protection, and easier maintenance for your vehicle's paint.",
    },
    {
        slug: "car-paint-protection-film-ppf-dubai",
        title: "Car Paint Protection Film (PPF) Dubai",
        description: "High-performance PPF installation to protect your paint from stone chips, scratches, and harsh road debris.",
    },
    {
        slug: "car-seat-shampoo-stain-removal-dubai",
        title: "Car Seat Shampoo and Stain Removal Dubai",
        description: "Deep shampoo and extraction treatment to remove stains, spills, and embedded dirt from fabric and leather seats.",
    },
    {
        slug: "car-smell-removal-odour-treatment-dubai",
        title: "Car Smell Removal and Odour Treatment Dubai",
        description: "Specialized odour neutralization targeting smoke, food, pet, and moisture smells for a clean, fresh-smelling cabin.",
    },
    {
        slug: "car-leather-seat-cleaning-dubai",
        title: "Car Leather Seat Cleaning Dubai",
        description: "Gentle yet effective leather cleaning and conditioning to revive colour, softness, and protection on all leather surfaces.",
    },
    {
        slug: "car-headliner-roof-cloth-repair-dubai",
        title: "Car Headliner / Roof Cloth Repair Dubai",
        description: "Professional repair and refitting of sagging or damaged roof cloth and headliners to factory-like finish.",
    },
    {
        slug: "car-polishing-detailing-valet-dubai",
        title: "Car Polishing / Detailing / Valet in Dubai",
        description: "Multi-stage polishing and full valet service to enhance gloss, remove light defects, and refresh your vehicle inside and out.",
    },
    {
        slug: "car-cement-tar-removal-dubai",
        title: "Car Cement and Tar Removal Dubai",
        description: "Safe and thorough removal of cement, tar, and construction fallout without damaging your car's clear coat.",
    },
    {
        slug: "car-leather-seat-repair-dubai",
        title: "Car Leather Seat Repair",
        description: "Restorative leather repair for cracks, scuffs, and minor damage to bring your seats back to a premium look.",
    },
    {
        slug: "car-paint-scratch-repair-dubai",
        title: "Car Paint Scratch Repair",
        description: "Targeted scratch correction and paint refinement to reduce or eliminate visible marks and blemishes.",
    },
    {
        slug: "vomit-pet-mess-clean-up-dubai",
        title: "Vomit / Pet Mess Clean Up",
        description: "Emergency bio-cleaning service to safely remove vomit, pet mess, and bacteria with deep sanitization and odour removal.",
    },
];

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png"
                heading="Car Detailing Services in Dubai"
                desc="Premium <span>car care and protection</span> services tailored for Dubai's demanding conditions."
            />

            <section className="py-20 md:py-40">
                <div className="container">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4 max-w-3xl">
                            <h2>Complete Car Care Under One Roof</h2>
                            <p className="text-secondary/70 dark:text-white/70">
                                From deep interior sanitation to advanced ceramic paint protection and PPF, our specialists deliver tailored
                                solutions to keep your vehicle looking, smelling, and feeling like new.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {services.map((service) => (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="group h-full"
                                >
                                    <div className="h-full border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-4 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm transition-transform transition-colors duration-200 group-hover:-translate-y-1 group-hover:border-primary/60">
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                        <p className="text-secondary/70 dark:text-white/70 text-sm md:text-base">
                                            {service.description}
                                        </p>
                                        <span className="mt-auto inline-flex items-center gap-2 text-primary font-semibold">
                                            Learn More
                                            <span aria-hidden="true">↗</span>
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}