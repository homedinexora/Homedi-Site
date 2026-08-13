const steps = [
  {
    number: "1",
    title: "Find a verified provider",
    description:
      "Search for a verified doctor or nurse within roughly 2 km of your home — often in the same apartment complex.",
  },
  {
    number: "2",
    title: "Book a home visit",
    description:
      "Choose a provider and request a visit at a time that suits you.",
  },
  {
    number: "3",
    title: "The provider arrives",
    description:
      "Your provider comes to your home. Doctors can issue a digital prescription.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section bg-slate-50">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
            Care that comes to your door
          </h2>
          <p className="mt-4 text-lg text-slate-muted">
            HoMedi™ connects you with a verified provider in your neighbourhood,
            in three steps.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-navy/5 bg-white p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-nexora-gradient text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-10 max-w-2xl rounded-2xl border border-navy/10 bg-white px-6 py-4 text-center text-sm font-medium text-navy">
          Home visits only. Not telemedicine, not a clinic-booking app, not
          insurance.
        </p>
      </div>
    </section>
  );
}
