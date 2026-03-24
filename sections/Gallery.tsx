"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, Variants, easeOut } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const images = [
    "/gallery/1.webp",
    "/gallery/2.webp",
    "/gallery/3.webp",
    "/gallery/4.webp",
    "/gallery/5.webp",
    "/gallery/6.webp",
];

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2, // képek egymás után animálódnak
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: easeOut, // TS-kompatibilis
        },
    },
};

export default function Gallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const prevImage = () =>
        setCurrentIndex((currentIndex + images.length - 1) % images.length);
    const nextImage = () =>
        setCurrentIndex((currentIndex + 1) % images.length);

    return (
        <section className="py-16 bg-gray-50 border-t-2 border-b-2 border-gray-300">
            <div className="max-w-6xl mx-auto px-4 text-center mb-8">
                <h2 className="text-3xl font-bold">Kiemelt Ruhák</h2>
            </div>

            {/* Desktop grid with Framer Motion */}
            <motion.div
                className="hidden md:grid md:grid-cols-3 md:gap-4 max-w-6xl mx-auto px-4"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                {images.map((src, idx) => (
                    <motion.div
                        key={idx}
                        className="overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => openModal(idx)}
                        variants={item}
                    >
                        <img
                            src={src}
                            alt={`Ruha ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Mobile Swiper */}
            <div className="md:hidden">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    spaceBetween={10}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ type: "progressbar" }}
                    className="rounded-xl overflow-hidden shadow-lg"
                >
                    {images.map((src, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                className="overflow-hidden rounded-lg cursor-pointer"
                                onClick={() => openModal(idx)}
                            >
                                <img
                                    src={src}
                                    alt={`Ruha ${idx + 1}`}
                                    className="w-full h-140 object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal / Lightbox */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-4 right-4 text-white text-2xl font-bold"
                        onClick={closeModal}
                    >
                        &times;
                    </button>

                    <button
                        className="absolute left-4 text-white text-3xl font-bold"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                        }}
                    >
                        &#10094;
                    </button>

                    <img
                        src={images[currentIndex]}
                        alt={`Ruha ${currentIndex + 1}`}
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        className="absolute right-4 text-white text-3xl font-bold"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                        }}
                    >
                        &#10095;
                    </button>
                </div>
            )}
        </section>
    );
}