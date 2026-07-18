import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Link from "next/link"
import CourseScreenshotCarousel, { type CourseScreenshot } from "@/components/ui/CourseScreenshotCarousel"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Foundations Course and Certification",
  description:
    "Learn instructional design with this beginner-friendly course. Covers core principles, models, and best practices — ideal for career changers and new IDs.",
  path: "/instructional-design-course",
  ogImage: "/course-id-foundations.png",
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

const foundationsScreenshots: CourseScreenshot[] = [
  {
    src: "/course-screenshots/foundations/what-is-id-lesson.png",
    alt: "Course interface showing the What is Instructional Design lesson with sidebar navigation",
    caption: "Clean, distraction-free lesson layout with full course navigation in the sidebar",
  },
  {
    src: "/course-screenshots/foundations/learning-theory-lesson.png",
    alt: "Learning Theory lesson showing an embedded video with the course title card",
    caption: "Clean, instructive illustrations with built-in learner interaction",
  },
  {
    src: "/course-screenshots/foundations/learning-theories-venn.png",
    alt: "Common Learning Theories Venn diagram showing Behaviorism, Cognitivism, and Constructivism",
    caption: "Downloadable lessons with rich visual content and illustrations",
  },
  {
    src: "/course-screenshots/foundations/knowledge-check.png",
    alt: "Knowledge Check quiz showing a multi-select question with checkboxes",
    caption: "Lesson quizzes give you immediate feedback so you know exactly where you stand",
  },
  {
    src: "/course-screenshots/foundations/overview-addie-video.png",
    alt: "Video lesson overview inside the Foundations course",
    caption: "Video lessons walk you through each concept clearly — see exactly how it applies before diving in",
  },
  {
    src: "/course-screenshots/foundations/id-history-timeline.png",
    alt: "Interactive timeline of instructional design history from 1944 to 2020 and beyond",
    caption: "Interactive timelines and infographics make complex history easy to navigate",
  },
  {
    src: "/course-screenshots/foundations/discussions-2.png",
    alt: "Course discussion panel showing instructor and student conversation",
    caption: "Instructor-led discussions on every lesson — ask questions, share insights, connect with other learners",
  },
  {
    src: "/course-screenshots/foundations/community-forum-2.png",
    alt: "Online community discussion forum with learners engaging on course topics",
    caption: "A built-in community keeps you connected — post questions, share ideas, and learn alongside other ID professionals",
  },
  {
    src: "/course-screenshots/foundations/course-management-2.png",
    alt: "Learner dashboard showing enrolled courses, progress tracking, and certificate downloads",
    caption: "Your personal dashboard puts everything in one place — track progress across all your courses and download your certificate when you're done",
  },
  {
    src: "/course-screenshots/foundations/activity-slide.png",
    alt: "Course activity slide showing a visual scenario",
    caption: "Visual activities and scenarios throughout keep the experience engaging",
  },
  {
    src: "/course-screenshots/foundations/template-downloads.png",
    alt: "Template downloads available inside the course",
    caption: "Professional ID templates included — download and start using them in your real work immediately",
  },
  {
    src: "/course-screenshots/foundations/certificate.png",
    alt: "Certificate of Completion for Instructional Design Foundations",
    caption: "Earn a professional certificate you can share on LinkedIn or include in your portfolio",
  },
]

const courseFeatures = [
  {
    title: "11 Lessons",
    description:
      "Four chapters, 11 lessons — and something to engage with in every single one. Videos, activities, quizzes, reflections, and downloads. You'll never just stare at a wall of text.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Videos",
    description:
      "Learn from Travis Jordan, Founder of IDC, through engaging video lessons that feel like a real conversation — demonstrating key ID principles the way he'd actually use them.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Templates",
    description:
      "Hit the ground running with five professional ID templates included with the course — a $35 value. Built to use in your real work, not just sit in a downloads folder.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Quizzes",
    description:
      "Check your understanding as you go. Each quiz gives you immediate feedback so you know exactly what clicked — and what might need a second look before moving on.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Course Downloads",
    description:
      "Take the learning offline. Downloadable handouts at the end of each chapter capture key points and visuals — great for reference, review, or sharing with your team.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    title: "Interactive Activities",
    description:
      "This course is built for active learning. Challenge activities, hot spots, interactive slides — you'll be doing things, not just watching.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Mobile Ready",
    description:
      "Learn on your terms, wherever you are. Fully mobile-responsive, so your phone or tablet works just as well as your laptop — no excuses, no friction.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Challenge Activities",
    description:
      "Real learning happens when you apply it. Challenge activities give you space to connect concepts to your actual work — and think through how you'd really use them.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Discussions",
    description:
      "Each lesson comes with instructor-led discussion prompts so you can go deeper, ask questions, and hear how other learners are approaching the same material.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Professional Certificate",
    description:
      "Pass the final exam and earn a certificate you can share on LinkedIn or your resume — tangible proof of what you know and what you've built.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
        cta={{ label: "Enroll Now", href: "https://idcentral.thinkific.com/courses/instructional-design-foundations-course/enroll", target: "_blank" }}
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

      {/* Course Preview Carousel */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Course Preview</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Take a Look Inside
            </h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-copy-muted">
              Real screenshots from the actual course. No mock-ups — this is exactly what you&rsquo;ll experience when you enroll.
            </p>
          </ScrollReveal>
          <div className="mt-8">
            <CourseScreenshotCarousel screenshots={foundationsScreenshots} />
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                Summer Promo
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Ready to Start?</p>
              <h2
                className="font-extrabold tracking-tight text-heading"
                style={{ fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-0.04rem" }}
              >
                Your next step starts here.
              </h2>
              <p className="max-w-md text-sm font-medium leading-relaxed text-copy-muted">
                Join 2,500+ instructional designers who&rsquo;ve already taken this course and walked away with the skills, confidence, and certificate to show for it.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-heading">$75</span>
                <span className="text-3xl font-extrabold text-copy-muted line-through opacity-50">$100</span>
                <span className="rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-xs font-bold text-accent">Save 25%</span>
              </div>
              <Link
                href="https://idcentral.thinkific.com/courses/instructional-design-foundations-course/enroll"
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                Summer Promo
              </span>
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
              {/* Pricing */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-heading">$75</span>
                <span className="text-3xl font-extrabold text-copy-muted line-through opacity-50">$100</span>
                <span className="rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-xs font-bold text-accent">Save 25%</span>
              </div>
              <Link
                href="https://idcentral.thinkific.com/courses/instructional-design-foundations-course/enroll"
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
