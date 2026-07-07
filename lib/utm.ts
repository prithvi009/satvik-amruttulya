// Captures UTM params from the URL on first load and persists them in
// sessionStorage so they survive client-side navigation and can be attached
// to the lead webhook payload and WhatsApp deep-link messages.

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
export const UTM_STORAGE_KEY = "sa_utm";

export type UtmData = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function captureUtmFromUrl(): UtmData {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const found: UtmData = {};
  let any = false;
  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) {
      found[key] = val;
      any = true;
    }
  }
  if (any) {
    const existing = getStoredUtm();
    const merged = { ...existing, ...found };
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
    return merged;
  }
  return getStoredUtm();
}

export function getStoredUtm(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
