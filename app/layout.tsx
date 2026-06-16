import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
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
    default: "Footwell Podiatry | Podiatrist in Preston, Lancashire",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Footwell Podiatry is a HCPC registered podiatrist in Broughton, Preston, Lancashire. We provide routine foot care, biomechanics assessments, nail surgery, verruca treatment, and diabetic foot checks. Serving Preston, Broughton, and across Lancashire.",
  keywords: [
    "podiatrist Preston",
    "podiatrist Lancashire",
    "podiatrist Broughton",
    "chiropodist Preston",
    "chiropodist Lancashire",
    "foot care Preston",
    "HCPC podiatrist Preston",
    "biomechanics assessment Preston",
    "diabetic foot care Preston",
    "ingrown toenail treatment Preston",
    "verruca treatment Preston",
    "plantar fasciitis Preston",
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
    title: "Footwell Podiatry | Podiatrist in Preston, Lancashire",
    description:
      "HCPC registered podiatrist in Broughton, Preston, Lancashire. Routine foot care, biomechanics, nail surgery, and diabetic foot checks. Book online today.",
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
    title: "Footwell Podiatry | Podiatrist in Preston, Lancashire",
    description:
      "HCPC registered podiatrist in Broughton, Preston, Lancashire. Routine foot care, biomechanics, and diabetic foot checks.",
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
    areaServed: [
      "Preston",
      "Lancashire",
      "Broughton",
      "Fulwood",
      "Longridge",
      "Garstang",
      "Kirkham",
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.8108,
      longitude: -2.7192,
    },
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BQJPBW7VVL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BQJPBW7VVL');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BookingModalProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 border-b border-[#d4bfa8] bg-white/90 backdrop-blur">
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
                    className="rounded-none px-3 py-2 text-sm font-medium text-[#5c3d20] transition-colors hover:bg-[#fafaf8]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="rounded-none px-3 py-2 text-sm font-medium text-[#5c3d20] transition-colors hover:bg-[#fafaf8]"
                  >
                    Services
                  </Link>
                  <Link
                    href="/what-is-biomechanics"
                    className="rounded-none px-3 py-2 text-sm font-medium text-[#5c3d20] transition-colors hover:bg-[#fafaf8]"
                  >
                    Biomechanics
                  </Link>
                  <Link
                    href="/#contact"
                    className="rounded-none bg-[#7a5230] px-4 py-2 text-sm font-semibold text-[#f8fffe] transition-colors hover:bg-[#623f24]"
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
