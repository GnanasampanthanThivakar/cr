import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Leather Seat Cleaning Dubai | Crystal Shine Auto Center",
  description:
    "Professional car leather seat cleaning in Dubai. Gentle cleaning and conditioning to revive colour, softness, and protection.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Leather Seat Cleaning Dubai"
        desc="Gentle <span>leather seat cleaning</span> and conditioning to revive colour and softness."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Leather Seat Cleaning in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Dubai's heat, dust, and daily use can dry out and stain leather seats. We use pH-balanced
                leather cleaners and premium conditioners to safely remove grime while restoring a natural,
                supple finish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Careful cleaning to lift body oils, dye transfer, and built-up dirt from leather surfaces
                  without stripping essential oils.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Use of soft brushes and microfiber applicators to reach stitching, perforations, and seat
                  contours safely.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Conditioning treatments to restore suppleness, help prevent cracking, and keep leather more
                  comfortable in extreme temperatures.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Optional leather protection coatings that make future cleaning faster and help resist fresh
                  stains and dye transfer.
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