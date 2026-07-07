"use client";

import { useState } from "react";
import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
  return (
    <section className="px-4 py-12">
      <h2 className="mb-8 text-center font-display text-3xl text-decoction">What Our Partners Say</h2>

      <div className="mx-auto mb-8 flex max-w-2xl flex-col gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="rounded-xl border border-brass-light bg-white/60 p-4">
            <p className="mb-2 text-sm italic text-decoction/80">&ldquo;{t.quote}&rdquo;</p>
            <p className="text-xs font-medium text-decoction/60">
              {t.name} · {t.city}
            </p>
          </div>
        ))}
      </div>

      {/* Facade-loaded YouTube embed: only the thumbnail image loads until
          clicked, so this slot doesn't cost any JS/video weight on load.
          Clicking always redirects to YouTube — it never plays in-page. */}
      <div className="mx-auto max-w-[280px] sm:max-w-xs">
        <VideoFacade />
      </div>
    </section>
  );
}

const VIDEO_ID = "9_4rdGYreB4"; // youtube.com/shorts/9_4rdGYreB4

// Quality fallback chain, highest-res first. YouTube doesn't always generate
// maxresdefault/sddefault for a given video — when it's missing, YouTube
// still returns 200 with a tiny 120x90 grey placeholder instead of a 404, so
// we detect that by checking naturalWidth on load and step down the chain.
const THUMBNAIL_QUALITIES = ["maxresdefault", "sddefault", "hqdefault"] as const;

function VideoFacade() {
  const [qualityIndex, setQualityIndex] = useState(0);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget.naturalWidth <= 120 && qualityIndex < THUMBNAIL_QUALITIES.length - 1) {
      setQualityIndex((i) => i + 1);
    }
  };

  return (
    // Shorts are vertical (9:16), not widescreen — matching the container to
    // that shape means we show the real, sharp frame instead of stretching
    // a portrait thumbnail into a 16:9 box (which is what read as "blurry").
    <div className="group relative aspect-[9/16] overflow-hidden rounded-xl border border-brass-light bg-decoction">
      {/* Facade: only the thumbnail <img> loads on page load (no YouTube JS
          or iframe cost). Clicking always opens the real short on YouTube in
          a new tab — this never plays inline on the site. */}
      <a
        href={`https://www.youtube.com/shorts/${VIDEO_ID}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
        aria-label="Watch franchisee video on YouTube"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- deliberate
            plain <img> for a YouTube-hosted thumbnail (not a local asset,
            so next/image optimization doesn't apply). */}
        <img
          key={qualityIndex}
          src={`https://img.youtube.com/vi/${VIDEO_ID}/${THUMBNAIL_QUALITIES[qualityIndex]}.jpg`}
          alt="Satvik Amruttulya video"
          loading="lazy"
          onLoad={handleLoad}
          className="h-full w-full object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-kesari text-2xl text-[#201008]">
            ▶
          </span>
        </span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white">
          Watch on YouTube
        </span>
      </a>
    </div>
  );
}
