import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import JsonLd from "../../components/JsonLd";
import Reveal from "../../components/motion/Reveal";
import { faqItems } from "../../data/faq";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "Sık Sorulan Sorular",
  description:
    "Bursa pelet, soba peleti, çam peleti fiyatları ve teslimat hakkında sık sorulan sorular. Lisa Pelet SSS.",
  path: "/sss",
  keywords: [
    "bursa pelet fiyatları",
    "soba peleti nedir",
    "çam peleti özellikleri",
    "pelet teslimat bursa",
    "toptan pelet",
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd includeFaq />
      <PageHeader
        eyebrow="SSS"
        title="Pelet hakkında"
        highlight="merak ettikleriniz."
        description="Bursa pelet, soba peleti ve sipariş süreciyle ilgili en çok sorulan soruların yanıtları."
      />

      <section className="section-padding relative z-20 !pt-0">
        <div className="container-main page-content-overlap max-w-3xl">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <Reveal key={item.question}>
                <details className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm open:border-orange-200 open:shadow-md">
                  <summary className="cursor-pointer list-none text-lg font-bold text-stone-900 marker:content-none [&::-webkit-details-marker]:hidden">
                    {item.question}
                  </summary>
                  <p className="mt-4 leading-relaxed text-stone-600">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 rounded-2xl border border-orange-200 bg-orange-50 p-8 text-center">
            <p className="text-stone-700">
              Sorunuzun yanıtını bulamadınız mı?{" "}
              <Link
                href="/iletisim"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                Bize ulaşın
              </Link>
              , size yardımcı olalım.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
