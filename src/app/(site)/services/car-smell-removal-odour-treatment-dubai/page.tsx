import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Smell Removal and Odour Treatment Dubai | Crystal Shine Auto Center",
  description:
    "Professional car smell removal and odour treatment in Dubai. Permanent solutions for smoke, food, pet, and moisture smells.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/services/polishing/hero.png" // Placeholder
        heading="Car Smell Removal and Odour Treatment Dubai"
        desc="Professional <span>car odour removal</span> for smoke, food, pet, and moisture smells."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Car Smell & Odour Treatment in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Instead of masking bad odours with perfume, we locate and neutralize the real source
                  using professional-grade cleaners and odour removal systems. Ideal for smoke, food,
                  pet, and moisture smells common in Dubai's climate.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Targeted Cleaning */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/vacuuming.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Targeted Cleaning</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Targeted cleaning of carpets, seats, headliner, and air vents where odours
                    typically build up and linger over time.
                  </p>
                </div>
              </div>

              {/* Card 2: Neutralization */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/machine.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Odour Neutralization</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Use of odour-neutralizing treatments designed to break down smell-causing
                    molecules rather than simply covering them.
                  </p>
                </div>
              </div>

              {/* Card 3: Specialized Solutions */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/hero.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Specialized Solutions</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Solutions tailored for cigarette smoke, shisha, mould, food spills, and pet
                    odours, adjusted to the level of contamination.
                  </p>
                </div>
              </div>

              {/* Card 4: Prevention */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/protection.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Prevention Advice</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Advice on ventilation and maintenance to help prevent odours from returning after
                    treatment.
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