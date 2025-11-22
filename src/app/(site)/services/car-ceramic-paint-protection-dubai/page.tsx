import Herobanner from "@/app/components/shared/hero-banner";
import NavigationLink from "@/app/components/shared/navigation-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Ceramic Paint Protection Dubai | Crystal Shine Auto Center",
  description:
    "Professional car ceramic paint protection in Dubai. Long-lasting gloss, UV resistance, and easier maintenance for your vehicle.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/services/ceramic/hero.png"
        heading="Car Ceramic Paint Protection Dubai"
        desc="Advanced <span>ceramic paint protection</span> for long-lasting gloss and easier maintenance."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Ceramic Paint Protection in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  Our ceramic protection packages create a durable, hydrophobic layer on your clear coat,
                  locking in a deep gloss while helping your paint resist UV damage, chemical etching,
                  and everyday contamination. Ideal for Dubai's harsh sun and dusty roads.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: UV Protection */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/ceramic/uv-shield.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">UV & Environmental Shield</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Long-lasting ceramic layer that helps protect against UV fading, oxidation, and
                    environmental fallout.
                  </p>
                </div>
              </div>

              {/* Card 2: Hydrophobic */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/ceramic/hydrophobic.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Hydrophobic Effect</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Hydrophobic surface that repels water and dirt, making regular washes faster and safer
                    for your paintwork.
                  </p>
                </div>
              </div>

              {/* Card 3: Gloss */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/ceramic/deep-gloss.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Deep Gloss</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Intense gloss and depth that keeps your vehicle looking freshly detailed for much
                    longer than traditional waxes.
                  </p>
                </div>
              </div>

              {/* Card 4: Maintenance */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300 border border-white/10 hover:border-[#E50914]/50">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/ceramic/maintenance.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Maintenance Plans</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Recommended maintenance wash plans to maximize the lifespan and performance of your
                    ceramic coating.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 mt-10">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Why Choose Crystal Shine for Ceramic Coating?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Certified Installers:</strong> Our team is trained and certified in applying professional-grade ceramic coatings for maximum durability.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Premium Products:</strong> We use only top-tier ceramic formulations that offer superior hardness and longevity compared to consumer-grade products.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <p className="text-white/80"><strong>Warranty Protection:</strong> Enjoy peace of mind with our warranty-backed packages that guarantee the performance of your coating.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">Benefits of Ceramic Paint Protection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Extreme Gloss</h4>
                    <p className="text-white/70">Enhances the depth and clarity of your paint, giving it a permanent "wet look" shine.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">UV Resistance</h4>
                    <p className="text-white/70">Prevents paint oxidation and fading caused by Dubai's harsh sun and UV rays.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Chemical Resistance</h4>
                    <p className="text-white/70">Protects against bird droppings, tree sap, and road salts that can etch your clear coat.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Self-Cleaning Effect</h4>
                    <p className="text-white/70">Dirt and grime slide off easily, keeping your car cleaner for longer and making washes effortless.</p>
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