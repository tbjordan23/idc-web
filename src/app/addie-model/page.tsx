import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"
import CoursePromo from "@/components/ui/CoursePromo"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "ADDIE Model",
  description:
    "What is the ADDIE Model? A complete guide to the five phases of the ADDIE instructional design framework — Analysis, Design, Development, Implementation, and Evaluation.",
  path: "/addie-model",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the ADDIE Model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ADDIE Model is the most widely used instructional design framework. It stands for Analysis, Design, Development, Implementation, and Evaluation — the five phases of the instructional design process. It provides a systematic approach for designing and developing effective learning experiences.",
      },
    },
    {
      "@type": "Question",
      name: "What are the five phases of the ADDIE Model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The five phases of the ADDIE Model are: 1) Analysis — identifying the learning problem, goals, and audience; 2) Design — planning the instructional strategy, objectives, and assessments; 3) Development — creating and assembling the learning content and materials; 4) Implementation — delivering or distributing the instruction to learners; 5) Evaluation — measuring the effectiveness of instruction through formative and summative assessments.",
      },
    },
    {
      "@type": "Question",
      name: "Why is the ADDIE Model important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ADDIE Model is important because it provides a structured, repeatable process for designing effective learning experiences. It helps instructional designers systematically address learner needs, align training with business goals, and ensure quality through ongoing evaluation. It is recognized as the gold standard framework in the instructional design field.",
      },
    },
  ],
}

const phases = [
  {
    letter: "A",
    name: "Analysis",
    tagline: "Define the problem before you design the solution",
    body: `The Analysis phase is the foundation of the entire ADDIE process — and the most important one to get right. Before a single slide is built or a learning objective is written, an instructional designer asks: what problem are we actually solving? This phase is about identifying the gap between current performance and desired performance, understanding who the learners are, and determining whether a learning solution is even the right answer.

A thorough analysis includes needs assessment interviews, job task analysis, learner audience research (existing knowledge, experience level, motivation, and working environment), and a clear articulation of the business goal the training is meant to support. Skipping or rushing this phase is one of the most common reasons training doesn't work — you end up building the right course for the wrong problem.`,
  },
  {
    letter: "D",
    name: "Design",
    tagline: "Blueprint the learning experience before building it",
    body: `The Design phase translates the findings from analysis into a concrete plan. This is the architectural phase — where you decide what learners need to know, in what order, and how they'll demonstrate that they've learned it. Specific, measurable learning objectives are written (often using Bloom's Taxonomy), instructional strategies are selected, assessments are designed, and content is sequenced into a logical learning path.

Decisions about delivery format — eLearning, instructor-led training, blended, microlearning, job aids — are made here. A well-executed design phase produces a storyboard or design document detailed enough that someone else could build the course from it. This is also where you align the learning solution with the business outcome, making sure the design will actually solve the problem identified in Analysis.`,
  },
  {
    letter: "D",
    name: "Development",
    tagline: "Bring the design to life",
    body: `The Development phase is where the design blueprint becomes real. Content is written, graphics and media are created, narration is recorded, and interactive elements are built and assembled into a complete learning experience. Instructional designers work closely with subject matter experts, graphic designers, and developers during this phase — and often wear all of those hats themselves.

Authoring tools like Articulate Storyline, Rise 360, or Adobe Captivate are the workhorses here. Today, AI tools are also playing a growing role — accelerating script writing, generating scenario variations, and producing voiceover audio. Prototypes and pilot versions are typically reviewed and refined before full production, ensuring that issues are caught early when they're still inexpensive to fix.`,
  },
  {
    letter: "I",
    name: "Implementation",
    tagline: "Deploy and deliver to learners",
    body: `The Implementation phase is when the completed learning solution reaches its audience. Depending on the format, this might mean uploading a SCORM package to an LMS, scheduling and facilitating live training sessions, distributing job aids, or launching a blended learning program. The instructional designer often supports this phase by training facilitators, managing LMS setup, coordinating enrollment, and troubleshooting delivery issues.

A smooth implementation isn't just a logistics exercise — it shapes the learner experience before they've engaged with a single piece of content. Poorly managed rollouts create friction that undermines even the best-designed instruction. Clear communication, technical readiness, and a well-prepared facilitation team make the difference between a program that lands and one that gets ignored.`,
  },
  {
    letter: "E",
    name: "Evaluation",
    tagline: "Measure what worked and improve what didn't",
    body: `The Evaluation phase determines whether the instructional solution achieved its goals — and identifies where to improve it. Evaluation in ADDIE takes two forms. Formative evaluation is ongoing throughout the design and development phases: reviews, pilot tests, and stakeholder feedback that catch problems before launch. Summative evaluation occurs after implementation and measures real-world impact.

Kirkpatrick's Four Levels of Evaluation is the most widely used framework for structuring summative measurement: learner reaction, knowledge or skill acquisition, behavior change on the job, and organizational results. The findings from evaluation don't just close the loop on a single project — they feed back into the Analysis phase of the next one, reinforcing ADDIE's cyclical, iterative nature. This is what separates instructional design from content creation: the commitment to knowing whether learning actually worked.`,
  },
]

export default function ADDIEModelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        eyebrow="Instructional Design Framework"
        title="The ADDIE Model"
        subtitle="The most widely used framework in instructional design — a complete guide to all five phases."
      >
        <ScrollReveal>
        <p>
          If you&rsquo;ve spent any time in instructional design, you&rsquo;ve encountered ADDIE.
          It&rsquo;s the framework that most IDs learn first, the one that shows up in job descriptions,
          and the one that experienced designers still reach for when they need a reliable structure for
          a new project. ADDIE stands for Analysis, Design, Development, Implementation, and Evaluation —
          five phases that together form a systematic process for creating learning experiences that
          actually work.
        </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
        <p>
          Originally developed for the U.S. Military in the 1970s by Florida State University, ADDIE
          has stood the test of time because it&rsquo;s genuinely adaptable. It can structure a
          15-minute microlearning module or a multi-year enterprise training program. The phases are
          often shown sequentially, but in practice they&rsquo;re iterative — findings from one phase
          regularly loop back to inform another. That flexibility is exactly why it&rsquo;s lasted.
        </p>
        </ScrollReveal>

        {/* ADDIE Illustration */}
        <ScrollReveal delay={2}>
        <div className="my-8 flex justify-center">
          <svg
            viewBox="0 0 590 218"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-2xl"
            aria-label="ADDIE Model with iterative feedback loops between phases"
            role="img"
          >
            <defs>
              <marker id="addie-fwd" markerWidth="8" markerHeight="7" refX="6" refY="3.5" orient="auto">
                <polygon points="0,0.5 0,6.5 6.5,3.5" fill="#f26522"/>
              </marker>
              <marker id="addie-back" markerWidth="8" markerHeight="7" refX="1" refY="3.5" orient="auto-start-reverse">
                <polygon points="0,0.5 0,6.5 6.5,3.5" fill="#4a7bc4"/>
              </marker>
            </defs>

            {[
              { x: 14,  letter: "A", name: "Analysis" },
              { x: 122, letter: "D", name: "Design" },
              { x: 230, letter: "D", name: "Development" },
              { x: 338, letter: "I", name: "Implementation" },
              { x: 446, letter: "E", name: "Evaluation" },
            ].map(({ x, letter, name }) => (
              <g key={name}>
                <rect x={x} y="30" width="90" height="106" rx="10" fill="var(--surface-2)" stroke="#2b4171" strokeWidth="1.5"/>
                <text x={x + 45} y="86" textAnchor="middle" dominantBaseline="central" fill="#f26522" fontSize="34" fontWeight="800" fontFamily="sans-serif">{letter}</text>
                <text x={x + 45} y="120" textAnchor="middle" fill="var(--text)" fontSize="10" fontWeight="600" fontFamily="sans-serif">{name}</text>
              </g>
            ))}

            <line x1="105" y1="83" x2="120" y2="83" stroke="#f26522" strokeWidth="1.5" markerEnd="url(#addie-fwd)"/>
            <line x1="213" y1="83" x2="228" y2="83" stroke="#f26522" strokeWidth="1.5" markerEnd="url(#addie-fwd)"/>
            <line x1="321" y1="83" x2="336" y2="83" stroke="#f26522" strokeWidth="1.5" markerEnd="url(#addie-fwd)"/>
            <line x1="429" y1="83" x2="444" y2="83" stroke="#f26522" strokeWidth="1.5" markerEnd="url(#addie-fwd)"/>

            <path d="M 224,32 Q 173,15 122,32" stroke="#4a7bc4" strokeWidth="1.2" fill="none" strokeDasharray="4 2" markerEnd="url(#addie-back)"/>
            <path d="M 332,32 Q 281,15 230,32" stroke="#4a7bc4" strokeWidth="1.2" fill="none" strokeDasharray="4 2" markerEnd="url(#addie-back)"/>

            <path d="M 491,136 Q 295,198 59,136" stroke="#f26522" strokeWidth="1.8" fill="none" strokeDasharray="7 3" markerEnd="url(#addie-fwd)"/>
            <text x="295" y="210" textAnchor="middle" fill="var(--text-muted)" fontSize="8.5" fontFamily="sans-serif">Evaluation informs continuous improvement — feedback loops back to any phase</text>
          </svg>
        </div>
        </ScrollReveal>

        {/* Five phases */}
        <ScrollReveal>
        <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
          The Five Phases of ADDIE
        </h2>
        </ScrollReveal>

        <div className="mt-6 space-y-5">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)]">
                  <span className="text-2xl font-extrabold text-accent">{phase.letter}</span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-copy">{phase.name}</h3>
                  <p className="text-xs font-semibold text-copy-muted">{phase.tagline}</p>
                </div>
              </div>
              <div className="mt-4 h-0.5 w-8 rounded bg-accent opacity-60" />
              {phase.body.split("\n\n").map((para, i) => (
                <p key={i} className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
                  {para}
                </p>
              ))}
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ADDIE in practice */}
        <ScrollReveal>
        <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
          ADDIE in Practice
        </h2>
        </ScrollReveal>

        <ScrollReveal delay={1}>
        <p>
          One of the biggest misconceptions about ADDIE is that it&rsquo;s rigid. In reality,
          the most experienced designers use it as a flexible scaffold — not a strict sequence.
          They might run a quick, informal analysis over a few conversations before moving into
          design. They might prototype in development, share it with stakeholders, and loop back
          to redesign a section based on feedback. The phases overlap, inform each other, and repeat.
        </p>
        </ScrollReveal>

        <ScrollReveal delay={2}>
        <p>
          ADDIE also works alongside other frameworks. Many teams use Agile sprints within a
          broader ADDIE structure — maintaining the discipline of analysis and evaluation while
          gaining the speed and responsiveness of iterative development. Understanding ADDIE deeply
          gives you the foundation to adapt it intelligently, rather than following it blindly or
          abandoning it prematurely.
        </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
        <CoursePromo
          title="Ready to master ADDIE?"
          image="/course-addie-model.png"
          imageAlt="Mastering the ADDIE Model course"
          ctaLabel="Explore ADDIE Model Course"
          ctaHref="/addie-model-course"
          description={<>
            Reading about ADDIE is a great start — but applying it to a real project is where it
            clicks. The IDC <strong className="font-bold text-copy">Mastering the ADDIE Model</strong>{" "}
            course walks you through every phase with practical examples, real-world templates, and
            hands-on exercises. You&rsquo;ll finish with a certificate and the confidence to use
            ADDIE on any project that comes your way.
          </>}
        />
        </ScrollReveal>

      </ContentPage>
    </>
  )
}
