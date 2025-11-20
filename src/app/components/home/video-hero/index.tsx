"use client";

import Image from "next/image";
import { useState } from "react";

interface Package {
  id: string;
  title: string;
  image: string;
}

const packages: Package[] = [
  {
    id: "1",
    title: "Premium Detailing",
    image: "/images/packages/premium.jpg",
  },
  {
    id: "2",
    title: "Ceramic Coating",
    image: "/images/packages/ceramic.jpg",
  },
  {
    id: "3",
    title: "Interior Care",
    image: "/images/packages/interior.jpg",
  },
  {
    id: "4",
    title: "Paint Protection",
    image: "/images/packages/ppf.jpg",
  },
];

export default function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // You can add video play logic here
  };

  return (
    <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
      <div className="container">
        <div className="flex flex-col gap-20">
          {/* Video Hero Section */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/video-hero/v7.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-20">
              <div className="flex flex-col gap-8 max-w-2xl">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
                  The Art Of <br />Detailing
                </h1>

                {/* Play Button and Controls */}
                <div className="flex items-center gap-4 flex-wrap">
                  <button
                    onClick={handlePlayClick}
                    className="w-14 h-14 md:w-16 md:h-16 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105"
                    aria-label="Play video"
                  >
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path
                        d="M2 2L18 12L2 22V2Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full backdrop-blur-sm transition-all duration-300">
                      + Book Now
                    </button>
                    <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full backdrop-blur-sm transition-all duration-300">
                      Mirror Finish
                    </button>
                    <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full backdrop-blur-sm transition-all duration-300">
                      Swirl-Free
                    </button>
                    <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded-full backdrop-blur-sm transition-all duration-300">
                      Showroom Ready
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Package Section */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                Why Choose Package?
              </h2>
              <p className="text-secondary/70 dark:text-white/70 max-w-3xl">
                Explore our specialized detailing packages designed to meet your specific needs. Each package delivers exceptional results with premium products and expert care.
              </p>
            </div>

            {/* Package Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 ${
                    selectedPackage === pkg.id
                      ? "ring-4 ring-primary"
                      : "hover:ring-2 hover:ring-primary/50"
                  }`}
                >
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-sm md:text-base lg:text-lg font-semibold">
                      {pkg.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
