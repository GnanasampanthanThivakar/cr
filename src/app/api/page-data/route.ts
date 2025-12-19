import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Sarah Johnson"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Olivia Miller"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Sophia Roberts"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Isabella Clark"
    },
];

const statsFactData = {
    number: '01',
    name: "Why Choose Us",
    heading: "Masterpieces Aren't Washed. They Are Curated",
    description: "Dubai's premier aesthetic restoration center. Specializing in Nano-Ceramic protection, bespoke detailing, and interior renewal for the world's finest vehicles.",
    scoreData: [
        {
            number: 10,
            numberValue: '+',
            scoreDescp: "Years of Experience"
        },
        {
            number: 10000,
            numberValue: '+',
            scoreDescp: "Cars Serviced"
        },
        {
            number: 100,
            numberValue: '%',
            scoreDescp: "XPEL Certified Experts"
        },
    ],
};

const servicesData = {
    number: '03',
    name: "Our Services",
    heading: "Specialized Car Detailing & Protection Services in Dubai",
    description: "From deep interior cleaning to ceramic paint protection and PPF, we offer complete solutions to keep your car looking, smelling, and feeling like new.",
    data: [
        {
            id: 1,
            image: "/images/packages/interior.jpg",
            heading: "Car Interior Cleaning Dubai",
            descp: "Complete interior detailing including vacuuming, steam cleaning, and surface treatment to restore a fresh, hygienic cabin.",
            url: "/services/car-interior-cleaning-dubai"
        },
        {
            id: 2,
            image: "/images/packages/ceramic.jpg",
            heading: "Car Ceramic Paint Protection Dubai",
            descp: "Advanced ceramic coating that delivers long-lasting gloss, UV protection, and easier maintenance for your vehicle's paint.",
            url: "/services/car-ceramic-paint-protection-dubai"
        },
        {
            id: 3,
            image: "/images/packages/ppf.jpg",
            heading: "Car Paint Protection Film (PPF) Dubai",
            descp: "High-performance PPF installation to protect your paint from stone chips, scratches, and harsh road debris.",
            url: "/services/car-paint-protection-film-ppf-dubai"
        },
        {
            id: 4,
            image: "/images/home/services/services_1.png",
            heading: "Car Seat Shampoo and Stain Removal Dubai",
            descp: "Deep shampoo and extraction treatment to remove stains, spills, and embedded dirt from fabric and leather seats.",
            url: "/services/car-seat-shampoo-stain-removal-dubai"
        },
        {
            id: 5,
            image: "/images/home/services/services_2.png",
            heading: "Car Smell Removal and Odour Treatment Dubai",
            descp: "Specialized odour neutralization targeting smoke, food, pet, and moisture smells for a clean, fresh-smelling cabin.",
            url: "/services/car-smell-removal-odour-treatment-dubai"
        },
        {
            id: 6,
            image: "/images/home/services/services_3.png",
            heading: "Car Leather Seat Cleaning Dubai",
            descp: "Gentle yet effective leather cleaning and conditioning to revive colour, softness, and protection on all leather surfaces.",
            url: "/services/car-leather-seat-cleaning-dubai"
        },
        {
            id: 7,
            image: "/images/home/services/services_4.png",
            heading: "Car Headliner / Roof Cloth Repair Dubai",
            descp: "Professional repair and refitting of sagging or damaged roof cloth and headliners to factory-like finish.",
            url: "/services/car-headliner-roof-cloth-repair-dubai"
        },
        {
            id: 8,
            image: "/images/packages/premium.jpg",
            heading: "Car Polishing / Detailing / Valet in Dubai",
            descp: "Multi-stage polishing and full valet service to enhance gloss, remove light defects, and refresh your vehicle inside and out.",
            url: "/services/car-polishing-detailing-valet-dubai"
        },
        {
            id: 9,
            image: "/images/home/services/services_1.png",
            heading: "Car Cement and Tar Removal Dubai",
            descp: "Safe and thorough removal of cement, tar, and construction fallout without damaging your car's clear coat.",
            url: "/services/car-cement-tar-removal-dubai"
        },
        {
            id: 10,
            image: "/images/home/services/services_2.png",
            heading: "Car Leather Seat Repair",
            descp: "Restorative leather repair for cracks, scuffs, and minor damage to bring your seats back to a premium look.",
            url: "/services/car-leather-seat-repair-dubai"
        },
        {
            id: 11,
            image: "/images/home/services/services_3.png",
            heading: "Car Paint Scratch Repair",
            descp: "Targeted scratch correction and paint refinement to reduce or eliminate visible marks and blemishes.",
            url: "/services/car-paint-scratch-repair-dubai"
        },
        {
            id: 12,
            image: "/images/home/services/services_4.png",
            heading: "Vomit / Pet Mess Clean Up",
            descp: "Emergency bio-cleaning service to safely remove vomit, pet mess, and bacteria with deep sanitization and odour removal.",
            url: "/services/vomit-pet-mess-clean-up-dubai"
        },
    ]
};

const testimonialData = {
    googleReviews: {
        rating: 4.8,
        count: "1,318",
        text: "Google reviews"
    },
    data_1: {
        preTitle: "Hear from them",
        title: "Crystal Shine transformed my Range Rover with ceramic coating. The protection is unbelievable!",
        author: "Mohammed Al Farsi",
        company: "Range Rover Owner"
    },
    data_2: {
        preTitle: "Hear from them",
        title: "Professional PPF installation on my BMW M5. The team was expert and the finish is showroom perfect!",
        author: "Ahmed Al Mansoori",
        company: "BMW M5 Owner"
    },
    data_3: {
        preTitle: "Hear from them",
        title: "Outstanding alloy wheel repair service. Saved me thousands compared to replacement. Highly recommend!",
        author: "Fatima Al Hashimi",
        company: "Mercedes Owner"
    },
};

const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/team-img-1.png",
            name: "Ahmed Al Mansoori",
            position: "Master Technician & Owner",
            socialLinks: [
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.instagram.com/crystalshineautocenter"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-2.png",
            name: "Mohammed Al Farsi",
            position: "XPEL Certified Specialist",
            socialLinks: [
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.instagram.com/crystalshineautocenter"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-3.png",
            name: "Fatima Al Hashimi",
            position: "Interior Specialist",
            socialLinks: [
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.instagram.com/crystalshineautocenter"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-4.png",
            name: "Omar Al Rahmani",
            position: "Paint Protection Expert",
            socialLinks: [
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.instagram.com/crystalshineautocenter"
                }
            ]
        },
    ]
};

const arsenalData = {
    number: '06',
    heading: "Engineered for Perfection",
    description: "State-of-the-art equipment and technology delivering precision results that separate detailing from car washing.",
    equipment: [
        {
            image: "/images/home/arsenal/equipment-1.png",
            name: "Rupes BigFoot Systems",
            description: "Hologram-free Italian polishing technology for mirror-perfect finishes."
        },
        {
            image: "/images/home/arsenal/equipment-2.png",
            name: "Digital Diagnostics",
            description: "Precision paint depth measurement ensuring safe correction."
        },
        {
            image: "/images/home/arsenal/equipment-3.png",
            name: "Infrared Curing",
            description: "Baking the ceramic shell for maximum hardness and longevity."
        },
        {
            image: "/images/home/arsenal/equipment-4.png",
            name: "Gtechniq Protection",
            description: "Elite-tier ceramic coating technology with unmatched durability."
        }
    ]
};

const pricingData = {
    data: [
        {
            planName: "Basic Detail",
            planPrice: "AED 499",
            planDescp: "Essential car detailing for everyday vehicles.",
            planIncludes: ["Exterior wash & wax","Interior vacuum & wipe","Tire shine","Basic protection spray"]
        },
        {
            planName: "Premium Detail",
            tag: "Most popular",
            planPrice: "AED 1,299",
            cancelPrice: "AED 1,599",
            planDescp: "Complete detailing package for luxury vehicles.",
            planIncludes: ["Everything in Basic Detail","Ceramic coating application","Interior deep cleaning","Engine bay cleaning"]
        },
        {
            planName: "Ultimate Detail",
            planPrice: "AED 2,499",
            planDescp: "Full restoration service for high-end vehicles.",
            planIncludes: ["Everything in Premium Detail","Paint protection film","Paintless dent removal","Leather restoration"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
      ],
};

const faqData = {
    data: [
        {
            faq_que: "What services does your agency offer?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "How long does a typical project take?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you offer custom designs, or do you use templates?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "What's the cost of a project?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you provide ongoing support after project completion?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        }
    ]
};

const contactData = {
    keypoint:["Premium Car Detailing Services","XPEL Certified Experts"],
    managerProfile:{
        image:"/images/avatar/avatar_1.jpg",
        name:"Ahmed Al Mansoori",
        position:"Service Manager"
    }
}

const aboutusStats = [
    {
        number: 15,
        postfix:"+",
        title: 'Years of Excellence',
        descp: "Serving Dubai's automotive community since 2009 with unwavering commitment to quality."
    },
    {
        number: 10000,
        postfix: "+",
        title: 'Vehicles Serviced',
        descp: "Over 10,000 satisfied customers have trusted us with their prized possessions."
    },
    {
        number: 100,
        postfix: "%",
        title: 'XPEL Certified Team',
        descp: "Our entire team is fully certified in XPEL products and installation techniques."
    },
];

const servicesSliderData = [
    "Branding", "Web development", "Agency","Content creation","SaaS","Motion & 3d modeling","Photography"
];

export const dynamic = "error";

export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        arsenalData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};