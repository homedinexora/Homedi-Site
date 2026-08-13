import type { Metadata } from "next";
import LegalDocument from "@/components/LegalDocument";
import { loadPolicyHtml } from "@/lib/loadPolicyHtml";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | HoMedi",
  description:
    "Cancellations, rescheduling, refunds, and no-shows for HoMedi home-visit bookings.",
  robots: { index: false, follow: false },
};

export default function RefundCancellationPage() {
  return (
    <LegalDocument
      html={loadPolicyHtml("HoMedi_Refund_and_Cancellation_Policy.html")}
    />
  );
}
