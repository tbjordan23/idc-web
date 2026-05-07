import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Making the Leap: From Teaching to Instructional Design",
  description: "If you&rsquo;re a teacher wondering whether instructional design is the right next move, this is the honest, practical guide you&rsquo;ve been looking for.",
  path: "/post/making-the-leap-from-teaching-to-instructional-design",
})

const VIEWS = 971

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Career", "Teacher Transition"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Making the Leap: From Teaching to Instructional Design
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            May 20, 2024
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
            &ldquo;If you&rsquo;ve spent years in a classroom, you already have more of what instructional design requires than you probably realize. The leap is real — but it&rsquo;s shorter than it looks.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            If you&rsquo;re a teacher who&rsquo;s been curious about instructional design — maybe you&rsquo;ve been googling it at 11pm after a long week, or a friend made the transition and it got you thinking — you&rsquo;re in good company. The teacher-to-ID pipeline is one of the most common paths into this field, and for good reason: the skill overlap is real, the demand for people with classroom experience is real, and the career possibilities are genuinely exciting.
          </p>

          <p>
            But the transition also involves learning new things, adjusting to new environments, and being honest about what&rsquo;s different. Here&rsquo;s the full picture.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">The Skills You Already Have</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Teaching is instructional design — you just haven&rsquo;t been calling it that. Every time you&rsquo;ve broken a complex topic into digestible pieces, written a clear learning objective, designed an assessment that actually measured what it was supposed to measure, or adapted your approach on the fly because the room wasn&rsquo;t getting it — that&rsquo;s the core work of an instructional designer.
              </p>
              <p>
                Curriculum development, learner analysis, differentiated instruction, assessment design — these are the vocabulary of ID, and you&rsquo;ve been doing versions of all of them. You also bring something that&rsquo;s genuinely hard to teach: an intuition for what actually engages learners and what loses them. That classroom-floor instinct is valuable, and hiring managers who know what they&rsquo;re looking for recognize it.
              </p>
              <p>
                Don&rsquo;t undersell this. Your background isn&rsquo;t a consolation prize on your resume — it&rsquo;s a differentiator. Many ID candidates have technical skills but limited experience actually teaching people. You have both.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">What&rsquo;s Actually Different</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The biggest shift isn&rsquo;t the subject matter or even the tools — it&rsquo;s the relationship with learners. In teaching, you&rsquo;re in the room with your students. You can read the energy, adjust in real time, and build ongoing relationships over a semester or a year. In instructional design, your learners are often people you&rsquo;ll never meet, experiencing a course you built months ago.
              </p>
              <p>
                That changes how you design. You have to anticipate confusion rather than respond to it. You have to build in feedback loops and scaffolding from the start, because you won&rsquo;t be there to fill in the gaps live. It&rsquo;s a different kind of empathy — designing thoughtfully for someone you&rsquo;ll never see in real time.
              </p>
              <p>
                You&rsquo;ll also need to get comfortable with the technology stack: authoring tools like Articulate 360 or Adobe Captivate, learning management systems like Canvas or Moodle, video editing basics, and increasingly, AI tools for content development. These are learnable — but budget time for them.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Building Your Portfolio</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Here&rsquo;s the practical reality: most ID job postings ask for a portfolio. If you&rsquo;ve never held an ID title, building one is your most important next step. The good news is that you can start with what you already have.
              </p>
              <p>
                Take a unit you&rsquo;ve taught and rebuild it as an e-learning module — even a simple, short one built in Articulate Storyline or Rise. Convert a lesson plan into a storyboard. Create a short video tutorial. Build a one-page job aid for a skill you know well. The goal is to show that you can apply design thinking in a digital context, not to demonstrate years of professional experience. Hiring managers understand that a teacher transitioning to ID won&rsquo;t have a library of corporate projects — they&rsquo;re looking for evidence that you can think and design like an instructional designer.
              </p>
              <p>
                Free trials of Articulate tools are available for exactly this purpose. Use them. A portfolio with two or three well-designed pieces will open more doors than a resume with every certification you&rsquo;ve ever earned.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Landing Your First Role</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Start with the sectors most likely to value your teaching background: K-12 edtech, higher education, non-profits focused on workforce development, and healthcare or government organizations that do a lot of compliance or onboarding training. These environments often want people who understand pedagogy from the ground up — which you do.
              </p>
              <p>
                LinkedIn is genuinely useful here — not for applying cold to job postings, but for building a presence in the ID community. Connect with people who&rsquo;ve made this transition. Follow IDs who share their work. Comment thoughtfully on conversations in the field. IDC&rsquo;s own community is a good place to start. Many first ID roles come through conversations, not applications.
              </p>
              <p>
                If you can, take on a side project before you leave teaching — even a volunteer role helping a non-profit redesign a training program. That experience becomes part of your story: &ldquo;Here&rsquo;s a project I led, the problem I was solving, and what I built.&rdquo; That story is what gets you in the room.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">An Honest Note on Salary and Culture</h2>
            <div className="mt-3 space-y-3">
              <p>
                The salary picture is generally positive. Entry-level ID roles typically start in the $65,000&ndash;$80,000 range, with experienced designers and those in corporate or tech sectors often earning $90,000 or more. Freelance work can expand that further. For many teachers, this represents a meaningful increase — though it depends significantly on your location and the sector you move into.
              </p>
              <p>
                The culture shift is worth naming too. Corporate L&amp;D environments tend to move faster, involve more stakeholder management, and require you to advocate for learners in settings where business goals sometimes conflict with good design. The pace and the politics are different from a school environment. Some teachers find it energizing. Others find it takes adjustment. Going in with realistic expectations makes the transition smoother.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              The transition from teaching to instructional design is one of the most well-worn paths in this field — and it&rsquo;s well-worn because it works. You&rsquo;re not starting from zero. You&rsquo;re building on a foundation that many career changers spend years trying to develop.
            </p>
            <p>
              The tools are learnable. The portfolio is buildable. The network is accessible. The thing that will carry you through the transition is the same thing that made you a good teacher: genuine care for whether learners actually learn. That doesn&rsquo;t change. It just gets a new context.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Making the Leap: From Teaching to Instructional Design" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
