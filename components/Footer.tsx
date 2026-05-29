import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
import Logo from "./Logo";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t-2 border-brand-red bg-brand-navy">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-brand-cream/65">
              Compliance-first outsourcing partner for regulated and
              growth-stage organizations. Specialized teams in compliance,
              support, and sales.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-brand-cream/70">
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-brand-orange" />
                <a
                  href="mailto:hello@moralessolutions.com"
                  className="hover:text-brand-cream"
                >
                  hello@moralessolutions.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={14} className="text-brand-orange" />
                <span>Global delivery · Americas · EMEA</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-cream/95">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-cream/65">
                <li>
                  <Link href="/#why-us" className="hover:text-brand-cream">
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-brand-cream">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-brand-cream">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-brand-cream">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-cream/95">
                Solutions
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-cream/65">
                <li>Compliance Operations</li>
                <li>Customer Support</li>
                <li>Sales Operations</li>
                <li>QA & Oversight</li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-cream/95">
                Legal
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-cream/65">
                <li>
                  <Link href="#" className="hover:text-brand-cream">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-cream">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-cream">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-cream">
                    DPA
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-brand-cream/55">
            © <CopyrightYear /> Morales Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-brand-cream/70 transition hover:border-brand-red/50 hover:text-brand-cream"
            >
              <LinkedInIcon size={15} />
            </a>
            <a
              href="mailto:hello@moralessolutions.com"
              aria-label="Email"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-brand-cream/70 transition hover:border-brand-red/50 hover:text-brand-cream"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
