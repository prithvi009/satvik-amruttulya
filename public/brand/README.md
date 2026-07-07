# Brand assets — drop-in instructions

## Logo — one file left to add

`components/Header.tsx` and `components/Footer.tsx` already point at
`public/brand/logo.png`. That file doesn't exist yet — save your PNG there
with exactly that name (`public/brand/logo.png`) and both places pick it up
automatically, no code changes needed. Until then those two spots will show
a broken image icon.

`logo-header.svg` / `logo-footer.svg` are the old redrawn stand-ins (orange
"सात्विक" / brown-tan gradient "अमृततुल्य" + cup, tagline "देश का स्वाद,
देश कि चाय") — no longer referenced anywhere, kept only as a fallback.

Once `logo.png` is in place, also re-sample the six `--color-*` variables
in `app/globals.css` with an eyedropper on the real file (Preview.app's
color picker, or any online tool) and swap in the exact hex values —
everything on the site reads from those six variables, so one edit
re-themes the whole page. They're currently a close-by-eye match, not a
pixel-sampled one.

## Outlet photos — two more filenames to add

`components/ProofStrip.tsx` already points at two real photos you shared in
chat (the inauguration balloon-arch shot and the counter-at-night shot).
Save them here with these exact names and they'll appear automatically:

- `public/photos/outlet-inauguration.jpg`
- `public/photos/outlet-counter-night.jpg`

Two more slots in that same strip (a morning and an afternoon shot) are
still open placeholders — add real photos there when you have them, no
stock photography per the design brief.

## Video

`components/Testimonials.tsx` now links to your real YouTube Short
(`youtube.com/shorts/9_4rdGYreB4`) with a facade thumbnail — done, no
action needed.
