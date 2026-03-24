"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-16 bg-gray-50 border-b-2 border-t-2 border-b-gray-300 border-t-gray-300">
            <div className="max-w-6xl mx-auto px-4 text-center mb-8">
                <h2 className="text-3xl font-bold">Kiemelt Ruhák</h2>
            </div>

            {/* Desktop grid */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-4 max-w-6xl mx-auto px-4">
                {images.map((src, idx) => (
                    <div key={idx} className="overflow-hidden rounded-lg">
                        <img src={src} alt={`Ruha ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>

            {/* Mobile swipe carousel */}
            <div className="md:hidden">
                <Swiper spaceBetween={10} slidesPerView={1}>
                    {images.map((src, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="overflow-hidden rounded-lg">
                                <img src={src} alt={`Ruha ${idx + 1}`} className="w-full h-64 object-cover" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}