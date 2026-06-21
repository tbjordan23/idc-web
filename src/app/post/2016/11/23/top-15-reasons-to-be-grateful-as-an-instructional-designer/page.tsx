import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "15 Reasons to Be Grateful as an Instructional Designer",
  description: "From the love of learning to the thrill of solving complex problems — here are 15 reasons the instructional design field is genuinely worth celebrating.",
  path: "/post/2016/11/23/top-15-reasons-to-be-grateful-as-an-instructional-designer",
  ogImage: "/images/diverse-women-working-1.png",
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
          15 Reasons to Be Grateful as an Instructional Designer
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Nov 28, 2019
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
            &ldquo;This field asks you to be a analyst, a designer, a storyteller, and a problem-solver — sometimes all in the same afternoon. That&rsquo;s not a burden. That&rsquo;s a gift.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Featured Image ──────────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-card">
          <Image
            src="/images/diverse-women-working-1.png"
            alt="15 Reasons to Be Grateful as an Instructional Designer"
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

          <p>Instructional design is one of those careers that&rsquo;s hard to explain at a dinner party but deeply rewarding once you&rsquo;re in it. You sit at the intersection of education, psychology, technology, and communication — and the work you do genuinely changes how people learn and grow.</p>

          <p>In the spirit of gratitude, here are 15 reasons to feel good about the work you&rsquo;ve chosen — and the community you&rsquo;re part of.</p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">You Were Made for Learning</h2>
            </div>
            <div className="mt-4 space-y-4">
              <ul className="mt-2 space-y-3 pl-1">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You love learning</strong> — not just as a professional value, but as a genuine personality trait. You read things you don&rsquo;t need to. You ask questions when you could just move on. That curiosity is a superpower in this field.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You have natural curiosity</strong> — every new project is a chance to dive into a subject you&rsquo;ve never encountered before. One week it&rsquo;s cybersecurity; the next it&rsquo;s pharmaceutical compliance. You get paid to explore.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You have a broad educational background</strong> — instructional designers come from English, psychology, education, communications, graphic design, and a hundred other fields. That breadth makes you adaptable in ways specialists often aren&rsquo;t.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You understand learning theories</strong> — cognitivism, constructivism, adult learning principles — and you know how to apply them, not just recite them. That foundation makes everything you build more intentional.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You&rsquo;re passionate about the work</strong> — not in a forced, LinkedIn-post way, but genuinely. You care whether the training works. That&rsquo;s rarer than it sounds, and it shows in what you produce.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">You Bring a Unique Set of Skills</h2>
            </div>
            <div className="mt-4 space-y-4">
              <ul className="mt-2 space-y-3 pl-1">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You can break down complex concepts</strong> — you&rsquo;ve learned to take dense, technical material and make it accessible without dumbing it down. That skill transfers to almost every professional context.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You know your frameworks</strong> — ADDIE, SAM, Bloom&rsquo;s — and more importantly, you know when to use them and when to set them aside. You speak the language of the field fluently.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You understand evaluation</strong> — the difference between formative and summative, between measuring completion and measuring impact. You care about whether learning actually sticks.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You&rsquo;re versatile across platforms</strong> — Articulate, Captivate, Canva, LMS administration, video production, facilitating live sessions. You can move across media because you understand the underlying principles that make any format work.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You write strong learning objectives</strong> — and you can spot a weak one from across the room. &ldquo;Learners will understand the importance of&hellip;&rdquo; doesn&rsquo;t cut it, and you know exactly why.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">You Work the Way You Live</h2>
            </div>
            <div className="mt-4 space-y-4">
              <ul className="mt-2 space-y-3 pl-1">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You have defined goals before you start</strong> — you don&rsquo;t build things without knowing why you&rsquo;re building them. That intentionality carries over into how you approach your own growth and career.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You&rsquo;re organized</strong> — project timelines, review cycles, content libraries. You know how to manage complexity without letting it manage you.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You&rsquo;re a problem-solver</strong> — when the SME goes quiet, when the LMS breaks, when the client changes direction two weeks before launch, you adapt. That resilience is something you&rsquo;ve built through experience.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You can present with confidence</strong> — whether it&rsquo;s walking a stakeholder through a prototype or facilitating a live training session, you know how to hold a room. That&rsquo;s a skill many professionals spend years trying to develop.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span><strong>You speak the language of impact</strong> — SMEs, MOOCs, LMS, xAPI, Kirkpatrick levels — you know what these mean, why they matter, and how to translate them for people who don&rsquo;t. That makes you a bridge-builder in every organization you work with.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">Add Your Own</h2>
            <div className="mt-3 space-y-3">
              <p>This list is a starting point, not a complete picture. Every instructional designer brings something different to the table — your background, your specialties, the problems you&rsquo;ve solved, the learners you&rsquo;ve helped.</p>
              <p>What would you add? What do you feel most grateful for in this work? We&rsquo;d love to hear it — share your reason in the IDC community and keep this conversation going. Gratitude is better when it&rsquo;s shared.</p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>Instructional design is a field built on the belief that people can grow, that learning matters, and that thoughtful design makes a real difference. If you&rsquo;ve chosen this work, you&rsquo;ve chosen something worth being grateful for — not just on a holiday, but on an ordinary Tuesday when the project is hard and the deadline is close.</p>
            <p>The diversity of what you do, the skills you carry, and the impact you have on people&rsquo;s careers and lives — that&rsquo;s not nothing. That&rsquo;s actually quite a lot. This unique diversity is what makes the role of instructional designer so wonderful. Don&rsquo;t forget that.</p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="15 Reasons to Be Grateful as an Instructional Designer" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
