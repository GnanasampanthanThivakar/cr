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

            <div className="flex flex-col gap-8 mt-10">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Why Choose Crystal Shine for Leather Repair?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Color Matching Technology:</strong> We use advanced colour matching to ensure the repair blends perfectly with your existing leather.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Durable Fillers:</strong> Our flexible fillers and compounds are designed to move with the leather, preventing cracks from reappearing.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Invisible Repairs:</strong> Our goal is to make the damage disappear, restoring the smooth look and feel of your seats.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Benefits of Leather Seat Repair</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Restores Factory Look</h4>
                    <p className="text-white/70">Brings your worn or damaged seats back to a like-new condition.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Prevents Further Damage</h4>
                    <p className="text-white/70">Fixing small cracks and tears now prevents them from spreading and requiring expensive reupholstery.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Cost-Effective</h4>
                    <p className="text-white/70">Repairing is significantly cheaper than replacing the entire seat cover or reupholstering.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Maintains Value</h4>
                    <p className="text-white/70">Preserves the originality and value of your vehicle, especially for luxury and classic cars.</p>
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