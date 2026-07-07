import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-decoction px-4 pb-28 pt-10 text-ivory md:pb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        {/* public/brand/logo.png is the real logo (already includes the
            tagline in the artwork) — fixed-aspect-ratio wrapper avoids
            layout shift without needing the exact PNG pixel dimensions. */}
        <div className="relative h-14 w-[89px]">
          <Image
            src="/brand/logo.png"
            alt="Satvik Amruttulya — देश का स्वाद, देश कि चाय"
            fill
            sizes="89px"
            className="object-contain object-left"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-2 font-display text-base text-kesari">Head Office</p>
            <p className="text-ivory/80">{SITE.address.full}</p>
          </div>
          <div>
            <p className="mb-2 font-display text-base text-kesari">Contact</p>
            {SITE.phones.map((p) => (
              <a key={p} href={`tel:${p}`} className="block text-ivory/80 hover:text-ivory">
                {p.replace("+91", "+91 ")}
              </a>
            ))}
            <a href={`mailto:${SITE.email}`} className="block text-ivory/80 hover:text-ivory">
              {SITE.email}
            </a>
          </div>
          <div>
            <p className="mb-2 font-display text-base text-kesari">Follow</p>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-ivory/80 hover:text-ivory"
            >
              Instagram · @satvikamruttulya
            </a>
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-ivory/80 hover:text-ivory"
            >
              Facebook
            </a>
            <p className="mt-2 text-xs text-ivory/50">FSSAI Lic. {SITE.fssaiNumber}</p>
          </div>
        </div>

        <div className="brass-rule opacity-30" />

        <div className="flex flex-col gap-2 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Satvik Amruttulya. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-ivory">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ivory">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
