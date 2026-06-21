import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Need Analysis: 5 Important Areas",
  description: "Five areas every instructional designer must investigate before building anything. Here's how to ask the right questions and build the right training.",
  path: "/post/need-analysis-tips",
  ogImage: "/images/woman-thinking-laptop-night-2.png",
})


export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Needs Analysis"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Need Analysis: 5 Important Areas
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Aug 13, 2018
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
            &ldquo;Training need analysis is the most important part of your job as a learning solution provider. The more relevant your questions are, the more effective your training will be.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Featured Image ──────────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-card">
          <Image
            src="/images/woman-thinking-laptop-night-2.png"
            alt="Need Analysis: 5 Important Areas"
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

          <p>A client reaches out. They know they need training — they can feel the gap somewhere in their organization. Your job, before you open a single authoring tool, is to understand what&rsquo;s actually going on. What&rsquo;s the real problem? Who&rsquo;s affected? What does success look like? That&rsquo;s what needs analysis is for.</p>

          <p>Done well, a needs analysis protects you from building the wrong thing. It surfaces the context that shapes every design decision that follows. And it turns a vague request into a clear, actionable brief. Here are the five key areas to investigate — and the questions worth asking in each one.</p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Organizational &amp; Business Needs</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Start at the top. Before you can design anything meaningful, you need to understand why this training is being requested — from the organization&rsquo;s perspective, not just the requester&rsquo;s. What business problem is this training meant to solve? What happens if nothing changes?</p>
              <p>Ask questions like: Why is this training needed right now? What&rsquo;s driving the urgency? What does the organization stand to gain — or lose — depending on the outcome? Is there a compliance requirement, a performance dip, a product launch, a cultural shift? The business context tells you how much is at stake and helps you calibrate the investment in the solution.</p>
              <p>A real-world example: a hotel chain experiencing poor customer retention. The instinct might be to build a general service training. But understanding the business driver — customer churn — leads to a very different solution: short, scenario-based modules presenting realistic service situations, with branching choices that reflect the actual judgment calls staff have to make. The business need shapes the design.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Gap Analysis</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Once you understand the business need, you can begin to identify the gap — the distance between where performance currently sits and where it needs to be. This is the heart of needs analysis, and it&rsquo;s where a lot of training projects go wrong if skipped.</p>
              <p>The gap might be a knowledge gap (people don&rsquo;t know how to do something), a skill gap (they know but can&rsquo;t execute consistently), or a motivation gap (they know and can do it, but they&rsquo;re not). Each of these requires a different kind of solution, and not all of them are solved by training. A gap analysis keeps you honest about whether training is actually the right intervention — or whether you&rsquo;re designing an elegant solution to the wrong problem.</p>
              <p>Ask: What are people currently doing, and what should they be doing instead? How wide is that gap? Where does it show up most visibly? What has already been tried?</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Learner Analysis</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Designing without knowing your audience is a bit like baking a cake for someone without knowing their preferences — you might produce something technically impressive that the recipient can&rsquo;t use. Learner analysis puts the actual people at the center of your design decisions.</p>
              <p>Who will take this training? Where are they located? What&rsquo;s their experience level with the subject matter? What&rsquo;s their relationship with technology? What are their existing mental models — and where might those models create friction with new information? Are there accessibility needs to account for?</p>
              <p>Here&rsquo;s an example that makes the stakes clear: a software training request comes in, and the stated audience is &ldquo;trainers.&rdquo; But those trainers already know the software — they need to learn how to teach it to others. That distinction completely changes the instructional approach, the tone, the level of detail, and the format. Learner analysis surfaces these differences before you build anything.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Task Analysis</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Task analysis breaks down what learners actually need to be able to do at the end of the training — not just what they need to know. It maps the skills, steps, and decisions involved in performing the target behavior on the job.</p>
              <p>Ask: What specific skill should learners acquire? Where do they currently stand relative to that skill? How will they apply it in their actual work environment? What are the decision points, the common errors, the contextual nuances that someone doing this job needs to navigate?</p>
              <p>Task analysis is what transforms a content-dump into a performance-focused learning experience. When you know what people need to do — not just what they need to know — you can design practice, feedback, and assessment that actually prepares them for the real thing. It&rsquo;s also what allows you to write learning objectives that are specific, measurable, and tied to real outcomes rather than vague aspirations.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">05</span>
              <h2 className="text-xl font-bold text-heading">Environmental Analysis</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>The final area zooms back out — from the individual learner to the broader context in which learning will happen and be applied. Where will people take this training? What technology constraints exist? What does the organizational culture around learning look like? Is training valued and supported by leadership, or is it something employees are expected to squeeze in between other responsibilities?</p>
              <p>Also consider where this training sits in the bigger picture. Is it a standalone module or part of a larger learning program? Does existing training cover related content — and if so, why change it now? How does this learning experience connect to the learner&rsquo;s larger development journey?</p>
              <p>Environmental factors shape delivery decisions significantly. A learner who works in a call center with limited breaks needs a very different format than a knowledge worker with a flexible schedule and a laptop. A culture that rewards learning will make your training more effective before it even launches. Understanding the environment lets you design for the conditions that actually exist.</p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">The Most Common Mistake: Skipping This Step Entirely</h2>
            <div className="mt-3 space-y-3">
              <p>The pressure to move fast is real. Stakeholders want training yesterday. Timelines compress. And needs analysis can feel like the expensive preamble before the &ldquo;real work&rdquo; begins — so it gets skipped or rushed.</p>
              <p>Here&rsquo;s what that actually costs: you build something polished, on time, and completely misaligned with what learners needed. The training launches, completion rates look fine, and nothing changes on the job. Six months later, someone is asking why the training didn&rsquo;t work — and there&rsquo;s no good answer because the question was never properly asked at the start.</p>
              <p>Needs analysis isn&rsquo;t overhead. It&rsquo;s the work that makes everything else worth doing. Protect the time for it.</p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>These five areas — organizational need, gap analysis, learner analysis, task analysis, and environmental analysis — give you the full picture before you design a single screen. They&rsquo;re not a rigid checklist to move through mechanically. They&rsquo;re a framework for asking better questions and listening more carefully.</p>
            <p>The more relevant your questions, the more effective your training will be. That&rsquo;s not a slogan — it&rsquo;s a practical truth that holds up every time. Take the time to investigate, and the design work that follows becomes clearer, faster, and far more likely to create the change your clients are actually looking for.</p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Need Analysis: 5 Important Areas" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
