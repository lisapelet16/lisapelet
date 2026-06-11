type RecaptchaVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return { ok: false as const, error: "reCAPTCHA yapılandırması eksik." };
  }

  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  const data = (await response.json()) as RecaptchaVerifyResponse;

  if (!data.success) {
    return { ok: false as const, error: "reCAPTCHA doğrulaması başarısız." };
  }

  return { ok: true as const };
}
