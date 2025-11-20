"use client";

import type { Metadata } from "next";

import Herobanner from "@/app/components/shared/hero-banner";
import { useState } from "react";

export default function Page() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Vehicle Details
        make: "",
        model: "",
        year: "",
        color: "",
        // Service Selection
        serviceType: "",
        package: "",
        // Date & Time
        preferredDate: "",
        preferredTime: "",
        // Contact Details
        name: "",
        email: "",
        phone: "",
        notes: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Booking submitted:", formData);
        alert("Booking submitted successfully! We'll contact you soon.");
    };

    return (
        <main>
            <Herobanner
                bannerimage="/images/contact/banner/contact-banner.png"
                heading="Book Your Service"
                desc="Schedule your premium car detailing appointment with <span>Crystal Shine Auto Center</span>" />

            <section className="py-20 md:py-40">
                <div className="container max-w-2xl">
                    {/* Progress Indicator */}
                    <div className="flex justify-center mb-12">
                        <div className="flex items-center space-x-4">
                            {[1, 2, 3, 4].map((step) => (
                                <div key={step} className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                        step <= currentStep ? 'bg-primary text-secondary' : 'bg-gray-300 text-gray-600'
                                    }`}>
                                        {step}
                                    </div>
                                    {step < 4 && (
                                        <div className={`w-12 h-1 mx-2 ${
                                            step < currentStep ? 'bg-primary' : 'bg-gray-300'
                                        }`} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-secondary rounded-lg shadow-lg p-8">
                        <form onSubmit={handleSubmit}>
                            {/* Step 1: Vehicle Details */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-center mb-6">Vehicle Details</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="make"
                                            placeholder="Vehicle Make (e.g., BMW, Toyota)"
                                            value={formData.make}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="model"
                                            placeholder="Model (e.g., X5, Camry)"
                                            value={formData.model}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                        <input
                                            type="number"
                                            name="year"
                                            placeholder="Year"
                                            value={formData.year}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="color"
                                            placeholder="Color"
                                            value={formData.color}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Service Selection */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-center mb-6">Service Selection</h3>
                                    <div className="space-y-4">
                                        <select
                                            name="serviceType"
                                            value={formData.serviceType}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        >
                                            <option value="">Select Service Type</option>
                                            <option value="Ceramic Coating">Ceramic Coating</option>
                                            <option value="Paint Protection Film (PPF)">Paint Protection Film (PPF)</option>
                                            <option value="Alloy Wheel Repair">Alloy Wheel Repair</option>
                                            <option value="Paintless Dent Removal">Paintless Dent Removal</option>
                                            <option value="Interior Detailing">Interior Detailing</option>
                                            <option value="Engine Bay Cleaning">Engine Bay Cleaning</option>
                                        </select>
                                        <select
                                            name="package"
                                            value={formData.package}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        >
                                            <option value="">Select Package</option>
                                            <option value="Basic">Basic Package</option>
                                            <option value="Premium">Premium Package</option>
                                            <option value="Ultimate">Ultimate Package</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Date & Time */}
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-center mb-6">Date & Time</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="date"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleInputChange}
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                        <select
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        >
                                            <option value="">Select Time</option>
                                            <option value="9:00 AM">9:00 AM</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="1:00 PM">1:00 PM</option>
                                            <option value="2:00 PM">2:00 PM</option>
                                            <option value="3:00 PM">3:00 PM</option>
                                            <option value="4:00 PM">4:00 PM</option>
                                            <option value="5:00 PM">5:00 PM</option>
                                        </select>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Note: Secure your slot with a 10% deposit. Business hours: 9 AM - 6 PM, Sunday - Thursday.
                                    </p>
                                </div>
                            )}

                            {/* Step 4: Contact Details */}
                            {currentStep === 4 && (
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-center mb-6">Contact Details</h3>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                        <textarea
                                            name="notes"
                                            placeholder="Additional notes or special requests"
                                            value={formData.notes}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between mt-8">
                                {currentStep > 1 && (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                    >
                                        Previous
                                    </button>
                                )}

                                {currentStep < 4 ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-6 py-3 bg-primary text-secondary rounded-lg hover:bg-primary/90 transition-colors ml-auto"
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-primary text-secondary rounded-lg hover:bg-primary/90 transition-colors ml-auto"
                                    >
                                        Confirm Booking
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}