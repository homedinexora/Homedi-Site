import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { loadPolicyHtml } from "@/lib/loadPolicyHtml";

export const metadata: Metadata = {
  title: "Terms & Conditions - Patients | HoMedi",
  description:
    "Terms governing use of the HoMedi patient application for home-visit healthcare bookings.",
  robots: { index: false, follow: false },
};

export default function PatientTermsPage() {
  return (
    <LegalDocument
      html={loadPolicyHtml("HoMedi_Patient_Terms_and_Conditions.html")}
    />
  );
}
