export const defaultWhatsAppMessage =
  "Merhaba, Lisa Pelet hakkında bilgi almak istiyorum.";

export function getWhatsAppUrl(
  phoneTel: string,
  message = defaultWhatsAppMessage,
) {
  return `https://wa.me/${phoneTel}?text=${encodeURIComponent(message)}`;
}
