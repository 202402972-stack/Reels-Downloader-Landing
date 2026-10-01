import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export default function CtaRow() {
  return <section className="wrap !py-20 md:!py-28 border-t border-rule flex flex-col md:flex-row md:justify-between md:items-end gap-10">
    <Reveal><h2 className="h-section">Open Reelkeep in Telegram.</h2><p className="mt-4">Press Start and send your first link.</p></Reveal>
    <Button>Start using the bot</Button>
  </section>;
}
