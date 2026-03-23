import Link from 'next/link';
import Image from 'next/image';
import { Flame, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 text-stone-400 pt-16 pb-24 md:pb-20 px-8 lg:px-16 shrink-0 relative overflow-hidden">
      {/* DÜZELTME: mt-auto kaldırıldı, flex yapısında ezilmemesi için shrink-0 eklendi. Alt boşluk (pb-24 ve md:pb-20) artırılarak tarayıcı kesilmelerine karşı "güvenli alan" oluşturuldu. */}
      {/* Arka plan dekoratif ateş efekti */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 relative z-10">
        
        {/* Sol Alan - Logo ve Açıklama */}
        <div className="max-w-sm">
          <Link href="/" className="block mb-6 group w-max">
            <Image 
              src="/beyaz-logo.png" 
              alt="Lisa Pelet Logo" 
              width={140} 
              height={140}
              priority 
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <p className="text-stone-500 leading-relaxed font-medium text-sm">
            Doğanın gücünü evlerinize taşıyan, sürdürülebilir ve yüksek enerjili premium pelet yakıtı. Gelecek için üretiyoruz.
          </p>
        </div>

        {/* Sağ Alan - Bağlantılar */}
        <div className="grid grid-cols-2 gap-12 md:gap-24 w-full lg:w-auto">
          {/* Menü */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Menü</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link href="/hakkimizda" className="hover:text-orange-500 transition-colors flex items-center gap-1 group w-max">
                  Hakkımızda <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="hover:text-orange-500 transition-colors flex items-center gap-1 group w-max">
                  Ürünler <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-orange-500 transition-colors flex items-center gap-1 group w-max">
                  İletişim <ArrowUpRight size={14} className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Sosyal Medya */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Sosyal</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#" className="hover:text-orange-500 transition-colors block w-max">Instagram</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors block w-max">LinkedIn</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors block w-max">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alt Bilgi (Copyright) */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-stone-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium relative z-10">
        <p>&copy; {new Date().getFullYear()} Lisa Pelet. Tüm hakları saklıdır.</p>
        <p className="text-stone-600">Sıcaklığın En Doğal Hali</p>
      </div>
    </footer>
  );
}