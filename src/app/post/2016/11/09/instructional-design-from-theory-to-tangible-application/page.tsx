import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design: A Paradigm Shift",
  description: "Instructional design evolved from a theory-driven discipline into a practical, outcome-focused field. Here's what that shift means for how you work.",
  path: "/post/2016/11/09/instructional-design-from-theory-to-tangible-application",
  ogImage: "/images/young-professionals-casual-1.png",
})


export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Learning Theory", "Instructional Design"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Instructional Design: A Paradigm Shift
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Nov 9, 2016
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
            &ldquo;Instructional design has grown up. It&rsquo;s no longer just a theoretical framework — it&rsquo;s an applied discipline focused on real performance outcomes for real people.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Featured Image ──────────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-card">
          <Image
            src="/images/young-professionals-casual-1.png"
            alt="Instructional Design: A Paradigm Shift"
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
            Instructional design has roots in learning theory — behaviorism, cognitivism, constructivism. Those frameworks shaped how the field thinks about learning. But somewhere along the way, a shift happened: from studying how people learn in the abstract to actually designing for how they perform in the real world. That shift changes everything about how you approach your work.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">From Theory-Based to Evidence-Based Practice</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The early history of instructional design was heavily academic. Designers were expected to know their Bloom&rsquo;s taxonomy, choose a learning theory, and apply it faithfully. Behaviorism meant structured, stimulus-response instruction. Cognitivism meant focusing on how information was processed and stored. Constructivism meant creating environments where learners built their own understanding.
              </p>
              <p>
                Each of these frameworks contributed something real. But the problem with rigid adherence to any single theory is that no single theory explains everything. The paradigm shift has been moving away from &ldquo;which theory do I follow?&rdquo; toward &ldquo;what does this learner actually need to be able to do, and what approach will get them there?&rdquo; Evidence and context drive the decision, not ideology.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">From Content Coverage to Performance Outcomes</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The older model of instructional design was content-centric: here is what learners need to know, now design instruction to deliver it. The newer model is outcome-centric: here is what learners need to be able to do, now design everything backward from that.
              </p>
              <p>
                This isn&rsquo;t just a semantic difference. An outcome-centric approach changes what you include, what you leave out, how you assess learning, and how you measure success. It means asking &ldquo;will this actually change performance?&rdquo; before it means asking &ldquo;is this content accurate?&rdquo; Both matter — but in that order.
              </p>
              <p>
                The shift also means moving from instructor-centered design (how will I teach this?) to learner-centered design (what will help this person grow?). The best instructional designers today don&rsquo;t just deliver content — they engineer conditions for performance.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">A Field That Uses All the Tools</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The mature instructional designer doesn&rsquo;t pick a theory and stick to it. They carry a full toolkit: structured, behaviorist-style instruction for foundational knowledge and compliance; cognitive strategies like worked examples and spaced practice for skill development; constructivist approaches like case studies and simulations for complex, judgment-based performance.
              </p>
              <p>
                The theory informs the approach. The context determines the choice. And the learner stays at the center of every decision.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">How This Shift Changes the Questions You Ask</h2>
            <div className="mt-3 space-y-3">
              <p>
                When you approach a new project with an outcome-centered mindset, the starting questions look different. Instead of &ldquo;What content needs to be covered?&rdquo; you ask &ldquo;What does this person need to be able to do after this training?&rdquo; Instead of &ldquo;How long should this course be?&rdquo; you ask &ldquo;What&rsquo;s the minimum effective dose to build this capability?&rdquo;
              </p>
              <p>
                Those questions lead to better design decisions — and better outcomes for the people you&rsquo;re designing for.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Instructional design has moved from theory to practice, from content to performance, from instructor-centered to learner-centered. That paradigm shift isn&rsquo;t just an academic evolution — it&rsquo;s a practical one that shapes every project you touch. Understanding where the field came from helps you appreciate why it works the way it does today.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Instructional Design: A Paradigm Shift" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
