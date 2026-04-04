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
        className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        Subscribe
      </button>
    </form>
  )
}
