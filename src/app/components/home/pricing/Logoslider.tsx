"use client";

import React from "react";
import Slider from "react-infinite-logo-slider";
import {
  SiMercedes,
  SiBmw,
  SiAudi,
  SiFerrari,
  SiLamborghini,
  SiPorsche,
  SiJaguar,
  SiBentley,
  SiRollsroyce,
  SiAstonmartin,
  SiMaserati,
  SiMclaren,
  SiBugatti,
  SiLandrover,
  SiInfiniti,
  SiAlfaromeo,
  SiCadillac,
  SiVolvo,
  SiMini,
  SiTesla,
  SiChrysler,
  SiPolestar,
  SiToyota,
  SiNissan,
  SiHonda,
  SiHyundai,
  SiKia,
  SiSuzuki,
  SiChevrolet,
  SiJeep,
  SiGeneralmotors,
  SiPeugeot,
  SiRenault,
  SiSkoda,
  SiSeat,
  SiFiat,
  SiOpel,
  SiCitroen,
  SiTata,
  SiSubaru,
  SiMazda,
  SiFord,
  SiVolkswagen,
  SiMitsubishi,
} from "react-icons/si";

// Small wrapper to render icons
const LogoIcon = ({
  Icon,
  size = 48,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  size?: number;
}) => <Icon size={size} className="text-black dark:text-white" />;

// Car brands array
const BRANDS = [
  { name: "Mercedes", Icon: SiMercedes },
  { name: "BMW", Icon: SiBmw },
  { name: "Audi", Icon: SiAudi },
  { name: "Ferrari", Icon: SiFerrari },
  { name: "Lamborghini", Icon: SiLamborghini },
  { name: "Porsche", Icon: SiPorsche },
  { name: "Bentley", Icon: SiBentley },
  { name: "Rolls Royce", Icon: SiRollsroyce },
  { name: "Aston Martin", Icon: SiAstonmartin },
  { name: "Maserati", Icon: SiMaserati },
  { name: "McLaren", Icon: SiMclaren },
  { name: "Bugatti", Icon: SiBugatti },
  { name: "Land Rover", Icon: SiLandrover },
  { name: "Infiniti", Icon: SiInfiniti },
  { name: "Alfa Romeo", Icon: SiAlfaromeo },
  { name: "Cadillac", Icon: SiCadillac },
  { name: "Volvo", Icon: SiVolvo },
  { name: "Mini", Icon: SiMini },
  { name: "Tesla", Icon: SiTesla },
  { name: "Polestar", Icon: SiPolestar },
  { name: "Chrysler", Icon: SiChrysler },
  { name: "Toyota", Icon: SiToyota },
  { name: "Nissan", Icon: SiNissan },
  { name: "Honda", Icon: SiHonda },
  { name: "Hyundai", Icon: SiHyundai },
  { name: "Kia", Icon: SiKia },
  { name: "Suzuki", Icon: SiSuzuki },
  { name: "Chevrolet", Icon: SiChevrolet },
  { name: "Jeep", Icon: SiJeep },
  { name: "GMC", Icon: SiGeneralmotors },
  { name: "Peugeot", Icon: SiPeugeot },
  { name: "Renault", Icon: SiRenault },
  { name: "Skoda", Icon: SiSkoda },
  { name: "Seat", Icon: SiSeat },
  { name: "Fiat", Icon: SiFiat },
  { name: "Opel", Icon: SiOpel },
  { name: "Citroën", Icon: SiCitroen },
  
  { name: "Subaru", Icon: SiSubaru },
  { name: "Mazda", Icon: SiMazda },
  { name: "Ford", Icon: SiFord },
  { name: "Volkswagen", Icon: SiVolkswagen },
  { name: "Mitsubishi", Icon: SiMitsubishi },
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
