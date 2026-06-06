import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Elevate Your Instructional Design Game with ChatGPT",
  description:
    "ChatGPT won't replace instructional designers — but it can make every phase of your ADDIE process faster and sharper. Here's where it actually helps.",
  path: "/post/elevate-your-instructional-design-game-with-chat-gpt",
})


export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["AI"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Elevate Your Instructional Design Game with ChatGPT
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            May 5, 2023
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
            &ldquo;ChatGPT won&rsquo;t replace instructional designers — but designers who know how to use it
            well will have a real advantage. The question isn&rsquo;t whether to use it. It&rsquo;s
            where it actually helps.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            By 2025, ChatGPT has become a fixture in most creative and knowledge-work workflows —
            and instructional design is no exception. If you haven&rsquo;t started experimenting with it
            in your own practice, now is a good time. If you have, you may already know that the
            value isn&rsquo;t evenly distributed across everything you do.
          </p>

          <p>
            Some phases of the ADDIE model benefit enormously from AI assistance. Others still
            need your full human judgment. Here&rsquo;s a breakdown of where ChatGPT genuinely moves
            the needle — and how to use it there effectively.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Analysis: Building Context Faster</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Before you can design anything meaningful, you need to understand your audience,
                the performance gap, and the organizational context. That research takes time —
                and ChatGPT can help you move through it faster.
              </p>
              <p>
                Use it to quickly build domain knowledge before meeting with a subject matter expert.
                Ask it to explain a technical topic in plain language, generate a glossary of field
                terms, or surface common misconceptions learners might bring to the topic. You can
                also use it to draft needs analysis interview questions or survey instruments, then
                refine those drafts based on your specific context.
              </p>
              <p>
                The result: you walk into discovery conversations better prepared, which makes those
                conversations more productive for everyone.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Design: Outlining, Objectives &amp; Scenarios</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The design phase is where ChatGPT shines most consistently. It&rsquo;s excellent at
                drafting learning objectives using action-verb frameworks like Bloom&rsquo;s Taxonomy,
                proposing course structures and module outlines, and generating scenario ideas based
                on a topic and audience you describe.
              </p>
              <p>
                Try prompting it with something like: &ldquo;Write five performance-based learning
                objectives for a course on conflict resolution for new managers. Use Bloom&rsquo;s Taxonomy
                action verbs at the application and analysis levels.&rdquo; The output won&rsquo;t always be
                perfect, but it gives you a strong starting point to shape — which is much faster
                than writing from scratch.
              </p>
              <p>
                Scenario brainstorming is another area where it excels. Give it a job role, a
                challenge, and a desired behavior, and ask it to generate several realistic scenario
                options. Then pick the ones that resonate and develop them further yourself.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Development: Drafting &amp; Refining Content</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Content development is often the most time-intensive phase of ID work. ChatGPT can
                compress it meaningfully — though it works best as a drafting and editing partner,
                not a final-content generator.
              </p>
              <p>
                Use it to draft first versions of narration scripts, on-screen text, facilitator
                guides, or knowledge check questions. Then edit with your own voice and expertise.
                It&rsquo;s also useful for rewriting content at a different reading level, converting
                dense SME notes into learner-friendly language, or generating multiple variations
                of a single piece of content so you can choose the approach that fits best.
              </p>
              <p>
                Think of it as a writing partner who produces a working draft quickly, so your
                energy goes into refining rather than starting from zero.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Evaluation: Synthesizing Feedback &amp; Drafting Surveys</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Evaluation is often the phase instructional designers have the least bandwidth for —
                which means it&rsquo;s also where AI assistance can have an outsized impact.
              </p>
              <p>
                ChatGPT can draft Kirkpatrick-aligned survey questions, help you design a simple
                evaluation plan, or synthesize open-ended learner feedback into themes. If you&rsquo;ve
                collected qualitative responses from a pilot and need to make sense of them quickly,
                paste them in and ask for a thematic summary.
              </p>
              <p>
                It won&rsquo;t replace a rigorous evaluation methodology — but for many ID teams, a
                consistent, thoughtful evaluation process is better than a perfect one that never
                gets done. ChatGPT lowers the friction enough that &ldquo;we don&rsquo;t have time&rdquo;
                becomes a harder excuse to lean on.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">An Honest Caveat: Accuracy &amp; Hallucinations</h2>
            <div className="mt-3 space-y-3">
              <p>
                ChatGPT is confident even when it&rsquo;s wrong. It can generate plausible-sounding
                statistics, citations, and technical claims that are simply made up. This is called
                hallucination, and it&rsquo;s a real risk — especially in compliance, healthcare, or
                any domain where accuracy matters.
              </p>
              <p>
                Always treat ChatGPT output as a draft, not a source. Verify facts independently.
                Have your SME review any domain-specific content before it goes near learners.
                The tool is for speed and structure — the accuracy is still your responsibility.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              ChatGPT won&rsquo;t design a great course for you. But it can handle a meaningful share
              of the drafting, organizing, and ideating that eat up your time — which frees you
              to focus on the work that actually requires your expertise: understanding your
              audience, making sound design decisions, and ensuring the learning lands.
            </p>
            <p>
              Start small. Pick one phase of your next project and experiment with AI assistance
              there. Notice what it speeds up, what it gets wrong, and where your judgment still
              needs to be in the driver&rsquo;s seat. That feedback loop is how you build a workflow
              that actually serves you.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Elevate Your Instructional Design Game with ChatGPT" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
