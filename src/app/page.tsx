import { Metadata } from "next";
import Aboutus from "./components/home/about-us";
import Contact from "./components/home/contact";
import Faq from "./components/home/faq";
import HeroSection from "./components/home/hero";
import Portfolio from "./components/home/portfolio";
import VideoHero from "./components/home/video-hero";
import BeforeAfterSection from "./components/home/before-after/BeforeAfterSection";
import Resources from "./components/home/resources";
import Services from "./components/home/services";
import StatsFacts from "./components/home/stats-facts";
import Arsenal from "./components/home/arsenal";
import Testimonial from "./components/home/testimonial";
import Logoslider from "./components/home/pricing/Logoslider";

export const metadata: Metadata = {
    title: "Crystal Shine Auto Center | Premium Car Detailing in Dubai",
    description: "Dubai's trusted car detailing experts since 2009. Professional ceramic coating, PPF, alloy wheel repair, and paintless dent removal services."
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsFacts/>
      <Logoslider />
      <Portfolio/>
      <Services/>
      <Aboutus/>
      <Testimonial/>
      <Arsenal arsenalNumber="06"/>
      <VideoHero/>
      <BeforeAfterSection/>
      <Faq/>
      <Resources/>
      <Contact contactdataNumber="10"/>
    </>
  );
}
