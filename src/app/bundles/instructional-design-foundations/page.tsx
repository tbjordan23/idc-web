import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Link from "next/link"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Foundations Bundle",
  description:
    "Get certified in ID Foundations and ADDIE, plus a 13-template kit and an AI-augmented ID white paper. IDC's complete instructional design bundle.",
  path: "/bundles/instructional-design-foundations",
})

const BUNDLE_URL = "https://idcentral.thinkific.com/order?ct=6c1804c2-f85b-4ce2-8ccd-4d7328510d7a"

const TOTAL_VALUE = 260
const BUNDLE_PRICE = 150
const SAVINGS = TOTAL_VALUE - BUNDLE_PRICE
const SAVINGS_PERCENT = Math.round((SAVINGS / TOTAL_VALUE) * 100)

const bundleItems = [
  {
    title: "Instructional Design Foundations Course and Certificate",
    description:
      "11 lessons applying core ID principles to real-world scenarios, not just theory. Includes premium templates.",
    outcome: "Certificate on completion.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "ADDIE Model Course and Certificate",
    description:
      "Breaks ADDIE into practical steps for both traditional and agile environments, from analyzing learner needs to evaluating real-world impact.",
    outcome: "Certificate on completion.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Instructional Design Template Kit",
    description:
      "13 professionally designed templates covering every stage of ID work: ADDIE, Learning Circle Kit, ID Document, Needs Analysis, Training Plan, Learning Design Canvas, LMS Evaluation, eLearning Evaluation, Course Roadmap, Course Evaluation Plan, Storyboard, Project Plan, and Job Aid.",
    outcome: "Delivered instantly.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "AI-Augmented Instructional Design White Paper",
    description: "IDC's guide to integrating AI into your instructional design workflow.",
    outcome: "Read online or download.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
]

const pricingRows = [
  { label: "ID Foundations Course and Certificate", value: "$100" },
  { label: "ADDIE Model Course and Certificate", value: "$100" },
  { label: "Instructional Design Template Kit (13 templates)", value: "$60" },
  { label: "AI-Augmented ID White Paper", value: "Free" },
]

function CTAButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <Link
      href={BUNDLE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover ${className}`}
    >
      <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
      {label}
    </Link>
  )
}

export default function InstructionalDesignFoundationsBundle() {
  return (
    <>
      <Hero
        title="Instructional Design Foundations Bundle"
        subtitle="Everything you need to start designing learning that works — built for a field that now runs on agile teams and AI tools, not just theory from a textbook. Made for anyone starting out in ID, or filling in the gaps."
        cta={{ label: "Get the Bundle", href: BUNDLE_URL, target: "_blank" }}
      />

      {/* Price callout, directly under the hero CTA */}
      <section className="border-b border-edge bg-surface px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3 text-center">
          <span className="text-2xl font-extrabold tracking-tight text-heading">$150</span>
          <span className="text-lg font-extrabold text-copy-muted line-through opacity-50">$260 value</span>
          <span className="rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-xs font-bold text-accent">
            Save ${SAVINGS} ({SAVINGS_PERCENT}% off)
          </span>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-b border-edge py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">What&rsquo;s Included</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Four Resources, One Bundle
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {bundleItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={(i % 2 + 1) as 1 | 2} className="h-full">
                <div className="flex h-full gap-5 rounded-card border border-edge bg-surface p-6 shadow-card">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold leading-snug text-heading">{item.title}</h3>
                    <div className="mt-1.5 h-0.5 w-6 rounded bg-accent opacity-60" />
                    <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">{item.description}</p>
                    <p className="mt-3 text-xs font-bold uppercase tracking-wider text-accent">{item.outcome}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle description */}
      <section className="border-b border-edge bg-surface py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="border-l-4 border-accent pl-6 text-lg font-medium leading-relaxed text-copy">
              This bundle includes two certified courses on Instructional Design Foundations and the ADDIE Model, 13 robust templates, and a white paper on how to use AI with instructional design. Everything you need to design learning that actually works.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing breakdown */}
      <section className="border-b border-edge py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Pricing</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              What You&rsquo;d Pay Separately
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="mt-8 overflow-hidden rounded-card border border-edge bg-surface shadow-card">
              <table className="w-full text-left">
                <caption className="sr-only">Individual value of each item in the bundle, compared to the bundle price</caption>
                <thead>
                  <tr className="border-b border-edge bg-surface-2">
                    <th scope="col" className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-copy-muted">Item</th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-copy-muted">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row) => (
                    <tr key={row.label} className="border-b border-edge last:border-b-0">
                      <td className="px-6 py-4 text-sm font-medium text-copy">{row.label}</td>
                      <td className="px-6 py-4 text-right text-sm font-bold text-copy-muted">{row.value}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-edge bg-surface-2">
                    <th scope="row" className="px-6 py-4 text-sm font-bold text-heading">Total value</th>
                    <td className="px-6 py-4 text-right text-sm font-bold text-heading">${TOTAL_VALUE}</td>
                  </tr>
                  <tr className="border-b border-edge">
                    <th scope="row" className="px-6 py-4 text-sm font-bold text-heading">Bundle price</th>
                    <td className="px-6 py-4 text-right text-lg font-extrabold text-accent">${BUNDLE_PRICE}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-6 py-4 text-sm font-bold text-heading">You save</th>
                    <td className="px-6 py-4 text-right text-sm font-bold text-accent">
                      ${SAVINGS} ({SAVINGS_PERCENT}% off)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 rounded-card border border-edge bg-surface-2 p-10 text-center shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Ready to Start?</p>
              <h2
                className="font-extrabold tracking-tight text-heading"
                style={{ fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-0.04rem" }}
              >
                Get everything you need to start designing learning that works.
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-heading">${BUNDLE_PRICE}</span>
                <span className="text-3xl font-extrabold text-copy-muted line-through opacity-50">${TOTAL_VALUE}</span>
                <span className="rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-xs font-bold text-accent">
                  Save ${SAVINGS}
                </span>
              </div>
              <CTAButton label="Get the Bundle" className="mt-2" />
              <p className="text-xs text-copy-muted opacity-70">One-time payment &middot; Lifetime access &middot; Certificates included</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
