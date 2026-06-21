import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "What Is Instructional Design?",
  description:
    "What is instructional design? A foundational introduction to the field — what it is, where it came from, and why it matters more than ever.",
  path: "/post/2016/04/27/what-is-instructional-design",
  ogImage: "/images/woman-thinking-laptop-night-1.png",
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
          What Is Instructional Design?
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Apr 27, 2016
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
            &ldquo;Instructional design is the practice of creating learning experiences that actually work — bridging the gap between knowing something and being able to do something.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Featured Image ──────────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-card">
          <Image
            src="/images/woman-thinking-laptop-night-1.png"
            alt="What Is Instructional Design?"
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
            If you&rsquo;ve landed here, you&rsquo;re probably curious about a field that doesn&rsquo;t always have the most intuitive name. Instructional design sounds academic, maybe even bureaucratic. But at its core, it&rsquo;s one of the most human-centered disciplines you can practice: the art and science of helping people learn.
          </p>
          <p>
            Whether you&rsquo;re exploring it as a career, trying to understand what your L&amp;D team actually does, or looking for a framework to make your own teaching more effective — this is a good place to start.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">A Clear Definition</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Instructional design (ID) is the systematic process of designing, developing, and delivering learning experiences that help people gain knowledge, build skills, or change behavior. The key word is <em>systematic</em>. It&rsquo;s not about creating content for its own sake — it&rsquo;s about working backward from a specific outcome and designing every element of the learning experience to achieve it.
              </p>
              <p>
                A good instructional designer asks: What does this person need to be able to <em>do</em> after this experience that they can&rsquo;t do now? Then they work backward from that answer to build something that closes the gap. That performance-first orientation is what separates instructional design from content creation.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Where It Came From</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Instructional design has roots in World War II, when the U.S. military needed to train millions of people quickly and consistently in complex skills. Psychologists and educators developed systematic approaches to training that worked — and the field was born from that urgency.
              </p>
              <p>
                In the decades that followed, researchers like Benjamin Bloom (Bloom&rsquo;s Taxonomy), Robert Gagné (Conditions of Learning), and Malcolm Knowles (adult learning theory) gave the field a theoretical foundation. Models like ADDIE emerged to give practitioners a structured process to follow. Over time, ID moved from the military into corporate training, then higher education, then technology — and today it touches nearly every organized context where learning happens.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Why It Matters More Than Ever</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                We live in an era of information abundance and attention scarcity. There&rsquo;s more to learn than ever before, and less patience for learning that wastes time. Organizations are investing billions in training every year — and struggling to show that it&rsquo;s actually changing anything.
              </p>
              <p>
                That&rsquo;s exactly the problem instructional design exists to solve. When learning is designed well, it works. People retain what they need, apply it in context, and perform better. When it&rsquo;s designed poorly — or not designed at all — it consumes time and resources without changing behavior.
              </p>
              <p>
                The rise of AI, the shift to remote and hybrid work, and the accelerating pace of skill change have only raised the stakes. Organizations need people who can build learning that adapts, scales, and actually sticks. That&rsquo;s the instructional designer&rsquo;s job.
              </p>
            </div>
          </div>

          {/* Callout */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">ID Is Everywhere — Even When It&rsquo;s Not Called That</h2>
            <div className="mt-3 space-y-3">
              <p>
                Instructional design principles show up far beyond formal training programs. The onboarding flow for a new app. The documentation that helps a customer set up a product. The orientation week for new employees. The troubleshooting guide a support team follows. The way a manager structures a coaching conversation.
              </p>
              <p>
                Whenever someone has intentionally structured an experience to help another person understand or do something, there&rsquo;s instructional design happening — even if no one called it that. Recognizing this is part of what makes the field so rich and transferable.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Instructional design is about one thing: helping people learn in ways that actually make a difference. It&rsquo;s a discipline built on evidence, shaped by empathy, and deeply connected to how humans think, remember, and grow.
            </p>
            <p>
              If you&rsquo;re just discovering this field, welcome. There&rsquo;s a lot here — models, frameworks, tools, and a community of practitioners who care deeply about making learning better. You&rsquo;re in the right place to explore all of it.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="What Is Instructional Design?" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
