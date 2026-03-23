"use client";
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-24 px-8 lg:px-16 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-stone-900 mb-6 tracking-tight">İletişim</h1>
          <p className="text-xl text-stone-500 font-medium">Bize ulaşmak çok kolay. Sorularınız, siparişleriniz veya toptan teklifleriniz için yanınızdayız.</p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-stone-100 overflow-hidden flex flex-col xl:flex-row">
          
          {/* Sol Panel - İletişim Bilgileri */}
          <div className="bg-stone-950 text-white p-12 lg:p-16 xl:w-2/5 relative overflow-hidden">
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-600/20 blur-[80px] rounded-full"></div>
            
            <h3 className="text-3xl font-black mb-12 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Bize Ulaşın</h3>
            
            <div className="space-y-12 relative z-10">
              <div className="group flex gap-6">
                <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-colors duration-500">
                  <Phone className="text-orange-500 group-hover:text-white transition-colors" size={28} />
                </div>
                <div>
                  <h4 className="text-stone-500 font-bold uppercase tracking-wider text-sm mb-2">Telefon</h4>
                  <p className="text-2xl font-black">+90 (555) 123 45 67</p>
                </div>
              </div>

              <div className="group flex gap-6">
                <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-colors duration-500">
                  <Mail className="text-orange-500 group-hover:text-white transition-colors" size={28} />
                </div>
                <div>
                  <h4 className="text-stone-500 font-bold uppercase tracking-wider text-sm mb-2">E-Posta</h4>
                  <p className="text-xl font-medium">info@lisapelet.com</p>
                </div>
              </div>

              <div className="group flex gap-6">
                <div className="w-16 h-16 bg-stone-900 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 transition-colors duration-500">
                  <MapPin className="text-orange-500 group-hover:text-white transition-colors" size={28} />
                </div>
                <div>
                  <h4 className="text-stone-500 font-bold uppercase tracking-wider text-sm mb-2">Adres</h4>
                  <p className="text-lg font-medium leading-relaxed">Organize Sanayi Bölgesi<br/>1. Cadde No: 15<br/>Nilüfer / Bursa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Panel - Form */}
          <div className="p-12 lg:p-16 xl:w-3/5">
            <h3 className="text-3xl font-black text-stone-900 mb-8">Mesaj Gönder</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 ml-2">Ad Soyad</label>
                  <input type="text" className="w-full px-6 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:bg-white focus:border-orange-500 outline-none transition-all font-medium text-stone-700 placeholder:text-stone-400" placeholder="Adınız Soyadınız" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 ml-2">Telefon</label>
                  <input type="tel" className="w-full px-6 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:bg-white focus:border-orange-500 outline-none transition-all font-medium text-stone-700 placeholder:text-stone-400" placeholder="05XX XXX XX XX" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 ml-2">İlgilendiğiniz Konu</label>
                <select className="w-full px-6 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:bg-white focus:border-orange-500 outline-none transition-all font-medium text-stone-700 appearance-none cursor-pointer">
                  <option>15 KG Sipariş Bilgisi</option>
                  <option>Toptan Big Bag Fiyatı</option>
                  <option>Bayilik Başvurusu</option>
                  <option>Diğer Konular</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 ml-2">Mesajınız</label>
                <textarea rows={5} className="w-full px-6 py-4 bg-stone-50 border-2 border-stone-100 rounded-2xl focus:bg-white focus:border-orange-500 outline-none transition-all font-medium text-stone-700 placeholder:text-stone-400 resize-none" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
              </div>
              
              <button type="submit" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-5 px-10 rounded-2xl transition-all shadow-lg hover:shadow-[0_10px_30px_rgba(234,88,12,0.4)] flex items-center justify-center gap-3 w-full md:w-auto">
                <Send size={20} />
                Gönder
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}