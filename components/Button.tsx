import { BOT_URL } from "@/lib/site";

export default function Button({ children, inverse = false, small = false }: { children: React.ReactNode; inverse?: boolean; small?: boolean }) {
  return <a href={BOT_URL} target="_blank" rel="noopener noreferrer" className={`btn${inverse ? " btn-inverse" : ""}${small ? " btn-sm" : ""}`}>
    {children}
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
  </a>;
}
