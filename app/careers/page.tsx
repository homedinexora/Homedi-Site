import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Careers — Nexora Health Systems",
  description:
    "Work with Nexora Health Systems Private Limited on verified home healthcare for India.",
};

export default function CareersPage() {
  return (
    <PageShell title="Careers">
      <p>
        Nexora Health Systems is an early-stage team based in Hyderabad, building
        verification-first home-healthcare infrastructure for India.
      </p>
      <p>
        We are not advertising specific roles yet. If you would like to work with
        us, write to{" "}
        <a
          className="text-teal-dark underline-offset-2 hover:underline"
          href="mailto:info@nexorahealthsystems.in?subject=Careers%20at%20Nexora"
        >
          info@nexorahealthsystems.in
        </a>{" "}
        and tell us how you&apos;d like to contribute.
      </p>
    </PageShell>
  );
}
