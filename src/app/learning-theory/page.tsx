import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Learning Theory Overview",
  description:
    "Explore the major learning theories in instructional design — Behaviorism, Cognitivism, Constructivism, Social Learning Theory, and Experiential Learning — with key influencers and practical applications for each.",
  path: "/learning-theory",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Learning Theory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Learning theory is the study of how people learn and the psychological and cognitive principles behind the learning process. Major learning theories include behaviorism, cognitivism, constructivism, social learning theory, and experiential learning. Understanding learning theory is foundational for instructional designers who want to create evidence-based, effective learning experiences.",
      },
    },
    {
      "@type": "Question",
      name: "What are the major learning theories in instructional design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The major learning theories relevant to instructional design are: Behaviorism (learning as observable behavior change through reinforcement); Cognitivism (learning as mental processing, schemas, and memory); Constructivism (learning as active knowledge construction through experience); Social Learning Theory (learning through observation and social interaction); and Experiential Learning Theory (learning through reflection on concrete experience). Each offers different strategies for designing effective learning.",
      },
    },
    {
      "@type": "Question",
      name: "How does learning theory apply to instructional design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Learning theories directly inform instructional design decisions. Behaviorism supports drill-and-practice and immediate feedback. Cognitivism informs how content is chunked, sequenced, and organized. Constructivism drives problem-based and scenario-based learning. Social Learning Theory supports mentoring, modeling, and collaborative activities. Experiential Learning Theory underpins simulations, reflection exercises, and action learning. Skilled instructional designers draw on multiple theories to match strategy to learning goal.",
      },
    },
  ],
}

const theories = [
  {
    id: "behaviorism",
    name: "Behaviorism",
    tagline: "Learning as observable behavior change",
    overview: `Behaviorism is one of the oldest and most influential learning theories. It holds that learning is a change in observable behavior brought about by experience — specifically, through the relationship between stimuli (inputs from the environment) and responses (the learner's reactions). What happens inside the mind is considered a "black box" — behaviorists focus exclusively on what can be measured and observed from the outside.

The core mechanism of behaviorist learning is conditioning. Classical conditioning, established by Pavlov, shows how a neutral stimulus can come to produce a response when repeatedly paired with one that already does. Operant conditioning, developed by Skinner, explains how behavior is shaped by its consequences — reinforced behaviors increase, punished behaviors decrease. Positive reinforcement (rewarding desired behavior) is the most widely applied principle in instructional design.`,
    influencers: [
      {
        name: "Ivan Pavlov",
        contribution:
          "Discovered classical conditioning through his experiments with dogs — establishing that reflexive responses can be learned through repeated association.",
      },
      {
        name: "John B. Watson",
        contribution:
          "Founded behaviorism as a formal school of psychology, arguing that only observable behavior — not mental states — should be the subject of scientific study.",
      },
      {
        name: "B.F. Skinner",
        contribution:
          "Developed operant conditioning and the concept of reinforcement schedules. His work on programmed instruction directly shaped early eLearning design.",
      },
      {
        name: "Edward Thorndike",
        contribution:
          'Proposed the "Law of Effect" — that behaviors followed by satisfying outcomes are more likely to be repeated — laying groundwork for reinforcement theory.',
      },
    ],
    applications: [
      {
        title: "Immediate feedback on assessments",
        description:
          "Providing correct/incorrect feedback instantly after each quiz question reinforces right answers and discourages incorrect patterns — a direct application of operant conditioning.",
      },
      {
        title: "Drill and practice modules",
        description:
          "Repetition-based practice with consistent reinforcement, common in compliance training, safety procedures, and skill-building where accuracy matters.",
      },
      {
        title: "Gamification and reward systems",
        description:
          "Points, badges, leaderboards, and streaks apply reinforcement schedules to motivate continued engagement and behavior change.",
      },
      {
        title: "Behavior-based checklists",
        description:
          "Breaking complex skills into discrete, observable steps and tracking completion — used widely in onboarding and technical training.",
      },
    ],
  },
  {
    id: "cognitivism",
    name: "Cognitivism",
    tagline: "Learning as mental processing and knowledge organization",
    overview: `Cognitivism emerged in the mid-20th century as a response to the limitations of behaviorism. Where behaviorists focused entirely on observable behavior, cognitivists opened the "black box" of the mind. Learning, in this view, is the process of acquiring, organizing, storing, and retrieving information — it's fundamentally about how the brain processes and makes sense of the world.

Key concepts include schema theory (learners build and refine mental frameworks called schemas), working memory and cognitive load (the mind has limited capacity — well-designed instruction respects that limit), and long-term memory encoding (information is retained better when it's meaningfully connected to what learners already know). Cognitivism gave instructional designers a rich vocabulary for talking about how learning actually works inside the learner.`,
    influencers: [
      {
        name: "Jean Piaget",
        contribution:
          "Described how learners construct and reorganize mental schemas through assimilation and accommodation — foundational to both cognitivism and constructivism.",
      },
      {
        name: "Jerome Bruner",
        contribution:
          "Advocated for discovery learning and the spiral curriculum — the idea that core concepts should be revisited repeatedly at increasing levels of complexity.",
      },
      {
        name: "George Miller",
        contribution:
          'Published the landmark "The Magical Number Seven" — establishing that working memory has a limited capacity of roughly seven items, which directly informs content chunking.',
      },
      {
        name: "John Sweller",
        contribution:
          "Developed Cognitive Load Theory, distinguishing between intrinsic, extraneous, and germane load — one of the most practically useful frameworks in instructional design.",
      },
      {
        name: "David Ausubel",
        contribution:
          'Introduced the concept of advance organizers and meaningful learning — the idea that new knowledge must connect to existing knowledge to be retained, not just memorized.',
      },
    ],
    applications: [
      {
        title: "Chunking content into manageable units",
        description:
          "Breaking lessons into focused segments of 5–10 minutes respects working memory limits and reduces cognitive overload.",
      },
      {
        title: "Advance organizers and pre-training",
        description:
          "Giving learners a conceptual overview or key vocabulary before diving into complex material primes their schemas and improves retention.",
      },
      {
        title: "Worked examples and guided practice",
        description:
          "Showing learners a fully worked example before asking them to solve a problem on their own reduces extraneous cognitive load while building schema.",
      },
      {
        title: "Spaced repetition and retrieval practice",
        description:
          "Revisiting content at increasing intervals — rather than cramming — dramatically improves long-term retention by leveraging how memory consolidates over time.",
      },
    ],
  },
  {
    id: "constructivism",
    name: "Constructivism",
    tagline: "Learning as active knowledge construction through experience",
    overview: `Constructivism holds that learners don't passively receive knowledge — they actively build it. Every new experience is interpreted through the lens of what the learner already knows, believes, and has lived. Knowledge isn't transferred from teacher to student like a file upload; it's constructed through engagement, reflection, and meaning-making.

There are two main branches. Cognitive constructivism (Piaget) focuses on how individuals construct knowledge through personal experience and reflection. Social constructivism (Vygotsky) emphasizes that knowledge construction is inherently social — we learn through interaction, language, collaboration, and cultural context. Both branches have profoundly shaped modern instructional design, driving the shift away from lecture-and-test toward problem-based, scenario-based, and project-based learning.`,
    influencers: [
      {
        name: "Jean Piaget",
        contribution:
          "The foundation of cognitive constructivism. Piaget showed that learners actively construct understanding through stages of development and direct interaction with their environment.",
      },
      {
        name: "Lev Vygotsky",
        contribution:
          'Introduced the Zone of Proximal Development (ZPD) — the gap between what a learner can do independently and what they can do with support. Scaffolding and collaborative learning emerge directly from this concept.',
      },
      {
        name: "John Dewey",
        contribution:
          "Championed learning by doing and the importance of real-world experience. His work laid the philosophical foundation for experiential and problem-based learning.",
      },
      {
        name: "Jerome Bruner",
        contribution:
          "Advocated for inquiry-based learning and narrative as a vehicle for meaning-making. His concept of scaffolded instruction aligns directly with Vygotsky's ZPD.",
      },
    ],
    applications: [
      {
        title: "Scenario-based and case-based learning",
        description:
          "Placing learners in realistic, ambiguous situations where they must apply knowledge to solve problems — building understanding through active engagement rather than passive reading.",
      },
      {
        title: "Project-based learning",
        description:
          "Assigning meaningful, real-world projects as the vehicle for learning — learners construct knowledge by doing work that mirrors what they'd do on the job.",
      },
      {
        title: "Collaborative activities and discussion",
        description:
          "Group problem-solving, peer feedback, and discussion forums leverage social constructivism — learners build understanding by articulating ideas and challenging each other.",
      },
      {
        title: "Scaffolded practice with gradual release",
        description:
          "Starting with heavy instructor support and progressively pulling back as learners develop confidence — directly applying Vygotsky's ZPD in course design.",
      },
    ],
  },
  {
    id: "social-learning",
    name: "Social Learning Theory",
    tagline: "Learning through observation, modeling, and social interaction",
    overview: `Social Learning Theory, developed primarily by Albert Bandura, bridges behaviorism and cognitivism by recognizing that much of what humans learn happens through watching others — not just through direct experience or reinforcement. We observe how other people behave, note the consequences, and use that information to guide our own actions.

Bandura identified four conditions required for observational learning: attention (the learner must notice the behavior), retention (it must be stored in memory), reproduction (the learner must be capable of performing it), and motivation (there must be a reason to do so). His concept of self-efficacy — a person's belief in their own ability to succeed — has become one of the most influential ideas in educational psychology. Learners with high self-efficacy set more ambitious goals, persist longer, and recover more quickly from setbacks.`,
    influencers: [
      {
        name: "Albert Bandura",
        contribution:
          "The defining figure of Social Learning Theory. His Bobo doll experiments demonstrated observational learning, and his concept of self-efficacy transformed how we think about motivation and performance.",
      },
      {
        name: "Lev Vygotsky",
        contribution:
          "Emphasized the role of social interaction and cultural context in learning — his work on language, collaboration, and the ZPD is deeply aligned with social learning principles.",
      },
      {
        name: "Julian Rotter",
        contribution:
          "Developed the concept of locus of control — whether people believe outcomes are shaped by their own actions (internal) or outside forces (external) — which intersects with Bandura's self-efficacy work.",
      },
    ],
    applications: [
      {
        title: "Modeling and worked demonstrations",
        description:
          "Showing learners an expert performing a skill correctly before asking them to try — video demonstrations, SME walkthroughs, and think-aloud protocols all leverage observational learning.",
      },
      {
        title: "Peer learning and cohort-based programs",
        description:
          "Structured peer feedback, buddy systems, and learning cohorts create social accountability and allow learners to observe and learn from each other's work and approaches.",
      },
      {
        title: "Mentoring and coaching programs",
        description:
          "Formal mentoring relationships give learners a role model to observe, ask questions, and receive guided feedback — one of the most powerful and underused learning interventions.",
      },
      {
        title: "Building self-efficacy into course design",
        description:
          "Sequencing early wins before harder challenges, providing specific positive feedback, and including stories of people similar to the learner who succeeded — all proven self-efficacy builders.",
      },
    ],
  },
  {
    id: "experiential",
    name: "Experiential Learning Theory",
    tagline: "Learning as a cycle of doing, reflecting, and applying",
    overview: `Experiential Learning Theory, developed by David Kolb, proposes that learning is not a passive event — it's a cycle that begins with concrete experience and moves through reflection, conceptualization, and active experimentation. In Kolb's model, you don't truly learn something until you've done it, thought about what happened, made sense of it in a broader framework, and tried a new approach based on what you learned.

Kolb identified four learning styles — Diverger, Assimilator, Converger, and Accommodator — based on where in the cycle learners feel most at home. While the rigid application of learning styles has been questioned by research, the core insight of the cycle remains powerful: real learning requires both experience and reflection. Instruction that skips reflection (doing without thinking) or skips experience (theory without practice) produces shallow, short-lived learning.`,
    influencers: [
      {
        name: "David Kolb",
        contribution:
          "Developed the Experiential Learning Cycle — the foundational model showing how learning moves through concrete experience, reflective observation, abstract conceptualization, and active experimentation.",
      },
      {
        name: "John Dewey",
        contribution:
          "The philosophical forefather of experiential learning. Dewey argued that education must connect to real life and that reflection on experience is what transforms it into learning.",
      },
      {
        name: "Kurt Lewin",
        contribution:
          "Action research pioneer whose work on group dynamics and feedback loops directly influenced Kolb's model — showing that reflection and iteration are essential to change.",
      },
      {
        name: "Carl Rogers",
        contribution:
          "Humanist psychologist who emphasized learner agency, self-direction, and the importance of personally meaningful experience — deeply aligned with experiential learning principles.",
      },
    ],
    applications: [
      {
        title: "Simulations and role-play",
        description:
          "Placing learners in realistic, consequence-safe environments where they practice real skills — from customer service conversations to clinical procedures — and debrief afterward.",
      },
      {
        title: "Reflection exercises and learning journals",
        description:
          "Structured prompts that ask learners to connect new content to their own experience — activating the reflective observation stage of the learning cycle.",
      },
      {
        title: "Action learning projects",
        description:
          "Assigning learners a real workplace problem to investigate and solve during the course — learning happens through the work itself, not in preparation for it.",
      },
      {
        title: "Debriefs and after-action reviews",
        description:
          "Structured discussions after a simulation, exercise, or experience that extract the learning — asking 'what happened, why, and what would you do differently?' closes the experiential loop.",
      },
    ],
  },
]

export default function LearningTheoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
        eyebrow="Foundations"
        title="Learning Theory for Instructional Designers"
        subtitle="The major theories behind how people learn — and how to put each one to work in your design practice."
      >
        <p>
          Every instructional design decision you make rests on a theory of how people learn —
          whether you&rsquo;re aware of it or not. When you chunk content into short modules,
          you&rsquo;re applying cognitivism. When you build a branching scenario, you&rsquo;re
          drawing on constructivism. When you include a video of an expert demonstrating a skill,
          you&rsquo;re leveraging social learning theory. Understanding these frameworks doesn&rsquo;t
          just make you a better designer — it gives you a principled way to explain your decisions
          to stakeholders and adapt your approach when a strategy isn&rsquo;t working.
        </p>

        <p>
          Below are the five learning theories most relevant to modern instructional design practice.
          Each one offers a distinct lens on the learning process, and skilled IDs draw on all of them.
        </p>

        {theories.map((theory) => (
          <div key={theory.id} className="mt-14">

            {/* Theory header */}
            <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Learning Theory
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-tight text-heading">
                {theory.name}
              </h2>
              <p className="mt-1 text-sm font-semibold text-copy-muted">{theory.tagline}</p>
              <div className="mt-4 h-0.5 w-8 rounded bg-accent opacity-60" />
              {theory.overview.split("\n\n").map((para, i) => (
                <p key={i} className="mt-4 text-sm font-medium leading-relaxed text-copy-muted">
                  {para}
                </p>
              ))}
            </div>

            {/* Key influencers */}
            <h3 className="mt-8 text-base font-extrabold tracking-tight text-heading">
              Key Influencers
            </h3>
            <div className="mt-4 space-y-3">
              {theory.influencers.map((person) => (
                <div
                  key={person.name}
                  className="flex items-start gap-4 rounded-card border border-edge bg-surface p-4 shadow-card"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-copy">{person.name}</p>
                    <p className="mt-0.5 text-xs font-medium leading-relaxed text-copy-muted">
                      {person.contribution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Practical applications */}
            <h3 className="mt-8 text-base font-extrabold tracking-tight text-heading">
              Practical Applications
            </h3>
            <p className="mt-2 text-sm font-medium text-copy-muted">
              How {theory.name.toLowerCase()} shows up in real instructional design work:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {theory.applications.map((app) => (
                <div
                  key={app.title}
                  className="rounded-card border border-edge bg-surface p-4 shadow-card"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)]">
                      <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p className="text-sm font-extrabold text-copy">{app.title}</p>
                  </div>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-copy-muted">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}

        <div className="mt-14 rounded-card border border-edge bg-surface p-6 shadow-card">
          <h2 className="text-base font-extrabold text-copy">
            No single theory does everything
          </h2>
          <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            The strongest instructional designers don&rsquo;t pledge allegiance to one theory —
            they draw on all of them. A compliance course might lean heavily on behaviorism for
            its feedback mechanisms. A leadership development program might center constructivism
            and social learning. An onboarding program might weave in experiential learning through
            early real-work assignments. The framework you reach for should be driven by the
            learning goal, the audience, and the context — not habit or default.
          </p>
          <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
            Knowing these theories gives you the vocabulary to design with intention, explain your
            choices with confidence, and adapt when something isn&rsquo;t working. That&rsquo;s
            what separates a practitioner from someone who just builds courses.
          </p>
        </div>

      </ContentPage>
    </>
  )
}
