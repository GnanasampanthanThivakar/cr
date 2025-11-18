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
    heading: "Dubai's Trusted Car Detailing Experts Since 2009",
    description: "With over 15 years of experience and 10,000+ satisfied customers, we deliver premium car detailing services using XPEL-certified products and techniques.",
    scoreData: [
        {
            number: 15,
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
    ]
};

const servicesData = {
    number: '03',
    name: "Our Services",
    heading: "Premium Car Detailing & Paint Protection Services",
    description: "Professional car detailing services using XPEL-certified products and techniques to keep your vehicle looking showroom perfect.",
    data: [
        {
            id: 1,
            image: "/images/home/services/services_1.png",
            heading: "Ceramic Coating",
            descp: "Long-lasting protection with advanced ceramic coating technology for a brilliant, mirror-like finish."
        },
        {
            id: 2,
            image: "/images/home/services/services_2.png",
            heading: "Paint Protection Film (PPF)",
            descp: "Invisible protection against scratches, chips, and road debris using premium XPEL films."
        },
        {
            id: 3,
            image: "/images/home/services/services_3.png",
            heading: "Alloy Wheel Repair",
            descp: "Professional wheel restoration and repair services to bring your wheels back to like-new condition."
        },
        {
            id: 4,
            image: "/images/home/services/services_4.png",
            heading: "Paintless Dent Removal",
            descp: "Paint-free dent removal techniques that restore your vehicle's appearance without affecting the original paint."
        },
    ]
};

const testimonialData = {
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
            faq_que: "What’s the cost of a project?",
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
]

const servicesSliderData = [
    "Branding", "Web development", "Agency","Content creation","SaaS","Motion & 3d modeling","Photography"
]



export const dynamic = "error";

export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData
    });
};