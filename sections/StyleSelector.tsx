"use client";

import React from "react";

interface StyleButton {
    label: string;
    targetId: string;
}

const styles: StyleButton[] = [
    { label: "Hercegnős", targetId: "gallery" },
    { label: "Minimalista", targetId: "gallery" },
    { label: "Bohém", targetId: "gallery" },
    { label: "Csillogós", targetId: "gallery" },
];

export default function StyleSelector() {
    const handleClick = (targetId: string) => {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Válaszd ki a stílusod</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {styles.map((style, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleClick(style.targetId)}
                            className="bg-accent text-primary font-semibold py-3 px-6 rounded shadow hover:bg-accent/90 transition"
                        >
                            {style.label}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}