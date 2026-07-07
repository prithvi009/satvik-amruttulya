import Image from "next/image";

// Real outlet photos. No placeholder slots — every card here is a real
// photo, per the "no stock photography" rule in the design brief.
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
  {
    caption: "Bengaluru — Signboard lit up at night",
    src: "/photos/outlet-bengaluru-signboard-night.jpeg",
  },
  {
    caption: "Bengaluru — Branded wall inside the outlet",
    src: "/photos/outlet-bengaluru-wall-logo.jpeg",
  },
];

function Card({ caption, src }: { caption: string; src: string }) {
  return (
    <figure className="relative flex h-64 w-52 flex-shrink-0 flex-col justify-end overflow-hidden rounded-xl border border-brass-light bg-ivory-dark">
      <Image src={src} alt={caption} fill sizes="208px" className="object-cover" />
    </figure>
  );
}

export default function ProofStrip() {
  return (
    <section className="py-8">
      <p className="mb-3 px-4 text-center text-sm font-medium text-decoction/70">
        Real outlets, real openings — from Pune to Bengaluru.
      </p>
      {/* Marquee viewport: hidden overflow + an over-wide track that scrolls
          on its own. The photo list is rendered twice so the wrap is seamless;
          it pauses on hover and stops entirely under reduced-motion. */}
      <div className="group overflow-hidden">
        <div className="animate-marquee flex w-max gap-3 py-1">
          {PHOTOS.map((p) => (
            <Card key={p.src} {...p} />
          ))}
          {/* Duplicate set for the seamless loop — decorative. */}
          {PHOTOS.map((p) => (
            <Card key={`dup-${p.src}`} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
