import Herobanner from "@/app/components/shared/hero-banner";
import NavigationLink from "@/app/components/shared/navigation-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Cement and Tar Removal Dubai | Crystal Shine Auto Center",
  description:
    "Safe car cement and tar removal in Dubai. Professional removal of construction fallout, road tar, and bonded contaminants without damaging your clear coat.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/services/polishing/hero.png" // Placeholder
        heading="Car Cement and Tar Removal Dubai"
        desc="Safe <span>cement and tar removal</span> for vehicles exposed to construction and road works."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Car Cement & Tar Removal in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Construction zones, fresh road works, and heavy traffic can leave stubborn cement, tar,
                  and overspray bonded to your paint, glass, and wheels. We remove these safely using
                  specialist chemicals and techniques that respect your clear coat.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Assessment */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/machine.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Damage Assessment</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Assessment of affected panels to determine the safest combination of chemicals and
                    methods for removal.
                  </p>
                </div>
              </div>

              {/* Card 2: Chemical Removal */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/machine.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Safe Removal</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Use of specialist tar and cement removers to soften and break down bonded
                    contamination without harsh sanding.
                  </p>
                </div>
              </div>

              {/* Card 3: Gentle Techniques */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/protection.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Surface Safety</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Gentle techniques to protect clear coat, trims, and glass from scratching during the
                    removal process.
                  </p>
                </div>
              </div>

              {/* Card 4: Follow-up */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/hero.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Finish & Protect</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Recommended follow-up polishing and protection to restore gloss and help guard
                    against future contamination.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-10">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Why Choose Crystal Shine for Cement & Tar Removal?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Safe Chemical Removal:</strong> We use specialized dissolving agents that break down cement and tar without harming your paintwork.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Paint Depth Analysis:</strong> We assess your paint's condition to ensure our removal methods are safe and effective.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Complete Decontamination:</strong> We remove every trace of fallout from paint, glass, wheels, and plastic trims.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Benefits of Professional Decontamination</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Restores Smoothness</h4>
                    <p className="text-white/70">Removes the rough, gritty texture caused by bonded contaminants, leaving your paint glass-smooth.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Prevents Permanent Damage</h4>
                    <p className="text-white/70">Cement and bird droppings can etch into the clear coat if left untreated; we remove them before they cause lasting harm.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Prepares for Polishing</h4>
                    <p className="text-white/70">A perfectly clean surface is essential before any machine polishing or ceramic coating application.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Safe for All Surfaces</h4>
                    <p className="text-white/70">Our methods are safe for matte paints, PPF, and vinyl wraps as well as standard gloss finishes.</p>
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