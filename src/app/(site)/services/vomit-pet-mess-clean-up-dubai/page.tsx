import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vomit / Pet Mess Clean Up Dubai | Crystal Shine Auto Center",
  description:
    "Specialized vomit and pet mess clean up in Dubai. Bio-cleaning, deep sanitization, and odour removal to make your cabin safe and fresh again.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/services/polishing/hero.png" // Placeholder
        heading="Vomit / Pet Mess Clean Up Dubai"
        desc="Specialized <span>bio-cleaning and sanitization</span> for vomit and pet mess in your vehicle."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Vomit & Pet Mess Clean Up in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Accidents from children, passengers, or pets can leave serious biological contamination
                  inside your vehicle. We treat these incidents with professional bio-cleaning processes
                  to restore hygiene and remove odours at the source.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Extraction */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/vacuuming.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Immediate Extraction</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Immediate containment and extraction of affected liquids and residues from seats,
                    carpets, and underlay where possible.
                  </p>
                </div>
              </div>

              {/* Card 2: Bio-Cleaning */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/machine.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Bio-Cleaning Agents</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Use of dedicated bio-cleaning agents to target bacteria, proteins, and organic
                    matter left behind by vomit or pet mess.
                  </p>
                </div>
              </div>

              {/* Card 3: Sanitization */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/polishing/hero.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Deep Sanitization</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Deep cleaning and sanitization of the affected area to help prevent staining,
                    lingering odour, and bacterial growth.
                  </p>
                </div>
              </div>

              {/* Card 4: Odour Removal */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/protection.png')" }} // Placeholder
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Odour Neutralization</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Odour treatment to neutralize smells at a molecular level, leaving the cabin clean
                    and comfortable again.
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