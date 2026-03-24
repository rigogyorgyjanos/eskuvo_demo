"use client";

export default function Hero({ scrollToId }: { scrollToId?: string }) {
    return (
        <section className="relative h-screen w-full bg-cover bg-center border-b-2 border-b-gray-300" style={{ backgroundImage: "url('/hero.jpg')" }}>
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
                <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-white mb-4">
                    Találd meg azt a ruhát, amiben önmagad vagy
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-xl">
                    Prémium menyasszonyi ruhák Budapesten, személyes próbával
                </p>
                <button onClick={() => document.getElementById(scrollToId!)?.scrollIntoView({ behavior: "smooth" })}>
                    Időpontfoglalás
                </button>
            </div>
        </section>
    );
}