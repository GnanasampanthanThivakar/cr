import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Smell Removal and Odour Treatment Dubai | Crystal Shine Auto Center",
  description:
    "Professional car smell removal and odour treatment in Dubai. Permanent solutions for smoke, food, pet, and moisture smells.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Smell Removal and Odour Treatment Dubai"
        desc="Professional <span>car odour removal</span> for smoke, food, pet, and moisture smells."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Car Smell & Odour Treatment in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Instead of masking bad odours with perfume, we locate and neutralize the real source
                using professional-grade cleaners and odour removal systems. Ideal for smoke, food,
                pet, and moisture smells common in Dubai's climate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Targeted cleaning of carpets, seats, headliner, and air vents where odours
                  typically build up and linger over time.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Use of odour-neutralizing treatments designed to break down smell-causing
                  molecules rather than simply covering them.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Solutions tailored for cigarette smoke, shisha, mould, food spills, and pet
                  odours, adjusted to the level of contamination.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Advice on ventilation and maintenance to help prevent odours from returning after
                  treatment.
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