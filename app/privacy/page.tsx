import type { Metadata } from "next";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | Satvik Amruttulya",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-10 text-sm leading-relaxed text-decoction/85">
      <h1 className="mb-6 font-display text-3xl text-decoction">Privacy Policy</h1>
      <p className="mb-4">
        This is a placeholder privacy policy — replace with a version reviewed by counsel before
        launch. Satvik Amruttulya collects the information you submit through our franchise
        enquiry form (name, mobile number, city, budget range, shop availability, and timeline)
        solely to evaluate and follow up on franchise applications.
      </p>
      <p className="mb-4">
        Data collected is shared only with our internal team and the CRM/automation tools we use
        to manage enquiries (currently configured via a private webhook). We do not sell your
        personal data to third parties.
      </p>
      <p className="mb-4">
        We use Meta Pixel and Google Analytics 4 to understand which ads and pages lead to
        enquiries. These tools may set cookies in your browser.
      </p>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${SITE.email}`} className="underline">
          {SITE.email}
        </a>
        .
      </p>
    </section>
  );
}
