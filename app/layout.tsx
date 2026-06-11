import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "Lisa Pelet | Premium Çam Peleti",
    template: "%s | Lisa Pelet",
  },
  description:
    "Sobalar için yüksek kalorili, düşük kül oranlı premium çam peleti. 15 kg ve 25 kg ambalaj seçenekleriyle Bursa ve çevresine teslimat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={plusJakarta.variable}>
      <body className={`${plusJakarta.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
