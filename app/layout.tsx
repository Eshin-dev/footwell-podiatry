import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import BookingModalProvider from "./booking-modal-provider";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_OPENING_HOURS,
  BUSINESS_PHONE_E164,
  SITE_NAME,
  SITE_URL_WITH_BASE_PATH,
  absoluteUrl,
} from "./seo";
import SiteFooter from "./site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL_WITH_BASE_PATH}/`),
  title: {
    default: "Footwell Podiatry | Podiatrist in Broughton, Preston",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Footwell Podiatry provides patient-focused podiatry care in Broughton, Preston, including routine foot care, biomechanics assessments, and diabetic foot checks.",
  keywords: [
    "podiatrist Broughton",
    "podiatrist Preston",
    "foot care Preston",
    "biomechanics assessment",
    "diabetic foot care",
    "Footwell Podiatry",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    title: "Footwell Podiatry | Podiatrist in Broughton, Preston",
    description:
      "Professional, patient-focused podiatry care in Broughton, Preston. Book routine appointments, biomechanics assessments, and diabetic foot checks.",
    images: [
      {
        url: absoluteUrl("/footwell_logo.webp"),
        width: 1200,
        height: 630,
        alt: "Footwell Podiatry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Footwell Podiatry | Podiatrist in Broughton, Preston",
    description:
      "Professional, patient-focused podiatry care in Broughton, Preston.",
    images: [absoluteUrl("/footwell_logo.webp")],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.webp", type: "image/webp" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: absoluteUrl("/"),
  };
  const medicalBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE_NAME,
    image: absoluteUrl("/footwell_logo.webp"),
    url: absoluteUrl("/"),
    telephone: BUSINESS_PHONE_E164,
    email: BUSINESS_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS.streetAddress,
      addressLocality: BUSINESS_ADDRESS.addressLocality,
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: BUSINESS_ADDRESS.addressCountry,
    },
    openingHoursSpecification: BUSINESS_OPENING_HOURS.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    areaServed: "Preston",
    priceRange: "GBP",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE_E164,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BookingModalProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 border-b border-[#cfe1df] bg-[#f4f8f8]/90 backdrop-blur">
              <nav
                className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3"
                aria-label="Main navigation"
              >
                <Link href="/" aria-label="Footwell Podiatry home">
                  <Image
                    src={`${basePath}/footwell_logo_nav.webp`}
                    alt="Footwell Podiatry"
                    width={500}
                    height={120}
                    className="h-auto w-42.5 md:w-57.5"
                    sizes="(max-width: 768px) 170px, 230px"
                    priority
                  />
                </Link>
                <div className="flex items-center gap-2 md:gap-3">
                  <Link
                    href="/"
                    className="rounded-none px-3 py-2 text-sm font-medium text-[#2c5a5d] transition-colors hover:bg-[#e4f0ee]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-none px-3 py-2 text-sm font-medium text-[#2c5a5d] transition-colors hover:bg-[#e4f0ee]"
                  >
                    Services
                  </Link>
                  <Link
                    href="/what-is-biomechanics"
                    className="rounded-none px-3 py-2 text-sm font-medium text-[#2c5a5d] transition-colors hover:bg-[#e4f0ee]"
                  >
                    Biomechanics
                  </Link>
                  <Link
                    href="/#contact"
                    className="rounded-none bg-[#2f7b79] px-4 py-2 text-sm font-semibold text-[#f8fffe] transition-colors hover:bg-[#266866]"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </header>
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessJsonLd) }}
          />
        </BookingModalProvider>
      </body>
    </html>
  );
}
