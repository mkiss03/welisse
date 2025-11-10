import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Welisse | Egyedi Web & AI Megoldások KKV-knak",
  description:
    "Digitalizáljuk vállalkozásod modern technológiákkal - gyorsabban, biztonságosabban, skálázhatóan. Next.js, React, AI integrációk.",
  keywords: [
    "webfejlesztés",
    "AI integráció",
    "Next.js",
    "React",
    "egyedi szoftver",
    "CRM",
    "chatbot",
    "KKV",
  ],
  authors: [{ name: "Welisse" }],
  openGraph: {
    title: "Welisse | Egyedi Web & AI Megoldások",
    description:
      "Digitalizáljuk vállalkozásod modern technológiákkal - gyorsabban, biztonságosabban, skálázhatóan.",
    url: "https://welisse.hu",
    siteName: "Welisse",
    locale: "hu_HU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welisse | Egyedi Web & AI Megoldások",
    description:
      "Digitalizáljuk vállalkozásod modern technológiákkal - gyorsabban, biztonságosabban, skálázhatóan.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
