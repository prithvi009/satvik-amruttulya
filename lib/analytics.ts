// Thin wrapper around Meta Pixel + GA4. Both scripts are loaded (gated on
// env vars being present) in app/layout.tsx via next/script. This file only
// fires *events*, never loads a chat widget or any third-party UI.

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

type SAEvent =
  | "ViewContent"
  | "InitiateCheckout"
  | "Lead"
  | "WhatsAppClick"
  | "CallClick";

export function track(event: SAEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  if (window.fbq) {
    // Lead/InitiateCheckout/ViewContent map straight to Meta's standard
    // events; the two click events are sent as custom Meta events.
    const standard = ["ViewContent", "InitiateCheckout", "Lead"];
    if (standard.includes(event)) {
      window.fbq("track", event, params);
    } else {
      window.fbq("trackCustom", event, params);
    }
  }

  if (window.gtag) {
    window.gtag("event", event, params);
  }

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.log("[track]", event, params);
  }
}
