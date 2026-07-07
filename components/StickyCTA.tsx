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
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/[0.06] bg-ivory/90 px-3 pt-2 shadow-[0_-8px_24px_-4px_rgba(58,32,16,0.18)] backdrop-blur-md supports-[backdrop-filter]:bg-ivory/75 md:hidden"
      style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2.5">
        <a
          href={telLink(SITE.phones[0])}
          onClick={() => track("CallClick", { location: "sticky_bar" })}
          className="cta-pill cta-pill-call"
          aria-label="Call Satvik Amruttulya now"
        >
          <PhoneIcon />
          Call Now
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("WhatsAppClick", { location: "sticky_bar" })}
          className="cta-pill cta-pill-whatsapp"
          aria-label="WhatsApp Satvik Amruttulya"
        >
          <WhatsAppIcon />
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3C4 14.9 3.6 13.5 3.6 12 3.6 7.4 7.4 3.6 12 3.6S20.4 7.4 20.4 12 16.6 20.2 12 20.2z"
        fill="currentColor"
      />
      <path
        d="M16.6 14.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z"
        fill="currentColor"
      />
    </svg>
  );
}
