import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "The Learning Circle Framework™ — Free Download",
  description:
    "Download The Learning Circle Framework™ — a free, modern model for designing learning experiences in three phases: Target, Create, and Launch — built on agile and instructional design principles.",
  path: "/learning-circle-framework",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Learning Circle Framework?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Learning Circle Framework™ is a free, visual model from Instructional Design Central for designing learning experiences. It organizes the design process into three phases — Target, Create, and Launch — connected by a continuous Test & Iterate loop, and is built on modern learning design and agile product development principles.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Learning Circle Framework free to download?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The one-page Learning Circle Framework handout is completely free to download as a PDF. An editable PowerPoint version of the template is also available, so you can adapt it for your own projects and presentations.",
      },
    },
    {
      "@type": "Question",
      name: "How is the Learning Circle Framework different from the ADDIE model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADDIE (Analysis, Design, Development, Implementation, Evaluation) is a linear, step-by-step process you typically move through once per project. The Learning Circle Framework is built around continuous iteration — Target, Create, and Launch form a loop, with Test & Iterate happening throughout, so your design keeps improving even after launch. Many instructional designers use the two together: ADDIE for overall project structure, and the Learning Circle for a faster, more agile design rhythm within it.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use the Learning Circle Framework for any type of training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The framework is intentionally simple and flexible, so it works whether you're designing a single eLearning module, a multi-day workshop, or an entire blended learning program. The three phases — and the Test & Iterate loop — scale to fit projects of any size.",
      },
    },
  ],
}

const icons = {
  target: (
    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  wrench: (
    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  ),
  rocket: (
    <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  loop: (
    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  ),
  check: (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
}

const downloadIcon = (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
)

const benefits = [
  { label: "3 Phases, One Continuous Cycle" },
  { label: "Built on Agile + Modern ID" },
  { label: "Free Handout + Template" },
  { label: "Flexible for Any Project" },
]

const phases = [
  {
    phase: "Phase I",
    title: "Target",
    icon: icons.target,
    description:
      "Every great learning experience starts with focus. Before you build anything, get clear on who you&rsquo;re designing for and the problem you&rsquo;re solving — skip this step, and even the most polished course can miss the mark.",
    items: [
      "Interview learners and stakeholders",
      "Define the problem(s)",
      "Create learner personas",
      "Define success criteria",
    ],
  },
  {
    phase: "Phase II",
    title: "Create",
    icon: icons.wrench,
    description:
      "This is where the experience comes to life — built, tested, and refined based on real learner feedback. Gather and organize learner stories, curate content rather than starting from scratch, and build a prototype you can put in front of learners early and often.",
    items: [
      "Create and organize learner stories",
      "Gather and create content",
      "Build and test a prototype",
      "Build the final course",
    ],
  },
  {
    phase: "Phase III",
    title: "Launch",
    icon: icons.rocket,
    description:
      "You&rsquo;ve built something great and tested it with real learners — now it&rsquo;s time to share it with the world. Map out your rollout, choose your delivery channels, and build a communication plan, because even the best training only works if people know it exists.",
    items: [
      "Create a course roadmap",
      "Identify training delivery channels",
      "Create a communication plan",
      "Deploy the course",
    ],
  },
]

const steps = [
  {
    step: "1",
    heading: "Map your project onto the circle",
    text: "Take whatever you&rsquo;re working on right now and place it somewhere on the Target → Create → Launch cycle. This alone often reveals whether you&rsquo;re skipping a phase — or about to.",
  },
  {
    step: "2",
    heading: "Use it to frame your kickoff",
    text: "Walk your team and stakeholders through the three phases at the start of a project. It gives everyone a shared mental model for what&rsquo;s coming next, why each phase matters, and where you are right now.",
  },
  {
    step: "3",
    heading: "Build in Test & Iterate checkpoints",
    text: "Don&rsquo;t wait until launch to get feedback. After each phase, pause, share what you&rsquo;ve built with learners and stakeholders, and adjust before moving forward — that&rsquo;s the loop that makes this framework work.",
  },
  {
    step: "4",
    heading: "Bring it back for the next project",
    text: "Once your team is fluent in the Target → Create → Launch rhythm, every new project gets faster to plan and easier to explain — to your team, your clients, and anyone new joining the project.",
  },
]

const downloadButtons = (
  <div className="flex flex-wrap justify-center gap-3">
    <a
      href="/Learning-Circle-Framework/The-Learning-Circle-Handout.pdf"
      download
      className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
    >
      {downloadIcon}
      Download the Handout (PDF)
    </a>
    <a
      href="/Learning-Circle-Framework/The-Learning-Circle-Template-Kit.pptx"
      download
      className="inline-flex items-center gap-2 rounded-lg border border-edge px-6 py-3 text-sm font-semibold text-copy-muted btn-shadow-neutral hover:border-edge-hover hover:text-copy"
    >
      {downloadIcon}
      Download the Editable Template (PPTX)
    </a>
  </div>
)

function TestIterate({ label = "Test &amp; Iterate" }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-2">
      <span className="flex items-center gap-2 rounded-full border border-edge bg-surface px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-copy-muted">
        {icons.loop}
        <span dangerouslySetInnerHTML={{ __html: label }} />
      </span>
    </div>
  )
}

export default function LearningCircleFramework() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        eyebrow="Free Planning Framework"
        title="The Learning Circle Framework™"
        subtitle="A simple, modern model for designing learning experiences — built for how today&rsquo;s workforce actually works, and how today&rsquo;s instructional designers actually build."
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            Most instructional design models were built for a different era — slower timelines,
            longer development cycles, content that didn&rsquo;t need to change for years. The
            Learning Circle Framework™ is built for now.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-6 text-base font-medium leading-relaxed text-copy-muted">
            It&rsquo;s a simple, repeatable cycle for designing learning experiences:
            {" "}<strong className="font-bold text-copy">Target</strong>,{" "}
            <strong className="font-bold text-copy">Create</strong>, and{" "}
            <strong className="font-bold text-copy">Launch</strong> — with Test &amp; Iterate
            woven through every step. Grounded in modern learning design and agile product
            development principles, it gives you a framework that&rsquo;s easy to explain to
            stakeholders, easy to follow as a team, and flexible enough to fit projects of any
            size.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="mt-6 text-base font-medium leading-relaxed text-copy-muted">
            Whether you&rsquo;re mapping out your first course or refining a process
            you&rsquo;ve used for years, the Learning Circle Framework™ gives you shared
            language and structure for talking about your design process — and a visual you
            can bring into any kickoff meeting.
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

      {/* Preview + Download */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-xs font-bold uppercase tracking-widest text-accent">
              Get Your Copy
            </p>
            <h2
              className="mt-2 text-center font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Download The Learning Circle Framework™
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base font-medium leading-relaxed text-copy-muted">
              Get the one-page visual handout to keep on hand, or download the editable template
              to start mapping out your own learning circle.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="mt-8 overflow-hidden rounded-card border border-edge bg-white shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)]">
              <Image
                src="/Learning-Circle-Framework/The-Learning-Circle-Image.png"
                alt="The Learning Circle Framework — a continuous three-phase cycle of Target, Create, and Launch connected by Test and Iterate, with the key checklist items for each phase"
                width={1200}
                height={803}
                className="w-full"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="mt-8">{downloadButtons}</div>
            <p className="mt-4 text-center text-xs text-copy-muted opacity-70">
              100% free &middot; No email required &middot; Use it on as many projects as you like
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Inside the Framework */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Inside the Framework</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Three Phases. One Continuous Cycle.
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              Each phase builds on the last, and Test &amp; Iterate connects them all — so your
              design keeps improving as you go, even after launch. Here&rsquo;s what happens in
              each phase.
            </p>
          </ScrollReveal>

          <div className="mt-8">
            {phases.map((phase, i) => (
              <div key={phase.title}>
                <ScrollReveal delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)]">
                        {phase.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-accent">{phase.phase}</p>
                        <h3 className="text-lg font-extrabold tracking-tight text-copy">{phase.title}</h3>
                      </div>
                    </div>
                    <p
                      className="mt-4 text-sm font-medium leading-relaxed text-copy-muted"
                      dangerouslySetInnerHTML={{ __html: phase.description }}
                    />
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm font-medium text-copy-muted">
                          {icons.check}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
                <TestIterate label={i === phases.length - 1 ? "Test &amp; Iterate &mdash; back to Target" : "Test &amp; Iterate"} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Kit Upsell */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 rounded-card border border-edge bg-surface-2 p-10 text-center shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Want More Like This?</p>
              <h2
                className="font-extrabold tracking-tight text-heading"
                style={{ fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-0.04rem" }}
              >
                The Framework Is Just the Beginning
              </h2>
              <p className="max-w-md text-sm font-medium leading-relaxed text-copy-muted">
                The Learning Circle Kit is one of 13 templates inside the Instructional Design
                Template Kit — everything you need to plan, document, and deliver learning
                experiences from kickoff to evaluation. One kit, instant download, unlimited use.
              </p>
              <Link
                href="/instructionaldesigntemplates"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                Explore the Template Kit
                <svg className="h-4 w-4 text-white/80 animate-nudge-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="text-xs text-copy-muted opacity-70">13 templates &middot; Word, PowerPoint &amp; PDF &middot; One-time purchase</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How to Use It */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Built for Alignment</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              How to Use the Framework With Your Team
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              The Learning Circle Framework works best as a shared reference — something your
              whole team and your stakeholders can point to throughout a project. Here&rsquo;s
              how to put it into practice.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="mt-6 space-y-4">
              {steps.map(({ step, heading, text }) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-sm font-extrabold text-accent">
                    {step}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-sm font-bold text-copy">{heading}</h3>
                    <p
                      className="mt-1 text-sm font-medium leading-relaxed text-copy-muted"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">FAQ</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <ScrollReveal key={faq.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <details className="group rounded-card border border-edge bg-surface shadow-card open:shadow-card-hover">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-bold text-copy transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                    {faq.name}
                    <svg
                      className="h-4 w-4 shrink-0 text-copy-muted transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="border-t border-edge px-6 pb-6 pt-4">
                    <p className="text-sm font-medium leading-relaxed text-copy-muted">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
