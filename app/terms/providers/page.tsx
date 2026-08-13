import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { loadPolicyHtml } from "@/lib/loadPolicyHtml";

export const metadata: Metadata = {
  title: "Terms & Conditions - Providers | HoMedi",
  description:
    "Terms for independent doctors and nurses offering home-visit services on HoMedi.",
  robots: { index: false, follow: false },
};

export default function ProviderTermsPage() {
  return (
    <LegalDocument
      html={loadPolicyHtml("HoMedi_Provider_Terms_and_Conditions.html")}
    />
  );
}
