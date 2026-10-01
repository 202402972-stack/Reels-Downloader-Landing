import Link from "next/link";

export default function NotFound() {
  return <section className="wrap !py-24 md:!py-36">
    <h1 className="h-page">This page does not exist.</h1>
    <p className="lead mt-6 max-w-[36rem]">The address may be mistyped, or the page may have moved.</p>
    <div className="mt-10">
      <Link href="/" className="btn">
        Back to home
        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 7h12M8 2l5 5-5 5"/></svg>
      </Link>
    </div>
  </section>;
}
