import type { Metadata } from "next";
// 1. Modern yazı tipini Google Fonts üzerinden içe aktarıyoruz
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Kendi bileşenlerinizin içe aktarımları (Projenizdeki yollara göre ayarlayabilirsiniz)
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// 2. Yazı tipi ayarlarını yapılandırıyoruz
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"], // Türkçe karakter desteği için
  display: "swap",                 // Yüklenme sırasında metinlerin görünür kalmasını sağlar
  weight: ["300", "400", "500", "600", "700"], // İhtiyaç duyulan kalınlıklar
});

export const metadata: Metadata = {
  title: "Lisa Pelet",
  description: "Lisa Pelet Kurumsal Web Sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      {/* 3. className içerisine plusJakarta.className ekleyerek fontu tüm siteye uyguluyoruz.
        'antialiased' sınıfı (Tailwind) yazı kenarlarını yumuşatarak Apple cihazlarındaki gibi pürüzsüz ve modern bir görünüm katar.
      */}
      <body className={`${plusJakarta.className} antialiased min-h-screen flex flex-col bg-white text-slate-900`}>
        <Navbar />
        
        {/* İçerik ve Footer'ı saran ortak kapsayıcı 
            - Masaüstünde Navbar solda sabit olduğu için (md:pl-64) hem ana içeriği hem de footer'ı beraber sağa kaydırıyoruz.
        */}
        <div className="flex flex-col flex-grow md:pl-64">
          {/* pt-16 ile mobil görünümdeki boşluğu azalttık (önceden pt-24'tü) */}
          <main className="flex-grow pt-16 md:pt-0">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}