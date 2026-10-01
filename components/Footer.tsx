import Link from "next/link";
import { DEV_NAME, DEV_URL, SITE_URL } from "@/lib/site";

export default function Footer() {
  return <footer className="on-dark bg-ink py-16"><div className="wrap">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <div className="wordmark">Reelkeep</div>
        <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-paper link link-on">reels-landing-zeta.vercel.app</a>
        <p className="mt-6 opacity-70">A Telegram media downloader for TikTok and Instagram.</p>
      </div>
      <div><div className="label">Pages</div><div className="mt-6 flex flex-col items-start gap-3">
        <Link href="/" className="text-paper link">Home</Link><Link href="/features" className="text-paper link">Features</Link><Link href="/privacy" className="text-paper link">Privacy</Link>
      </div></div>
      <div><div className="label">Developer</div><p className="mt-6 opacity-70">Designed and built by</p><a href={DEV_URL} target="_blank" rel="noopener noreferrer" className="text-paper link link-on">{DEV_NAME}</a><p className="mt-2 opacity-70">Full-stack developer</p></div>
    </div>
    <div className="mt-12 pt-6 border-t border-paper/20 flex flex-wrap justify-between gap-4 text-sm">
      <p className="text-sm opacity-70">Only download content you have the right to use.</p><p className="text-sm opacity-70">Reelkeep is not affiliated with Telegram, TikTok or Instagram.</p>
    </div>
  </div></footer>;
}
