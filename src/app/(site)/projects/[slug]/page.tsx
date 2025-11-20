import Herobanner from "@/app/components/shared/hero-banner";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import Link from "next/link";
import { ourWorks } from "@/app/data/ourWorks";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return ourWorks.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const siteName = "Crystal Shine Auto Center";

  const project = ourWorks.find((p) => p.slug === slug);

  if (project) {
    return {
      title: `${project.title} | ${siteName}`,
      description: project.description,
    };
  }

  return {
    title: "Not Found",
    description: "Project not found",
  };
}

export const dynamic = "error";

export default async function Post({ params }: Props) {
  const { slug } = await params;

  const project = ourWorks.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section>
        <div className="container py-20">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p>The requested project could not be found.</p>
          <Link href="/projects" className="text-primary hover:underline">
            Back to Gallery
          </Link>
        </div>
      </section>
    );
  }

  const content = await markdownToHtml(project.content);

  return (
    <>
      <section className="bg-white dark:bg-darkblack">
        <div>
          <Herobanner
            bannerimage={project.coverImage}
            heading={project.title}
            desc={project.description}
          />
        </div>
        <div className="dark:bg-darkblack">
          <div className="container">
            <div className="flex flex-col gap-10 md:gap-16 lg:gap-24 py-12 md:py-20 xl:py-32">
              <div className="flex flex-col gap-10">
                <div>
                  <Link
                    href="/projects"
                    className="group flex gap-3 items-center w-fit bg-primary hover:bg-secondary dark:border dark:border-primary dark:hover:border dark:hover:border-white/30 rounded-full transition-all duration-500 ease-in-out"
                  >
                    <Image
                      src={"/images/Icon/back-btn.svg"}
                      alt="Image"
                      width={42}
                      height={42}
                      className="group-hover:translate-x-16.5 transform transition-transform duration-500 ease-in-out"
                    />
                    <span className="pr-4 text-lg font-bold text-secondary group-hover:text-white group-hover:-translate-x-10 transform transition-transform duration-500 ease-in-out">
                      Back
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row gap-5 lg:gap-10 w-full">
                  <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                    <span className="text-base text-secondary/70 dark:text-white/70">
                      Scope of work
                    </span>
                    <p className="font-medium">
                      {project.services.join(", ")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                    <span className="text-base text-secondary/70 dark:text-white/70">
                      Vehicle Type
                    </span>
                    <p className="font-medium">{project.industry}</p>
                  </div>
                  <div className="flex flex-col gap-2 border-b md:border-b-0 md:border-r border-secondary/12 dark:border-white/12 pb-5 md:pr-5 lg:pr-10">
                    <span className="text-base text-secondary/70 dark:text-white/70">
                      Service Cost
                    </span>
                    <p className="font-medium">{project.raised}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-base text-secondary/70 dark:text-white/70">
                      Contact
                    </span>
                    <p className="font-medium">{project.website}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                  <div className="flex items-center gap-4 md:gap-8 w-full max-w-xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-56">
                      Description
                    </h2>
                  </div>
                  <div className="flex flex-col gap-11">
                    <div className="project-descp flex flex-col gap-5">
                      <div
                        dangerouslySetInnerHTML={{ __html: content }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {project.gallery.map((image, index) =>
                  index === 0 ? (
                    <div
                      key={index}
                      className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt="image"
                        width={1600}
                        height={750}
                        className="w-full h-full max-h-[420px] object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="col-span-1 rounded-2xl overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt="image"
                        width={805}
                        height={750}
                        className="w-full h-full max-h-[420px] object-cover"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
