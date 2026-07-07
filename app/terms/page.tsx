import type { Metadata } from "next";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions | Satvik Amruttulya",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-10 text-sm leading-relaxed text-decoction/85">
      <h1 className="mb-6 font-display text-3xl text-decoction">Terms &amp; Conditions</h1>
      <p className="mb-4">
        This is a placeholder terms page — replace with a version reviewed by counsel before
        launch. Franchise terms (setup cost, franchise fee, deposit, royalty, agreement duration,
        area requirements, and required licenses) as advertised on this site are summarized for
        informational purposes; the binding terms are those set out in the written franchise
        agreement signed by both parties.
      </p>
      <p className="mb-4">
        Submitting the enquiry form does not create a franchise agreement or any obligation on
        either party — it only registers your interest so our team can contact you.
      </p>
      <p>
        Questions can be sent to{" "}
        <a href={`mailto:${SITE.email}`} className="underline">
          {SITE.email}
        </a>
        .
      </p>
    </section>
  );
}
