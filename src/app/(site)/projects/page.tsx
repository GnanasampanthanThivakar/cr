
import ProjectList from "@/app/components/projects";
import Herobanner from "@/app/components/shared/hero-banner";
import { getAllProjects } from "@/lib/markdown";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Gallery | Crystal Shine Auto Center",
    description: "View our portfolio of premium car detailing transformations in Dubai. Before and after photos of ceramic coating, PPF, and detailing services."
};

export default function Page() {
    const projects = getAllProjects();
    return (
        <main>
            <Herobanner
                bannerimage="/images/projects/banner/projects-banner.png"
                heading="Our Gallery"
                desc="A <span>showcase of transformations</span> - explore our premium car detailing work that defines excellence." />
            <ProjectList />    
        </main>
    );
};
