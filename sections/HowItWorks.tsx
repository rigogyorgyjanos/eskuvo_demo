"use client";

import React, { useEffect, useRef, useState } from "react";

interface Step {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const steps: Step[] = [
    { icon: "📅", title: "Foglalás", description: "Válassz időpontot online vagy telefonon." },
    { icon: "👗", title: "Próba", description: "Próbáld fel a ruhákat személyesen a szalonban." },
    { icon: "💖", title: "Kiválasztás", description: "Találd meg az igazit és készülj az esküvőre." },
];

export default function HowItWorks() {
    const [visible, setVisible] = useState<boolean[]>([false, false, false]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && containerRef.current) {
                        setVisible([true, true, true]); // egyszerű MVP: mind egyszerre fade in
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, []);

    return (
        <section className="py-16 bg-white" ref={containerRef}>
            <div className="max-w-6xl mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl font-bold mb-8">Hogyan működik</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col items-center text-center p-4 rounded transition-transform duration-700 ${visible[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <div className="text-5xl mb-4">{step.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}