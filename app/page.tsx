import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import WhySatvik from "@/components/WhySatvik";
import OfferTable from "@/components/OfferTable";
import TapriSlate from "@/components/TapriSlate";
import HowItWorks from "@/components/HowItWorks";
import Founder from "@/components/Founder";
import Testimonials from "@/components/Testimonials";
import Menu from "@/components/Menu";
import DistrictAvailability from "@/components/DistrictAvailability";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import LeadForm from "@/components/LeadForm";
import { FaqJsonLd } from "@/components/JsonLd";

function Rule() {
  return <div className="brass-rule mx-auto max-w-4xl" />;
}

export default function HomePage() {
  return (
    <>
      <FaqJsonLd />
      <Hero />
      <Rule />
      <ProofStrip />
      <Rule />
      <WhySatvik />
      <Rule />
      <OfferTable />
      <Rule />
      <TapriSlate />
      <Rule />
      <HowItWorks />
      <Rule />
      <Founder />
      <Rule />
      <Testimonials />
      <Rule />
      <Menu />
      <Rule />
      <DistrictAvailability />
      <Rule />
      <FAQ />

      <section className="px-4 py-12">
        <h2 className="mb-6 text-center font-display text-3xl text-decoction">Get Franchise Info</h2>
        <div className="mx-auto max-w-md">
          <LeadForm />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
