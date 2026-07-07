import districts from "@/data/districts.json";

const STATUS_STYLE: Record<string, string> = {
  "Available": "bg-wa/10 text-wa-dark border-wa/40",
  "Limited spots": "bg-kesari-light text-kesari-dark border-kesari/40",
  "Coming soon": "bg-ivory-dark text-decoction/60 border-brass-light",
};

export default function DistrictAvailability() {
  return (
    <section className="px-4 py-12">
      <h2 className="mb-2 text-center font-display text-3xl text-decoction">Is there space in your area?</h2>
      <p className="mx-auto mb-8 max-w-md text-center text-sm text-decoction/70">
        Limited outlets per area — so nearby outlets don&apos;t cannibalize each other.
      </p>
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-3">
        {districts.map((d) => (
          <div
            key={d.district}
            className={`flex items-center justify-between rounded-lg border px-3 py-2 text-xs sm:text-sm ${STATUS_STYLE[d.status]}`}
          >
            <span className="font-medium">{d.district}</span>
            <span>{d.status}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <a href="#lead-form" className="btn btn-primary inline-flex">
          Check availability in your area
        </a>
      </div>
    </section>
  );
}
