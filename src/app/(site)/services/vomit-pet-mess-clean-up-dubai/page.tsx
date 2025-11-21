import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vomit / Pet Mess Clean Up Dubai | Crystal Shine Auto Center",
  description:
    "Specialized vomit and pet mess clean up in Dubai. Bio-cleaning, deep sanitization, and odour removal to make your cabin safe and fresh again.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/about-us/banner/aboutus-banner.png"
        heading="Vomit / Pet Mess Clean Up Dubai"
        desc="Specialized <span>bio-cleaning and sanitization</span> for vomit and pet mess in your vehicle."
      />

      <section className="py-20 md:py-40">
        <div className="container">
          <div className="flex flex-col gap-11">
            <div className="flex flex-col gap-5 max-w-3xl">
              <h2>Vomit & Pet Mess Clean Up in Dubai</h2>
              <p className="text-secondary/70 dark:text-white/70">
                Accidents from children, passengers, or pets can leave serious biological contamination
                inside your vehicle. We treat these incidents with professional bio-cleaning processes
                to restore hygiene and remove odours at the source.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Immediate containment and extraction of affected liquids and residues from seats,
                  carpets, and underlay where possible.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Use of dedicated bio-cleaning agents to target bacteria, proteins, and organic
                  matter left behind by vomit or pet mess.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Deep cleaning and sanitization of the affected area to help prevent staining,
                  lingering odour, and bacterial growth.
                </p>
              </div>
              <div className="border border-black/5 dark:border-white/10 rounded-3xl p-6 md:p-8 bg-white/80 dark:bg-secondary/40 backdrop-blur-sm">
                <p className="text-secondary/80 dark:text-white/80">
                  Odour treatment to neutralize smells at a molecular level, leaving the cabin clean
                  and comfortable again.
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