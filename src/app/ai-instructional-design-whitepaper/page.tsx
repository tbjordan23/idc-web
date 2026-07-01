import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import WhitepaperSignupForm from "@/components/ui/WhitepaperSignupForm"

export const metadata: Metadata = generatePageMetadata({
  title: "Free White Paper: AI-Augmented Instructional Design",
  description:
    "A practical framework for using AI across the ADDIE process — to move faster without lowering the bar on learning quality. Download the free white paper.",
  path: "/ai-instructional-design-whitepaper",
})

const whatsInside = [
  "How to use AI to capture and summarize SME interviews and speed up your needs analysis",
  "How to draft key design artifacts faster — design documents, learning objectives, evaluation plans, storyboards, and branching scenarios",
  "How to generate course imagery, video, and narration audio with AI, and where human review still matters",
  "How to use AI for copy editing and quality review without losing your brand voice",
  "How modern authoring tools are building AI directly into the course-building workflow",
  "A practical 30-day plan for introducing AI into your own ID process, plus the quality guardrails that keep it safe",
]

export default function AIInstructionalDesignWhitepaperPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="border-b border-edge bg-idc-navy px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="hero-animate mb-4 text-xs font-bold uppercase tracking-widest text-accent">
            Free White Paper
          </p>
          <h1
            className="hero-animate hero-animate-delay-1 font-extrabold tracking-tight text-white"
            style={{ fontSize: "clamp(32px,5vw,46px)", letterSpacing: "-0.075rem", lineHeight: 1.1 }}
          >
            AI-Augmented Instructional Design
          </h1>
          <p className="hero-animate hero-animate-delay-2 mx-auto mt-5 max-w-2xl text-lg font-medium text-white/75">
            A practical framework for using AI across the ADDIE process — to move faster
            without lowering the bar on learning quality.
          </p>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────── */}
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6 text-base font-medium leading-relaxed text-copy-muted">
          {/* ── The problem / opportunity ──────────────────────────────── */}
          <ScrollReveal>
            <p>
              Instructional design has always been a quality discipline slowed down by manual
              work — transcribing interviews, drafting the first version of a document,
              producing media from scratch. None of that manual effort is what makes your work
              valuable. The judgment is: knowing what to ask, what matters, and what &ldquo;good&rdquo;
              looks like for your learners.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p>
              AI changes the equation by removing the bottleneck, not the judgment. Used well,
              it gives you back the hours you used to spend on transcription and first drafts —
              so you can spend them on the parts of the process that actually require an
              instructional designer.
            </p>
          </ScrollReveal>

          {/* ── What's inside ──────────────────────────────────────────── */}
          <ScrollReveal>
            <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
              What&rsquo;s Inside
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <ul className="space-y-4">
              {whatsInside.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* ── Who it's for ──────────────────────────────────────────── */}
          <ScrollReveal>
            <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
              Who It&rsquo;s For
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p>
              Instructional designers, L&amp;D professionals, and team leads who want to speed
              up production without compromising learning quality.
            </p>
          </ScrollReveal>
        </div>

        {/* ── CTA / email gate ───────────────────────────────────────── */}
        <ScrollReveal delay={2}>
          <div className="mt-14 rounded-card border border-edge bg-surface-2 p-8 text-center shadow-card sm:p-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-heading">
              Get your free copy
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-relaxed text-copy-muted">
              Enter your email to get the download link and join the IDC newsletter — plus
              get a 35% off coupon on any course or template.
            </p>
            <div className="mx-auto mt-6 max-w-md">
              <WhitepaperSignupForm />
            </div>
          </div>
        </ScrollReveal>
      </article>
    </>
  )
}
