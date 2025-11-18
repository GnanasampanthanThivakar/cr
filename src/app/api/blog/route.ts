export const dynamic = "force-static";

import { NextResponse } from "next/server";

export async function GET() {
  // Static blog data for car detailing
  const blogs = [
    {
      title: "The Ultimate Guide to Ceramic Coating in Dubai",
      slug: "ceramic-coating-guide-dubai",
      excerpt: "Everything you need to know about ceramic coating services in Dubai, including benefits, costs, and maintenance tips.",
      coverImage: "/images/gallary/campbell-3ZUsNJhi_Ik-unsplash.jpg",
      date: "2024-01-15",
      author: "Crystal Shine Team",
      tags: ["Ceramic Coating", "Paint Protection", "Maintenance"]
    },
    {
      title: "Paint Protection Film vs Ceramic Coating: Which is Better?",
      slug: "ppf-vs-ceramic-coating",
      excerpt: "Compare PPF and ceramic coating to determine which protection method is best for your vehicle in Dubai's climate.",
      coverImage: "/images/gallary/hyundai-motor-group-V1DFo8C4JPA-unsplash.jpg",
      date: "2024-01-10",
      author: "Crystal Shine Team",
      tags: ["PPF", "Ceramic Coating", "Comparison"]
    },
    {
      title: "How to Maintain Your Car's Interior in Dubai's Climate",
      slug: "car-interior-maintenance-dubai",
      excerpt: "Essential tips for keeping your car's interior pristine in Dubai's hot and humid climate conditions.",
      coverImage: "/images/gallary/josh-berquist-_4sWbzH5fp8-unsplash.jpg",
      date: "2024-01-05",
      author: "Crystal Shine Team",
      tags: ["Interior Detailing", "Maintenance", "Climate"]
    }
  ];

  return NextResponse.json(blogs);
}
