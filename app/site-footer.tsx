import Link from "next/link";

const conditionColumns = [
    {
        title: "Pain & Injury Conditions",
        links: [
            "Foot Pain",
            "Heel Pain",
            "Ankle Pain",
            "Plantar Fasciitis",
            "Achilles Tendonitis",
            "Flat Feet",
        ],
    },
    {
        title: "Skin & Nail Conditions",
        links: [
            "Ingrowing Toenails",
            "Verrucae & Warts",
            "Fungal Nail Infections",
            "Corns & Calluses",
            "Damaged Nails",
            "Diabetic Foot Care",
        ],
    },
];

const serviceLinks = [
    "Routine Podiatry Care",
    "Nail Surgery",
    "Verruca Treatment",
    "Corn Treatment",
    "Diabetic Foot Checks",
    "Custom Orthotics",
];

const aboutLinks = ["About Us", "Meet The Team", "New Patients", "Prices", "Blog"];

export default function SiteFooter() {
    const currentYear = new Date().getFullYear();
    const sectionId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    return (
        <footer className="border-t border-[#d4bfa8] bg-[#fafaf8] text-[#4a2e1a]">
            <div className="mx-auto w-full max-w-6xl px-6 py-14">
                <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {conditionColumns.map((column) => (
                        <section key={column.title} aria-labelledby={sectionId(column.title)}>
                            <h2
                                id={sectionId(column.title)}
                                className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-[#7a5230]"
                            >
                                {column.title}
                            </h2>
                            <ul className="grid gap-2 text-sm leading-relaxed">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <Link href="/services" className="transition-colors hover:text-[#2c1a0f]">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}

                    <section aria-labelledby="footer-services">
                        <h2
                            id="footer-services"
                            className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-[#7a5230]"
                        >
                            Services
                        </h2>
                        <ul className="grid gap-2 text-sm leading-relaxed">
                            {serviceLinks.map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Custom Orthotics" ? "/what-is-biomechanics" : "/services"}
                                        className="transition-colors hover:text-[#2c1a0f]"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section aria-labelledby="footer-about">
                        <h2
                            id="footer-about"
                            className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-[#7a5230]"
                        >
                            About
                        </h2>
                        <ul className="grid gap-2 text-sm leading-relaxed">
                            {aboutLinks.map((link) => (
                                <li key={link}>
                                    <Link href="/" className="transition-colors hover:text-[#2c1a0f]">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 space-y-2 border-t border-[#d4bfa8] pt-5 text-sm leading-relaxed text-[#5c4033]">
                            <p className="font-semibold text-[#2c1a0f]">Get In Touch</p>
                            <p>
                                Phone: <a className="text-[#7a5230] hover:text-[#2c1a0f]" href="tel:+447552514505">07552 514 505</a>
                            </p>
                            <p>
                                Email: <a className="text-[#7a5230] hover:text-[#2c1a0f]" href="mailto:info@footwell-podiatry.co.uk">info@footwell-podiatry.co.uk</a>
                            </p>
                            <p>13 Northway, Broughton, Preston PR3 5JX</p>
                        </div>
                    </section>
                </div>

                <section className="mt-10 border-t border-[#d4bfa8] pt-8" aria-label="Map location">
                    <div className="overflow-hidden border border-[#d4bfa8] bg-white">
                        <iframe
                            title="Footwell Podiatry location map"
                            src="https://www.google.com/maps?q=Footwell%20Podiatry%2C%20Broughton&output=embed"
                            loading="lazy"
                            className="h-67.5 w-full md:h-80"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </section>

                <div className="mt-8 flex flex-col gap-3 border-t border-[#d4bfa8] pt-6 text-xs text-[#5c4033] md:flex-row md:items-center md:justify-between">
                    <p className="font-medium text-[#2c1a0f]">Footwell Podiatry</p>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="transition-colors hover:text-[#2c1a0f]">
                            Privacy Policy
                        </Link>
                        <Link href="/" className="transition-colors hover:text-[#2c1a0f]">
                            Terms & Conditions
                        </Link>
                    </div>
                    <p>Copyright Footwell Podiatry {currentYear}</p>
                </div>
            </div>
        </footer>
    );
}
