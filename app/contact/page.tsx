import type { Metadata } from "next";
import { SITE, telLink, waLink } from "@/lib/config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us | Satvik Amruttulya",
  description: "Contact us about the Satvik Amruttulya franchise — by phone, WhatsApp, or the form.",
};

export default function ContactPage() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h1 className="font-display text-3xl text-decoction sm:text-4xl">Contact Us</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-decoction/70">
          Have a question about the franchise? Reach us directly, or fill in the form and we&apos;ll call you within 24 hours.
        </p>
        <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-brass to-transparent" />
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
        {/* Contact info */}
        <div className="flex flex-col gap-4">
          <div className="rounded-2xl border border-brass-light/60 bg-white p-6 shadow-sm shadow-brass/5">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-kesari-light text-lg">📍</span>
              <p className="font-display text-lg text-decoction">Head Office</p>
            </div>
            <p className="text-sm leading-relaxed text-decoction/75">{SITE.address.full}</p>
            {/* Static map image + link, per spec — no live iframe embed. */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-kesari-dark hover:underline"
            >
              View on Google Maps →
            </a>
          </div>

          <div className="rounded-2xl border border-brass-light/60 bg-white p-6 shadow-sm shadow-brass/5">
            <div className="mb-3 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-kesari-light text-lg">💬</span>
              <p className="font-display text-lg text-decoction">Direct Contact</p>
            </div>
            <div className="flex flex-col gap-1">
              {SITE.phones.map((p) => (
                <a
                  key={p}
                  href={telLink(p)}
                  className="flex items-center gap-2 py-1 text-sm text-decoction/75 transition-colors hover:text-kesari-dark"
                >
                  <span className="text-base">📞</span> {p.replace("+91", "+91 ")}
                </a>
              ))}
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 py-1 text-sm text-decoction/75 transition-colors hover:text-kesari-dark"
              >
                <span className="text-base">✉️</span> {SITE.email}
              </a>
            </div>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-4 w-full">
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Lead form */}
        <div>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
