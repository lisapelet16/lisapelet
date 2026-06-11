import Link from "next/link";
import { contactPeople } from "../../data/contact";
import WhatsAppLink from "../WhatsAppLink";

export default function AnimatedCTA() {
  return (
    <section className="section-padding !pt-0">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-3xl bg-stone-900 px-8 py-14 text-center text-white md:px-16">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Sipariş ve toptan satış için bize ulaşın.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-stone-400">
              Bursa ve çevresine düzenli teslimat yapıyoruz. Fiyat teklifi ve
              stok bilgisi için doğrudan arayın.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              {contactPeople.map((person) => (
                <div
                  key={person.name}
                  className="btn-primary min-w-[11rem] items-center !gap-3 !py-3 !pl-5 !pr-3"
                >
                  <a
                    href={`tel:${person.phoneTel}`}
                    className="flex min-w-0 flex-1 flex-col gap-1 text-left text-white transition-opacity hover:opacity-90"
                  >
                    <span className="text-sm font-semibold leading-tight">
                      {person.name}
                    </span>
                    <span className="text-xs font-medium leading-tight text-white/90">
                      {person.phoneDisplay}
                    </span>
                  </a>
                  <WhatsAppLink
                    phoneTel={person.phoneTel}
                    personName={person.name}
                    size="sm"
                    className="!h-8 !w-8 shrink-0 !rounded-lg [&_svg]:!h-4 [&_svg]:!w-4"
                  />
                </div>
              ))}
              <Link
                href="/iletisim"
                className="btn-outline min-w-[11rem] flex-col !gap-1 !py-3.5 !px-6"
              >
                <span className="text-sm font-semibold leading-tight">
                  İletişim
                </span>
                <span className="text-sm font-semibold leading-tight">
                  Formu
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
