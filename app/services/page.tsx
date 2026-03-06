const services = [
    {
        name: "Routine Podiatry/Chiropody Appointment",
        duration: "Approximately 30 minutes",
        price: "GBP 40",
        details: [
            "Routine nail and skin care",
            "Complex nail care",
            "Verrucae treatment (specialist treatment may have additional costs)",
            "Corn and callus removal",
            "Cracked heels",
            "Ingrowing toenails",
            "Fungal nail and skin care",
            "Skin and dermatological conditions affecting the feet",
            "Footwear advice",
            "Wound care",
            "Diabetic foot care",
        ],
    },
    {
        name: "Routine Podiatry/Chiropody with Luxury Warm Wax Therapy",
        duration: "1 hour",
        price: "GBP 65.00",
        details: [
            "General podiatry care followed by warm wax treatment with essential oils",
            "Designed to help with dry skin and aching joints",
        ],
    },
    {
        name: "Biomechanical Assessment",
        duration: "1 hour",
        price: "GBP 75.00",
        details: [
            "Discussion and examination of the existing problem",
            "Biomechanical assessment and tests",
            "Observational gait assessment",
            "Footwear assessment",
            "Orthotic prescription and tailored rehabilitation programme if indicated",
            "Orthotics are an additional cost, typically ranging from GBP 40 to GBP 275 depending on device",
        ],
    },
    {
        name: "Verrutop Treatment (Verrucae)",
        duration: "Follow-up treatment course",
        price: "GBP 55.00",
        details: [
            "Topical nitrizinc complex treatment that desiccates infected tissue",
            "Usually provided every 2 weeks for 6 sessions",
            "Repeat courses may be required",
        ],
    },
    {
        name: "Home Visits",
        duration: "Subject to availability",
        price: "GBP 50.00",
        details: [
            "Reserved for patients unable to attend clinic due to health, mobility, or vulnerability reasons",
            "Available for routine podiatry within 3 miles of PR3 5NJ",
            "Call 07552 514 505 or email info@footwell-podiatry.co.uk to enquire",
        ],
    },
];

export default function ServicesPage() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

    return (
        <main className="bg-[radial-gradient(circle_at_12%_16%,#e6f2f0_0,transparent_30%),radial-gradient(circle_at_88%_22%,#f8ece1_0,transparent_26%),linear-gradient(180deg,#f4f8f8_0%,#f8fbfb_46%,#eaf3f3_100%)] pb-20 text-[#12363a]">
            <section
                className="relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url('${basePath}/main-background-foot.webp')` }}
            >
                <div className="absolute inset-0 bg-[#f4f8f8]/85" aria-hidden="true" />
                <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-20 md:pb-16 md:pt-24">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#2f7b79]">
                        Appointments and Prices
                    </p>
                    <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                        Service Details and Price List
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#39585c] md:text-lg">
                        Clear pricing and straightforward appointment options so you know what
                        to expect before you book.
                    </p>
                </div>
            </section>

            <section className="mx-auto mt-10 grid w-full max-w-6xl gap-5 px-6">
                {services.map((service) => (
                    <article
                        key={service.name}
                        className="border border-[#c6dedb] bg-white p-6 shadow-[0_10px_30px_rgba(20,63,66,0.08)]"
                    >
                        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#e3efee] pb-4">
                            <div>
                                <h2 className="text-2xl font-semibold leading-tight text-[#12363a] md:text-3xl">
                                    {service.name}
                                </h2>
                                <p className="mt-2 text-sm text-[#39585c]">{service.duration}</p>
                            </div>
                            <p className="rounded-full bg-[#e8f4f2] px-4 py-2 text-lg font-semibold text-[#175d5d]">
                                {service.price}
                            </p>
                        </div>

                        <ul className="mt-4 grid gap-2 text-[#39585c]">
                            {service.details.map((detail) => (
                                <li key={detail} className="flex gap-2 leading-relaxed">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2f7b79]" aria-hidden="true" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </section>
        </main>
    );
}
