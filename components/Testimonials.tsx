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
          clicked, so this slot doesn't cost any JS/video weight on load. */}
      <div className="mx-auto max-w-2xl">
        <VideoFacade />
      </div>
    </section>
  );
}

const VIDEO_ID = "9_4rdGYreB4"; // youtube.com/shorts/9_4rdGYreB4

function VideoFacade() {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-xl border border-brass-light bg-decoction">
      {/* Facade: only the thumbnail <img> loads on page load (no YouTube JS
          or iframe cost). Clicking opens the real short in a new tab —
          keeps this section at ~0 added JS on the landing page itself. */}
      <a
        href={`https://www.youtube.com/shorts/${VIDEO_ID}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
        aria-label="Play franchisee video on YouTube"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- deliberate
            plain <img> for a YouTube-hosted thumbnail (not a local asset,
            so next/image optimization doesn't apply). */}
        <img
          src={`https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`}
          alt="Satvik Amruttulya video"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-kesari text-2xl text-[#201008]">
            ▶
          </span>
        </span>
      </a>
    </div>
  );
}
