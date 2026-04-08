import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Link from "next/link"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Foundations Course and Certification",
  description:
    "Learn the basics of instructional design with Instructional Design Foundations, a beginner-friendly online course covering core principles, models, and best practices. Perfect for aspiring instructional designers, transitioning teachers, and curriculum designers looking to build a strong foundation and start creating effective learning experiences.",
  path: "/instructional-design-course",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Instructional Design Foundations course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional Design Foundations is a beginner-friendly online course offered by Instructional Design Central that teaches the core principles, language, and practices of instructional design. It is designed for aspiring instructional designers, transitioning teachers, and curriculum designers who want to build a strong foundation and start creating effective learning experiences.",
      },
    },
    {
      "@type": "Question",
      name: "What will I learn in the Instructional Design Foundations course?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the Instructional Design Foundations course, you will learn the core principles of instructional design, key instructional design models and frameworks, how to write learning objectives, the basics of needs analysis, how to design and develop effective learning experiences, and how to use AI tools and professional templates in your design workflow.",
      },
    },
  ],
}

const courseFeatures = [
  {
    title: "11 Lessons",
    description:
      "Four chapters, 11 lessons — and something to engage with in every single one. Videos, activities, quizzes, reflections, and downloads. You'll never just stare at a wall of text.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <circle cx="4" cy="6" r="2" fill="#f26522" opacity="0.9" />
        <rect x="9" y="5" width="11" height="2" rx="1" fill="#f26522" opacity="0.5" />
        <circle cx="4" cy="12" r="2" fill="#4a7bc4" opacity="0.9" />
        <rect x="9" y="11" width="9" height="2" rx="1" fill="#4a7bc4" opacity="0.45" />
        <circle cx="4" cy="18" r="2" stroke="#f26522" strokeWidth="1.5" fill="none" opacity="0.5" />
        <rect x="9" y="17" width="10" height="2" rx="1" fill="currentColor" opacity="0.15" />
        <rect x="0" y="22" width="24" height="1.5" rx="0.75" fill="currentColor" opacity="0.1" />
        <rect x="0" y="22" width="14" height="1.5" rx="0.75" fill="#f26522" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Videos",
    description:
      "Learn from Travis Jordan, Founder of IDC, through engaging video lessons that feel like a real conversation — demonstrating key ID principles the way he'd actually use them.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <rect x="1" y="4" width="16" height="12" rx="2" stroke="#4a7bc4" strokeWidth="1.5" opacity="0.8" />
        <path d="M17 9l6-4v14l-6-4V9z" fill="#4a7bc4" fillOpacity="0.5" stroke="#4a7bc4" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="9" cy="10" r="2.5" fill="#4a7bc4" opacity="0.2" />
        <path d="M8 8.8l3.5 1.2-3.5 1.2V8.8z" fill="#4a7bc4" opacity="0.9" />
      </svg>
    ),
  },
  {
    title: "Templates",
    description:
      "Hit the ground running with five professional ID templates included with the course — a $35 value. Built to use in your real work, not just sit in a downloads folder.",
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
      "Check your understanding as you go. Each quiz gives you immediate feedback so you know exactly what clicked — and what might need a second look before moving on.",
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
      "Take the learning offline. Downloadable handouts at the end of each chapter capture key points and visuals — great for reference, review, or sharing with your team.",
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
      "This course is built for active learning. Challenge activities, hot spots, interactive slides — you'll be doing things, not just watching.",
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
      "Learn on your terms, wherever you are. Fully mobile-responsive, so your phone or tablet works just as well as your laptop — no excuses, no friction.",
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
      "Real learning happens when you apply it. Challenge activities give you space to connect concepts to your actual work — and think through how you'd really use them.",
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
      "Each lesson comes with instructor-led discussion prompts so you can go deeper, ask questions, and hear how other learners are approaching the same material.",
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
      "Pass the final exam and earn a certificate you can share on LinkedIn or your resume — tangible proof of what you know and what you've built.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="#f26522" strokeWidth="1.5" opacity="0.7" fill="#f26522" fillOpacity="0.05" />
        <circle cx="12" cy="11" r="3.5" stroke="#f26522" strokeWidth="1.5" opacity="0.8" />
        <path d="M9.5 15l1.5 5 1-2 1 2 1.5-5" stroke="#f26522" strokeWidth="1.25" strokeLinejoin="round" opacity="0.6" />
        <path d="M10.5 10.5l1 1 2-2" stroke="#f26522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
        <rect x="5" y="7" width="4" height="1" rx="0.5" fill="#f26522" opacity="0.3" />
        <rect x="15" y="7" width="4" height="1" rx="0.5" fill="#f26522" opacity="0.3" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: "Paola",
    role: "IDC Enrolled Student",
    quote:
      "This course was extremely practical and very well structured. It surely left me with many concrete and defined goals in my learning path as an ID! Thank you :)",
  },
  {
    name: "Connie",
    role: "IDC Enrolled Student",
    quote:
      "I have 15+ years of experience as an instructional designer. I have to say, I was pleasantly surprised at how well it was presented with a nice mix of media, text, activities, and handouts. Kudos to IDC!",
  },
  {
    name: "Sarah",
    role: "IDC Enrolled Student",
    quote:
      "Throughout the training, the real, practical examples were particularly helpful. The information was presented in a logical, approachable way, with a good amount of interactivity, and kept me interested!",
  },
  {
    name: "Monica",
    role: "IDC Enrolled Student",
    quote:
      "I love how this course was put together. It was the right mix of media to reading. It was VERY informative and I would recommend this course to anyone wanting to start their journey into the Instructional Design and Development field.",
  },
]

const chapters = [
  {
    number: "01",
    title: "Instructional Design Overview",
    lessons: [
      "Identify definitions of instructional design and the various roles of an instructional designer.",
      "Describe the various jobs, requirements, and career paths for instructional designers.",
      "Identify the history of instructional design and how it impacts the field today.",
    ],
  },
  {
    number: "02",
    title: "Learning Theory and Principles",
    lessons: [
      "Recognize how learning theory impacts current instructional design practices.",
      "Recognize five key learning principles that influence instructional design methods.",
      "Apply the core principles and assumptions of adult learning.",
    ],
  },
  {
    number: "03",
    title: "Applying Instructional Design",
    lessons: [
      "Use instructional design models to create effective learning products.",
      "Create core artifacts as a part of the instructional design process.",
      "Work with Subject Matter Experts to gather, organize, and deliver learning products.",
    ],
  },
  {
    number: "04",
    title: "Instructional Design Tools",
    lessons: [
      "Select the right tools to deliver the right learning product to your learners.",
      "Determine how to appropriately use media to achieve learning outcomes.",
    ],
  },
]

const courseBenefits = [
  { label: "11 Lessons" },
  { label: "4 Quizzes" },
  { label: "5 Templates" },
  { label: "Discussion Groups" },
  { label: "Final Exam" },
  { label: "Certificate" },
]

export default function IDFoundationsCourse() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero
        title="Instructional Design Foundations Course and Certificate"
        subtitle="Build the confidence and skills to design learning experiences that truly make a difference."
        cta={{ label: "Enroll Now", href: "#enroll" }}
      />

      {/* Intro paragraph */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            Whether you&rsquo;re brand new to instructional design or looking to fill in the gaps, this course gives you a real foundation — the kind that changes how you approach every project. Over 11 engaging lessons, you&rsquo;ll learn how to apply core ID principles in real-world scenarios, not just theory. You&rsquo;ll walk away knowing how to design learning that genuinely works for your learners, with access to premium templates that speed up your workflow and make your work look polished from day one. If you&rsquo;ve been doing this by instinct and wondering if there&rsquo;s a better way — there is, and this is it.
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
              You&rsquo;ll start with the foundations — what instructional design is, what the role looks like, and where the field is heading. From there, you&rsquo;ll move into learning theory and the principles that shape how people actually learn. You&rsquo;ll finish by putting it all together: working with ID models, creating real design artifacts, and choosing the right tools for the job. By the end, you&rsquo;ll have a clear picture of the full design process — and exactly where you fit in it.
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
                              <span className="font-bold text-copy-muted">Lesson {(i === 0 ? 0 : i === 1 ? 3 : i === 2 ? 6 : 9) + li + 1}:</span>{" "}
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
                Join 2,500+ instructional designers who&rsquo;ve already taken this course and walked away with the skills, confidence, and certificate to show for it.
              </p>
              <Link
                href="#enroll"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Enroll Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
