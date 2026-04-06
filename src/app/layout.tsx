import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "ivancidev — Full Stack Developer",
    template: "%s | ivancidev",
  },
  description:
    "Blog personal de desarrollo web. Artículos sobre React, Next.js, TypeScript, Node.js y más.",
  keywords: ["Next.js", "React", "TypeScript", "Full Stack", "Developer", "Blog"],
  authors: [{ name: "ivancidev" }],
  creator: "ivancidev",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "ivancidev",
    title: "ivancidev — Full Stack Developer",
    description: "Blog personal de desarrollo web. Artículos sobre React, Next.js y más.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ivancidev — Full Stack Developer",
    description: "Blog personal de desarrollo web.",
    creator: "@ivancidev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#f0f0f0] min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
