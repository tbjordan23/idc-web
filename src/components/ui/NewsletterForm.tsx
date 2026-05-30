"use client"

import { useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

export default function NewsletterForm({ variant = "footer" }: { variant?: "footer" | "callout" | "hero" }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
        setEmail("")
      } else {
        setErrorMsg(data.error ?? "Something went wrong.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  if (variant === "hero") {
    if (status === "success") {
      return (
        <p className="py-2.5 text-sm font-medium text-accent">
          You&apos;re in! Check your inbox for your 35% off coupon.
        </p>
      )
    }
    return (
      <div className="flex flex-col items-center gap-1.5 lg:items-start">
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <label htmlFor="hero-email" className="sr-only">Email address</label>
          <input
            id="hero-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            disabled={status === "loading"}
            className="w-60 rounded-lg border border-edge bg-surface px-4 py-2.5 text-sm text-copy placeholder:text-copy-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover whitespace-nowrap disabled:opacity-60"
          >
            <svg className="h-3.5 w-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>
        <p className="text-center text-sm text-copy-muted lg:text-left">
          Subscribe free — for industry insights and a <strong className="text-copy-muted/80">35% off coupon</strong> on courses and templates.
        </p>
        {status === "error" && (
          <p className="text-xs text-red-500">{errorMsg}</p>
        )}
      </div>
    )
  }

  if (variant === "callout") {
    if (status === "success") {
      return (
        <p className="mt-6 inline-block rounded-lg bg-accent/10 px-5 py-3 text-sm font-semibold text-accent">
          You&rsquo;re in! Check your inbox for your 35% off coupon.
        </p>
      )
    }
    return (
      <div className="flex flex-col items-center gap-1.5">
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex w-full max-w-md flex-col gap-2 sm:flex-row"
        >
          <label htmlFor="callout-email" className="sr-only">Email address</label>
          <input
            id="callout-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            disabled={status === "loading"}
            className="flex-1 rounded-lg border border-edge bg-surface px-4 py-3 text-sm text-copy placeholder:text-copy-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover whitespace-nowrap disabled:opacity-60"
          >
            {status === "loading" ? "Subscribing…" : "Get My 35% Off"}
          </button>
        </form>
        {status === "error" && (
          <p className="text-xs text-red-500">{errorMsg}</p>
        )}
      </div>
    )
  }

  // footer variant
  if (status === "success") {
    return (
      <p className="text-sm font-medium text-accent">
        You&apos;re in! Check your inbox for your 35% off coupon.
      </p>
    )
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-1.5">
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={status === "loading"}
          className="flex-1 rounded-lg border border-edge bg-surface-2 px-4 py-2 text-sm text-copy placeholder-copy-dim transition-colors focus:border-accent focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover disabled:opacity-60"
        >
          <svg className="h-3.5 w-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-red-500">{errorMsg}</p>
      )}
    </div>
  )
}
