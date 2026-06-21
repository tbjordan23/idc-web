import Link from "next/link"

export default function WhitepaperBanner() {
  return (
    <div className="mt-12 rounded-card border border-edge bg-surface p-6 shadow-card">
      <p className="text-xs font-bold uppercase tracking-widest text-accent">
        Free White Paper
      </p>
      <Link
        href="/ai-instructional-design-whitepaper"
        className="mt-2 block text-lg font-extrabold tracking-tight text-heading transition-colors hover:text-accent"
      >
        AI-Augmented Instructional Design
      </Link>
      <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
      <div className="mt-4 flex items-start gap-5">
        <div className="mt-1 hidden h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] sm:flex">
          <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium leading-relaxed text-copy-muted">
            A practical guide to using AI across your ID process — without losing learning
            quality.
          </p>
          <Link
            href="/ai-instructional-design-whitepaper"
            className="btn-shadow mt-4 inline-flex self-start items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Get the free guide
            <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
