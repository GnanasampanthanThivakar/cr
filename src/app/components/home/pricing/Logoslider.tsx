"use client";

import React from "react";
import Slider from "react-infinite-logo-slider";

// Icons
import {
  SiMercedes,
  SiBmw,
  SiVolkswagen,
  SiAudi,
  SiFerrari,
  SiLamborghini,
  SiRollsroyce,
  SiMaserati,
  SiBentley,
  SiInfiniti,
  SiAlfaromeo,
  SiCadillac,
  SiPorsche,
  SiToyota,
  SiNissan,
  SiHyundai,
  SiFord,
} from "react-icons/si";

// Wrapper Component for Icons
const LogoIcon = ({
  Icon,
  size = 64,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  size?: number;
}) => <Icon size={size} className="text-black dark:text-white" />;

// Only the brands you listed
const BRANDS = [
  { name: "Mercedes-Benz", Icon: SiMercedes },
  { name: "BMW", Icon: SiBmw },
  { name: "Volkswagen (VW)", Icon: SiVolkswagen },
  { name: "Audi", Icon: SiAudi },
  { name: "Ferrari", Icon: SiFerrari },
  { name: "Lamborghini", Icon: SiLamborghini },
  { name: "Rolls Royce", Icon: SiRollsroyce },
  { name: "Maserati", Icon: SiMaserati },
  { name: "Lexus", Icon: SiToyota }, // Lexus → No icon → Using Toyota
  { name: "Bentley", Icon: SiBentley },
  { name: "Infiniti", Icon: SiInfiniti },
  { name: "Alfa Romeo", Icon: SiAlfaromeo },
  { name: "Cadillac", Icon: SiCadillac },
  { name: "Genesis", Icon: SiHyundai }, // Genesis → No icon → Using Hyundai
  { name: "Porsche", Icon: SiPorsche },
  { name: "Maybach", Icon: SiMercedes }, // Maybach → Mercedes sub-brand
  { name: "Lincoln", Icon: SiFord }, // Lincoln → Ford parent brand
  { name: "Toyota", Icon: SiToyota },
  { name: "Nissan", Icon: SiNissan },
  { name: "Hyundai", Icon: SiHyundai },
];

export default function LuxuryCarSlider() {
  return (
    <div className="w-full py-10 overflow-hidden bg-lightgray dark:bg-secondary">
      <Slider width="200px" duration={40} pauseOnHover blurBorders={false}>
        {BRANDS.map((b, i) => (
          <Slider.Slide key={i}>
            <div className="flex flex-col items-center justify-center px-4 gap-2">
              <LogoIcon Icon={b.Icon} size={64} />
              <p className="text-sm font-medium text-center text-secondary dark:text-white">
                {b.name}
              </p>
            </div>
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
}
