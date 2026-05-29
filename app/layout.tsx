import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Morales Solutions — Compliance-First Outsourcing",
  description:
    "Specialized outsourcing teams in compliance operations, customer support, and sales. Regulated-market-ready, brand-aligned, and operational from day one.",
  metadataBase: new URL("https://moralessolutions.com"),
  openGraph: {
    title: "Morales Solutions — Compliance-First Outsourcing",
    description:
      "Specialized teams in compliance, customer support, and sales — built for regulated markets.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-navy text-brand-cream">
        {children}
      </body>
    </html>
  );
}
