"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import CallContactMenu from "./CallContactMenu";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Ürünler", href: "/urunler" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const hasDarkHero =
    pathname === "/" ||
    pathname === "/urunler" ||
    pathname === "/hakkimizda" ||
    pathname === "/iletisim";

  const onDarkHero = hasDarkHero && !isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b ${
        onDarkHero
          ? "border-white/10 bg-stone-950/90"
          : "border-stone-200 bg-white shadow-sm"
      }`}
    >
      <div className="container-main flex h-20 items-center justify-between sm:h-24 md:h-28">
        <Logo variant={onDarkHero ? "light" : "dark"} />

        <div className="hidden items-center gap-3 lg:gap-5 md:flex">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    onDarkHero
                      ? active
                        ? "bg-white/15 text-white"
                        : "text-stone-300 hover:bg-white/10 hover:text-white"
                      : active
                        ? "bg-orange-50 text-orange-600"
                        : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <CallContactMenu onDarkHero={onDarkHero} />
            <Link href="/iletisim" className="btn-primary !py-2.5 !px-5 text-sm">
              Biz Sizi Arayalım
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-xl p-2 md:hidden ${
            onDarkHero ? "text-white" : "text-stone-700"
          }`}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-stone-200 bg-white px-4 py-4 md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-base font-medium ${
                      active
                        ? "bg-orange-50 text-orange-600"
                        : "text-stone-700 hover:bg-stone-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="mt-2">
                <CallContactMenu variant="inline" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
