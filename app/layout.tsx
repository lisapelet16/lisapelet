import type { Metadata } from "next";
// Ortamdaki font çözümleme hatasını engellemek için font importunu şimdilik yorum satırına alıyoruz
// import { Inter } from "next/font/google";
import "./globals.css";

// Dosya yollarını projenizdeki dizin yapısına göre (root/components) en güvenli şekilde güncelliyoruz
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lisa Pelet - Kaliteli ve Ekonomik Yakıt Çözümleri",
  description: "Bursa'da yüksek kaliteli pelet üretimi ve satışı. Doğal, çevreci ve yüksek verimli ısınma çözümleri.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="bg-white text-gray-900 flex flex-col min-h-screen" style={{ fontFamily: 'sans-serif' }}>
        {/* Navbar bileşeni sabit (fixed) konumdadır */}
        <Navbar />
        
        {/* HEM MOBİL HEM MASAÜSTÜ İÇİN DÜZENLEME:
          1. Mobil (Üst Navbar): pt-20 (padding-top) kullanarak içeriği üstteki Navbar'ın altından başlatıyoruz.
          2. Masaüstü (Yan Sidebar): 
             - md:pt-0: Üstteki boşluğu sıfırlıyoruz çünkü Navbar artık yanda.
             - md:pl-64: Navbar sol tarafta bir sidebar (yan menü) olduğu için içeriği soldan 64 birim (256px) sağa kaydırıyoruz.
        */}
        <main className="flex-grow pt-20 md:pt-0 md:pl-64">
          {children}
        </main>

        {/* Footer'ın da Sidebar genişliği kadar soldan boşluk bırakması gerekir */}
        <div className="md:pl-64">
          <Footer />
        </div>
      </body>
    </html>
  );
}