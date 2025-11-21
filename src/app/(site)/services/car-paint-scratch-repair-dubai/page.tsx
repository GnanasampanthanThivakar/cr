import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Paint Scratch Repair Dubai | Crystal Shine Auto Center",
  description:
    "Professional car paint scratch repair in Dubai. Targeted correction and refinement to reduce or eliminate visible marks and blemishes.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Paint Scratch Repair Dubai"
        desc="Targeted <span>paint scratch repair</span> to reduce or eliminate visible marks on your vehicle."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Car Paint Scratch Repair in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Not every scratch needs a full repaint. We inspect the damage and choose the safest
                method — from machine polishing to careful touch-up — to improve appearance while
                respecting the integrity of your factory paint.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Inspection of scratch depth to determine whether it is within the clear coat or has
                  cut into the base colour or primer.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Machine polishing and spot correction to safely remove or reduce light-to-moderate
                  clear coat scratches and swirl marks.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Careful use of touch-up methods where deeper damage cannot be fully polished
                  without compromising the paint system.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Optional protection after correction, such as wax, sealant, or ceramic coating, to
                  help maintain gloss and reduce future marking.
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