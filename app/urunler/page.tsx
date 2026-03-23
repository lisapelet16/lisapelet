import Link from 'next/link';
import { Package, Truck, Check } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-24 px-8 lg:px-16 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-stone-900 mb-6 tracking-tight">Ürünlerimiz</h1>
          <p className="text-xl text-stone-500 font-medium max-w-2xl mx-auto">İster evinizdeki sobanız için, ister fabrikanızın kazanı için. İhtiyacınız olan boyutta, her zaman aynı premium kalite.</p>
        </div>

        {/* 3. DÜZELTME: Kartların yan yana eşit durması için items-start yerine items-stretch ve hizalama marjinleri kaldırıldı */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* ÜRÜN 1: Ev Tipi 15 KG */}
          <div className="bg-white rounded-[3rem] p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-100 group flex flex-col">
            
            {/* DÜZELTME: Görsel placeholder alanı kesik çizgilerle daha görünür yapıldı */}
            <div className="h-80 bg-stone-50 rounded-[2.5rem] mb-8 flex flex-col items-center justify-center relative overflow-hidden border-2 border-dashed border-stone-200">
              <div className="absolute top-6 left-6 bg-orange-500 text-white text-xs font-black px-4 py-2 rounded-full tracking-widest uppercase shadow-lg z-10">En Çok Satan</div>
              <Package className="text-stone-300 w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-stone-400 font-bold tracking-widest text-sm uppercase">[15 KG Pelet Çuvalı Görseli]</span>
            </div>
            
            <div className="px-6 pb-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl md:text-4xl font-black text-stone-900">Premium Pelet <br/><span className="text-orange-600 text-2xl">15 KG Çuval</span></h2>
                <Package className="text-stone-300 hidden sm:block" size={40} />
              </div>
              <p className="text-stone-500 font-medium leading-relaxed mb-8 flex-1">
                Ev tipi pelet sobaları ve küçük kalorifer sistemleri için kusursuz seçim. Tozsuz, standart boyutlu ve istiflemesi kolay.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><Check size={14} /></div><span className="font-bold text-stone-700">Çap: 6 mm</span></div>
                <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><Check size={14} /></div><span className="font-bold text-stone-700">Kül Oranı: &lt; %0.5</span></div>
                <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><Check size={14} /></div><span className="font-bold text-stone-700">Kalori: 5200 kcal/kg</span></div>
              </div>

              <Link href="/iletisim" className="block w-full text-center bg-stone-950 hover:bg-orange-600 text-white font-bold py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(234,88,12,0.4)] mt-auto">
                Sipariş Hattını Ara
              </Link>
            </div>
          </div>

          {/* ÜRÜN 2: Sanayi Tipi Big Bag */}
          <div className="bg-white rounded-[3rem] p-4 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-100 group flex flex-col">
            
            {/* DÜZELTME: Görsel placeholder alanı kesik çizgilerle daha görünür yapıldı */}
            <div className="h-80 bg-stone-900 rounded-[2.5rem] mb-8 flex flex-col items-center justify-center relative overflow-hidden border-2 border-dashed border-stone-700">
               <div className="absolute top-6 left-6 bg-stone-700 text-white text-xs font-black px-4 py-2 rounded-full tracking-widest uppercase shadow-lg border border-stone-600 z-10">Sanayi Tipi</div>
               <Truck className="text-stone-700 w-20 h-20 mb-4 group-hover:scale-110 transition-transform duration-500" />
               <span className="text-stone-500 font-bold tracking-widest text-sm uppercase">[Big Bag Çuvalı Görseli]</span>
            </div>
            
            <div className="px-6 pb-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl md:text-4xl font-black text-stone-900">Endüstriyel Pelet <br/><span className="text-stone-500 text-2xl">1000 KG Big Bag</span></h2>
                <Truck className="text-stone-300 hidden sm:block" size={40} />
              </div>
              <p className="text-stone-500 font-medium leading-relaxed mb-8 flex-1">
                Fabrikalar, oteller ve seralar için toptan alımlarda en ekonomik çözüm. Forklift ile taşımaya uygun dev çuval ambalaj.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><Check size={14} /></div><span className="font-bold text-stone-700">Çap: 6 mm / 8 mm Seçeneği</span></div>
                <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><Check size={14} /></div><span className="font-bold text-stone-700">Kül Oranı: &lt; %1.0</span></div>
                <div className="flex items-center gap-3"><div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><Check size={14} /></div><span className="font-bold text-stone-700">Nem Oranı: &lt; %10</span></div>
              </div>

              <Link href="/iletisim" className="block w-full text-center bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold py-5 rounded-2xl transition-colors duration-300 border border-stone-200 mt-auto">
                Toptan Teklif İste
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}