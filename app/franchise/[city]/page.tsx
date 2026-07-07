import type { Metadata } from "next";
import { notFound } from "next/navigation";
import districts from "@/data/districts.json";
import Hero from "@/components/Hero";
import OfferTable from "@/components/OfferTable";
import LeadForm from "@/components/LeadForm";
import { FaqJsonLd } from "@/components/JsonLd";

// v1 ships Pune only. This route structure exists so /franchise/[city]
// programmatic pages can be added later for each district as real,
// city-specific content (photos, availability, testimonials) is ready —
// per the build spec, we do not fabricate that content ahead of time.
const LIVE_CITIES = ["pune"];

export function generateStaticParams() {
  return LIVE_CITIES.map((city) => ({ city }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const district = districts.find((d) => d.district.toLowerCase() === params.city.toLowerCase());
  const cityName = district?.district ?? params.city;
  return {
    title: `Satvik Amruttulya Franchise ${cityName} | Tea Business for ₹2.5 Lakh`,
    description: `Start a Satvik Amruttulya chai franchise in ${cityName} — 0 royalty, 0 deposit, lifetime agreement.`,
  };
}

export default function CityFranchisePage({ params }: { params: { city: string } }) {
  if (!LIVE_CITIES.includes(params.city.toLowerCase())) {
    notFound();
  }

  return (
    <>
      <FaqJsonLd />
      <Hero />
      <OfferTable />
      <section className="px-4 py-12">
        <div className="mx-auto max-w-md">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
