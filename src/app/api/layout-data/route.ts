import { NextResponse } from "next/server";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 4,
    title: "Gallery",
    path: "/projects",
    newTab: false,
  },
  {
    id: 5,
    title: "Blogs",
    path: "/blogs",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  }
];

const footerData = {
  name: "Crystal Shine Auto Center",
  tagline: "Crystal Shine Auto Center | Dubai's Premium Car Detailing Experts",
  info: [
    {
      icon: "/images/footer/email-arrow.svg",
      link: "polishdubai@gmail.com",
      href: "mailto:polishdubai@gmail.com"
    },
    {
      icon: "/images/footer/Location.svg",
      link: "Exit 45, Sheikh Zayed Road Dubai, Near The Oasis Center Mall, Dubai, U.A.E.",
      href: "https://maps.app.goo.gl/dubai-location"
    },
    {
      icon: "/images/footer/up-arrow.svg",
      link: "+971 – 50 – 428 8468",
      href: "tel:+971504288468"
    },
    {
      icon: "/images/footer/up-arrow.svg",
      link: "+971 – 4 – 338 3303",
      href: "tel:+97143383303"
    }
  ],
  links: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Gallery", href: "/projects" },
    { name: "Contact", href: "/contact" }
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/crystalshineautocenter" },
    { name: "Instagram", href: "https://www.instagram.com/crystalshineautocenter" },
    { name: "WhatsApp", href: "https://wa.me/971XXXXXXXXX" }
  ],
  copyright: "© Crystal Shine Auto Center 2025. All rights reserved."
};

export const dynamic = "force-static";

export const GET = async () => {
  return NextResponse.json({
    footerData,
    MenuData
  });
};