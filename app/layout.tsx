import type { Metadata } from "next";
import { Bricolage_Grotesque, Hind } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--font-display" });
const body = Hind({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "MountainKin | Authentic Himalayan Food, Treks and a Community That Cares",
  description:
    "MountainKin is an authentic Himalayan lifestyle brand from Dehradun: pure Pahadi food, treks, travel and a community for happiness, cleanliness drives, helping the needy and animal care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
