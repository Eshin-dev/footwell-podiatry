import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import BookingModalProvider from "./booking-modal-provider";
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
  title: "Footwell Podiatry | Professional Foot Care",
  description:
    "Footwell Podiatry offers patient-focused podiatry care with clear advice, evidence-based treatment, and a welcoming clinical approach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
        </BookingModalProvider>
      </body>
    </html>
  );
}
