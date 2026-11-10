import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Crest Kite Advisory & Assurance LLC | Tax, Audit & Financial Advisory UAE",
  description:
    "Premium financial advisory, corporate tax, VAT, audit & assurance, and accounting services for multinational groups, conglomerates and high-growth enterprises in the UAE, GCC and international markets.",
  keywords: [
    "UAE tax advisory",
    "corporate tax UAE",
    "VAT advisory Dubai",
    "audit assurance UAE",
    "transfer pricing UAE",
    "IFRS accounting",
    "financial advisory Dubai",
    "DIFC accounting firm",
  ],
  openGraph: {
    title: "Crest Kite Advisory & Assurance LLC",
    description:
      "Pioneering audit governance, precision tax structuring, and compliance excellence in the UAE.",
    type: "website",
    locale: "en_AE",
    siteName: "Crest Kite Advisory & Assurance LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crest Kite Advisory & Assurance LLC",
    description: "Premium financial advisory services in the UAE.",
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
