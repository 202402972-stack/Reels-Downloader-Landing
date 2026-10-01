import type { Metadata } from "next";
import CtaRow from "@/components/CtaRow";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Features — Reelkeep",
  description: "What Reelkeep does, how it recovers when a platform misbehaves, and the limits it works within.",
};
const sections: [string, [string, string][]][] = [["Three ways to download", [["Best quality", "The highest quality available. Largest files."], ["Balanced", "Up to 720p. A sensible default for most videos."], ["Small", "Up to 480p. Smallest files, easiest to deliver."]]], ["Many links, one go", [["Up to 5 unique links", "Per batch by default. The limit is set by the bot owner."], ["Smart link detection", "Links are found anywhere in your message. Duplicates are removed and unsupported links are ignored."], ["Processed in order", "Items run one after another, with a progress bar for each."], ["Cancel everything", "One button stops the current item and the rest of the batch."], ["Final summary", "Completed, failed and skipped items, plus the total size delivered."]]], ["Recovers on its own", [["Download supervisor", "Temporary errors are retried automatically with a growing delay."], ["Two download engines", "yt-dlp and gallery-dl, with automatic fallback when one fails or a platform changes."], ["No pointless retries", "Private, deleted or oversized content gets a clear message straight away."], ["Partial carousels", "If some items in a carousel are valid, those items are still delivered."], ["Delivery retries", "Telegram uploads are retried. If a format is rejected, the file is sent as a document instead of being lost."], ["Self-healing workers", "Stalled queue workers are detected and recreated automatically."]]], ["Sent the way it should be", [["Videos", "Delivered as playable videos."], ["Photos", "Delivered as photos, not files."], ["Carousels", "Up to 10 items, sent together as one Telegram album."], ["Share and retry", "A Share button follows each download. If a download fails, a Retry button appears."], ["Clean-up", "Files are removed after delivery, and leftover temporary files are cleared regularly."]]], ["Safeguards", [["Link checks", "Only TikTok and Instagram links are accepted. Local and private network addresses are rejected."], ["No double downloads", "A link that is already being processed is not started twice, and each user has one active download at a time."], ["Rate limits", "Short pauses between requests keep the service fair for everyone."]]]];
const commands = [["/start", "Start the bot"], ["/download", "Download TikTok or Instagram media"], ["/batch", "Download multiple links in one batch"], ["/stats", "View your download statistics"], ["/history", "View recent downloads"], ["/settings", "Open your settings"], ["/help", "How to use the bot"], ["/privacy", "Read the privacy policy"]];
const defaults = [["Direct upload size", "50 MB"], ["Links per batch", "5"], ["Carousel items", "10"], ["Download timeout", "120 seconds"], ["Concurrent downloads", "3, service-wide"], ["Time between requests", "10 seconds"], ["Requests per user", "6 per minute"], ["Temporary file clean-up", "60 minutes"]];

export default function Features() {
  return <>
    <header className="wrap !pt-24 !pb-16"><Reveal><h1 className="h-page">Built to finish the download.</h1><p className="lead mt-6 max-w-[36rem]">What Reelkeep does, how it recovers when a platform misbehaves, and the limits it works within.</p></Reveal></header>
    {sections.map(([heading, rows]) => <section key={heading} className="wrap !py-16 border-t border-rule grid grid-cols-12 gap-6">
      <Reveal className="col-span-12 lg:col-span-4"><h2 className="h-side">{heading}</h2></Reveal>
      <div className="col-span-12 lg:col-span-8">{rows.map(([title, description], index) => <Reveal key={title} delay={index * 80} className={`row${heading === "Safeguards" ? " grid grid-cols-2 gap-6" : ""}`}><div className="row-title">{title}</div><p>{description}</p></Reveal>)}</div>
    </section>)}
    <section className="wrap !py-16 border-t border-rule grid grid-cols-12 gap-6">
      <Reveal className="col-span-12 lg:col-span-4"><h2 className="h-side">Everything from the chat</h2></Reveal>
      <div className="col-span-12 lg:col-span-8">{commands.map(([command, description], index) => <Reveal key={command} delay={index * 80} className="row grid grid-cols-[8rem_1fr] gap-6"><div className="font-medium text-vermilion">{command}</div><p>{description}</p></Reveal>)}<p className="mt-6">The bot speaks Arabic and English. Switch language, and turn auto-delete on or off, in /settings.</p></div>
    </section>
    <section className="wrap !py-16 border-t border-rule grid grid-cols-12 gap-6">
      <Reveal className="col-span-12 lg:col-span-4"><h2 className="h-side">Defaults, stated plainly</h2></Reveal>
      <div className="col-span-12 lg:col-span-8">{defaults.map(([label, value], index) => <Reveal key={label} delay={index * 80} className="row grid grid-cols-2 gap-6"><div className="text-ink">{label}</div><div className="value">{value}</div></Reveal>)}<p className="mt-6">These are default values and can be changed by the bot owner.</p></div>
    </section>
    <CtaRow/>
  </>;
}
