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

      {/* ── What is Instructional Design? ──────────────────────────────── */}
      <h2 className="mt-10 flex items-center gap-3 text-xl font-extrabold tracking-tight text-heading">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </span>
        What is Instructional Design?
      </h2>

      <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
        The field goes by several names — and each one captures a slightly different lens on the
        same core work. Whether you call it instructional design, educational technology, or
        learning experience design, the throughline is the same: making learning intentional,
        effective, and human-centered.
      </p>

      <div className="mt-6 space-y-4">

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Instructional Design</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Instructional design is the systematic process of analyzing what people need to learn,
            then designing, developing, and evaluating the experiences that get them there. It
            draws on learning science, cognitive psychology, and performance improvement to ensure
            that training isn&rsquo;t just delivered — it actually works. Think of it as the
            architecture behind every effective course, workshop, or learning program. The ID
            process is often guided by models like ADDIE or SAM, which provide a framework for
            moving from a learning problem to a finished, evidence-based solution.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Educational Technology</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Educational technology — often called EdTech or instructional technology — is the
            strategic use of tools, platforms, and systems to support learning. But it&rsquo;s
            not just about the technology itself. It&rsquo;s about selecting the right tool for
            the right learning goal, integrating it thoughtfully into the learner&rsquo;s
            experience, and evaluating whether it actually made a difference. EdTech professionals
            work at the intersection of learning science and technology, managing everything from
            LMS platforms and eLearning authoring tools to emerging AI-powered learning systems.
            The technology is always in service of the learning — never the other way around.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Learning Experience (LX) Design</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Learning experience design is the newest framing in the field — and the most
            human-centered. Where traditional instructional design often focused on content
            delivery and performance outcomes, LX design borrows from the world of UX: it treats
            the learner like a user, mapping their journey, designing for emotion and engagement,
            and prototyping and testing before full rollout. An LX designer asks not just
            &ldquo;did the learner complete the course?&rdquo; but &ldquo;how did it feel to go
            through it?&rdquo; The shift reflects a broader recognition that how people experience
            learning shapes whether they show up for it, stay engaged, and apply what they&rsquo;ve
            learned back on the job.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Instructional Systems Design (ISD)</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Instructional systems design is the more formal, process-oriented name for the same
            discipline — rooted in military and government training programs from the 1950s and
            60s. The &ldquo;systems&rdquo; framing is deliberate: ISD treats a learning program
            as a system with interdependent components — analysis, design, development,
            implementation, and evaluation — all of which need to work together for the outcome
            to be effective. ADDIE, the most widely recognized instructional design model, emerged
            directly from ISD thinking. In federal agencies, defense contractors, and large
            institutions, you&rsquo;ll still see ISD used as the standard term. In corporate L&amp;D,
            it&rsquo;s largely been replaced by &ldquo;instructional design&rdquo; — but the
            methodology is the same.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Human Performance Technology (HPT)</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Human performance technology takes a wider view than instructional design alone. Where
            ID focuses on learning solutions, HPT asks a more fundamental question first: is
            training even the right answer? HPT practitioners analyze performance gaps
            systematically — examining motivation, environment, tools, processes, and incentives,
            not just knowledge and skills. If the root cause is a broken workflow or unclear
            expectations, no amount of training will fix it. HPT gives instructional designers a
            framework for thinking beyond course-building to genuine performance improvement — and
            it&rsquo;s one of the reasons senior IDs are often called &ldquo;performance
            consultants.&rdquo; The International Society for Performance Improvement (ISPI) is
            the professional home for this discipline.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Curriculum Design &amp; Development</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Curriculum design is how educators and institutions plan the full scope and sequence
            of what gets taught — which topics, in what order, across what timeframe. Where
            instructional design tends to focus on a single course or learning experience,
            curriculum design zooms out to the program level: how do all the learning experiences
            fit together, build on each other, and lead to a coherent outcome? In K&ndash;12
            and higher education, curriculum designers develop standards-aligned programs that
            span semesters or years. In corporate L&amp;D, curriculum development shows up in
            leadership development paths, onboarding journeys, and role-based learning tracks —
            any time the goal is a sustained, sequenced learning experience rather than a one-off
            course.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <h3 className="text-base font-extrabold text-copy">Learning &amp; Development (L&amp;D)</h3>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Learning and development is the organizational function — usually housed within HR —
            that oversees training, professional development, and capability-building for employees.
            L&amp;D is the department; instructional design is a core discipline within it. An
            L&amp;D team might include instructional designers, eLearning developers, facilitators,
            LMS administrators, and a learning strategy lead — all working together to build and
            deliver learning programs that support business goals. For instructional designers,
            understanding how L&amp;D operates as a function (budget cycles, stakeholder
            relationships, learning strategy) is just as important as mastering the craft —
            because the best-designed course in the world won&rsquo;t matter if it doesn&rsquo;t
            get organizational buy-in and resources to reach learners.
          </p>
        </div>

      </div>

      {/* ── What is an Instructional Designer? ─────────────────────────── */}
      <h2 className="mt-10 flex items-center gap-3 text-xl font-extrabold tracking-tight text-heading">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent">
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
          </svg>
        </span>
        What is an Instructional Designer?
      </h2>

      <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
        The people who do this work go by several titles depending on the organization and sector
        they work in. Each role has its own focus, but they all share the same underlying mission:
        helping people learn and perform better. Here&rsquo;s how the most common titles in the
        field break down.
      </p>

      <div className="mt-6 space-y-4">

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-extrabold text-copy">Instructional Designer</h3>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-500">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              Trending Up
            </span>
          </div>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            An instructional designer is the core role in the field — the professional who takes
            a learning problem and turns it into a solution. They conduct needs analyses to
            understand what&rsquo;s really going wrong, write learning objectives grounded in
            measurable outcomes, design the structure and flow of learning experiences, develop
            content and assessments, and evaluate whether the learning worked. IDs work across
            industries — corporate L&amp;D, healthcare, higher ed, government, nonprofits — and
            in almost every context, they serve as the bridge between subject matter experts who
            know the content and learners who need to use it. The title also appears as
            &ldquo;instructional systems designer,&rdquo; &ldquo;curriculum designer,&rdquo; and
            &ldquo;learning designer&rdquo; — same core skill set, different organizational branding.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-extrabold text-copy">Instructional Technologist</h3>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-bold text-rose-500">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
              Trending Down
            </span>
          </div>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            An instructional technologist sits at the intersection of learning design and
            technology systems. Where an instructional designer focuses primarily on the learning
            experience itself, an instructional technologist specializes in the tools and
            infrastructure that deliver it — learning management systems, authoring platforms,
            video production, and emerging EdTech. This role is especially common in higher
            education, where instructional technologists support faculty in redesigning courses
            for online delivery, evaluate new tools for pedagogical fit, and manage the technical
            layer of the learning ecosystem. In corporate settings, the role often overlaps
            significantly with instructional design — many IDs are also de facto instructional
            technologists.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-extrabold text-copy">Learning Experience Designer (LXD)</h3>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-500">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              Trending Up
            </span>
          </div>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            The learning experience designer is an emerging role title that signals a more
            human-centered, UX-influenced approach to the work. Where &ldquo;instructional
            designer&rdquo; carries associations with structured content and delivery systems,
            &ldquo;LXD&rdquo; signals a focus on the full learner journey — including emotions,
            motivation, and experience quality, not just learning outcomes. LXDs often use
            tools and methods borrowed from UX design: learner personas, journey mapping,
            wireframing, usability testing, and iterative prototyping. The title is increasingly
            common in tech companies and progressive L&amp;D teams, and you&rsquo;ll see it used
            alongside or interchangeably with instructional designer in many job postings. If
            you&rsquo;re drawn to design thinking and the human side of learning, this framing
            may resonate with how you already approach the work.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-extrabold text-copy">eLearning Developer</h3>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-bold text-rose-500">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
              Trending Down
            </span>
          </div>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            An eLearning developer specializes in building digital learning content — typically
            using authoring tools like Articulate Storyline, Articulate Rise, Adobe Captivate,
            or Lectora. While instructional designers focus on strategy, structure, and content,
            eLearning developers focus on execution: turning storyboards and scripts into fully
            functional, interactive courses. In smaller organizations, the two roles often
            collapse into one — the ID who designs the course also builds it. In larger teams,
            they&rsquo;re distinct: designers hand off storyboards and developers bring them to
            life. Strong eLearning developers combine technical tool proficiency with visual
            design sensibility and a solid understanding of instructional principles — because
            a course that looks polished but teaches poorly still fails the learner.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-extrabold text-copy">Performance Consultant</h3>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-bold text-rose-500">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
              Trending Down
            </span>
          </div>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            A performance consultant is often what an experienced instructional designer
            evolves into — or what a senior ID is already doing without the title. Rather than
            jumping straight to &ldquo;we need a course,&rdquo; a performance consultant starts
            by diagnosing the real problem. Is the performance gap caused by a lack of knowledge
            or skill? Or is it a motivation issue, a process problem, a resource constraint, or
            a management failure? That diagnosis shapes everything that follows — and sometimes
            it means recommending something other than training entirely. Performance consultants
            work closely with business leaders and HR partners, speak the language of outcomes
            and ROI, and are valued precisely because they push back on reflexive requests for
            training and help organizations invest in solutions that will actually move the needle.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-extrabold text-copy">Curriculum Developer</h3>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-bold text-rose-500">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
              Trending Down
            </span>
          </div>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            A curriculum developer designs the structure, sequence, and content of learning
            programs — often at a larger scale than a single course. In K&ndash;12 and higher
            education, curriculum developers build units and programs that are standards-aligned,
            grade-appropriate, and sequenced to build knowledge and skills progressively over
            time. In corporate settings, the title often appears on roles responsible for building
            out full learning tracks — like a leadership development curriculum or a role-based
            onboarding program — where the work requires mapping competencies, sequencing
            experiences, and ensuring coherence across multiple courses and modalities. The
            skills overlap significantly with instructional design, with an added emphasis on
            long-arc planning and program-level thinking.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-extrabold text-copy">Training Developer</h3>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-bold text-rose-500">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
              Trending Down
            </span>
          </div>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Training developer is the title you&rsquo;ll most commonly encounter in the military,
            federal government, defense contracting, and compliance-heavy industries like
            healthcare, utilities, and manufacturing. The role mirrors instructional design in
            most respects — analyzing needs, designing learning solutions, developing content —
            but within frameworks and standards specific to those sectors. Military training
            developers, for example, often work within the ADDIE-derived ISD process and produce
            highly structured deliverables like task analysis reports, training plans, and formal
            course materials. If you&rsquo;re transitioning from military service or working in
            a government-adjacent role, you&rsquo;ve likely already been doing instructional
            design work — even if it was never called that.
          </p>
        </div>

      </div>

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
