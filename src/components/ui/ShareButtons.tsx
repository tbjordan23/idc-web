"use client"

import { useState, useEffect } from "react"

export default function ShareButtons({ title }: { title: string }) {
  const [pageUrl, setPageUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const [igCopied, setIgCopied] = useState(false)

  useEffect(() => {
    setPageUrl(window.location.href)
  }, [])

  const open = (url: string) =>
    window.open(url, "_blank", "width=640,height=480,noopener,noreferrer")

  const encoded = encodeURIComponent(pageUrl)
  const encodedTitle = encodeURIComponent(title)

  const copyTo = async (setFn: (v: boolean) => void) => {
    await navigator.clipboard.writeText(pageUrl)
    setFn(true)
    setTimeout(() => setFn(false), 2500)
  }

  const btn = "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200"

  return (
    <div className="flex flex-wrap items-center gap-3">

      {/* Facebook */}
      <button
        onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${encoded}`)}
        aria-label="Share on Facebook"
        className={`${btn} bg-[#1877F2] text-white hover:bg-surface-2 hover:text-copy-muted`}
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </button>

      {/* X */}
      <button
        onClick={() => open(`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`)}
        aria-label="Share on X"
        className={`${btn} bg-black text-white hover:bg-surface-2 hover:text-copy-muted`}
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>

      {/* LinkedIn */}
      <button
        onClick={() => open(`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`)}
        aria-label="Share on LinkedIn"
        className={`${btn} bg-[#0A66C2] text-white hover:bg-surface-2 hover:text-copy-muted`}
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </button>

      {/* Instagram — copies link (no web share API exists) */}
      <button
        onClick={() => copyTo(setIgCopied)}
        aria-label="Copy link to share on Instagram"
        title="Copy link for Instagram"
        className={`${btn} ${igCopied ? "bg-surface-2 text-copy-muted" : "bg-pink-500 text-white hover:bg-surface-2 hover:text-copy-muted"}`}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeWidth={2.5} />
        </svg>
      </button>

      {/* Copy link */}
      <button
        onClick={() => copyTo(setCopied)}
        aria-label="Copy link"
        className={`${btn} ${copied ? "bg-green-500/20 text-green-400" : "bg-surface-2 text-copy-muted hover:bg-edge hover:text-copy"}`}
      >
        {copied ? (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        )}
      </button>

      {igCopied && (
        <p className="mt-1 w-full text-xs text-copy-dim">
          Link copied — paste it in your Instagram Story or bio.
        </p>
      )}
    </div>
  )
}
