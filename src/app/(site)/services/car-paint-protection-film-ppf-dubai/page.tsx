import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Paint Protection Film (PPF) Dubai | Crystal Shine Auto Center",
  description:
    "Professional PPF installation in Dubai to protect your car paint from stone chips, scratches, and harsh road debris.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Paint Protection Film (PPF) Dubai"
        desc="Invisible <span>paint protection film</span> to guard against stone chips, scratches, and road rash."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Paint Protection Film (PPF) Installation in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Our PPF installations are designed to shield high-impact areas or your entire vehicle from physical damage
                while preserving the original factory colour. Ideal for Dubai's fast roads, construction zones, and harsh sand.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Self-healing top coat that can reduce the appearance of fine scratches and swirl marks
                  with heat from the sun or warm water.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Excellent protection against stone chips, sand blasting, road debris, and minor abrasions
                  on bumpers, bonnets, mirrors, and more.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Custom coverage options including front-end kits, track packages, and full-body wraps
                  depending on your driving style and needs.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Professionally installed films with carefully tucked edges where possible for a cleaner,
                  less visible finish.
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