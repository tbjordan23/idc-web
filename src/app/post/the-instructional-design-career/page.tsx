import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "The Instructional Design Career",
  description:
    "From entry-level course developer to Chief Learning Officer — here's what an instructional design career actually looks like, including job titles, salary ranges, and the day-to-day reality of the work.",
  path: "/post/the-instructional-design-career",
})

const VIEWS = 3949

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Career", "Instructional Design"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          The Instructional Design Career
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Dec 28, 2021
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            2 min read
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
            &ldquo;Many instructional designers didn&rsquo;t plan to end up here — they followed the work that
            felt meaningful and discovered a field waiting for them. However you arrived, there&rsquo;s
            a real career here, with room to grow in more directions than you might expect.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            Instructional design is one of those fields where a surprising number of people arrive
            without having planned for it. Teachers who moved into corporate training. Subject matter
            experts who started building their own courses. HR professionals who discovered their
            real interest was in learning design. Whatever brought you here, the question at some
            point becomes: what does an actual career in this field look like?
          </p>

          <p>
            The answer involves a lot of variety — in job titles, in environments, in what you do
            day to day. Here&rsquo;s a map of how ID careers typically take shape.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Where ID Careers Begin: Entry-Level Roles</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Most instructional designers start in development-focused roles before moving into
                design. The most common entry point is a title like Course Developer, eLearning
                Developer, or Training Specialist. In these roles, you&rsquo;re typically building content
                from designs others have created — working in Articulate Storyline, Rise, Captivate,
                or similar tools, and getting comfortable with the technical side of the craft.
              </p>
              <p>
                Entry-level salaries vary by sector and location, but in 2024–2025, you can typically
                expect $50,000–$65,000 in most markets, with higher ranges in tech hubs or at
                larger organizations. Remote roles have expanded the geography significantly —
                you&rsquo;re no longer limited to local opportunities.
              </p>
              <p>
                The most important thing you can do at this stage is build your portfolio. Real
                examples of work — even from personal projects or volunteer efforts — matter far
                more to hiring managers than credentials alone.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">The Core Role: Instructional Designer</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                The Instructional Designer title sits at the center of the career map. This is where
                the scope of work expands from building to designing — conducting needs analysis,
                writing learning objectives, developing course structures, collaborating with SMEs,
                and evaluating whether the training is working.
              </p>
              <p>
                A related title you&rsquo;ll see increasingly is Learning Experience Designer (LXD). This
                role brings a user experience lens to the work — the assumption that how a learning
                experience feels to the learner is just as important as what it teaches. LXDs tend
                to be more research-oriented and more focused on the end-to-end learner journey.
              </p>
              <p>
                Mid-level ID salaries in 2024–2025 typically range from $65,000–$90,000, with
                senior IDs at larger organizations often reaching $95,000–$115,000 or more.
                Specializations in technical domains, healthcare, or compliance can push those
                numbers higher.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Moving Up: Management &amp; Leadership Paths</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                From a senior individual contributor role, ID careers branch in two broad directions:
                deeper specialization or moving into management. Both are legitimate paths, and the
                right choice depends entirely on what you want.
              </p>
              <p>
                On the management track, the progression typically goes from Learning Manager or
                L&amp;D Manager to Learning Director to, at the highest level, Chief Learning Officer
                (CLO). Each step involves less hands-on design work and more strategic responsibility —
                building and leading teams, shaping organizational learning strategy, and influencing
                how the business invests in its people.
              </p>
              <p>
                On the specialist track, you might move into program design, evaluation expertise,
                learning technology strategy, or independent consulting. Some of the most respected
                practitioners in the field have never managed a team — their expertise is simply
                very deep in a particular area.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">The Day-to-Day Reality</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Depending on your role and organization, a typical week might include: meetings with
                stakeholders to define project scope, discovery sessions with SMEs, writing and
                revising scripts or course outlines, building content in an authoring tool, reviewing
                feedback, testing prototypes, and presenting work to a project sponsor.
              </p>
              <p>
                The job involves a lot of communication and collaboration — it&rsquo;s not a solitary
                craft. Strong relationship skills matter as much as technical ones. You&rsquo;ll spend
                real time managing expectations, translating between business goals and learning
                solutions, and advocating for the learner&rsquo;s perspective in rooms full of people
                who are thinking about other things.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">Career Flexibility Is a Real Advantage</h2>
            <div className="mt-3 space-y-3">
              <p>
                One of the best things about building a career in instructional design is how
                portable the skills are. If you&rsquo;re in corporate L&amp;D and want to move to higher ed,
                that&rsquo;s a manageable transition. If you want to go freelance after several years
                in-house, the path exists. If you&rsquo;ve been in one industry and want to shift sectors,
                your design skills travel with you.
              </p>
              <p>
                Very few careers offer that kind of built-in flexibility. It&rsquo;s worth appreciating —
                and worth building toward intentionally.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              An instructional design career isn&rsquo;t a single trajectory — it&rsquo;s a field with multiple
              directions, genuine growth opportunities, and real demand across industries. Whether
              you&rsquo;re just starting out or mid-career and reconsidering your direction, there&rsquo;s
              room here for people who care about helping others learn.
            </p>
            <p>
              The work is meaningful, the skills are transferable, and the field continues to
              grow. If you&rsquo;re considering the path, the most useful thing you can do right now
              is start building — a portfolio project, a certification, a conversation with
              someone doing the work you want to do. The career begins with that first step.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="The Instructional Design Career" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
