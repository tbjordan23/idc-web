import Link from "next/link"

export default function BundleBanner() {
  return (
    <div className="mt-12 rounded-card border border-edge bg-surface p-6 shadow-card">
      <p className="text-xs font-bold uppercase tracking-widest text-accent">
        Bundle &amp; Save
      </p>
      <Link
        href="/bundles/instructional-design-starter-kit"
        className="mt-2 block text-lg font-extrabold tracking-tight text-heading transition-colors hover:text-accent"
      >
        The Complete Instructional Design Starter Kit
      </Link>
      <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
      <div className="mt-4 flex items-start gap-5">
        <div className="mt-1 hidden h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] sm:flex">
          <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18.375c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium leading-relaxed text-copy-muted">
            Two certificate courses, 13 templates, and an AI-augmented ID white paper — $260 of value for $150.
          </p>
          <Link
            href="/bundles/instructional-design-starter-kit"
            className="btn-shadow mt-4 inline-flex self-start items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            View the bundle
            <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
