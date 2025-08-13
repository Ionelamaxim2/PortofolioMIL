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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portofolio-maxim-ionela.onrender.com";

export const metadata: Metadata = {
  // URL absolut pentru OG/Twitter
  metadataBase: new URL(siteUrl),
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
    images: [
      {
        url: "/preview.png?v=2",
        width: 1200,
        height: 630,
        alt: "Portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxim Ionela — Portfolio",
    description:
      "Frontend developer crafting premium UI with Next.js, React and Tailwind CSS.",
    images: ["/preview.png?v=2"],
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
