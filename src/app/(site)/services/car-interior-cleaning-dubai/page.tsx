import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Interior Cleaning Dubai | Crystal Shine Auto Center",
  description:
    "Deep car interior cleaning in Dubai to restore a fresh, hygienic cabin with vacuuming, steam cleaning, and surface treatment.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Interior Cleaning Dubai"
        desc="Deep <span>car interior cleaning</span> in Dubai to restore a fresh, hygienic cabin."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Premium Car Interior Cleaning in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                We remove dust, sand, spills, and hidden contaminants from every surface of your
                cabin using professional tools and interior-safe chemicals. Our process is designed
                for Dubai's conditions, where heat, sand, and daily use can quickly make interiors
                look and feel tired.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Full interior vacuuming including seats, carpets, mats, trunk, and hard-to-reach
                  areas to lift dust, sand, and loose debris.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Steam cleaning and agitation to loosen embedded dirt and sanitize high-touch
                  surfaces such as steering wheel, gear knob, and door handles.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Dashboard, center console, and interior trims carefully cleaned and dressed for a
                  factory-fresh appearance without greasy shine.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Optional add-ons like fabric protection and odour treatment to keep your interior
                  fresher for longer.
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