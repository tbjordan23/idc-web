import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "The Future of Learning: Why Personalization Matters",
  description: "One-size-fits-all learning is losing ground. Here's why personalization is now the baseline in L&D — and what it means for instructional designers.",
  path: "/post/the-future-of-learning-why-personalization-changes-everything",
  ogImage: "/images/young-woman-laptop-1.png",
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
          The Future of Learning: Why Personalization Changes Everything
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Nov 12, 2025
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
            &ldquo;Personalized learning isn&rsquo;t a feature anymore — it&rsquo;s the expectation. Understanding why it matters (and how to actually deliver it) is quickly becoming a core skill for every instructional designer.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Featured Image ──────────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-card">
          <Image
            src="/images/young-woman-laptop-1.png"
            alt="The Future of Learning: Why Personalization Changes Everything"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 768px, 100vw"
            priority
          />
        </div>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            Think about the last time you sat through training that clearly wasn&rsquo;t built for you — too basic, too fast, covering things you already knew while rushing past the parts you actually needed. That feeling is exactly what personalized learning is designed to eliminate.
          </p>

          <p>
            The traditional model of learning — everyone in the same room, moving at the same pace, through the same content — made sense when it was the only option. It&rsquo;s no longer the only option. And as learners&rsquo; expectations shift, organizations that keep defaulting to one-size-fits-all approaches are starting to feel it in their engagement and retention numbers.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Why One-Size-Fits-All Keeps Failing</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Every learner brings something different to the table: a different baseline of knowledge, a different pace, different goals, and different constraints on their time and attention. A course built for the average learner is, in practice, built for almost no one. It moves too slowly for people who already know the material and too quickly for people who don&rsquo;t.
              </p>
              <p>
                The result is disengagement — and disengagement is expensive. When learners feel like the training wasn&rsquo;t built for them, they check out. They rush through it. They retain less. And the investment the organization made in developing and delivering that content produces a fraction of the return it could have.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">How Personalization Actually Works in Practice</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Personalization in learning exists on a spectrum. At its simplest, it might mean giving learners a choice of which module to start with, or letting them self-assess and skip content they&rsquo;ve already mastered. At its most sophisticated, it means an adaptive system that analyzes behavior in real time — how long someone pauses on a section, how they perform on practice questions — and adjusts the learning path accordingly.
              </p>
              <p>
                AI-powered platforms can now do that analysis continuously, predicting where a learner is likely to struggle before they get there and surfacing additional resources proactively. For a professional who needs to upskill quickly in a rapidly changing field, that kind of responsive design isn&rsquo;t a luxury — it&rsquo;s the difference between learning that fits their life and learning that doesn&rsquo;t.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">What It Means for Instructional Designers</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Designing for personalization is a different kind of challenge than designing a fixed linear course. Instead of building one path, you&rsquo;re building a system of connected options — content that can be combined, sequenced, and surfaced differently depending on who&rsquo;s accessing it and when. That requires more upfront thinking about learner variability, more intentional modular design, and a closer relationship with data about how the experience is actually performing.
              </p>
              <p>
                It also means developing a comfort level with adaptive platforms — understanding what they can and can&rsquo;t do, and how to design content that works well in an adaptive context rather than fighting against it. This is a skill set that&rsquo;s only going to become more valuable as personalization becomes more standard.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">The Outcomes Worth Knowing About</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The research on personalized learning is consistent: when learners feel like an experience was built for them, engagement goes up, retention improves, and confidence grows. For professionals in fast-moving industries who need to build new skills quickly, the ability to move through content at their own pace — focusing where they need depth and moving faster where they don&rsquo;t — has a measurable impact on how much they actually take away from the training.
              </p>
              <p>
                These aren&rsquo;t small differences. Organizations that have invested seriously in personalization report meaningful improvements in learner satisfaction and measurable gains in on-the-job application of skills — which is the outcome that actually matters.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">A Practical Note on Getting Started</h2>
            <div className="mt-3 space-y-3">
              <p>
                You don&rsquo;t need a full-featured adaptive platform to start designing for personalization. Even simple choices — pre-assessments that let learners skip familiar content, branching scenarios that respond to learner decisions, optional deep-dive resources — move the experience meaningfully closer to personalized.
              </p>
              <p>
                The barrier most teams run into isn&rsquo;t technology — it&rsquo;s content architecture. Building modular, reusable content from the start makes personalization far more achievable. If you&rsquo;re in a position to influence how new content gets designed, that&rsquo;s the conversation worth starting.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Personalization isn&rsquo;t a trend that&rsquo;s coming — it&rsquo;s already here, and it&rsquo;s reshaping what learners expect from every training experience they encounter. The organizations and designers who understand that are better positioned to build learning that actually works.
            </p>
            <p>
              The shift doesn&rsquo;t have to happen all at once. But moving toward more flexible, responsive, learner-aware design — even incrementally — is one of the most meaningful investments you can make in the quality of what you create.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="The Future of Learning: Why Personalization Changes Everything" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
