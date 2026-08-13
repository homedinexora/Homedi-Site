import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Nexora Health Systems",
  description:
    "Privacy Policy for Nexora Health Systems Private Limited. Draft, pending counsel review.",
};

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy" draft>
      <p>
        This page describes how Nexora Health Systems Private Limited handles
        personal data in connection with HoMedi™, in line with the Digital
        Personal Data Protection Act, 2023.
      </p>
      <p>
        The text on this page is a placeholder. Final, binding privacy terms
        will be added here after review by legal counsel and before launch.
      </p>
      <p>
        For any privacy enquiry in the meantime, write to{" "}
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
