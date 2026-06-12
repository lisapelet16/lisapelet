import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import Reveal from "../../components/motion/Reveal";
import Stagger, { StaggerItem } from "../../components/motion/Stagger";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "15 KG ve 25 KG Çam Peleti",
  description:
    "Bursa soba peleti: 15 kg ve 25 kg premium çam peleti çuval seçenekleri. Düşük kül, düşük nem, yüksek kalori. Ev ve toptan kullanım için Lisa Pelet.",
  path: "/urunler",
  keywords: [
    "15 kg pelet",
    "25 kg pelet",
    "çam peleti fiyat",
    "soba peleti bursa",
    "toptan pelet",
  ],
});

const specs = ["Çap: 6 mm / 8 mm", "Kül oranı: <%1", "Nem oranı: <%10"];

const products = [
  {
    name: "15 KG Pelet Çuval",
    badge: "Çok Satan",
    badgeStyle: "bg-orange-600 text-white",
    description:
      "Ev tipi pelet sobaları ve küçük kalorifer sistemleri için kusursuz seçim. Tozsuz, standart boyutlu ve istiflemesi kolay.",
    cta: "Sipariş Ver",
    ctaHref: "/iletisim",
    ctaStyle: "btn-primary w-full",
    cardStyle: "border-orange-200 bg-gradient-to-b from-orange-50/50 to-white",
    image: "/images/lisa-pelet-15kg.png",
    imageAlt:
      "Lisa Pelet 15 kg Bursa çam peleti soba peleti çuval ambalaj",
    imageStyle: "from-orange-100 to-orange-50",
  },
  {
    name: "25 KG Pelet Çuval",
    badge: "Toptan",
    badgeStyle: "bg-stone-800 text-white",
    description:
      "Fabrikalar, oteller ve seralar için toptan alımlarda en ekonomik çözüm. Forklift ile taşımaya uygun büyük ambalaj.",
    cta: "Toptan Teklif İste",
    ctaHref: "/iletisim",
    ctaStyle:
      "w-full rounded-full border-2 border-stone-200 bg-white py-3.5 font-semibold text-stone-900 transition-colors hover:border-orange-300 hover:bg-orange-50 text-center block",
    cardStyle: "border-stone-200 bg-white",
    image: "/images/lisa-pelet-25kg.png",
    imageAlt:
      "Lisa Pelet 25 kg toptan çam peleti Bursa endüstriyel pelet çuval",
    imageStyle: "from-stone-100 to-stone-50",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ürün Kataloğu"
        title="İhtiyacınıza uygun"
        highlight="pelet ambalajı."
        description="Ev kullanımından endüstriyel ihtiyaçlara kadar, aynı premium kalite standartlarında iki farklı ambalaj seçeneği."
      />

      <section className="section-padding relative z-20 !pt-0">
        <div className="container-main page-content-overlap">
          <Stagger className="grid gap-8 lg:grid-cols-2" stagger={0.15}>
            {products.map((product, index) => (
              <StaggerItem key={product.name}>
                <div
                  className={`card-hover group overflow-hidden rounded-2xl border shadow-sm ${product.cardStyle}`}
                >
                  <div
                    className={`relative h-64 overflow-hidden bg-gradient-to-br sm:h-72 md:h-80 ${product.imageStyle}`}
                  >
                    <span
                      className={`absolute left-5 top-5 z-10 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${product.badgeStyle}`}
                    >
                      {product.badge}
                    </span>
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      priority={index === 0}
                      className="object-contain object-center scale-[1.18] transition-transform duration-500 group-hover:scale-[1.22] md:scale-[1.24] md:group-hover:scale-[1.28]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <span className="absolute bottom-3 right-3 z-10 rounded-md border border-stone-200/80 bg-white/90 px-2.5 py-1 text-[11px] font-medium text-stone-500 shadow-sm backdrop-blur-sm">
                      Görsel temsilidir.
                    </span>
                  </div>

                  <div className="p-8">
                    <h2 className="mb-3 text-2xl font-extrabold text-stone-900">
                      {product.name}
                    </h2>
                    <p className="mb-6 text-stone-600 leading-relaxed">
                      {product.description}
                    </p>

                    <ul className="mb-8 space-y-3">
                      {specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-3">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <Check size={14} />
                          </span>
                          <span className="text-sm font-medium text-stone-700">
                            {spec}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href={product.ctaHref} className={product.ctaStyle}>
                      {product.cta}
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 text-center">
              <p className="text-stone-600">
                Farklı miktarlarda veya düzenli teslimat için{" "}
                <Link
                  href="/iletisim"
                  className="font-semibold text-orange-600 hover:text-orange-700"
                >
                  iletişime geçin
                </Link>
                , size özel fiyat teklifi hazırlayalım.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
