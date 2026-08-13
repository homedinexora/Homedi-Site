import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Use — Nexora Health Systems",
  description:
    "Terms of Use for Nexora Health Systems Private Limited. Draft, pending counsel review.",
};

export default function TermsPage() {
  return (
    <PageShell title="Terms of Use" draft>
      <p>
        These Terms of Use will govern access to and use of the HoMedi™ service
        operated by Nexora Health Systems Private Limited.
      </p>
      <p>
        The text on this page is a placeholder. Final, binding terms will be
        added here after review by legal counsel and before launch.
      </p>
      <p>
        For any query in the meantime, write to{" "}
        <a
          className="text-teal-dark underline-offset-2 hover:underline"
          href="mailto:info@nexorahealthsystems.in"
        >
          info@nexorahealthsystems.in
        </a>
        .
      </p>
    </PageShell>
  );
}
