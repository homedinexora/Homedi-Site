import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

const links = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Careers", href: "/careers" },
  { label: "homedi.in", href: "https://homedi.in", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Image
            src={logo}
            alt="Nexora Health Systems"
            className="h-9 w-auto brightness-0 invert"
          />
          <address className="mt-6 max-w-md text-sm not-italic leading-relaxed text-white/70">
            <p className="font-semibold text-white">
              Nexora Health Systems Private Limited
            </p>
            <p className="mt-2">CIN: U86909TS2026PTC215305</p>
            <p className="mt-2">
              Registered office: 4-12-927/1, Plot No. E1, RD-1, Portion-C, Sai
              Nagar Colony, Vanastalipuram, Hayathnagar, Hyderabad – 500070,
              Telangana, India
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                className="underline-offset-2 hover:underline"
                href="mailto:info@nexorahealthsystems.in"
              >
                info@nexorahealthsystems.in
              </a>
            </p>
            <p className="mt-1">
              Phone:{" "}
              <a className="underline-offset-2 hover:underline" href="tel:+919440231067">
                +91 94402 31067
              </a>
            </p>
          </address>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-light">
            Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((link) =>
              link.external ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6">
          <p className="text-sm text-white/60">
            © 2026 Nexora Health Systems Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
}
