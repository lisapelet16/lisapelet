import Image from "next/image";
import { Lightbulb, Target, Users } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import Reveal from "../../components/motion/Reveal";
import Stagger, { StaggerItem } from "../../components/motion/Stagger";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Hakkımızda",
  description:
    "Lisa Pelet: Bursa Kestel merkezli çam peleti ve soba peleti üreticisi. Sürdürülebilir üretim, yüksek kalite standartları ve güvenilir teslimat.",
  path: "/hakkimizda",
  keywords: [
    "bursa pelet üreticisi",
    "kestel pelet firması",
    "çam peleti üretimi",
    "lisa pelet hakkında",
  ],
});

const values = [
  {
    icon: Target,
    title: "Misyonumuz",
    description:
      "Tüketicilere en ekonomik, en temiz ve en yüksek kalorili ısıtma çözümünü sunmak.",
    color: "bg-stone-900",
  },
  {
    icon: Lightbulb,
    title: "Vizyonumuz",
    description:
      "Yenilenebilir enerjide Türkiye'nin lider ve en güvenilir pelet markası olmak.",
    color: "bg-orange-600",
  },
  {
    icon: Users,
    title: "Değerlerimiz",
    description:
      "Dürüst ticaret, müşteri memnuniyeti ve doğaya koşulsuz saygı.",
    color: "bg-amber-500",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hikayemiz"
        title="Gelecek için"
        highlight="üretiyoruz."
        description="Sıcaklığın kaynağı doğadır. Lisa Pelet olarak bu inançla yola çıktık."
      />

      <section className="section-padding relative z-20 !pt-0">
        <div className="container-main page-content-overlap max-w-4xl">
          <Reveal>
            <div className="card-hover overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <div className="relative h-56 md:h-72">
                <Image
                  src="/images/about-factory.png"
                  alt="Lisa Pelet üretim tesisi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
              </div>
              <div className="p-8 md:p-12">
                <h2 className="mb-6 text-2xl font-extrabold text-stone-900">
                  Kimiz?
                </h2>
                <div className="space-y-5 text-stone-600 leading-relaxed">
                  <p>
                    <strong className="text-stone-900">Lisa Pelet</strong> olarak
                    sadece bir yakıt değil, sürdürülebilir bir ısınma kültürü
                    üretiyoruz. Artan enerji ihtiyaçlarını karşılarken çevreyi
                    korumayı da öncelik haline getirdik.
                  </p>
                  <p>
                    Bursa&apos;daki üretim tesisimizde, orman ürünleri
                    endüstrisinin artıklarını hiçbir kimyasal veya tutkal
                    eklemeden yüksek basınçla presliyoruz. Çam ağacının kendi öz
                    suyu, peletlerimizin bir arada durmasını sağlıyor.
                  </p>
                  <p>
                    Her parti üretimimiz kalite kontrolünden geçer; nem, kül ve
                    çap ölçümleri standartlarımızın altında kalmayan ürünler
                    müşterilerimize ulaşır.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Stagger className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.12}>
            {values.map((item) => (
              <StaggerItem key={item.title}>
                <div className="card-hover card-glow h-full rounded-2xl border border-stone-200 bg-white p-7">
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white transition-transform hover:scale-110 ${item.color}`}
                  >
                    <item.icon size={22} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
