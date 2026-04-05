"use client"

export default function NewsletterForm() {
  return (
    <form
      className="flex w-full max-w-sm gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="you@example.com"
        className="flex-1 rounded-lg border border-edge bg-surface-2 px-4 py-2 text-sm text-copy placeholder-copy-dim transition-colors focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
      >
        <svg className="h-3.5 w-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Subscribe
      </button>
    </form>
  )
}
