const CARDS = [
  {
    icon: "🥛",
    title: "Pure Milk",
    desc: "No powder, no shortcuts — fresh milk every day.",
  },
  {
    icon: "🌿",
    title: "Signature Masala",
    desc: "Central premix — the same taste at every outlet.",
  },
  {
    icon: "📝",
    title: "Transparent Dealings",
    desc: "Written lifetime agreement, no hidden fees.",
  },
];

export default function WhySatvik() {
  return (
    <section className="px-4 py-12">
      <h2 className="mb-8 text-center font-display text-3xl text-decoction">Our Purity Promise</h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
        {CARDS.map((c) => (
          <div key={c.title} className="rounded-xl border border-brass-light bg-white/60 p-5 text-center">
            <div className="mb-2 text-3xl">{c.icon}</div>
            <p className="mb-1 font-display text-lg text-decoction">{c.title}</p>
            <p className="text-sm text-decoction/70">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
