const BADGES = ["GDPR Ready", "HIPAA Aligned", "ISO 27001", "SOC 2 Type II"];

export default function ComplianceBand() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="brand-gradient-bg">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <h3 className="font-sans text-2xl font-bold leading-tight tracking-tight text-brand-cream sm:text-3xl md:text-4xl">
              Compliance is not a feature.
              <br />
              <span className="text-white/95">It is the foundation.</span>
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-cream/90 sm:text-base">
              All engagements are governed by documented SOPs, role-based access
              controls, and real-time performance monitoring. Your regulatory
              exposure is our accountability.
            </p>
          </div>

          <ul className="flex flex-wrap gap-3 lg:justify-end">
            {BADGES.map((b) => (
              <li
                key={b}
                className="rounded-full border border-white/25 bg-brand-navy/35 px-4 py-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-brand-cream backdrop-blur-sm"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
