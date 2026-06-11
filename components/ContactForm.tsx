"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import type ReCAPTCHA from "react-google-recaptcha";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import {
  formatTurkishPhoneInput,
  getPhoneDigits,
  isValidTurkishPhone,
} from "../lib/phone";

const ReCAPTCHAWidget = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const subjects = [
  "15 KG Sipariş Bilgisi",
  "25 KG Sipariş Bilgisi",
  "Toptan Alım Teklifi",
  "Diğer",
];

const initialForm = {
  name: "",
  phone: "0",
  subject: subjects[0],
  message: "",
  website: "",
};

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

export default function ContactForm() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: name === "phone" ? formatTurkishPhoneInput(value) : value,
    }));
  };

  const handlePhoneKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (
      (event.key === "Backspace" || event.key === "Delete") &&
      getPhoneDigits(form.phone).length <= 1
    ) {
      event.preventDefault();
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const name = form.name.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!name || !phone || !message) {
      setStatus("error");
      setErrorMessage("Ad soyad, telefon ve mesaj alanları zorunludur.");
      return;
    }

    if (!isValidTurkishPhone(phone)) {
      setStatus("error");
      setErrorMessage("Geçerli bir telefon numarası girin. (05XX XXX XX XX)");
      return;
    }

    const recaptchaToken = recaptchaRef.current?.getValue();

    if (!recaptchaToken) {
      setStatus("error");
      setErrorMessage("Lütfen robot olmadığınızı doğrulayın.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          recaptchaToken,
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        recaptchaRef.current?.reset();
        throw new Error(data.error ?? "Mesaj gönderilemedi.");
      }

      setForm(initialForm);
      recaptchaRef.current?.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Bir hata oluştu. Lütfen tekrar deneyin.",
      );
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-stone-700"
          >
            Ad Soyad <span className="text-orange-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            placeholder="Adınız Soyadınız"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-orange-500 focus:bg-white"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-stone-700"
          >
            Telefon <span className="text-orange-600">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            aria-required="true"
            placeholder="0 5XX XXX XX XX"
            value={form.phone}
            onChange={handleChange}
            onKeyDown={handlePhoneKeyDown}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-orange-500 focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-stone-700"
        >
          Konu
        </label>
        <select
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="w-full cursor-pointer rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-colors focus:border-orange-500 focus:bg-white"
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-stone-700"
        >
            Mesajınız <span className="text-orange-600">*</span>
          </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-required="true"
          placeholder="Size nasıl yardımcı olabiliriz?"
          value={form.message}
          onChange={handleChange}
          className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-colors placeholder:text-stone-400 focus:border-orange-500 focus:bg-white"
        />
      </div>

      {siteKey ? (
        <div className="flex justify-center overflow-hidden rounded-xl border border-stone-200 bg-stone-50 p-2 sm:p-3">
          <div className="origin-center scale-[0.9] sm:scale-100">
            <ReCAPTCHAWidget ref={recaptchaRef} sitekey={siteKey} />
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          reCAPTCHA anahtarı tanımlı değil. Lütfen site yöneticisine bildirin.
        </div>
      )}

      {status === "success" && (
        <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          <p>Mesajınız iletildi. En kısa sürede size dönüş yapacağız.</p>
        </div>
      )}

      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto"
        disabled={status === "loading" || !siteKey}
      >
        {status === "loading" ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          <Send size={18} />
        )}
        {status === "loading" ? "Gönderiliyor..." : "Gönder"}
      </button>
    </form>
  );
}
