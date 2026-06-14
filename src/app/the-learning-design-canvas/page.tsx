import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "The Learning Design Canvas™ — Free Download",
  description:
    "Download The Learning Design Canvas™ — a free one-page planning tool that brings your whole learning plan into focus and creates instant alignment with your team and stakeholders.",
  path: "/the-learning-design-canvas",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Learning Design Canvas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Learning Design Canvas™ is a free, one-page planning tool from Instructional Design Central. It brings together the essential elements of a learning plan — problem statement, target audience, learning objectives, instructional strategy, development methods, communication plan, success criteria, and evaluation plan — onto a single visual page, built on instructional design and user experience design principles.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Learning Design Canvas free to download?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Learning Design Canvas is completely free to download in both a print-ready PDF and an editable PowerPoint format. You can use it on as many projects as you like and share it with your team or clients.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use the Learning Design Canvas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the Learning Design Canvas at the start of a learning project. Work through each of the eight sections — problem statement, target audience, learning objectives, success criteria, instructional strategy, development methods, communication plan, and evaluation plan — on your own or with your team. The finished canvas becomes a one-page reference you can share with stakeholders for fast review and sign-off.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit the Learning Design Canvas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The editable PowerPoint version can be customized with your own branding, adapted for your project, and filled in digitally. The PDF version is best for printing and filling in by hand.",
      },
    },
  ],
}

const icons = {
  mapPin: (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  users: (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  clipboard: (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  star: (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  share: (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
    </svg>
  ),
  code: (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  ),
  megaphone: (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  ),
  chart: (
    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
}

const downloadIcon = (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
)

const canvasSections = [
  {
    title: "Problem Statement",
    icon: icons.mapPin,
    description:
      "What problem are you trying to solve? Naming it clearly here keeps the whole project anchored to a real need — not just a request that landed in your inbox.",
  },
  {
    title: "Target Audience",
    icon: icons.users,
    description:
      "Who are your learners? What&rsquo;s their context, their experience level, and what&rsquo;s motivating — or getting in the way of — their success? The more specific you get here, the better every decision that follows.",
  },
  {
    title: "Learning Objectives",
    icon: icons.clipboard,
    description:
      "After this experience, what should learners actually be able to do? This is your destination — everything else on the canvas exists to help you get there.",
  },
  {
    title: "Success Criteria",
    icon: icons.star,
    description:
      "What does success look like, and how will you know you&rsquo;ve reached it? Naming this up front means you&rsquo;re designing toward outcomes, not just outputs.",
  },
  {
    title: "Instructional Strategy",
    icon: icons.share,
    description:
      "What methods and approaches will bring your content to life? This is where your design choices start to take shape.",
  },
  {
    title: "Development Methods",
    icon: icons.code,
    description:
      "How will you actually build this — and what tools, formats, or platforms will you use to create and deploy it?",
  },
  {
    title: "Communication Plan",
    icon: icons.megaphone,
    description:
      "How will you keep stakeholders and learners in the loop as the project moves forward, and how will you roll it out once it&rsquo;s ready?",
  },
  {
    title: "Evaluation Plan",
    icon: icons.chart,
    description:
      "How will you measure whether this training actually worked? Tie this back to your success criteria so you&rsquo;re closing the loop you opened.",
  },
]

const benefits = [
  { label: "5-Minute Stakeholder Review" },
  { label: "Built on ID + UX Principles" },
  { label: "Print or Editable Format" },
  { label: "Free for Every Project" },
]

const steps = [
  {
    step: "1",
    heading: "Start with the problem",
    text: "Before you write a single objective, get clear on your problem statement and target audience. Everything else on the canvas builds on this foundation, so it&rsquo;s worth taking your time here.",
  },
  {
    step: "2",
    heading: "Fill it out with your team",
    text: "Work through the canvas together at kickoff, or bring a draft to your first stakeholder review. Because it all fits on one page, everyone can see the whole plan at once and weigh in before any real work begins.",
  },
  {
    step: "3",
    heading: "Use it as your shared reference",
    text: "Print it, pin it up, or drop it into your shared project space. As development gets underway, the canvas keeps your team pointed at the same target — and gives new collaborators a fast way to get oriented.",
  },
  {
    step: "4",
    heading: "Revisit it when things shift",
    text: "Projects change. When scope, timelines, or priorities move, pull the canvas back out, update what&rsquo;s changed, and realign with your team and stakeholders before moving forward.",
  },
]

const downloadButtons = (
  <div className="flex flex-wrap justify-center gap-3">
    <a
      href="/Learning-Design-Canvas/The-Learning-Design-Canvas.pdf"
      download
      className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
    >
      {downloadIcon}
      Download PDF
    </a>
    <a
      href="/Learning-Design-Canvas/The-Learning-Design-Canvas.pptx"
      download
      className="inline-flex items-center gap-2 rounded-lg border border-edge px-6 py-3 text-sm font-semibold text-copy-muted btn-shadow-neutral hover:border-edge-hover hover:text-copy"
    >
      {downloadIcon}
      Download Editable (PPTX)
    </a>
  </div>
)

export default function LearningDesignCanvas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        eyebrow="Free Planning Tool"
        title="The Learning Design Canvas™"
        subtitle="Your entire learning plan, on one page — so you can get aligned with your team, your stakeholders, and yourself before you build a single thing."
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            You know that moment in a kickoff meeting when everyone nods along — and then, a few
            weeks later, you find out nobody actually agreed on what you were building? The
            Learning Design Canvas™ is built to catch that moment before it happens.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-6 text-base font-medium leading-relaxed text-copy-muted">
            This free, one-page planning tool brings together the essential building blocks of
            any learning experience — the problem you&rsquo;re solving, who you&rsquo;re solving
            it for, what success looks like, and how you&rsquo;ll get there — onto a single
            visual canvas. It&rsquo;s grounded in modern instructional design and user experience
            principles, so it captures not just what you&rsquo;re building, but why it matters
            and how you&rsquo;ll know it worked.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="mt-6 text-base font-medium leading-relaxed text-copy-muted">
            Use it at the start of any project — or pull it back out mid-project when things
            start to drift. Fill it out with your team, walk through it with stakeholders, and
            let it be your shared compass from kickoff to launch. One page, a few minutes to
            review, and everyone leaves the room actually agreeing on the plan.
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
              Download The Learning Design Canvas™
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base font-medium leading-relaxed text-copy-muted">
              Choose the format that works for you — print it out and fill it in by hand, or open
              the editable version and drop it straight into your next project deck.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="mt-8 overflow-hidden rounded-card border border-edge shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)]">
              <Image
                src="/Learning-Design-Canvas/Learning-Design-Canvas.png"
                alt="The Learning Design Canvas — a one-page template with sections for Problem Statement, Target Audience, Learning Objectives, Instructional Strategy, Development Methods, Communication Plan, Success Criteria, and Evaluation Plan"
                width={1200}
                height={898}
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

      {/* What's Inside */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Inside the Canvas</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Eight Sections. One Page. The Whole Plan.
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              Each section of the canvas prompts a question that matters. Answer all eight, and
              you&rsquo;ll have a complete picture of your project — one that you, your team, and
              your stakeholders can all see at the same time.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {canvasSections.map((section, i) => (
              <ScrollReveal key={section.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="flex h-full gap-4 rounded-card border border-edge bg-surface p-5 shadow-card">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)]">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-copy">{section.title}</h3>
                    <p
                      className="mt-1.5 text-sm font-medium leading-relaxed text-copy-muted"
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use It */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Putting It to Work</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              How to Use the Canvas
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              There&rsquo;s no single right way to use it — but here&rsquo;s the rhythm that tends
              to work well for instructional designers bringing it into a real project.
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

      {/* Final CTA */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 rounded-card border border-edge bg-surface-2 p-10 text-center shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Ready When You Are</p>
              <h2
                className="font-extrabold tracking-tight text-heading"
                style={{ fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-0.04rem" }}
              >
                Grab the Canvas and Get Planning
              </h2>
              <p className="max-w-md text-sm font-medium leading-relaxed text-copy-muted">
                Download it, fill it in, and bring it to your next kickoff. Looking for more tools
                to round out your toolkit? The full Instructional Design Template Kit includes
                the Learning Design Canvas alongside twelve other templates built for every phase
                of a project.
              </p>
              <div className="mt-2">{downloadButtons}</div>
              <Link
                href="/instructionaldesigntemplates"
                className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-hover"
              >
                Explore the full Template Kit
                <svg className="h-4 w-4 animate-nudge-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="text-xs text-copy-muted opacity-70">One-time download &middot; Unlimited use &middot; Always free</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
