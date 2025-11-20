import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ceramic Coating in Dubai | Crystal Shine Auto Center",
    description: "Premium ceramic coating services in Dubai. Long-lasting protection with advanced ceramic coating technology for a brilliant, mirror-like finish."
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png"
                heading="Ceramic Coating in Dubai"
                desc="Long-lasting protection with advanced ceramic coating technology for a brilliant, mirror-like finish" />

            <section className="py-20 md:py-40">
                <div className="container">
                    <div className="flex flex-col gap-11">
                        <div className="flex flex-col gap-5">
                            <h2 className="max-w-3xl">Why Choose Ceramic Coating?</h2>
                            <p className="max-w-2xl text-secondary-text/70 dark:text-white/70">
                                Ceramic coating provides superior protection against environmental contaminants, UV rays, and minor scratches while giving your vehicle a stunning, glossy finish that lasts for years.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Basic Package</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Single layer ceramic coating with 2-year warranty</p>
                                <p className="text-2xl font-bold text-primary">AED 1,500</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Premium Package</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Multi-layer ceramic coating with 5-year warranty</p>
                                <p className="text-2xl font-bold text-primary">AED 3,000</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Ultimate Package</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Professional-grade ceramic coating with lifetime warranty</p>
                                <p className="text-2xl font-bold text-primary">AED 5,000</p>
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