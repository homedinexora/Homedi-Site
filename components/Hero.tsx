export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* decorative gradient orbs */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-80 w-80 rounded-full bg-leaf/10 blur-3xl" />

      <div className="container-page relative grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/5 px-4 py-1.5 text-sm font-semibold text-teal-dark">
            <span className="h-2 w-2 rounded-full bg-teal" />
            In beta · Launching in Hyderabad
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-navy md:text-6xl">
            Verified home healthcare{" "}
            <span className="bg-nexora-gradient bg-clip-text text-transparent">
              for India
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-muted">
            Nexora Health Systems builds verification-first home-healthcare
            infrastructure for India. Our flagship product,{" "}
            <span className="font-semibold text-navy">HoMedi™</span>, helps people
            find a verified doctor or nurse living right in their own
            neighbourhood — often the same apartment complex — who comes to their
            home.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Get in touch
            </a>
            <a href="#how" className="btn-ghost">
              How HoMedi™ works
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up md:justify-self-end">
          <div className="relative w-full max-w-md rounded-3xl border border-navy/5 bg-gradient-to-br from-white to-teal/5 p-8 shadow-2xl shadow-navy/5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-dark">
              HoMedi™
            </p>
            <p className="mt-3 text-xl font-semibold leading-snug text-navy">
              A verified provider in your own neighbourhood — who comes to your
              home.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Find a verified doctor or nurse within ~2 km",
                "Book a home visit",
                "The provider arrives at your door",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 h-5 w-5 flex-none text-leaf"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-sm text-slate-muted">{line}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-xl bg-navy/5 px-4 py-3 text-xs leading-relaxed text-navy/70">
              Home visits only. Not telemedicine, not a clinic-booking app, not
              insurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
