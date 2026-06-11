import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";
import { companyEmail, companyLocation, contactPeople } from "../data/contact";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-800/60 bg-stone-950 text-stone-400">
      <div className="container-main px-4 py-10 md:py-11">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 lg:gap-10">
            <Logo variant="light" size="md" className="shrink-0" />

            <nav className="flex flex-col gap-2 text-sm">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <ul className="flex flex-col gap-4 text-sm lg:items-end">
            {contactPeople.map((person) => (
              <li key={person.name} className="lg:text-right">
                <p className="font-medium text-stone-300">{person.name}</p>
                <div className="mt-1 flex items-center gap-2 lg:justify-end">
                  <a
                    href={`tel:${person.phoneTel}`}
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <Phone size={14} className="shrink-0 text-orange-500/80" />
                    {person.phoneDisplay}
                  </a>
                  <WhatsAppLink
                    phoneTel={person.phoneTel}
                    personName={person.name}
                    size="sm"
                  />
                </div>
              </li>
            ))}
            <li className="flex flex-col gap-2 border-t border-stone-800/60 pt-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2 lg:justify-end">
              <a
                href={`mailto:${companyEmail}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <Mail size={14} className="shrink-0 text-orange-500/80" />
                {companyEmail}
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="shrink-0 text-orange-500/80" />
                {companyLocation}
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-1 border-t border-stone-800/50 py-2.5 text-[11px] leading-tight text-stone-600 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Lisa Pelet</p>
          <p className="text-stone-700">Sıcaklığın en doğal hali.</p>
        </div>
      </div>
    </footer>
  );
}
