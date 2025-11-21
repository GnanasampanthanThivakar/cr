import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Polishing / Detailing / Valet in Dubai | Crystal Shine Auto Center",
  description:
    "Professional car polishing, detailing, and valet services in Dubai. Multi-stage polishing and full valet to refresh your vehicle inside and out.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Polishing / Detailing / Valet in Dubai"
        desc="Comprehensive <span>polishing and detailing</span> packages to refresh your car inside and out."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Car Polishing, Detailing & Valet in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Our detailing packages combine exterior machine polishing, interior cleaning, and professional
                finishing to restore pride of ownership. Ideal for daily drivers, luxury vehicles, and weekend toys.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Multi-stage machine polishing to enhance gloss and reduce the visibility of light swirl marks,
                  haze, and minor defects in the clear coat.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Thorough exterior wash and decontamination, including wheels, tyres, door jambs, and trims,
                  to prepare the paint for polishing and protection.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Interior valet with vacuuming, wipe-down, glass cleaning, and light dressing to restore a neat,
                  fresh look to the cabin.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Optional upgrades such as ceramic protection, interior deep cleaning, or wheel detailing for
                  a more complete transformation.
                </p>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <a
                href="/booking"
                className="bg-primary hover:bg-primary/90 text-secondary font-bold py-3 px-8 rounded-full transition-colors"
              >
                Book This Service
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}