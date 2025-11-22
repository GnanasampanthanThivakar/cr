import Herobanner from "@/app/components/shared/hero-banner";
import NavigationLink from "@/app/components/shared/navigation-link";
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

            <div className="flex flex-col gap-8 mt-10">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Why Choose Crystal Shine for Odour Removal?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Source Elimination:</strong> We don't just spray perfume; we find and remove the source of the smell, whether it's trapped in the AC or upholstery.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Safe Neutralizers:</strong> Our ozone and enzyme treatments are safe for your car's interior and effective against organic and chemical odours.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Comprehensive Treatment:</strong> We treat the entire cabin, including headliners, carpets, and ventilation systems, to ensure no smell lingers.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Benefits of Professional Odour Treatment</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Fresh Cabin</h4>
                    <p className="text-white/70">Restores a neutral, clean scent to your vehicle, making every drive more pleasant.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Healthier Air</h4>
                    <p className="text-white/70">Eliminates bacteria, mould spores, and allergens that can cause respiratory issues.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Removes Smoke</h4>
                    <p className="text-white/70">Highly effective at removing stubborn cigarette and shisha smoke smells from fabrics.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Long-Lasting Results</h4>
                    <p className="text-white/70">By removing the source, we ensure the bad smell doesn't return after a few days.</p>
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