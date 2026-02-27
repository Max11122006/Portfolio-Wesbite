import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio — Engineering the Future",
  description:
    "Aerospace engineer and creative technologist pushing the boundaries of what's possible.",
  keywords: ["aerospace", "engineer", "portfolio", "technology", "innovation"],
  openGraph: {
    title: "Portfolio — Engineering the Future",
    description:
      "Aerospace engineer and creative technologist pushing the boundaries of what's possible.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased noise`}>
        {children}
      </body>
    </html>
  );
}
