import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Morales Solutions home"
    >
      <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-md brand-gradient-bg shadow-[0_4px_24px_-8px_rgba(255,102,0,0.6)]">
        <span className="font-sans text-base font-extrabold text-brand-cream">
          M
        </span>
      </span>
      <span className="font-sans text-[15px] font-semibold tracking-tight text-brand-cream">
        Morales <span className="text-brand-cream/60">Solutions</span>
      </span>
    </Link>
  );
}
