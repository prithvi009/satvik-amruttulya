"use client";

import { SITE, telLink, waLink } from "@/lib/config";
import { track } from "@/lib/analytics";

/**
 * Sticky bottom bar — always visible on mobile, never overlaps the lead
 * form's submit button (form has scroll-margin + bottom padding reserved,
 * see LeadForm.tsx). This bar alone is expected to drive 40%+ of leads.
 */
export default function StickyCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-brass-light bg-ivory/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-ivory/80 md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={telLink(SITE.phones[0])}
        onClick={() => track("CallClick", { location: "sticky_bar" })}
        className="btn btn-outline flex-1"
        aria-label="Call Satvik Amruttulya now"
      >
        📞 Call Now
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("WhatsAppClick", { location: "sticky_bar" })}
        className="btn btn-whatsapp flex-1"
        aria-label="WhatsApp Satvik Amruttulya"
      >
        WhatsApp Us
      </a>
    </div>
  );
}
