"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { getStoredUtm } from "@/lib/utm";
import { waLink } from "@/lib/config";

type Step1 = { name: string; mobile: string; city: string };
type Step2 = { budget: string; shop: string; timeline: string };

const BUDGET_OPTIONS = ["₹2.5–4L", "₹4L+", "Still deciding"];
const SHOP_OPTIONS = ["I have my own shop", "Will rent a shop", "Still searching for a location"];
const TIMELINE_OPTIONS = ["Within 30 days", "1–3 months", "Just gathering info"];

function SelectButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`min-h-[52px] flex-1 rounded-xl border px-3 py-2 text-sm font-medium transition-all duration-150 active:scale-[0.98] ${
        selected
          ? "border-kesari bg-kesari text-[#201008] shadow-sm shadow-kesari/30"
          : "border-brass-light/70 bg-white text-decoction hover:border-brass hover:bg-kesari-light/40"
      }`}
    >
      {children}
    </button>
  );
}

export default function LeadForm({ variant = "default" }: { variant?: "default" | "final" }) {
  const [step, setStep] = useState<1 | 2 | "done">(1);
  const [step1, setStep1] = useState<Step1>({ name: "", mobile: "", city: "" });
  const [step2, setStep2] = useState<Step2>({ budget: "", shop: "", timeline: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Step1, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validateStep1() {
    const e: Partial<Record<keyof Step1, string>> = {};
    if (!step1.name.trim()) e.name = "Please enter your name";
    const digits = step1.mobile.replace(/\D/g, "");
    if (digits.length !== 10) e.mobile = "Enter a 10-digit mobile number";
    if (!step1.city.trim()) e.city = "Enter your city/taluka";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleStep1Next() {
    if (!validateStep1()) return;
    track("InitiateCheckout", { step: 1, city: step1.city });
    setStep(2);
  }

  async function handleSubmit() {
    setSubmitting(true);
    setSubmitError(null);
    const utm = getStoredUtm();
    const payload = {
      ...step1,
      mobile: "+91" + step1.mobile.replace(/\D/g, "").slice(-10),
      ...step2,
      utm,
      page: typeof window !== "undefined" ? window.location.pathname : "",
      timestamp: new Date().toISOString(),
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("submit_failed");
      track("Lead", payload);
      setStep("done");
    } catch {
      setSubmitError("Something went wrong while submitting. Please try again or WhatsApp/Call us.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-brass-light/70 bg-white px-4 py-3 text-base text-decoction placeholder:text-decoction/35 transition-colors focus:border-kesari focus:outline-none focus:ring-2 focus:ring-kesari/25";

  if (step === "done") {
    return (
      <div className="rounded-2xl border border-brass-light/60 bg-white p-8 text-center shadow-lg shadow-brass/10">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-wa/15 text-3xl">
          ✅
        </div>
        <p className="mb-1 font-display text-2xl text-decoction">Application received!</p>
        <p className="mb-6 text-sm text-decoction/70">Our team will call you within 24 hours.</p>
        <div className="flex flex-col gap-3">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("WhatsAppClick", { location: "thank_you" })}
            className="btn btn-whatsapp"
          >
            Talk to us now
          </a>
          <a href="/franchise-info.pdf" download className="btn btn-outline">
            Download Franchise Info PDF
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      id={variant === "final" ? "lead-form-final" : "lead-form"}
      className="scroll-mt-20 overflow-hidden rounded-2xl border border-brass-light/60 bg-white shadow-lg shadow-brass/10"
    >
      {/* Progress header */}
      <div className="border-b border-brass-light/40 bg-kesari-light/40 px-6 pb-4 pt-5">
        <div className="mb-3 flex items-center justify-between text-xs font-medium">
          <span className={step === 1 ? "text-kesari-dark" : "text-decoction/50"}>Your details</span>
          <span className={step === 2 ? "text-kesari-dark" : "text-decoction/50"}>A bit more info</span>
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-1.5 flex-1 rounded-full bg-kesari transition-colors" />
          <span className={`h-1.5 flex-1 rounded-full transition-colors ${step === 2 ? "bg-kesari" : "bg-brass-light/60"}`} />
        </div>
      </div>

      <div className="p-6">
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-decoction/80">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={step1.name}
                onChange={(e) => setStep1((s) => ({ ...s, name: e.target.value }))}
                className={inputClass}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-700">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="mobile" className="mb-1.5 block text-sm font-medium text-decoction/80">
                Mobile number
              </label>
              <div className="flex items-center overflow-hidden rounded-xl border border-brass-light/70 bg-white transition-colors focus-within:border-kesari focus-within:ring-2 focus-within:ring-kesari/25">
                <span className="border-r border-brass-light/60 bg-kesari-light/30 px-3 py-3 text-base font-medium text-decoction/70">
                  +91
                </span>
                <input
                  id="mobile"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={step1.mobile}
                  onChange={(e) => setStep1((s) => ({ ...s, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) }))}
                  className="w-full bg-transparent px-3 py-3 text-base text-decoction placeholder:text-decoction/35 focus:outline-none"
                  placeholder="98XXXXXXXX"
                />
              </div>
              {errors.mobile && <p className="mt-1.5 text-xs text-red-700">{errors.mobile}</p>}
            </div>
            <div>
              <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-decoction/80">
                City / Taluka
              </label>
              <input
                id="city"
                type="text"
                value={step1.city}
                onChange={(e) => setStep1((s) => ({ ...s, city: e.target.value }))}
                className={inputClass}
                placeholder="e.g. Pune"
              />
              {errors.city && <p className="mt-1.5 text-xs text-red-700">{errors.city}</p>}
            </div>
            <button type="button" onClick={handleStep1Next} className="btn btn-primary mt-1 w-full">
              Next →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="flex flex-col gap-5">
            <div>
              <p className="mb-2.5 text-sm font-medium text-decoction/80">Is your budget ready?</p>
              <div className="flex gap-2">
                {BUDGET_OPTIONS.map((opt) => (
                  <SelectButton key={opt} selected={step2.budget === opt} onClick={() => setStep2((s) => ({ ...s, budget: opt }))}>
                    {opt}
                  </SelectButton>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2.5 text-sm font-medium text-decoction/80">Do you have a shop?</p>
              <div className="flex flex-col gap-2 sm:flex-row">
                {SHOP_OPTIONS.map((opt) => (
                  <SelectButton key={opt} selected={step2.shop === opt} onClick={() => setStep2((s) => ({ ...s, shop: opt }))}>
                    {opt}
                  </SelectButton>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2.5 text-sm font-medium text-decoction/80">When do you want to start?</p>
              <div className="flex gap-2">
                {TIMELINE_OPTIONS.map((opt) => (
                  <SelectButton key={opt} selected={step2.timeline === opt} onClick={() => setStep2((s) => ({ ...s, timeline: opt }))}>
                    {opt}
                  </SelectButton>
                ))}
              </div>
            </div>
            {submitError && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{submitError}</p>
            )}
            <button
              type="button"
              disabled={!step2.budget || !step2.shop || !step2.timeline || submitting}
              onClick={handleSubmit}
              className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit My Details"}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="text-center text-xs font-medium text-decoction/60 underline underline-offset-2 hover:text-kesari-dark"
            >
              ← Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
