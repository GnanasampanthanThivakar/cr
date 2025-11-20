import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engine Bay Cleaning in Dubai | Crystal Shine Auto Center",
    description: "Professional engine bay detailing to remove grease, grime, and restore your engine's appearance."
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png"
                heading="Engine Bay Cleaning in Dubai"
                desc="Professional engine bay detailing to remove grease, grime, and restore your engine's appearance" />

            <section className="py-20 md:py-40">
                <div className="container">
                    <div className="flex flex-col gap-11">
                        <div className="flex flex-col gap-5">
                            <h2 className="max-w-3xl">Show Off Your Engine's Power</h2>
                            <p className="max-w-2xl text-secondary-text/70 dark:text-white/70">
                                Thorough cleaning and detailing of your engine bay to remove built-up grease, oil, and grime while protecting electrical components.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Basic Clean</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Exterior cleaning and degreasing</p>
                                <p className="text-2xl font-bold text-primary">AED 200</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Deep Clean</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Complete detailing with protection coating</p>
                                <p className="text-2xl font-bold text-primary">AED 350</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Show Quality</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Competition-level detailing and protection</p>
                                <p className="text-2xl font-bold text-primary">AED 550</p>
                            </div>
                        </div>

                        <div className="flex justify-center pt-8">
                            <button className="bg-primary hover:bg-primary/90 text-secondary-text font-bold py-3 px-8 rounded-full transition-colors">
                                Book This Service
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};