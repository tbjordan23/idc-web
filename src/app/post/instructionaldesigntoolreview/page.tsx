import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Review: Synapse Learning Experience Tool",
  description: "An honest look at Synapse, a cloud-based learning experience design tool built for instructional designers. What it does well, who it's for, and where it falls short.",
  path: "/post/instructionaldesigntoolreview",
})

const VIEWS = 1075

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Tools"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Review: Synapse Learning Experience Tool
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            May 13, 2017
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            2 min read
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
            &ldquo;The ID tool landscape keeps evolving — but some principles for evaluating a new tool never change: does it fit your process, support your team, and actually help learners?&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            The instructional design tool market has always been crowded, and the pace of change has only accelerated. This review was originally written in 2017 when Synapse launched as a fresh alternative to heavyweight authoring tools — and while the specific platform landscape has shifted since then, the core questions it raised about what a learning experience design tool should do are still worth exploring. Think of this as a historical snapshot with lasting lessons about what to look for in any collaborative design tool.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">What Synapse Was</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Synapse positioned itself as a cloud-based Learning Experience Design System — emphasis on &ldquo;experience design&rdquo; rather than just course authoring. It was built around the idea that instructional design is a process, not just a production step, and tried to support that full process inside a single tool: from needs analysis and storyboarding through collaboration and delivery.
              </p>
              <p>
                What made it stand out in 2017 was its accessibility. You didn&rsquo;t need to be technical to use it. It worked across devices without installation, and it guided designers through structured phases that aligned with established models like ADDIE and SAM. For a field that was (and still is) full of tools that assume you&rsquo;re either a developer or a PowerPoint wizard, that approachability was genuinely refreshing.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Key Features Worth Knowing About</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                A few capabilities made Synapse interesting at the time. Its storyboarding and rapid prototyping feature let designers mock up lessons quickly — supporting text, video, images, and PDFs — which was useful for getting stakeholder buy-in before full development. That kind of fast, lightweight prototyping remains valuable in any tool.
              </p>
              <p>
                The needs analysis module was another standout. It walked designers through identifying performance goals, audience needs, and learning objectives — things that often get skipped when teams are under pressure to jump straight to production. Having that structured prompting built into the tool was a smart design choice.
              </p>
              <p>
                Team collaboration was baked in from the start: shared projects, inline comments, email notifications, and a full activity log. For distributed teams, that mattered. The drag-and-drop interface kept the experience visual and approachable without requiring any coding knowledge.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Who It Was Best Suited For</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Synapse was particularly well matched for instructional designers who were newer to the field or working without a dedicated development partner. Its structured approach to the design process made it a useful guardrail for solo practitioners and small teams who needed to move quickly without skipping important design thinking steps.
              </p>
              <p>
                It was also a good fit for collaborative environments — teams that needed a shared workspace rather than passing files back and forth. The cloud-based model meant stakeholders could review and comment without needing software installed, which simplified the feedback loop considerably.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Where It Fell Short &amp; How the Landscape Has Changed</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                No tool is perfect, and Synapse had limits. Its output capabilities were more oriented toward prototyping and design documentation than fully interactive published eLearning. If your workflow ended with a polished SCORM package, you&rsquo;d still need another tool downstream.
              </p>
              <p>
                Since this review was written, the broader landscape has expanded significantly. Tools like Figma have been adopted by many IDs for storyboarding and prototyping. Articulate&rsquo;s ecosystem (Storyline and Rise) has become dominant for full-production authoring. Adobe Learning Manager and similar platforms have matured for enterprise use. And AI-assisted design tools are now entering the picture in meaningful ways. Whatever you&rsquo;re evaluating today, the framework still applies: does it support your process, does it make collaboration easier, and does it produce learning that actually works?
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">Tool Reviews Age Fast — Here&rsquo;s What to Do About It</h2>
            <div className="mt-3 space-y-3">
              <p>
                Any tool review has a shelf life, and this one is no exception. Platforms get acquired, pivot, or shut down. Pricing changes. Features that were innovative become standard — or disappear entirely.
              </p>
              <p>
                The best way to evaluate any ID tool in 2025 is to trial it yourself with a real project in mind. Most platforms offer free tiers or trial periods. Bring a specific design challenge, run it through the tool&rsquo;s workflow, and see where it helps and where it gets in your way. No review substitutes for that hands-on experience.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Synapse was a thoughtfully designed tool that took the instructional design process seriously — not just the output. Whether or not you encounter it directly, the principles it embodied — structured process support, collaborative design, accessible prototyping — are worth looking for in any tool you evaluate. The ID tool you choose should fit your workflow, support your team, and keep the learner at the center of every decision.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Review: Synapse Learning Experience Tool" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
