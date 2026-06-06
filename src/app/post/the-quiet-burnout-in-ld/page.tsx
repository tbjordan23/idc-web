import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "The Quiet Burnout in L&D: Why So Many Instructional Designers Are Exhausted",
  description: "Burnout in L&D rarely looks like a breakdown. It looks like absorbing last-minute scope changes. Here's what's really driving it — and what helps.",
  path: "/post/the-quiet-burnout-in-ld",
})


export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Wellbeing", "Career"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          The Quiet Burnout in L&amp;D: Why So Many Instructional Designers Are Exhausted (and What Helps)
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Jun 6, 2026
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            6 min read
          </span>
        </div>
      </ScrollReveal>

      {/* ── Hook / Summary blurb ────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <blockquote className="mt-10 border-l-4 border-accent pl-5">
          <p className="text-lg font-medium leading-relaxed text-copy-muted italic">
            &ldquo;L&amp;D burnout doesn&rsquo;t usually look like a breakdown. It looks like staying late to redo a module because a stakeholder changed their mind on scope — again. It looks like smiling through a feedback session where someone who hasn&rsquo;t read the learning objectives rewrites your script. It looks like quietly wondering if you even like this work anymore.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            If you&rsquo;ve been feeling worn down lately — not dramatically, not in a way you&rsquo;d necessarily call a crisis, but just&hellip; tired — you&rsquo;re not alone, and you&rsquo;re not being dramatic. Burnout in the L&amp;D field is genuinely common, and it tends to be the quiet kind: gradual, easy to rationalize, and often invisible to the people around you.
          </p>

          <p>
            This is worth naming, because most of the conversations about burnout treat it as either a personal resilience problem or a vague organizational culture issue. The reality for instructional designers is more specific — and understanding what&rsquo;s actually driving it is the first step toward doing something about it.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Why L&amp;D Burnout Is Different</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Most burnout frameworks describe three dimensions: exhaustion, cynicism, and a reduced sense of efficacy. Instructional designers tend to hit all three — but the path there is particular to this work.
              </p>
              <p>
                You&rsquo;re a translator. Between subject matter experts and learners, between business goals and human needs, between what stakeholders say they want and what will actually work. That translation work is constant, cognitively demanding, and largely invisible. When a course lands well, the SME gets the credit. When it underperforms, the design process gets the review. The labor in between — the scaffolding, the empathy mapping, the careful sequencing — often goes unacknowledged.
              </p>
              <p>
                You also carry a kind of ethical tension that&rsquo;s unique to this field. You are professionally committed to learner outcomes. But you work inside organizations where training is often deployed as a solution to problems that training can&rsquo;t solve, where timelines compress quality, and where &ldquo;good enough&rdquo; is treated as a reasonable bar. Delivering work you know could be better — repeatedly — erodes something.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">The Stakeholder Dynamic Is a Real Drain</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Working with stakeholders and SMEs is a central part of the job — and for many IDs, it&rsquo;s the part that wears them down the most. Not because stakeholders are bad people, but because the dynamic is structurally exhausting.
              </p>
              <p>
                You&rsquo;re often the person who knows the most about how learning works, advocating for decisions in rooms where you have the least organizational authority. You manage the emotions of busy SMEs who resent the time commitment, executives who want a five-day program delivered in two weeks, and reviewers who give contradictory feedback on the same deliverable. And you do it while staying professional, collaborative, and solutions-oriented.
              </p>
              <p>
                That emotional labor compounds. After years of smoothing tensions, absorbing late-stage changes, and re-explaining why you can&rsquo;t just &ldquo;add a quiz at the end,&rdquo; a lot of experienced IDs describe a growing flatness — not anger, just a kind of muted exhaustion where the things that used to energize them don&rsquo;t quite land anymore.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">The Scope Creep and Pace Problem</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                L&amp;D teams are frequently under-resourced relative to organizational expectations. A team of two might be expected to support training needs across an entire company, produce content in multiple modalities, maintain an LMS, and keep up with a field that is genuinely evolving fast. That&rsquo;s before you factor in the &ldquo;urgent&rdquo; requests that materialize whenever someone senior decides training is the answer to this quarter&rsquo;s compliance concern.
              </p>
              <p>
                The pace of the field also plays a role. The last few years have brought a genuine acceleration — AI tools, rapid authoring platforms, evolving learner expectations, hybrid workforce dynamics. Keeping up feels like a professional obligation, and for people who care about doing good work, falling behind creates its own low-grade stress. There&rsquo;s always another tool to learn, another methodology to understand, another trend to evaluate.
              </p>
              <p>
                None of this is insurmountable. But the combination — heavy workloads, high expectations, constant context-switching, and a field that moves fast — adds up in ways that are easy to underestimate over time.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">What Actually Helps</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Individual coping strategies matter, but they work best as supplements to structural change — not substitutes for it. With that said, here&rsquo;s what practitioners in this field consistently describe as genuinely helpful:
              </p>
              <p>
                <strong className="text-heading">Get clearer on your boundaries with work scope.</strong> This is hard in environments where scope creep is baked into the culture, but getting explicit — in writing, in kickoff conversations, in project plans — about what&rsquo;s in and out of scope protects both your time and the quality of your work. &ldquo;That&rsquo;s outside the scope of this project; let&rsquo;s plan for it in the next one&rdquo; is a complete sentence.
              </p>
              <p>
                <strong className="text-heading">Build a peer community outside your organization.</strong> Working in a small L&amp;D team or as a solo ID means your professional echo chamber can get very small very fast. Connecting with other IDs — through communities like this one, LinkedIn, local ATD chapters, or online groups — gives you perspective, validation, and the occasional reminder that the thing you&rsquo;re dealing with is an industry problem, not a you problem.
              </p>
              <p>
                <strong className="text-heading">Protect at least one project you actually care about.</strong> Burnout accelerates when every project feels like obligation and none feel like craft. If you can carve out space — even one project per quarter — to design something in a way that genuinely reflects your best thinking, it helps maintain your sense of why you do this work.
              </p>
              <p>
                <strong className="text-heading">Name the invisible labor, at least to yourself.</strong> Keeping a simple log of the stakeholder management, revision rounds, scope negotiations, and problem-solving that happens behind the scenes gives you a more accurate picture of your workload — and better data for conversations about resourcing.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">The Systemic Piece</h2>
            <div className="mt-3 space-y-3">
              <p>
                It&rsquo;s worth saying clearly: a lot of what drives L&amp;D burnout is organizational, not personal. If your team is chronically under-resourced, if training is deployed as a cure-all for non-training problems, if your professional expertise is routinely overridden by people without learning design backgrounds — no amount of mindfulness or boundary-setting fully compensates for that. Those are structural problems that require structural responses.
              </p>
              <p>
                Advocating for your team&rsquo;s capacity, pushing back on requests that can&rsquo;t be executed responsibly given available resources, and being honest with leadership about the tradeoffs of constant under-investment in L&amp;D — these are harder conversations, but they&rsquo;re the ones that create lasting change. You deserve to work in an environment that takes your expertise seriously.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">You&rsquo;re Not Imagining It</h2>
            <p>
              If this resonates with you — if you&rsquo;ve been quietly running on fumes and wondering why — that recognition is worth something. It&rsquo;s not weakness, and it&rsquo;s not a sign that you&rsquo;re in the wrong field. It&rsquo;s an honest response to genuinely demanding work done in conditions that don&rsquo;t always honor the care it takes.
            </p>
            <p>
              The people who feel this most acutely are often the people who care the most about doing good work. That matters. Taking care of yourself is part of how you protect that — and it&rsquo;s part of how you stay in this field long enough to keep making an impact.
            </p>
            <p>
              You&rsquo;re not alone in it. And you don&rsquo;t have to figure it out in isolation.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="The Quiet Burnout in L&D: Why So Many Instructional Designers Are Exhausted (and What Helps)" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
