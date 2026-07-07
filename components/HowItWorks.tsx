const STEPS = [
  { n: 1, title: "Apply" },
  { n: 2, title: "Call + site inspection" },
  { n: 3, title: "Agreement" },
  { n: 4, title: "Setup + training (7–10 days)" },
  { n: 5, title: "Opening 🎉" },
];

export default function HowItWorks() {
  return (
    <section className="px-4 py-12">
      <h2 className="mb-1 text-center font-display text-3xl text-decoction">How It Works</h2>
      <p className="mb-8 text-center text-sm font-medium text-kesari-dark">Application to opening — in 30 days.</p>
      <ol className="mx-auto flex max-w-md flex-col gap-4">
        {STEPS.map((s) => (
          <li key={s.n} className="flex items-center gap-4 rounded-lg border border-brass-light bg-white/50 p-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-kesari font-display text-lg text-[#201008]">
              {s.n}
            </span>
            <span className="text-sm font-medium text-decoction sm:text-base">{s.title}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
