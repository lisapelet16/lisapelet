import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Lisa Pelet | Premium Çam Peleti',
  description: 'Evinizi ve iş yerinizi ısıtmanın en doğal, ekonomik ve şık yolu. %100 doğal çam peleti.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${outfit.className} bg-stone-100 text-stone-900 flex h-screen overflow-hidden selection:bg-orange-500 selection:text-white`}>
        
        <Navbar />
        
        <div className="flex-1 flex flex-col overflow-y-auto md:ml-72 relative scroll-smooth bg-stone-50">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

      </body>
    </html>
  );
}