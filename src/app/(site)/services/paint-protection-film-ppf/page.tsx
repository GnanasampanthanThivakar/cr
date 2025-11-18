import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Paint Protection Film (PPF) in Dubai | Crystal Shine Auto Center",
    description: "Premium PPF services in Dubai. Invisible protection against scratches, chips, and road debris using premium XPEL films."
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/about-us/banner/aboutus-banner.png"
                heading="Paint Protection Film (PPF) in Dubai"
                desc="Invisible protection against scratches, chips, and road debris using premium XPEL films" />

            <section className="py-20 md:py-40">
                <div className="container">
                    <div className="flex flex-col gap-11">
                        <div className="flex flex-col gap-5">
                            <h2 className="max-w-3xl">Complete Vehicle Protection</h2>
                            <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                                Our XPEL-certified PPF installation provides invisible protection for your vehicle's paintwork, ensuring it stays pristine against everyday hazards.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Partial PPF</h3>
                                <p className="text-secondary/70 dark:text-white/70">Front bumper, hood, and mirrors protection</p>
                                <p className="text-2xl font-bold text-primary">AED 2,500</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Full Front</h3>
                                <p className="text-secondary/70 dark:text-white/70">Complete front end protection including headlights</p>
                                <p className="text-2xl font-bold text-primary">AED 4,500</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold">Full Body PPF</h3>
                                <p className="text-secondary/70 dark:text-white/70">Complete vehicle protection with 10-year warranty</p>
                                <p className="text-2xl font-bold text-primary">AED 12,000</p>
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