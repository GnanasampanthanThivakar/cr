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
        bannerimage="/images/services/polishing/hero.png" // Placeholder
        heading="Car Seat Shampoo and Stain Removal Dubai"
        desc="Targeted <span>seat shampoo and stain removal</span> to revive tired upholstery and leather."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Car Seat Shampoo & Stain Removal in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Daily use, food, drinks, and accidents can leave permanent marks on your seats. Our
                  deep-cleaning process is designed to safely remove stains and refresh the look and feel
                  of both fabric and leather upholstery.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Pre-treatment */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/seat-shampoo/pretreatment.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Stain Pre-treatment</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Pre-treatment of visible stains using carefully selected cleaners matched to the
                    material (fabric, Alcantara, or leather).
                  </p>
                </div>
              </div>

              {/* Card 2: Extraction */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/seat-shampoo/extraction.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Deep Extraction</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Deep shampoo extraction process that pulls out spills, dirt, and residues from within
                    the seat padding and stitching.
                  </p>
                </div>
              </div>

              {/* Card 3: Gentle Drying */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/seat-shampoo/drying.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Gentle Drying</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Gentle techniques to avoid over-wetting, helping seats dry correctly and reducing the
                    risk of odours or mould.
                  </p>
                </div>
              </div>

              {/* Card 4: Protection */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/protection.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Protection</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Optional fabric or leather protection applied afterwards to help resist future
                    staining and make maintenance easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}