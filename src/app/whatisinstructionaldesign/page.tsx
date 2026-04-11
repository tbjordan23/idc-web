import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "What is Instructional Design?",
  description:
    "View definitions for instructional design, educational technology, educational psychology, instructional technology, curriculum design, & instructional systems",
  path: "/whatisinstructionaldesign",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Instructional Design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional design is the process by which learning products and experiences are designed, developed, and delivered. These learning products include online courses, instructional manuals, video tutorials, learning simulations, and more. Instructional designers are the architects of the learning experience and the directors of the Instructional Systems Design (ISD) process.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Instructional Designer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An instructional designer is a professional who applies instructional design principles, models, and processes to create effective learning experiences. Instructional designers work across corporate, government, non-profit, and academic sectors to design training programs, eLearning courses, instructor-led training, and other learning solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What skills does an instructional designer need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional designers typically need skills in needs analysis, curriculum development, eLearning authoring tools (such as Articulate Storyline or Adobe Captivate), learning management systems (LMS), project management, writing and communication, and an understanding of learning theories such as behaviorism, cognitivism, and constructivism.",
      },
    },
  ],
}

export default function WhatIsIDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
      eyebrow="The Field"
      title="What is Instructional Design?"
      subtitle="A complete guide to the field, the role, and how to get started."
    >
      <p>
        Instructional design is the craft of creating learning experiences that actually work. If
        you&rsquo;ve ever built a course, designed a training program, or helped someone develop a
        new skill — you&rsquo;ve done instructional design. At its core, it&rsquo;s a systematic
        process for designing, developing, and delivering learning products: online courses, video
        tutorials, training manuals, simulations, and more. Instructional designers are the
        architects behind those experiences — shaping how knowledge gets structured, delivered, and
        retained. You might also hear the terms <em>instructional technology</em>,{" "}
        <em>learning experience (LX) design</em>, <em>curriculum design</em>, and{" "}
        <em>instructional systems design (ISD)</em> — they overlap significantly and are often
        used interchangeably.
      </p>

      {/* ── Instructional Design Definitions ───────────────────────────── */}
      <h2 className="mt-10 flex items-center gap-3 text-xl font-extrabold tracking-tight text-heading">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </span>
        Instructional Design Definitions
      </h2>

      <h3 className="mt-8 text-lg font-bold text-copy">Instructional Design</h3>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Instructional design, also known as instructional systems design or instructional
          systems development (ISD), is the practice of creating learning experiences to support
          long term learning. It&rsquo;s a systems approach to analyzing, designing, developing,
          implementing, and evaluating any instructional experience.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.td.org (Association for Talent Development)
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Instructional design (ID), also known as instructional systems design, is the
          practice of systematically designing, developing and delivering instructional materials
          and experiences, both digital and physical, in a consistent and reliable fashion toward
          an efficient, effective, appealing, engaging and inspiring acquisition of knowledge.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.wikipedia.org
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Instructional design is the behind-the-scenes blueprint that shapes how people
          learn. Whether it&rsquo;s an employee onboarding session or an online course for adult
          learners, instructional designers create experiences that are clear, engaging, and
          effective. This field uses a systematic process to analyze learning needs, define goals,
          and create learning materials that support specific learning outcomes.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — education.purdue.edu (Purdue University College of Education, 2024)
        </cite>
      </blockquote>

      {/* ── Educational Technology ──────────────────────────────────────── */}
      <h3 className="mt-8 text-lg font-bold text-copy">
        Educational Technology
      </h3>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Educational technology is the ethical study and application of theory, research,
          and practices to advance knowledge, improve learning and performance, and empower learners
          through strategic design, management, implementation, and evaluation of learning
          experiences and environments using appropriate processes and resources.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.aect.org (Association for Educational Communications and Technology, 2023 Definition Task Force)
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Educational technologies refer to the set of digital tools, resources,
          applications, and methodologies used to facilitate the teaching&ndash;learning process.
          These technologies include software, online platforms, hardware devices (such as tablets,
          computers, and interactive whiteboards), and assistive technologies, all aimed at
          improving access to education, personalizing learning paths, and fostering a more dynamic
          interaction between students and teachers.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.wikipedia.org
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Education Technology (EdTech) is the strategic integration of digital tools,
          software, and hardware into the learning environment to enhance pedagogical outcomes.
          The integration of digital tools such as interactive software, cloud-based platforms,
          and adaptive learning systems has shifted traditional educational models towards more
          personalized, flexible, and engaging learning experiences.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — research.com
        </cite>
      </blockquote>

      {/* ── Learning Experience (LX) Design ────────────────────────────── */}
      <h3 className="mt-8 text-lg font-bold text-copy">
        Learning Experience (LX) Design
      </h3>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Learning experience design is the process of creating learning experiences that
          enable the learner to achieve the desired learning outcome in a human-centered and
          goal-oriented way.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.lxd.org (Niels Floor, pioneer of the LXD discipline)
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;At its core, LXD is a human-centered, research-driven approach to learning design
          that integrates UX principles with learning science. While instructional design
          traditionally centered on delivering content efficiently, LXD adds a new dimension —
          designing for emotion, engagement, and human connection.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.devlinpeck.com (Devlin Peck, 2024)
        </cite>
      </blockquote>

      {/* ── What is an Instructional Designer? ─────────────────────────── */}
      <h2 className="mt-10 flex items-center gap-3 text-xl font-extrabold tracking-tight text-heading">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
          </svg>
        </span>
        What is an Instructional Designer?
      </h2>

      <p>
        So what does an instructional designer actually do? In short: they make learning work.
        IDs create and deliver learning solutions across industries — from corporate training and
        K&ndash;12 education to higher ed and government. If an organization needs people to learn
        something, change behavior, or perform better, an instructional designer figures out how
        to make that happen. The role is in high demand globally, and for good reason — effective
        learning design directly impacts performance, and organizations know it.
      </p>

      <h3 className="mt-8 text-lg font-bold text-copy">Instructional Designer</h3>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;An instructional designer is a learning professional who specializes in
          instructional design — the process of creating educational materials and training
          programs that are engaging, accessible, and aligned with desired learning outcomes.
          Instructional designers work with subject matter experts to identify learning needs,
          apply instructional design theories and methods, and create learning materials and
          assessments.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — education.purdue.edu (Purdue University College of Education, 2024)
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;An instructional designer applies learning theory to design course content,
          learning activities, and other training solutions to support the acquisition of new
          knowledge or real-world skills. They take on multiple roles: analyst (identifying
          performance gaps), architect (designing the learning experience), creator (building the
          content), and evaluator (measuring effectiveness).&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.td.org (Association for Talent Development)
        </cite>
      </blockquote>

      <h3 className="mt-8 text-lg font-bold text-copy">Instructional Technologist</h3>

      <p>What does an instructional technologist do?</p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Evaluate new technologies to discover new and better ways to enhance instruction</li>
        <li>
          Assist faculty in discovering methods of improving their instruction with and without
          technology
        </li>
        <li>Conduct training sessions teaching faculty and staff how to use new technologies</li>
        <li>
          Conduct research studies evaluating the use of technologies and their impact on student
          learning outcomes
        </li>
        <li>
          Create training materials to accommodate self-learners and provide resources for customers
        </li>
        <li>
          Manage the implementation of new technologies on-campus for the use of instruction
        </li>
      </ul>
      <p className="text-xs font-bold text-copy-dim">— www.instructtech.wordpress.com</p>

      <h3 className="mt-8 text-lg font-bold text-copy">Educational Technologist</h3>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;An Educational Technologist is a professional who applies technology to the field
          of education, working to design, develop, and implement technology-based solutions for
          educational institutions and organizations. Educational technologists analyze, design,
          develop, implement, and evaluate processes and tools to make learning easier and more
          effective.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.ziprecruiter.com
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Educational Technologists are responsible for designing and implementing
          technology-based solutions to support learning and teaching, working closely with
          teachers, curriculum developers, and instructional designers to create engaging and
          effective learning environments. They assess and evaluate the effectiveness of these
          tools and make adjustments as necessary, and provide training and support to educators
          on the use of technology.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — research.com (2025)
        </cite>
      </blockquote>

      {/* ── What Does an ID Actually Do? ────────────────────────────────── */}
      <h2 className="mt-10 flex items-center gap-3 text-xl font-extrabold tracking-tight text-heading">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" />
          </svg>
        </span>
        What Does an Instructional Designer Actually Do?
      </h2>

      <p>
        Titles and definitions only go so far. In practice, instructional design is a deeply
        collaborative, multi-phase craft — and what you spend your time on depends heavily on
        where you work and what your organization needs. That said, most IDs move through a
        recognizable cycle of work, regardless of industry.
      </p>

      <div className="mt-6 space-y-4">

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Analyzing the Learning Need</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Before anything gets designed, an ID asks: <em>what problem are we actually solving?</em>{" "}
            This is needs analysis — the process of identifying performance gaps, understanding the
            audience, and determining whether a learning solution is even the right answer. A lot of
            stakeholders come to IDs with &ldquo;we need a training,&rdquo; when the real fix is a
            process change, a better tool, or clearer expectations. A skilled ID helps organizations
            tell the difference — and that ability alone makes you invaluable.
          </p>
          <div className="mt-4 flex items-start gap-3 rounded-lg border border-[var(--accent-glow)] bg-[var(--accent-glow)] px-4 py-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-accent">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent">AI in this phase</p>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                IDs are using AI tools to accelerate audience research, synthesize interview notes from SME
                conversations, identify knowledge gaps from existing content, and rapidly generate learner
                personas. What AI can&rsquo;t replicate is the judgment call — knowing when the data points
                to a training solution and when it points to a broken process. That critical thinking is still
                entirely yours.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Designing the Learning Experience</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Once the need is clear, IDs define learning objectives, map out course structure, and
            choose the right delivery format — whether that&rsquo;s eLearning, instructor-led
            training, microlearning, a job aid, a video series, or some combination. This is the
            architectural phase: figuring out what learners need to know, in what order, and how to
            build in practice and feedback so the learning actually sticks.
          </p>
          <div className="mt-4 flex items-start gap-3 rounded-lg border border-[var(--accent-glow)] bg-[var(--accent-glow)] px-4 py-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-accent">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent">AI in this phase</p>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                AI is a powerful thought partner here. IDs use it to draft and refine learning objectives,
                generate course outlines, brainstorm scenario frameworks, and pressure-test instructional
                sequences before a single piece of content is built. The ID still makes the architectural
                decisions — AI just makes it faster to explore the options.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Developing the Content</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            This is where design becomes reality. IDs write scripts, build storyboards, develop
            eLearning modules in authoring tools like Articulate Storyline or Rise, create
            facilitator guides and participant workbooks, design assessments, and produce supporting
            materials. They work closely with subject matter experts (SMEs) to ensure accuracy, and
            with stakeholders to ensure alignment — which often means navigating feedback, revisions,
            and evolving requirements with patience and diplomacy.
          </p>
          <div className="mt-4 flex items-start gap-3 rounded-lg border border-[var(--accent-glow)] bg-[var(--accent-glow)] px-4 py-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-accent">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent">AI in this phase</p>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                This is where AI has the most immediate impact. IDs are using generative AI to draft narration
                scripts, write quiz questions, create scenario variations, generate voiceover audio, produce
                images and graphics, and turn rough SME notes into polished content — compressing timelines
                that used to take weeks. Strong IDs know how to prompt well, evaluate the output critically,
                and edit for instructional accuracy and tone.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Implementing and Evaluating</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Once content is ready, IDs manage or support its rollout — uploading to an LMS,
            coordinating with facilitators, running pilots, and troubleshooting delivery issues.
            After launch, strong IDs don&rsquo;t just move on: they collect data, measure outcomes,
            gather learner feedback, and use what they learn to improve the program or inform the next one.
            This is what separates a course builder from a learning strategist.
          </p>
          <div className="mt-4 flex items-start gap-3 rounded-lg border border-[var(--accent-glow)] bg-[var(--accent-glow)] px-4 py-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)] text-accent">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-accent">AI in this phase</p>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                AI is changing how IDs analyze and act on data. From summarizing learner feedback at scale
                to identifying patterns in assessment results, AI tools help IDs move from raw data to
                actionable insights faster. Looking ahead, AI-powered adaptive learning systems are enabling
                personalized content paths — where the learning experience adjusts in real time based on how
                each learner is performing.
              </p>
            </div>
          </div>
        </div>

      </div>

      <h2 className="mt-12 flex items-center gap-3 text-xl font-extrabold tracking-tight text-heading">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </span>
        What Does an Instructional Designer Create?
      </h2>

      <p>
        The range of deliverables an instructional designer produces is wide. Depending on the
        role and organization, you might be building any of the following — often several at once.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-copy">eLearning Courses</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                Self-paced interactive modules built in tools like Articulate Storyline or Rise — the bread and butter of most ID roles.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-copy">Instructor-Led Training (ILT &amp; vILT)</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                Live classroom and virtual training programs — designed for engagement, not just information transfer.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-copy">Storyboards &amp; Design Documents</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                The blueprint before anything gets built — aligning stakeholders on structure, content, and interactions before a single slide is developed.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-copy">Video Scripts &amp; Narration</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                Clear, engaging scripts that make complex ideas easy to follow — whether voiced by a human narrator or AI.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-copy">Job Aids &amp; Performance Support</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                Quick-reference guides, checklists, and decision tools that support performance in the moment — often more effective than a course.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-copy">Assessments &amp; Simulations</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                Quizzes, knowledge checks, branching scenarios, and simulations that measure and reinforce learning — not just test recall.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-copy">Facilitator Guides &amp; Workbooks</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                Detailed guides that give trainers everything they need to deliver a consistent, high-quality learning experience every time.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 9m0 8V9m0 0L9 7" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-copy">Onboarding Programs &amp; Learning Paths</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                Structured sequences that guide learners from where they are to where they need to be — a high-impact, high-visibility deliverable in most orgs.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-copy">LMS Structures &amp; Learning Taxonomies</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                The architecture behind the content — how courses are organized, tagged, and delivered inside a learning management system.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-extrabold text-copy">Measurement &amp; Evaluation Plans</h3>
              <p className="mt-1 text-xs font-medium leading-relaxed text-copy-muted">
                The strategy for knowing whether learning worked — using frameworks like Kirkpatrick to connect training to real business outcomes.
              </p>
            </div>
          </div>
        </div>

      </div>

    </ContentPage>
    </>
  )
}
