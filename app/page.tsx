import type { Metadata } from "next";
import Button from "@/components/Button";
import ChatMock from "@/components/ChatMock";
import CtaRow from "@/components/CtaRow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const steps = [
  ["01", "Send a link", "Copy a public TikTok or Instagram link and send it to the bot. Several links in one message start a batch."],
  ["02", "Choose a quality", "Pick Best quality, Balanced up to 720p, or Small up to 480p. Lower quality helps large videos fit within Telegram's limit."],
  ["03", "Receive your media", "Follow the live progress bar. Videos arrive playable, photos arrive as photos, and carousels arrive as one Telegram album."],
];
const platforms = [
  { name: "TikTok", rows: ["Public videos", "Short links on vm.tiktok.com and vt.tiktok.com"] },
  { name: "Instagram", rows: ["Reels", "Video posts, images and carousels of up to 10 items", "Links in /p/, /reel/ and /tv/ form", "Stories, when the bot owner has configured an Instagram session"] },
];
const batch = ["Duplicate links removed", "Unsupported links ignored", "One quality for the whole batch", "Progress for every item", "Cancel the entire batch", "Final summary when it ends"];

export default function Home() {
  return <>
    <section className="wrap !py-24 md:!py-36 grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-7">
        <h1 className="h-hero"><span className="line"><span style={{ animationDelay: "100ms" }}>Public TikTok and Instagram media,</span></span>{" "}<span className="line"><span style={{ animationDelay: "250ms" }}>delivered to your chat.</span></span></h1>
        <p className="lead mt-8 max-w-[34rem]">Send a link, or up to five at once. Choose a quality. Reelkeep downloads the video, photo or album and sends it back to you in Telegram, then removes the files.</p>
        <div className="mt-10 flex flex-wrap gap-8 items-center"><Button>Start using the bot</Button><a href="#how" className="link">See how it works</a></div>
      </div>
      <div className="col-span-12 lg:col-span-5 mt-16 lg:mt-0 flex justify-end"><ChatMock/></div>
    </section>
    <div className="border-y border-rule"><div className="wrap grid grid-cols-2 md:grid-cols-4 text-[.9375rem] text-ink">
      {["TikTok videos", "Instagram Reels, Stories and posts", "Up to 5 links per batch", "Files removed after delivery"].map((text, index) => <Reveal key={text} delay={index * 80} className={`py-6 pr-4 ${index === 0 ? "pl-0" : index === 2 ? "pl-0 md:pl-4" : "pl-4"}${index > 0 ? " md:border-l md:border-rule" : ""}`}>{text}</Reveal>)}
    </div></div>
    <section id="how" className="bg-paper py-20 md:py-32"><div className="wrap grid grid-cols-12 gap-6">
      <Reveal className="col-span-12 lg:col-span-4"><h2 className="h-section">How it works</h2></Reveal>
      <div className="col-span-12 lg:col-span-8">{steps.map(([n, title, text], index) => <Reveal key={n} delay={index * 80} className="row grid grid-cols-[4rem_1fr]"><div className="numeral">{n}</div><div><h3 className="h-sub">{title}</h3><p className="mt-3">{text}</p></div></Reveal>)}</div>
    </div></section>
    <section className="bg-paper-deep py-20 md:py-32"><div className="wrap">
      <Reveal><h2 className="h-section">Supported platforms</h2></Reveal>
      <div className="grid md:grid-cols-2 mt-12 gap-12">{platforms.map(platform => <div key={platform.name}><Reveal><h3 className="h-side mb-6">{platform.name}</h3></Reveal>{platform.rows.map((text, index) => <Reveal key={text} delay={index * 80} className="row text-ink">{text}</Reveal>)}</div>)}</div>
      <p className="mt-8">Private accounts are never accessed.</p>
    </div></section>
    <section className="on-dark bg-vermilion py-24 md:py-32"><div className="wrap grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-6"><Reveal><h2 className="h-section">Five links, one message.</h2><p className="mt-6">Use /batch or the batch button on the dashboard. Reelkeep removes duplicate links, ignores unsupported ones and applies one quality to the whole batch. Cancel at any time and receive a final summary of completed, failed and skipped items and the total size delivered.</p></Reveal><div className="mt-8"><Button inverse>Start using the bot</Button></div></div>
      <div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0">{batch.map((text, index) => <Reveal key={text} delay={index * 80} className="row text-[1.0625rem]">{text}</Reveal>)}</div>
    </div></section>
    <CtaRow/>
  </>;
}
