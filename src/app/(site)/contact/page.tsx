import Contact from "@/app/components/home/contact";
import Herobanner from "@/app/components/shared/hero-banner";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact Us | Crystal Shine Auto Center",
    description: "Get in touch with Crystal Shine Auto Center for premium car detailing services in Dubai. Book your appointment today."
};

export default function Page() {
    return (
        <main>
            <Herobanner
                bannerimage="/images/contact/banner/contact-banner.png"
                heading="Get In Touch"
                desc="Ready to make your car shine? <span>Contact us</span> today for premium detailing services." />
            <Contact contactdataNumber="01"/>
        </main>
    );
};
