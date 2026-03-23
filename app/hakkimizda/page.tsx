import { Target, Lightbulb, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* Başlık Alanı */}
      <div className="bg-stone-950 text-white pt-24 pb-32 px-8 lg:px-16 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-800/50 to-transparent rotate-12 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Gelecek İçin <br/><span className="text-orange-500">Üretiyoruz.</span></h1>
          <p className="text-xl text-stone-400 font-light max-w-2xl mx-auto">Sıcaklığın kaynağı doğadır dedik ve yola çıktık. Lisa Pelet'in hikayesine hoş geldiniz.</p>
        </div>
      </div>

      {/* İçerik Alanı */}
      <div className="max-w-5xl mx-auto px-8 lg:px-16 -mt-16 relative z-20 pb-24">
        
        {/* Ana Hikaye Kartı */}
        <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-stone-100 mb-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 text-stone-600 text-lg leading-relaxed font-medium">
            <p>
              <strong className="text-stone-900 font-black text-2xl">Lisa Pelet</strong> olarak, sadece bir yakıt değil, bir ısınma kültürü üretiyoruz. Modern dünyamızın artan enerji ihtiyaçlarını karşılarken, yegane evimiz olan dünyamızı korumak zorundayız.
            </p>
            <p>
              Kurduğumuz son teknoloji üretim tesisimizde, orman ürünleri endüstrisinin artıklarını alıp, onlara hiçbir kimyasal veya tutkal eklemeden devasa basınçlarla presliyoruz. Çam ağacının kendi öz suyu, peletlerimizin bir arada durmasını sağlıyor.
            </p>
          </div>
          <div className="w-full md:w-1/2 aspect-square bg-stone-100 rounded-[2rem] flex items-center justify-center border-4 border-white shadow-inner overflow-hidden relative group">
            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="text-stone-400 font-bold tracking-widest"></span>
          </div>
        </div>

        {/* Vizyon & Misyon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[2rem] border border-stone-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-stone-950 text-white rounded-2xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-black text-stone-900 mb-4">Misyonumuz</h3>
            <p className="text-stone-500 font-medium">Tüketicilere en ekonomik, en temiz ve en yüksek kalorili ısıtma çözümünü sunmak.</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] border border-stone-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-2xl font-black text-stone-900 mb-4">Vizyonumuz</h3>
            <p className="text-stone-500 font-medium">Yenilenebilir enerjide Türkiye'nin lider ve en güvenilir pelet markası olmak.</p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] border border-stone-100 hover:shadow-xl transition-shadow">
            <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-2xl font-black text-stone-900 mb-4">Değerlerimiz</h3>
            <p className="text-stone-500 font-medium">Dürüst ticaret, %100 müşteri memnuniyeti ve doğaya koşulsuz saygı.</p>
          </div>
        </div>

      </div>
    </div>
  );
}