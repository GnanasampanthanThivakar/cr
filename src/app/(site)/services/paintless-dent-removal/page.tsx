import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Paintless Dent Removal in Dubai | Crystal Shine Auto Center",
    description: "Paint-free dent removal techniques that restore your vehicle's appearance without affecting the original paint."
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png"
                heading="Paintless Dent Removal in Dubai"
                desc="Paint-free dent removal techniques that restore your vehicle's appearance without affecting the original paint" />

            <section className="py-20 md:py-40">
                <div className="container">
                    <div className="flex flex-col gap-11">
                        <div className="flex flex-col gap-5">
                            <h2 className="max-w-3xl">Restore Your Vehicle's Perfect Shape</h2>
                            <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                                Our certified technicians use specialized tools and techniques to remove dents without damaging your vehicle's original paint finish.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Small Dents</h3>
                                <p className="text-secondary/70 dark:text-white/70">Minor dents up to 2 inches in diameter</p>
                                <p className="text-2xl font-bold text-primary">AED 150</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Medium Dents</h3>
                                <p className="text-secondary/70 dark:text-white/70">Dents up to 4 inches, multiple locations</p>
                                <p className="text-2xl font-bold text-primary">AED 300</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Large Panel</h3>
                                <p className="text-secondary/70 dark:text-white/70">Major dent repair for entire panels</p>
                                <p className="text-2xl font-bold text-primary">AED 600</p>
                            </div>
                        </div>

                        <div className="flex justify-center pt-8">
                            <button className="bg-primary hover:bg-primary/90 text-secondary font-bold py-3 px-8 rounded-full transition-colors">
                                Book This Service
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};