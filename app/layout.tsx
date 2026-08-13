import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexorahealthsystems.in"),
  title: "Nexora Health Systems — Verified home healthcare for India",
  description:
    "Nexora Health Systems builds verification-first home-healthcare infrastructure for India. HoMedi™ helps you find a verified doctor or nurse in your own neighbourhood who comes to your home. In beta, launching in Hyderabad.",
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Nexora Health Systems — Verified home healthcare for India",
    description:
      "HoMedi™ helps you find a verified doctor or nurse in your own neighbourhood who comes to your home. In beta, launching in Hyderabad.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#173E5C",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
