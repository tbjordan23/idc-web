import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Top 5 Trends of Learning Design for 2023",
  description: "The five trends that defined learning design in 2023 — from the GenAI wave to learner agency — and why they still matter for how you design today.",
  path: "/post/top-5-trends-of-learning-design-for-2023",
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
          Top 5 Trends of Learning Design for 2023
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Jan 2023
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            4 min read
          </span>
        </div>
      </ScrollReveal>

      {/* ── Hook / Summary blurb ────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <blockquote className="mt-10 border-l-4 border-accent pl-5">
          <p className="text-lg font-medium leading-relaxed text-copy-muted italic">
            &ldquo;2023 was the year the ground shifted under learning design — and the designers who noticed early are the ones who were best positioned for everything that followed.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            Looking back, 2023 was a hinge point for learning design. ChatGPT had just gone mainstream, organizations were still recalibrating from the pandemic-era pivot to remote and hybrid work, and the economic pressures on L&amp;D teams were real. Against that backdrop, five trends emerged that didn&rsquo;t just reflect the moment — they set the direction for what came after.
          </p>

          <p>
            If you were paying attention in 2023, you saw the seeds of nearly every significant shift in the field since. Here&rsquo;s what mattered, and why it still does.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">The Arrival of Generative AI in Learning Design</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                2023 was the year generative AI stopped being something designers read about and started being something they actually used. ChatGPT made AI accessible in a way that previous tools hadn&rsquo;t. Suddenly, you could draft a learning objective, generate a scenario, outline a course structure, or produce a first-pass script in minutes — not hours.
              </p>
              <p>
                The initial reaction in the field was mixed. Some designers dove in immediately and started building AI-assisted workflows. Others were skeptical, worried about accuracy, originality, and what it meant for their jobs. Both reactions were reasonable. GenAI tools in 2023 were genuinely capable and genuinely unreliable — sometimes in the same output.
              </p>
              <p>
                What became clear over the course of the year: AI was most useful as a thinking partner and a first-draft generator, not a final-answer machine. The designers who built healthy skepticism into their workflow — using AI to accelerate the generative work while keeping their own judgment firmly in charge of quality — were the ones who came out ahead. The lesson from 2023 applies just as much today: AI is powerful; the person directing it is still where the value lives.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">The Shift to a Skills-Based Approach</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Organizations in 2023 were increasingly frustrated with training that looked good on a completion report but didn&rsquo;t change behavior. The response was a serious pivot toward skills-based learning — designing not around what people should know, but around what they should be able to do differently as a result of the training.
              </p>
              <p>
                This shift changed the conversation with business stakeholders. Instead of asking &ldquo;what content do you want us to cover?&rdquo; the better question became &ldquo;what does competent performance look like in this role, and what&rsquo;s the gap between where people are and where they need to be?&rdquo; That&rsquo;s a harder conversation — but it produces better design.
              </p>
              <p>
                Skills-based design also pushed L&amp;D teams to think more carefully about assessment. If the goal is skill development, then quiz scores at the end of a module aren&rsquo;t sufficient evidence. Designers started building more performance-based assessments, scenario-based practice, and observable checkpoints into their programs — a shift that made the work more rigorous and more meaningful.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Hybrid Learning as a Permanent Reality</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The pandemic forced a rapid shift to remote and online learning. 2023 was the year organizations stopped treating that as temporary and started designing for hybrid work as the actual default. That meant rethinking programs that had been built around in-person cohort experiences, and figuring out how to deliver the same quality of learning — and the same sense of connection — to people who might be in the office, at home, or anywhere in between.
              </p>
              <p>
                Hybrid learning design is genuinely harder than either pure in-person or pure online design. You can&rsquo;t just take a classroom program and put it on Zoom, and you can&rsquo;t take an online course and call it a hybrid experience. The designers who figured this out in 2023 — who built programs that worked for everyone in the room, regardless of which room they were in — developed a skill set that became increasingly valuable.
              </p>
              <p>
                The technology side matured too. Collaborative tools, asynchronous discussion platforms, and virtual facilitation techniques got more sophisticated, and designers who learned to use them well were able to create experiences that didn&rsquo;t feel like a compromise — they felt like a different, and sometimes better, way of learning together.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Learner Agency as a Design Value</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Adult learners have always responded better to experiences that treat them as capable, self-directed professionals rather than passive recipients of instruction. In 2023, that principle started getting built more deliberately into design choices — not just as a nice idea, but as an actual structural feature of how programs were built.
              </p>
              <p>
                Learner agency showed up in different ways: curated learning paths where employees could choose topics relevant to their specific roles, self-paced formats that didn&rsquo;t force everyone through the same schedule, optional deep-dive resources for people who wanted to go further, and feedback mechanisms that let learners flag what was working and what wasn&rsquo;t. These aren&rsquo;t complex design moves — but they signal something important to the learner: this experience was built for you, not just built for people-like-you.
              </p>
              <p>
                The engagement data on this is consistent. When learners feel a sense of ownership over their learning path, they invest more in it. They&rsquo;re more likely to complete, more likely to apply what they&rsquo;ve learned, and more likely to come back. Designing for agency is one of the highest-leverage moves a learning designer can make.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">05</span>
              <h2 className="text-xl font-bold text-heading">Data Literacy as a Core L&amp;D Skill</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Learning analytics had been available to L&amp;D teams for years. In 2023, more teams started actually using them — not just to report completion rates, but to understand what was happening inside a learning experience and make better design decisions as a result. Which modules were generating re-visits? Where were learners dropping off? Which assessment questions were producing scores that were too consistent, suggesting they might be measuring recall rather than understanding?
              </p>
              <p>
                The challenge was that most L&amp;D professionals hadn&rsquo;t been trained to think this way. Reading data, identifying meaningful signals, and translating insights into design choices requires a different kind of thinking than storyboarding or writing learning objectives — and it requires a comfort with ambiguity that not everyone initially has.
              </p>
              <p>
                2023 marked the beginning of a shift where data literacy started being expected, not optional, in L&amp;D roles — particularly at the senior level. That expectation has only grown since. If data still feels foreign to you, this is the skill worth building. Not because you need to become an analyst, but because the designers who can speak the language of data are far more effective advocates for their learners inside organizations driven by metrics.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">How These Trends Connect</h2>
            <div className="mt-3 space-y-3">
              <p>
                These five trends aren&rsquo;t independent. They reinforce each other in important ways. AI makes it faster to build the modular, flexible content that skills-based and agency-centered design requires. Hybrid learning demands better data to understand what&rsquo;s actually working when you can&rsquo;t read the room. Skills-based design produces clearer success metrics that make data analysis more meaningful.
              </p>
              <p>
                The through-line is a shift toward design that&rsquo;s more responsive, more personalized, and more accountable to actual outcomes. Each of these trends, in its own way, pushes in that direction. Understanding how they connect helps you see not just what&rsquo;s changing, but why — and that understanding is what lets you design thoughtfully rather than just react to the next thing that surfaces.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              2023 set a direction that the field has been moving in ever since. The designers who engaged seriously with these trends — who didn&rsquo;t just read about them but actually changed how they worked — built a foundation that made everything that came after easier to navigate.
            </p>
            <p>
              If you&rsquo;re reading this now, some of these shifts are probably already part of how you think. Others might still feel like new territory. Either way, the underlying principle holds: the field rewards designers who stay curious, build real skills in the areas that matter, and keep their focus on what actually serves their learners. That hasn&rsquo;t changed, and it won&rsquo;t.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Top 5 Trends of Learning Design for 2023" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
