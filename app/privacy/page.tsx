import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy and FAQ — Reelkeep",
  description: "What Reelkeep does with your links and your data, and answers to common questions.",
};
const privacy = ["Only public links are processed. Private accounts are never bypassed.", "The bot never asks you for passwords or sign-in details.", "An optional Instagram session, configured by the bot owner, can be used for Stories. It is loaded at runtime and never shown to users.", "Temporary media files are removed automatically after delivery when auto-delete is on, which is the default.", "Your data is not sold or used for advertising.", "Basic operational statistics, such as download count and platform, may be stored."];
const faq = [["Does it work with private accounts?", "No. Reelkeep handles public links only. Private, deleted, region-restricted or login-required content is reported without trying to get around access controls."], ["Why do some Instagram Stories need extra setup?", "Instagram often requires a signed-in session for Stories, even on public accounts. The bot owner can configure an optional session for this. You never share your own credentials."], ["What happens if a download fails?", "Temporary errors are retried with a growing delay, and a second download engine takes over if needed. Permanent problems, such as private, deleted or oversized content, get a clear message straight away. No downloader can promise zero failures on third-party platforms."], ["How large can a file be?", "Up to 50 MB for direct Telegram delivery. Choose Balanced or Small quality for longer videos."], ["Which languages does the bot support?", "Arabic, which is the default, and English. Change it any time in /settings."], ["Can I see what I have downloaded?", "Yes. Use /history for recent downloads and /stats for your totals by platform."]];

export default function Privacy() {
  return <>
    <header className="wrap !pt-24 !pb-16"><Reveal><h1 className="h-page">Public links only. Files removed after delivery.</h1><p className="lead mt-6 max-w-[36rem]">What Reelkeep does with your links and your data, and answers to common questions.</p></Reveal></header>
    <section className="border-t border-rule"><div className="wrap !py-16 grid grid-cols-12 gap-6">
      <Reveal className="col-span-12 lg:col-span-4"><h2 className="h-side">How your data is handled</h2></Reveal>
      <div className="col-span-12 lg:col-span-8">{privacy.map((text, index) => <Reveal key={text} delay={index * 80} className="row text-ink">{text}</Reveal>)}</div>
    </div></section>
    <section className="border-t border-rule"><div className="wrap !py-20"><Reveal><p className="statement">Only download content you have the right to use.</p></Reveal></div></section>
    <section className="border-t border-rule"><div className="wrap !py-16 grid grid-cols-12 gap-6">
      <Reveal className="col-span-12 lg:col-span-4"><h2 className="h-side">Questions</h2></Reveal>
      <div className="col-span-12 lg:col-span-8">{faq.map(([question, answer], index) => <Reveal key={question} delay={index * 80}><details className={`border-b border-rule${index === 0 ? " border-t" : ""}`}><summary>{question}</summary><p>{answer}</p></details></Reveal>)}</div>
    </div></section>
    <CtaRow/>
  </>;
}
