import type { Metadata } from "next"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/metadata"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Is Instructional Design a Dying Field — or Just Changing?",
  description:
    "Is instructional design a dying field? An honest look at what AI is replacing, what it isn't, and the skills that make instructional designers irreplaceable in 2026.",
  path: "/post/is-instructional-design-a-dying-field",
  ogImage: "/images/ID_dying.png",
})

const nextSteps = [
  {
    title: "Explore IDC&rsquo;s course library",
    description:
      "From ADDIE fundamentals to eLearning development, our courses are built for working professionals who want practical, career-ready expertise.",
    href: "/instructional-design-courses",
    label: "Explore courses",
  },
  {
    title: "Join the IDC community",
    description:
      "10,000+ instructional designers asking the same questions you are — and sharing what&rsquo;s working.",
    href: "/instructionaldesigncommunity",
    label: "Join free",
  },
  {
    title: "Download the AI-Augmented Instructional Design white paper",
    description:
      "A practical look at how to integrate AI into your design process without losing what makes your work valuable.",
    href: "/ai-instructional-design-whitepaper",
    label: "Get the white paper",
  },
]

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Career", "AI", "L&D"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Is Instructional Design a Dying Field — or Just Changing?
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Jul 1, 2026
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            7 min read
          </span>
        </div>
      </ScrollReveal>

      {/* ── Hook / Summary blurb ────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <blockquote className="mt-10 border-l-4 border-accent pl-5">
          <p className="text-lg font-medium leading-relaxed text-copy-muted italic">
            &ldquo;Instructional design isn&rsquo;t dying. But the version of it that existed five years ago? That one is changing — fast.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Featured Image ──────────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-card">
          <Image
            src="/images/ID_dying.png"
            alt="An instructional designer working late at her desk, thinking through what the future of the field looks like"
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
            There&rsquo;s a conversation happening in LinkedIn comments, Reddit threads, and L&amp;D Slack channels that&rsquo;s hard to ignore right now.
          </p>

          <p>
            &ldquo;Will AI replace instructional designers?&rdquo; &ldquo;Is the job board drying up?&rdquo; &ldquo;Should I even bother transitioning into ID right now?&rdquo;
          </p>

          <p>
            The anxiety is real — and it deserves a real answer. Not a pep talk. Not doom-scrolling fuel. Just an honest look at what&rsquo;s actually happening in this field, what&rsquo;s changing, and what it means for your career.
          </p>

          <p>
            Here&rsquo;s the short version: instructional design isn&rsquo;t dying. But the version of it that existed five years ago? That one is changing — fast.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Where the Anxiety Is Coming From</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                It&rsquo;s worth acknowledging why this question is being asked so loudly right now.
              </p>
              <p>
                AI tools like ChatGPT, Claude, and purpose-built platforms like Synthesia, Articulate&rsquo;s AI features, and Canva have made it easier than ever for non-designers to produce passable training content. Stakeholders who once needed an instructional designer to write a script, build a module, or develop an assessment are now asking: do we still need to hire someone for this?
              </p>
              <p>
                At the same time, layoffs in tech and corporate L&amp;D over the past two years have spooked a lot of people. Job boards — including our own here at IDC — have seen fluctuations. Entry-level postings in particular have thinned out in some sectors.
              </p>
              <p>
                Add to that the noise on social media, where every other post seems to be either &ldquo;AI will take your job&rdquo; or &ldquo;AI changes nothing, relax&rdquo; — and it&rsquo;s no wonder people are confused.
              </p>
              <p>
                So let&rsquo;s cut through it.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">What AI Is Actually Replacing</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Let&rsquo;s be direct about this part, because honest is more useful than reassuring.
              </p>
              <p>
                AI is genuinely replacing — or dramatically reducing the need for — certain tasks that instructional designers have historically been paid to do:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>First-draft content writing.</strong> A skilled prompt engineer can produce a serviceable first draft of a course script, quiz questions, or learning objectives in minutes. Work that used to take hours.</li>
                <li><strong>Basic eLearning production.</strong> Simple click-through modules, knowledge checks, and compliance training are increasingly being generated or templated without a designer in the loop.</li>
                <li><strong>Graphic and visual asset creation.</strong> AI image tools have lowered the barrier for creating visuals that used to require a graphic designer or a well-stocked stock photo budget.</li>
                <li><strong>Voiceover and video narration.</strong> AI avatars and synthetic voice tools are replacing basic talking-head video production for a lot of organizations.</li>
              </ul>
              <p>
                If your current role is primarily executing these tasks — writing scripts, building basic modules, sourcing visuals — and you&rsquo;re not adding significant design thinking on top of them, that role is at risk. Not because you&rsquo;re not talented, but because the economics of the work are shifting.
              </p>
              <p>
                That&rsquo;s the honest part. Here&rsquo;s the more important part.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">What AI Cannot Replace</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Here&rsquo;s what the &ldquo;AI will take your job&rdquo; narrative consistently gets wrong: it conflates content production with instructional design.
              </p>
              <p>
                They are not the same thing.
              </p>
              <p>
                Instructional design, done well, is not primarily a content production job. It&rsquo;s a performance consulting and learning architecture job. And that work — the real work — is nowhere close to being automated.
              </p>
              <p>
                Consider what AI cannot do:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Diagnose the actual problem.</strong> When a stakeholder says &ldquo;we need a course on communication skills,&rdquo; an experienced ID knows that nine times out of ten, the real problem isn&rsquo;t a knowledge gap — it&rsquo;s a process gap, a feedback gap, or a management gap. AI will happily build you a course on communication skills. It won&rsquo;t tell you that the course isn&rsquo;t the right solution.</li>
                <li><strong>Navigate organizational politics.</strong> Getting buy-in from a resistant SME, managing a stakeholder who keeps changing scope, building credibility with a leadership team that doesn&rsquo;t value L&amp;D — these require emotional intelligence, relationship-building, and professional judgment that no tool can replicate.</li>
                <li><strong>Design for transfer.</strong> Creating learning experiences that actually change behavior on the job — not just produce quiz scores — requires a deep understanding of how people learn, what gets in the way of applying new skills, and how to design practice environments that mirror real-world conditions. This is hard. AI can assist it. It cannot own it.</li>
                <li><strong>Make ethical calls.</strong> When should a topic be a course versus a job aid versus a manager conversation? When is gamification appropriate and when is it condescending? What does it mean to design for a neurodivergent learner in your specific context? These judgment calls belong to humans.</li>
              </ul>
              <p>
                The instructional designers who are thriving right now are the ones who have always seen themselves as strategic partners first, and content producers second.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">The Skills That Are Becoming More Valuable</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                If the field is shifting — and it is — then the smart move isn&rsquo;t to panic. It&rsquo;s to intentionally develop the skills that are becoming more valuable, not less.
              </p>
              <p>
                Here&rsquo;s where to invest:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Consulting and needs analysis.</strong> The ability to diagnose a performance problem, ask the right questions, and recommend the right intervention (which might not be a course) is the highest-leverage skill in the field right now. It&rsquo;s also the least teachable by AI.</li>
                <li><strong>Learning measurement and analytics.</strong> Organizations are drowning in data and starving for insight. IDs who can connect learning data to business outcomes — not just completion rates — are increasingly rare and increasingly valued.</li>
                <li><strong>AI literacy and prompt engineering.</strong> This isn&rsquo;t about being replaced by AI. It&rsquo;s about being the person who knows how to use AI tools thoughtfully, ethically, and effectively. The IDs who will lead their organizations through this shift are the ones who understand both the capabilities and the limits of these tools.</li>
                <li><strong>Stakeholder communication and influence.</strong> Being able to translate learning science into business language, push back on bad ideas with evidence, and build trust across an organization — these skills have always mattered. They matter even more now.</li>
                <li><strong>Accessibility and inclusive design.</strong> As organizations face increasing pressure to design for all learners — including neurodiverse, multilingual, and differently-abled audiences — IDs with genuine expertise here are in demand.</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">05</span>
              <h2 className="text-xl font-bold text-heading">What the Job Market Is Actually Telling Us</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Here&rsquo;s some context that often gets lost in the noise.
              </p>
              <p>
                The Bureau of Labor Statistics projects steady demand for training and development specialists through the end of the decade. The roles that are disappearing are primarily the ones that were always production-heavy and strategy-light. The roles being created — learning experience designers, performance consultants, L&amp;D strategists, AI learning specialists — require exactly the kind of thinking that can&rsquo;t be outsourced to a prompt.
              </p>
              <p>
                The IDC community of 10,000+ professionals reflects this too. The conversations happening there aren&rsquo;t &ldquo;is this field dead?&rdquo; They&rsquo;re &ldquo;how do I move upstream in my organization?&rdquo; and &ldquo;how do I make the case for better evaluation?&rdquo; and &ldquo;how do I position myself as a strategic partner rather than an order-taker?&rdquo;
              </p>
              <p>
                Those are the questions of a field in transition — not a field in decline.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">The Honest Bottom Line</h2>
            <div className="mt-3 space-y-3">
              <p>
                Instructional design as a production trade is under real pressure. If your value proposition to an employer is primarily that you can build eLearning modules quickly, that value is eroding.
              </p>
              <p>
                Instructional design as a strategic discipline — rooted in learning science, performance consulting, human-centered design, and organizational credibility — is not going anywhere. If anything, the organizations that have relied on low-quality, high-volume content production are starting to realize they need people who actually know how to design for learning outcomes. The bar is rising.
              </p>
              <p>
                The designers who will look back on this moment as a turning point in their careers are the ones who used it to get clearer about what they actually do — and deepened the skills that make them irreplaceable.
              </p>
              <p>
                This field isn&rsquo;t dying. It&rsquo;s asking more of us. That&rsquo;s a good thing.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">06</span>
              <h2 className="text-xl font-bold text-heading">Where to Go From Here</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                If this article stirred something for you — whether that&rsquo;s motivation, anxiety, or a mix of both — here are a few practical next steps.
              </p>
              <p>
                Start by auditing your current skill set. Where are you spending most of your time — production or strategy? What would it take to shift that ratio?
              </p>
              <p>
                From there, these three resources can help:
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {nextSteps.map((step) => (
                <Link key={step.href} href={step.href} className="group block h-full">
                  <div className="flex h-full flex-col rounded-card border border-edge bg-surface p-5 shadow-card transition-all duration-200 hover:border-edge-hover hover:shadow-card-hover">
                    <h3
                      className="text-sm font-bold text-copy transition-colors group-hover:text-accent"
                      dangerouslySetInnerHTML={{ __html: step.title }}
                    />
                    <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
                    <p
                      className="mt-3 flex-1 text-sm leading-relaxed text-copy-muted"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                    <span className="mt-4 text-xs font-semibold text-accent">{step.label} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <p>
              The field is changing. The question is whether you&rsquo;re changing with it — or waiting to see what happens.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Is Instructional Design a Dying Field — or Just Changing?" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
