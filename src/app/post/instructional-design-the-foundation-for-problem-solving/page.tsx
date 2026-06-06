import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design: The Foundation for Problem Solving",
  description:
    "Instructional design is fundamentally a problem-solving discipline. Here's how diagnosing real problems, designing solutions, iterating, and measuring outcomes connects ID to every field.",
  path: "/post/instructional-design-the-foundation-for-problem-solving",
})


export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Instructional Design"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Instructional Design: The Foundation for Problem Solving
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Apr 14, 2016
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            3 min read
          </span>
        </div>
      </ScrollReveal>

      {/* ── Hook / Summary blurb ────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <blockquote className="mt-10 border-l-4 border-accent pl-5">
          <p className="text-lg font-medium leading-relaxed text-copy-muted italic">
            &ldquo;Instructional design, at its core, is problem solving. The skills you build doing this work — diagnosing root causes, designing solutions, testing and iterating, measuring impact — transfer to every meaningful challenge you&rsquo;ll face, in any field.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            A college dean once told me something I&rsquo;ve thought about ever since: &ldquo;Instructional design is all about solving problems.&rdquo; At the time I wasn&rsquo;t sure that was exactly right — there was so much more to it, wasn&rsquo;t there? The frameworks, the theory, the design process itself. But the longer I&rsquo;ve worked in this field, the more I&rsquo;ve come to believe he was pointing at something essential.
          </p>

          <p>
            The reason instructional designers are so valuable across industries isn&rsquo;t just their knowledge of learning theory or their fluency with authoring tools. It&rsquo;s that they&rsquo;ve internalized a way of approaching problems — a systematic, evidence-driven, human-centered process — that applies far beyond the design of training. Here&rsquo;s what that looks like in practice.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Diagnosing the Real Problem, Not Just the Symptoms</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The most common mistake in training — and in problem-solving generally — is jumping to a solution before you&rsquo;ve properly understood the problem. A manager says, &ldquo;Our team needs training on customer service.&rdquo; A less experienced designer starts building a customer service course. A strong instructional designer starts asking questions.
              </p>
              <p>
                What&rsquo;s actually happening? Are call times too long? Customer satisfaction scores declining? Specific types of calls handled poorly? Is the issue a knowledge gap, a skills gap, a motivation issue, or something in the environment — tools, process, management — that training can&rsquo;t fix? The Analysis phase of ADDIE exists precisely because the surface-level request is often not the real problem.
              </p>
              <p>
                This diagnostic habit — the refusal to assume, the insistence on understanding before acting — is one of the most transferable skills an instructional designer builds. It makes you a better collaborator, a more credible consultant, and a more effective problem-solver in any context.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Designing Solutions That Address Root Causes</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Once you understand the real problem, the design work begins — and good design is always responsive to the root cause, not the symptom. If the issue is that new employees don&rsquo;t know how to use the CRM system, a knowledge module makes sense. If the issue is that they know how to use it but don&rsquo;t, the problem is motivational or environmental, and a module won&rsquo;t move the needle.
              </p>
              <p>
                This is where instructional design overlaps deeply with design thinking and systems thinking. You&rsquo;re not just selecting the right content — you&rsquo;re selecting the right intervention. Sometimes that&rsquo;s a training. Sometimes it&rsquo;s a job aid. Sometimes it&rsquo;s a process change or a management conversation. The designer&rsquo;s job is to match the solution to the actual problem, not to default to the familiar format.
              </p>
              <p>
                Strong IDs also think in systems. A solution that solves one problem while creating another isn&rsquo;t a solution — it&rsquo;s a trade-off. Understanding the downstream effects of your design choices is part of what makes this work sophisticated and genuinely valuable.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Testing &amp; Iterating Like a Designer</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The best instructional designers don&rsquo;t treat the first version of something as the final version. They prototype, get feedback, revise, and try again. This iterative approach — central to both ADDIE&rsquo;s Evaluate phase and to agile methodologies like SAM — is also how the best problem-solvers in any field operate.
              </p>
              <p>
                Testing a design doesn&rsquo;t mean waiting until launch to see if it works. It means building in checkpoints: a pilot with a small group, a review with subject matter experts, a usability test with someone who represents your target learner. Each round of feedback is information — not a failure, but a data point that makes the next version better.
              </p>
              <p>
                This tolerance for iteration, the willingness to build something imperfect and improve it rather than waiting for perfect conditions to begin, is a mindset that serves you well in every professional context. It&rsquo;s one of the most practical things instructional design teaches.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Measuring Whether the Problem Was Actually Solved</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The work isn&rsquo;t done when the module launches. A strong instructional design process always includes evaluation — not just &ldquo;did learners complete it&rdquo; or &ldquo;did they like it,&rdquo; but &ldquo;did it change anything?&rdquo; Are people performing better? Has the behavior changed? Did the original problem get smaller?
              </p>
              <p>
                The Kirkpatrick Model gives IDs a framework for thinking about evaluation at multiple levels: reaction, learning, behavior, and results. Designing with all four in mind from the beginning — rather than bolting on measurement at the end — is what separates training that produces evidence from training that produces activity.
              </p>
              <p>
                This emphasis on measurable outcomes, on starting with the end in mind and then checking whether you actually got there, is one of the most practically useful habits any professional can build. It keeps work honest, makes the value of your contribution visible, and creates the foundation for continuous improvement.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">Most Training Is Created to Treat a Symptom</h2>
            <div className="mt-3 space-y-3">
              <p>
                Here&rsquo;s an honest observation about the field: most training that gets built isn&rsquo;t built because someone diagnosed a root cause and concluded that learning was the right solution. It gets built because someone felt like something should be done, or because a compliance deadline arrived, or because a manager decided the team &ldquo;needed training&rdquo; without investigating why the problem exists.
              </p>
              <p>
                Changing that pattern is one of the most valuable things an instructional designer can do — but it requires being willing to push back, to ask hard questions before accepting a brief, and sometimes to tell a stakeholder that training isn&rsquo;t the answer. That&rsquo;s not always easy. It can feel risky, especially early in your career. But it&rsquo;s the difference between being a builder who executes requests and a designer who actually solves problems. The latter is where the real career growth is.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              The skills at the core of instructional design — diagnosing problems, designing targeted solutions, iterating based on evidence, and measuring real impact — are some of the most transferable capabilities in the professional world. That&rsquo;s not an accident. It&rsquo;s what the discipline was built to develop.
            </p>
            <p>
              Whether you&rsquo;re designing a course, consulting with a business partner, or navigating a challenge that has nothing to do with training, the problem-solving foundation that instructional design gives you is genuinely valuable. Build it deliberately. Use it broadly. And don&rsquo;t underestimate what it makes you capable of.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Instructional Design: The Foundation for Problem Solving" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
