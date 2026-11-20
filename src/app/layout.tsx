import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Crest Line Finance and Tax Consultants LLC | Tax, Audit & Accounting UAE",
  description:
    "Your trusted partner in tax advisory, corporate tax, VAT, audit & assurance, and accounting services for businesses across the UAE.",
  keywords: [
    "UAE tax advisory",
    "corporate tax UAE",
    "VAT advisory Dubai",
    "audit assurance UAE",
    "transfer pricing UAE",
    "IFRS accounting",
    "financial advisory Dubai",
    "tax consultants Dubai",
  ],
  openGraph: {
    title: "Crest Line Finance and Tax Consultants LLC",
    description:
      "Your trusted partner in tax, audit, accounting and consulting in the UAE.",
    type: "website",
    locale: "en_AE",
    siteName: "Crest Line Finance and Tax Consultants LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crest Line Finance and Tax Consultants LLC",
    description: "Your trusted partner in tax, audit, accounting and consulting in the UAE.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
