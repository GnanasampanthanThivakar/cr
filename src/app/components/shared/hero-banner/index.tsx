"use client";
import Image from "next/image";

const Herobanner = ({ bannerimage, heading, desc, headingClass = "large-heading"}: { bannerimage: string; heading: string; desc: string; headingClass?: string }) => {
    const splitDesc = desc.split(/<\/?span>/);

    return (
        <section className="relative flex items-end text-white bg-black h-[75vh] sm:h-[80vh] lg:h-screen max-h-650px overflow-hidden">
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Image"
                src={bannerimage}
                height={694}
                width={1800}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-overlay"></div>

            {/* Content */}
            <div className="relative z-10 container text-left">
                <div className="flex flex-col gap-6 pb-12 md:pb-16 xl:pb-20">
                    <div className="flex items-start gap-3 md:gap-6">
                        <div className="w-11 h-11 flex-shrink-0">
                            <Image
                                src={"/images/Icon/primary-leaf.svg"}
                                alt="icon"
                                width={44}
                                height={44}
                                className="animate-spin"
                            />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-md">
                            {splitDesc[0]}
                            <span className="text-primary">{splitDesc[1]}</span>
                            {splitDesc[2]}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-end lg:items-baseline gap-3 sm:gap-4">
                        <h1 className={`${headingClass ? headingClass : "large-heading"}`}>{heading}</h1>
                        <div className="bg-primary rounded-full pl-4 sm:pl-8 p-1.5 sm:p-1.5">
                            <div className="bg-white p-2 sm:p-3 md:p-4 rounded-full">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.33337 1.33331H14.6667M14.6667 1.33331V14.6666M14.6667 1.33331L1.33337 14.6666" stroke="#1F2A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Herobanner;
