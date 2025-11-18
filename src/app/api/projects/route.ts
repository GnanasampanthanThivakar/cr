
import { NextResponse } from "next/server";

export const dynamic = "error";

export async function GET() {
  // Static gallery data for car detailing transformations
  const projects = [
    {
      title: "BMW M5 Ceramic Coating",
      slug: "bmw-m5-ceramic-coating",
      ScopeOfWork: ["Ceramic Coating", "Interior Detailing"],
      industry: "Luxury Car Detailing",
      coverImage: "/images/gallary/campbell-3ZUsNJhi_Ik-unsplash.jpg"
    },
    {
      title: "Mercedes G-Wagon PPF",
      slug: "mercedes-g-wagon-ppf",
      ScopeOfWork: ["Paint Protection Film", "Wheel Protection"],
      industry: "Luxury SUV Detailing",
      coverImage: "/images/gallary/hyundai-motor-group-V1DFo8C4JPA-unsplash.jpg"
    },
    {
      title: "Audi R8 Interior Restoration",
      slug: "audi-r8-interior-restoration",
      ScopeOfWork: ["Interior Detailing", "Leather Conditioning"],
      industry: "Sports Car Detailing",
      coverImage: "/images/gallary/josh-berquist-_4sWbzH5fp8-unsplash.jpg"
    },
    {
      title: "Porsche 911 Paintless Dent Removal",
      slug: "porsche-911-dent-removal",
      ScopeOfWork: ["Paintless Dent Removal", "Paint Correction"],
      industry: "Supercar Detailing",
      coverImage: "/images/gallary/lance-asper-N9Pf2J656aQ-unsplash.jpg"
    },
    {
      title: "Lamborghini Huracan Alloy Repair",
      slug: "lamborghini-huracan-alloy-repair",
      ScopeOfWork: ["Alloy Wheel Repair", "Ceramic Coating"],
      industry: "Exotic Car Detailing",
      coverImage: "/images/gallary/rishab-lamichhane-iflRMZelx0M-unsplash.jpg"
    },
    {
      title: "Range Rover Engine Bay Detailing",
      slug: "range-rover-engine-bay-detailing",
      ScopeOfWork: ["Engine Bay Cleaning", "Ceramic Coating"],
      industry: "Luxury SUV Detailing",
      coverImage: "/images/gallary/campbell-3ZUsNJhi_Ik-unsplash.jpg"
    }
  ];

  return NextResponse.json(projects);
}
