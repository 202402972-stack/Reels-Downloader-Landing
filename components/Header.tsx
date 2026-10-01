"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

const links = [
  { href: "/features", label: "Features" },
  { href: "/privacy", label: "Privacy" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  const state = open ? " bg-paper" : scrolled ? " bg-paper/80 backdrop-blur-md border-b border-rule" : "";
  return <header className={`sticky top-0 z-50 h-[72px] transition-[background-color,border-color,backdrop-filter] duration-300 ease-[var(--ease)] motion-reduce:transition-none${state}`}>
    <div className="wrap h-full flex justify-between items-center">
      <Link href="/" className="wordmark text-ink">Reelkeep</Link>
      <div className="flex items-center gap-1 sm:gap-8">
        <nav className="hidden sm:flex gap-8 text-[.9375rem] text-ink">
          {links.map(({ href, label }) => <Link key={href} href={href} className={`link${pathname === href ? " link-on" : ""}`}>{label}</Link>)}
        </nav>
        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} className="sm:hidden relative h-11 w-11">
          <span aria-hidden="true" className={`absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 bg-ink ${open ? "rotate-45" : "-translate-y-[3px]"}`} />
          <span aria-hidden="true" className={`absolute left-1/2 top-1/2 block h-px w-5 -translate-x-1/2 bg-ink ${open ? "-rotate-45" : "translate-y-[3px]"}`} />
        </button>
        <div className="max-sm:[&_svg]:hidden"><Button small>Open the bot</Button></div>
      </div>
    </div>
    {open && <div id="mobile-nav" className="sm:hidden absolute left-0 right-0 top-full bg-paper border-y border-rule">
      <nav aria-label="Mobile" className="wrap">
        {links.map(({ href, label }) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block py-5 border-t border-rule first:border-t-0"><span className={`h-side link${pathname === href ? " link-on" : ""}`}>{label}</span></Link>)}
      </nav>
    </div>}
  </header>;
}
