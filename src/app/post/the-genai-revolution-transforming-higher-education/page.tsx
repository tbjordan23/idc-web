import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "The GenAI Revolution: Transforming Higher Education",
  description: "Generative AI is reshaping how universities teach, assess, and support students — here&rsquo;s what instructional designers and educators need to understand about the shift underway.",
  path: "/post/the-genai-revolution-transforming-higher-education",
})

const VIEWS = 853

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["AI", "Higher Education"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          The GenAI Revolution: Transforming Higher Education
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Jul 27, 2024
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
            &ldquo;Generative AI isn&rsquo;t replacing professors or students — it&rsquo;s changing what both of them do, and higher education is figuring out in real time what that means for learning, integrity, and access.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            Higher education has seen plenty of &ldquo;disruptions&rdquo; over the years — MOOCs, online learning, the pandemic pivot to remote instruction. Most of them changed the delivery mechanism without fundamentally changing how teaching and learning actually worked.
          </p>

          <p>
            Generative AI feels different. It&rsquo;s not just changing where learning happens or how content gets delivered. It&rsquo;s changing what faculty do, what students can do on their own, how we assess learning, and what it means to develop expertise in a field. Understanding those shifts — honestly, not just optimistically — is important for everyone who works in or around higher ed.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">How Faculty Roles Are Changing</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The traditional faculty role has always had two sides: content expert and content creator. Professors not only know their subject — they generate the lectures, readings, assessments, and course materials that make it teachable. Generative AI is compressing the content creation side dramatically.
              </p>
              <p>
                Faculty can now use AI tools to draft comprehensive course materials, generate multiple versions of an assessment, build out case studies, and create supplementary resources in a fraction of the time those tasks used to require. Administrative tasks — things like initial grading feedback, student communication templates, scheduling coordination — can also be assisted or automated.
              </p>
              <p>
                That creates space for the work that genuinely requires human expertise: mentorship, nuanced feedback, research, facilitating complex discussions, and building the relationships with students that actually shape educational outcomes. The faculty who are thriving in this environment are the ones who&rsquo;ve embraced AI as a tool for reclaiming time for that deeper work — not the ones trying to preserve the status quo.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">What Students Now Have Access To</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                For students, GenAI has made a remarkable set of learning supports available on demand. Complex texts can be summarized, explained, and broken down into more accessible language. Study guides, practice questions, and concept maps can be generated from course materials in minutes. For students in technical or clinical programs, AI-powered simulations provide practice environments that were previously hard to access outside of expensive equipment or scheduled lab time.
              </p>
              <p>
                This is genuinely democratizing in some ways — students who don&rsquo;t have access to tutors or study groups have a new kind of on-demand support available to them. A first-generation college student working multiple jobs now has access to a kind of personalized academic support that used to require resources most students didn&rsquo;t have.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Rethinking Curriculum and Assessment</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                If a student can generate a competent essay using AI in minutes, then essay-writing as an assessment of learning has a problem. Higher ed is grappling seriously with this — and the institutions doing it well aren&rsquo;t just adding AI detection tools. They&rsquo;re rethinking what they&rsquo;re trying to assess in the first place.
              </p>
              <p>
                Assessments that require genuine reasoning, real-world application, iterative feedback loops, or in-person demonstration of skill are harder to shortcut with AI. Curriculum built around these kinds of assessments tends to produce stronger learning outcomes regardless of AI — but the presence of AI makes the design work more urgent. AI is also helping institutions align curriculum development more dynamically with job market demands, identifying emerging skill gaps and helping faculty build responsive programs.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Accessibility Gains — and New Equity Questions</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                GenAI tools have meaningfully expanded access for students with disabilities — real-time transcription, text-to-speech, content simplification, and multilingual support have all improved. For students who historically had to advocate hard for accommodations, some of that friction is now reduced.
              </p>
              <p>
                But new equity questions have also emerged. Students who have better access to premium AI tools, stronger digital literacy, and more guidance on how to use AI effectively have a real advantage over those who don&rsquo;t. Institutions that care about equity need to think carefully about how they&rsquo;re supporting all students — not just in accessing AI tools, but in using them in ways that actually build learning rather than bypassing it.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">05</span>
              <h2 className="text-xl font-bold text-heading">What Institutions Are Getting Right (and Wrong)</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The institutions navigating this best aren&rsquo;t banning AI or pretending it doesn&rsquo;t exist. They&rsquo;re building explicit AI literacy into their curricula, developing clear policies about appropriate use, and investing in faculty development so professors feel equipped — not threatened — by these tools.
              </p>
              <p>
                The institutions struggling tend to be the ones reacting rather than designing. Reactive policies feel inconsistent to students and erode trust. Institutions that are thinking proactively — asking what skills and attributes they want graduates to have, and then building the curriculum and assessment structure to develop those things in an AI-present world — are in a much stronger position.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">The Tensions Worth Taking Seriously</h2>
            <div className="mt-3 space-y-3">
              <p>
                Academic integrity isn&rsquo;t a bureaucratic concern — it&rsquo;s about whether a credential actually means something. If it&rsquo;s easy to complete a degree without developing the knowledge or thinking skills that degree is supposed to represent, that&rsquo;s a problem for students, employers, and the profession being entered.
              </p>
              <p>
                There&rsquo;s also a deeper question about what learning is for. If AI can do the task, should we still teach humans to do it? Sometimes the answer is yes — because the process of learning the task builds something more important than the task itself. That&rsquo;s a genuine pedagogical question, and it deserves genuine engagement rather than easy answers in either direction.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Generative AI is not going to replace the human elements that make higher education worth having — mentorship, intellectual challenge, community, the experience of grappling seriously with hard ideas. But it is changing the context in which all of those things happen.
            </p>
            <p>
              The institutions and educators who approach that change thoughtfully — who ask hard questions about what they&rsquo;re actually trying to accomplish and design accordingly — have an opportunity to build something genuinely better. The ones who treat it purely as a threat to manage will find the gap between what they offer and what learners expect growing wider every year.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="The GenAI Revolution: Transforming Higher Education" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
