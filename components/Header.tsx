"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <header className={`sticky top-0 z-50 h-[72px] transition-[background-color,border-color,backdrop-filter] duration-300 ease-[var(--ease)] motion-reduce:transition-none${scrolled ? " bg-paper/80 backdrop-blur-md border-b border-rule" : ""}`}>
    <div className="wrap h-full flex justify-between items-center">
      <Link href="/" className="wordmark text-ink">Reelkeep</Link>
      <div className="flex items-center gap-8">
        <nav className="hidden sm:flex gap-8 text-[.9375rem] text-ink">
          <Link href="/features" className={`link${pathname === "/features" ? " link-on" : ""}`}>Features</Link>
          <Link href="/privacy" className={`link${pathname === "/privacy" ? " link-on" : ""}`}>Privacy</Link>
        </nav>
        <Button small>Open the bot</Button>
      </div>
    </div>
  </header>;
}
