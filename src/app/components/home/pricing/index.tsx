"use client";

import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Logoslider from "./Logoslider";

import { useEffect, useState } from "react";

type PricingPlan = {
  planName?: string;
  tag?: string;
  cancelPrice?: string;
  planPrice?: string;
  planDescp?: string;
  planIncludes?: string[];
};

type PageData = {
  pricingData?: {
    data?: PricingPlan[];
    partnerLogo?: string[]; // adjust type if logo objects are more complex
  };
};

export default function Pricing() {
  const [pricingData, setPricingData] = useState<PageData["pricingData"] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/page-data", { signal: ctrl.signal });
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const json: PageData = await res.json();
        setPricingData(json.pricingData ?? null);
      } catch (err: any) {
        if (err.name === "AbortError") return;
        console.error("Error fetching services:", err);
        setPricingData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => ctrl.abort();
  }, []);

  // safe accessors
  const plans = pricingData?.data ?? [];


  return (
    <section className="bg-lightgray dark:bg-secondary py-20 md:py-40">
      <div className="flex flex-col gap-24">
        <div className="container">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-14 xl:gap-24">
              <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                  <span className="bg-primary text-white py-1.5 px-2.5 text-base font-medium rounded-full">07</span>
                  <div className="h-px w-16 bg-black/12 dark:bg-white/12" />
                  <p className="section-bedge py-1.5 px-4 rounded-full">Service Packages</p>
                </div>

                <div className="flex flex-col gap-11">
                  <div className="flex flex-col gap-5 ">
                    <h2 className="max-w-3xl">Service Packages</h2>
                    <p className="max-w-2xl text-secondary/70 dark:text-white/70">
                      Professional car detailing packages designed to meet your needs. From basic maintenance to premium protection,
                      we have the perfect solution for your vehicle.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                {loading && (
                  // simple loading fallback — replace with a skeleton if you have one
                  <div className="col-span-full text-center py-10">Loading plans…</div>
                )}

                {!loading && plans.length === 0 && (
                  <div className="col-span-full text-center py-10">No plans available at the moment.</div>
                )}

                {!loading &&
                  plans.map((plan, idx) => (
                    <div key={idx} className="bg-white dark:bg-lightgray/10 p-3 sm:p-5 xl:p-12 flex flex-col gap-10">
                      <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-4">
                          <p className="font-medium">{plan?.planName}</p>

                          {plan?.tag && (
                            <div className="flex items-center gap-2 bg-secondary w-fit py-1 px-3 rounded-full">
                              <Icon icon="fluent:fire-20-regular" width="20" height="20" style={{ color: "#fff" }} />
                              <span className="text-white text-base">{plan.tag}</span>
                            </div>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-3">
                            {plan.cancelPrice && <h3 className="text-secondary/40 dark:text-white/40"><del>{plan.cancelPrice}</del></h3>}
                            <h3>{plan.planPrice}</h3>
                            <span className="text-base text-secondary/70 dark:text-white/70">/service</span>
                          </div>
                        </div>

                        <p className="text-base text-secondary/70 dark:text-white/70">{plan.planDescp}</p>
                      </div>

                      <div className="pt-10 border-t border-secondary/12 dark:border-white/12">
                        <p className="text-base pb-5">What’s Included:</p>
                        <div>
                          <ul className="flex flex-col gap-3">
                            {(plan.planIncludes ?? []).map((inc, i) => (
                              <li key={i} className="flex items-center gap-1.5 sm:gap-4">
                                <div className="bg-primary w-fit p-1 sm:p-1.5 rounded-full flex-shrink-0">
                                  <Image src="/images/Icon/right-check.svg" alt="right-icon" width={20} height={20} />
                                </div>
                                <span className="flex-1">{inc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <Link href="/booking" className="group relative flex justify-center items-center w-full bg-primary hover:bg-secondary rounded-full transition-all duration-300 ease-in-out">
                          <span className="py-4 px-2 text-lg font-bold text-secondary group-hover:text-white transition-all duration-300 ease-in-out">Book Now</span>
                          <div className="absolute top-0.5 right-0.5 transition-all duration-300 ease-in-out group-hover:left-0">
                            <svg className="flex items-center transition-transform duration-300 ease-in-out group-hover:rotate-45" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_d_1_873)">
                                <rect x="3" y="2" width="52" height="52" rx="26" fill="white" />
                                <path d="M24 23H34M34 23V33M34 23L24 33" stroke="#1F2A2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <defs>
                                <filter id="filter0_d_1_873" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                  <feOffset dy="1" />
                                  <feGaussianBlur stdDeviation="1.5" />
                                  <feComposite in2="hardAlpha" operator="out" />
                                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_873" />
                                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_873" result="shape" />
                                </filter>
                              </defs>
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-secondary dark:text-white text-center">Over 10,000 satisfied customers in Dubai</p>

              {/* Partner logos slider */}
              <Logoslider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
