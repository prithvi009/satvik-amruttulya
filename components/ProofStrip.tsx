import Image from "next/image";

// Three real outlet photos. No placeholder slots — every card here is a
// real photo, per the "no stock photography" rule in the design brief.
const PHOTOS = [
  {
    caption: "Marunji, Pune — Inauguration day",
    src: "/photos/outlet-pune-inauguration.png",
  },
  {
    caption: "Marunji, Pune — At the counter, at night",
    src: "/photos/outlet-pune-counter-night.jpeg",
  },
  {
    caption: "Bengaluru — Inauguration day",
    src: "/photos/outlet-bengaluru.jpeg",
  },
];

export default function ProofStrip() {
  return (
    <section className="py-8">
      <p className="mb-3 px-4 text-center text-sm font-medium text-decoction/70">
        Real outlets, real openings — from Pune to Bengaluru.
      </p>
      <div className="flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:thin]">
        {PHOTOS.map((p) => (
          <figure
            key={p.src}
            className="relative flex h-52 w-40 flex-shrink-0 flex-col justify-end overflow-hidden rounded-xl border border-brass-light bg-ivory-dark"
          >
            <Image src={p.src} alt={p.caption} fill sizes="160px" className="object-cover" />
          </figure>
        ))}
      </div>
    </section>
  );
}
