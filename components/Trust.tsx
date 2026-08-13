const cards = [
  {
    title: "NMC/HPR-verified providers",
    description:
      "Providers on HoMedi™ are verified against the National Medical Commission and Healthcare Professionals Registry.",
  },
  {
    title: "ABDM & ABHA aligned (opt-in)",
    description:
      "Built to align with the Ayushman Bharat Digital Mission and ABHA, on an opt-in basis.",
  },
  {
    title: "DPDPA 2023 compliant",
    description:
      "Personal data is handled in line with the Digital Personal Data Protection Act, 2023.",
  },
  {
    title: "Audited & grievance-backed",
    description:
      "Processes are auditable, with a grievance mechanism for patients and providers.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Trust &amp; compliance</span>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Verification first
          </h2>
          <p className="mt-4 text-lg text-slate-muted">
            We are building HoMedi™ around verification and accountability from
            the start.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-navy/5 bg-white p-7 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-nexora-gradient text-white">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
