"use client";

import { useMemo, useState } from "react";
import { formatINR } from "@/lib/config";

// Fixed, honestly-disclosed assumptions — shown in small print, never hidden.
const PRICE_PER_CUP = 10;
const MATERIAL_COST_PCT = 0.6;
const RENT_MIN = 15000;
const RENT_MAX = 25000;
const STAFF_COUNT = 2;
// Rough monthly staff + misc overhead used only to derive an honest profit
// RANGE (never a fake-precise single number).
const OTHER_OVERHEAD_MIN = 20000;
const OTHER_OVERHEAD_MAX = 30000;

export default function TapriSlate() {
  const [cupsPerDay, setCupsPerDay] = useState(600);

  const { dailyRevenue, monthlyRevenue, profitLow, profitHigh } = useMemo(() => {
    const daily = cupsPerDay * PRICE_PER_CUP;
    const monthly = daily * 30;
    const materialCost = monthly * MATERIAL_COST_PCT;
    const afterMaterial = monthly - materialCost;
    const lowCosts = RENT_MIN + OTHER_OVERHEAD_MIN;
    const highCosts = RENT_MAX + OTHER_OVERHEAD_MAX;
    const profitHigh = Math.max(0, afterMaterial - lowCosts);
    const profitLow = Math.max(0, afterMaterial - highCosts);
    return { dailyRevenue: daily, monthlyRevenue: monthly, profitLow, profitHigh };
  }, [cupsPerDay]);

  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h2 className="mb-2 text-center font-display text-3xl text-decoction">Tapri Slate — Your Numbers</h2>
      <p className="mb-6 text-center text-sm text-decoction/70">
        How many cups a day do you think you&apos;ll sell? Slide to find out.
      </p>

      <div className="slate p-6 sm:p-8">
        <label htmlFor="cups" className="mb-3 block chalk-muted text-sm">
          Cups per day — <span className="chalk text-lg font-bold">{cupsPerDay}</span>
        </label>
        <input
          id="cups"
          type="range"
          min={200}
          max={1500}
          step={10}
          value={cupsPerDay}
          onChange={(e) => setCupsPerDay(Number(e.target.value))}
          className="mb-6 w-full accent-kesari"
          aria-valuemin={200}
          aria-valuemax={1500}
          aria-valuenow={cupsPerDay}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <p className="chalk-muted text-xs">Daily revenue</p>
            <p className="chalk text-2xl font-bold">{formatINR(dailyRevenue)}</p>
          </div>
          <div>
            <p className="chalk-muted text-xs">Monthly revenue</p>
            <p className="chalk text-2xl font-bold">{formatINR(monthlyRevenue)}</p>
          </div>
          <div>
            <p className="chalk-muted text-xs">Estimated monthly profit</p>
            <p className="chalk text-2xl font-bold">
              {formatINR(Math.round(profitLow / 1000) * 1000)}–{formatINR(Math.round(profitHigh / 1000) * 1000)}
            </p>
          </div>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed chalk-muted">
          Assumptions (transparent): avg ₹{PRICE_PER_CUP}/cup · ~{MATERIAL_COST_PCT * 100}% material cost · rent ₹
          {(RENT_MIN / 1000).toFixed(0)}–{(RENT_MAX / 1000).toFixed(0)}K · {STAFF_COUNT} staff. These are estimates,
          not a guarantee.
        </p>
      </div>

      <p className="mt-6 text-center text-sm font-medium text-decoction">
        Locations under 400 cups/day don&apos;t work — that&apos;s why we personally inspect every site before
        granting a franchise.
      </p>
      <div className="mt-4 text-center">
        <a href="#lead-form" className="btn btn-primary inline-flex">
          Book My Site Inspection
        </a>
      </div>
    </section>
  );
}
