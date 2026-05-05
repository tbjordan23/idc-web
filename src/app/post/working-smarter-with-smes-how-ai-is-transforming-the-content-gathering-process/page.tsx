import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Working Smarter with SMEs: How AI Is Transforming the Content Gathering Process",
  description:
    "AI doesn't replace your subject matter expert — it multiplies every hour you spend with them. Here's how to bring AI into your SME workflow from pre-interview prep to post-interview synthesis.",
  path: "/post/working-smarter-with-smes-how-ai-is-transforming-the-content-gathering-process",
})

const VIEWS = 107

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8 1.402 1.402c1 1 .03 2.798-1.414 2.798H4.213c-1.444 0-2.414-1.798-1.414-2.798L4.8 15.3" />
            </svg>
            AI
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Working Smarter with SMEs: How AI Is Transforming the Content Gathering Process
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Mar 30, 2026
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            6 min read
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
            &ldquo;AI doesn&rsquo;t replace your subject matter expert — it multiplies every hour you spend
            with them. Here&rsquo;s how to bring AI into your SME workflow from pre-interview prep
            to post-interview synthesis.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            If you&rsquo;ve spent time working with subject matter experts, you know the dynamic well.
            They&rsquo;re deeply knowledgeable, often brilliant — and almost always stretched thin.
            Getting quality time with an SME is one of the most valuable things an instructional
            designer can do, and one of the hardest to protect.
          </p>

          <p>
            That&rsquo;s where AI changes the equation. Not by replacing SMEs — their expertise is
            irreplaceable. But by reducing the cognitive overhead on the ID&rsquo;s side so that every
            interaction becomes more focused, more efficient, and more productive.
          </p>

          <p>
            Think of AI as sitting between you and the SME: it handles the prep, the synthesis, and
            the structure, so that the conversation itself stays where it belongs — on the domain
            knowledge only your SME can provide.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Build Domain Fluency Before You Walk In</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                One of the fastest ways to lose an SME&rsquo;s confidence is to ask basic questions
                they expected you to already know. Walking in underprepared signals that you haven&rsquo;t
                done the work — and it wastes time neither of you can spare.
              </p>
              <p>
                Before any discovery session, use an AI tool to build a rapid primer on the SME&rsquo;s
                domain. Ask it to explain the subject at a high level, then at a technical level.
                Generate a glossary of terms you&rsquo;re likely to encounter. Map out the common
                frameworks, acronyms, and debates in the field.
              </p>
              <p>
                You won&rsquo;t become an expert overnight. But you&rsquo;ll walk into the conversation
                speaking enough of the language to ask smarter questions — and to recognize when
                something the SME says is worth digging into.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Transcribe and Synthesize Every Session</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Interviews generate a lot of information — and most of it gets lost in notes that
                are rushed, incomplete, or never revisited. AI-assisted transcription and synthesis
                changes that entirely.
              </p>
              <p>
                Record your SME sessions (always with permission) and run them through a
                transcription tool like Otter.ai or your AI platform of choice. Then prompt the AI
                to extract key concepts, identify knowledge gaps, flag contradictions, and surface
                areas that need follow-up. What used to take hours of manual synthesis now takes
                minutes.
              </p>
              <p>
                This matters because every additional session you need costs your SME time — and
                political capital. The more you can extract from each conversation, the fewer
                conversations you need.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Sharpen Your Questions Before You Ask Them</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Generic questions get generic answers. The quality of what you get from an SME
                is directly tied to the quality of what you ask — and AI can make that a lot
                easier to get right.
              </p>
              <p>
                Take your existing question bank and ask an AI to expand it. Have it add probing
                follow-ups, reframe questions around performance outcomes rather than knowledge
                recall, and surface blind spots you might not have thought to explore. Then ask
                it to play the role of a skeptical SME and challenge your question set. Where does
                it fall flat? Where are the gaps?
              </p>
              <p>
                Working through that friction before the real conversation means you show up with
                questions that go deeper — and your SME walks away feeling like the session was
                actually worth their time.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Protect SME Time by Handling the Before and After</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The time an SME spends with you should be dense with signal. Everything else —
                the scheduling logistics, the pre-session briefing, the follow-up summary, the
                thank-you email — should not be consuming their mental bandwidth or yours.
              </p>
              <p>
                Use AI to draft pre-interview briefing documents so SMEs arrive knowing exactly
                what you need and can prepare accordingly. After sessions, use it to draft
                summaries, clarifying questions, and next-step emails. These tasks are necessary,
                but they don&rsquo;t require human creativity.
              </p>
              <p>
                The more administrative weight you lift, the more likely SMEs are to show up
                engaged — and to say yes when you need their time again.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">05</span>
              <h2 className="text-xl font-bold text-heading">Turn Raw Notes Into Structured Course Content</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Once you&rsquo;ve gathered what you need, the translation from expert knowledge to
                learning design is one of the most time-consuming parts of the ID workflow. AI
                can compress it significantly.
              </p>
              <p>
                Feed your notes, transcripts, and key concepts into an AI tool and ask it to draft
                a course outline, propose learning objectives, suggest scenario ideas, or generate
                assessment questions aligned to the content. It won&rsquo;t get everything right on the
                first pass — but it gives you a structured starting point that&rsquo;s dramatically faster
                than a blank page.
              </p>
              <p>
                Use these drafts as a working document to review with your SME. Rather than asking
                them to generate structure from scratch, you&rsquo;re asking them to validate and refine
                — which is a much faster, lower-friction task for someone who lives and breathes
                the content.
              </p>
            </div>
          </div>

          {/* Caveat */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">A Word of Caution</h2>
            <div className="mt-3 space-y-3">
              <p>
                AI is fast. AI is also wrong — sometimes confidently so. In technical, regulatory,
                or compliance-heavy domains, hallucinated content isn&rsquo;t just embarrassing; it can
                be harmful.
              </p>
              <p>
                Build explicit SME validation into every AI-assisted workflow. Treat AI output as a
                first draft, not a final product. The goal is speed and structure, not a shortcut
                around the expertise that makes your content accurate in the first place.
              </p>
              <p>
                The workflow only works if SMEs trust what you bring to them. Protect that trust.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Working with SMEs has always required a balance of curiosity, preparation, and deep
              respect for their time. AI doesn&rsquo;t change any of that — it just makes you better
              at all three.
            </p>
            <p>
              Use it to handle the volume work: the research, the synthesis, the drafting, the
              organizing. Save the SME interaction for what only humans can do — building trust,
              exploring nuance, and making the judgment calls that no AI can replicate.
            </p>
            <p className="font-semibold text-heading">
              AI handles the volume work so you can focus on the relational and strategic work.
              That&rsquo;s the shift worth making.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Working Smarter with SMEs: How AI Is Transforming the Content Gathering Process" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
