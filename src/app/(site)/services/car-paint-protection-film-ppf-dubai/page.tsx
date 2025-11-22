import Herobanner from "@/app/components/shared/hero-banner";
import NavigationLink from "@/app/components/shared/navigation-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Paint Protection Film (PPF) Dubai | Crystal Shine Auto Center",
  description:
    "Professional PPF installation in Dubai to protect your car paint from stone chips, scratches, and harsh road debris.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/services/ppf/ppf_hero_new.png"
        heading="Car Paint Protection Film (PPF) Dubai"
        desc="Invisible <span>paint protection film</span> to guard against stone chips, scratches, and road rash."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Paint Protection Film (PPF) Installation in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Our PPF installations are designed to shield high-impact areas or your entire vehicle from physical damage
                  while preserving the original factory colour. Ideal for Dubai's fast roads, construction zones, and harsh sand.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Self Healing */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/ppf/ppf_self_healing_new.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Self-Healing</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Self-healing top coat that can reduce the appearance of fine scratches and swirl marks with heat from the sun or warm water.
                  </p>
                </div>
              </div>

              {/* Card 2: Impact Protection */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/ppf/ppf_impact_protection_new.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Impact Protection</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Excellent protection against stone chips, sand blasting, road debris, and minor abrasions on bumpers, bonnets, mirrors, and more.
                  </p>
                </div>
              </div>

              {/* Card 3: Custom Coverage */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/ppf/ppf_custom_coverage_new.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Custom Coverage</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Custom coverage options including front-end kits, track packages, and full-body wraps depending on your driving style and needs.
                  </p>
                </div>
              </div>

              {/* Card 4: Installation */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/ppf/ppf_expert_installation_new.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Expert Installation</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Professionally installed films with carefully tucked edges where possible for a cleaner, less visible finish.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-10">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Why Choose Crystal Shine for PPF in Dubai?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Climate-Specific Protection:</strong> Our films are specifically engineered to withstand Dubai's extreme heat and UV radiation without yellowing.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Precision Application:</strong> We use advanced plotting software for exact fitment, minimizing razor usage on your vehicle's paint.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Long-Term Warranty:</strong> All our PPF installations come with a comprehensive warranty against peeling, cracking, and discoloration.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Key Benefits of Paint Protection Film</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Resale Value</h4>
                    <p className="text-white/70">Maintains your car's showroom finish, significantly improving resale value.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Cost Savings</h4>
                    <p className="text-white/70">Prevents costly repainting jobs caused by stone chips and minor accidents.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Easy Maintenance</h4>
                    <p className="text-white/70">Hydrophobic properties make washing your car easier and keep it cleaner for longer.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Invisible Shield</h4>
                    <p className="text-white/70">Optically clear film that enhances your paint's gloss without altering its appearance.</p>
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