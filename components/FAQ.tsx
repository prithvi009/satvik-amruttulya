"use client";

import { useState } from "react";
import faqs from "@/data/faq.json";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 py-12">
      <h2 className="mb-8 text-center font-display text-3xl text-decoction">Frequently Asked Questions</h2>
      <div className="mx-auto max-w-2xl divide-y divide-brass-light rounded-xl border border-brass-light bg-white/50">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-medium text-decoction sm:text-base"
              >
                <span>{item.q}</span>
                <span className="ml-2 flex-shrink-0 text-kesari">{open ? "−" : "+"}</span>
              </button>
              {open && <p className="px-4 pb-4 text-sm leading-relaxed text-decoction/75">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
