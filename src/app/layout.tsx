import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Max Dubowski",
  description:
    "Aerospace engineering student at Heriot-Watt University. Future commercial pilot. Systems thinker with experience in property management, software engineering, and design.",
  keywords: [
    "aerospace engineerisng",
    "commercial pilot",
    "Heriot-Watt",
    "Edinburgh",
    "portfolio",
    "Maksymilian Dubowski",
  ],
  openGraph: {
    title: "Max Dubowski",
    description:
      "Aerospace engineering student. Future commercial pilot. Systems thinker.",
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
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
