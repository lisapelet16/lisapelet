"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { contactPeople } from "../data/contact";
import WhatsAppLink from "./WhatsAppLink";

type CallContactMenuProps = {
  onDarkHero?: boolean;
  variant?: "dropdown" | "inline";
};

export default function CallContactMenu({
  onDarkHero = false,
  variant = "dropdown",
}: CallContactMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open || variant !== "dropdown") return;

    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, variant]);

  const buttonClass =
    variant === "inline"
      ? "flex w-full cursor-pointer items-center justify-between rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white"
      : `inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
          onDarkHero
            ? "border-white/20 text-white hover:bg-white/10"
            : "border-stone-200 text-stone-700 hover:bg-stone-50"
        }`;

  const panelClass =
    variant === "inline"
      ? "mt-2 space-y-2 overflow-hidden"
      : `absolute right-0 top-full z-50 mt-2 w-60 overflow-hidden rounded-xl border shadow-xl ${
          onDarkHero
            ? "border-stone-700 bg-stone-900"
            : "border-stone-200 bg-white"
        }`;

  return (
    <div
      ref={ref}
      className={variant === "dropdown" ? "relative" : "w-full"}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={buttonClass}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="flex items-center gap-2">
          <Phone
            size={16}
            className={
              variant === "inline"
                ? "text-orange-400"
                : "text-orange-500"
            }
          />
          Hemen Arayın
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className={panelClass}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {contactPeople.map((person, index) => (
              <div
                key={person.name}
                className={`flex items-center gap-2 px-4 py-3 ${
                  variant === "inline"
                    ? "rounded-xl bg-stone-800"
                    : index > 0
                      ? onDarkHero
                        ? "border-t border-stone-800"
                        : "border-t border-stone-100"
                      : ""
                }`}
              >
                <a
                  href={`tel:${person.phoneTel}`}
                  onClick={() => setOpen(false)}
                  className={`min-w-0 flex-1 transition-colors ${
                    variant === "inline"
                      ? "text-white hover:opacity-80"
                      : onDarkHero
                        ? "hover:opacity-80"
                        : "hover:opacity-80"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold ${
                      variant === "inline" || onDarkHero
                        ? "text-white"
                        : "text-stone-900"
                    }`}
                  >
                    {person.name}
                  </p>
                  <p
                    className={`mt-0.5 flex items-center gap-1.5 text-xs ${
                      variant === "inline" || onDarkHero
                        ? "text-stone-400"
                        : "text-stone-500"
                    }`}
                  >
                    <Phone size={12} className="shrink-0 text-orange-500" />
                    {person.phoneDisplay}
                  </p>
                </a>
                <WhatsAppLink
                  phoneTel={person.phoneTel}
                  personName={person.name}
                  size="sm"
                  onClick={() => setOpen(false)}
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
