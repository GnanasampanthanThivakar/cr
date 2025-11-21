import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Cement and Tar Removal Dubai | Crystal Shine Auto Center",
  description:
    "Safe car cement and tar removal in Dubai. Professional removal of construction fallout, road tar, and bonded contaminants without damaging your clear coat.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Cement and Tar Removal Dubai"
        desc="Safe <span>cement and tar removal</span> for vehicles exposed to construction and road works."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Car Cement & Tar Removal in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Construction zones, fresh road works, and heavy traffic can leave stubborn cement, tar,
                and overspray bonded to your paint, glass, and wheels. We remove these safely using
                specialist chemicals and techniques that respect your clear coat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Assessment of affected panels to determine the safest combination of chemicals and
                  methods for removal.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Use of specialist tar and cement removers to soften and break down bonded
                  contamination without harsh sanding.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Gentle techniques to protect clear coat, trims, and glass from scratching during the
                  removal process.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Recommended follow-up polishing and protection to restore gloss and help guard
                  against future contamination.
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