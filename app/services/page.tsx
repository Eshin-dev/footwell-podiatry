import type { Metadata } from "next";
import BookAppointmentButton from "../book-appointment-button";
import { SITE_NAME, absoluteUrl } from "../seo";

export const metadata: Metadata = {
    title: "Podiatry Services and Prices",
    description:
        "View Footwell Podiatry service details and prices, including routine podiatry care, biomechanics assessments, verruca treatment, and home visits.",
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: `Services and Prices | ${SITE_NAME}`,
        description:
            "Clear service options and pricing for podiatry appointments in Broughton, Preston.",
        url: absoluteUrl("/services"),
    },
};

const services = [
    {
        name: "Routine Podiatry/Chiropody Appointment",
        duration: "Approximately 30 minutes",
        price: "£40",
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
        price: "£65",
        details: [
            "General podiatry care followed by warm wax treatment with essential oils",
            "Designed to help with dry skin and aching joints",
        ],
    },
    {
        name: "Biomechanical Assessment",
        duration: "1 hour",
        price: "£75",
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
        price: "£55",
        details: [
            "Topical nitrizinc complex treatment that desiccates infected tissue",
            "Usually provided every 2 weeks for 6 sessions",
            "Repeat courses may be required",
        ],
    },
    {
        name: "Home Visits",
        duration: "Subject to availability",
        price: "£50",
        details: [
            "Reserved for patients unable to attend clinic due to health, mobility, or vulnerability reasons",
            "Available for routine podiatry within 3 miles of PR3 5NJ",
            "Call 07552 514 505 or email info@footwell-podiatry.co.uk to enquire",
        ],
    },
];

export default function ServicesPage() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: absoluteUrl("/"),
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: absoluteUrl("/services"),
            },
        ],
    };
    const serviceListJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Footwell Podiatry Services",
        itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "Service",
                name: service.name,
                provider: {
                    "@type": "MedicalBusiness",
                    name: SITE_NAME,
                },
            },
        })),
    };

    return (
        <main className="bg-[#fafaf8] pb-20 text-[#2c1a0f]">
            <section
                className="relative overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url('${basePath}/main-background-foot.webp')` }}
            >
                <div className="absolute inset-0 bg-white/85" aria-hidden="true" />
                <div className="relative mx-auto w-full max-w-6xl px-6 pb-14 pt-20 md:pb-16 md:pt-24">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#7a5230]">
                        Appointments and Prices
                    </p>
                    <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
                        Service Details and Price List
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#5c4033] md:text-lg">
                        Clear pricing and straightforward appointment options so you know what
                        to expect before you book.
                    </p>
                </div>
            </section>

            <section className="mx-auto mt-10 grid w-full max-w-6xl gap-5 px-6">
                {services.map((service) => (
                    <article
                        key={service.name}
                        className="border border-[#d4bfa8] bg-white p-6 shadow-[0_10px_30px_rgba(74,46,26,0.08)]"
                    >
                        <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#e8d5c0] pb-4">
                            <div>
                                <h2 className="text-2xl font-semibold leading-tight text-[#2c1a0f] md:text-3xl">
                                    {service.name}
                                </h2>
                                <p className="mt-2 text-sm text-[#5c4033]">{service.duration}</p>
                            </div>
                            <p className="rounded-none bg-[#fafaf8] px-4 py-2 text-lg font-semibold text-[#7a5230]">
                                {service.price}
                            </p>
                        </div>

                        <ul className="mt-4 grid gap-2 text-[#5c4033]">
                            {service.details.map((detail) => (
                                <li key={detail} className="flex gap-2 leading-relaxed">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#7a5230]" aria-hidden="true" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <BookAppointmentButton size="small" />
                        </div>
                    </article>
                ))}
            </section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListJsonLd) }}
            />
        </main>
    );
}
