export function formatTurkishPhone(value: string) {
  let digits = value.replace(/\D/g, "");

  if (digits.startsWith("90")) {
    digits = `0${digits.slice(2)}`;
  } else if (digits.startsWith("5")) {
    digits = `0${digits}`;
  }

  digits = digits.slice(0, 11);

  if (!digits) return "";

  const parts = [digits.slice(0, 1)];

  if (digits.length > 1) parts.push(digits.slice(1, 4));
  if (digits.length > 4) parts.push(digits.slice(4, 7));
  if (digits.length > 7) parts.push(digits.slice(7, 9));
  if (digits.length > 9) parts.push(digits.slice(9, 11));

  return parts.join(" ");
}

export function formatTurkishPhoneInput(value: string) {
  const formatted = formatTurkishPhone(value);
  return formatted || "0";
}

export function getPhoneDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function isValidTurkishPhone(value: string) {
  return /^05\d{9}$/.test(getPhoneDigits(value));
}

export function toPhoneTel(value: string) {
  const digits = getPhoneDigits(value);
  return digits.startsWith("0") ? `90${digits.slice(1)}` : digits;
}
