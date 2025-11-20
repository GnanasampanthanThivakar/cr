"use client";

import BeforeAfter from "./index";

export default function BeforeAfterSection() {
  return (
    <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
      <div className="container">
        <div className="flex flex-col gap-20">
          {/* Header */}
          <div className="flex flex-col xl:flex-row items-start gap-8">
            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
              <span className="bg-primary text-white py-1.5 px-2.5 text-base font-medium rounded-full">
                08
              </span>
              <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
              <p className="section-bedge py-1.5 px-4 rounded-full">
                Before & After
              </p>
            </div>

            <div className="flex flex-col gap-11">
              <div className="flex flex-col gap-5">
                <h2 className="max-w-3xl"> Before & After</h2>
                <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                 See how we erase parking lot scars and industrial fallout. We return your vehicle to the condition it deserved to be in when it left the factory.
                </p>
              </div>
            </div>
          </div>

          {/* Before/After Slider */}
          <div className="w-full">
            <BeforeAfter
              beforeImage="/images/before-after/before.jpg"
              afterImage="/images/before-after/after.jpg"
              beforeAlt="Car before detailing"
              afterAlt="Car after detailing"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
