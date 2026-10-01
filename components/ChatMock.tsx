export default function ChatMock() {
  const botBubble = "chat-in self-start bg-paper border border-rule text-ink rounded-[14px] text-[.9375rem] p-[12px_14px] max-w-[85%]";
  return <div className="w-full max-w-[420px]">
    <div className="bg-paper-deep border border-rule p-5">
      <div className="flex justify-between items-center border-b border-rule pb-3"><span className="font-medium">Reelkeep</span><span className="label">bot</span></div>
      <div className="flex flex-col gap-3 pt-5">
        <div className="chat-in self-end bg-ink text-paper rounded-[14px] text-[.9375rem] p-[12px_14px] max-w-[85%] break-words" style={{ animationDelay: "600ms" }}>https://www.instagram.com/reel/…</div>
        <div className={botBubble} style={{ animationDelay: "1600ms" }}><span>Choose download quality:</span>
          <div className="border border-rule rounded-none text-center p-[10px] mt-[6px] text-sm">Best quality</div>
          <div className="pick border border-rule rounded-none text-center p-[10px] mt-[6px] text-sm" style={{ animationDelay: "3000ms" }}>Balanced (up to 720p)</div>
          <div className="border border-rule rounded-none text-center p-[10px] mt-[6px] text-sm">Small (up to 480p)</div>
        </div>
        <div className={`${botBubble} w-[85%]`} style={{ animationDelay: "3600ms" }}><span>Downloading</span><div className="h-[2px] bg-rule mt-3"><div className="bar-fill h-[2px] bg-vermilion" style={{ animationDelay: "3800ms" }}/></div></div>
        <div className={botBubble} style={{ animationDelay: "5600ms" }}><div className="flex items-center gap-2"><span className="w-2 h-2 bg-sage"/><span>Download completed</span></div><div className="mt-3"><div>Platform: Instagram</div><div>Media items: 1</div><div>Total size: 8.4 MB</div><div>Time: 6 seconds</div></div></div>
      </div>
    </div>
    <div className="label mt-4">Illustrative conversation</div>
  </div>;
}
