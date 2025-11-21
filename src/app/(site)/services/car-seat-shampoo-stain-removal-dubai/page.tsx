import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Seat Shampoo and Stain Removal Dubai | Crystal Shine Auto Center",
  description:
    "Professional car seat shampoo and stain removal in Dubai. Deep cleaning to remove spills, stains, and embedded dirt from fabric and leather seats.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Car Seat Shampoo and Stain Removal Dubai"
        desc="Targeted <span>seat shampoo and stain removal</span> to revive tired upholstery and leather."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Car Seat Shampoo & Stain Removal in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Daily use, food, drinks, and accidents can leave permanent marks on your seats. Our
                deep-cleaning process is designed to safely remove stains and refresh the look and feel
                of both fabric and leather upholstery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Pre-treatment of visible stains using carefully selected cleaners matched to the
                  material (fabric, Alcantara, or leather).
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Deep shampoo extraction process that pulls out spills, dirt, and residues from within
                  the seat padding and stitching.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Gentle techniques to avoid over-wetting, helping seats dry correctly and reducing the
                  risk of odours or mould.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Optional fabric or leather protection applied afterwards to help resist future
                  staining and make maintenance easier.
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