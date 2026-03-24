"use client";

import React from "react";
import { FaStar, FaMapMarkerAlt, FaTshirt, FaGoogle } from "react-icons/fa";

interface TrustItem {
    icon: React.ReactNode;
    text: string;
    hoverEffect?: string; // Tailwind anim osztályok
}

const trustItems: TrustItem[] = [
    {
        icon: <FaStar className="text-[#c19f7f] text-3xl mb-2 transition-all duration-500" />,
        text: "100+ boldog menyasszony",
        hoverEffect: "hover:scale-110 hover:text-[#FFD700] hover:drop-shadow-lg",
    },
    {
        icon: <FaMapMarkerAlt className="text-[#e57373] text-3xl mb-2 transition-all duration-500" />,
        text: "Budapest, IV. kerület",
        hoverEffect: "hover:scale-105 hover:animate-pulse",
    },
    {
        icon: <FaTshirt className="text-[#e5d3b3] text-3xl mb-2 transition-all duration-500" />,
        text: "Egyedi, limitált ruhák",
        hoverEffect: "hover:-translate-y-1 hover:scale-105",
    },
    {
        icon: <FaGoogle className="text-[#4285F4] text-3xl mb-2 transition-all duration-500" />,
        text: "4.6 értékelés Google-on",
        hoverEffect: "hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(66,133,244,0.5)]",
    },
];

export default function Trust() {
    return (
        <section className="py-16 bg-secondary">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
                    {trustItems.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col items-center bg-white p-6 rounded-xl shadow-card hover:shadow-hoverCard transition-transform duration-400 ${item.hoverEffect}`}
                        >
                            {item.icon}
                            <p className="text-grayDark font-serif text-lg mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Vevői vélemények */}
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-lg italic font-serif text-grayDark mb-4">
                        „Az első ruhánál tudtam, hogy ez az! Hihetetlen élmény volt.”
                    </p>
                    <p className="text-lg italic font-serif text-grayDark">
                        „A stylist teljesen megértette, mit szeretnék. Bátran ajánlom mindenkinek!”
                    </p>
                </div>
            </div>
        </section>
    );
}