// Central place for every hard fact about the business. If a number here
// changes, it changes everywhere on the site — never hardcode these values
// inside a component.

export const SITE = {
  name: "Satvik Amruttulya",
  url: "https://satvikamruttulya.com",
  phones: ["+919834907474", "+917823000127"],
  email: "satvikamruttulya@gmail.com",
  address: {
    line1: "34/2 Buchade Patil Nagar",
    line2: "Marunji, Pune, Maharashtra",
    full: "34/2 Buchade Patil Nagar, Marunji, Pune, Maharashtra",
  },
  social: {
    instagram: "https://www.instagram.com/satvikamruttulya/",
    facebook: "https://www.facebook.com/people/Satvik-Amruttulya/61576110488976/",
  },
  // FSSAI number placeholder — replace with the real registration number.
  fssaiNumber: "FSSAI-XXXXXXXXXXXXX", // REPLACE: real FSSAI license number
};

export const OFFER = {
  setup: 250000,
  franchiseFee: 0,
  deposit: 0,
  royalty: 0,
  agreement: "Lifetime",
  areaMinSqft: 150,
  areaMaxSqft: 200,
  licenses: ["FSSAI", "Shop Act"],
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi, I'd like information about the Satvik Amruttulya franchise. My city: ___";

export function formatINR(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

/** Builds a tel: link from a +91XXXXXXXXXX style number. */
export function telLink(phone: string) {
  return `tel:${phone}`;
}

/**
 * Builds a wa.me deep link. Appends UTM context (already captured into
 * sessionStorage by <UtmCapture/>) to the pre-filled message so the team
 * can see where a WhatsApp lead came from, without any chat-widget script.
 */
export function waLink(message: string = WHATSAPP_DEFAULT_MESSAGE, phone?: string) {
  const number = (phone ?? SITE.phones[0]).replace("+", "");
  let finalMessage = message;
  if (typeof window !== "undefined") {
    try {
      const utm = window.sessionStorage.getItem("sa_utm");
      if (utm) {
        const parsed = JSON.parse(utm);
        const utmString = Object.entries(parsed)
          .filter(([, v]) => v)
          .map(([k, v]) => `${k}=${v}`)
          .join("&");
        if (utmString) finalMessage += `\n(src: ${utmString})`;
      }
    } catch {
      /* no-op */
    }
  }
  return `https://wa.me/${number}?text=${encodeURIComponent(finalMessage)}`;
}
