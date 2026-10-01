import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

const display = Bodoni_Moda({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Jost({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Reelkeep — TikTok and Instagram downloader for Telegram",
  description: "Reelkeep is a Telegram bot that downloads public TikTok and Instagram videos, Reels, Stories, images and carousels and sends them straight to your chat.",
  openGraph: {
    title: "Reelkeep — TikTok and Instagram downloader for Telegram",
    description: "Reelkeep is a Telegram bot that downloads public TikTok and Instagram videos, Reels, Stories, images and carousels and sends them straight to your chat.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <noscript><style>{`.reveal,.chat-in{opacity:1;transform:none}.line span{transform:none}.bar-fill{transform:none}`}</style></noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
