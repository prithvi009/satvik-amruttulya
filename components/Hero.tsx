import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-8 sm:pt-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="relative mb-6 h-32 w-52 sm:h-40 sm:w-64">
          <Image
            src="/brand/logo.png"
            alt="Satvik Amruttulya"
            fill
            priority
            sizes="(min-width: 640px) 256px, 208px"
            className="object-contain"
          />
        </div>

        <h1 className="mb-3 font-display text-[34px] leading-[1.25] text-decoction sm:text-5xl">
          देश का स्वाद, देश कि चाय.
        </h1>
        <p className="mb-5 max-w-xl text-base text-decoction/80 sm:text-lg">
          Start your own Satvik Amruttulya outlet at ₹2.5 lakh. Zero royalty. Zero deposit. Lifetime agreement.
        </p>

        <a href="#lead-form" className="btn btn-primary w-full max-w-xs sm:w-auto">
          Get Franchise Info
        </a>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {["FSSAI Licensed", "Pune Head Office", "Zero Royalty"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-brass-light bg-kesari-light px-3 py-1 text-xs font-medium text-decoction"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
