import type { Metadata } from "next";
import { Cormorant_Garamond, Tenor_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const tenorSans = Tenor_Sans({
  variable: "--font-tenor-sans",
  subsets: ["latin"],
  weight: ["400"],
});



export const metadata: Metadata = {
  title: "Jewelry Store & Custom Designs | Maple Grove, MN | Goldwear Jewelers",
  description: "Family-owned jewelry store in Maple Grove, MN since 1986. Specializing in custom engagement rings, expert jewelry repair, and watch battery replacements.",
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  "name": "Goldwear Jewelers",
  "image": "https://goldwearjewelers.com/images/goldwear-logo.jpg",
  "@id": "https://goldwearjewelers.com/#store",
  "url": "https://goldwearjewelers.com",
  "telephone": "(763) 420-8060",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "13689 Grove Drive",
    "addressLocality": "Maple Grove",
    "addressRegion": "MN",
    "postalCode": "55311",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.102714,
    "longitude": -93.4548696
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "10:00",
    "closes": "17:00"
  },
  "sameAs": [
    "https://www.facebook.com/goldwearjewelers"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${tenorSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {/* Announcement Bar */}
        <div className="w-full bg-[#0a0a0a] text-white py-2.5 px-4 text-center border-b border-[#b89d5a]/20">
          <p className="font-sans text-[10px] md:text-[11px] font-normal tracking-[2px] uppercase">
            FREE WATCH ADJUSTMENTS & JEWELRY CLEANING WITH ANY REPAIR | SENIOR DISCOUNTS AVAILABLE
          </p>
        </div>
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
