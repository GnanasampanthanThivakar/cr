import Herobanner from "@/app/components/shared/hero-banner";
import NavigationLink from "@/app/components/shared/navigation-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Headliner / Roof Cloth Repair Dubai | Crystal Shine Auto Center",
  description:
    "Professional car headliner and roof cloth repair in Dubai. Fix sagging, damaged, or detached roof linings to a factory-like finish.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/services/polishing/hero.png" // Placeholder
        heading="Car Headliner / Roof Cloth Repair Dubai"
        desc="Expert <span>headliner and roof cloth repair</span> to fix sagging or detached interiors."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Car Headliner & Roof Cloth Repair in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Heat, humidity, and age can cause the roof cloth in your vehicle to sag, bubble, or
                  peel away from the ceiling. Our repair process removes the failing material and
                  restores a clean, tight finish that transforms the way your interior looks and feels.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Preparation */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/vacuuming.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Surface Prep</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Careful removal of the sagging or loose headliner material and degraded foam
                    backing to prepare a solid surface.
                  </p>
                </div>
              </div>

              {/* Card 2: Adhesives */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/machine.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">High-Temp Adhesives</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Use of high-temperature adhesives and appropriate materials designed to withstand
                    Dubai's climate without quickly failing again.
                  </p>
                </div>
              </div>

              {/* Card 3: Installation */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/protection.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Factory Finish</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Neat, ripple-free installation that follows the original curves and contours of
                    the roof lining and pillars.
                  </p>
                </div>
              </div>

              {/* Card 4: Colour Match */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/hero.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Colour Matching</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Options for colour matching close to original trims to keep your interior looking
                    consistent and factory-correct.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-10">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Why Choose Crystal Shine for Headliner Repair?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Factory Fabric Match:</strong> We source high-quality fabrics that closely match your vehicle's original headliner in texture and colour.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>High-Temp Adhesives:</strong> We use industrial-grade, heat-resistant adhesives specifically designed to withstand Dubai's extreme summer temperatures.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Expert Trimmers:</strong> Our technicians are skilled in handling complex roof shapes, sunroofs, and pillar trims for a seamless finish.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Benefits of Headliner Repair</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Restores Interior Look</h4>
                    <p className="text-white/70">Eliminates the unsightly sagging cloth that makes your car look old and neglected.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Fixes Sagging</h4>
                    <p className="text-white/70">Prevents the headliner from touching your head while driving, improving comfort and visibility.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Increases Resale Value</h4>
                    <p className="text-white/70">A well-maintained interior is crucial for getting a good price when selling your vehicle.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Durable Repair</h4>
                    <p className="text-white/70">Done correctly, a headliner replacement can last for many years, even in hot climates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}