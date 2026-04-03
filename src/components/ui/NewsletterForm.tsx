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
        className="flex-1 rounded-md border-0 bg-white/10 px-4 py-2 text-sm text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-idc-accent"
      />
      <button
        type="submit"
        className="rounded-md bg-idc-accent px-4 py-2 text-sm font-medium text-white hover:bg-idc-accent-700"
      >
        Subscribe
      </button>
    </form>
  )
}
