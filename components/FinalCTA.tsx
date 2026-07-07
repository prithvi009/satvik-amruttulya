import LeadForm from "./LeadForm";

export default function FinalCTA() {
  return (
    <section className="bg-decoction px-4 py-14 text-ivory">
      <div className="mx-auto max-w-xl">
        <p className="mb-6 text-center font-display text-2xl sm:text-3xl">
          The next successful outlet could be yours.
        </p>
        <div className="[&_.btn-outline]:border-ivory [&_.btn-outline]:text-ivory [&_input]:text-decoction [&_label]:text-decoction">
          <LeadForm variant="final" />
        </div>
      </div>
    </section>
  );
}
