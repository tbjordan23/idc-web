import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "5 Common Myths About eLearning",
  description:
    "eLearning gets a bad reputation — and some of it is earned. But many of the criticisms come from myths that have more to do with poor execution than with the medium itself.",
  path: "/post/5-common-myths-about-elearning",
})

const VIEWS = 607

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["eLearning"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          5 Common Myths About eLearning
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Jul 4, 2019
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
            &ldquo;Bad eLearning is real — but it says something about execution, not the medium. Here&rsquo;s the truth behind five myths that keep organizations from using eLearning well.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            Ask someone who&rsquo;s sat through a hundred-slide click-through compliance module what they think of eLearning, and you&rsquo;ll get an earful. The criticisms are understandable. A lot of eLearning is genuinely bad — not because the medium fails, but because it&rsquo;s been misused.
          </p>
          <p>
            The problem is that these bad experiences have hardened into myths that follow eLearning around unfairly. As instructional designers, we encounter these myths constantly — from stakeholders who&rsquo;ve been burned before, from leaders who don&rsquo;t trust the format, and sometimes from learners who&rsquo;ve checked out before the course even starts. It&rsquo;s worth setting the record straight.
          </p>

          {/* Myth 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Myth: eLearning Is Just PowerPoint Online</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                <strong className="text-copy">The myth:</strong> eLearning is what happens when someone dumps their slide deck into an authoring tool, adds a Next button, and calls it a course.
              </p>
              <p>
                <strong className="text-copy">The reality:</strong> That description fits a lot of what passes for eLearning — but it&rsquo;s a design failure, not a format failure. When done well, eLearning uses branching scenarios, simulations, spaced practice, and interactivity that a slide deck simply can&rsquo;t deliver. The medium has real expressive power. The question is whether anyone has taken the time to use it.
              </p>
              <p>
                If your eLearning looks like a PowerPoint, that&rsquo;s worth examining. Good instructional design starts with learning objectives and works backward to the experience — not forward from a slide template.
              </p>
            </div>
          </div>

          {/* Myth 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Myth: Learners Can&rsquo;t Stay Engaged Online</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                <strong className="text-copy">The myth:</strong> Attention spans are too short for online learning. People multitask, zone out, and don&rsquo;t retain anything.
              </p>
              <p>
                <strong className="text-copy">The reality:</strong> Learners are remarkably capable of sustained attention — when the content is relevant, the design respects their time, and there&rsquo;s a clear reason to care. People binge entire documentary series online. The issue isn&rsquo;t the screen; it&rsquo;s the experience on it.
              </p>
              <p>
                Engagement is a design problem. Short, focused modules. Scenarios that feel real. Questions that require actual thinking. When eLearning is built around the learner&rsquo;s context and motivation, engagement follows.
              </p>
            </div>
          </div>

          {/* Myth 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Myth: eLearning Replaces Instructors</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                <strong className="text-copy">The myth:</strong> Once you build the course, you don&rsquo;t need a trainer anymore. eLearning automates the human out of learning.
              </p>
              <p>
                <strong className="text-copy">The reality:</strong> eLearning is at its best when it works alongside human touchpoints — not instead of them. Pre-work that prepares learners for a live session. Just-in-time modules that support a coaching conversation. Reference content that frees up a manager&rsquo;s time for the complex questions only they can answer.
              </p>
              <p>
                The strongest learning ecosystems blend modalities intentionally. eLearning doesn&rsquo;t replace the instructor — it handles what the instructor shouldn&rsquo;t have to do repeatedly so that human interaction can focus where it matters most.
              </p>
            </div>
          </div>

          {/* Myth 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Myth: You Need a Big Budget to Do It Right</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                <strong className="text-copy">The myth:</strong> Good eLearning requires a production team, a full suite of tools, and a six-figure budget. Otherwise, don&rsquo;t bother.
              </p>
              <p>
                <strong className="text-copy">The reality:</strong> Some of the most effective eLearning is simple, low-budget, and focused. A well-written scenario with a clear decision point outperforms a slick animation with no learning objective every time. Modern authoring tools like Articulate Rise, Adobe Learning Manager, and even Google Slides with thoughtful design can produce genuinely effective experiences.
              </p>
              <p>
                Budget matters less than intention. Start with the outcome you need to achieve, strip everything that doesn&rsquo;t serve it, and build from there. Simplicity is often the better design choice anyway.
              </p>
            </div>
          </div>

          {/* Myth 5 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">05</span>
              <h2 className="text-xl font-bold text-heading">Myth: eLearning Is Only for Tech Companies</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                <strong className="text-copy">The myth:</strong> Online learning works for software training and compliance — but it&rsquo;s not suited to industries like healthcare, manufacturing, hospitality, or retail.
              </p>
              <p>
                <strong className="text-copy">The reality:</strong> eLearning is sector-agnostic. What changes is the content, the constraints, and the delivery context — not the validity of the medium. Healthcare organizations use simulation-based eLearning for clinical skill development. Retailers train staff on product knowledge and customer service via mobile microlearning. Manufacturers use augmented reality and video-based eLearning for equipment operation.
              </p>
              <p>
                The design has to meet the learner where they are. That&rsquo;s true in every sector. If the eLearning isn&rsquo;t working in your industry, the problem is context fit — not the format itself.
              </p>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">When eLearning Genuinely Isn&rsquo;t the Right Answer</h2>
            <div className="mt-3 space-y-3">
              <p>
                Busting these myths doesn&rsquo;t mean eLearning is always the answer. It isn&rsquo;t. If the performance gap comes from motivation, culture, or broken processes — no course will fix it. If the skill requires live practice with real-time feedback, eLearning alone won&rsquo;t get you there. If the audience has no reliable technology access, the format breaks down before it starts.
              </p>
              <p>
                The best instructional designers ask &ldquo;what does this learner actually need?&rdquo; before asking &ldquo;what format should this be?&rdquo; Sometimes the answer is eLearning. Sometimes it&rsquo;s a job aid, a coaching conversation, or a process change. Knowing the difference is what separates design from content delivery.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              eLearning has earned some of its bad reputation — but not all of it. The medium isn&rsquo;t the problem. What you do with it is. When eLearning is designed with intention, grounded in real learning objectives, and built around the learner&rsquo;s experience, it works. It scales. It saves time and money. It delivers consistency that no other format can match.
            </p>
            <p>
              The myths persist because bad eLearning is more common than good eLearning. That&rsquo;s exactly why skilled instructional designers matter — and why understanding the medium deeply enough to use it well is one of the most valuable things you can bring to any organization.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="5 Common Myths About eLearning" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
