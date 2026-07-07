import type { Metadata } from "next";
import Founder from "@/components/Founder";
import WhySatvik from "@/components/WhySatvik";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "About Us | Satvik Amruttulya",
  description: "The Satvik Amruttulya story — a tea business built on purity, transparency, and trust.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-4 pt-10 text-center">
        <h1 className="font-display text-3xl text-decoction sm:text-4xl">About Us</h1>
      </section>
      <Founder />
      <WhySatvik />
      <section className="px-4 py-12">
        <div className="mx-auto max-w-md">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
