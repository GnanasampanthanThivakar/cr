import Herobanner from "@/app/components/shared/hero-banner";
import NavigationLink from "@/app/components/shared/navigation-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Leather Seat Cleaning Dubai | Crystal Shine Auto Center",
  description:
    "Professional car leather seat cleaning in Dubai. Gentle cleaning and conditioning to revive colour, softness, and protection.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/services/polishing/hero.png" // Placeholder
        heading="Car Leather Seat Cleaning Dubai"
        desc="Gentle <span>leather seat cleaning</span> and conditioning to revive colour and softness."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Leather Seat Cleaning in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Dubai's heat, dust, and daily use can dry out and stain leather seats. We use pH-balanced
                  leather cleaners and premium conditioners to safely remove grime while restoring a natural,
                  supple finish.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Deep Clean */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/vacuuming.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Deep Cleaning</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Careful cleaning to lift body oils, dye transfer, and built-up dirt from leather surfaces
                    without stripping essential oils.
                  </p>
                </div>
              </div>

              {/* Card 2: Gentle Tools */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/machine.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Gentle Tools</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Use of soft brushes and microfiber applicators to reach stitching, perforations, and seat
                    contours safely.
                  </p>
                </div>
              </div>

              {/* Card 3: Conditioning */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/protection.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Conditioning</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Conditioning treatments to restore suppleness, help prevent cracking, and keep leather more
                    comfortable in extreme temperatures.
                  </p>
                </div>
              </div>

              {/* Card 4: Protection */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/hero.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Protection</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Optional leather protection coatings that make future cleaning faster and help resist fresh
                    stains and dye transfer.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-10">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Why Choose Crystal Shine for Leather Cleaning?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>pH Balanced Cleaners:</strong> We use safe, pH-neutral cleaners that effectively remove dirt without damaging the leather's protective top coat.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Premium Conditioners:</strong> Our conditioners penetrate deep into the pores to nourish the leather and keep it soft and flexible.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Gentle Process:</strong> We use soft brushes and microfiber towels to clean delicate leather without causing scratches or wear.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Benefits of Professional Leather Cleaning</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Softens Leather</h4>
                    <p className="text-white/70">Restores the natural softness and suppleness of your leather seats.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Prevents Cracking</h4>
                    <p className="text-white/70">Regular conditioning keeps the leather hydrated, preventing it from drying out and cracking in the sun.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Removes Grime</h4>
                    <p className="text-white/70">Lifts embedded dirt, body oils, and denim dye transfer that can make leather look dull and dirty.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">UV Protection</h4>
                    <p className="text-white/70">Many of our conditioners include UV blockers to protect your leather from fading and sun damage.</p>
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