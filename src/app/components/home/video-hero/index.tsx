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
        </div>
      </div>
    </section>
  );
}
