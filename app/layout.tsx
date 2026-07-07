import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import StickyCTA from "@/components/StickyCTA";
import UtmCapture from "@/components/UtmCapture";
import Analytics from "@/components/Analytics";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Satvik Amruttulya Franchise | Start a Tea Business for ₹2.5 Lakh | 0 Royalty",
  description:
    "Satvik Amruttulya amruttulya tea franchise — ₹2.5 lakh total setup, zero franchise fee, zero deposit, zero royalty, lifetime agreement. Pune head office, FSSAI licensed.",
  keywords: [
    "amruttulya franchise",
    "chai franchise Maharashtra",
    "tea franchise Pune",
    "tea franchise Maharashtra",
    "chai franchise under 3 lakh",
    "free tea franchise",
  ],
  openGraph: {
    title: "Satvik Amruttulya Franchise | Start a Tea Business for ₹2.5 Lakh",
    description: "0 Royalty · 0 Deposit · Lifetime agreement. Pune head office.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body">
        <LocalBusinessJsonLd />
        <Analytics />
        <UtmCapture />
        <TopBar />
        <Header />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
