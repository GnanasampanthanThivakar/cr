import Herobanner from "@/app/components/shared/hero-banner";
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
          </div>
        </div>
      </section>
    </main>
  );
}