import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Interior Detailing in Dubai | Crystal Shine Auto Center",
    description: "Comprehensive interior detailing services to restore and protect your vehicle's cabin."
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png"
                heading="Interior Detailing in Dubai"
                desc="Comprehensive interior detailing services to restore and protect your vehicle's cabin" />

            <section className="py-20 md:py-40">
                <div className="container">
                    <div className="flex flex-col gap-11">
                        <div className="flex flex-col gap-5">
                            <h2 className="max-w-3xl">Transform Your Interior Experience</h2>
                            <p className="max-w-2xl text-secondary-text/70 dark:text-white/70">
                                Deep cleaning and protection for all interior surfaces, leaving your vehicle feeling fresh and looking pristine.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Basic Interior</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Vacuum, wipe down, and basic cleaning</p>
                                <p className="text-2xl font-bold text-primary">AED 250</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Deep Clean</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Steam cleaning, leather conditioning</p>
                                <p className="text-2xl font-bold text-primary">AED 450</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Premium Interior</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Complete restoration with protection</p>
                                <p className="text-2xl font-bold text-primary">AED 750</p>
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