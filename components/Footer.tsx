"use client";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const facebookUrl = "https://www.facebook.com/YourPage";
    const instagramUrl = "https://www.instagram.com/YourPage";

    return (
        <footer className="bg-secondary py-8 border-t-2 border-t-gray-300">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <p className="text-grayDark text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} DEMO – Minden jog fenntartva
                </p>
                <div className="flex space-x-6">
                    <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-highlight text-lg transition-colors duration-400 hover:text-accent"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-highlight text-lg transition-colors duration-400 hover:text-accent"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}