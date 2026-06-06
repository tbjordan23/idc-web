import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Needs Analysis in Instructional Design",
  description:
    "What is a needs analysis? A complete guide to the most critical phase of the ADDIE model — identifying performance gaps, understanding learners, and designing solutions that actually work.",
  path: "/needs-analysis",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a needs analysis in instructional design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A needs analysis is the systematic process of identifying performance gaps and determining the right learning or training solutions to address them. It is the Analysis phase of the ADDIE model and the most critical step in the instructional design process — it ensures that training is targeted at real, measurable business or performance needs rather than assumptions.",
      },
    },
    {
      "@type": "Question",
      name: "What are the five areas of a needs analysis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The five key areas of a needs analysis are: 1) Organizational and Business Needs — understanding the business driver and performance goal; 2) Gap Analysis — identifying the distance between current and desired performance; 3) Learner Analysis — understanding who the audience is, their background, and their context; 4) Task Analysis — breaking down the specific skills and behaviors learners need to perform; 5) Environmental Analysis — understanding the context in which learning will happen and be applied.",
      },
    },
    {
      "@type": "Question",
      name: "What methods are used in a training needs analysis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common methods used in a training needs analysis include interviews with stakeholders and subject matter experts, surveys and questionnaires, direct observation of job performance, focus groups, document and records review, and assessment of existing training materials. A thorough needs analysis typically combines several of these methods to triangulate findings.",
      },
    },
    {
      "@type": "Question",
      name: "Why is needs analysis often skipped?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Needs analysis is often skipped because of time pressure, stakeholder urgency, or the assumption that the training solution is already known. Many organizations default to 'just build the course' without investigating whether training is actually the right solution. This leads to well-designed courses that fail to change behavior because they solve the wrong problem.",
      },
    },
  ],
}

const focusAreas = [
  {
    number: "01",
    title: "Organizational & Business Needs",
    body: [
      "Start at the top. Before you can design anything meaningful, you need to understand why this training is being requested — from the organization's perspective, not just the requester's. What business problem is this training meant to solve? What happens if nothing changes? What does success look like six months after the training rolls out?",
      "Ask questions like: Why is this training needed right now? What's driving the urgency? What does the organization stand to gain — or lose — depending on the outcome? Is there a compliance requirement, a performance dip, a product launch, a cultural shift? The business context tells you how much is at stake and helps you calibrate the investment in the solution.",
      "A real-world example: a hotel chain experiencing poor customer retention. The instinct might be to build a general service training. But understanding the business driver — customer churn — leads to a very different design: short, scenario-based modules presenting realistic service situations, with branching choices that reflect the actual judgment calls staff have to make. The business need shapes the design.",
    ],
  },
  {
    number: "02",
    title: "Gap Analysis",
    body: [
      "Once you understand the business need, you can identify the gap — the distance between where performance currently sits and where it needs to be. This is the heart of needs analysis, and it's where a lot of training projects go wrong if skipped.",
      "The gap might be a knowledge gap (people don't know how to do something), a skill gap (they know but can't execute consistently), or a motivation gap (they know and can do it, but they're not). Each type requires a different kind of solution — and not all of them are solved by training. A gap analysis keeps you honest about whether training is the right intervention or whether you're designing an elegant solution to the wrong problem.",
      "Ask: What are people currently doing, and what should they be doing instead? How wide is that gap? Where does it show up most visibly? What has already been tried? What do managers observe? What do the numbers say? The goal isn't just to document the gap — it's to understand it well enough to know what kind of solution will actually close it.",
    ],
  },
  {
    number: "03",
    title: "Learner Analysis",
    body: [
      "Designing without knowing your audience is like baking a cake for someone without knowing their preferences — you might produce something technically impressive that the recipient can't use. Learner analysis puts the actual people at the center of your design decisions.",
      "Who will take this training? What is their existing knowledge level? Where are they located, and what's their relationship with technology? What are their day-to-day working conditions, and how much time do they realistically have for learning? Are there language, accessibility, or literacy considerations? What motivates them — and what tends to disengage them?",
      "Here's an example that makes the stakes clear: a software training request comes in, and the stated audience is 'trainers.' But those trainers already know the software — they need to learn how to teach it to others. That distinction completely changes the instructional approach, the tone, the level of detail, and the format. Learner analysis surfaces these differences before you build anything.",
    ],
  },
  {
    number: "04",
    title: "Task Analysis",
    body: [
      "Task analysis breaks down what learners actually need to be able to do at the end of the training — not just what they need to know. It maps the skills, steps, and decisions involved in performing the target behavior on the job. This is the work that transforms a content-dump into a performance-focused learning experience.",
      "Ask: What specific skill should learners acquire? Where do they currently stand relative to that skill? How will they apply it in their actual work environment? What are the decision points, the common errors, the contextual nuances that someone doing this job needs to navigate?",
      "Task analysis is also what allows you to write learning objectives that are specific, measurable, and tied to real outcomes rather than vague aspirations. When you know what people need to do — not just what they need to know — you can design practice, feedback, and assessment that actually prepares them for the real thing.",
    ],
  },
  {
    number: "05",
    title: "Environmental Analysis",
    body: [
      "The final area zooms back out — from the individual learner to the broader context in which learning will happen and be applied. Where will people take this training? What technology constraints exist? What does the organizational culture around learning look like? Is training valued and supported by leadership, or is it something employees are expected to squeeze in between other responsibilities?",
      "Also consider where this training sits in the bigger picture. Is it a standalone module or part of a larger learning program? Does existing training cover related content — and if so, what's prompting the change now? How does this learning experience connect to the learner's larger development journey?",
      "Environmental factors shape delivery decisions significantly. A learner who works in a call center with limited screen time needs a very different format than a knowledge worker with a flexible schedule and a laptop. A culture that rewards learning will make your training more effective before it even launches. Understanding the environment lets you design for the conditions that actually exist.",
    ],
  },
]

const methods = [
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: "Stakeholder & SME Interviews",
    description:
      "One-on-one conversations with managers, subject matter experts, and high performers. Interviews surface the nuance that surveys can't — the why behind the gap, the workarounds people use, the context that shapes performance.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Surveys & Questionnaires",
    description:
      "Scalable data collection from a broad audience. Surveys are best for quantifying how widespread a gap is, understanding baseline knowledge levels, and gathering learner preferences across a large group that can't all be interviewed.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Job Observation",
    description:
      "Watching people do the actual work reveals what no interview can. Observation uncovers informal workarounds, environmental barriers, and the real sequence of tasks — often very different from what a job description or policy document describes.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Focus Groups",
    description:
      "Structured discussions that surface shared experiences, disagreements, and patterns across a group. Focus groups are especially valuable when you need to understand how different roles or teams experience the same performance challenge differently.",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Document & Records Review",
    description:
      "Reviewing performance data, incident reports, quality audits, existing training materials, and policy documents. This secondary research often reveals trends that aren't visible to any single person — and provides the objective data that supports your findings.",
  },
]

function PromoCallout({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  icon,
}: {
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  icon: React.ReactNode
}) {
  return (
    <div className="mt-10 rounded-card border border-edge bg-surface p-6 shadow-card">
      <p className="text-xs font-bold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h3 className="mt-2 text-lg font-extrabold tracking-tight text-heading">{title}</h3>
      <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
      <div className="mt-4 flex items-start gap-5">
        <div className="mt-1 hidden h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] sm:flex">
          {icon}
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium leading-relaxed text-copy-muted">{description}</p>
          <Link
            href={ctaHref}
            className="btn-shadow mt-4 inline-flex self-start items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            {ctaLabel}
            <svg className="h-4 w-4 text-white/80 animate-nudge-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

const addieIcon = (
  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
)

const templatesIcon = (
  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
)

export default function NeedsAnalysisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        eyebrow="ADDIE Model — Analysis Phase"
        title="Needs Analysis"
        subtitle="The most critical step in the instructional design process — and the one most often skipped."
      >

        {/* ── Introduction ─────────────────────────────────────────────────── */}
        <ScrollReveal>
          <p>
            Before you write a single learning objective or open an authoring tool, there&rsquo;s
            a question every instructional designer needs to answer: <em>what problem are we actually
            solving?</em> That&rsquo;s what a needs analysis is for. It&rsquo;s the structured
            process of investigating a performance gap — identifying why it exists, who it affects,
            and what kind of solution will actually close it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p>
            A needs analysis done well is the difference between training that changes behavior and
            training that checks a box. It protects you from building something polished and
            completely misaligned — a course that launches on time, gets completed, and changes
            nothing. Done poorly or skipped entirely, it&rsquo;s one of the most common reasons
            learning programs fail. This guide walks you through every dimension of the process,
            from the initial business conversation to the practical methods that surface what you
            need to know.
          </p>
        </ScrollReveal>

        {/* ── Where NA fits in ADDIE ───────────────────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
            Where Needs Analysis Fits in the ADDIE Model
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p>
            Needs analysis is the core work of the <strong className="font-bold text-copy">Analysis
            phase</strong> — the first and most foundational stage of the ADDIE model. ADDIE stands
            for Analysis, Design, Development, Implementation, and Evaluation. Every phase depends
            on the Analysis phase being done well. The design you choose, the content you build,
            the delivery format you select — all of it flows from what you discover during analysis.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p>
            The Analysis phase isn&rsquo;t just a formality before the &ldquo;real&rdquo; work
            begins. It <em>is</em> the real work — at least from a strategic standpoint. Getting
            this right means every hour you spend designing and developing is aimed at the right
            target. Getting it wrong means those hours are building toward something that
            won&rsquo;t work, no matter how well it&rsquo;s executed.
          </p>
        </ScrollReveal>

        {/* ── ADDIE Course Promo #1 ────────────────────────────────────────── */}
        <ScrollReveal delay={1}>
          <PromoCallout
            eyebrow="IDC Course"
            title="Master the Full ADDIE Process"
            description="Needs analysis is just the beginning. The IDC Mastering the ADDIE Model course walks you through all five phases with practical examples, real-world templates, and hands-on exercises. Build the skills to lead any instructional design project from discovery through evaluation."
            ctaLabel="Explore the ADDIE Course"
            ctaHref="/addie-model-course"
            icon={addieIcon}
          />
        </ScrollReveal>

        {/* ── Five Focus Areas ─────────────────────────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
            The Five Focus Areas of Needs Analysis
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p>
            A thorough needs analysis investigates five distinct areas. Together, they give you
            a complete picture of the problem before you design anything. Think of them not as
            a rigid checklist to move through mechanically, but as lenses for asking better
            questions and listening more carefully.
          </p>
        </ScrollReveal>

        <div className="mt-6 space-y-5">
          {focusAreas.map((area, i) => (
            <ScrollReveal key={area.number} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-black text-accent opacity-40 select-none">
                    {area.number}
                  </span>
                  <h3 className="text-lg font-extrabold text-copy">{area.title}</h3>
                </div>
                <div className="mt-3 h-0.5 w-8 rounded bg-accent opacity-60" />
                <div className="mt-4 space-y-3">
                  {area.body.map((para, j) => (
                    <p key={j} className="text-sm font-medium leading-relaxed text-copy-muted">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Methods ──────────────────────────────────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
            Needs Analysis Methods
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p>
            Knowing what to investigate is half the job. The other half is knowing how to gather
            that information reliably. A single method rarely gives you the full picture —
            experienced designers triangulate using several, so that what one approach misses,
            another catches.
          </p>
        </ScrollReveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {methods.map((method, i) => (
            <ScrollReveal key={method.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="flex gap-4 rounded-card border border-edge bg-surface p-5 shadow-card h-full">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)]">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-copy">{method.title}</h3>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-copy-muted">
                    {method.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Templates Promo ──────────────────────────────────────────────── */}
        <ScrollReveal delay={1}>
          <PromoCallout
            eyebrow="IDC Templates"
            title="Needs Analysis Templates"
            description="Put structure behind your analysis process. IDC's instructional design template collection includes a ready-to-use Needs Analysis template — built to help you gather the right information, ask the right questions, and deliver clear findings to stakeholders. Download it and start your next project on solid ground."
            ctaLabel="Browse ID Templates"
            ctaHref="/instructionaldesigntemplates"
            icon={templatesIcon}
          />
        </ScrollReveal>

        {/* ── Conducting a Needs Analysis ──────────────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
            How to Conduct a Needs Analysis: A Practical Approach
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p>
            There&rsquo;s no single right way to run a needs analysis — the scope, formality,
            and methods you use will vary depending on the project, the organization, and how
            much time and access you have. But the following sequence works well across most
            contexts and keeps you from missing critical information.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="mt-6 space-y-4">
            {[
              {
                step: "1",
                heading: "Start with the business conversation",
                text: "Before you ask a single question about the audience or the content, get clear on why this training is being requested. What performance problem is it meant to solve? What does success look like from the organization's perspective? This framing shapes everything that follows.",
              },
              {
                step: "2",
                heading: "Identify and interview stakeholders",
                text: "Reach out to managers, subject matter experts, and — critically — people who are currently doing the job. You need perspectives from the top (business goals), the middle (process owners), and the ground level (the actual performers). Each group sees a different part of the problem.",
              },
              {
                step: "3",
                heading: "Gather data on the gap",
                text: "Use surveys, records, and observation to quantify and contextualize the gap. How widespread is the problem? Is it isolated to a particular team, role, or location? What does the performance data actually show? Grounding your analysis in evidence — not just anecdote — makes your recommendations credible.",
              },
              {
                step: "4",
                heading: "Investigate the cause",
                text: "Not all gaps are training problems. A gap caused by unclear processes, broken tools, misaligned incentives, or lack of management support won't be solved by a course — no matter how well-designed. Part of your job is distinguishing training needs from other organizational needs and flagging when a different kind of intervention is required.",
              },
              {
                step: "5",
                heading: "Document and present your findings",
                text: "A needs analysis isn't complete until it's communicated. Summarize what you found: the business goal, the performance gap, the root cause, your learner audience profile, and your recommended solution. This document becomes the project brief — the shared foundation that aligns you, your stakeholders, and your clients before a single slide is built.",
              },
            ].map(({ step, heading, text }) => (
              <div key={step} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-sm font-extrabold text-accent">
                  {step}
                </div>
                <div className="pt-0.5">
                  <h3 className="text-sm font-bold text-copy">{heading}</h3>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-copy-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Is Training the Right Solution? ─────────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
            Is Training Actually the Right Solution?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p>
            One of the most valuable things a needs analysis can reveal is that training
            isn&rsquo;t the answer. This is an uncomfortable finding to deliver — especially
            when a client has already mentally committed to building a course — but it&rsquo;s
            exactly the kind of honest insight that separates instructional designers from
            order-takers.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p>
            Performance problems are caused by many things. Thomas Gilbert&rsquo;s Behavior
            Engineering Model identifies six factors that influence performance: information
            (clear expectations and feedback), resources (tools, time, environment), incentives
            (meaningful consequences for performance), knowledge (skills and training), capacity
            (individual capability), and motivation (the will to perform). Training addresses
            only one of these. If the root cause is something else — a broken process, a
            management issue, a missing resource — no amount of training will fix it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p>
            Your job during needs analysis is to diagnose before you prescribe. If the
            investigation points to a training solution, great — you now have everything
            you need to design it well. If it points somewhere else, saying so is the
            most valuable thing you can do.
          </p>
        </ScrollReveal>

        {/* ── Common Mistakes ──────────────────────────────────────────────── */}
        <ScrollReveal>
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">The Most Common Mistake: Skipping This Step Entirely</h2>
            <div className="mt-3 space-y-3 text-sm font-medium leading-relaxed text-copy-muted">
              <p>
                The pressure to move fast is real. Stakeholders want training yesterday. Timelines
                compress. And needs analysis can feel like expensive preamble before the
                &ldquo;real work&rdquo; begins — so it gets skipped or rushed.
              </p>
              <p>
                Here&rsquo;s what that actually costs: you build something polished, on time, and
                completely misaligned with what learners needed. The training launches, completion
                rates look fine, and nothing changes on the job. Six months later, someone is
                asking why the training didn&rsquo;t work — and there&rsquo;s no good answer
                because the right questions were never asked at the start.
              </p>
              <p>
                Needs analysis isn&rsquo;t overhead. It&rsquo;s the work that makes everything
                else worth doing. Protect the time for it — and when stakeholders push back,
                frame it as risk reduction: a few days of investigation now versus weeks of
                redesign later.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Closing ──────────────────────────────────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
            The Bottom Line
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p>
            A needs analysis isn&rsquo;t a single task — it&rsquo;s a mindset. It&rsquo;s the
            commitment to understanding a problem before solving it. The five focus areas
            (organizational needs, gap analysis, learner analysis, task analysis, and
            environmental analysis) give you a framework for asking better questions and
            listening more carefully. The methods (interviews, surveys, observation, focus
            groups, document review) give you the tools to gather credible data across all of them.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p>
            The more relevant your investigation, the more effective your training will be.
            That&rsquo;s not a slogan — it&rsquo;s a practical truth that holds up every time.
            Take the time to investigate, and the design work that follows becomes clearer,
            faster, and far more likely to produce the change your clients are actually
            looking for.
          </p>
        </ScrollReveal>


      </ContentPage>
    </>
  )
}
