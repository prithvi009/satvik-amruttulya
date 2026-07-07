const ITEMS = [
  { name: "Special Chaha", emoji: "☕" },
  { name: "Jaggery Chai", emoji: "🍯" },
  { name: "Ginger Chai", emoji: "🫚" },
  { name: "Strong Chai", emoji: "🔥" },
  { name: "Coffee", emoji: "☕" },
  { name: "Snacks", emoji: "🍪" },
];

export default function Menu() {
  return (
    <section className="px-4 py-12">
      <h2 className="mb-8 text-center font-display text-3xl text-decoction">Menu — A Sneak Peek</h2>
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
        {ITEMS.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-2 rounded-xl border border-brass-light bg-white/60 p-4 text-center"
          >
            <span className="text-3xl">{item.emoji}</span>
            <span className="text-sm font-medium text-decoction">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
