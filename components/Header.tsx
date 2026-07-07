import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-brass-light/60 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2" aria-label="Satvik Amruttulya home">
          {/* public/brand/logo.png is the real logo — fixed-aspect-ratio
              wrapper avoids layout shift without needing the exact PNG
              pixel dimensions. See public/brand/README.md. */}
          <div className="relative h-10 w-16 sm:h-11 sm:w-[70px]">
            <Image
              src="/brand/logo.png"
              alt="Satvik Amruttulya"
              fill
              priority
              sizes="70px"
              className="object-contain object-left"
            />
          </div>
        </Link>
        <a href="#lead-form" className="btn btn-primary hidden !min-h-0 !py-2 !px-4 text-sm sm:inline-flex">
          Franchise Info
        </a>
      </div>
    </header>
  );
}
