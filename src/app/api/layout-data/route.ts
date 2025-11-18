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
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 7,
    title: "Booking",
    path: "/booking",
    newTab: false,
  }
];


const footerData = {
    name: "Crystal Shine Auto Center",
    tagline: "Crystal Shine Auto Center | Dubai's Premium Car Detailing Experts",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "info@crystalshine.ae",
            href: "mailto:info@crystalshine.ae"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Dubai, UAE",
            href: "https://maps.app.goo.gl/dubai-location"
        },
        {
            icon: "/images/footer/up-arrow.svg",
            link: "+971 50 123 4567",
            href: "tel:+971501234567"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Gallery", href: "/projects" },
        { name: "Book Now", href: "/booking" },
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