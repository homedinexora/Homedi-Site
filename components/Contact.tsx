"use client";

import { useState } from "react";

const EMAIL = "info@nexorahealthsystems.in";

const roles = [
  { value: "provider", label: "I'm a doctor or nurse" },
  { value: "partner", label: "I'm a partner / organisation" },
  { value: "patient", label: "I'm looking for care" },
];

export default function Contact() {
  const [role, setRole] = useState("provider");
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const roleLabel = roles.find((r) => r.value === role)?.label ?? role;
    const subject = `Nexora enquiry — ${roleLabel}`;
    const body = [
      `Name: ${name}`,
      org ? `Organisation: ${org}` : null,
      `Role: ${roleLabel}`,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <div className="text-white">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-teal-light">
                Get in touch
              </span>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Join the HoMedi™ beta
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">
                We are onboarding verified providers and partners in Hyderabad.
                Tell us a little about yourself and we&apos;ll be in touch.
              </p>
              <div className="mt-8 space-y-3 text-sm text-white/80">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a className="underline-offset-2 hover:underline" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  <a className="underline-offset-2 hover:underline" href="tel:+919440231067">
                    +91 94402 31067
                  </a>
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-7 shadow-2xl">
              <div className="grid gap-4">
                <div>
                  <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-navy">
                    I am…
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-xl border border-navy/15 bg-white px-4 py-2.5 text-sm text-navy outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                  >
                    {roles.map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>
                <Field label="Name" id="name" value={name} onChange={setName} required />
                <Field
                  label="Organisation (optional)"
                  id="org"
                  value={org}
                  onChange={setOrg}
                />
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-navy/15 px-4 py-2.5 text-sm text-navy outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Email us
                </button>
                <p className="text-center text-xs text-slate-muted">
                  This opens your email app with a pre-filled message to {EMAIL}.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  required = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={id}
        type="text"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-navy/15 px-4 py-2.5 text-sm text-navy outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
      />
    </div>
  );
}
