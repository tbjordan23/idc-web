import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "The Rise of LX Design",
  description: "LX Design isn't just a rebrand of instructional design — it's a different orientation toward the learner. Here's what it means for your practice.",
  path: "/post/2017/01/14/the-rise-of-lx-design",
  ogImage: "/blog/lx_design_trends.png",
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
          The Rise of LX Design
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Jan 4, 2017
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            1 min read
          </span>
        </div>
      </ScrollReveal>

      {/* ── Hook / Summary blurb ────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <blockquote className="mt-10 border-l-4 border-accent pl-5">
          <p className="text-lg font-medium leading-relaxed text-copy-muted italic">
            &ldquo;We are shifting from a focus on design inputs to learner outcomes and experiences. We might shift, or be shifted upon.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Featured Image ──────────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-card">
          <Image
            src="/blog/lx_design_trends.png"
            alt="The Rise of LX Design"
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
            Something has been changing in how the learning profession talks about what we do. The term &ldquo;instructional design&rdquo; is being joined — and in some circles, nudged aside — by &ldquo;learning experience design,&rdquo; or LX Design. This isn&rsquo;t just a branding exercise. There&rsquo;s a real shift underneath it, and understanding what it is can help you think more clearly about your own practice.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">The Limits of &ldquo;Instructional Design&rdquo; as a Frame</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Traditional instructional design has a course-centric, content-first orientation. The work starts with content — what needs to be taught — and moves toward delivery. The learner is the recipient of that content. The designer&rsquo;s job is to make the instruction clear, accurate, and appropriately sequenced.
              </p>
              <p>
                That framing has served the field well. But it has blind spots. It tends to underweight how learners feel during the experience — whether they&rsquo;re engaged, whether they feel seen, whether the experience respects their time and intelligence. It can treat learning as a transaction (content delivered, objective checked) rather than a journey.
              </p>
              <p>
                Interestingly, a parallel shift happened in adjacent fields. Searches for terms like &ldquo;user interface&rdquo; and &ldquo;information architecture&rdquo; — design inputs — declined over the last decade, while searches for &ldquo;user experience,&rdquo; &ldquo;customer experience,&rdquo; and &ldquo;design thinking&rdquo; grew. The pattern is clear: the broader design world moved from inputs to outcomes. Learning design is following.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">What LX Design Adds to the Picture</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Learner Experience Design asks a different set of starting questions. Not just &ldquo;what does the learner need to know?&rdquo; but &ldquo;what does the learner need to feel, experience, and be able to do?&rdquo; It brings in the emotional arc of the learning experience — curiosity, challenge, connection, confidence — as design variables, not afterthoughts.
              </p>
              <p>
                It borrows from UX and service design: journey mapping, empathy research, iterative prototyping, feedback loops. It treats the learner as a whole person navigating an experience, not a container to be filled with content.
              </p>
              <p>
                This doesn&rsquo;t mean throwing out what instructional design has built. Learning objectives still matter. Evidence-based strategies still matter. But LX Design wraps those practices in a broader orientation toward the learner&rsquo;s full experience.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">What It Means Practically for How You Work</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Adopting an LX Design orientation means adding a few habits to your practice. It means spending more time up front understanding not just what learners need to know, but how they feel about learning it — what barriers they carry, what motivates them, what a good day in their role looks like. It means designing with emotion in mind, not just cognition.
              </p>
              <p>
                It means prototyping and testing with real learners earlier in the process, before you&rsquo;ve built out the full course. It means measuring more than completion rates — looking at engagement, confidence, and actual behavior change. And it means caring about the learner&rsquo;s experience of your work, not just its instructional soundness.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">LX Design Isn&rsquo;t a Rebrand — It&rsquo;s a Different Orientation</h2>
            <div className="mt-3 space-y-3">
              <p>
                It&rsquo;s tempting to dismiss LX Design as a trendy new name for instructional design. It&rsquo;s not. The name change matters because it signals a shift in what you center: not the instruction, but the learner&rsquo;s experience of it. That reorientation — subtle as it sounds — leads to genuinely different design decisions.
              </p>
              <p>
                You can practice LX Design principles without ever using the title. The question is whether the learner&rsquo;s experience of your work is in the room when you&rsquo;re making design decisions. If it is, you&rsquo;re already thinking like an LX designer.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              LX Design is a response to a real limitation in how instructional design has traditionally framed its work. By centering the learner&rsquo;s full experience — not just the instructional content — it opens up better questions, better design decisions, and ultimately better outcomes. The field is moving in this direction. The good news is you don&rsquo;t have to wait to be shifted — you can lead it.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="The Rise of LX Design" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
