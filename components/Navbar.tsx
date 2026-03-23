"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Home, Info, Package, Phone, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/', icon: <Home size={20} /> },
    { name: 'Hakkımızda', href: '/hakkimizda', icon: <Info size={20} /> },
    { name: 'Ürünlerimiz', href: '/urunler', icon: <Package size={20} /> },
    { name: 'İletişim', href: '/iletisim', icon: <Phone size={20} /> },
  ];

  return (
    <>
      {/* MOBİL ÜST BAR (Sadece küçük ekranlarda görünür) */}
      {/* DÜZELTME: Şeffaflık kaldırıldı. Her zaman koyu renkli (bg-stone-950) ve belirgin olacak şekilde sabitlendi. Böylece açık renkli sayfalarda logonun kaybolması engellendi. */}
      <div className="md:hidden fixed top-0 left-0 w-full z-40 bg-stone-950 shadow-lg py-3 border-b border-stone-800 px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
          <Image 
            src="/beyaz-logo.png" 
            alt="Lisa Pelet Logo" 
            width={120} 
            height={40}
            priority
            className="object-contain"
          />
        </Link>
        <button onClick={() => setIsOpen(true)} className="text-white hover:text-orange-400 transition-colors p-1">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobilde arkaplan karartması */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden animate-in fade-in duration-300" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SOL MENÜ (Sidebar - Desktop'ta sabit, Mobilde çekmece) */}
      <nav className={`
        fixed top-0 left-0 h-screen bg-stone-950 border-r border-stone-800 z-[60]
        flex flex-col w-72 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        
        {/* Logo ve Kapatma Butonu Alanı */}
        <div className="p-6 md:p-8 pb-8 md:pb-12 flex justify-between items-start">
          <Link href="/" className="block group w-max" onClick={() => setIsOpen(false)}>
            <div className="relative w-28 md:w-36 h-auto transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/beyaz-logo.png" 
                alt="Lisa Pelet Logo" 
                width={150} 
                height={150} 
                className="object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                priority
              />
            </div>
          </Link>

          <button onClick={() => setIsOpen(false)} className="md:hidden text-stone-400 hover:text-white transition-colors p-1">
            <X size={28} />
          </button>
        </div>

        {/* Linkler */}
        <div className="flex-1 px-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden
                  ${isActive ? 'text-white bg-stone-900/50' : 'text-stone-400 hover:text-white hover:bg-stone-900/30'}
                `}
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-r-full shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                )}
                
                <div className={`transition-transform duration-300 ${isActive ? 'scale-110 text-orange-500' : 'group-hover:scale-110 group-hover:text-orange-400'}`}>
                  {link.icon}
                </div>
                <span className="font-medium text-lg tracking-wide">{link.name}</span>
                
                <ChevronRight size={16} className={`ml-auto transition-transform duration-300 ${isActive ? 'opacity-100 translate-x-0 text-orange-500' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
              </Link>
            );
          })}
        </div>

        {/* Alt Kısım - Hızlı İletişim */}
        <div className="p-6 mt-auto">
          <a href="tel:4440000" className="block bg-gradient-to-br from-stone-900 to-stone-950 p-5 rounded-3xl border border-stone-800 relative overflow-hidden group cursor-pointer hover:border-orange-500/50 transition-colors">
            <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-2">Hızlı Destek</p>
            <p className="text-white font-bold flex items-center gap-2 group-hover:text-orange-400 transition-colors">
              <Phone size={16} /> 444 0 000
            </p>
          </a>
        </div>
      </nav>
    </>
  );
}