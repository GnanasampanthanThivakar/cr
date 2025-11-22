import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Polishing / Detailing / Valet in Dubai | Crystal Shine Auto Center",
  description:
    "Professional car polishing, detailing, and valet services in Dubai. Multi-stage polishing and full valet to refresh your vehicle inside and out.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/services/polishing/hero.png"
        heading="Car Polishing / Detailing / Valet in Dubai"
        desc="Comprehensive <span>polishing and detailing</span> packages to refresh your car inside and out."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Car Polishing, Detailing & Valet in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Our detailing packages combine exterior machine polishing, interior cleaning, and professional
                  finishing to restore pride of ownership. Ideal for daily drivers, luxury vehicles, and weekend toys.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Machine Polishing */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/machine.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Machine Polishing</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Multi-stage machine polishing to enhance gloss and reduce the visibility of light swirl marks,
                    haze, and minor defects in the clear coat.
                  </p>
                </div>
              </div>

              {/* Card 2: Exterior Wash */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/machine.png')" }} // Placeholder: Reusing machine image due to rate limit
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Exterior Detail</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Thorough exterior wash and decontamination, including wheels, tyres, door jambs, and trims,
                    to prepare the paint for polishing and protection.
                  </p>
                </div>
              </div>

              {/* Card 3: Interior Valet */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/vacuuming.png')" }} // Reusing interior image
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Interior Valet</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Interior valet with vacuuming, wipe-down, glass cleaning, and light dressing to restore a neat,
                    fresh look to the cabin.
                  </p>
                </div>
              </div>

              {/* Card 4: Upgrades */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/protection.png')" }} // Reusing protection image
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Optional Upgrades</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Optional upgrades such as ceramic protection, interior deep cleaning, or wheel detailing for
                    a more complete transformation.
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