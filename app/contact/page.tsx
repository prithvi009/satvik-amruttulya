import type { Metadata } from "next";
import { SITE, telLink, waLink } from "@/lib/config";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us | Satvik Amruttulya",
  description: "Contact us about the Satvik Amruttulya franchise — by phone, WhatsApp, or the form.",
};

export default function ContactPage() {
  return (
    <section className="px-4 py-10">
      <h1 className="mb-8 text-center font-display text-3xl text-decoction sm:text-4xl">Contact Us</h1>

      <div className="mx-auto mb-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-brass-light bg-white/60 p-5">
          <p className="mb-2 font-display text-lg text-decoction">Head Office</p>
          <p className="text-sm text-decoction/80">{SITE.address.full}</p>
          {/* Static map image + link, per spec — no live iframe embed. */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-medium text-kesari-dark underline"
          >
            View on Google Maps →
          </a>
        </div>
        <div className="rounded-xl border border-brass-light bg-white/60 p-5">
          <p className="mb-2 font-display text-lg text-decoction">Direct Contact</p>
          {SITE.phones.map((p) => (
            <a key={p} href={telLink(p)} className="block text-sm text-decoction/80 hover:text-kesari-dark">
              📞 {p.replace("+91", "+91 ")}
            </a>
          ))}
          <a href={`mailto:${SITE.email}`} className="block text-sm text-decoction/80 hover:text-kesari-dark">
            ✉️ {SITE.email}
          </a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-3 w-full">
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-md">
        <LeadForm />
      </div>
    </section>
  );
}
