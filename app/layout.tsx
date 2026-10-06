import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arsa-barbershop.example"),
  title: "ARSA Barbershop — Precision Cuts. Modern Gentlemen.",
  description:
    "Premium barbershop in Yogyakarta for precise cuts, modern grooming, and an easy booking experience.",
  keywords: ["barbershop Yogyakarta", "haircut Jogja", "ARSA Barbershop", "grooming pria"],
  openGraph: {
    title: "ARSA Barbershop — Precision Cuts. Modern Gentlemen.",
    description: "Modern grooming, considered down to the last detail. Find your shape at ARSA.",
    type: "website",
    locale: "id_ID",
    siteName: "ARSA Barbershop",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}