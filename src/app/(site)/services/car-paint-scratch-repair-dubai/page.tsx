import Herobanner from "@/app/components/shared/hero-banner";
import NavigationLink from "@/app/components/shared/navigation-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Paint Scratch Repair Dubai | Crystal Shine Auto Center",
  description:
    "Professional car paint scratch repair in Dubai. Targeted correction and refinement to reduce or eliminate visible marks and blemishes.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/services/polishing/hero.png" // Placeholder
        heading="Car Paint Scratch Repair Dubai"
        desc="Targeted <span>paint scratch repair</span> to reduce or eliminate visible marks on your vehicle."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Car Paint Scratch Repair in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Not every scratch needs a full repaint. We inspect the damage and choose the safest
                  method — from machine polishing to careful touch-up — to improve appearance while
                  respecting the integrity of your factory paint.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Inspection */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/vacuuming.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Damage Inspection</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Inspection of scratch depth to determine whether it is within the clear coat or has
                    cut into the base colour or primer.
                  </p>
                </div>
              </div>

              {/* Card 2: Polishing */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/machine.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Machine Polishing</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Machine polishing and spot correction to safely remove or reduce light-to-moderate
                    clear coat scratches and swirl marks.
                  </p>
                </div>
              </div>

              {/* Card 3: Touch Up */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/hero.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Touch-Up</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Careful use of touch-up methods where deeper damage cannot be fully polished
                    without compromising the paint system.
                  </p>
                </div>
              </div>

              {/* Card 4: Protection */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/protection.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Protection</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Optional protection after correction, such as wax, sealant, or ceramic coating, to
                    help maintain gloss and reduce future marking.
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