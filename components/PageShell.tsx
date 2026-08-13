import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PageShell({
  title,
  draft = false,
  children,
}: {
  title: string;
  draft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main" className="container-page py-16 md:py-24">
        {draft && (
          <div
            role="alert"
            className="mb-10 rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm font-semibold text-amber-900"
          >
            DRAFT — replace with counsel-reviewed copy before launch.
          </div>
        )}
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
          {title}
        </h1>
        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-slate-muted">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
