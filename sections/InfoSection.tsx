"use client";

export default function InfoSection() {
    const infoItems = [
        { icon: "💰", title: "Ár", description: "150 000 – 500 000 Ft" },
        { icon: "⏱️", title: "Próba idő", description: "60–90 perc személyes konzultáció" },
        { icon: "👩‍❤️‍👩", title: "Kísérők", description: "2–3 fő kísérővel érkezhetsz" },
    ];

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl font-bold mb-8">Alapinformációk</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {infoItems.map((item, idx) => (
                    <div key={idx} className="card flex flex-col items-center text-center">
                        <div className="text-5xl mb-4 text-highlight">{item.icon}</div>
                        <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                        <p className="text-grayDark">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}