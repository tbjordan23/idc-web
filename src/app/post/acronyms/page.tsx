import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Overview: Top Instructional Design Acronyms",
  description:
    "ADDIE, SCORM, xAPI, SME, LMS — the field is full of shorthand. A plain-English breakdown of the acronyms every instructional designer should know.",
  path: "/post/acronyms",
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
          Overview: Top Instructional Design Acronyms
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Jun 26, 2018
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            3 min read
          </span>
        </div>
      </ScrollReveal>

      {/* ── Hook / Summary blurb ────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <blockquote className="mt-10 border-l-4 border-accent pl-5">
          <p className="text-lg font-medium leading-relaxed text-copy-muted italic">
            &ldquo;Every field has its own shorthand. In instructional design, learning the acronyms isn&rsquo;t about memorizing jargon — it&rsquo;s about speaking the language of a community you already belong to.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            Walk into your first meeting with an L&amp;D team and you might hear something like: &ldquo;The SME wants SCORM, but the LRS won&rsquo;t support xAPI — should we go AICC instead?&rdquo; If that sentence made your eyes glaze over, you&rsquo;re not alone. Instructional design is a field rich with acronyms, and if you&rsquo;re new to it — or transitioning from a different background — the shorthand can feel like a secret code.
          </p>

          <p>
            It&rsquo;s not. Once you know what each term points to, these abbreviations become genuinely useful — a faster way to talk about complex ideas with colleagues who share the context. This guide breaks down the most important ones, grouped by category, so you can start using them with confidence.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Design Models &amp; Frameworks</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                <strong className="text-heading">ADDIE</strong> — Analyze, Design, Develop, Implement, Evaluate. The foundational instructional design framework. Even when you&rsquo;re not following it step by step, it gives you a mental map for thinking through a learning project from start to finish.
              </p>
              <p>
                <strong className="text-heading">SAM</strong> — Successive Approximation Model. A more iterative, agile alternative to ADDIE developed by Michael Allen. Rather than moving linearly through phases, SAM emphasizes rapid prototyping and continuous feedback. It&rsquo;s well-suited to fast-moving projects where stakeholder input is needed early.
              </p>
              <p>
                <strong className="text-heading">AGILE</strong> — In the ID world, this refers to applying agile development principles to learning design: short sprints, working prototypes, and continuous iteration rather than a big reveal at the end. It&rsquo;s less a formal model and more a mindset for how projects get managed.
              </p>
              <p>
                <strong className="text-heading">ISD</strong> — Instructional Systems Design. The broader discipline that encompasses all of these frameworks. Think of ISD as the professional field; ADDIE and SAM are tools within it.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Technology Standards</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                <strong className="text-heading">SCORM</strong> — Sharable Content Object Reference Model. The long-standing standard for packaging eLearning content so it can communicate with a Learning Management System. SCORM tracks completion, score, and time spent — useful, but limited in what data it can capture.
              </p>
              <p>
                <strong className="text-heading">xAPI</strong> — Experience API (also called Tin Can). SCORM&rsquo;s more flexible successor. xAPI can track a much wider range of learning experiences — including mobile, simulation, and informal learning — and sends data to a Learning Record Store (LRS) rather than just an LMS. If you&rsquo;re working with modern learning ecosystems, you&rsquo;ll encounter this often.
              </p>
              <p>
                <strong className="text-heading">LRS</strong> — Learning Record Store. The database that stores xAPI statements. Think of it as a more powerful and flexible alternative to the tracking system built into an LMS.
              </p>
              <p>
                <strong className="text-heading">AICC</strong> — Aviation Industry Computer-Based Training Committee. An older content standard predating SCORM, occasionally still referenced in legacy systems or government contexts.
              </p>
              <p>
                <strong className="text-heading">LTI</strong> — Learning Tools Interoperability. A standard that allows external tools and content to plug seamlessly into an LMS. If you&rsquo;ve ever launched a third-party quiz tool or video platform from within Canvas or Blackboard without logging in separately, LTI made that possible.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Roles &amp; Organizations</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                <strong className="text-heading">SME</strong> — Subject Matter Expert. The person (or team) who holds deep knowledge in the topic you&rsquo;re designing around. As an ID, you partner closely with SMEs — you bring the design expertise, they bring the content expertise. Managing that relationship well is one of the most valuable skills in the field.
              </p>
              <p>
                <strong className="text-heading">L&amp;D</strong> — Learning &amp; Development. The organizational function responsible for employee training, skill-building, and professional growth. In many companies, instructional designers sit within the L&amp;D team.
              </p>
              <p>
                <strong className="text-heading">CLO</strong> — Chief Learning Officer. The executive responsible for an organization&rsquo;s learning strategy. Understanding what a CLO cares about — business outcomes, talent development, ROI — helps you position your work more effectively.
              </p>
              <p>
                <strong className="text-heading">ATD</strong> — Association for Talent Development. One of the largest professional associations for learning and development professionals. A good resource for certifications, research, and community.
              </p>
              <p>
                <strong className="text-heading">ISPI</strong> — International Society for Performance Improvement. Focused on human performance technology and the systematic improvement of performance in organizations. More analytically focused than ATD, with strong roots in performance consulting.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Tools &amp; Platforms</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                <strong className="text-heading">LMS</strong> — Learning Management System. The platform used to host, deliver, and track online learning. Think Canvas, Blackboard, Moodle, or corporate platforms like Cornerstone or Docebo. The LMS is often the delivery environment your courses live in.
              </p>
              <p>
                <strong className="text-heading">LXP</strong> — Learning Experience Platform. A newer category of platform focused on learner-driven discovery — personalized content recommendations, social learning, and curated playlists rather than top-down course assignment. Think of it as the Netflix model applied to learning.
              </p>
              <p>
                <strong className="text-heading">LCMS</strong> — Learning Content Management System. A platform for creating, managing, and reusing learning content objects. Where an LMS manages the delivery and tracking of learning, an LCMS manages the content itself. Some tools combine both functions.
              </p>
              <p>
                <strong className="text-heading">CMS</strong> — Content Management System. In a broader web context, this is how websites manage their content (WordPress, for example). In learning contexts, it sometimes refers to the authoring and content-management layer of a platform.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">Acronyms Aren&rsquo;t Gatekeeping — They&rsquo;re Shorthand</h2>
            <div className="mt-3 space-y-3">
              <p>
                If you&rsquo;re newer to the field, it&rsquo;s easy to feel like all this terminology is a kind of test — something you&rsquo;re supposed to already know. It isn&rsquo;t. Every experienced instructional designer had to learn this language at some point, and most of them can still remember when SCORM felt like a foreign word.
              </p>
              <p>
                These acronyms exist because they make it easier for a community of practitioners to talk precisely about complex systems without spelling everything out every time. Once you know them, they&rsquo;re genuinely useful. Until then, bookmark this page — and don&rsquo;t be afraid to ask what something means in a meeting. The people who ask questions learn faster.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              The vocabulary of instructional design is a living language — it grows as the field grows. New standards emerge (xAPI replaced SCORM as the modern benchmark), new platforms appear (LXPs didn&rsquo;t exist a decade ago), and the roles evolve alongside the technology.
            </p>
            <p>
              You don&rsquo;t need to memorize all of this at once. Build your familiarity gradually, connect each term to the real thing it describes, and keep updating your understanding as the field moves forward. That&rsquo;s exactly what experienced practitioners do — not because they&rsquo;ve mastered the list, but because they&rsquo;ve learned to stay curious.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Overview: Top Instructional Design Acronyms" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
