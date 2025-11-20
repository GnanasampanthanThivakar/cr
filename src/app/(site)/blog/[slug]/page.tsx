import Herobanner from "@/app/components/shared/hero-banner";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  // Static blog slugs for car detailing
  const slugs = [
    'ceramic-coating-guide-dubai',
    'ppf-vs-ceramic-coating',
    'car-interior-maintenance-dubai'
  ];
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;

    // Static blog data
    const blogs: Record<string, any> = {
      'ceramic-coating-guide-dubai': {
        title: "The Ultimate Guide to Ceramic Coating in Dubai",
        detail: "Everything you need to know about ceramic coating services in Dubai, including benefits, costs, and maintenance tips."
      },
      'ppf-vs-ceramic-coating': {
        title: "Paint Protection Film vs Ceramic Coating: Which is Better?",
        detail: "Compare PPF and ceramic coating to determine which protection method is best for your vehicle in Dubai's climate."
      },
      'car-interior-maintenance-dubai': {
        title: "How to Maintain Your Car's Interior in Dubai's Climate",
        detail: "Essential tips for keeping your car's interior pristine in Dubai's hot and humid climate conditions."
      }
    };

    const blog = blogs[slug];
    const siteName = "Crystal Shine Auto Center";

    if (blog) {
        return {
            title: `${blog.title} | ${siteName}`,
            description: blog.detail,
        };
    } else {
        return {
            title: "Not Found",
            description: "No blog article has been found",
        };
    }
}

export const dynamic = 'error';

export default async function Post({ params }: Props) {
    const { slug } = await params;

    // Static blog data
    const blogs: Record<string, any> = {
      'ceramic-coating-guide-dubai': {
        title: "The Ultimate Guide to Ceramic Coating in Dubai",
        detail: "Everything you need to know about ceramic coating services in Dubai, including benefits, costs, and maintenance tips.",
        coverImage: "/images/gallary/campbell-3ZUsNJhi_Ik-unsplash.jpg",
        scrolltoread: "Learn about the benefits of ceramic coating for your vehicle in Dubai's harsh climate",
        galleryImg: "/images/gallary/campbell-3ZUsNJhi_Ik-unsplash.jpg",
        content: `
          <h2>What is Ceramic Coating?</h2>
          <p>Ceramic coating is a liquid polymer that is applied to the exterior of a vehicle to protect it from external paint damage. The coating forms a chemical bond with the vehicle's factory paint, creating a layer of protection that is far more durable than traditional wax or sealant.</p>

          <h2>Benefits in Dubai's Climate</h2>
          <p>Dubai's extreme heat, sand, and humidity make ceramic coating essential for vehicle protection. The coating provides:</p>
          <ul>
            <li>UV protection from intense sun</li>
            <li>Resistance to sand and dust damage</li>
            <li>Water repellency for easier cleaning</li>
            <li>Enhanced gloss and shine</li>
          </ul>
        `
      },
      'ppf-vs-ceramic-coating': {
        title: "Paint Protection Film vs Ceramic Coating: Which is Better?",
        detail: "Compare PPF and ceramic coating to determine which protection method is best for your vehicle in Dubai's climate.",
        coverImage: "/images/gallary/hyundai-motor-group-V1DFo8C4JPA-unsplash.jpg",
        scrolltoread: "Compare the two most popular paint protection methods available in Dubai",
        galleryImg: "/images/gallary/hyundai-motor-group-V1DFo8C4JPA-unsplash.jpg",
        content: `
          <h2>Paint Protection Film (PPF)</h2>
          <p>PPF is a thick, transparent film that is applied to the painted surfaces of your vehicle. It provides physical protection against rock chips, scratches, and other impacts.</p>

          <h2>Ceramic Coating</h2>
          <p>Ceramic coating is a liquid polymer that chemically bonds with your vehicle's paint, creating a protective layer that enhances gloss and provides chemical resistance.</p>

          <h2>Which is Right for You?</h2>
          <p>The choice depends on your needs. PPF offers superior impact protection, while ceramic coating provides better chemical resistance and easier maintenance.</p>
        `
      },
      'car-interior-maintenance-dubai': {
        title: "How to Maintain Your Car's Interior in Dubai's Climate",
        detail: "Essential tips for keeping your car's interior pristine in Dubai's hot and humid climate conditions.",
        coverImage: "/images/gallary/josh-berquist-_4sWbzH5fp8-unsplash.jpg",
        scrolltoread: "Keep your car's interior looking new despite Dubai's challenging climate",
        galleryImg: "/images/gallary/josh-berquist-_4sWbzH5fp8-unsplash.jpg",
        content: `
          <h2>Dubai's Interior Challenges</h2>
          <p>Dubai's hot and humid climate, combined with sand and dust, can quickly degrade your car's interior. Leather can crack, fabrics can fade, and plastics can become brittle.</p>

          <h2>Essential Maintenance Tips</h2>
          <ul>
            <li>Park in shaded areas to reduce UV exposure</li>
            <li>Use sunshades to protect dashboard and seats</li>
            <li>Regular vacuuming to remove sand and dust</li>
            <li>Professional interior detailing every 6-12 months</li>
            <li>Use leather conditioners to prevent cracking</li>
          </ul>
        `
      }
    };

    const blog = blogs[slug];
    const content = blog?.content || "";


    return (
        <>
            <section>
                <div>
                    <Herobanner
                        bannerimage={blog?.coverImage}
                        heading={blog?.title}
                        desc={blog?.detail}
                        headingClass="blog-heading" />
                </div>
                <div className="dark:bg-darkblack">
                    <div className="container">
                        <div className="flex flex-col gap-12 md:gap-24 py-20 xl:py-40">
                            <div className="flex flex-col xl:flex xl:flex-row items-start xl:items-center gap-8">
                                <div className="flex items-center gap-4 md:gap-8 w-full max-w-xl">
                                    <h2 className="text-4xl lg:text-5xl xl:text-56">Scroll to read</h2>
                                </div>
                                <p className="text-secondary-text/70 dark:text-white/70">{blog?.scrolltoread}</p>
                            </div>
                            <div className="w-full h-700px">
                                <Image src={blog?.galleryImg} alt="Image" width={1600} height={750} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex justify-end">
                                {content && (
                                    <div dangerouslySetInnerHTML={{ __html: content }} className="blog-content max-w-6xl"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
