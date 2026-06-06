import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "The Role of the Instructional Designer",
  description:
    "Instructional designers wear many hats. Here's a real look at what the role involves day to day — and how it shifts depending on where you work.",
  path: "/post/the-role-of-instructional-designer",
})


export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Career", "Instructional Design"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          The Role of the Instructional Designer
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Aug 15, 2022
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
            &ldquo;Instructional designers are the architects of learning — but architecture involves a
            lot more than drawing blueprints. In a single week, you might be interviewing a SME,
            writing a script, presenting to stakeholders, and troubleshooting an LMS upload.
            The variety is part of what makes the role so interesting.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            If you ask five instructional designers what their job involves, you&rsquo;ll get five
            different answers — and all of them will be accurate. The role varies by organization,
            team size, industry, and where you sit in a project. But beneath that variation,
            there&rsquo;s a consistent core of what IDs actually do.
          </p>

          <p>
            Whether you&rsquo;re exploring the field or looking to articulate what you already do every
            day, here&rsquo;s a grounded look at the instructional designer&rsquo;s role from the inside.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Needs Analysis: Starting with the Right Question</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Before any design happens, a good instructional designer asks: is training actually
                the right solution here? This is what needs analysis is for — and it&rsquo;s one of the
                most valuable things IDs bring to the table.
              </p>
              <p>
                Needs analysis involves talking to stakeholders, observing performance, reviewing
                data, and identifying the gap between where people are and where they need to be.
                Sometimes the gap is a knowledge or skill problem that training can address.
                Sometimes it&rsquo;s a process problem, a motivation problem, or a tool problem — and
                the right answer is something other than a course.
              </p>
              <p>
                IDs who ask this question well save organizations time and money. More importantly,
                they build credibility as strategic partners rather than just order-takers.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Design: Building the Architecture of Learning</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Once you know what problem you&rsquo;re solving, design is where you figure out how
                to solve it. This includes writing measurable learning objectives, deciding on the
                instructional approach, mapping out a course structure, and choosing the modalities
                that fit the audience and the content — eLearning, instructor-led, job aids,
                blended, microlearning.
              </p>
              <p>
                Good design is grounded in learning theory. Concepts like cognitive load, spaced
                practice, retrieval, and feedback all have real implications for how you sequence
                content and structure practice. The best IDs draw on this research intuitively —
                not as a checklist, but as a set of principles they&rsquo;ve internalized over time.
              </p>
              <p>
                Storyboards are often the primary design artifact — the document that translates
                your decisions into a blueprint that developers, SMEs, and stakeholders can react to.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Collaboration: Working with SMEs &amp; Stakeholders</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Instructional design is a deeply collaborative profession. You&rsquo;re rarely working
                alone — you&rsquo;re translating expertise from subject matter experts into learning
                experiences, managing expectations with project sponsors, and coordinating with
                developers, project managers, and sometimes vendors.
              </p>
              <p>
                The SME relationship is central. SMEs have knowledge you need. They also have
                limited time, strong opinions about their content, and sometimes wildly different
                ideas about what &ldquo;training&rdquo; should look like. Part of your job is managing that
                relationship thoughtfully — earning trust, structuring productive conversations,
                and diplomatically pushing back when a SME&rsquo;s instincts don&rsquo;t serve the learner.
              </p>
              <p>
                Stakeholder management is its own skill. You&rsquo;ll regularly be in rooms with people
                who want more content, less time, no assessments, and a specific visual style —
                often at the same time. Knowing how to navigate those conversations with clarity
                and confidence is something every experienced ID has developed through trial and error.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Development &amp; Evaluation: Building and Measuring</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Development is where design becomes a real learning experience. Depending on your
                role and team, you might build the content yourself using authoring tools like
                Articulate Storyline or Rise — or you might hand off a storyboard to a developer
                while you focus on the design and review process.
              </p>
              <p>
                Evaluation closes the loop. Did the training work? Did learners transfer what they
                learned back to the job? Kirkpatrick&rsquo;s four levels of evaluation — reaction, learning,
                behavior, results — give IDs a framework for answering those questions systematically.
                Strong evaluators don&rsquo;t just measure satisfaction surveys; they connect learning
                outcomes to actual performance change.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">05</span>
              <h2 className="text-xl font-bold text-heading">How the Role Shifts by Context</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                In corporate L&amp;D, the ID role tends to be fast-paced and business-outcome-focused.
                You&rsquo;ll work across projects simultaneously, report to HR or Operations, and be
                evaluated partly on speed and partly on whether the training moved a metric.
              </p>
              <p>
                In higher education, the role often centers on partnering with faculty — helping
                them translate courses to online formats, improve engagement, or embed accessibility
                practices. The work is slower, more consultative, and more academic in tone.
              </p>
              <p>
                As a freelancer or consultant, you wear every hat simultaneously — analyst, designer,
                developer, project manager, and account manager. You have more creative control and
                more business risk. The role is as expansive as you make it.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">How AI Is Changing the Role</h2>
            <div className="mt-3 space-y-3">
              <p>
                AI tools are reshaping the instructional designer&rsquo;s day-to-day in real ways.
                Tasks that used to take hours — first drafts of scripts, question generation,
                content synthesis from SME notes — can now be done in minutes with a good prompt
                and some editing. The baseline for what an individual ID can produce is rising.
              </p>
              <p>
                What that means for the role is that the distinctly human skills — judgment,
                empathy, facilitation, strategic thinking — matter more, not less. AI can produce
                a lot of content. It can&rsquo;t replace the designer who asks the right questions,
                builds the right relationships, and makes the call that the client doesn&rsquo;t
                know they need yet.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              The instructional designer&rsquo;s role is broad, collaborative, and genuinely varied.
              It asks you to be a researcher, a communicator, a strategist, and a maker — often
              within the same week. That breadth is exactly why so many people find the work so
              engaging.
            </p>
            <p>
              If you&rsquo;re drawn to the idea of helping people learn more effectively — and doing
              it at a level of craft that actually makes a difference — this is a role worth
              building toward. The field has room for people who take it seriously, and the
              work keeps evolving in ways that keep it interesting.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="The Role of the Instructional Designer" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
