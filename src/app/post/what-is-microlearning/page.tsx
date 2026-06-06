import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "What Is Microlearning? Definition and Tips",
  description: "Microlearning is more than just short content. Learn what it really is, when it works, when it doesn't, and how to design microlearning that actually drives performance.",
  path: "/post/what-is-microlearning",
})


export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["LX Design"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          What Is Microlearning? Definition and Tips
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Aug 4, 2017
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            2 min read
          </span>
        </div>
      </ScrollReveal>

      {/* ── Hook / Summary blurb ────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <blockquote className="mt-10 border-l-4 border-accent pl-5">
          <p className="text-lg font-medium leading-relaxed text-copy-muted italic">
            &ldquo;Microlearning isn&rsquo;t about making your eLearning shorter — it&rsquo;s about designing for a single, focused outcome and getting out of the learner&rsquo;s way.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            Microlearning is everywhere right now — and like a lot of buzzwords in the L&amp;D world, it&rsquo;s used to mean very different things depending on who you ask. Some teams call a 45-minute course &ldquo;micro&rdquo; just because they cut out a few slides. That&rsquo;s not microlearning. Let&rsquo;s clear up what it actually is, when it genuinely works, and how to design it well.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">A Clear Definition: Purposeful, Focused, Actionable</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Microlearning is the delivery of focused, bite-sized content designed to meet a single, specific learning outcome. The operative words there are &ldquo;focused&rdquo; and &ldquo;single outcome.&rdquo; A microlearning asset isn&rsquo;t just a short version of a longer course — it&rsquo;s built from the ground up around one thing a learner needs to know or do.
              </p>
              <p>
                Typically, microlearning content runs between one and five minutes. But the time limit is a byproduct of the design goal, not the goal itself. If you design for a single outcome and keep everything that doesn&rsquo;t serve that outcome out, the result is usually short. If you try to cover five things and just cut the runtime, you haven&rsquo;t made microlearning — you&rsquo;ve made a rushed course.
              </p>
              <p>
                Common formats include short task-based video demonstrations, packaged simulations, gamified activities, instructive animations, and visually rich job aids. What unifies them isn&rsquo;t format — it&rsquo;s specificity.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">When Microlearning Works Well</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Microlearning shines in specific contexts. Performance support is the big one — when someone is in the middle of a task and needs a quick reference, a short video or job aid is far more useful than sending them back to a full course. Just-in-time learning, right at the moment of need, is where microlearning delivers its greatest value.
              </p>
              <p>
                It also works well for spaced practice and reinforcement. After a learner completes a more comprehensive training, a series of short microlearning touchpoints spaced over days or weeks helps move knowledge from working memory into long-term retention. Think of it as the follow-up that makes the original training stick.
              </p>
              <p>
                Mobile delivery is another natural fit. Learners on the go don&rsquo;t have time or screen space for dense content. Microlearning assets designed for mobile — short, visual, one-tap navigation — meet people where they actually are.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">When It Doesn&rsquo;t Work</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Microlearning is not the right tool for complex skill-building that requires context, practice, and integration. If you&rsquo;re trying to teach someone to lead difficult conversations, conduct a performance review, or diagnose a multifaceted problem — a three-minute module isn&rsquo;t going to get there. Some things genuinely require sustained engagement and depth.
              </p>
              <p>
                It&rsquo;s also not a substitute for onboarding or foundational training. New employees need context, relationships, and enough time to build mental models. Throwing them a library of micro-assets and calling it onboarding is a fast way to create confusion and churn.
              </p>
              <p>
                And if the learning content itself is highly interdependent — where understanding concept B requires understanding concept A — fragmenting it into disconnected microlearning pieces can actually hurt comprehension rather than help it.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Practical Tips for Designing Microlearning Well</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Here&rsquo;s what actually makes microlearning effective:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Keep it short.</strong> Aim for 1–3 minutes of active engagement. If you&rsquo;re creeping past 5 minutes, ask yourself what you can remove — not what you can speed up.</li>
                <li><strong>One objective per asset.</strong> Seriously, one. If you find yourself writing &ldquo;and also&rdquo; in your objective, you have two modules, not one.</li>
                <li><strong>Make it captivating.</strong> Short doesn&rsquo;t mean boring. Use engaging visuals, relatable scenarios, and varied formats — a talking-head video three minutes long is still a talking-head video.</li>
                <li><strong>Design for the moment of need.</strong> Ask yourself: where will the learner be when they need this? Design the delivery for that context, not for a desk-based LMS.</li>
                <li><strong>Think in series, not silos.</strong> A microlearning library works better than a pile of disconnected assets. Group related pieces so learners can navigate a topic with intention.</li>
              </ul>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">Microlearning vs. Just Making Your eLearning Shorter</h2>
            <div className="mt-3 space-y-3">
              <p>
                There&rsquo;s a meaningful difference between a microlearning asset and a compressed course. A compressed course still tries to cover multiple objectives — it just does it faster, with fewer words and smaller visuals. The result is often just harder to absorb.
              </p>
              <p>
                True microlearning starts with a single outcome and builds everything around it. It doesn&rsquo;t include content because it&rsquo;s &ldquo;good to know&rdquo; — it only includes what the learner needs to do the one thing. That intentional scoping is where most teams struggle, and it&rsquo;s also where the real design work happens.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Microlearning, done well, is one of the most effective tools in an instructional designer&rsquo;s kit. Done poorly, it&rsquo;s just short content that doesn&rsquo;t do enough to help anyone. The difference is intentional design: start with one outcome, build everything around it, and deliver it where your learner actually is. That discipline — not the runtime — is what makes microlearning work.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="What Is Microlearning? Definition and Tips" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
