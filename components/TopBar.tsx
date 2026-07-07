import Link from "next/link";

export default function TopBar() {
  return (
    <Link
      href="#lead-form"
      className="block bg-decoction px-3 py-2 text-center text-xs font-medium text-ivory sm:text-sm"
    >
      Start for just ₹2.5 Lakh · 0 Royalty · 0 Deposit
    </Link>
  );
}
