import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "A Case Study: Design Thinking",
  description: "Design thinking's 5 stages — Empathize, Define, Ideate, Prototype, Test — applied to instructional design to build what learners actually need.",
  path: "/post/a-case-study-design-thinking",
  ogImage: "/images/diverse-team-working-2.png",
})


export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["ID Models"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          A Case Study: Design Thinking
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Aug 19, 2021
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
            &ldquo;The stakeholders loved it. The learners hated it. That gap is exactly where design thinking lives.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Featured Image ──────────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-card">
          <Image
            src="/images/diverse-team-working-2.png"
            alt="A Case Study: Design Thinking"
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

          <p>You&rsquo;ve done everything right — or so it seems. You met with the stakeholders, got sign-off on the prototype, and built something polished. Then the training rolls out and the feedback trickles in: learners aren&rsquo;t engaging, they&rsquo;re frustrated, or worse, they&rsquo;re just clicking through to get it done. Sound familiar?</p>

          <p>This is one of the most common failure modes in instructional design, and it&rsquo;s exactly the kind of problem design thinking is built to solve. Let&rsquo;s walk through a real ID project — a cybersecurity awareness course for a global organization — and see how applying design thinking&rsquo;s five stages transformed the outcome.</p>

          <p>The original brief: build an engaging, game-based cybersecurity course for new employees ranging from 22 to 50 years old, spanning roles from staff to senior manager, distributed globally. The designer delivered a 60-minute experience featuring an overarching narrative, 25 problem scenarios across five modules, and a sequential progression with results tracking. Stakeholders approved the prototype. Then it launched — and real users pushed back hard.</p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Empathize — Actually Listen to Your Learners</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Design thinking starts not with solutions, but with deep listening. In the original project, the designer had empathized with the stakeholders — but not the end users. When interviews were finally conducted with actual learners, a very different picture emerged.</p>
              <p>Senior staff disliked the gaming mechanics entirely. Time-constrained employees couldn&rsquo;t sustain engagement across extended gameplay. Some learners preferred reference materials they could consult on the job rather than a course they had to sit through. And for younger employees, the simulation&rsquo;s consequence framing — where you could &ldquo;lose&rdquo; data — felt more punishing than motivating.</p>
              <p>The lesson here isn&rsquo;t that games are bad. It&rsquo;s that the design was built on assumptions instead of evidence. Empathy is about replacing your assumptions with what your learners actually experience, need, and feel.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Define — Name the Real Problem</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Once you&rsquo;ve gathered real input from learners, you can define the problem with precision. In this case, the problem wasn&rsquo;t &ldquo;how do we make cybersecurity training more fun?&rdquo; — it was &ldquo;how do we help a diverse, time-pressured workforce quickly recognize and respond to security threats in their actual jobs?&rdquo;</p>
              <p>That reframe changes everything. It shifts the focus from novelty to utility. It acknowledges that a senior manager and a junior staff member might need different entry points into the same content. And it surfaces the real constraint: people don&rsquo;t have time for a 60-minute game. They need something they can use and return to.</p>
              <p>A well-defined problem statement is the compass for everything that follows. Without it, you&rsquo;re just building features nobody asked for.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Ideate — Generate Options Before Committing</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Here&rsquo;s where many instructional designers shortcut the process: we move from &ldquo;problem&rdquo; straight to &ldquo;solution&rdquo; without exploring the middle. Ideation is about deliberately generating a range of options before committing to any one direction.</p>
              <p>In redesigning this course, the team explored a spectrum of formats: scenario-based learning without game mechanics, short modular lessons that could stand alone, job aids and quick-reference guides, branching simulations without win/lose framing, and role-specific learning paths. Not all of them made the cut — but generating them opened up possibilities the original brief had closed off.</p>
              <p>Ideation also gives you something valuable to bring back to stakeholders: not one answer, but a conversation about which approach best serves the learners they&rsquo;re responsible for.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Prototype — Build Something Small and Fast</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>The redesigned course went back to a prototype — but this time, a much lighter one. Instead of a full 60-minute module, the team built a short scenario-based module: direct problem-solving, no extended narrative, reward points for correct choices rather than penalties for mistakes. Straightforward. Respectful of the learner&rsquo;s time.</p>
              <p>This is the heart of prototyping in design thinking: build the smallest thing that can answer your most important open question. You&rsquo;re not trying to impress anyone at this stage. You&rsquo;re trying to learn.</p>
              <p>A prototype doesn&rsquo;t have to be polished. A storyboard, a paper mockup, a single Storyline scene — whatever gets real feedback fastest is the right prototype for the moment.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">05</span>
              <h2 className="text-xl font-bold text-heading">Test — Close the Loop with Real Users</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>Testing in design thinking isn&rsquo;t the same as a final review or a QA pass. It&rsquo;s putting your prototype in front of real learners — not just stakeholders — and watching what happens. What do they struggle with? Where do they disengage? What do they actually walk away knowing?</p>
              <p>For the cybersecurity course, the revised prototype tested well across the learner groups that had rejected the original. The scenario-based format felt relevant. The reward structure felt fair. Senior managers didn&rsquo;t feel talked down to. The content was accessible without being dumbed down.</p>
              <p>That&rsquo;s the goal: a design that works for the people it&rsquo;s built for. Testing is how you know whether you got there — and it always surfaces at least one thing worth improving before you build the full thing.</p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">Design Thinking vs. ADDIE — When to Use Each</h2>
            <div className="mt-3 space-y-3">
              <p>ADDIE and design thinking aren&rsquo;t competitors — they&rsquo;re complementary. ADDIE gives you a structured, sequential process that works well when requirements are clear and the audience is well understood. It&rsquo;s reliable, scalable, and familiar to most stakeholders.</p>
              <p>Design thinking shines when the problem itself is fuzzy. When you&rsquo;re building something new, when end users are underrepresented in the planning process, or when a previous training solution failed to land — that&rsquo;s when design thinking&rsquo;s emphasis on empathy and iteration becomes essential.</p>
              <p>The practical move: borrow the empathy and ideation stages of design thinking for your front-end analysis, then execute with ADDIE&rsquo;s rigor. You get the best of both frameworks.</p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>Stakeholder approval is not the same as learner success. Design thinking keeps you anchored to the people who actually have to sit with your training — and it gives you a repeatable process for building something they&rsquo;ll actually use. The five stages aren&rsquo;t a rigid checklist. They&rsquo;re a mindset: stay curious, stay humble, and keep the learner at the center of every decision you make.</p>
            <p>The next time a client hands you a brief that feels like it already has the answer baked in, pause before you build. Go talk to the people who will actually take this training. What you hear might surprise you — and it will almost certainly make the final product better.</p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="A Case Study: Design Thinking" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
