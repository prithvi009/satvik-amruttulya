# Satvik Amruttulya — Franchise Landing Site

Next.js 14 (App Router) + Tailwind, mobile-first lead-gen site. Static-rendered,
no page builder, no chat widgets — WhatsApp deep links only.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in the three values below
npm run dev
```

## Env vars (`.env.local`)

- `LEAD_WEBHOOK_URL` — n8n/GoHighLevel (or any) inbound webhook that receives lead JSON from `/api/lead`. Leave blank locally; submissions are logged to the server console instead.
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel ID.
- `NEXT_PUBLIC_GA4_ID` — GA4 Measurement ID (`G-XXXXXXXXXX`).

## Deploy

Built for Vercel. `npm run build` produces a standard `.next` output;
push to Vercel and set the three env vars above in Project Settings.

## Before going live — replace these placeholders

1. **Logo** — `components/Header.tsx` / `Footer.tsx` already point at
   `public/brand/logo.png`; that file just needs to be saved there (see
   `public/brand/README.md`). Once it's in, also re-sample the six color
   tokens in `app/globals.css` against the real file.
2. **Photos** — `ProofStrip.tsx` has two real photos wired up by filename
   (`public/photos/outlet-inauguration.jpg`, `outlet-counter-night.jpg` —
   save them there) and two open slots still marked `REPLACE: real photo`.
   `Founder.tsx` also still needs a real founder portrait. No stock
   photography, per the design brief — an empty marked box is safer than a
   fake-looking photo.
3. **Testimonials** — `data/testimonials.json` has two real, anonymized
   testimonials (Pune + Bengaluru outlet owners, names withheld at their
   request — attributed as "Outlet Owner") and one slot still marked
   PLACEHOLDER. Do not fill remaining slots with invented quotes.
4. **YouTube video** — done; `components/Testimonials.tsx` links to the
   real short (`youtube.com/shorts/9_4rdGYreB4`) with a facade thumbnail.
5. **FSSAI number** — `lib/config.ts` → `SITE.fssaiNumber`.
6. **Franchise info PDF** — `public/franchise-info.pdf` is a plain
   placeholder generated for this build; replace with a designed one-pager.
7. **Geo-coordinates** — `components/JsonLd.tsx` has placeholder lat/long
   for the LocalBusiness schema; put in the exact head-office coordinates.
8. **District availability** — `data/districts.json` is hand-edited; keep
   it honest and current (this is the site's "honest scarcity" mechanic).

## Architecture notes

- `/franchise` redirects to `/#lead-form`; `/franchise/[city]` is a real
  route (only `pune` is in `generateStaticParams` for v1) so future city
  pages are just a matter of adding real, city-specific content and the
  city slug to `LIVE_CITIES` in `app/franchise/[city]/page.tsx`.
- Fonts are self-hosted via `@fontsource` (Yatra One for bilingual display
  headlines, Inter for Latin body copy, Noto Sans Devanagari as the body
  fallback for Marathi) — only the Latin + Devanagari subsets are
  imported (see `app/globals.css`) to keep the font payload lean.
- All UTM params are captured client-side (`lib/utm.ts`) into
  `sessionStorage` and attached to the lead webhook payload and to the
  WhatsApp deep-link message.
- Tracking events (`lib/analytics.ts`): `ViewContent` on page load,
  `InitiateCheckout` when step 1 of the form is completed, `Lead` on
  submit, plus custom `WhatsAppClick` / `CallClick` events on every tap of
  the sticky bar, header CTA, and thank-you screen.
# satvik-amruttulya
