import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alloy Wheel Repair in Dubai | Crystal Shine Auto Center",
    description: "Professional wheel restoration and repair services to bring your wheels back to like-new condition."
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png"
                heading="Alloy Wheel Repair in Dubai"
                desc="Professional wheel restoration and repair services to bring your wheels back to like-new condition" />

            <section className="py-20 md:py-40">
                <div className="container">
                    <div className="flex flex-col gap-11">
                        <div className="flex flex-col gap-5">
                            <h2 className="max-w-3xl">Restore Your Wheels to Perfection</h2>
                            <p className="max-w-2xl text-secondary-text/70 dark:text-white/70">
                                Our expert technicians use advanced techniques to repair curb damage, scratches, and corrosion, saving you from expensive wheel replacements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Single Wheel</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Complete repair for one damaged wheel</p>
                                <p className="text-2xl font-bold text-primary">AED 300</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Set of 4 Wheels</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Repair all four wheels with discount</p>
                                <p className="text-2xl font-bold text-primary">AED 1,000</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Diamond Cut Refinish</h3>
                                <p className="text-secondary-text/70 dark:text-white/70">Complete refinishing for diamond cut wheels</p>
                                <p className="text-2xl font-bold text-primary">AED 800</p>
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