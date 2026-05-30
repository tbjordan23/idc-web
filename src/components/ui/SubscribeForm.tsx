"use client"

import { useState } from "react"

export default function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // TODO: wire to newsletter provider (Mailchimp, ConvertKit, etc.)
    setStatus("success")
    setEmail("")
  }

  return (
    <div className="hero-animate hero-animate-delay-3 mt-10 w-full max-w-lg lg:max-w-none">
      <p className="mb-3 text-sm font-medium text-copy-muted">
        Get free resources, course updates, and ID tips — straight to your inbox.
      </p>
      {status === "success" ? (
        <p className="inline-block rounded-lg bg-accent/10 px-4 py-3 text-sm font-semibold text-accent">
          You&rsquo;re in! Check your inbox for a confirmation.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 rounded-lg border border-edge bg-surface px-4 py-3 text-sm text-copy placeholder:text-copy-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover whitespace-nowrap"
          >
            Subscribe Free
          </button>
        </form>
      )}
    </div>
  )
}
