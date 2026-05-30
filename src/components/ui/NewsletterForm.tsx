"use client"

import { useState } from "react"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success">("idle")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    // TODO: wire to newsletter provider (Mailchimp, ConvertKit, etc.)
    setStatus("success")
    setEmail("")
  }

  if (status === "success") {
    return (
      <p className="mt-6 inline-block rounded-lg bg-accent/10 px-5 py-3 text-sm font-semibold text-accent">
        You&rsquo;re in! Check your inbox for your 35% off coupon.
      </p>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row"
    >
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
        className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover whitespace-nowrap"
      >
        Get My 35% Off
      </button>
    </form>
  )
}
