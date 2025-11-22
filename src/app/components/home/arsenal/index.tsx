"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Arsenal = (props: { arsenalNumber: string }) => {
    const { arsenalNumber } = props;
    const [arsenalData, setArsenalData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setArsenalData(data?.arsenalData)
            } catch (error) {
                console.error('Error fetching arsenal data:', error)
            }
        }
        fetchData()
    }, [])

    return (
        <section className="bg-darkblack dark:bg-darkblack py-20 md:py-40">
            <div className="flex flex-col gap-24">
                <div className="container">
                    <div className="flex flex-col gap-14 xl:gap-24">
                        <div className="flex flex-col xl:flex xl:flex-row items-start gap-8">
                            <div className="flex items-center py-3 gap-4 md:gap-8 w-full max-w-xl">
                                <span className="bg-primary text-white py-1.5 px-2.5 text-base font-medium rounded-full">{arsenalNumber ? arsenalNumber : arsenalData?.number}</span>
                                <div className="h-px w-16 bg-white/12" />
                                <p className="section-bedge py-1.5 px-4 rounded-full bg-white/10 text-white">The Arsenal</p>
                            </div>
                            <div className="flex flex-col gap-11">
                                <div className="flex flex-col gap-5">
                                    <h2 className="max-w-3xl text-white">{arsenalData?.heading || "ENGINEERED FOR PERFECTION"}</h2>
                                    <p className="max-w-2xl text-white/70">{arsenalData?.description || "State-of-the-art equipment and technology for precision automotive restoration."}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-7">
                            {arsenalData?.equipment?.map((item: any, index: any) => {
                                return (
                                    <div key={index} className="group flex flex-col gap-6">
                                        <div className="relative overflow-hidden aspect-[4/5] bg-gray/10">
                                            <Image 
                                                src={item?.image} 
                                                alt={item?.name} 
                                                fill
                                                style={{ objectFit: 'cover' }} 
                                                className="group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        </div>
                                        <div>
                                            <h4 className="text-white mb-2">{item?.name}</h4>
                                            <span className="text-white/70 text-base">{item?.description}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Arsenal;
