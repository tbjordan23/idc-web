import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Link from "next/link"

export const metadata: Metadata = generatePageMetadata({
  title: "ADDIE Model Course",
  description:
    "Master the ADDIE instructional design model with this practical, expert-led course. Learn to design, develop, and evaluate effective learning experiences using industry-proven methods. Enroll today to boost your instructional design skills.",
  path: "/addie-model-course",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Mastering the ADDIE Model course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mastering the ADDIE Model is a practical, project-based online course offered by Instructional Design Central. It walks instructional designers step-by-step through the ADDIE framework — Analysis, Design, Development, Implementation, and Evaluation — giving learners the skills to design and build effective courses. The course includes a professional certificate upon completion.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the ADDIE Model course for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Mastering the ADDIE Model course is ideal for instructional designers who want to deepen their understanding and application of the ADDIE framework, as well as trainers, educators, and curriculum designers looking to apply a structured design process to their work. It is suitable for anyone from beginners to experienced practitioners looking to strengthen their design process.",
      },
    },
    {
      "@type": "Question",
      name: "What will I be able to do after completing the ADDIE Model course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After completing this course, you will be able to apply the full ADDIE framework to your own design projects, conduct needs analyses, write measurable learning objectives, build a design document, develop learning content strategically, and evaluate the effectiveness of your courses. You will also earn a professional certificate upon passing the final exam.",
      },
    },
  ],
}

const courseFeatures = [
  {
    title: "11 Lessons",
    description:
      "Four chapters, 11 focused lessons walking you through every phase of ADDIE — with concrete examples, tools, and activities built in at every step.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <circle cx="4" cy="6" r="2" fill="#f26522" opacity="0.9" />
        <rect x="9" y="5" width="11" height="2" rx="1" fill="#f26522" opacity="0.5" />
        <circle cx="4" cy="12" r="2" fill="#4a7bc4" opacity="0.9" />
        <rect x="9" y="11" width="9" height="2" rx="1" fill="#4a7bc4" opacity="0.45" />
        <circle cx="4" cy="18" r="2" stroke="#f26522" strokeWidth="1.5" fill="none" opacity="0.5" />
        <rect x="9" y="17" width="10" height="2" rx="1" fill="currentColor" opacity="0.15" />
      </svg>
    ),
  },
  {
    title: "Videos",
    description:
      "Travis Jordan walks you through each ADDIE phase in real video lessons — showing you how the framework applies to actual design decisions, not just theory.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <rect x="1" y="4" width="16" height="12" rx="2" stroke="#4a7bc4" strokeWidth="1.5" opacity="0.8" />
        <path d="M17 9l6-4v10l-6-4V9z" fill="#4a7bc4" fillOpacity="0.5" stroke="#4a7bc4" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="9" cy="10" r="3" fill="#4a7bc4" opacity="0.2" />
        <path d="M7.8 8.5l4 1.5-4 1.5V8.5z" fill="#4a7bc4" opacity="0.9" />
      </svg>
    ),
  },
  {
    title: "Templates",
    description:
      "Walk away with ADDIE-ready templates you can use immediately — needs analysis forms, design documents, evaluation plans, and more.",
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
    title: "Quizzes",
    description:
      "Check your understanding phase by phase. Each quiz reinforces what you've just learned and gives you immediate feedback to keep you on track.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="#f26522" strokeWidth="1.5" opacity="0.7" />
        <circle cx="6" cy="8" r="1.5" fill="#f26522" opacity="0.9" />
        <path d="M4.5 8l1 1 2-2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="10" y="7" width="9" height="2" rx="1" fill="currentColor" opacity="0.2" />
        <circle cx="6" cy="13" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <rect x="10" y="12" width="9" height="2" rx="1" fill="currentColor" opacity="0.15" />
        <circle cx="6" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <rect x="10" y="17" width="6" height="2" rx="1" fill="currentColor" opacity="0.15" />
      </svg>
    ),
  },
  {
    title: "Course Downloads",
    description:
      "Printable chapter handouts capture key points from each ADDIE phase — a go-to reference you can keep at your desk and use on real projects.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <rect x="4" y="2" width="13" height="16" rx="2" stroke="#4a7bc4" strokeWidth="1.5" opacity="0.7" />
        <path d="M17 6l3 0v14a2 2 0 01-2 2H6" stroke="#4a7bc4" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M10 7v7m0 0l-2.5-2.5M10 14l2.5-2.5" stroke="#4a7bc4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        <rect x="7" y="17.5" width="6" height="1.5" rx="0.75" fill="#4a7bc4" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Interactive Activities",
    description:
      "Apply ADDIE as you go — interactive activities put you in the designer's seat so you're practicing the process, not just reading about it.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" stroke="#f26522" strokeWidth="1.5" opacity="0.2" />
        <circle cx="12" cy="12" r="3" fill="#f26522" opacity="0.6" />
        <circle cx="5" cy="6" r="1.5" fill="#4a7bc4" opacity="0.5" />
        <circle cx="19" cy="6" r="1.5" fill="#f26522" opacity="0.5" />
        <circle cx="19" cy="18" r="1.5" fill="#4a7bc4" opacity="0.5" />
        <circle cx="5" cy="18" r="1.5" fill="#f26522" opacity="0.4" />
        <line x1="7" y1="7" x2="10.5" y2="10.5" stroke="#f26522" strokeWidth="1" opacity="0.35" />
        <line x1="17" y1="7" x2="13.5" y2="10.5" stroke="#4a7bc4" strokeWidth="1" opacity="0.35" />
        <line x1="17" y1="17" x2="13.5" y2="13.5" stroke="#4a7bc4" strokeWidth="1" opacity="0.35" />
        <line x1="7" y1="17" x2="10.5" y2="13.5" stroke="#f26522" strokeWidth="1" opacity="0.35" />
      </svg>
    ),
  },
  {
    title: "Mobile Ready",
    description:
      "Take the course wherever you are. Fully responsive so you can work through the ADDIE phases on any device, on your own schedule.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <rect x="5" y="1" width="14" height="22" rx="3" stroke="#4a7bc4" strokeWidth="1.5" opacity="0.8" />
        <circle cx="12" cy="19.5" r="1" fill="#4a7bc4" opacity="0.6" />
        <rect x="9" y="3.5" width="6" height="1" rx="0.5" fill="#4a7bc4" opacity="0.4" />
        <rect x="8" y="7" width="8" height="1.5" rx="0.75" fill="currentColor" opacity="0.2" />
        <rect x="8" y="10" width="6" height="1.5" rx="0.75" fill="currentColor" opacity="0.15" />
        <rect x="8" y="13" width="7" height="1.5" rx="0.75" fill="currentColor" opacity="0.15" />
      </svg>
    ),
  },
  {
    title: "Challenge Activities",
    description:
      "Each challenge puts you inside a realistic design scenario — so when you finish the course, you've already practiced ADDIE in context.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <path d="M12 2l2.5 5 5.5.8-4 3.9.95 5.5L12 14.5 7.05 17.2 8 11.7 4 7.8l5.5-.8L12 2z" fill="#f26522" fillOpacity="0.18" stroke="#f26522" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 21h6m-3-3v3" stroke="#f26522" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M10.5 8.5l1 1 2.5-2.5" stroke="#f26522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      </svg>
    ),
  },
  {
    title: "Discussions",
    description:
      "Work through real design decisions alongside other learners. Instructor-led prompts for each lesson mean your questions and insights belong in the conversation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#4a7bc4" strokeWidth="1.5" strokeLinejoin="round" fill="#4a7bc4" fillOpacity="0.07" />
        <rect x="7" y="8" width="10" height="1.5" rx="0.75" fill="#4a7bc4" opacity="0.45" />
        <rect x="7" y="11.5" width="7" height="1.5" rx="0.75" fill="#4a7bc4" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Professional Certificate",
    description:
      "Complete the final exam and earn a certificate that shows you know ADDIE inside and out — ready to share on LinkedIn or with employers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <circle cx="12" cy="10" r="4.5" stroke="#f26522" strokeWidth="1.5" opacity="0.8" fill="#f26522" fillOpacity="0.08" />
        <path d="M9.5 14.5l1.5 5.5 1-2.5 1 2.5 1.5-5.5" stroke="#f26522" strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round" opacity="0.7" />
        <path d="M10.5 9.5l1.2 1.2 2.5-2.5" stroke="#f26522" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: "Patty Shank",
    role: "Learning Designer and Author of Practice and Feedback for Deeper Learning",
    quote:
      "ADDIE isn't outdated—it's timeless. When applied correctly, it supports innovation while keeping learning grounded in real goals and measurable results.",
  },
  {
    name: "Connie Malamed",
    role: "Learning Experience Designer and author of Visual Design Solutions",
    quote:
      "ADDIE remains the gold standard in instructional design—its structured yet flexible framework allows designers to create learning that truly meets learner and business needs.",
  },
  {
    name: "Michael Allen",
    role: "CEO of Allen Interactions and pioneer in eLearning",
    quote:
      "Even in an agile world, the principles behind ADDIE provide a critical foundation for thoughtful, learner-centered design.",
  },
  {
    name: "Julie Dirksen",
    role: "Learning Strategist and author of Design for How People Learn",
    quote:
      "Instructional designers who understand ADDIE aren't just building content—they're building strategy, outcomes, and impact.",
  },
]

const chapters = [
  {
    number: "01",
    title: "ADDIE Model Overview",
    lessonStart: 1,
    lessons: [
      "Understand the history, purpose, and phases of the ADDIE framework.",
      "Recognize how ADDIE connects to other instructional design models and approaches.",
      "Identify how ADDIE applies across both traditional and agile design workflows.",
    ],
  },
  {
    number: "02",
    title: "Analysis Phase",
    lessonStart: 4,
    lessons: [
      "Conduct a performance needs analysis to identify the root cause of learning gaps.",
      "Analyze your learner audience — prior knowledge, context, motivation, and environment.",
      "Define clear, measurable learning goals aligned to organizational objectives.",
      "Determine project constraints, delivery requirements, and available resources.",
    ],
  },
  {
    number: "03",
    title: "Design Phase",
    lessonStart: 8,
    lessons: [
      "Write measurable learning objectives using Bloom's Taxonomy.",
      "Plan your instructional strategy, content sequencing, and course outline.",
      "Select appropriate instructional methods and media for your learner audience.",
      "Create a design document to align stakeholders before development begins.",
    ],
  },
  {
    number: "04",
    title: "Development Phase",
    lessonStart: 12,
    lessons: [
      "Build learning content, activities, and media using your design document as a blueprint.",
      "Apply formative evaluation strategies to test and refine content during development.",
      "Collaborate with subject matter experts (SMEs) to ensure accuracy and relevance.",
    ],
  },
  {
    number: "05",
    title: "Implementation Phase",
    lessonStart: 15,
    lessons: [
      "Prepare learners, facilitators, and systems for a successful course rollout.",
      "Identify and address potential barriers to participation and engagement.",
      "Manage the transition from development to live delivery with confidence.",
    ],
  },
  {
    number: "06",
    title: "Evaluation Phase",
    lessonStart: 18,
    lessons: [
      "Apply Kirkpatrick's Four Levels of Evaluation to assess course effectiveness.",
      "Design summative assessments that measure achievement of learning objectives.",
      "Use evaluation data to revise, improve, and scale your learning solutions over time.",
    ],
  },
]

const courseBenefits = [
  { label: "6 Lessons" },
  { label: "6 Quizzes" },
  { label: "ChatGPT AI Agent" },
  { label: "10 Templates" },
  { label: "Discussion Groups" },
  { label: "Final Exam" },
  { label: "Shareable Certificate" },
]

const ENROLL_URL = "https://idcentral.thinkific.com/order?ct=a6e82386-6144-475c-9a84-23f2c5cda2ff"

export default function ADDIECourse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero
        title="ADDIE Model Course and Certificate"
        subtitle="Learn the framework the pros trust — and walk away knowing how to use it in your own work."
        cta={{ label: "Enroll Now", href: ENROLL_URL, target: "_blank" }}
      />

      {/* Intro paragraph */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            The ADDIE Model is the framework most experienced instructional designers reach for — and once you understand how to use it, you&rsquo;ll see why. This course breaks ADDIE down into practical, flexible steps you can apply whether you&rsquo;re working in a traditional environment or an agile one. From analyzing learner needs to evaluating real-world impact, you&rsquo;ll finish knowing how to design courses that are intentional, scalable, and built to actually work. Whether you&rsquo;re new to ID, coming from a teaching background, or looking to sharpen what you already know — this is the course that takes you from instinct to process.
          </p>
        </ScrollReveal>
      </section>

      {/* Course Features */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">What&rsquo;s Inside</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Course Features
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {courseFeatures.map((feature, i) => (
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
                    <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-edge py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Student Stories</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Course Testimonials
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={(i % 4 + 1) as 1 | 2 | 3 | 4} className="h-full">
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
          <ScrollReveal delay={1}>
            <div className="mt-12 flex flex-col items-center gap-2 text-center">
              <p className="text-xl font-extrabold tracking-tight text-heading">2,500+ Enrollments</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mid-page Enroll CTA */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 rounded-card border border-edge bg-surface-2 p-10 text-center shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Ready to Start?</p>
              <h2
                className="font-extrabold tracking-tight text-heading"
                style={{ fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-0.04rem" }}
              >
                Your next step starts here.
              </h2>
              <p className="max-w-md text-sm font-medium leading-relaxed text-copy-muted">
                Join thousands of instructional designers who&rsquo;ve made ADDIE their go-to framework — and walked away with the confidence and certificate to prove it.
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-heading">$75</span>
                <span className="text-3xl font-extrabold text-copy-muted line-through opacity-50">$100</span>
                <span className="rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-xs font-bold text-accent">Save 25%</span>
              </div>
              <Link
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Enroll Now
              </Link>
              <p className="text-xs text-copy-muted opacity-70">One-time payment &middot; Lifetime access &middot; Certificate included</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">What You&rsquo;ll Learn</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Course Curriculum and Outcomes
            </h2>
            <p className="mt-5 text-base font-medium leading-relaxed text-copy-muted">
              You&rsquo;ll start by getting oriented on ADDIE — what it is, where it came from, and how it fits into the way real designers work. From there, you&rsquo;ll move through each phase in depth: analyzing needs, designing with intention, building with strategy, and evaluating with purpose. By the end, you won&rsquo;t just know what ADDIE stands for — you&rsquo;ll know how to use it.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-6">
            {chapters.map((chapter, i) => (
              <ScrollReveal key={chapter.number} delay={(i % 2 + 1) as 1 | 2}>
                <div className="rounded-card border border-edge bg-surface-2 p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] text-sm font-extrabold tabular-nums text-accent">
                      {chapter.number}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-extrabold tracking-tight text-heading">
                        {chapter.title}
                      </h3>
                      <div className="mt-1.5 h-0.5 w-8 rounded bg-accent opacity-60" />
                      <ul className="mt-4 space-y-2.5">
                        {chapter.lessons.map((lesson, li) => (
                          <li key={li} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)]">
                              <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-sm font-medium leading-relaxed text-copy-muted">
                              <span className="font-bold text-copy-muted">
                                Lesson {chapter.lessonStart + li}:
                              </span>{" "}
                              {lesson}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Course Benefits + Enroll CTA */}
      <section id="enroll" className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Everything Included</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              What You Get With This Course
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              One enrollment, everything you need. Here&rsquo;s what&rsquo;s waiting for you inside.
            </p>
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {courseBenefits.map((benefit, i) => (
              <ScrollReveal key={benefit.label} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <div className="flex items-center gap-3 rounded-card border border-edge bg-surface p-4 shadow-card">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)]">
                    <svg className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-heading">{benefit.label}</span>
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
                Your next step starts here.
              </h3>
              <p className="max-w-md text-sm font-medium leading-relaxed text-copy-muted">
                Join thousands of instructional designers who&rsquo;ve made ADDIE their go-to framework — and walked away with the confidence and certificate to prove it.
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-heading">$75</span>
                <span className="text-3xl font-extrabold text-copy-muted line-through opacity-50">$100</span>
                <span className="rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-xs font-bold text-accent">Save 25%</span>
              </div>
              <Link
                href={ENROLL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Enroll Now
              </Link>
              <p className="text-xs text-copy-muted opacity-70">One-time payment &middot; Lifetime access &middot; Certificate included</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
