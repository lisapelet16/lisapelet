import { NextResponse } from "next/server";
import { verifyRecaptcha } from "../../../lib/recaptcha";
import { formatTurkishPhone, isValidTurkishPhone } from "../../../lib/phone";

type ContactPayload = {
  name: string;
  phone: string;
  subject: string;
  message: string;
  recaptchaToken: string;
  website?: string;
};

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function buildTelegramMessage(data: ContactPayload) {
  return [
    "🔔 <b>Yeni İletişim Formu</b>",
    "",
    `<b>Ad Soyad:</b> ${escapeHtml(data.name)}`,
    `<b>Telefon:</b> ${escapeHtml(data.phone)}`,
    `<b>Konu:</b> ${escapeHtml(data.subject)}`,
    "",
    "<b>Mesaj:</b>",
    escapeHtml(data.message),
  ].join("\n");
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { error: "Telegram yapılandırması eksik." },
      { status: 500 },
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const phone = body.phone?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();
  const recaptchaToken = body.recaptchaToken?.trim();

  if (!name || !phone || !message || !recaptchaToken) {
    return NextResponse.json(
      { error: "Ad soyad, telefon ve mesaj alanları zorunludur." },
      { status: 400 },
    );
  }

  const recaptcha = await verifyRecaptcha(recaptchaToken);

  if (!recaptcha.ok) {
    return NextResponse.json({ error: recaptcha.error }, { status: 400 });
  }

  const formattedPhone = formatTurkishPhone(phone);

  if (!isValidTurkishPhone(formattedPhone)) {
    return NextResponse.json(
      { error: "Geçerli bir telefon numarası girin. (05XX XXX XX XX)" },
      { status: 400 },
    );
  }

  if (name.length > 100 || message.length > 2000) {
    return NextResponse.json(
      { error: "Girilen bilgiler çok uzun." },
      { status: 400 },
    );
  }

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: buildTelegramMessage({
          name,
          phone: formattedPhone,
          subject: subject || "Belirtilmedi",
          message,
        }),
        parse_mode: "HTML",
      }),
    },
  );

  if (!telegramResponse.ok) {
    console.error("Telegram API error:", await telegramResponse.text());
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen tekrar deneyin." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
