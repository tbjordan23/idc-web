"use client"

import { useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

export default function WhitepaperSignupForm() {
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
        body: JSON.stringify({ email, source: "whitepaper" }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus("success")
      } else {
        setErrorMsg(data.error ?? "Something went wrong.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  return (
    <div className="rounded-card border border-edge bg-surface p-6 shadow-card sm:p-8">
      {status === "success" ? (
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-glow">
            <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg font-extrabold tracking-tight text-heading">
            Check your inbox
          </p>
          <p className="max-w-sm text-sm font-medium leading-relaxed text-copy-muted">
            We just sent a confirmation link to <strong>{email}</strong>. Click it to confirm
            your subscription — your download link and 35% off coupon will be right there.
          </p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <label htmlFor="whitepaper-email" className="sr-only">
              Email address
            </label>
            <input
              id="whitepaper-email"
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
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover disabled:opacity-60 whitespace-nowrap"
            >
              {status !== "loading" && (
                <svg className="h-3.5 w-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              )}
              {status === "loading" ? "Sending…" : "Download"}
            </button>
          </form>
          {status === "error" && (
            <p className="mt-2 text-xs text-red-500">{errorMsg}</p>
          )}
        </>
      )}
    </div>
  )
}
