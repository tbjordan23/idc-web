import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "How to Effectively Work with SMEs",
  description:
    "Subject matter experts have what you need — and limited time to share it. Here's how to build relationships that actually work, from the first conversation to the final review.",
  path: "/post/working-with-smes",
})

const VIEWS = 9208

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
          How to Effectively Work with SMEs
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Jan 19, 2021
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            4 min read
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {VIEWS.toLocaleString()} views
          </span>
        </div>
      </ScrollReveal>

      {/* ── Hook / Summary blurb ────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <blockquote className="mt-10 border-l-4 border-accent pl-5">
          <p className="text-lg font-medium leading-relaxed text-copy-muted italic">
            &ldquo;Knowing something deeply doesn&rsquo;t automatically mean you can teach it. That&rsquo;s exactly
            why the instructional designer and the SME need each other — and why the relationship
            between them is one of the most important things to get right in this work.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            Ask any experienced instructional designer what makes or breaks a project, and SME
            collaboration usually comes up quickly. When it works well, everything flows: you have
            the content you need, it&rsquo;s accurate, and the SME is an engaged partner in making it
            great. When it doesn&rsquo;t work, you&rsquo;re chasing responses, getting feedback that sends
            the project sideways, or building a course that doesn&rsquo;t reflect what learners actually
            need to know.
          </p>

          <p>
            The good news is that most SME relationship challenges are predictable — which means
            they&rsquo;re largely preventable with the right approach. Here&rsquo;s what works.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Understand Their Constraints Before Anything Else</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Subject matter experts are almost always doing this work on top of their primary
                job. They have deliverables, deadlines, and priorities that have nothing to do with
                your project — and supporting your course is rarely their most urgent responsibility.
              </p>
              <p>
                The fastest way to start a SME relationship on the wrong foot is to treat them as
                a resource you can draw on whenever you need something. They&rsquo;re a busy professional
                doing you a favor. Starting from that understanding shapes everything: how you
                schedule time, how you structure your asks, and how you communicate throughout
                the project.
              </p>
              <p>
                Before your first session, reach out to learn a bit about their context. What does
                their schedule look like? What&rsquo;s the best way to communicate with them? Are there
                weeks that are better or worse for getting their attention? These questions signal
                respect — and they give you information you can use to build a workflow that
                actually holds.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Earn Trust Early — and Deliberately</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                SMEs invest more in a project when they trust the person leading it. Trust in this
                context means two things: trusting that you know what you&rsquo;re doing as a designer,
                and trusting that you&rsquo;ll handle their content with care.
              </p>
              <p>
                Come to the first session prepared. Do background research on the topic before
                you meet — even a surface-level read-through of relevant materials signals that
                you&rsquo;re taking this seriously. Ask for resources in advance so you&rsquo;re not starting
                from zero. Prepare thoughtful questions that go beyond the obvious. When a SME
                sees that you&rsquo;ve done your homework, they engage differently.
              </p>
              <p>
                Early in the relationship, also be transparent about your role. Explain that your
                job isn&rsquo;t to replicate their expertise — it&rsquo;s to translate it into something
                learners can actually absorb. That distinction matters. SMEs who understand what
                instructional design adds to the process are far more likely to trust your
                judgment when you push back on something.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Structure Sessions So They&rsquo;re Worth Showing Up For</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Unstructured SME sessions are one of the biggest time-wasters in the ID process.
                You get a lot of content, not all of it useful, and you leave with more questions
                than answers. The fix is simple: be intentional about how you design the conversation.
              </p>
              <p>
                Send an agenda in advance with specific questions you plan to cover. Keep sessions
                to 30–45 minutes if possible — longer than that and attention drifts for both of
                you. Use open-ended questions to draw out nuance: &ldquo;Walk me through what a new hire
                usually gets wrong in this situation&rdquo; is more useful than &ldquo;What should learners know
                about this process?&rdquo;
              </p>
              <p>
                Record sessions with the SME&rsquo;s permission. Transcribing or reviewing audio after
                the fact lets you capture details you missed in the moment — and means you don&rsquo;t
                have to go back to the SME for follow-up on things you already discussed. That
                protects their time and yours.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Manage Feedback &amp; Revisions Without Losing Momentum</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Feedback rounds are where many SME relationships start to fray. The SME reacts
                to a prototype or draft with a flood of edits — some directly relevant, some
                stylistic, some that would double the course length. The ID has to figure out what
                to act on and how to push back on the rest without damaging the relationship.
              </p>
              <p>
                The key is giving SMEs the right thing to review. Don&rsquo;t send a polished final
                draft and ask for general thoughts. Send a clear prototype with specific questions:
                &ldquo;Is this scenario realistic? Are the steps in the right order? Is anything
                technically inaccurate?&rdquo; When you guide the review with specific asks, you get
                more useful feedback and less scope creep.
              </p>
              <p>
                When a SME wants to add content that doesn&rsquo;t serve the learning objectives, name
                it directly but kindly: &ldquo;I want to make sure we respect learners&rsquo; time — can we
                talk about whether this adds to what they need to do differently after the course?&rdquo;
                That framing keeps the conversation anchored to the goal rather than the content.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">05</span>
              <h2 className="text-xl font-bold text-heading">Keep Momentum and Close the Loop</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Sustained SME engagement over the course of a long project takes active effort.
                Keep communication consistent — brief, regular updates about where the project
                stands are better than long silences followed by urgent requests. After sessions,
                send a short summary of what you covered and what comes next. It takes five minutes
                and keeps everyone aligned.
              </p>
              <p>
                When the project is done, share results. Enrollment numbers, completion rates,
                assessment scores, learner comments — whatever you have. SMEs invested their
                time and expertise in this work, and showing them the impact closes the loop in
                a way that builds goodwill for future collaboration. It also reminds them — and
                you — that the work mattered.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">When a SME Goes Dark</h2>
            <div className="mt-3 space-y-3">
              <p>
                It happens to every instructional designer eventually: a SME who was engaged at
                the start stops responding. Emails go unanswered. Meetings get cancelled. The
                project stalls.
              </p>
              <p>
                First, assume good intent — they&rsquo;re probably overwhelmed, not avoiding you.
                Send a short, low-pressure message acknowledging that things get busy and
                asking when they might have 15 minutes. If that doesn&rsquo;t work, loop in your
                project sponsor or their manager — not to escalate, but to ask for help
                getting the SME&rsquo;s time protected.
              </p>
              <p>
                If the SME is genuinely unavailable for an extended period, document the impact
                on the project timeline clearly and share it with your stakeholders. Don&rsquo;t absorb
                the delay silently. Your project plan should have built-in dependencies on SME
                access — make those dependencies visible when they&rsquo;re not being met.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Working well with SMEs is one of the most learnable — and most valuable — skills
              in instructional design. It&rsquo;s not about having perfect chemistry with every expert
              you work with. It&rsquo;s about building habits of preparation, respect, and clarity that
              make collaboration work regardless of personality.
            </p>
            <p>
              The designers who are easiest to work with are the ones SMEs trust the most. And
              the ones SMEs trust the most get access to better content, more honest feedback, and
              the kind of engaged partnership that makes a real difference in what you build.
              That&rsquo;s worth investing in.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="How to Effectively Work with SMEs" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
