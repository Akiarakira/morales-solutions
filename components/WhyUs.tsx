import { ShieldCheck, Megaphone, TrendingUp, Lock, Gauge, Users } from "lucide-react";

const PILLARS = [
  {
    n: "01",
    icon: ShieldCheck,
    title: "Regulatory Alignment",
    body:
      "Teams onboarded with jurisdiction-specific compliance training. GDPR, HIPAA, FCA, CFPB-ready. Continuously audit-ready.",
  },
  {
    n: "02",
    icon: Megaphone,
    title: "Brand-Faithful Execution",
    body:
      "We design communication frameworks around your voice, escalation policies, and customer commitments — not generic scripts.",
  },
  {
    n: "03",
    icon: TrendingUp,
    title: "Elastic Scale, Fixed Quality",
    body:
      "From 5-agent pilots to 500-seat deployments. Performance floors are contractually guaranteed — not aspirational benchmarks.",
  },
  {
    n: "04",
    icon: Lock,
    title: "Security by Default",
    body:
      "Encrypted channels, role-based access, NDA-first onboarding, and continuous monitoring across every engagement.",
  },
  {
    n: "05",
    icon: Gauge,
    title: "Performance Accountability",
    body:
      "SLA-bound delivery with real-time dashboards. You see what we see — quality, throughput, sentiment — every day.",
  },
  {
    n: "06",
    icon: Users,
    title: "Operationally Embedded",
    body:
      "We function as a true extension of your organization — aligned to your metrics, your tools, and your customer experience.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative scroll-mt-24 border-b border-white/5 bg-brand-navy py-24 sm:py-32"
    >
      <div className="radial-accent absolute inset-0 -z-0" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-orange font-sans">
            Strategic Partnership
          </p>
          <h2 className="mt-4 font-sans text-3xl font-bold leading-tight tracking-tight text-brand-cream sm:text-4xl md:text-5xl">
            The operational foundation your{" "}
            <span className="brand-gradient-text">growth demands.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-cream/70 sm:text-lg">
            We are not a staffing agency. We embed as a functional extension of
            your organization — accountable to your metrics, fluent in your
            compliance obligations, and aligned to your customer experience
            standards.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.n}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-brand-navy-700/60 p-6 transition hover:border-brand-red/50 hover:bg-brand-navy-600/60"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-px top-0 h-full w-[2px] origin-top scale-y-0 brand-gradient-bg transition-transform duration-300 group-hover:scale-y-100"
                />
                <div className="flex items-start justify-between">
                  <span className="font-sans text-xs font-bold tracking-[0.25em] text-brand-red">
                    {p.n}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-brand-navy/60 text-brand-orange transition group-hover:border-brand-red/40 group-hover:text-brand-cream">
                    <Icon size={18} />
                  </span>
                </div>
                <h3 className="mt-6 font-sans text-xl font-semibold text-brand-cream">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-cream/70">
                  {p.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
