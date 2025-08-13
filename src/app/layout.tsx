import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Anonymous_Pro,
  Roboto,
} from "next/font/google";
import "./globals.css";
import NavbarMounted from "@/components/site/navbar-mounted";
import StickyFooter from "@/components/ui/footer";
import CursorFollow from "@/components/ui/CursorFollow";
import ShootingStars from "@/components/ui/ShootingStars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const textFont = Anonymous_Pro({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const smallFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Maxim Ionela — Portfolio",
    template: "%s — Maxim Ionela",
  },
  description:
    "Frontend developer crafting premium UI with Next.js, React and Tailwind CSS.",
  openGraph: {
    title: "Maxim Ionela — Portfolio",
    description:
      "Frontend developer crafting premium UI with Next.js, React and Tailwind CSS.",
    type: "website",
    // Intenționat fără imagini pentru a nu afișa thumbnail la share
  },
  twitter: {
    card: "summary",
    title: "Maxim Ionela — Portfolio",
    description:
      "Frontend developer crafting premium UI with Next.js, React and Tailwind CSS.",
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} ${textFont.variable} ${smallFont.variable} antialiased`}
      >
        <div className="bg-stars" />
        <ShootingStars />
        <CursorFollow>
          <NavbarMounted />
          {children}
        </CursorFollow>
        <StickyFooter />
      </body>
    </html>
  );
}
