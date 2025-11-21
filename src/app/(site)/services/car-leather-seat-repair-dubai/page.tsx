import Herobanner from "@/app/components/shared/hero-banner";
import NavigationLink from "@/app/components/shared/navigation-link";
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
        bannerimage="/images/services/polishing/hero.png" // Placeholder
        heading="Car Leather Seat Repair Dubai"
        desc="Professional <span>leather seat repair</span> for cracks, scuffs, and worn bolsters."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Car Leather Seat Repair in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Over time, leather seats can crack, scuff, or wear down on bolsters and high-contact
                  areas. Our repair process blends colour, texture, and finish to restore your seats
                  while keeping a natural appearance.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Cracks & Scuffs */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/protection.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Cracks & Scuffs</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Repairs for cracks, scuffs, minor tears, and worn edges on seat bolsters and panels.
                  </p>
                </div>
              </div>

              {/* Card 2: Prep */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/machine.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Surface Prep</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Careful surface preparation to clean, deglaze, and key the leather before repair
                    products are applied.
                  </p>
                </div>
              </div>

              {/* Card 3: Colour Match */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/hero.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Colour Matching</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Colour-matching techniques to blend the repaired area with surrounding leather so
                    repairs are less noticeable.
                  </p>
                </div>
              </div>

              {/* Card 4: Protection */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/vacuuming.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Protection</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Optional protection applied afterwards to slow down future wear in high-contact
                    zones.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <NavigationLink
                navigationTitle="Book This Service"
                navigationLink="/booking"
                transform={true}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}