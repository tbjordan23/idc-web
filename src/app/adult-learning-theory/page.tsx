import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Image from "next/image"

export const metadata: Metadata = generatePageMetadata({
  title: "Adult Learning Theory",
  description:
    "A complete guide to adult learning theory and andragogy — Malcolm Knowles' 5 Assumptions of Adult Learners, 4 Principles of Andragogy, modern adult learning theorists, and practical application for today's instructional designer.",
  path: "/adult-learning-theory",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Adult Learning Theory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adult learning theory — also called andragogy — describes how adults learn differently from children. Popularized by Malcolm Knowles in the 1960s and 70s, it identifies key characteristics of adult learners: they are self-directed, draw on rich life and work experience, are motivated by relevance, and learn best when content connects directly to real problems. These principles form the foundation of corporate training, professional development, and most modern instructional design practice.",
      },
    },
    {
      "@type": "Question",
      name: "What is Andragogy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Andragogy is the theory and practice of adult education, distinguished from pedagogy (the teaching of children). The term was popularized in the United States by Malcolm Knowles, who built a framework of assumptions and principles describing how adults learn. Andragogy emphasizes self-direction, experience-based learning, problem-centered approaches, and intrinsic motivation — and it's a foundational concept for any instructional designer working with adult learners.",
      },
    },
    {
      "@type": "Question",
      name: "What are Knowles' 5 Assumptions of Adult Learners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Malcolm Knowles' 5 Assumptions of Adult Learners are: 1) Self-Concept — adults move from dependent learners to self-directed ones; 2) Adult Learner Experience — adults bring a deep well of prior experience that becomes a resource for new learning; 3) Readiness to Learn — adults become ready to learn things tied to their developmental tasks and social roles; 4) Orientation to Learning — adults are problem-centered rather than subject-centered, wanting to apply learning immediately; 5) Motivation to Learn — adults are driven primarily by internal motivators like self-esteem and quality of life, not external pressure.",
      },
    },
    {
      "@type": "Question",
      name: "What are Knowles' 4 Principles of Andragogy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Knowles' 4 Principles of Andragogy guide how to design and facilitate adult learning: 1) Adults need to be involved in planning and evaluating their own instruction; 2) Experience — including mistakes — is the foundation for learning activities; 3) Adults are most interested in subjects that have immediate relevance and impact on their lives or work; 4) Adult learning is problem-centered rather than content-oriented. These principles shape how IDs structure courses, build engagement, and create learning that actually transfers to performance.",
      },
    },
  ],
}

const assumptions = [
  {
    number: "1",
    name: "Self-Concept",
    tagline: "Adults need to direct their own learning",
    body: `As people mature, they shift from being dependent learners — who expect to be told what to learn and how — to being self-directed adults who take responsibility for their own decisions and growth. This shift fundamentally changes the dynamic of the learning experience. Adult learners want to be treated as capable people who can make informed choices about their own development, not as passive recipients of instruction.

For instructional designers, this means building in choice, autonomy, and personalization wherever possible. Let learners set their own goals, choose their own pace, and pick learning paths that match their priorities. The classroom dynamic of "I'll tell you what you need to know" feels infantilizing to most adult learners — and it actively undermines engagement.`,
  },
  {
    number: "2",
    name: "Adult Learner Experience",
    tagline: "Experience is the richest resource in the room",
    body: `Adults arrive at any learning experience with a deep reservoir of prior knowledge, life experience, and professional context. This is fundamentally different from a child in a classroom — and it's arguably the single most important difference. That experience can be a powerful resource for learning, helping adults connect new ideas to what they already know. But it can also be a barrier, when prior assumptions or habits get in the way of new perspectives.

The takeaway for designers: never ignore what learners bring to the table. Build in opportunities for reflection, peer discussion, and connection-making — places where learners can surface, examine, and integrate their own experience. The most engaging adult learning isn't a one-way transfer of information; it's a structured conversation between new content and lived experience.`,
  },
  {
    number: "3",
    name: "Readiness to Learn",
    tagline: "Adults learn what they need, when they need it",
    body: `Adults become ready to learn things when they need to know them — typically tied to a real change in their life or work. A new manager becomes ready to learn about leadership when they're handed a team. A new parent becomes ready to learn about child development when their baby arrives. A career changer becomes ready to learn instructional design when they decide to make the shift.

This is why timing matters so much in adult learning. The same content delivered six months too early or too late will land flat. Just-in-time learning, performance support, onboarding tied to real role transitions, and learning paths aligned to career milestones all leverage this principle. When the learner is ready, learning sticks. When they're not, even the best-designed course gets ignored.`,
  },
  {
    number: "4",
    name: "Orientation to Learning",
    tagline: "Adults are problem-centered, not subject-centered",
    body: `Where children are often content to learn a subject for its own sake (or because the curriculum requires it), adults approach learning as a means to an end. They want to solve a problem, perform a task, navigate a situation, or grow into a new role. Abstract theory feels like a detour. Real-world application feels like the point.

This shifts how content should be structured. Instead of organizing instruction around topics ("Chapter 4: The History of Database Normalization"), organize it around problems and tasks ("How to design a database that won't collapse under load"). Lead with the problem, anchor every concept to its application, and make the connection between learning and outcome impossible to miss. This is what makes scenario-based learning, case studies, and project-based courses so powerful with adult learners.`,
  },
  {
    number: "5",
    name: "Motivation to Learn",
    tagline: "The strongest motivators come from within",
    body: `External motivators like promotions, raises, and credentials matter — but research consistently shows they're not what drives adult learning at its core. The most powerful motivators are internal: self-esteem, quality of life, increased job satisfaction, the desire to grow, and the satisfaction of becoming more capable. Adults will push through real difficulty when the learning connects to who they want to become.

For designers, this means surfacing the "why" early and often. Don't just describe what learners will do in the course — describe who they'll become as a result. Tell stories of people who have made the same journey. Make the personal stakes visible. When learners feel the connection between the content and their own growth, motivation takes care of itself. When they don't, no amount of gamification or completion deadlines will compensate.`,
  },
]

const principles = [
  {
    number: "1",
    name: "Involve learners in planning and evaluation",
    body: `Adults engage more deeply when they have a hand in shaping their own learning experience. That doesn't mean handing the keys to the learner — it means treating them as a partner in the process. Ask what they want to get out of the experience. Let them set personal goals. Build in self-assessment alongside formal evaluation. Give them ways to influence pace, depth, and direction. Even small acts of involvement — choosing which case study to work through, picking which optional module to take next — shift the dynamic from "being trained" to "directing my own development."`,
  },
  {
    number: "2",
    name: "Make experience (including mistakes) the foundation",
    body: `The most resonant adult learning activities draw directly from learners' experience and create safe space for productive failure. Instead of treating prior knowledge as something to be replaced, treat it as the starting material. Use scenarios pulled from real workplace situations. Build in reflection on past projects. Design simulations where mistakes carry no real consequence but produce real learning. Adults learn best when they can try, get it wrong, and figure out why — not when they're protected from failure or shamed for it.`,
  },
  {
    number: "3",
    name: "Focus on relevance and immediate application",
    body: `Adult learners constantly evaluate "does this matter to me, right now?" If the answer isn't obviously yes, attention drifts. Lead with the problem the learner is trying to solve. Anchor every concept to a real-world application. Cut anything that doesn't connect to their job, life, or goals — even if it's interesting. The cost of irrelevant content isn't just lost time; it's lost trust. Once learners decide a course is wasting their time, they tune out for the rest of it.`,
  },
  {
    number: "4",
    name: "Center learning around problems, not content",
    body: `Don't organize courses around topics; organize them around the challenges learners actually face. A traditional content-centered course says: "First we'll cover theory, then methods, then a case study at the end." A problem-centered design flips that: "Here's a real situation. What would you do? Now let's explore the methods and theory that help you do it better." This is the structure behind scenario-based learning, project-based courses, action learning, and most modern microlearning. It works because it mirrors how adults actually want to learn — by tackling real problems and pulling in just the knowledge they need to solve them.`,
  },
]

const theorists = [
  {
    name: "Eduard Lindeman",
    contribution:
      'Often called the father of adult education in the United States. His 1926 book "The Meaning of Adult Education" laid the foundational ideas Knowles would later formalize — that adult learning must be experience-based, learner-centered, and tied to life situations.',
  },
  {
    name: "Malcolm Knowles",
    contribution:
      "The defining figure in adult learning theory. Popularized the term andragogy in the U.S. and developed the framework of assumptions and principles that still shapes corporate training, higher education, and instructional design today.",
  },
  {
    name: "Jack Mezirow",
    contribution:
      "Developed Transformative Learning Theory — the idea that the deepest adult learning involves a fundamental shift in how learners see themselves and the world, often triggered by a 'disorienting dilemma' that challenges existing assumptions.",
  },
  {
    name: "Allen Tough",
    contribution:
      "Pioneer of Self-Directed Learning research. His studies showed that adults engage in extensive informal learning projects on their own — often invisible to formal education — driven entirely by personal interest and need.",
  },
  {
    name: "Patricia Cross",
    contribution:
      'Created the Characteristics of Adults as Learners (CAL) Model, which integrates personal characteristics (aging, life phases) and situational characteristics (part-time vs full-time, voluntary vs required) to explain how and why adults engage with learning.',
  },
  {
    name: "Stephen Brookfield",
    contribution:
      "Brought critical reflection to the center of adult learning. His work emphasizes that adults learn most powerfully when they examine and question the assumptions underlying their thinking — making him essential reading for leadership and DEI development.",
  },
]

const modernApplications = [
  {
    title: "Microlearning",
    description:
      "Short, focused learning bursts (3-7 minutes) delivered when needed — perfectly aligned with adults' problem-centered orientation and limited attention budget.",
  },
  {
    title: "Just-in-Time Performance Support",
    description:
      "Job aids, embedded help, and AI assistants that surface guidance at the exact moment of need — leveraging readiness to learn at its peak.",
  },
  {
    title: "Cohort-Based Learning",
    description:
      "Time-bound programs where adult learners progress alongside peers, sharing experience and accountability — turning Knowles' experience-as-resource principle into a community.",
  },
  {
    title: "Scenario & Simulation Design",
    description:
      "Realistic, decision-driven scenarios that center the learner's problem-solving — making content relevant, applicable, and immediately transferable to the job.",
  },
  {
    title: "Coaching & Mentoring Programs",
    description:
      "Structured one-on-one relationships that respect adult self-direction while providing the personalized guidance that books and courses can't deliver.",
  },
  {
    title: "AI-Personalized Learning Paths",
    description:
      "Adaptive systems that adjust pace, depth, and content based on each learner's prior knowledge and progress — finally making true self-direction scalable.",
  },
  {
    title: "Action Learning Projects",
    description:
      "Real workplace problems used as the learning vehicle itself — learners apply new skills to projects that produce actual business outcomes during the course.",
  },
  {
    title: "Reflection & Learning Journals",
    description:
      "Structured prompts that help learners surface and integrate their own experience — activating Mezirow's transformative learning and Brookfield's critical reflection.",
  },
  {
    title: "Self-Paced Learning with Choice",
    description:
      "Modular courses where learners select their path, depth, and order — honoring adult self-concept and the reality of busy professional schedules.",
  },
]

export default function AdultLearningTheoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        eyebrow="Foundations"
        title="Adult Learning Theory & Andragogy"
        subtitle="How adults actually learn — and how to design experiences that meet them where they are. A complete guide to Knowles' framework, modern theorists, and practical application."
      >
        <ScrollReveal>
          <p>
            If you&rsquo;re designing learning for adults — whether in a corporate L&amp;D
            program, a university course, a coaching relationship, or your own self-paced
            content — you&rsquo;re working with a fundamentally different audience than the one
            traditional education was built for. Adults bring full lives, deep experience, and
            their own ideas about what they need. They&rsquo;re not waiting to be filled with
            knowledge. They&rsquo;re busy people choosing to invest their time in growth — and
            they expect that investment to pay off in ways they can feel.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p>
            Adult learning theory, also called <em>andragogy</em>, is the framework that explains
            why this audience learns the way it does — and how to design experiences that work
            for them. Popularized by Malcolm Knowles in the 1960s and 70s, it has shaped almost
            every corner of modern instructional design, from corporate training to professional
            certification programs to the AI-powered learning platforms emerging today. Whether
            you&rsquo;re a new ID building your first course or an experienced designer
            sharpening your craft, the principles below are foundational — and worth returning to
            again and again.
          </p>
        </ScrollReveal>

        {/* ── Pedagogy vs Andragogy illustration ─────────────────────────── */}
        <ScrollReveal delay={2}>
          <div className="my-10 overflow-hidden rounded-2xl border border-edge bg-surface shadow-card">
            <div className="grid sm:grid-cols-2">
              <div className="border-b border-edge p-6 sm:border-b-0 sm:border-r">
                <p className="text-[11px] font-bold uppercase tracking-widest text-copy-dim">
                  Pedagogy
                </p>
                <h3 className="mt-2 text-base font-extrabold text-copy">Teaching Children</h3>
                <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
                <ul className="mt-3 space-y-2 text-sm font-medium text-copy-muted">
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Dependent learner, teacher-directed
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Limited prior experience
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Learns what is required by curriculum
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Subject-centered organization
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Motivated by external factors (grades, parents)
                  </li>
                </ul>
              </div>
              <div className="bg-[var(--surface-2)] p-6">
                <p className="text-[11px] font-bold uppercase tracking-widest text-accent">
                  Andragogy
                </p>
                <h3 className="mt-2 text-base font-extrabold text-copy">Teaching Adults</h3>
                <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
                <ul className="mt-3 space-y-2 text-sm font-medium text-copy-muted">
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Self-directed, autonomous learner
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Rich life and professional experience
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Learns when there&rsquo;s a real need to know
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Problem-centered organization
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">→</span>
                    Motivated internally (growth, identity, purpose)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── 5 Assumptions ──────────────────────────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
            Knowles&rsquo; 5 Assumptions of Adult Learners
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p className="mt-4">
            Knowles built his theory on five core assumptions about how adults differ from
            children as learners. These aren&rsquo;t arbitrary observations — they&rsquo;re the
            foundation that everything else in andragogy stands on. Internalizing them changes
            the questions you ask at the start of a project, the tone you write in, and the
            kinds of experiences you design.
          </p>
        </ScrollReveal>

        <div className="mt-6 space-y-5">
          {assumptions.map((assumption, i) => (
            <ScrollReveal key={assumption.number} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)]">
                    <span className="text-2xl font-extrabold text-accent">
                      {assumption.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-copy">{assumption.name}</h3>
                    <p className="text-xs font-semibold text-copy-muted">{assumption.tagline}</p>
                  </div>
                </div>
                <div className="mt-4 h-0.5 w-8 rounded bg-accent opacity-60" />
                {assumption.body.split("\n\n").map((para, idx) => (
                  <p
                    key={idx}
                    className="mt-3 text-sm font-medium leading-relaxed text-copy-muted"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── 4 Principles ───────────────────────────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-14 text-xl font-extrabold tracking-tight text-heading">
            Knowles&rsquo; 4 Principles of Andragogy
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p className="mt-4">
            If the five assumptions describe <em>who adult learners are</em>, the four
            principles describe <em>how to design for them</em>. Knowles distilled the practical
            implications of his theory into four principles that guide every facilitation and
            design decision. They&rsquo;re deceptively simple — and deeply hard to do well.
          </p>
        </ScrollReveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {principles.map((principle, i) => (
            <ScrollReveal key={principle.number} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="h-full rounded-card border border-edge bg-surface p-6 shadow-card">
                <div className="flex items-start gap-3">
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent">
                    Principle {principle.number}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-extrabold leading-snug text-copy">
                  {principle.name}
                </h3>
                <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
                <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
                  {principle.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Beyond Knowles — other theorists ───────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-14 text-xl font-extrabold tracking-tight text-heading">
            Beyond Knowles: Other Voices in Adult Learning
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p className="mt-4">
            Knowles&rsquo; framework is foundational, but it&rsquo;s far from the only voice in
            adult learning. The field has grown over the past century to include perspectives on
            transformation, self-direction, critical reflection, and the social context of adult
            learning. Knowing these thinkers gives you a richer toolkit — and a deeper
            understanding of why your learners respond the way they do.
          </p>
        </ScrollReveal>

        <div className="mt-6 overflow-hidden rounded-2xl border border-edge shadow-card">
          <div className="bg-[var(--surface-2)] px-6 py-5 sm:px-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-copy-dim">
              Influential Adult Learning Theorists
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {theorists.map((person, i) => (
                <ScrollReveal key={person.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="flex h-full items-start gap-4 rounded-xl border border-edge bg-surface p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.75}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-copy">{person.name}</p>
                      <p className="mt-0.5 text-xs font-medium leading-relaxed text-copy-muted">
                        {person.contribution}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* ── Modern practical applications ──────────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-14 text-xl font-extrabold tracking-tight text-heading">
            Andragogy in Modern Practice
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <p className="mt-4">
            Knowles wrote his most influential work in the 1970s and 80s — long before
            smartphones, generative AI, or the modern remote workforce. But the principles have
            aged remarkably well. If anything, the rise of self-paced digital learning, AI tools,
            and a workforce that expects autonomy has made andragogy <em>more</em> relevant, not
            less. Here&rsquo;s how today&rsquo;s most effective adult learning approaches put
            these principles into practice.
          </p>
        </ScrollReveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modernApplications.map((app, i) => (
            <ScrollReveal key={app.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="h-full rounded-card border border-edge bg-surface p-5 shadow-card">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)]">
                    <svg
                      className="h-3 w-3 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="text-sm font-extrabold text-copy">{app.title}</p>
                </div>
                <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
                <p className="mt-3 text-xs font-medium leading-relaxed text-copy-muted">
                  {app.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── CSUN Degree Promo ─────────────────────────────────────────── */}
        <ScrollReveal delay={1}>
          <div className="mt-12 rounded-card border border-edge bg-surface p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">
              Featured Degree Program
            </p>
            <h3 className="mt-2 text-lg font-extrabold tracking-tight text-heading">
              CSUN Master of Arts in Instructional Design
            </h3>
            <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
            <div className="mt-4 flex items-start gap-5">
              <div className="relative hidden sm:block h-16 w-16 shrink-0 overflow-hidden rounded-lg mt-1">
                <Image
                  src="/logos/csun-logo.png"
                  alt="CSUN logo"
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-relaxed text-copy-muted">
                  You understand how adults learn — now build the skills to design for them at
                  the highest level. CSUN&rsquo;s fully online MA in Instructional Design equips
                  you with the theory, practice, and tools to create learning experiences that
                  actually drive change. A respected credential from a California State University,
                  designed for working professionals.
                </p>
                <a
                  href="https://go.csun.edu/mid?utm_source=idc&utm_medium=april-banner_410x215&utm_campaign=mid05_fall24&utm_content=Shape-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 self-start inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
                >
                  Explore the CSUN Program
                  <svg
                    className="h-4 w-4 text-white/80"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Andragogy in the AI era ───────────────────────────────────── */}
        <ScrollReveal>
          <h2 className="mt-14 text-xl font-extrabold tracking-tight text-heading">
            Andragogy in the AI Era
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="mt-6 rounded-card border border-[var(--accent-glow)] bg-[var(--accent-glow)] p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface text-accent">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-copy">
                AI is finally making true self-direction scalable
              </h3>
            </div>
            <div className="mt-3 h-0.5 w-8 rounded bg-accent opacity-60" />
            <p className="mt-4 text-sm font-medium leading-relaxed text-copy-muted">
              For decades, &ldquo;personalized learning&rdquo; for adults was an aspiration with
              real limits — there was only so much a single instructional designer or facilitator
              could tailor. AI is changing that. Learners can now ask questions of an AI tutor in
              the moment of need, get content reframed for their experience level, work through
              scenarios at their own pace, and receive feedback on practice attempts at scale.
              Knowles&rsquo; vision of self-directed adult learners with rich personal pathways
              is becoming technically possible in ways it never was before.
            </p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
              For instructional designers, this is both an opportunity and a responsibility.
              The principles still apply — relevance, problem-centered design, internal
              motivation, respect for experience. But the surface area of the work is shifting
              from &ldquo;build the course&rdquo; to &ldquo;design the learning environment.&rdquo;
              That includes the prompts, the guardrails, the supporting content the AI draws
              from, and the human moments — coaching, cohort discussions, real-world projects —
              that AI can&rsquo;t replicate. The IDs who thrive in this era will be the ones who
              know adult learning theory deeply enough to design with intention, not just react
              to whatever the tools enable.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Closing reflection ─────────────────────────────────────────── */}
        <ScrollReveal delay={1}>
          <div className="mt-14 rounded-card border border-edge bg-surface p-6 shadow-card">
            <h2 className="text-base font-extrabold text-copy">
              Use the framework — don&rsquo;t worship it
            </h2>
            <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
            <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
              Andragogy is one of the most useful frameworks in instructional design — but
              it&rsquo;s also been critiqued, refined, and extended for decades. The
              pedagogy/andragogy split isn&rsquo;t as clean as Knowles originally suggested
              (children can be self-directed; adults still benefit from structure). And different
              cultures, contexts, and content domains call for different approaches. The strongest
              adult learning designers treat Knowles&rsquo; framework as a starting point — a set
              of working assumptions to design from, then test, refine, and adapt based on what
              their actual learners need.
            </p>
            <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
              Read Knowles. Read Mezirow on transformation, Brookfield on critical reflection,
              and Tough on self-directed learning. Then watch your learners. The most powerful
              insights about how adults learn don&rsquo;t come from books — they come from paying
              close attention to the people in front of you and adapting accordingly. That
              combination of theoretical grounding and real-world responsiveness is what makes a
              great instructional designer.
            </p>
          </div>
        </ScrollReveal>
      </ContentPage>
    </>
  )
}
