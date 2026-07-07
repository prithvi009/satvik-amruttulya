import type { Config } from "tailwindcss";

/**
 * DESIGN TOKENS — "Tapri, but proud"
 *
 * NOTE ON COLOR SOURCE: tuned by eye against the real सात्विक अमृततुल्य
 * logo (orange wordmark, brown/tan gradient, black steam/outline) — the
 * build environment still can't pull the actual PNG down to sample exact
 * pixels (see public/brand/README.md), so treat these as a close match,
 * not a verified sample. Every color is a CSS variable in app/globals.css
 * — once the real PNG is in /public/brand/, re-sample these six variables
 * precisely and the whole site updates.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "var(--color-ivory)",
          dark: "var(--color-ivory-dark)",
        },
        decoction: {
          DEFAULT: "var(--color-decoction)",
          light: "var(--color-decoction-light)",
        },
        kesari: {
          DEFAULT: "var(--color-kesari)",
          dark: "var(--color-kesari-dark)",
          light: "var(--color-kesari-light)",
        },
        brass: {
          DEFAULT: "var(--color-brass)",
          light: "var(--color-brass-light)",
        },
        wa: {
          DEFAULT: "var(--color-whatsapp)",
          dark: "var(--color-whatsapp-dark)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "var(--font-devanagari)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "480px",
      },
      boxShadow: {
        slate: "inset 0 2px 12px rgba(0,0,0,0.35)",
      },
      keyframes: {
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0.55" },
          "50%": { transform: "translateY(-24px) scaleX(1.15)", opacity: "0.25" },
          "100%": { transform: "translateY(-48px) scaleX(0.9)", opacity: "0" },
        },
      },
      animation: {
        steam1: "steam 3.4s ease-in-out infinite",
        steam2: "steam 3.9s ease-in-out 0.8s infinite",
        steam3: "steam 3.1s ease-in-out 1.6s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
