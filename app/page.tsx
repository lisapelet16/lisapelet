import Link from 'next/link';
import { Flame, Leaf, Wind, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="animate-in fade-in duration-1000">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center px-8 lg:px-16 overflow-hidden bg-stone-950 text-white rounded-b-[3rem] lg:rounded-b-[4rem] shadow-2xl z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-600/20 via-orange-900/10 to-transparent rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 pt-20 md:pt-0">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-stone-900/80 border border-stone-800 backdrop-blur-sm text-amber-400 text-sm font-bold tracking-widest uppercase">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              Premium Çam Peleti
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
              Doğanın <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">Ateşleyici</span> <br />
              Gücü.
            </h1>
            
            <p className="text-lg md:text-xl text-stone-400 max-w-lg leading-relaxed font-light">
              Yüksek kalorili, sıfır karbon izi bırakan %100 doğal Lisa Pelet ile mekanlarınızı kusursuz bir şekilde ısıtın.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/urunler" className="group relative inline-flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(234,88,12,0.4)]">
                <div className="absolute inset-0 w-0 bg-white/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative">Ürünleri Keşfet</span>
                <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/iletisim" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white border border-stone-700 hover:bg-stone-800 transition-colors">
                Toptan Alım
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-stone-900 to-stone-800 rounded-[3rem] border border-stone-700/50 overflow-hidden group">
              <div className="w-full h-full bg-stone-800 flex flex-col items-center justify-center relative">
                <Flame className="w-48 h-48 text-orange-500/10 absolute group-hover:scale-110 transition-transform duration-700" />
                <span className="text-stone-500 font-bold tracking-widest z-10">[Yanan Pelet Sobası Görseli]</span>
              </div>
            </div>
            
            <div className="absolute bottom-10 -left-10 bg-stone-900/95 backdrop-blur-md border border-stone-700 p-6 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce hover:animate-none z-20">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <p className="text-stone-400 text-sm font-medium">Maksimum Verim</p>
                <p className="text-white font-black text-xl">5200 kcal/kg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÖZELLİKLER SECTION */}
      <section className="py-32 px-8 lg:px-16 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-orange-600 font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                <ShieldCheck size={20} /> Kalite Standartları
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">Mükemmel ısınma deneyimi için tasarlandı.</h3>
            </div>
            <p className="text-stone-600 font-medium max-w-md">Standartların ötesindeki üretim sürecimizle, sobanızı korur ve cebinize dost bir performans sunarız.</p>
          </div>

          {/* DÜZELTME: Kartların hepsinin aynı boyutta olması için items-stretch eklendi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Kart 1: Üstün Isı Değeri */}
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.15)] transition-all duration-500 border border-stone-100 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-3xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-orange-600 group-hover:text-white">
                <Flame size={36} />
              </div>
              <h4 className="text-2xl font-black text-stone-900 mb-4">Üstün Isı Değeri</h4>
              <p className="text-stone-500 leading-relaxed font-medium">Çam ağacının doğal reçinesi sayesinde tutuşması kolaydır ve uzun süreli, istikrarlı bir ısı sağlar.</p>
            </div>

            {/* Kart 2: Doğaya Saygı (DÜZELTME: md:translate-y-8 kaldırıldı, hepsi aynı hizada) */}
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] transition-all duration-500 border border-stone-100 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-emerald-600 group-hover:text-white">
                <Leaf size={36} />
              </div>
              <h4 className="text-2xl font-black text-stone-900 mb-4">Doğaya Saygı</h4>
              <p className="text-stone-500 leading-relaxed font-medium">Hiçbir ağaç kesilmez. Sadece ahşap endüstrisi atıkları geri dönüştürülerek %100 çevre dostu yakıt elde edilir.</p>
            </div>

            {/* Kart 3: Yok Denecek Kadar Kül */}
            <div className="group bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)] transition-all duration-500 border border-stone-100 hover:-translate-y-2">
              <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-600 group-hover:text-white">
                <Wind size={36} />
              </div>
              <h4 className="text-2xl font-black text-stone-900 mb-4">Yok Denecek Kadar Kül</h4>
              <p className="text-stone-500 leading-relaxed font-medium">%1'in altındaki kül oranıyla kazanınızın veya sobanızın ömrünü uzatır, temizlik zahmetinden kurtarır.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}