import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design: The Art and Science of Creating Effective Learning Experiences",
  description:
    "Instructional design lives at the intersection of creativity and evidence. Here's what it means to practice both sides well — and why you need them working together.",
  path: "/post/instructional-design-the-art-and-science-of-creating-effective-learning-experiences",
})


export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Instructional Design"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Instructional Design: The Art and Science of Creating Effective Learning Experiences
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Feb 6, 2023
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
            &ldquo;Instructional design isn&rsquo;t just a process — it&rsquo;s a practice that asks you to be
            both a scientist who follows the evidence and an artist who makes it land.
            The best designers know how to be both at once.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            When people first hear about instructional design, they often picture someone building
            slide decks or uploading content to an LMS. And while that&rsquo;s sometimes part of the
            job, it misses what instructional design is actually about: creating experiences that
            help people genuinely learn — not just complete a course, but walk away able to do
            something they couldn&rsquo;t do before.
          </p>

          <p>
            That goal sounds simple. Achieving it is anything but. It requires drawing on both
            sides of the brain — the analytical and the creative — and knowing when to lean into
            each. This is what people mean when they call instructional design both an art and
            a science.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">The Science: Learning Theory, Data, &amp; Iteration</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The science side of instructional design gives the work its foundation. It&rsquo;s where
                you ask: what does research tell us about how people actually learn? What conditions
                support retention? What cognitive load is too much?
              </p>
              <p>
                This is where frameworks like ADDIE, Bloom&rsquo;s Taxonomy, and Gagn&eacute;&rsquo;s Nine Events of
                Instruction live. These aren&rsquo;t just academic concepts — they&rsquo;re practical tools for
                making decisions about structure, sequencing, and assessment. The science also shows
                up in how you evaluate what you build. Are learners actually performing better? What
                does the data say? Where is the design failing them?
              </p>
              <p>
                A strong grounding in learning science means you&rsquo;re not designing based on gut feel
                or what looks good — you&rsquo;re designing based on evidence. That&rsquo;s what separates
                effective training from content that just checks a compliance box.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">The Art: Creativity, Empathy, &amp; Storytelling</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Here&rsquo;s what the science can&rsquo;t fully account for: whether a learner actually
                wants to engage with what you&rsquo;ve built. That&rsquo;s where the art comes in.
              </p>
              <p>
                The art of instructional design is about empathy — genuinely understanding the
                person on the other end of your course. What do they already know? What frustrates
                them about their job? What would make this feel worth their time? Great designers
                hold those questions throughout the entire design process, not just at the beginning.
              </p>
              <p>
                Storytelling is one of the most powerful tools in that kit. Scenarios, case studies,
                and character-driven examples transform abstract concepts into something a learner
                can connect to emotionally. When someone sees themselves in the content, they pay
                attention differently. They remember it longer. The creative choices you make —
                tone, pacing, structure, visuals — all shape whether a learner feels seen or talked at.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Why You Need Both — Working Together</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The tension between art and science in instructional design isn&rsquo;t a problem to
                solve — it&rsquo;s a dynamic to embrace. Either side, taken alone, produces weaker work.
              </p>
              <p>
                A design that&rsquo;s all science can feel cold and mechanical. The objectives are clear,
                the assessments are aligned, the structure is sound — but nobody wants to sit through
                it. A design that&rsquo;s all art can be engaging and beautifully produced, but if it&rsquo;s
                not grounded in real learning principles, the experience doesn&rsquo;t transfer. Learners
                enjoy it and forget it.
              </p>
              <p>
                The goal is integration. Let the science guide your decisions about structure,
                objectives, and evaluation. Let the art guide how those decisions come to life for
                the learner. When both are working together, you build something that&rsquo;s both
                effective and human.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">A Reflection Prompt</h2>
            <div className="mt-3 space-y-3">
              <p>
                Think about a piece of learning you&rsquo;ve designed recently. Which side — the art or
                the science — got more of your attention? Where did the other side fall short?
              </p>
              <p>
                This is a useful question to ask yourself regularly, especially when a project
                isn&rsquo;t landing the way you hoped. Often the gap is less about content and more
                about which half of the equation you leaned on too heavily.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Instructional design is a field that rewards the whole person — the thinker and
              the maker, the analyst and the storyteller. You don&rsquo;t have to be equally strong on
              both sides to do good work. But you do have to understand that both sides exist,
              and that the most impactful learning experiences draw on each of them with intention.
            </p>
            <p>
              Whether you&rsquo;re just starting out or have years of experience, building your awareness
              of this balance is one of the most valuable things you can do for your practice.
              The science will keep your work honest. The art will make it matter.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Instructional Design: The Art and Science of Creating Effective Learning Experiences" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
