import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

const navLinks = [
  { label: "How it works", href: "/#how" },
  { label: "Trust", href: "/#trust" },
  { label: "Founder", href: "/#founder" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/5 bg-white/80 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/#top" className="flex items-center" aria-label="Nexora Health Systems home">
          <Image
            src={logo}
            alt="Nexora Health Systems"
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition hover:text-teal-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/#contact" className="btn-primary hidden md:inline-flex">
          Get in touch
        </a>
      </div>
    </header>
  );
}
