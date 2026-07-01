import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "You're confirmed! | Instructional Design Central",
  description: "Your subscription is confirmed. Welcome to the IDC community.",
  robots: { index: false, follow: false },
}

const WHITEPAPER_DOWNLOADS: Record<string, { label: string; pdfPath: string }> = {
  whitepaper: {
    label: "AI White Paper",
    pdfPath: "/whitepapers/ai-augmented-instructional-design.pdf",
  },
}

export default function SubscribeConfirmedPage({
  searchParams,
}: {
  searchParams: { error?: string; source?: string }
}) {
  const isError = !!searchParams.error
  const isExpired = searchParams.error === "expired"
  const download = searchParams.source ? WHITEPAPER_DOWNLOADS[searchParams.source] : undefined

  if (isError) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
        <div className="mx-auto max-w-md">
          <div className="mb-6 flex justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
          <h1 className="mb-3 text-3xl font-bold text-idc-navy">
            {isExpired ? "Link expired" : "Invalid link"}
          </h1>
          <p className="mb-10 text-base text-copy-muted">
            {isExpired
              ? "This confirmation link has expired (links are valid for 48 hours). Please subscribe again to get a fresh one."
              : "This confirmation link isn't valid. Please subscribe again."}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
          >
            Back to Instructional Design Central
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-glow">
            <svg
              className="h-8 w-8 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
        </div>
        <h1 className="mb-3 text-3xl font-bold text-idc-navy">You&apos;re confirmed!</h1>
        <p className="mb-2 text-base text-copy-muted">
          Welcome to the IDC community. Your subscription is active and your 35% off coupon is on
          its way to your inbox.{" "}
          {download && (
            <strong className="font-bold text-copy-muted">
              Your download is ready — click below to get your copy.
            </strong>
          )}
        </p>
        <p className={download ? "mb-6 text-sm text-copy-muted" : "mb-10 text-sm text-copy-muted"}>
          (Check your spam folder if you don&apos;t see it within a few minutes.)
        </p>
        {download ? (
          <a
            href={download.pdfPath}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
          >
            <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
            Download {download.label}
          </a>
        ) : (
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
          >
            Back to Instructional Design Central
          </Link>
        )}
      </div>
    </main>
  )
}
