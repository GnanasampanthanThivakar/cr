import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Headliner / Roof Cloth Repair Dubai | Crystal Shine Auto Center",
  description:
    "Professional car headliner and roof cloth repair in Dubai. Fix sagging, damaged, or detached roof linings to a factory-like finish.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Headliner / Roof Cloth Repair Dubai"
        desc="Expert <span>headliner and roof cloth repair</span> to fix sagging or detached interiors."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Car Headliner & Roof Cloth Repair in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Heat, humidity, and age can cause the roof cloth in your vehicle to sag, bubble, or
                peel away from the ceiling. Our repair process removes the failing material and
                restores a clean, tight finish that transforms the way your interior looks and feels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Careful removal of the sagging or loose headliner material and degraded foam
                  backing to prepare a solid surface.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Use of high-temperature adhesives and appropriate materials designed to withstand
                  Dubai's climate without quickly failing again.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Neat, ripple-free installation that follows the original curves and contours of
                  the roof lining and pillars.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Options for colour matching close to original trims to keep your interior looking
                  consistent and factory-correct.
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