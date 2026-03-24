"use client";

export default function Booking() {
    const phoneNumber = "+36 30 123 4567"; // ide írd a saját telefonszámod

    return (
        <section id="booking" className="py-16 bg-white border-t-2 border-t-gray-300">
            <div className="max-w-2xl mx-auto text-center mb-12 px-4">
                <h2 className="text-3xl font-script mb-4">Időpontfoglalás</h2>
                <p className="text-grayDark mb-6">
                    Időpontot kizárólag telefonos egyeztetéssel tudsz kérni. Kérjük, hívd a lenti számot a foglaláshoz!
                </p>
                <button>
                    <a
                        href={`tel:${phoneNumber}`}
                        className="inline-block bg-accent text-primary font-semibold text-lg rounded-xl shadow-button transition-all duration-400 hover:bg-highlight hover:shadow-hoverCard"
                    >
                        Hívás most
                    </a>

                </button>
                <p className="text-grayDark mt-4 text-sm">
                    Elérhetőség: <strong>{phoneNumber}</strong>
                </p>
            </div>
        </section>
    );
}