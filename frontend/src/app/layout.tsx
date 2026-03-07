import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sublet-Me — The #1 Sublet Network for Canadian Co-op Students",
  description:
    "Find your perfect 4-month sublet. The exclusive housing network for verified Canadian co-op students and interns. Matching dates, verified students, zero stress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
