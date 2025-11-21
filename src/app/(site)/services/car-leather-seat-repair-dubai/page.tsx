import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Leather Seat Repair Dubai | Crystal Shine Auto Center",
  description:
    "Professional car leather seat repair in Dubai. Repair cracks, scuffs, and worn bolsters for a premium factory-like finish.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Leather Seat Repair Dubai"
        desc="Professional <span>leather seat repair</span> for cracks, scuffs, and worn bolsters."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Car Leather Seat Repair in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Over time, leather seats can crack, scuff, or wear down on bolsters and high-contact
                areas. Our repair process blends colour, texture, and finish to restore your seats
                while keeping a natural appearance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Repairs for cracks, scuffs, minor tears, and worn edges on seat bolsters and panels.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Careful surface preparation to clean, deglaze, and key the leather before repair
                  products are applied.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Colour-matching techniques to blend the repaired area with surrounding leather so
                  repairs are less noticeable.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Optional protection applied afterwards to slow down future wear in high-contact
                  zones.
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