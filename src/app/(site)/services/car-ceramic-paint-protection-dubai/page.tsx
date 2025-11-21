import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Ceramic Paint Protection Dubai | Crystal Shine Auto Center",
  description:
    "Professional car ceramic paint protection in Dubai. Long-lasting gloss, UV resistance, and easier maintenance for your vehicle.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Ceramic Paint Protection Dubai"
        desc="Advanced <span>ceramic paint protection</span> for long-lasting gloss and easier maintenance."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Ceramic Paint Protection in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Our ceramic protection packages create a durable, hydrophobic layer on your clear coat,
                locking in a deep gloss while helping your paint resist UV damage, chemical etching,
                and everyday contamination. Ideal for Dubai's harsh sun and dusty roads.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Long-lasting ceramic layer that helps protect against UV fading, oxidation, and
                  environmental fallout.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Hydrophobic surface that repels water and dirt, making regular washes faster and safer
                  for your paintwork.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Intense gloss and depth that keeps your vehicle looking freshly detailed for much
                  longer than traditional waxes.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Recommended maintenance wash plans to maximize the lifespan and performance of your
                  ceramic coating.
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