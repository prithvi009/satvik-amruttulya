"use client";

import { useState } from "react";
import { OFFER, formatINR } from "@/lib/config";

const ROWS: [string, string][] = [
  ["Setup", formatINR(OFFER.setup)],
  ["Franchise fee", formatINR(OFFER.franchiseFee)],
  ["Deposit", formatINR(OFFER.deposit)],
  ["Royalty", formatINR(OFFER.royalty)],
  ["Agreement", OFFER.agreement],
  ["Area", `${OFFER.areaMinSqft}–${OFFER.areaMaxSqft} sq ft`],
  ["Licenses", OFFER.licenses.join(" + ")],
];

const INCLUDED = ["Machinery", "Branding", "Training", "Opening support", "Premix supply"];

export default function OfferTable() {
  const [open, setOpen] = useState(false);
  return (
    <section className="px-4 py-12">
      <h2 className="mb-6 text-center font-display text-3xl text-decoction">The Offer</h2>
      <div className="mx-auto max-w-xl overflow-hidden rounded-xl border-2 border-brass">
        {ROWS.map(([label, value], i) => (
          <div
            key={label}
            className={`flex items-center justify-between px-4 py-3 text-sm sm:text-base ${
              i % 2 === 0 ? "bg-ivory-dark" : "bg-ivory"
            }`}
          >
            <span className="text-decoction/70">{label}</span>
            <span className="font-semibold text-decoction">{value}</span>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-4 max-w-xl">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-lg border border-brass-light bg-white/60 px-4 py-3 text-sm font-medium text-decoction"
          aria-expanded={open}
        >
          What&apos;s included?
          <span>{open ? "−" : "+"}</span>
        </button>
        {open && (
          <ul className="mt-2 list-disc space-y-1 rounded-lg bg-white/40 px-8 py-3 text-sm text-decoction/80">
            {INCLUDED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 text-center">
        <a href="#lead-form" className="btn btn-primary inline-flex">
          Get Franchise Info
        </a>
      </div>
    </section>
  );
}
