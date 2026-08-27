import type { Metadata } from "next"
import { Fragment } from "react"
import { generatePageMetadata } from "@/lib/metadata"
import Link from "next/link"
import ScrollReveal from "@/components/ui/ScrollReveal"
import BundleBanner from "@/components/ui/BundleBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "History of Instructional Design",
  description:
    "The history of instructional design from WWII military training to today's AI-powered learning — an interactive timeline of key milestones.",
  path: "/instructional-design-history",
  ogImage: "/images/history.png",
})

interface TimelineEvent {
  year: string
  title: string
  description: string
  milestone?: boolean
}

interface Era {
  id: string
  name: string
  period: string
  accent: string
  textAccent: string
  borderAccent: string
  bgAccent: string
  events: TimelineEvent[]
}

const eras: Era[] = [
  {
    id: "era-1940s",
    name: "The Wartime Foundation",
    period: "1940s",
    accent: "bg-amber-500",
    textAccent: "text-amber-600 dark:text-amber-400",
    borderAccent: "border-amber-500/40",
    bgAccent: "bg-amber-500/10",
    events: [
      {
        year: "1940–1945",
        title: "World War II Creates the Field",
        description:
          "The US military faces an impossible task: train over 10 million personnel quickly, consistently, and at global scale. Psychologists, educators, and filmmakers are recruited to design systematic training programs — using film, simulation, job aids, and structured procedures. The results are measurable and dramatic. This urgent wartime experiment is the origin of instructional design as a discipline.",
        milestone: true,
      },
      {
        year: "1944",
        title: "Robert Gagné and the Army Air Force",
        description:
          "Psychologist Robert Gagné works with the Army Air Force to develop systematic training for pilots and aerial gunners. His work on task analysis, sequenced instruction, and matching learning conditions to learning types lays the conceptual foundation for what will become the most influential framework in the field.",
      },
      {
        year: "1946",
        title: "Edgar Dale's Cone of Experience",
        description:
          "Educator Edgar Dale publishes 'Audio-Visual Methods in Teaching,' introducing the Cone of Experience — a model showing that learning deepens as experiences move from abstract (words, symbols) toward concrete (direct purposeful experience). It remains one of the most widely cited models in education history.",
      },
    ],
  },
  {
    id: "era-1950s",
    name: "The Science of Learning",
    period: "1950s–1960s",
    accent: "bg-blue-500",
    textAccent: "text-blue-600 dark:text-blue-400",
    borderAccent: "border-blue-500/40",
    bgAccent: "bg-blue-500/10",
    events: [
      {
        year: "1954",
        title: "Skinner and Programmed Instruction",
        description:
          "B.F. Skinner publishes 'The Science of Learning and the Art of Teaching,' arguing that learning can be engineered through immediate feedback and incremental reinforcement. Programmed instruction — where learners progress through small sequential steps and receive immediate confirmation — becomes the first widespread technology-mediated approach to self-paced learning.",
      },
      {
        year: "1956",
        title: "Bloom's Taxonomy Published",
        description:
          "Benjamin Bloom and colleagues publish 'Taxonomy of Educational Objectives,' creating a hierarchical framework for classifying learning goals from simple recall to complex synthesis and evaluation. Bloom's Taxonomy becomes one of the most cited works in education and the bedrock for writing measurable, performance-based learning objectives.",
        milestone: true,
      },
      {
        year: "1957",
        title: "Sputnik Sparks Education Reform",
        description:
          "The Soviet Union launches Sputnik, triggering a national crisis in American education. The National Defense Education Act (1958) pours federal funding into science, math, and instructional technology research. Government investment in systematic approaches to education gives instructional design unprecedented institutional support.",
      },
      {
        year: "1962",
        title: "Mager's Behavioral Objectives",
        description:
          "Robert Mager publishes 'Preparing Instructional Objectives,' introducing a three-part framework for writing learning objectives: performance (what the learner will do), conditions (under what circumstances), and criteria (how well). It becomes the standard for ID practice — and remains so more than sixty years later.",
      },
      {
        year: "1965",
        title: "Gagné's Conditions of Learning",
        description:
          "Robert Gagné publishes 'The Conditions of Learning,' presenting a systematic theory of learning types and the instructional events that support each. His Nine Events of Instruction — from gaining attention through enhancing retention and transfer — provide instructional designers with a research-backed sequence for structuring any learning experience.",
        milestone: true,
      },
    ],
  },
  {
    id: "era-1970s",
    name: "Systematic Design & Early Technology",
    period: "1970s–1980s",
    accent: "bg-emerald-500",
    textAccent: "text-emerald-600 dark:text-emerald-400",
    borderAccent: "border-emerald-500/40",
    bgAccent: "bg-emerald-500/10",
    events: [
      {
        year: "1970–1975",
        title: "The ADDIE Model Emerges",
        description:
          "Florida State University develops a systematic instructional design model for the US military — the direct precursor to ADDIE. By the mid-1970s, its five phases (Analysis, Design, Development, Implementation, Evaluation) are formalized and adopted across military training programs. ADDIE becomes the gold standard framework for the field and remains the most widely used model in instructional design today.",
        milestone: true,
      },
      {
        year: "1972",
        title: "First Graduate Programs in Instructional Design",
        description:
          "Universities including Indiana University, Michigan State, and Florida State establish formal graduate programs in instructional design and technology. The field gains academic legitimacy, a growing research base, and a pipeline of formally trained practitioners — transitioning ID from an applied wartime practice into an established academic discipline.",
      },
      {
        year: "1980",
        title: "Personal Computers Arrive in Training",
        description:
          "Apple II and early IBM PCs begin appearing in schools and training centers. Computer-based training (CBT) — delivering lessons through software on floppy disk — becomes the first mainstream technology for self-paced learning. It's limited, text-heavy, and often drill-and-practice, but it marks the beginning of what will become the eLearning industry.",
      },
      {
        year: "1984",
        title: "Andragogy Reshapes Adult Training",
        description:
          "Malcolm Knowles' 'Andragogy in Action' synthesizes decades of work on how adults learn. Andragogy — the art and science of facilitating adult learning — emphasizes self-direction, experience-based relevance, problem-centered design, and intrinsic motivation. It reshapes how instructional designers approach corporate and higher education contexts, moving away from teacher-centered to learner-centered design.",
      },
      {
        year: "1987",
        title: "Multimedia and HyperCard",
        description:
          "Apple releases HyperCard, enabling non-programmers to create interactive, linked content for the first time. Combined with CD-ROM technology, instructional designers begin building multimedia training programs with audio, images, and branching scenarios — a significant leap beyond text-only CBT, and an early glimpse of what interactive learning could become.",
      },
    ],
  },
  {
    id: "era-1990s",
    name: "The Digital Revolution",
    period: "1990s",
    accent: "bg-violet-500",
    textAccent: "text-violet-600 dark:text-violet-400",
    borderAccent: "border-violet-500/40",
    bgAccent: "bg-violet-500/10",
    events: [
      {
        year: "1991",
        title: "The World Wide Web Goes Public",
        description:
          "Tim Berners-Lee's World Wide Web becomes publicly accessible. Within a few years, forward-thinking instructional designers begin exploring web-based training — the ability to deliver learning to anyone with a browser, anywhere in the world, reshapes what's possible. Geography stops being a constraint on learning for the first time in history.",
        milestone: true,
      },
      {
        year: "1994",
        title: "Web-Based Training Begins",
        description:
          "Early web-based training platforms emerge, enabling organizations to deliver asynchronous learning online. The browser becomes the training room. Self-paced online learning scales in ways that classroom instruction never could — and the instructional designer's scope of potential impact grows dramatically.",
      },
      {
        year: "1998",
        title: "SCORM Standardizes eLearning",
        description:
          "The Advanced Distributed Learning (ADL) initiative releases SCORM (Sharable Content Object Reference Model) — a set of technical standards allowing eLearning content to function consistently across different LMS platforms. SCORM becomes the universal packaging and tracking language of digital learning, enabling the eLearning industry to scale without fragmentation.",
        milestone: true,
      },
      {
        year: "1999",
        title: "The Word 'eLearning' Is Coined",
        description:
          "Elliott Masie uses the term 'eLearning' at a CBT Systems conference — the first known public use of the word that will define an entire industry. Dedicated conferences, publications, and technology vendors emerge around the term, formalizing eLearning as a distinct sector.",
      },
    ],
  },
  {
    id: "era-2000s",
    name: "The eLearning Era",
    period: "2000s",
    accent: "bg-cyan-500",
    textAccent: "text-cyan-600 dark:text-cyan-400",
    borderAccent: "border-cyan-500/40",
    bgAccent: "bg-cyan-500/10",
    events: [
      {
        year: "2000",
        title: "LMS Platforms Achieve Mainstream Adoption",
        description:
          "Blackboard, WebCT, and emerging corporate LMS platforms achieve widespread deployment in universities and organizations. For the first time, institutions can manage, track, and report on learning at scale. The LMS becomes the central infrastructure of the L&D function — and sets the stage for two decades of platform-driven training.",
      },
      {
        year: "2001",
        title: "MIT OpenCourseWare Launches",
        description:
          "MIT announces it will make course materials freely available online — a radical act that challenges the economics of education and seeds the open learning movement. It establishes a precedent that access to knowledge should not be gated by geography or tuition.",
      },
      {
        year: "2004",
        title: "Web 2.0 and Social Learning",
        description:
          "Blogs, wikis, and early social platforms give learners the ability to create and share content publicly. George Siemens and Stephen Downes develop Connectivism — a learning theory for the networked age — arguing that learning increasingly happens through connections between people and resources rather than formal instruction alone.",
      },
      {
        year: "2006",
        title: "Kirkpatrick's Four Levels Revisited",
        description:
          "Don and James Kirkpatrick publish an updated framework of the Four Levels of Training Evaluation (Reaction, Learning, Behavior, Results) — cementing it as the primary model for evaluating training effectiveness and connecting L&D work to business outcomes. The model gives instructional designers a shared language for demonstrating impact.",
        milestone: true,
      },
    ],
  },
  {
    id: "era-2010s",
    name: "Mobile, Social & Experience Design",
    period: "2010–2019",
    accent: "bg-rose-500",
    textAccent: "text-rose-600 dark:text-rose-400",
    borderAccent: "border-rose-500/40",
    bgAccent: "bg-rose-500/10",
    events: [
      {
        year: "2010",
        title: "The iPad and the Mobile Learning Shift",
        description:
          "The iPad's launch accelerates a fundamental shift in how learning is consumed. Instructional designers begin designing for context — short, focused, on-demand learning that fits into the learner's workflow rather than pulling them away from it. Microlearning evolves from a format choice into a design philosophy.",
      },
      {
        year: "2012",
        title: "The Year of the MOOC",
        description:
          "Coursera, Udacity, and edX launch, offering free university-level courses to millions globally. The New York Times declares it 'The Year of the MOOC.' The experiment surfaces a critical insight: access to content is not the same as learning — and when courses scale to hundreds of thousands of learners, instructional design quality determines whether anyone actually learns.",
        milestone: true,
      },
      {
        year: "2013",
        title: "xAPI Expands What Counts as Learning Data",
        description:
          "The Experience API (xAPI) is released — a more flexible successor to SCORM that tracks learning anywhere it happens: mobile apps, simulations, workplace performance, social interactions. 'I did this' replaces 'I completed this module' as the atomic unit of learning data, giving organizations a far richer picture of how learning actually occurs.",
      },
      {
        year: "2013",
        title: "Learning Experience Design Emerges",
        description:
          "The concept of Learning Experience Design (LXD) gains traction in the field — borrowing human-centered design and UX methods to put the learner's full emotional and cognitive journey at the center of the design process. LXD expands the instructional designer's responsibility beyond content and objectives to the complete learning experience.",
      },
      {
        year: "2017",
        title: "Skills-Based Learning and LXPs",
        description:
          "Learning Experience Platforms (LXPs) emerge as a learner-first alternative to the traditional LMS — curating personalized content recommendations based on individual skills gaps and career goals. Organizations begin shifting from training catalogs to skills architecture. The L&D conversation evolves from 'did they complete it?' to 'did they grow?'",
      },
    ],
  },
  {
    id: "era-2020s",
    name: "The AI Era",
    period: "2020–Present",
    accent: "bg-accent",
    textAccent: "text-accent",
    borderAccent: "border-accent/40",
    bgAccent: "bg-[var(--accent-glow)]",
    events: [
      {
        year: "2020",
        title: "COVID-19 — The Great Acceleration",
        description:
          "The global pandemic forces organizations worldwide to move all training online in days. What might have taken a decade of gradual adoption happens in weeks. Virtual instructor-led training, asynchronous eLearning, and digital performance support become the default — not the exception. Instructional designers go from a support function to a mission-critical one overnight.",
        milestone: true,
      },
      {
        year: "2022",
        title: "ChatGPT Enters the L&D Workflow",
        description:
          "OpenAI releases ChatGPT in November 2022 — and within weeks, instructional designers are using it to draft learning objectives, generate scenario branches, write storyboards, and prototype content at unprecedented speed. Generative AI enters the field not as a distant speculation but as an immediate daily tool. The question shifts from 'will AI change ID?' to 'how do we use it responsibly?'",
        milestone: true,
      },
      {
        year: "2023",
        title: "AI Tools Flood the L&D Market",
        description:
          "AI-powered authoring tools, content generators, voice synthesis, translation, and personalization engines proliferate rapidly. Organizations experiment with AI across every phase of the ID workflow. Instructional designers find themselves navigating a new core responsibility: ensuring AI-generated content is accurate, pedagogically sound, free of bias, and aligned to genuine performance needs.",
      },
      {
        year: "2024",
        title: "AI Proficiency Becomes a Baseline Skill",
        description:
          "Working effectively with AI tools becomes an expected competency for instructional designers — not a differentiator, but a baseline. The ID role continues to evolve: less time on content production, more time on curation, quality evaluation, needs analysis, and strategic design. The human judgment at the center of the field becomes more valuable, not less.",
      },
      {
        year: "2025+",
        title: "Personalized Learning at Scale",
        description:
          "AI-driven personalization begins to make genuinely adaptive learning achievable — adjusting content, pacing, and practice in real time based on individual learner performance and context. The instructional designer's role continues to shift from builder to architect, from author to strategist. The discipline's core remains unchanged: understanding how people learn, and designing experiences that help them do it better.",
        milestone: true,
      },
    ],
  },
]

export default function IDHistoryPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Page header ─────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <p className="text-sm font-bold uppercase tracking-widest text-accent">Field History</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl">
          Instructional Design History
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-copy-muted">
          From wartime urgency to artificial intelligence — the story of how instructional design
          grew from a military training experiment into one of the most consequential professional
          disciplines of the modern workplace.
        </p>
      </ScrollReveal>

      {/* ── Era nav pills ───────────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <div className="mt-10 flex flex-wrap gap-2">
          {eras.map(era => (
            <a
              key={era.period}
              href={`#${era.id}`}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition-opacity hover:opacity-80 ${era.borderAccent} ${era.textAccent} ${era.bgAccent}`}
            >
              {era.period}
            </a>
          ))}
        </div>
      </ScrollReveal>

      {/* ── Timeline ────────────────────────────────────────────────────────── */}
      <div className="mt-16 space-y-20">
        {eras.map((era, eraIndex) => (
          <Fragment key={era.period}>
          <ScrollReveal delay={(eraIndex % 3) as 0 | 1 | 2}>
            <div id={era.id} className="scroll-mt-24">
              {/* Era header */}
              <div className={`mb-8 rounded-card border p-5 ${era.borderAccent} ${era.bgAccent}`}>
                <p className={`text-xs font-bold uppercase tracking-widest ${era.textAccent}`}>
                  {era.period}
                </p>
                <h2 className="mt-1 text-xl font-extrabold text-heading">{era.name}</h2>
              </div>

              {/* Events */}
              <div className="relative">
                {/* Vertical line */}
                <div className={`absolute left-4 top-0 h-full w-0.5 ${era.accent} opacity-20`} />

                <div className="space-y-6 pl-12">
                  {era.events.map(event => (
                    <div key={event.year} className="relative">
                      {/* Dot on the line */}
                      <div
                        className={`absolute -left-[2.15rem] top-3.5 h-3 w-3 rounded-full border-2 border-surface ${
                          event.milestone ? era.accent : "bg-edge"
                        }`}
                      />

                      <div
                        className={`rounded-card border bg-surface p-5 shadow-card ${
                          event.milestone
                            ? `border-l-4 ${era.borderAccent.replace("/40", "")} border-t border-r border-b border-edge`
                            : "border-edge"
                        }`}
                      >
                        {/* Year badge + milestone label */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${era.bgAccent} ${era.textAccent}`}
                          >
                            {event.year}
                          </span>
                          {event.milestone && (
                            <span className="inline-block rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-dim">
                              Key Milestone
                            </span>
                          )}
                        </div>

                        <h3 className="mt-2.5 text-base font-bold leading-snug text-heading">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-copy-muted">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bundle promo — dropped in about halfway through the timeline */}
          {era.id === "era-1990s" && (
            <ScrollReveal>
              <BundleBanner />
            </ScrollReveal>
          )}
          </Fragment>
        ))}
      </div>

      {/* ── Closing reflection ──────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-20 rounded-card border border-edge bg-surface-2 p-8">
          <h2 className="text-xl font-bold text-heading">
            The Through-Line: Eighty Years and Counting
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-copy-muted">
            <p>
              What&rsquo;s remarkable about the history of instructional design is how consistent the
              core questions have been — even as the tools, contexts, and technologies have changed
              beyond recognition. From 1944 to today, practitioners have been asking the same
              things: What do learners actually need to be able to do? What conditions support that
              learning? How do we know it worked?
            </p>
            <p>
              The medium has evolved from film reels to floppy disks to web browsers to mobile apps
              to generative AI. The organizational contexts have shifted from military bases to
              corporate headquarters to living rooms. But the discipline at the center —
              systematic, learner-centered, evidence-informed design — has not changed. If anything,
              it has become more important.
            </p>
            <p>
              Every era brought its own version of disruption, and every era required instructional
              designers to adapt, grow, and lead. The AI era is no different. The field has been
              here before. It knows how to evolve.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Course promo banner ─────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-12 rounded-card border border-edge bg-surface p-6 shadow-card">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            Featured Course
          </p>
          <Link
            href="/instructional-design-course"
            className="mt-2 block text-lg font-extrabold tracking-tight text-heading transition-colors hover:text-accent"
          >
            Instructional Design Foundations Course &amp; Certificate
          </Link>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <div className="mt-4 flex items-start gap-5">
            <div className="mt-1 hidden h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] sm:flex">
              <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium leading-relaxed text-copy-muted">
                You&rsquo;ve just walked through eighty years of instructional design history.
                Now build the skills that define the next chapter of your own career. The IDC
                Foundations Course covers everything from the core models and learning theories
                that shaped the field — to the practical workflows and AI tools that are reshaping it
                right now. Earn your certificate and get started today.
              </p>
              <Link
                href="/instructional-design-course"
                className="btn-shadow mt-4 inline-flex self-start items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
              >
                Start the Course
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

    </div>
  )
}
