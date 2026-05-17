import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Link from "next/link"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Templates",
  description:
    "Access FREE instructional design & training plan templates. These templates include an ADDIE template, storyboard template & training needs assessment template.",
  path: "/instructionaldesigntemplates",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many templates are included in the package?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Instructional Design Template Kit includes 13 premium templates: ADDIE Template, The Learning Circle Kit™, Instructional Design Document Template, Needs Analysis Template, Training Plan Template, The Learning Design Canvas™, LMS Evaluation Tool, eLearning Evaluation Tool, Course Roadmap Template, Course Evaluation Plan Template, Storyboard Template, Project Plan Template, and Job Aid Template.",
      },
    },
    {
      "@type": "Question",
      name: "What file formats are the templates available in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All templates are available in Microsoft Word (.docx), PowerPoint (.pptx), and Adobe Acrobat (.pdf) formats. They are ready for immediate digital download upon purchase.",
      },
    },
    {
      "@type": "Question",
      name: "How many licenses are included with purchase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your purchase includes unlimited licensing. You may share these templates with your colleagues and clients. However, these templates may not be used for resale purposes.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find free instructional design templates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional Design Central offers a comprehensive library of free instructional design templates including ADDIE model templates, storyboard templates, training needs assessment templates, project plan templates, and more. These templates are designed to help instructional designers accelerate their workflow and maintain consistency across projects.",
      },
    },
  ],
}

const kitFeatures = [
  {
    title: "13 Premium Templates",
    description:
      "The full IDC collection in one kit — every template you need to take a project from needs analysis all the way through evaluation. No gaps, no piecemeal downloads.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <rect x="3" y="2" width="18" height="20" rx="2" stroke="#f26522" strokeWidth="1.5" opacity="0.7" />
        <rect x="6" y="6" width="12" height="2" rx="1" fill="#f26522" opacity="0.6" />
        <rect x="6" y="10" width="7" height="1.5" rx="0.75" fill="currentColor" opacity="0.25" />
        <rect x="6" y="13" width="10" height="1.5" rx="0.75" fill="currentColor" opacity="0.2" />
        <rect x="6" y="16" width="5" height="1.5" rx="0.75" fill="currentColor" opacity="0.2" />
        <rect x="13" y="10" width="5" height="6" rx="1" fill="#f26522" opacity="0.15" stroke="#f26522" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Editable Formats",
    description:
      "Customize everything in Microsoft Word (.docx), PowerPoint (.pptx), or Adobe Acrobat (.pdf) — whichever fits your workflow. Your branding, your structure, your way.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#4a7bc4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#4a7bc4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#4a7bc4" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    title: "Instant Download",
    description:
      "No waiting, no shipping, no follow-up email. Purchase today and you&rsquo;ll have all 13 templates in your hands within seconds — ready to use on your next project.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <rect x="4" y="2" width="13" height="16" rx="2" stroke="#f26522" strokeWidth="1.5" opacity="0.7" />
        <path d="M17 6l3 0v14a2 2 0 01-2 2H6" stroke="#f26522" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M10 7v7m0 0l-2.5-2.5M10 14l2.5-2.5" stroke="#f26522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        <rect x="7" y="17.5" width="6" height="1.5" rx="0.75" fill="#f26522" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Unlimited Licensing",
    description:
      "Use these with your whole team and your clients. Your purchase comes with unlimited licensing so you can share freely — the only restriction is resale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <circle cx="9" cy="7" r="4" stroke="#4a7bc4" strokeWidth="1.5" opacity="0.8" fill="#4a7bc4" fillOpacity="0.08" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="#4a7bc4" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <path d="M16 3.13a4 4 0 010 7.75" stroke="#4a7bc4" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
        <path d="M21 21v-2a4 4 0 00-3-3.87" stroke="#4a7bc4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Industry-Standard Design",
    description:
      "Built on real instructional design methodology — not generic document templates. Each one follows established ID frameworks so your work is grounded from the start.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <circle cx="12" cy="10" r="4.5" stroke="#f26522" strokeWidth="1.5" opacity="0.8" fill="#f26522" fillOpacity="0.08" />
        <path d="M9.5 14.5l1.5 5.5 1-2.5 1 2.5 1.5-5.5" stroke="#f26522" strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round" opacity="0.7" />
        <path d="M10.5 9.5l1.2 1.2 2.5-2.5" stroke="#f26522" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
      </svg>
    ),
  },
  {
    title: "Professional Polish",
    description:
      "These aren&rsquo;t rough outlines — they&rsquo;re elegant, fully formatted documents you can hand to a stakeholder or client with confidence. First impressions matter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <path d="M12 2l2.5 5 5.5.8-4 3.9.95 5.5L12 14.5 7.05 17.2 8 11.7 4 7.8l5.5-.8L12 2z" fill="#4a7bc4" fillOpacity="0.18" stroke="#4a7bc4" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10.5 8.5l1 1 2.5-2.5" stroke="#4a7bc4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </svg>
    ),
  },
]

const templates = [
  { name: "ADDIE Template", description: "A structured, phase-by-phase template for applying the ADDIE framework to any training or course project." },
  { name: "The Learning Circle Kit™", description: "IDC's proprietary framework for building collaborative, community-based learning experiences." },
  { name: "Instructional Design Document Template", description: "Capture your full design plan — objectives, strategies, content outline, and assessments — in one polished document." },
  { name: "Needs Analysis Template", description: "Systematically identify performance gaps, root causes, and the learning solutions that will actually move the needle." },
  { name: "Training Plan Template", description: "Map out your full training initiative — timelines, deliverables, audience, and rollout strategy — all in one place." },
  { name: "The Learning Design Canvas™", description: "IDC's one-page visual planning tool for designing learning experiences with speed and clarity." },
  { name: "LMS Evaluation Tool", description: "Objectively compare and score learning management systems so you can confidently recommend the right platform." },
  { name: "eLearning Evaluation Tool", description: "Assess the quality, effectiveness, and design of eLearning courses against key instructional criteria." },
  { name: "Course Roadmap Template", description: "Visualize your full course structure — modules, lessons, and sequence — before a single piece of content is built." },
  { name: "Course Evaluation Plan Template", description: "Plan how you&rsquo;ll measure course effectiveness across all four levels — from learner reaction to business impact." },
  { name: "Storyboard Template", description: "Map out screen-by-screen interactions, narration, and media in a format your development team can actually use." },
  { name: "Project Plan Template", description: "Keep your ID projects on track with milestones, owners, timelines, and dependencies all organized in one view." },
  { name: "Job Aid Template", description: "Design clean, usable performance support tools — checklists, quick references, and step-by-step guides your learners will actually reach for." },
]

const testimonials = [
  {
    name: "Sabrina",
    role: "Instructional Designer",
    quote:
      "The instructional design templates very clearly guide you through the design process, from performing a needs analysis to evaluating program effectiveness. They are an asset to any organization that needs to create training!",
  },
  {
    name: "Andrew",
    role: "Learning Business Partner",
    quote:
      "A fantastic template that is both comprehensive and flexible in its application!",
  },
  {
    name: "Jeff",
    role: "eLearning Development Manager",
    quote:
      "These templates are awesome! They give me a great starting point and help me cover all the different points of instructional design. Highly recommend them.",
  },
]

const kitIncludes = [
  { label: "13 Templates" },
  { label: "Word (.docx)" },
  { label: "PowerPoint (.pptx)" },
  { label: "PDF (.pdf)" },
  { label: "Instant Download" },
  { label: "Unlimited Licensing" },
]

const BUY_URL = "https://idcentral.thinkific.com/enroll/3772688?price_id=4729577"

export default function TemplatesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero
        title="Instructional Design Template Kit"
        subtitle="Everything you need to design, document, and deliver exceptional learning experiences — in one professional kit."
        cta={{ label: "Buy Now", href: BUY_URL, target: "_blank" }}
      />

      {/* Intro paragraph */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            If you&rsquo;ve ever started a project staring at a blank document — this kit is for you. IDC&rsquo;s Instructional Design Template Kit gives you 13 meticulously designed templates that cover every phase of the design process, from the first conversation with a stakeholder to the final evaluation report. They&rsquo;re built to be used in real work, not just referenced and forgotten. Fully customizable in Word, PowerPoint, or PDF, they&rsquo;re the kind of tools that make you look polished immediately — and help you think more clearly about your design at the same time.
          </p>
        </ScrollReveal>
      </section>

      {/* Kit Features */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">What&rsquo;s Inside</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Kit Features
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {kitFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={(i % 2 + 1) as 1 | 2} className="h-full">
                <div className="flex h-full gap-5 rounded-card border border-edge bg-surface-2 p-6 shadow-card transition-all duration-200 hover:border-edge-hover">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
                    {feature.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-heading">
                      {feature.title}
                    </h3>
                    <div className="mt-1.5 h-0.5 w-6 rounded bg-accent" />
                    <p
                      className="mt-3 text-sm font-medium leading-relaxed text-copy-muted"
                      dangerouslySetInnerHTML={{ __html: feature.description }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Template List */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">The Full Collection</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              All 13 Templates Included
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              One kit, every phase covered. Here&rsquo;s exactly what you&rsquo;re getting.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-4">
            {templates.map((template, i) => (
              <ScrollReveal key={template.name} delay={(i % 2 + 1) as 1 | 2}>
                <div className="flex items-start gap-4 rounded-card border border-edge bg-surface-2 p-5 shadow-card">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] text-sm font-extrabold tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-extrabold tracking-tight text-heading">{template.name}</h3>
                    <p
                      className="mt-1 text-sm font-medium leading-relaxed text-copy-muted"
                      dangerouslySetInnerHTML={{ __html: template.description }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-edge bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">What People Are Saying</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Testimonials
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={(i % 3 + 1) as 1 | 2 | 3} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-edge bg-surface p-6 shadow-card">
                  <div className="mb-4">
                    <p className="text-sm font-extrabold tracking-wide text-accent">{t.name}</p>
                    <p className="mt-0.5 text-xs font-semibold text-copy-muted">{t.role}</p>
                  </div>
                  <div className="h-0.5 w-6 rounded bg-accent opacity-60" />
                  <p className="mt-4 flex-1 text-sm font-medium italic leading-relaxed text-copy-muted">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5">
                    <svg className="h-7 w-7 text-accent opacity-60" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page Buy CTA */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 rounded-card border border-edge bg-surface-2 p-10 text-center shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Ready to Get Started?</p>
              <h2
                className="font-extrabold tracking-tight text-heading"
                style={{ fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-0.04rem" }}
              >
                The complete kit, ready to use today.
              </h2>
              <p className="max-w-md text-sm font-medium leading-relaxed text-copy-muted">
                Thirteen professional templates, every format you need, unlimited sharing with your team and clients. One purchase. Instant access.
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-heading">$36</span>
                <span className="text-3xl font-extrabold text-copy-muted line-through opacity-50">$60</span>
                <span className="rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-xs font-bold text-accent">Save 40%</span>
              </div>
              <Link
                href={BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Buy Now
              </Link>
              <p className="text-xs text-copy-muted opacity-70">One-time payment &middot; Instant download &middot; Unlimited licensing</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Kit Details + Bottom CTA */}
      <section id="buy" className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Everything Included</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              What You Get With This Kit
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              One purchase covers it all. Here&rsquo;s exactly what&rsquo;s waiting for you.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {kitIncludes.map((item, i) => (
              <ScrollReveal key={item.label} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <div className="flex items-center gap-3 rounded-card border border-edge bg-surface p-4 shadow-card">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)]">
                    <svg className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-heading">{item.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={1}>
            <div className="mt-12 flex flex-col items-center gap-4 rounded-card border border-edge bg-surface-2 p-10 text-center shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Ready to Start?</p>
              <h3
                className="font-extrabold tracking-tight text-heading"
                style={{ fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-0.04rem" }}
              >
                Dazzle like a pro — starting today.
              </h3>
              <p className="max-w-md text-sm font-medium leading-relaxed text-copy-muted">
                Everything your instructional design practice needs to look sharp, move fast, and deliver work you&rsquo;re proud of. One kit, unlimited use.
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-heading">$36</span>
                <span className="text-3xl font-extrabold text-copy-muted line-through opacity-50">$60</span>
                <span className="rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-xs font-bold text-accent">Save 40%</span>
              </div>
              <Link
                href={BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Buy Now
              </Link>
              <p className="text-xs text-copy-muted opacity-70">One-time payment &middot; Instant download &middot; Unlimited licensing &middot; Not for resale</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
