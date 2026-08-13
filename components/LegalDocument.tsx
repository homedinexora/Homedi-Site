import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalDocument({ html }: { html: string }) {
  return (
    <>
      <Header />
      <main id="main" className="container-page py-16 md:py-24">
        <div
          className="legal-prose mx-auto max-w-3xl space-y-3 text-base leading-relaxed text-slate-muted [&_a]:text-teal-dark [&_a]:underline-offset-2 hover:[&_a]:underline [&_b]:font-semibold [&_b]:text-navy/90 [&_li]:my-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:my-2 [&_strong]:font-semibold [&_strong]:text-navy/90 [&_table]:my-4 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_td]:border [&_td]:border-navy/15 [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_th]:border [&_th]:border-navy/15 [&_th]:bg-navy/[0.04] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-navy [&_ul]:list-disc [&_ul]:pl-5"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
      <Footer />
    </>
  );
}
