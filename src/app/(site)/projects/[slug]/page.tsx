
import Herobanner from "@/app/components/shared/hero-banner";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const slugs = [
        'bmw-m5-ceramic-coating',
        'mercedes-g-wagon-ppf',
        'audi-r8-interior-restoration',
        'porsche-911-dent-removal',
        'lamborghini-huracan-alloy-repair',
        'range-rover-engine-bay-detailing'
    ];
    return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    const siteName = "Crystal Shine Auto Center";

    // Static project data
    const projects: Record<string, any> = {
        'bmw-m5-ceramic-coating': { title: "BMW M5 Ceramic Coating", description: "Complete ceramic coating transformation with interior restoration" },
        'mercedes-g-wagon-ppf': { title: "Mercedes G-Wagon PPF", description: "Full body PPF protection for luxury SUV" },
        'audi-r8-interior-restoration': { title: "Audi R8 Interior Restoration", description: "Premium interior detailing and leather restoration" },
        'porsche-911-dent-removal': { title: "Porsche 911 Paintless Dent Removal", description: "Expert PDR service restoring perfect bodywork" },
        'lamborghini-huracan-alloy-repair': { title: "Lamborghini Huracan Alloy Repair", description: "Wheel restoration and protection for supercar" },
        'range-rover-engine-bay-detailing': { title: "Range Rover Engine Bay Detailing", description: "Professional engine bay detailing and protection" }
    };

    const project = projects[slug];

    if (project) {
        return {
            title: `${project.title} | ${siteName}`,
            description: project.description,
        };
    } else {
        return {
            title: "Not Found",
            description: "Project not found",
        };
    }
}

export const dynamic = 'error';

export default async function Post({ params }: Props) {
    const { slug } = await params;

    // Static project data for car detailing transformations
    const staticProjects: Record<string, any> = {
        "bmw-m5-ceramic-coating": {
            title: "BMW M5 Ceramic Coating",
            ScopeOfWork: ["Ceramic Coating", "Interior Detailing"],
            industry: "Luxury Car Detailing",
            raised: "AED 3,500",
            website: "crystalshine.ae",
            description: "Complete ceramic coating transformation with interior restoration",
            coverImage: "/images/gallary/campbell-3ZUsNJhi_Ik-unsplash.jpg",
            gallery: ["/images/projects/project1-cover.png", "/images/projects/project_1-img-1.png", "/images/projects/project_1-img-2.png", "/images/projects/project_1-img-3.png"],
            content: `
# BMW M5 Ceramic Coating Transformation

## Project Overview
This BMW M5 underwent a complete ceramic coating transformation at Crystal Shine Auto Center, showcasing our premium detailing expertise.

## Services Performed
- **Ceramic Coating Application**: Professional-grade ceramic coating for long-lasting protection
- **Interior Detailing**: Deep cleaning and conditioning of all interior surfaces
- **Paint Correction**: Removal of swirl marks and light scratches
- **Wheel Protection**: Ceramic coating applied to alloy wheels

## Results
The vehicle now features enhanced gloss, superior protection against environmental contaminants, and a showroom-quality finish that will last for years.

## Client Testimonial
"Crystal Shine transformed my BMW M5 beyond my expectations. The ceramic coating gives it an incredible shine and protection." - Ahmed Al Mansoori
            `
        },
        "mercedes-g-wagon-ppf": {
            title: "Mercedes G-Wagon PPF",
            ScopeOfWork: ["Paint Protection Film", "Wheel Protection"],
            industry: "Luxury SUV Detailing",
            raised: "AED 8,500",
            website: "crystalshine.ae",
            description: "Full body PPF protection for luxury SUV",
            coverImage: "/images/gallary/hyundai-motor-group-V1DFo8C4JPA-unsplash.jpg",
            gallery: ["/images/projects/project2-cover.png", "/images/projects/project_2-img-1.png", "/images/projects/project_2-img-2.png", "/images/projects/project_2-img-3.png"],
            content: `
# Mercedes G-Wagon Paint Protection Film

## Project Overview
Complete paint protection film installation on a Mercedes G-Wagon, providing invisible protection against road hazards.

## Services Performed
- **Full Body PPF**: Premium XPEL film applied to entire vehicle
- **Wheel Protection**: Additional protection for alloy wheels
- **Paint Correction**: Pre-installation paint preparation
- **Edge Sealing**: Professional sealing for maximum durability

## Results
The G-Wagon now has complete protection against scratches, chips, and environmental damage while maintaining its original appearance.

## Client Testimonial
"The PPF installation on my G-Wagon is flawless. Crystal Shine's attention to detail is unmatched." - Khalid Al Maktoum
            `
        },
        "audi-r8-interior-restoration": {
            title: "Audi R8 Interior Restoration",
            ScopeOfWork: ["Interior Detailing", "Leather Conditioning"],
            industry: "Sports Car Detailing",
            raised: "AED 2,800",
            website: "crystalshine.ae",
            description: "Premium interior detailing and leather restoration",
            coverImage: "/images/gallary/josh-berquist-_4sWbzH5fp8-unsplash.jpg",
            gallery: ["/images/projects/project3-cover.png", "/images/projects/project_3-img-1.png", "/images/projects/project_3-img-2.png", "/images/projects/project_3-img-3.png"],
            content: `
# Audi R8 Interior Restoration

## Project Overview
Comprehensive interior restoration for an Audi R8 supercar, bringing back the luxury feel of the cabin.

## Services Performed
- **Leather Conditioning**: Deep conditioning and protection for all leather surfaces
- **Interior Deep Clean**: Steam cleaning and detailing of all interior components
- **Carpet Shampoo**: Professional carpet cleaning and protection
- **Dashboard Restoration**: Careful cleaning and protection of dashboard surfaces

## Results
The Audi R8's interior now looks and feels like new, with enhanced protection against wear and UV damage.

## Client Testimonial
"My Audi R8's interior looks better than when I bought it. Crystal Shine's expertise is exceptional." - Omar Al Suwaidi
            `
        },
        "porsche-911-dent-removal": {
            title: "Porsche 911 Paintless Dent Removal",
            ScopeOfWork: ["Paintless Dent Removal", "Paint Correction"],
            industry: "Supercar Detailing",
            raised: "AED 1,200",
            website: "crystalshine.ae",
            description: "Expert PDR service restoring perfect bodywork",
            coverImage: "/images/gallary/lance-asper-N9Pf2J656aQ-unsplash.jpg",
            gallery: ["/images/projects/project4-cover.png", "/images/projects/project_4-img-1.png", "/images/projects/project_4-img-2.png", "/images/projects/project_4-img-3.png"],
            content: `
# Porsche 911 Paintless Dent Removal

## Project Overview
Paintless dent removal service on a Porsche 911, restoring the vehicle's perfect bodywork without affecting the original paint.

## Services Performed
- **Paintless Dent Removal**: Advanced PDR techniques for multiple dents
- **Paint Correction**: Final polishing to restore gloss
- **Panel Inspection**: Thorough inspection for hidden damage
- **Quality Assurance**: Multiple quality checks throughout the process

## Results
The Porsche 911 now has flawless bodywork, restored to its original condition without any paint damage.

## Client Testimonial
"The dent removal on my Porsche was done perfectly. No one can tell there were dents there before." - Saeed Al Nahyan
            `
        },
        "lamborghini-huracan-alloy-repair": {
            title: "Lamborghini Huracan Alloy Repair",
            ScopeOfWork: ["Alloy Wheel Repair", "Ceramic Coating"],
            industry: "Exotic Car Detailing",
            raised: "AED 4,200",
            website: "crystalshine.ae",
            description: "Wheel restoration and protection for supercar",
            coverImage: "/images/gallary/rishab-lamichhane-iflRMZelx0M-unsplash.jpg",
            gallery: ["/images/projects/project5-cover.png", "/images/projects/project_5-img-1.png", "/images/projects/project_5-img-2.png", "/images/projects/project_5-img-3.png"],
            content: `
# Lamborghini Huracan Alloy Repair

## Project Overview
Complete wheel restoration and protection for a Lamborghini Huracan, maintaining the vehicle's exotic appearance.

## Services Performed
- **Alloy Wheel Repair**: Professional repair of curb damage and scratches
- **Wheel Refinishing**: Diamond-cut finish restoration
- **Ceramic Coating**: Long-lasting protection for wheels
- **Tire Dressing**: Premium tire shine application

## Results
The Lamborghini's wheels now look factory-fresh with enhanced protection against future damage.

## Client Testimonial
"Crystal Shine saved my Lamborghini's wheels. The repair work is indistinguishable from new." - Rashid Al Maktoum
            `
        },
        "range-rover-engine-bay-detailing": {
            title: "Range Rover Engine Bay Detailing",
            ScopeOfWork: ["Engine Bay Cleaning", "Ceramic Coating"],
            industry: "Luxury SUV Detailing",
            raised: "AED 950",
            website: "crystalshine.ae",
            description: "Professional engine bay detailing and protection",
            coverImage: "/images/gallary/campbell-3ZUsNJhi_Ik-unsplash.jpg",
            gallery: ["/images/projects/project6-cover.png", "/images/projects/project_6-img-1.png", "/images/projects/project_6-img-2.png", "/images/projects/project_6-img-3.png"],
            content: `
# Range Rover Engine Bay Detailing

## Project Overview
Professional engine bay detailing for a Range Rover, removing grease and grime while protecting components.

## Services Performed
- **Engine Bay Cleaning**: Thorough degreasing and cleaning of all components
- **Protective Coating**: Ceramic coating for protection against contaminants
- **Wire Loom Organization**: Careful cleaning around electrical components
- **Quality Inspection**: Final inspection for cleanliness and protection

## Results
The Range Rover's engine bay is now spotless and protected, showcasing the vehicle's premium maintenance.

## Client Testimonial
"My Range Rover's engine bay looks like it just came from the factory. Impressive work!" - Mohammed Al Suwaidi
            `
        }
    };

    const project = staticProjects[slug];

    if (!project) {
        return (
            <section>
                <div className="container py-20">
                    <h1 className="text-4xl font-bold">Project Not Found</h1>
                    <p>The requested project could not be found.</p>
                    <Link href="/projects" className="text-primary hover:underline">Back to Gallery</Link>
                </div>
            </section>
        );
    }

    const content = await markdownToHtml(project.content);


    return (
        <>
            <section>
                <div>
                    <Herobanner
                        bannerimage={project.coverImage}
                        heading={project.title}
                        desc={project.description} />
                </div>
                <div className="dark:bg-darkblack">
                    <div className="container">
                        <div className="flex flex-col gap-12 md:gap-24 py-20 xl:py-40">
                            <div className="flex flex-col gap-10">
                                <div>
                                    <Link href="/projects" className="group flex gap-3 items-center w-fit bg-primary hover:bg-secondary dark:border dark:border-primary dark:hover:border dark:hover:border-white/30 rounded-full transition-all duration-500 ease-in-out">
                                        <Image src={"/images/Icon/back-btn.svg"} alt="Image" width={42} height={42} className="group-hover:translate-x-16.5 transform transition-transform duration-500 ease-in-out" />
                                        <span className="pr-4 text-lg font-bold text-secondary group-hover:text-white group-hover:-translate-x-10 transform transition-transform duration-500 ease-in-out">Back</span>
                                    </Link>
                                </div>
                                <div className="flex flex-col md:flex-row gap-5 lg:gap-10">
                                    <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                                        <span className="text-base text-secondary/70 dark:text-white/70">Scope of work</span>
                                        <p className="font-medium">{project.ScopeOfWork.join(", ")}</p>
                                    </div>
                                    <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                                        <span className="text-base text-secondary/70 dark:text-white/70">Vehicle Type</span>
                                        <p className="font-medium">{project.industry}</p>
                                    </div>
                                    <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                                        <span className="text-base text-secondary/70 dark:text-white/70">Service Cost</span>
                                        <p className="font-medium">{project.raised}</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-base text-secondary/70 dark:text-white/70">Contact</span>
                                        <p className="font-medium">{project.website}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                    <div className="flex items-center gap-4 md:gap-8 w-full max-w-xl">
                                        <h2 className="text-4xl lg:text-5xl xl:text-56">Description</h2>
                                    </div>
                                    <div className="flex flex-col gap-11">
                                        <div className="project-descp flex flex-col gap-5">
                                            <div dangerouslySetInnerHTML={{ __html: content }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-8">
                                {project.gallery.map((image: string, index: number) => (
                                    index === 0 ? (
                                        <div key={index} className="col-span-2 ">
                                            <Image src={image} alt="image" width={1600} height={750} className="w-full h-full object-cover" />
                                        </div>
                                    ) : (
                                        <div key={index} className="col-span-2 md:col-span-1 ">
                                            <Image src={image} alt="image" width={805} height={750} className="w-full h-full object-cover" />
                                        </div>
                                    )
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
