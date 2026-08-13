import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { loadPolicyHtml } from "@/lib/loadPolicyHtml";

export const metadata: Metadata = {
  title: "Privacy Policy - Providers | HoMedi",
  description:
    "How NeXora Health Systems processes personal data of doctors and nurses on HoMedi.",
  robots: { index: false, follow: false },
};

export default function ProviderPrivacyPage() {
  return (
    <LegalDocument
      html={loadPolicyHtml("HoMedi_Provider_Privacy_Policy.html")}
    />
  );
}
