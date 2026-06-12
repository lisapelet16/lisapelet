import { Mail, MapPin, Phone, User } from "lucide-react";
import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContactForm";
import Reveal from "../../components/motion/Reveal";
import WhatsAppLink from "../../components/WhatsAppLink";
import {
  companyEmail,
  companyLocation,
  contactPeople,
} from "../../data/contact";
import { createPageMetadata } from "../../lib/seo";

export const metadata = createPageMetadata({
  title: "İletişim ve Sipariş",
  description:
    "Bursa pelet siparişi ve toptan soba peleti teklifi için Lisa Pelet ile iletişime geçin. Kestel / Bursa teslimat, hızlı dönüş.",
  path: "/iletisim",
  keywords: [
    "bursa pelet sipariş",
    "pelet fiyat teklifi",
    "toptan pelet iletişim",
    "soba peleti bursa telefon",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bize Ulaşın"
        title="Sorularınız için"
        highlight="buradayız."
        description="Sipariş, fiyat teklifi veya toptan alım talepleriniz için formu doldurun ya da doğrudan arayın."
      />

      <section className="section-padding relative z-[2] isolate !pt-0">
        <div className="container-main page-content-overlap">
          <Reveal>
            <div className="card-hover relative z-30 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <div className="grid xl:grid-cols-5">
                <div className="bg-stone-900 p-5 text-white sm:p-8 xl:col-span-2 xl:p-10">
                  <h2 className="mb-5 text-lg font-bold sm:mb-6 sm:text-xl">
                    İletişim Kişileri
                  </h2>

                  <div className="space-y-3 sm:space-y-4">
                    {contactPeople.map((person) => (
                      <div
                        key={person.name}
                        className="flex items-center gap-2.5 rounded-xl border border-stone-800 bg-stone-950/50 p-3.5 sm:gap-3 sm:p-4 transition-colors hover:border-orange-500/40 hover:bg-stone-800/80"
                      >
                        <a
                          href={`tel:${person.phoneTel}`}
                          className="group flex min-w-0 flex-1 items-center gap-3 sm:gap-4"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-800 text-orange-400 transition-colors group-hover:bg-orange-600 group-hover:text-white sm:h-11 sm:w-11">
                            <User size={18} />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-white sm:text-base">
                              {person.name}
                            </p>
                            <p className="mt-1 flex items-start gap-1.5 text-xs text-stone-400 group-hover:text-stone-300 sm:items-center sm:text-sm">
                              <Phone
                                size={14}
                                className="mt-0.5 shrink-0 text-orange-400 sm:mt-0"
                              />
                              <span className="break-all leading-snug">
                                {person.phoneDisplay}
                              </span>
                            </p>
                          </div>
                        </a>
                        <WhatsAppLink
                          phoneTel={person.phoneTel}
                          personName={person.name}
                          size="sm"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-5 border-t border-stone-800 pt-6 sm:mt-8 sm:space-y-6 sm:pt-8">
                    <a
                      href={`mailto:${companyEmail}`}
                      className="group flex gap-3 transition-opacity hover:opacity-80 sm:gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-800 text-orange-400 transition-colors group-hover:bg-orange-600 group-hover:text-white sm:h-11 sm:w-11">
                        <Mail size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                          E-posta
                        </p>
                        <p className="mt-1 break-all text-sm font-medium sm:text-base">
                          {companyEmail}
                        </p>
                      </div>
                    </a>

                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-800 text-orange-400 sm:h-11 sm:w-11">
                        <MapPin size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                          Adres
                        </p>
                        <p className="mt-1 font-medium leading-relaxed text-stone-300">
                          {companyLocation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-8 xl:col-span-3 xl:p-10">
                  <h2 className="mb-5 text-balance text-lg font-bold text-stone-900 sm:mb-6 sm:text-xl">
                    Mesaj gönderin biz sizi arayalım.
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
