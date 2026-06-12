import Link from "next/link";
import { ArrowRight, Flame, Leaf, Package, Wind } from "lucide-react";
import FloatingOrbs from "../FloatingOrbs";
import Marquee from "../Marquee";
import HeroVisual from "./HeroVisual";
import ProcessSection from "./ProcessSection";
import AnimatedCTA from "./AnimatedCTA";
import Reveal from "../motion/Reveal";
import Stagger, { StaggerItem } from "../motion/Stagger";

const stats = [
  { value: "%1", label: "altı kül oranı" },
  { value: "6-8mm", label: "standart çap" },
  { value: "%100", label: "doğal çam" },
  { value: "15-25kg", label: "ambalaj seçeneği" },
];

const features = [
  {
    icon: Flame,
    title: "Üstün Isı Değeri",
    description:
      "Çam ağacının doğal reçinesi sayesinde kolay tutuşur ve uzun süre istikrarlı ısı sağlar.",
    color: "orange",
  },
  {
    icon: Leaf,
    title: "Çevre Dostu",
    description:
      "Ahşap endüstrisi atıklarından üretilir. Hiçbir ağaç kesilmez, kimyasal eklenmez.",
    color: "emerald",
  },
  {
    icon: Wind,
    title: "Minimum Kül",
    description:
      "%1'in altındaki kül oranıyla sobanızın ömrünü uzatır, temizlik yükünü azaltır.",
    color: "blue",
  },
];

const products = [
  {
    name: "15 KG Çuval",
    tag: "Ev Kullanımı",
    description: "Ev tipi pelet sobaları ve küçük kalorifer sistemleri için ideal.",
    href: "/urunler",
    featured: true,
  },
  {
    name: "25 KG Çuval",
    tag: "Toptan",
    description: "Oteller, seralar ve endüstriyel tesisler için ekonomik çözüm.",
    href: "/iletisim",
    featured: false,
  },
];

const iconColors: Record<string, string> = {
  orange:
    "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
  emerald:
    "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
};

export default function HomeContent() {
  return (
    <>
      <section className="mesh-hero grain relative min-h-[92vh] text-white">
        <FloatingOrbs />
        <div className="container-main relative z-10 flex min-h-[92vh] flex-col justify-center pt-32 pb-16 md:pt-36">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Premium Çam Peleti
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="text-gradient-animated">
                  Bursa Çam Peleti
                </span>
                <span className="mt-2 block text-2xl font-bold text-white/90 sm:text-3xl lg:text-4xl">
                  Premium soba peleti
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg text-stone-400">
                Bursa ve Kestel&apos;de üretilen premium çam peletimiz; pelet
                sobaları için düşük kül, yüksek kalori ve uzun yanma süresi
                sunar. 15 kg ve 25 kg soba peleti seçenekleriyle hızlı
                teslimat.
              </p>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-center lg:items-start">
                <Link href="/urunler" className="btn-primary">
                  Ürünleri İncele
                  <ArrowRight size={18} />
                </Link>
                <Link href="/iletisim" className="btn-outline">
                  Toptan Teklif Al
                </Link>
              </div>
            </div>

            <HeroVisual />
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/10 pt-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-2xl font-extrabold text-white md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section-padding bg-stone-50">
        <div className="container-main">
          <Reveal className="mb-14 max-w-2xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-600">
              Neden Lisa Pelet?
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 md:text-4xl">
              Kaliteli pelet, fark edilir.
            </h2>
            <p className="mt-4 text-stone-600">
              Üretimden ambalaja kadar her aşamada kalite standartlarımızdan
              ödün vermiyoruz.
            </p>
          </Reveal>

          <Stagger className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="card-hover group h-full rounded-2xl border border-stone-200 bg-white p-8">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${iconColors[feature.color]}`}
                  >
                    <feature.icon size={28} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-stone-900">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ProcessSection />

      <section className="section-padding">
        <div className="container-main">
          <Reveal className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-600">
                Ürünlerimiz
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-stone-900 md:text-4xl">
                İhtiyacınıza uygun ambalaj.
              </h2>
            </div>
            <Link
              href="/urunler"
              className="group flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
            >
              Tümünü gör
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>

          <Stagger className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <StaggerItem key={product.name}>
                <div
                  className={`card-hover group relative h-full overflow-hidden rounded-2xl border p-8 ${
                    product.featured
                      ? "border-orange-200 bg-gradient-to-br from-orange-50 to-white"
                      : "border-stone-200 bg-white"
                  }`}
                >
                  {product.featured && (
                    <span className="absolute right-6 top-6 rounded-full bg-orange-600 px-3 py-1 text-xs font-bold text-white">
                      Çok Satan
                    </span>
                  )}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-stone-900 text-orange-400">
                    <Package size={28} />
                  </div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-orange-600">
                    {product.tag}
                  </p>
                  <h3 className="mb-3 text-2xl font-extrabold text-stone-900">
                    {product.name}
                  </h3>
                  <p className="mb-6 text-stone-600">{product.description}</p>
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-stone-900 group-hover:text-orange-600"
                  >
                    Detaylı bilgi
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <AnimatedCTA />
    </>
  );
}
