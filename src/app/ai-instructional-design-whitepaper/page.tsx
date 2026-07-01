import type { Metadata } from "next"
import Image from "next/image"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import WhitepaperSignupForm from "@/components/ui/WhitepaperSignupForm"

export const metadata: Metadata = generatePageMetadata({
  title: "Free White Paper: AI-Augmented Instructional Design",
  description:
    "A practical framework for using AI across the ADDIE process — to move faster without lowering the bar on learning quality. Download the free white paper.",
  path: "/ai-instructional-design-whitepaper",
})

const benefits = [
  { label: "Free PDF Download" },
  { label: "30-Day Action Plan" },
  { label: "6 AI Workflows" },
  { label: "Built for ID Pros" },
]

const whatsInside = [
  {
    title: "Faster SME Interviews",
    description: "How to use AI to capture and summarize SME interviews and speed up your needs analysis.",
  },
  {
    title: "Faster First Drafts",
    description:
      "How to draft key design artifacts faster — design documents, learning objectives, evaluation plans, storyboards, and branching scenarios.",
  },
  {
    title: "AI-Generated Media",
    description: "How to generate course imagery, video, and narration audio with AI, and where human review still matters.",
  },
  {
    title: "Smarter Quality Review",
    description: "How to use AI for copy editing and quality review without losing your brand voice.",
  },
  {
    title: "AI-Native Authoring Tools",
    description: "How modern authoring tools are building AI directly into the course-building workflow.",
  },
  {
    title: "Your 30-Day Plan",
    description:
      "A practical 30-day plan for introducing AI into your own ID process, plus the quality guardrails that keep it safe.",
  },
]

const audiences = ["Instructional Designers", "L&D Professionals", "Team Leads"]

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

      {/* ── Intro / opportunity ──────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            Instructional design has always been a quality discipline slowed down by manual
            work — transcribing interviews, drafting the first version of a document,
            producing media from scratch. None of that manual effort is what makes your work
            valuable. The judgment is: knowing what to ask, what matters, and what &ldquo;good&rdquo;
            looks like for your learners.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-6 text-base font-medium leading-relaxed text-copy-muted">
            AI changes the equation by removing the bottleneck, not the judgment. Used well,
            it gives you back the hours you used to spend on transcription and first drafts —
            so you can spend them on the parts of the process that actually require an
            instructional designer.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-card border border-edge bg-surface p-4 shadow-card"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)]">
                  <svg className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-heading">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── What's inside ────────────────────────────────────────────── */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">What&rsquo;s Inside</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Six Practical AI Workflows
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              No hype, no theory — just the specific places AI fits into your ADDIE process today.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-4">
            {whatsInside.map((item, i) => (
              <ScrollReveal key={item.title} delay={((i % 2) + 1) as 1 | 2}>
                <div className="flex items-start gap-4 rounded-card border border-edge bg-surface-2 p-5 shadow-card">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] text-sm font-extrabold tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-extrabold tracking-tight text-heading">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-copy-muted">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cover preview ────────────────────────────────────────────── */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Preview</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              A Look Inside
            </h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-copy-muted">
              A clean, professionally designed PDF you can read on any device — and actually
              put to use the same day.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="mx-auto mt-8 max-w-xs overflow-hidden rounded-card border border-edge shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)] sm:max-w-sm">
              <Image
                src="/whitepapers/ai-augmented-instructional-design-cover.png"
                alt="Cover of the AI-Augmented Instructional Design white paper from Instructional Design Central"
                width={927}
                height={1200}
                className="w-full"
                sizes="(max-width: 768px) 80vw, 384px"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Who it's for ─────────────────────────────────────────────── */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Who It&rsquo;s For</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Built for Learning Professionals
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-copy-muted">
              Instructional designers, L&amp;D professionals, and team leads who want to speed
              up production without compromising learning quality.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <div className="mt-6 flex flex-wrap gap-3">
              {audiences.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-edge bg-surface-2 px-4 py-2 text-sm font-bold text-heading shadow-card"
                >
                  {label}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA / email gate ─────────────────────────────────────────── */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-card border border-edge bg-surface-2 p-8 text-center shadow-card sm:p-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-heading">
                Get your free copy
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-relaxed text-copy-muted">
                Enter your email and we&rsquo;ll send a confirmation link — click it and your
                download will be ready. By downloading, you&rsquo;re also subscribing to the
                Instructional Design Central newsletter for weekly insights and resources, plus
                a 35% off coupon on any course or template. Unsubscribe anytime.
              </p>
              <div className="mx-auto mt-6 max-w-md">
                <WhitepaperSignupForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
