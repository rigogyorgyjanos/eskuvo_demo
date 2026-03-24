"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [open, setOpen] = useState(false);

    const navItems = [
        { label: "Stílus", href: "#styles" },
        { label: "Galéria", href: "#gallery" },
        { label: "Foglalás", href: "#booking" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 shadow-md z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                {/* LOGO */}
                <div className="text-2xl font-bold text-primary">DEMO</div>

                {/* Desktop menu */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-gray-700 hover:text-accent transition"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-gray-700 focus:outline-none"
                    >
                        {open ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <nav className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col p-4 space-y-2">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="block text-gray-700 hover:text-accent"
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}