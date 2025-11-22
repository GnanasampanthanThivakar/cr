"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/accordian";
import { faqData } from "@/app/api/faq-data/data";

function Faq() {
    const [showAll, setShowAll] = useState<boolean>(false);

    return (
        <section className="bg-white dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-14 xl:gap-24">
                            <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                                <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                    <span className="bg-primary text-white py-1.5 px-2.5 text-base font-medium rounded-full">08</span>
                                    <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                                    <p className="section-bedge py-1.5 px-4 rounded-full">FAQs</p>
                                </div>
                                <div className="flex flex-col gap-11">
                                    <div className="flex flex-col gap-5 ">
                                        <h2 className="max-w-3xl">Car Detailing FAQs</h2>
                                        <p className="max-w-2xl text-secondary/70 dark:text-white/70">Common questions about our premium car detailing services, XPEL certifications, and booking process in Dubai.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-8">
                                <Accordion type="single" collapsible className="flex flex-col 2xl:max-w-5xl w-full">
                                    {faqData.slice(0, showAll ? faqData.length : 6).map((item, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                        >
                                            <AccordionTrigger>
                                                <h4>{item.question}</h4>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <p>{item.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>

                                {/* Expand Button - Matching Services Component Style */}
                                {faqData.length > 6 && (
                                    <button
                                        type="button"
                                        onClick={() => setShowAll((prev) => !prev)}
                                        className="group flex gap-2 items-center w-fit bg-transparent border-none text-secondary/60 dark:text-white/60 hover:text-secondary dark:hover:text-white px-2 py-2 transition-all duration-200 ease-in-out"
                                    >
                                        <span className="text-base font-medium underline decoration-secondary/30 dark:decoration-white/30 group-hover:decoration-secondary dark:group-hover:decoration-white transition-all duration-200">
                                            {showAll ? "Show Less" : "Show More"}
                                        </span>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
