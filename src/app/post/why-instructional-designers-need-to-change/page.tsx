import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "3 Reasons Why Instructional Designers Need to Change",
  description:
    "The field of instructional design is evolving fast. Learner expectations have shifted, technology literacy is table stakes, and business impact has replaced content coverage. Here's what that means for you.",
  path: "/post/why-instructional-designers-need-to-change",
})

const VIEWS = 2238

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
          3 Reasons Why Instructional Designers Need to Change
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Nov 22, 2017
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            3 min read
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
            &ldquo;The instructional designer who thrives in 2025 isn&rsquo;t the one who knows the most about learning theory — it&rsquo;s the one who understands how learners have changed, what technology makes possible, and how to connect both to real business outcomes.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            Instructional design has a long and legitimate history. The frameworks, the models, the research — there&rsquo;s real rigor behind this field. But rigor in your foundations doesn&rsquo;t mean the practice should stay static. The world learners inhabit has changed dramatically, and the discipline has to change with it.
          </p>

          <p>
            This isn&rsquo;t a criticism of where the field came from. It&rsquo;s an honest look at where it needs to go — and the good news is that the change required is less about abandoning what you know and more about expanding how you apply it.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Learner Expectations Have Shifted Permanently</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The people sitting through your training have spent years using Netflix, YouTube, TikTok, and Spotify — platforms that are individually tailored, immediately engaging, and entirely on-demand. They don&rsquo;t wait for a scheduled time to consume content. They don&rsquo;t sit through preamble to get to what they need. And they make decisions about whether something is worth their attention within the first thirty seconds.
              </p>
              <p>
                That context shapes everything. When a learner logs into a course and encounters a wall of text, a fifteen-minute video with no navigation, or a click-through slideshow with no relevance to their actual work, they don&rsquo;t push through out of obligation — they disengage. And they do it fast.
              </p>
              <p>
                Designing for this reality means embracing microlearning, chunked content, and on-demand access. It means leading with relevance — helping learners understand immediately why this matters to them — rather than front-loading context and rationale before getting to the point. It means giving learners agency over how they move through content, not shepherding them through a linear path you designed six months ago.
              </p>
              <p>
                By 2025, AI-powered personalization is pushing this further. Learners increasingly expect content that adapts to what they already know, surfaces what they need next, and doesn&rsquo;t waste their time on material they&rsquo;ve already mastered. Designing for that expectation is a new skill — and one worth building.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Technology Literacy Is No Longer Optional</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                There was a time when an instructional designer could hand off their storyboard to a developer and stay out of the technical weeds. That era is largely over — not because IDs need to become engineers, but because the tools have changed enough that technical fluency is now part of the job.
              </p>
              <p>
                Understanding the difference between SCORM and xAPI matters when you&rsquo;re advising on a platform selection. Knowing what an LRS can and can&rsquo;t track matters when you&rsquo;re designing a measurement strategy. Being able to prototype in Articulate Storyline, Adobe Captivate, or a no-code tool matters when a client needs to see something before they can give you feedback.
              </p>
              <p>
                And now, AI tools have entered the picture in a real way. Generative AI is changing how content is drafted, how media is produced, how assessments are created, and how learners get personalized support. The IDs who understand these tools — who can use them thoughtfully and know their limits — are the ones positioned to do more, faster, without sacrificing quality. Those who ignore them risk being replaced by people who don&rsquo;t.
              </p>
              <p>
                Technology literacy doesn&rsquo;t mean you have to love every new tool. It means you have to stay curious, keep learning, and resist the temptation to outsource your understanding of the delivery environment to someone else.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Business Impact Has Replaced Content Coverage</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                For a long time, the implicit definition of success in training was coverage: did the learner complete the course? Did the content get delivered? Was the module launched on time and on budget? These are legitimate operational metrics — but they say almost nothing about whether learning happened or whether it made any difference.
              </p>
              <p>
                Organizations have gotten better at asking harder questions. Does this training change behavior? Does it reduce errors, increase sales, improve customer satisfaction, or speed up onboarding? Can we connect the investment in learning to a business outcome? These are the conversations happening in L&amp;D leadership today, and instructional designers who can participate in them — who can frame their work in terms of results rather than activities — are far more valuable than those who can&rsquo;t.
              </p>
              <p>
                This shift asks IDs to move upstream. Rather than waiting for a request to &ldquo;build a course on X,&rdquo; the most effective designers are having needs analysis conversations earlier, pushing back when training isn&rsquo;t the right solution, and designing measurement into the work from the start. Skills-based learning frameworks — where training is tied directly to specific, measurable skill gaps — are becoming the standard in forward-looking organizations. Understanding how to design within that context is increasingly essential.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">This Isn&rsquo;t a Threat — It&rsquo;s an Opening</h2>
            <div className="mt-3 space-y-3">
              <p>
                Reading a list of ways the field is evolving can feel like pressure. It isn&rsquo;t meant to be. Every shift described here represents an opportunity for instructional designers who are willing to grow alongside it.
              </p>
              <p>
                The IDs who understand modern learner expectations are better positioned to advocate for design that actually works. Those who build technology literacy can take on more complex and higher-visibility projects. Those who speak the language of business outcomes get invited to the table earlier and stay there longer.
              </p>
              <p>
                You don&rsquo;t have to change everything at once. Pick one area, go deeper, and build from there. That&rsquo;s how careers evolve — not in dramatic leaps, but in accumulated capability over time.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Instructional design as a discipline has strong roots — and strong roots can support new growth. The core of what makes a great ID hasn&rsquo;t changed: empathy for learners, systematic thinking, and a commitment to outcomes. What&rsquo;s changed is the context those skills need to operate in.
            </p>
            <p>
              Learners have different expectations. Technology has expanded what&rsquo;s possible. Organizations are asking harder questions about what learning actually delivers. The designers who are thriving right now are the ones who took those changes seriously and adapted — not by abandoning their foundations, but by building on them.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="3 Reasons Why Instructional Designers Need to Change" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
