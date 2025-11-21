import Herobanner from "@/app/components/shared/hero-banner";
import NavigationLink from "@/app/components/shared/navigation-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Interior Cleaning Dubai | Crystal Shine Auto Center",
  description:
    "Deep car interior cleaning in Dubai to restore a fresh, hygienic cabin with vacuuming, steam cleaning, and surface treatment.",
};

export default function Page() {
  return (
    <main>
      <Herobanner
        bannerimage="/images/services/interior/hero.png"
        heading="Car Interior Cleaning Dubai"
        desc="Deep <span>car interior cleaning</span> in Dubai to restore a fresh, hygienic cabin."
      />

      <section className="py-20 md:py-40 bg-[#273338]">
        <div className="container">
          <div className="flex flex-col gap-11">
            {/* Intro Section - About Us Style Split Layout */}
            <div className="flex flex-col xl:flex-row gap-8">
              <div className="max-w-xl w-full">
                <h2 className="text-56 text-white leading-tight">Premium Car Interior Cleaning in Dubai</h2>
              </div>
              <div className="flex flex-col gap-5 max-w-2xl">
                <p className="text-white/70 text-lg leading-relaxed">
                  We remove dust, sand, spills, and hidden contaminants from every surface of your
                  cabin using professional tools and interior-safe chemicals. Our process is designed
                  for Dubai's conditions, where heat, sand, and daily use can quickly make interiors
                  look and feel tired.
                </p>
              </div>
            </div>

            {/* Image Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1: Vacuuming */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/vacuuming.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Deep Vacuuming</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Full interior vacuuming including seats, carpets, mats, trunk, and hard-to-reach
                    areas to lift dust, sand, and loose debris.
                  </p>
                </div>
              </div>

              {/* Card 2: Steam Cleaning */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/steam.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Steam Sanitization</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Steam cleaning and agitation to loosen embedded dirt and sanitize high-touch
                    surfaces such as steering wheel, gear knob, and door handles.
                  </p>
                </div>
              </div>

              {/* Card 3: Dashboard */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/dashboard.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Trim Dressing</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Dashboard, center console, and interior trims carefully cleaned and dressed for a
                    factory-fresh appearance without greasy shine.
                  </p>
                </div>
              </div>

              {/* Card 4: Protection */}
              <div className="relative h-80 overflow-hidden group transition-all duration-300">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: "url('/images/services/interior/protection.png')" }}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-8 md:p-10 flex flex-col justify-end">
                  <h3 className="text-white text-2xl font-bold mb-3">Protection & Freshness</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Optional add-ons like fabric protection and odour treatment to keep your interior
                    fresher for longer.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <NavigationLink
                navigationTitle="Book This Service"
                navigationLink="/booking"
                transform={true}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}