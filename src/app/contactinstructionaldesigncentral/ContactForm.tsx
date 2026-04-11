"use client"

import { useState } from "react"

type Status = "idle" | "loading" | "success" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.")
        setStatus("error")
        return
      }

      setStatus("success")
      setForm({ firstName: "", lastName: "", email: "", message: "" })
    } catch {
      setErrorMessage("Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-edge bg-surface p-8 shadow-card text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-glow)]">
          <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-base font-extrabold text-heading">Message sent!</h3>
        <p className="mt-2 text-sm font-medium text-copy-muted">
          Thanks for reaching out. We&rsquo;ll get back to you as soon as we can.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-accent hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClass =
    "w-full rounded-lg border border-edge bg-surface px-4 py-3 text-sm font-medium text-copy placeholder:text-copy-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-copy-dim">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={form.firstName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-copy-dim">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={form.lastName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-copy-dim">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-copy-dim">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Tell us how we can help..."
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-xs font-semibold text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow transition-opacity hover:bg-accent-hover disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
    </form>
  )
}
