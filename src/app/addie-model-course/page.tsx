import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Link from "next/link"
import CourseScreenshotCarousel, { type CourseScreenshot } from "@/components/ui/CourseScreenshotCarousel"

export const metadata: Metadata = generatePageMetadata({
  title: "ADDIE Model Course",
  description:
    "Master the ADDIE model with this practical, expert-led course. Learn to design, develop, and evaluate effective learning experiences. Earn a certificate.",
  path: "/addie-model-course",
  ogImage: "/course-addie-model.png",
})

const addieScreenshots: CourseScreenshot[] = [
  {
    src: "/course-screenshots/addie/modern-layout-navigaton-2.png",
    alt: "Analysis Phase lesson showing clean layout with sidebar navigation and instructional content",
    caption: "Clean, modern lesson layout with phase-by-phase navigation — every lesson, quiz, and download is always one click away",
  },
  {
    src: "/course-screenshots/addie/videos-each-lesson.png",
    alt: "Evaluation Phase lesson with a video introduction embedded in the course interface",
    caption: "Every lesson opens with an overview video — grounding each ADDIE phase in real-world context before you dive in",
  },
  {
    src: "/course-screenshots/addie/clean-instructive-visuals.png",
    alt: "Development Phase lesson showing The Core Toolset with Media, Authoring, and Delivery Tools",
    caption: "Rich visual content makes complex concepts clear — diagrams and illustrations bring each ADDIE phase to life",
  },
  {
    src: "/course-screenshots/addie/Quiz.png",
    alt: "Practice Quiz for the Analysis Phase with multi-select questions",
    caption: "Practice quizzes after every lesson give you immediate feedback so you know what's sticking before moving on",
  },
  {
    src: "/course-screenshots/addie/agile-application.png",
    alt: "Design Phase lesson showing Agile Application with Rapid Prototyping, User Stories, and Design Sprints sections",
    caption: "Agile application woven throughout — learn how ADDIE adapts to fast-moving, iterative design environments",
  },
  {
    src: "/course-screenshots/addie/AI-ChatID.png",
    alt: "ChatID AI agent interface with prompts for creating instructional design artifacts",
    caption: "ChatID — IDC's built-in AI agent — is included to help you generate real design artifacts as you work through each phase",
  },
  {
    src: "/course-screenshots/addie/engaging-interactions.png",
    alt: "Analysis Phase showing an interactive learner persona activity with a Marketing Project Manager profile",
    caption: "Engaging interactions and learner persona activities help you practice analysis-phase thinking with realistic scenarios",
  },
  {
    src: "/course-screenshots/addie/tools-resources.png",
    alt: "Tools and Resources lesson showing visual diagramming tools with a flowchart diagram",
    caption: "Curated tools and resources for each ADDIE phase — so you know exactly what to reach for in your real design work",
  },
  {
    src: "/course-screenshots/addie/community-forum-2.png",
    alt: "IDC online community Feed page with 490+ members and recent discussion posts",
    caption: "A built-in community keeps you connected — post questions, share insights, and learn alongside other ID professionals",
  },
  {
    src: "/course-screenshots/addie/course-management-2.png",
    alt: "Learner dashboard showing all enrolled IDC courses with progress indicators",
    caption: "Your personal dashboard puts everything in one place — track progress across all your courses and download your certificate when you're done",
  },
  {
    src: "/course-screenshots/addie/certificate.png",
    alt: "Certificate of Completion for Mastering the ADDIE Model",
    caption: "Earn a professional certificate you can share on LinkedIn or include in your portfolio",
  },
]

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
    title: "6 Lessons",
    description:
      "Six packed lessons, with 20 learning objectives walking you through every phase of ADDIE — with concrete examples, tools, and activities built in at every step.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Videos",
    description:
      "Travis Jordan walks you through each ADDIE phase in real video lessons — showing you how the framework applies to actual design decisions, not just theory.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Templates",
    description:
      "Walk away with ADDIE-ready templates you can use immediately — needs analysis forms, design documents, evaluation plans, and more.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Quizzes",
    description:
      "Check your understanding phase by phase. Each quiz reinforces what you've just learned and gives you immediate feedback to keep you on track.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Course Downloads",
    description:
      "Printable chapter handouts capture key points from each ADDIE phase — a go-to reference you can keep at your desk and use on real projects.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    title: "Interactive Activities",
    description:
      "Apply ADDIE as you go — interactive activities put you in the designer's seat so you're practicing the process, not just reading about it.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Mobile Ready",
    description:
      "Take the course wherever you are. Fully responsive so you can work through the ADDIE phases on any device, on your own schedule.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Challenge Activities",
    description:
      "Each challenge puts you inside a realistic design scenario — so when you finish the course, you've already practiced ADDIE in context.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Discussions",
    description:
      "Work through real design decisions alongside other learners. Instructor-led prompts for each lesson mean your questions and insights belong in the conversation.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Professional Certificate",
    description:
      "Complete the final exam and earn a certificate that shows you know ADDIE inside and out — ready to share on LinkedIn or with employers.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: "Mahsa",
    role: "IDC Enrolled Student",
    quote:
      "The course was clearly designed, and the information was accessible. I liked the fact that Agile principles were connected to the concept of the ADDIE framework in the L&D world.",
  },
  {
    name: "Victoria",
    role: "IDC Enrolled Student",
    quote:
      "I thoroughly enjoyed this training course because it provided a great balance of theoretical knowledge and practical application. The content was well-structured and easy to follow, and the interactive exercises and real-world case studies helped solidify my understanding of key concepts. I walked away with new skills and a clear plan for how to apply them in my work.",
  },
  {
    name: "Ilana",
    role: "IDC Enrolled Student",
    quote: "The content is very rich and easy to understand.",
  },
  {
    name: "Kim",
    role: "IDC Enrolled Student",
    quote:
      "I really liked the short focused blocks of learning, the quiz to reinforce the learning at the end of each lesson, and the ChatID practice!",
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

const ENROLL_URL = "https://idcentral.thinkific.com/courses/addiemodel/enroll"

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
            <CourseScreenshotCarousel screenshots={addieScreenshots} />
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
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Summer Promo &middot; Ends July 8th</span>
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
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-heading">$50</span>
                <span className="text-3xl font-extrabold text-copy-muted line-through opacity-50">$100</span>
                <span className="rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-xs font-bold text-accent">Save 50%</span>
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
                                Objective {chapter.lessonStart + li}:
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
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Summer Promo &middot; Ends July 8th</span>
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
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold tracking-tight text-heading">$50</span>
                <span className="text-3xl font-extrabold text-copy-muted line-through opacity-50">$100</span>
                <span className="rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-xs font-bold text-accent">Save 50%</span>
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
