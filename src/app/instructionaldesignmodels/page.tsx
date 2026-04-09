import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Models",
  description:
    "View industry standard instructional design models, learning theory, methods, learning strategies, & instructional design principles such as the ADDIE model.",
  path: "/instructionaldesignmodels",
})

export default function IDModelsPage() {
  return (
    <ContentPage
      eyebrow="Frameworks & Models"
      title="Instructional Design Models"
      subtitle="The most important ID frameworks and when to use each one."
    >
      <p>
        If you&rsquo;ve ever felt like learning theory lives in a world of its own — full of
        concepts that are interesting in the abstract but hard to apply on a real project — you&rsquo;re
        not alone. That&rsquo;s exactly what instructional design models are built to solve. They take
        those foundational principles and turn them into actionable frameworks: structured processes
        that guide you from identifying a learning need all the way through to evaluating whether
        your solution actually worked. Think of an ID model as a blueprint for building effective
        learning experiences. Most share common principles and patterns, and knowing several of
        them gives you the flexibility to choose the right approach for each project you take on.
        Below is a collection of the most widely used instructional design models — including the
        ADDIE model — that practitioners rely on to design learning experiences, courses, and
        instructional content.
      </p>

      {/* ── ADDIE Model ──────────────────────────────────────────────────── */}
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
        ADDIE Model
      </h2>

      <p>
        The ADDIE Model was first developed for the U.S. Military in the 1970s by Florida State
        University and has since become the most widely recognized framework in the instructional
        design field. ADDIE is an acronym representing a five-phase course development process.
        The model generally consists of five interrelated phases — Analysis, Design, Development,
        Implementation, and Evaluation — that together form a flexible guideline for building
        effective training and instructional materials. While the phases are often depicted
        sequentially, in practice they are iterative: findings from one phase routinely inform
        adjustments in another. Its enduring popularity stems from its adaptability; the ADDIE
        framework can be applied to everything from a 15-minute microlearning module to a
        multi-year enterprise training program.
      </p>

      {/* ADDIE Illustration */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 520 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-2xl"
          aria-label="ADDIE Model diagram showing five phases in sequence"
          role="img"
        >
          {/* Arrow connectors */}
          {[110, 210, 310, 410].map((x) => (
            <g key={x}>
              <line x1={x} y1="80" x2={x + 15} y2="80" stroke="#94a3b8" strokeWidth="2" />
              <polygon points={`${x + 15},75 ${x + 22},80 ${x + 15},85`} fill="#94a3b8" />
            </g>
          ))}

          {/* Phase boxes */}
          {[
            { x: 10,  label: "Analysis",       abbr: "A", color: "#6366f1" },
            { x: 110, label: "Design",          abbr: "D", color: "#8b5cf6" },
            { x: 210, label: "Development",     abbr: "D", color: "#a855f7" },
            { x: 310, label: "Implementation",  abbr: "I", color: "#c084fc" },
            { x: 410, label: "Evaluation",      abbr: "E", color: "#e879f9" },
          ].map(({ x, label, abbr, color }) => (
            <g key={label}>
              <rect x={x} y="30" width="100" height="100" rx="8" fill={color} />
              <text
                x={x + 50}
                y="68"
                textAnchor="middle"
                fill="white"
                fontSize="28"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {abbr}
              </text>
              <text
                x={x + 50}
                y="108"
                textAnchor="middle"
                fill="white"
                fontSize="10"
                fontFamily="sans-serif"
              >
                {label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <h3 className="mt-8 text-lg font-bold text-copy">Analysis</h3>
      <p>
        The Analysis phase is the foundation of the entire ADDIE process. Here, the instructional
        problem is clearly identified and the gap between current and desired performance is
        established. Instructional goals, success metrics, and overall learning objectives are
        defined. Equally important is gathering information about the learners themselves — their
        existing knowledge and skills, learning environment, demographics, motivations, and any
        technological constraints they may face. For example, a corporate training designer might
        conduct surveys, interviews, and job task analyses to understand what a sales team currently
        knows versus what they need to know to hit their targets. The quality of every subsequent
        phase depends on the thoroughness of the analysis; skipping or rushing this step is one of
        the most common sources of ineffective training.
      </p>

      <h3 className="mt-8 text-lg font-bold text-copy">Design</h3>
      <p>
        The Design phase translates the findings from analysis into a concrete blueprint for the
        learning solution. This phase nails down specific, measurable learning objectives (often
        written using Bloom&rsquo;s Taxonomy), instructional strategies and methods, assessment
        approaches, content sequencing, storyboards, lesson outlines, and required media assets.
        Decisions about delivery format — instructor-led training, eLearning, blended learning,
        job aids, and so on — are made here. A well-executed design phase produces documentation
        detailed enough that a different developer could build the course from it. For instance, a
        storyboard might specify exactly which on-screen text, narration, interactions, and
        branching scenarios appear on each slide of a compliance course, long before a single piece
        of content is actually produced.
      </p>

      <h3 className="mt-8 text-lg font-bold text-copy">Development</h3>
      <p>
        The Development phase is where the instructional designer — often in collaboration with
        subject matter experts, graphic designers, and developers — brings the design blueprint to
        life. Content is written, graphics and illustrations are created, audio narration is
        recorded, and interactive elements are built and assembled into a cohesive learning
        experience. Authoring tools such as Articulate Storyline, Adobe Captivate, or Rise 360 are
        commonly used in this phase. Prototypes and pilot versions are typically reviewed and
        revised before full-scale production. For example, a developer might build a clickable
        prototype of an eLearning module, gather feedback from a small group of target learners,
        and then refine the interactions before publishing the final version to an LMS.
      </p>

      <h3 className="mt-8 text-lg font-bold text-copy">Implementation</h3>
      <p>
        During the Implementation phase, the completed instructional materials are deployed and
        delivered to learners. This may mean uploading a SCORM package to a Learning Management
        System (LMS), delivering instructor-led sessions, or distributing job aids and performance
        support tools. The instructional designer also facilitates any training needed for
        trainers, facilitators, subject matter experts, or instructors responsible for delivering
        the content. Logistical considerations — scheduling, learner enrollment, technical
        troubleshooting, and communication plans — are all managed in this phase. A smooth
        implementation ensures that the learning environment supports engagement and minimizes
        barriers between the learner and the content.
      </p>

      <h3 className="mt-8 text-lg font-bold text-copy">Evaluation</h3>
      <p>
        The Evaluation phase determines whether the instructional solution achieved its intended
        goals and identifies opportunities for improvement. Evaluation in ADDIE typically takes two
        forms. <strong>Formative evaluation</strong> is ongoing and iterative — it occurs
        throughout the design and development phases via reviews, pilot tests, and stakeholder
        feedback loops. <strong>Summative evaluation</strong> occurs after implementation and
        measures the actual impact of the training: learner reactions, knowledge or skill
        acquisition, behavior change on the job, and organizational results. Kirkpatrick&rsquo;s
        Four Levels of Evaluation is a widely used framework for structuring summative measurement.
        The results from both types of evaluation feed back into the Analysis phase, reinforcing
        the cyclical, iterative nature of the ADDIE model and ensuring continuous improvement over
        time.
      </p>

      {/* ── Agile Instructional Design ───────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Agile Instructional Design
      </h2>

      <p>
        Agile Instructional Design applies the principles of Agile software development to the
        process of creating learning products. Where traditional models like ADDIE follow a largely
        sequential path — complete one phase before moving to the next — Agile ID organizes work
        into short, repeatable cycles called <strong>sprints</strong> (typically one to four weeks),
        each producing a small, functional piece of the larger learning solution. The approach
        emerged from the broader Agile movement formalized in the 2001 Agile Manifesto, which
        prioritized working software over comprehensive documentation, customer collaboration over
        contract negotiation, and responding to change over following a plan. Applied to
        instructional design, these values translate directly: working learning content over
        exhaustive design documents, close stakeholder collaboration, and the ability to adapt
        scope and direction based on feedback at every sprint.
      </p>
      <p>
        Agile ID is not a single prescribed model but rather a philosophy and a set of practices.
        Teams implementing it typically draw from frameworks such as Scrum or Kanban, adapting
        their rituals — sprint planning, daily standups, retrospectives, and backlog grooming — to
        fit the context of learning development. Specific Agile-influenced ID models like Michael
        Allen&rsquo;s Successive Approximation Model (SAM) operationalize these principles within
        an instructional design context. Agile ID is especially well-suited to fast-moving
        organizations, eLearning-heavy teams, and projects where requirements are likely to evolve
        over time.
      </p>

      {/* Agile ID Illustration */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 400 220"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-lg"
          aria-label="Agile Instructional Design diagram showing iterative sprint cycle"
          role="img"
        >
          {/* Central sprint circle */}
          <circle cx="200" cy="110" r="55" fill="#6366f1" />
          <text x="200" y="105" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Sprint</text>
          <text x="200" y="122" textAnchor="middle" fill="#e0e7ff" fontSize="10" fontFamily="sans-serif">1–4 weeks</text>

          {/* Orbit labels */}
          {[
            { label: "Plan",     x: 200, y: 28  },
            { label: "Build",    x: 340, y: 110 },
            { label: "Review",   x: 200, y: 192 },
            { label: "Reflect",  x: 60,  y: 110 },
          ].map(({ label, x, y }) => (
            <g key={label}>
              <circle cx={x} cy={y} r="26" fill="#8b5cf6" />
              <text x={x} y={y + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">{label}</text>
            </g>
          ))}

          {/* Curved arrows connecting orbit nodes */}
          <path d="M 213,54  A 80,80 0 0,1 314,97"  stroke="#c4b5fd" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
          <polygon points="314,97 320,91 321,100" fill="#c4b5fd" />

          <path d="M 314,123 A 80,80 0 0,1 213,166" stroke="#c4b5fd" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
          <polygon points="213,166 207,172 206,163" fill="#c4b5fd" />

          <path d="M 187,166 A 80,80 0 0,1 86,123"  stroke="#c4b5fd" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
          <polygon points="86,123 79,128 80,119" fill="#c4b5fd" />

          <path d="M 86,97  A 80,80 0 0,1 187,54"   stroke="#c4b5fd" strokeWidth="1.5" fill="none" strokeDasharray="4 2" />
          <polygon points="187,54 193,48 194,57" fill="#c4b5fd" />
        </svg>
      </div>

      <h3 className="mt-8 text-lg font-bold text-copy">Core Agile ID Practices</h3>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Sprint-based development:</strong> Work is broken into small, time-boxed cycles,
          each delivering a reviewable, usable piece of content — a single module, a scenario, a
          job aid. This prevents the all-too-common experience of spending months on development
          only to discover the content missed the mark.
        </li>
        <li>
          <strong>Backlog management:</strong> All project tasks and content requirements are
          maintained in a prioritized backlog. Stakeholders and IDs review and re-prioritize the
          backlog regularly, allowing scope to shift as business needs change without derailing
          the project.
        </li>
        <li>
          <strong>Continuous stakeholder collaboration:</strong> Rather than conducting a single
          large review at the end of development, Agile ID builds stakeholder feedback into every
          sprint. SMEs and business owners review working content regularly, reducing the risk of
          large late-stage revisions.
        </li>
        <li>
          <strong>Retrospectives:</strong> At the end of each sprint, the team reflects on what
          worked, what didn&rsquo;t, and how to improve. This creates a culture of continuous
          process improvement that makes each sprint more efficient than the last.
        </li>
        <li>
          <strong>Minimal viable product (MVP) thinking:</strong> Agile ID encourages shipping a
          functional core learning experience first, then iterating and enriching based on real
          learner data — rather than waiting until everything is &ldquo;perfect&rdquo; to launch.
        </li>
      </ul>

      {/* ── Action Mapping ───────────────────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Action Mapping
      </h2>

      <p>
        Action Mapping is a visual, performance-centered approach to learning design created by
        Cathy Moore. Where many traditional models begin with content — &ldquo;what does the
        learner need to know?&rdquo; — Action Mapping deliberately flips that question: &ldquo;what
        does the learner need to <em>do</em> differently?&rdquo; The result is instructional
        design that is tightly aligned to business goals and learner behavior, rather than to
        information delivery. By mapping every learning activity back to a specific action that
        supports a measurable business goal, Action Mapping helps instructional designers strip away
        extraneous content, push back against stakeholder requests to &ldquo;cover everything,&rdquo;
        and build experiences that are 100% dedicated to improving performance. It is well-suited
        for eLearning, simulations, and in-person training events.
      </p>

      {/* Action Mapping Illustration */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 400 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-lg"
          aria-label="Action Mapping diagram showing a business goal branching to actions and practice activities"
          role="img"
        >
          {/* Center goal circle */}
          <circle cx="200" cy="150" r="45" fill="#6366f1" />
          <text x="200" y="145" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Business</text>
          <text x="200" y="159" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Goal</text>

          {/* Action nodes and connectors */}
          {[
            { cx: 80,  cy: 60,  label: "Action 1" },
            { cx: 320, cy: 60,  label: "Action 2" },
            { cx: 80,  cy: 240, label: "Action 3" },
            { cx: 320, cy: 240, label: "Action 4" },
          ].map(({ cx, cy, label }) => (
            <g key={label}>
              <line
                x1="200" y1="150"
                x2={cx + (cx < 200 ? 28 : -28)}
                y2={cy + (cy < 150 ? 18 : -18)}
                stroke="#94a3b8" strokeWidth="1.5"
              />
              <circle cx={cx} cy={cy} r="28" fill="#8b5cf6" />
              <text x={cx} y={cy + 5} textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif">{label}</text>
            </g>
          ))}

          {/* Practice activity nodes */}
          {[
            { cx: 30,  cy: 20,  parent: { cx: 80, cy: 60 } },
            { cx: 130, cy: 20,  parent: { cx: 80, cy: 60 } },
            { cx: 270, cy: 20,  parent: { cx: 320, cy: 60 } },
            { cx: 370, cy: 20,  parent: { cx: 320, cy: 60 } },
            { cx: 30,  cy: 280, parent: { cx: 80, cy: 240 } },
            { cx: 130, cy: 280, parent: { cx: 80, cy: 240 } },
            { cx: 270, cy: 280, parent: { cx: 320, cy: 240 } },
            { cx: 370, cy: 280, parent: { cx: 320, cy: 240 } },
          ].map(({ cx, cy, parent }, i) => (
            <g key={i}>
              <line
                x1={parent.cx} y1={parent.cy}
                x2={cx} y2={cy}
                stroke="#c4b5fd" strokeWidth="1"
              />
              <rect x={cx - 18} y={cy - 10} width="36" height="20" rx="4" fill="#c084fc" />
              <text x={cx} y={cy + 4} textAnchor="middle" fill="white" fontSize="7" fontFamily="sans-serif">Activity</text>
            </g>
          ))}
        </svg>
      </div>

      <p>
        The Action Mapping process begins by defining a measurable business goal — not a learning
        objective, but a real organizational outcome such as &ldquo;reduce customer complaints by
        20%.&rdquo; From there, the designer works with stakeholders to identify the specific
        on-the-job <strong>actions</strong> people need to take (or stop taking) to reach that
        goal. Each action then branches into targeted <strong>practice activities</strong> that
        let learners rehearse those behaviors in context — scenarios, simulations, decision-making
        exercises. Information is included only when it directly enables a required action; if a
        piece of content can&rsquo;t be linked back to a behavior that supports the goal, it
        doesn&rsquo;t make the cut. This discipline keeps courses lean, purposeful, and genuinely
        useful. Action Mapping is especially powerful in corporate learning environments where
        stakeholders have a tendency to equate &ldquo;more information&rdquo; with better
        training.
      </p>

      {/* ── Learning Circle Framework ─────────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Learning Circle Framework™
      </h2>

      <p>
        The Learning Circle Framework™ is an original instructional design model created by
        Instructional Design Central (IDC). Designed for today&rsquo;s fluid, fast-moving
        workforce, it provides a simple, modern three-phase process for rapidly building and
        presenting a complete learning design strategy. The framework is grounded in contemporary
        learning design principles and product development thinking — making it accessible to both
        seasoned IDs and those newer to the field who need a clear, actionable starting point. Its
        circular structure reinforces the iterative nature of effective instructional design:
        each project cycle generates insights that feed directly back into the next.
      </p>

      {/* Learning Circle Framework Illustration */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-xs"
          aria-label="Learning Circle Framework diagram showing three phases in a circular arrangement"
          role="img"
        >
          {/* Outer ring segments using arcs */}
          {/* Phase 1 — top */}
          <path d="M150,150 L150,30 A120,120 0 0,1 253.9,90 Z" fill="#6366f1" opacity="0.9" />
          <text x="185" y="80" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif" transform="rotate(30,185,80)">Discover</text>

          {/* Phase 2 — bottom right */}
          <path d="M150,150 L253.9,90 A120,120 0 0,1 150,270 Z" fill="#8b5cf6" opacity="0.9" />
          <text x="230" y="190" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Design</text>

          {/* Phase 3 — bottom left */}
          <path d="M150,150 L150,270 A120,120 0 0,1 46.1,90 Z" fill="#c084fc" opacity="0.9" />
          <text x="75" y="220" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Deliver</text>

          {/* Connector arc back to top */}
          <path d="M150,150 L46.1,90 A120,120 0 0,1 150,30 Z" fill="#6366f1" opacity="0.5" />

          {/* Center circle */}
          <circle cx="150" cy="150" r="50" fill="white" />
          <text x="150" y="144" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Learning</text>
          <text x="150" y="158" textAnchor="middle" fill="#6366f1" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Circle</text>
          <text x="150" y="170" textAnchor="middle" fill="#8b5cf6" fontSize="9" fontFamily="sans-serif">Framework™</text>

          {/* Rotation arrows */}
          <path d="M150,38 Q175,25 185,45" stroke="white" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 Z" fill="white" />
            </marker>
          </defs>
        </svg>
      </div>

      <p>
        The Learning Circle Framework™ organizes learning design into three intuitive phases that
        move from understanding the problem, to crafting the solution, to putting it in front of
        learners. The cyclical nature of the model reflects a core principle: learning design is
        never truly &ldquo;done.&rdquo; Each delivery generates new data about what worked and
        what didn&rsquo;t, feeding the next discovery phase and continuing the cycle of
        improvement. This makes the framework well-suited for organizations looking to build a
        sustainable, continuously improving learning culture rather than treating each training
        project as a one-time event. For more detail on each phase, see the full{" "}
        <a href="/learning-circle-framework" className="text-accent hover:underline">
          Learning Circle Framework™ overview
        </a>
        .
      </p>

      {/* ── Merrill's First Principles of Instruction ────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Merrill&rsquo;s First Principles of Instruction
      </h2>

      <p>
        Developed by educational psychologist M. David Merrill, the First Principles of Instruction
        is a synthesis of best practices drawn from a wide range of instructional design models and
        theories. Merrill argued that despite the diversity of existing approaches, the most
        effective learning environments share a common core: they are <em>problem-based</em> and
        they move learners through four distinct phases of engagement with new knowledge. His
        research found that most instructional practice concentrates heavily on the demonstration
        phase — presenting information — while neglecting the activation, application, and
        integration phases that are equally essential for durable learning. The First Principles
        model is less a step-by-step process than a set of five evidence-based prescriptions that
        can be applied within any instructional design framework.
      </p>

      {/* Merrill's First Principles Illustration */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 480 220"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-2xl"
          aria-label="Merrill's First Principles diagram showing five principles building on a problem-centered foundation"
          role="img"
        >
          {/* Foundation bar */}
          <rect x="20" y="160" width="440" height="44" rx="8" fill="#6366f1" />
          <text x="240" y="179" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Problem-Centered</text>
          <text x="240" y="195" textAnchor="middle" fill="white" fontSize="9" fontFamily="sans-serif">Real-world tasks as the organizing context</text>

          {/* Four phase pillars */}
          {[
            { x: 30,  label: "Activation",   sub: "Prior knowledge" },
            { x: 135, label: "Demonstration", sub: "Show, don't just tell" },
            { x: 240, label: "Application",  sub: "Learner practice" },
            { x: 345, label: "Integration",  sub: "Real-world transfer" },
          ].map(({ x, label, sub }) => (
            <g key={label}>
              <rect x={x} y="30" width="95" height="120" rx="6" fill="#8b5cf6" />
              <text x={x + 47.5} y="80" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">{label}</text>
              <text x={x + 47.5} y="98" textAnchor="middle" fill="#e9d5ff" fontSize="8" fontFamily="sans-serif">{sub.split(" ")[0]}</text>
              <text x={x + 47.5} y="110" textAnchor="middle" fill="#e9d5ff" fontSize="8" fontFamily="sans-serif">{sub.split(" ").slice(1).join(" ")}</text>
              {/* Connector line to foundation */}
              <line x1={x + 47.5} y1="150" x2={x + 47.5} y2="160" stroke="#c4b5fd" strokeWidth="1.5" />
            </g>
          ))}
        </svg>
      </div>

      <p>
        At the top level, the instructional design prescriptions based on First Principles are:
      </p>

      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Problem-centered:</strong> Learning is facilitated when learners are engaged in
          solving real-world problems. Rather than organizing instruction around topics or content
          categories, the First Principles model advocates structuring the entire learning
          experience around a meaningful problem or task that learners will encounter outside the
          classroom. For example, a sales training program might be organized entirely around the
          challenge of handling a difficult customer objection — with all content and activities
          serving that central scenario.
        </li>
        <li>
          <strong>Activation:</strong> Learning is facilitated when existing knowledge is
          activated as a foundation for new knowledge. Effective instruction explicitly connects
          new concepts to what learners already know, inviting them to recall prior experience
          before new material is introduced. This might take the form of a reflective prompt, a
          pre-assessment, or a short discussion question at the start of a module.
        </li>
        <li>
          <strong>Demonstration:</strong> Learning is facilitated when new knowledge is
          demonstrated to the learner. Merrill distinguishes between telling (presenting
          information) and showing (demonstrating skill in context). Effective demonstrations go
          beyond slides and narration — they include worked examples, case studies, and
          visualizations that show how the knowledge applies to real tasks.
        </li>
        <li>
          <strong>Application:</strong> Learning is facilitated when new knowledge is applied by
          the learner. Learners must have the opportunity to practice using what they&rsquo;ve
          learned, with feedback that helps them correct errors and refine their performance.
          Practice activities should mirror the real-world task as closely as possible, moving
          from guided practice toward independent application over time.
        </li>
        <li>
          <strong>Integration:</strong> Learning is facilitated when new knowledge is integrated
          into the learner&rsquo;s world. The final principle addresses transfer — helping
          learners reflect on what they&rsquo;ve learned, discuss it with peers, and plan how
          they will apply it in their own context. Action plans, peer teaching, and portfolio
          activities are common integration strategies.
        </li>
      </ul>

      {/* ── Gagné's 9 Events of Instruction ─────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Gagn&eacute;&rsquo;s 9 Events of Instruction
      </h2>

      <p>
        Robert Gagné is widely regarded as one of the foremost contributors to the systematic
        approach to instructional design and training. A behavioral psychologist by training,
        Gagné and his colleagues focused primarily on the measurable outcomes — or behaviors —
        that result from instruction. His landmark work, <em>The Conditions of Learning</em>
        (1965), identified the internal mental conditions required for different types of learning
        to occur and argued that specific external instructional events must be designed to support
        each of those conditions. From this research, Gagné developed a nine-step process known as
        the <strong>Events of Instruction</strong>: a structured sequence of instructional moves
        that, when executed together, create the conditions under which effective learning reliably
        takes place. The nine events remain one of the most practical and widely applied
        frameworks in the field, equally useful for designing a 10-minute eLearning module or a
        multi-day instructor-led workshop.
      </p>

      {/* Gagné's 9 Events Illustration */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 340 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-sm"
          aria-label="Gagné's 9 Events of Instruction shown as a numbered vertical list"
          role="img"
        >
          {[
            { n: 1, label: "Gain Attention",              color: "#6366f1" },
            { n: 2, label: "Inform Learners of Objectives", color: "#7c3aed" },
            { n: 3, label: "Stimulate Recall of Prior Learning", color: "#8b5cf6" },
            { n: 4, label: "Present the Content",         color: "#9333ea" },
            { n: 5, label: "Provide Learning Guidance",   color: "#a855f7" },
            { n: 6, label: "Elicit Performance (Practice)", color: "#b45309" },
            { n: 7, label: "Provide Feedback",            color: "#c084fc" },
            { n: 8, label: "Assess Performance",          color: "#d946ef" },
            { n: 9, label: "Enhance Retention & Transfer", color: "#e879f9" },
          ].map(({ n, label, color }, i) => (
            <g key={n}>
              {/* Connector line */}
              {i < 8 && (
                <line x1="30" y1={30 + i * 40 + 16} x2="30" y2={30 + i * 40 + 40} stroke="#94a3b8" strokeWidth="1.5" />
              )}
              {/* Number circle */}
              <circle cx="30" cy={30 + i * 40} r="14" fill={color} />
              <text x="30" y={35 + i * 40} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">{n}</text>
              {/* Label */}
              <rect x="55" y={16 + i * 40} width="270" height="28" rx="5" fill={color} opacity="0.15" />
              <text x="68" y={34 + i * 40} fill="#1e1b4b" fontSize="11" fontFamily="sans-serif">{label}</text>
            </g>
          ))}
        </svg>
      </div>

      <ol className="list-decimal space-y-2 pl-5">
        <li>
          <strong>Gain Attention:</strong> Before any learning can occur, the learner&rsquo;s
          attention must be captured. This might be accomplished with a surprising statistic, a
          provocative question, a short video clip, or a realistic scenario that immediately
          establishes the relevance of what follows.
        </li>
        <li>
          <strong>Inform Learners of Objectives:</strong> Learners should know upfront what they
          will be able to do by the end of the instruction. Clear objectives set expectations,
          help learners organize incoming information, and give them a way to assess their own
          progress.
        </li>
        <li>
          <strong>Stimulate Recall of Prior Learning:</strong> New information is more effectively
          encoded when it is connected to existing knowledge. Asking learners to recall a related
          concept, share a relevant experience, or complete a brief pre-assessment activates the
          mental schema that the new content will attach to.
        </li>
        <li>
          <strong>Present the Content:</strong> The new material is introduced in a logically
          sequenced, appropriately chunked format. Effective content presentation uses multiple
          modalities — text, visuals, audio, examples — and avoids cognitive overload by
          organizing information clearly.
        </li>
        <li>
          <strong>Provide Learning Guidance:</strong> Beyond simply presenting information, the
          instructor or course provides cues, examples, mnemonics, case studies, or worked
          examples that help learners encode and make sense of the new content. This is the
          scaffolding that bridges understanding and application.
        </li>
        <li>
          <strong>Elicit Performance (Practice):</strong> Learners are given the opportunity to
          actively practice the new skill or demonstrate the new knowledge. This is the moment
          where passive reception becomes active engagement — and where real learning begins to
          consolidate.
        </li>
        <li>
          <strong>Provide Feedback:</strong> Informative, timely feedback is provided on learner
          performance. Effective feedback goes beyond &ldquo;correct&rdquo; or &ldquo;incorrect&rdquo;
          — it explains why an answer is right or wrong and guides the learner toward improved
          performance.
        </li>
        <li>
          <strong>Assess Performance:</strong> A formal assessment measures whether the learner
          has achieved the stated objectives. Assessments may include quizzes, performance tasks,
          role plays, or scenario-based evaluations — and should be directly aligned to the
          objectives established in Event 2.
        </li>
        <li>
          <strong>Enhance Retention and Transfer:</strong> The final event addresses the hardest
          challenge in training: ensuring that learning sticks and transfers to the job. Strategies
          include spaced repetition, job aids, follow-up practice activities, peer discussion,
          and real-world application assignments that extend the learning beyond the formal
          instruction.
        </li>
      </ol>

      {/* ── Bloom's Taxonomy ─────────────────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Bloom&rsquo;s Taxonomy
      </h2>

      <p>
        In 1956, educational psychologist Benjamin Bloom led a committee of educators in developing
        a classification system for levels of intellectual behavior in learning — a framework that
        would become one of the most influential tools in the history of instructional design.
        Bloom&rsquo;s research found that over 95% of the test questions students encountered
        required thinking only at the lowest cognitive level: the simple recall of information.
        His taxonomy was designed to push educators and instructional designers to build learning
        experiences that develop the full range of cognitive skills.
      </p>
      <p>
        Bloom identified six levels within the <strong>cognitive domain</strong>, arranged from
        the simplest forms of recall at the base to the most complex and abstract thinking at the
        top. The taxonomy was revised in 2001 by former Bloom student Lorin Anderson and David
        Krathwohl, who reordered the top two levels and shifted from noun-based to verb-based
        language to better reflect how learners actively engage with knowledge. Instructional
        designers rely on Bloom&rsquo;s Taxonomy primarily to write learning objectives — ensuring
        that what learners are asked to do matches the level of thinking actually required on
        the job.
      </p>

      {/* Bloom's Taxonomy Illustration — pyramid */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 360 280"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-md"
          aria-label="Bloom's Taxonomy pyramid showing six levels from Knowledge at the base to Evaluation at the top"
          role="img"
        >
          {[
            { level: "Evaluation",   y: 10,  w: 80,  color: "#6366f1" },
            { level: "Synthesis",    y: 54,  w: 130, color: "#7c3aed" },
            { level: "Analysis",     y: 98,  w: 180, color: "#8b5cf6" },
            { level: "Application",  y: 142, w: 230, color: "#a855f7" },
            { level: "Comprehension",y: 186, w: 280, color: "#c084fc" },
            { level: "Knowledge",    y: 230, w: 330, color: "#e879f9" },
          ].map(({ level, y, w, color }) => (
            <g key={level}>
              <rect x={(360 - w) / 2} y={y} width={w} height="38" rx="4" fill={color} />
              <text
                x="180"
                y={y + 24}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {level}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Knowledge:</strong> The foundational level involves recalling and recognizing
          previously learned information. Learners at this level can define, list, label, recall,
          and reproduce facts. Example objective: <em>List the five phases of the ADDIE model.</em>
          Action verbs: arrange, define, duplicate, label, list, memorize, name, order, recognize,
          recall, repeat, reproduce, state.
        </li>
        <li>
          <strong>Comprehension:</strong> Learners demonstrate understanding by interpreting,
          paraphrasing, or summarizing information in their own words. They can classify,
          describe, explain, identify, and translate concepts. Example objective:{" "}
          <em>Explain the difference between formative and summative evaluation.</em>
          Action verbs: classify, describe, discuss, explain, express, identify, indicate, locate,
          recognize, report, restate, review, select, translate.
        </li>
        <li>
          <strong>Application:</strong> At this level, learners use knowledge in new situations —
          applying rules, methods, or principles to solve problems. Example objective:{" "}
          <em>Apply Bloom&rsquo;s Taxonomy to write learning objectives for a compliance course.</em>
          Action verbs: apply, choose, demonstrate, dramatize, employ, illustrate, interpret,
          operate, practice, schedule, sketch, solve, use, write.
        </li>
        <li>
          <strong>Analysis:</strong> Learners break down information into components and examine
          relationships between parts. They compare, contrast, differentiate, and draw
          conclusions. Example objective:{" "}
          <em>
            Compare the ADDIE and SAM models, identifying key differences in their approach to
            iteration.
          </em>{" "}
          Action verbs: analyze, appraise, calculate, categorize, compare, contrast, criticize,
          differentiate, discriminate, distinguish, examine, experiment, question, test.
        </li>
        <li>
          <strong>Synthesis:</strong> Learners combine elements to create something new — a plan,
          a design, a proposal. This level requires original, generative thinking. Example
          objective:{" "}
          <em>Design a blended learning curriculum for a new employee onboarding program.</em>
          Action verbs: arrange, assemble, collect, compose, construct, create, design, develop,
          formulate, manage, organize, plan, prepare, propose, set up, write.
        </li>
        <li>
          <strong>Evaluation:</strong> The highest level of the original taxonomy involves making
          judgments about the value or quality of ideas, solutions, or methods based on defined
          criteria. Example objective:{" "}
          <em>
            Evaluate the effectiveness of a completed eLearning module against the original
            learning objectives.
          </em>{" "}
          Action verbs: appraise, argue, assess, choose, compare, defend, estimate, judge, predict,
          rate, score, select, support, value, evaluate.
        </li>
      </ul>

      {/* ── Kirkpatrick's Four Levels of Training Evaluation ─────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Kirkpatrick&rsquo;s Four Levels of Training Evaluation
      </h2>

      <p>
        The Kirkpatrick Model is the most widely recognized and applied framework for evaluating
        the effectiveness of training programs worldwide. Created by Dr. Don Kirkpatrick in the
        1950s and formally published in 1959, the model provides a systematic approach for
        measuring training value across four progressive levels — from immediate learner reactions
        all the way to organizational business results. The model applies to any type of training,
        whether formal or informal, in-person or digital, and is designed to be used
        <em> before, during, and after</em> training to both maximize and demonstrate its value to
        stakeholders. One of the model&rsquo;s core contributions is the insight that most
        organizations only measure at Level 1 — gathering post-training satisfaction surveys — while
        the more meaningful evidence of training impact lives at Levels 3 and 4.
      </p>

      {/* Kirkpatrick Illustration */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 420 240"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-xl"
          aria-label="Kirkpatrick's Four Levels shown as a four-step staircase ascending from Reaction to Results"
          role="img"
        >
          {[
            { level: "Level 1", label: "Reaction",  x: 10,  y: 160, w: 90,  color: "#e879f9" },
            { level: "Level 2", label: "Learning",  x: 110, y: 110, w: 90,  color: "#c084fc" },
            { level: "Level 3", label: "Behavior",  x: 210, y: 60,  w: 90,  color: "#8b5cf6" },
            { level: "Level 4", label: "Results",   x: 310, y: 10,  w: 90,  color: "#6366f1" },
          ].map(({ level, label, x, y, w, color }) => (
            <g key={level}>
              <rect x={x} y={y} width={w} height={220 - y} rx="4" fill={color} />
              <text x={x + w / 2} y={y + 24} textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">{level}</text>
              <text x={x + w / 2} y={y + 40} textAnchor="middle" fill="white" fontSize="10" fontFamily="sans-serif">{label}</text>
            </g>
          ))}
          {/* Arrow indicating progression */}
          <path d="M10,230 L400,230" stroke="#94a3b8" strokeWidth="1.5" />
          <polygon points="400,226 408,230 400,234" fill="#94a3b8" />
          <text x="210" y="248" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Increasing complexity &amp; business impact</text>
        </svg>
      </div>

      <ul className="list-disc space-y-3 pl-5">
        <li>
          <strong>Level 1 — Reaction:</strong> Evaluates how participants respond to the
          training immediately after the experience. Did they find it relevant, engaging, and
          worthwhile? Level 1 data is typically gathered through end-of-course surveys or
          &ldquo;smile sheets.&rdquo; While easy to collect, reaction data alone tells you very
          little about whether learning or behavior change occurred — high satisfaction scores do
          not guarantee training effectiveness.
        </li>
        <li>
          <strong>Level 2 — Learning:</strong> Measures whether participants actually acquired
          the intended knowledge, skills, attitudes, or confidence as a result of the training.
          Level 2 evaluation uses pre- and post-assessments, skills demonstrations, simulations,
          or role plays to establish whether the learning objectives were met. This level
          establishes whether the training delivered its intended content.
        </li>
        <li>
          <strong>Level 3 — Behavior:</strong> Examines whether learners are actually applying
          what they learned back on the job. This is often the most difficult level to measure
          because it requires follow-up observation, manager assessments, or surveys conducted
          weeks or months after the training. Level 3 data reveals whether the work environment
          supports — or inhibits — the transfer of learning into practice.
        </li>
        <li>
          <strong>Level 4 — Results:</strong> Evaluates whether the training produced measurable
          organizational outcomes — such as increased sales, reduced error rates, improved
          customer satisfaction, or decreased employee turnover. Level 4 is the ultimate measure
          of training&rsquo;s business value. Because many factors influence business results,
          isolating the specific impact of training is challenging, but this level is essential
          for demonstrating return on investment (ROI) to organizational leadership.
        </li>
      </ul>

      {/* ── Design Thinking ──────────────────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Design Thinking
      </h2>

      <p>
        Design Thinking is an iterative, human-centered approach to problem-solving that prioritizes
        deep understanding of the people you are designing for before arriving at any solution.
        Originally developed in the fields of User Experience (UX) and interaction design, its
        principles translate naturally to learning experience design — and it is increasingly
        adopted by instructional designers looking to build learning products that genuinely
        resonate with their audience. Where many traditional ID models begin with defined learning
        outcomes and work forward, Design Thinking begins with empathy: a focused effort to
        understand the learner&rsquo;s actual context, challenges, motivations, and needs.
      </p>
      <p>
        Design Thinking is less concerned with delivering pre-prescribed learning outcomes and more
        focused on crafting a learning experience that meets the learner where they are — one that
        feels relevant, accessible, and genuinely useful. It could be considered both a framework
        and a philosophy: a way of approaching problems that values observation, rapid ideation,
        prototyping, and testing over linear planning. The parallels with Learning Experience
        Design (LXD) are significant, and many practitioners blend Design Thinking principles
        directly into their existing ID workflows.
      </p>

      {/* Design Thinking Illustration */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 540 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-2xl"
          aria-label="Design Thinking process showing five phases: Empathize, Define, Ideate, Prototype, Test"
          role="img"
        >
          {[
            { x: 10,  label: "Empathize", color: "#6366f1" },
            { x: 110, label: "Define",    color: "#7c3aed" },
            { x: 210, label: "Ideate",    color: "#8b5cf6" },
            { x: 310, label: "Prototype", color: "#a855f7" },
            { x: 410, label: "Test",      color: "#c084fc" },
          ].map(({ x, label, color }) => (
            <g key={label}>
              <rect x={x} y="10" width="100" height="70" rx="8" fill={color} />
              <text x={x + 50} y="52" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">{label}</text>
            </g>
          ))}

          {/* Forward arrows */}
          {[110, 210, 310, 410].map((x) => (
            <g key={x}>
              <line x1={x - 2} y1="45" x2={x + 8} y2="45" stroke="#94a3b8" strokeWidth="1.5" />
              <polygon points={`${x + 8},41 ${x + 14},45 ${x + 8},49`} fill="#94a3b8" />
            </g>
          ))}

          {/* Iterative return arrow */}
          <path
            d="M510,90 Q270,118 10,90"
            stroke="#c4b5fd"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="5 3"
          />
          <polygon points="10,86 4,90 10,94" fill="#c4b5fd" />
          <text x="260" y="115" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Iterative — return to any phase based on testing insights</text>
        </svg>
      </div>

      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Empathize:</strong> The process begins by building a genuine understanding of
          the learner. This goes beyond demographic data — it involves observation, interviews,
          and immersion in the learner&rsquo;s environment to uncover unstated needs, pain
          points, and motivations. For an instructional designer, this might mean shadowing
          employees on the job or conducting in-depth interviews with a cross-section of the
          target audience before a single learning objective is written.
        </li>
        <li>
          <strong>Define:</strong> Insights from the empathy phase are synthesized into a clear
          problem statement — one that reflects the learner&rsquo;s perspective rather than the
          organization&rsquo;s assumptions. A well-framed problem statement focuses on the
          human need at the center of the design challenge and serves as the guiding brief for
          all subsequent work.
        </li>
        <li>
          <strong>Ideate:</strong> With a clear problem defined, the team generates a wide range
          of possible solutions through structured brainstorming. The goal is quantity over
          quality in the early stages — suspending judgment to explore creative and unexpected
          approaches before narrowing in on the most promising ideas.
        </li>
        <li>
          <strong>Prototype:</strong> Selected ideas are quickly translated into low-fidelity,
          tangible representations — wireframes, storyboards, paper mockups, or rough digital
          drafts. The purpose is not to build a polished product but to create something concrete
          enough that real feedback can be gathered cheaply and quickly.
        </li>
        <li>
          <strong>Test:</strong> Prototypes are put in front of real learners and stakeholders to
          observe reactions, identify confusion, and surface unmet needs. Test findings feed
          directly back into earlier phases — often returning the team to the Empathize or Define
          stage before another round of ideation begins. This iterative loop continues until the
          solution genuinely meets the learner&rsquo;s needs.
        </li>
      </ul>

      {/* ── ARCS Model ───────────────────────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        ARCS Model of Motivational Design
      </h2>

      <p>
        Developed by educational psychologist John Keller in 1987, the ARCS Model addresses one
        of the most persistent challenges in instructional design: getting learners to actually
        engage with the content and sustain that engagement through to completion. Most ID models
        focus on how to structure and deliver instruction effectively — but they largely assume
        that learners are motivated to learn in the first place. ARCS fills that gap. The model
        identifies four conditions that must be met for learners to be both motivated to learn and
        to persist through the learning experience. ARCS stands for <strong>Attention</strong>,{" "}
        <strong>Relevance</strong>, <strong>Confidence</strong>, and <strong>Satisfaction</strong>.
        It is commonly used alongside other frameworks — an instructional designer might use ADDIE
        to structure the overall project and ARCS to inform specific design decisions about
        engagement and motivation throughout the content.
      </p>

      {/* ARCS Illustration */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 440 130"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-xl"
          aria-label="ARCS Model showing four components: Attention, Relevance, Confidence, Satisfaction"
          role="img"
        >
          {[
            { x: 10,  abbr: "A", label: "Attention",    sub: "Capture & sustain it",   color: "#6366f1" },
            { x: 120, abbr: "R", label: "Relevance",    sub: "Connect to their goals",  color: "#8b5cf6" },
            { x: 230, abbr: "C", label: "Confidence",   sub: "Build belief in success", color: "#a855f7" },
            { x: 340, abbr: "S", label: "Satisfaction", sub: "Reward the effort",       color: "#c084fc" },
          ].map(({ x, abbr, label, sub, color }) => (
            <g key={label}>
              <rect x={x} y="10" width="100" height="110" rx="8" fill={color} />
              <text x={x + 50} y="50" textAnchor="middle" fill="white" fontSize="30" fontWeight="bold" fontFamily="sans-serif">{abbr}</text>
              <text x={x + 50} y="74" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">{label}</text>
              <text x={x + 50} y="89" textAnchor="middle" fill="#e9d5ff" fontSize="8" fontFamily="sans-serif">{sub.split(" & ")[0]}</text>
              {sub.includes("&") && (
                <text x={x + 50} y="101" textAnchor="middle" fill="#e9d5ff" fontSize="8" fontFamily="sans-serif">{"& " + sub.split("& ")[1]}</text>
              )}
            </g>
          ))}
        </svg>
      </div>

      <ul className="list-disc space-y-3 pl-5">
        <li>
          <strong>Attention:</strong> Learning cannot occur without the learner&rsquo;s attention,
          and holding that attention over time is increasingly difficult in a world of competing
          distractions. ARCS distinguishes between two types of attention strategies: perceptual
          arousal (capturing attention through novelty, surprise, or visual contrast) and inquiry
          arousal (sustaining it by posing questions, presenting puzzles, or introducing genuine
          cognitive conflict). Example strategies include opening a module with a realistic
          scenario, incorporating unexpected or counterintuitive information, and varying the
          format and pacing of content to prevent monotony.
        </li>
        <li>
          <strong>Relevance:</strong> Learners are more motivated when they can clearly see how
          the content connects to their own goals, values, or professional context. Relevance
          can be established through goal orientation (showing how the learning relates to
          personal or career objectives), motive matching (aligning instructional strategies with
          learner needs for achievement, affiliation, or power), and familiarity (connecting new
          content to learners&rsquo; existing experience). Practically, this means writing
          examples that reflect the learner&rsquo;s actual job context rather than generic
          scenarios, and being explicit about why the learning matters.
        </li>
        <li>
          <strong>Confidence:</strong> Even when learners find content interesting and relevant,
          they disengage if they believe they cannot succeed. The Confidence component focuses on
          building learners&rsquo; belief in their own ability to master the material. Strategies
          include clearly communicating learning requirements and evaluation criteria upfront,
          sequencing content from simple to complex so learners experience early wins, providing
          opportunities for learner control and choice, and offering positive, attribution-focused
          feedback that reinforces effort rather than just outcome.
        </li>
        <li>
          <strong>Satisfaction:</strong> When learners achieve something meaningful, they need
          to feel good about it — or the motivation to continue learning erodes. Satisfaction
          comes from both intrinsic rewards (the sense of accomplishment from mastering a
          difficult concept) and extrinsic ones (recognition, certificates, or practical
          application). Keller emphasized that the most powerful satisfaction reinforcement is
          the opportunity to apply new knowledge or skills in a real-world context immediately
          after learning — which is why practice activities and on-the-job application
          assignments are so central to effective instructional design.
        </li>
      </ul>

      {/* ── 70-20-10 Framework ────────────────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        70-20-10 Framework
      </h2>

      <p>
        The 70-20-10 Framework is a widely cited model in corporate learning and development that
        describes how professionals typically develop competence in their roles. First articulated
        by researchers Morgan McCall, Michael Lombardo, and Robert Eichinger at the Center for
        Creative Leadership in the 1980s — based on surveys of successful executives — the model
        proposes that roughly 70% of learning happens through on-the-job experience, 20% through
        social interactions and relationships with others, and 10% through formal structured
        training. While the specific percentages are heuristic rather than empirically rigid (and
        vary significantly by individual, role, and context), the framework&rsquo;s core insight
        remains both influential and practically important: formal training alone — the part
        organizations invest most heavily in — accounts for only a small fraction of how employees
        actually develop.
      </p>

      {/* 70-20-10 Illustration */}
      <div className="my-8 flex justify-center">
        <svg
          viewBox="0 0 420 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-xl"
          aria-label="70-20-10 Framework showing three proportional bars: 70% experiential, 20% social, 10% formal"
          role="img"
        >
          {/* Background track */}
          <rect x="10" y="60" width="400" height="40" rx="6" fill="#e2e8f0" />

          {/* 70% bar */}
          <rect x="10" y="60" width="280" height="40" rx="6" fill="#6366f1" />
          <text x="150" y="86" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">70% — Experiential</text>

          {/* 20% bar overlay */}
          <rect x="290" y="60" width="80" height="40" rx="0" fill="#a855f7" />
          <text x="330" y="86" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">20%</text>

          {/* 10% bar overlay */}
          <rect x="370" y="60" width="40" height="40" rx="0" fill="#e879f9" style={{ borderRadius: "0 6px 6px 0" }} />
          <text x="390" y="86" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">10%</text>

          {/* Labels below */}
          <text x="150" y="120" textAnchor="middle" fill="#6366f1" fontSize="10" fontFamily="sans-serif">On-the-job Experience</text>
          <text x="330" y="120" textAnchor="middle" fill="#a855f7" fontSize="10" fontFamily="sans-serif">Social Learning</text>
          <text x="390" y="120" textAnchor="middle" fill="#c084fc" fontSize="9" fontFamily="sans-serif">Formal</text>

          {/* Labels above */}
          <text x="150" y="50" textAnchor="middle" fill="#475569" fontSize="9" fontFamily="sans-serif">Stretch assignments, new challenges, real projects</text>
          <text x="330" y="50" textAnchor="middle" fill="#475569" fontSize="9" fontFamily="sans-serif">Coaching, mentoring, collaboration</text>
          <text x="390" y="50" textAnchor="middle" fill="#475569" fontSize="9" fontFamily="sans-serif">Courses</text>
        </svg>
      </div>

      <h3 className="mt-8 text-lg font-bold text-copy">70% — Experiential Learning</h3>
      <p>
        The largest share of professional development happens through direct experience: taking on
        stretch assignments, solving novel problems, leading projects outside one&rsquo;s comfort
        zone, learning from mistakes, and adapting to new responsibilities. This type of learning
        is inherently contextual and self-directed. For instructional designers, the implication
        is significant: the most powerful learning interventions are not always formal courses —
        they are well-designed work experiences, performance support tools, on-the-job challenges,
        and systems that help people learn in the flow of work. Performance support tools like job
        aids, checklists, and embedded help systems directly serve this 70% space.
      </p>

      <h3 className="mt-8 text-lg font-bold text-copy">20% — Social Learning</h3>
      <p>
        Roughly a fifth of professional development happens through relationships: conversations
        with managers and mentors, peer feedback, collaborative problem-solving, observation of
        skilled colleagues, and communities of practice. Social learning is informal, relational,
        and often deeply effective because it is grounded in real context and trust. Learning
        designers can intentionally support this 20% by building in structured mentoring programs,
        peer coaching pairings, cohort-based learning communities, and discussion forums —
        creating the conditions for high-quality social learning rather than leaving it entirely
        to chance.
      </p>

      <h3 className="mt-8 text-lg font-bold text-copy">10% — Formal Training</h3>
      <p>
        The remaining slice — and the one that receives the most organizational investment — is
        formal structured learning: eLearning courses, instructor-led workshops, classroom
        training, certifications, and onboarding programs. While 10% may seem like a small number,
        formal training plays a critical role: it provides foundational knowledge, ensures
        compliance, establishes shared frameworks and terminology, and creates the conceptual
        scaffolding that makes experiential and social learning more effective. The 70-20-10
        framework does not suggest organizations should invest less in formal training — rather,
        it argues for designing formal training that better bridges into the 70% and 20% by
        incorporating realistic practice, peer discussion, and clear connections to on-the-job
        application.
      </p>

      {/* ── Additional models will be added here ─────────────────────────── */}
    </ContentPage>
  )
}
