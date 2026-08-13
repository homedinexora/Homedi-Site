import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { loadPolicyHtml } from "@/lib/loadPolicyHtml";

export const metadata: Metadata = {
  title: "Privacy Policy — Patients | HoMedi",
  description:
    "How NeXora Health Systems processes patient and caregiver personal data on the HoMedi platform.",
  robots: { index: false, follow: false },
};

export default function PatientPrivacyPage() {
  return (
    <LegalDocument html={loadPolicyHtml("HoMedi_Patient_Privacy_Policy.html")} />
  );
}
