import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "ChatID: Instructional Design AI",
  description:
    "ChatID is the top-rated instructional design GPT in the ChatGPT marketplace — and it's free. Generate needs analyses, learning objectives, design documents, and project plans in minutes.",
  path: "/chatid-instructional-design-ai",
})

const CHATID_URL = "https://chatgpt.com/g/g-0RwjMVNPf-chatid"

const artifacts = [
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Needs Analysis",
    description: "Ask the right questions, surface the real gap, and walk away with a structured needs analysis ready to share with stakeholders.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Learning Objectives",
    description: "Generate Bloom's-aligned, measurable learning objectives for any topic, audience, or delivery format — in seconds.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Design Documents",
    description: "Build a complete instructional design document with course structure, content outline, and delivery recommendations tailored to your project.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12V13.5zm0 3h.008v.008H12v-.008zm-3 0h.008v.008H9v-.008zm0-3h.008v.008H9V13.5zm6 3h.008v.008H15v-.008zm0-3h.008v.008H15V13.5z" />
      </svg>
    ),
    title: "Project Plans",
    description: "Get a realistic instructional design project plan with phases, milestones, and timeline — ready to adapt to your client or organization.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Evaluation Plans",
    description: "Design a Kirkpatrick-aligned evaluation strategy that ties learning outcomes to real business results — not just completion rates.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Expert ID Guidance",
    description: "Ask anything about instructional design — from how to handle a difficult SME to choosing between ADDIE and SAM. ChatID knows the field.",
  },
]

const frameworks = [
  { name: "ADDIE Model", desc: "The foundational framework for systematic instructional design" },
  { name: "Bloom's Taxonomy", desc: "Objective-writing grounded in cognitive learning levels" },
  { name: "Design Thinking", desc: "Human-centered problem solving for complex learning challenges" },
  { name: "Gagné's Nine Events", desc: "Evidence-based instructional sequence for effective learning" },
  { name: "Kirkpatrick Model", desc: "Evaluation framework from learner reaction to business results" },
  { name: "SAM Model", desc: "Agile, iterative alternative to sequential ID workflows" },
]

const steps = [
  {
    number: "01",
    title: "Open ChatID",
    description: "Go to the ChatGPT marketplace and open ChatID — the top-rated instructional design GPT, built by IDC.",
  },
  {
    number: "02",
    title: "Ask or Select a Prompt",
    description: "Type your request or pick from ChatID's built-in prompts. Needs analysis, learning objectives, design doc — just tell it what you need.",
  },
  {
    number: "03",
    title: "Get Your Artifact",
    description: "ChatID generates a polished, industry-standard artifact in seconds. Copy it, customize it, and put it to work.",
  },
]

export default function ChatIDPage() {
  return (
    <>
      <Hero
        eyebrow="Top Instructional Design GPT"
        title="ChatID: Your AI Copilot for Instructional Design"
        subtitle="Generate needs analyses, learning objectives, design documents, and more — in minutes, not days. Free to use. Built for instructional designers by IDC."
        cta={{ label: "Try ChatID Free", href: CHATID_URL, target: "_blank" }}
      />

      {/* ── What is ChatID ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">About ChatID</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
            Your on-demand AI partner for every phase of the design process
          </h2>
          <div className="mt-2 h-0.5 w-10 rounded bg-accent" />
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="mt-6 space-y-4 text-base font-medium leading-relaxed text-copy-muted">
            <p>
              ChatID is the #1 instructional design GPT in the ChatGPT marketplace — and it&rsquo;s
              completely free. Built specifically for people like you, whether you&rsquo;re a seasoned
              ID professional looking to move faster or someone newer to the field who needs a
              knowledgeable thought partner, ChatID meets you where you are.
            </p>
            <p>
              Ask it to run a needs analysis. Have it write your learning objectives. Hand it your
              project brief and watch it build out a full design document. ChatID doesn&rsquo;t just
              spit out generic text — it thinks in the language of instructional design, grounded in the
              frameworks and models that actually shape effective learning.
            </p>
            <p>
              The result: work that used to take hours gets done in minutes, with the quality and
              structure your clients and stakeholders expect.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="mt-10 overflow-hidden rounded-card border border-edge shadow-card">
            <Image
              src="/chat-id-2.png"
              alt="ChatID GPT interface showing instructional design prompts and a needs analysis response"
              width={2384}
              height={1920}
              className="w-full"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ── Stat callout ────────────────────────────────────────────────────── */}
      <section className="border-y border-edge bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
              Become a{" "}
              <span className="text-accent">10× instructional designer</span>
              {" "}with an on-demand AI copilot.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base font-medium leading-relaxed text-copy-muted">
              Stop starting from scratch. ChatID is free, and it gives you a head start on every
              deliverable — so you can spend your time on the thinking that actually requires you,
              not the formatting that doesn&rsquo;t.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href={CHATID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shadow inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Try ChatID Free
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── What you can create ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">What You Can Build</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
            Every ID artifact, ready in minutes
          </h2>
          <div className="mt-2 h-0.5 w-10 rounded bg-accent" />
          <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
            ChatID covers the full instructional design workflow — from the first stakeholder conversation
            to the final evaluation report.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {artifacts.map((artifact, i) => (
            <ScrollReveal key={artifact.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="flex gap-4 rounded-card border border-edge bg-surface p-5 shadow-card h-full">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)]">
                  {artifact.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-copy">{artifact.title}</h3>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-copy-muted">
                    {artifact.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Frameworks ──────────────────────────────────────────────────────── */}
      <section className="border-y border-edge bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Built on Proven ID Science</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
              Trained on the frameworks that define the field
            </h2>
            <div className="mt-2 h-0.5 w-10 rounded bg-accent" />
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              ChatID isn&rsquo;t a generic AI that happens to answer ID questions. It&rsquo;s been
              carefully trained on the models and theories that instructional designers actually use —
              so its output reflects how the field thinks, not just how Google talks about it.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((fw, i) => (
              <ScrollReveal key={fw.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="rounded-card border border-edge bg-surface-2 p-5">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    <h3 className="text-sm font-bold text-copy">{fw.name}</h3>
                  </div>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-copy-muted">{fw.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">How It Works</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
            Three steps from question to deliverable
          </h2>
          <div className="mt-2 h-0.5 w-10 rounded bg-accent" />
        </ScrollReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="rounded-card border border-edge bg-surface p-6 shadow-card text-center">
                <span className="text-4xl font-black text-accent opacity-30 select-none">
                  {step.number}
                </span>
                <h3 className="mt-3 text-base font-extrabold text-copy">{step.title}</h3>
                <div className="mx-auto mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
                <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────────── */}
      <section className="border-t border-edge bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Get Started Free</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
              Ready to see what ChatID can do for you?
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-10 rounded bg-accent" />
            <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-copy-muted">
              ChatID is free to use with a ChatGPT account. Open it in the marketplace, describe
              what you&rsquo;re working on, and get a professional-quality artifact back in under
              a minute. No setup. No learning curve. Just results.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href={CHATID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shadow inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80 animate-nudge-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Open ChatID in ChatGPT
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
