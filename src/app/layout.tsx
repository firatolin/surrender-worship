import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Surrender Worship Ministry",
    template: "%s — Surrender Worship Ministry",
  },
  description:
    "Raising spiritually mature, Christ-centered worshipers who serve with excellence and integrity. A youth-focused Christian worship ministry based in Addis Ababa, Ethiopia.",
  metadataBase: new URL("https://surrenderworship.org"), // placeholder — update when domain is ready
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}