import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Welcome to Instructional Design Central",
  description:
    "Instructional Design Central is a home for ID professionals and career changers — built to support, inform, and connect the people who make learning better.",
  path: "/post/2015/12/31/welcome-to-instructional-design-central",
})

const VIEWS = 419

export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Community"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Welcome to Instructional Design Central
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Dec 31, 2015
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            1 min read
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
            &ldquo;Instructional Design Central was built for the people who make learning better — and if you&rsquo;re here, that&rsquo;s you.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            Welcome. We&rsquo;re genuinely glad you found your way here.
          </p>
          <p>
            Instructional Design Central was created with a simple belief: that the people who design learning deserve a place that takes their work seriously. A place with real resources, honest conversation, and a community that gets it — because they&rsquo;re living it too.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Who This Is For</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                If you&rsquo;re an instructional designer — whether you&rsquo;ve been in the field for twenty years or you&rsquo;re just starting to explore it — this space is for you. If you&rsquo;re a teacher thinking about making the jump to corporate L&amp;D, a trainer looking to grow your design skills, or a curious professional who wandered in from a LinkedIn article — also for you.
              </p>
              <p>
                This field is broader and more welcoming than it sometimes lets on, and we want IDC to reflect that. You don&rsquo;t need a specific title or a certain number of years to belong here. If you care about making learning better, you&rsquo;re in the right place.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">What You&rsquo;ll Find Here</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                IDC is home to articles, resources, tools, and courses built specifically for instructional designers. We cover the models and frameworks that shape the field, the practical skills that make the day-to-day work better, the tools that have changed how we work, and the career paths that open up when you build real expertise in this discipline.
              </p>
              <p>
                We also cover the human side of this work — the SME relationships that require patience, the stakeholder conversations that require diplomacy, the creative challenges that require you to bring your full self to the problem. Because that&rsquo;s what instructional design actually is: deeply human, endlessly interesting, and genuinely important.
              </p>
              <p>
                We&rsquo;re constantly adding new content, building new tools, and listening to what this community needs. If there&rsquo;s something you want to see here, we want to hear about it.
              </p>
            </div>
          </div>

          {/* Closing — warm, no callout box for this one */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">You Belong Here</h2>
            <p>
              The instructional design community is one of the most thoughtful, collaborative, and generous professional communities we know. People here share what they&rsquo;ve learned, help each other through hard projects, and genuinely root for each other&rsquo;s success.
            </p>
            <p>
              We&rsquo;re honored to be a part of that community — and to have you here. Explore the blog, dig into the resources, and reach out anytime. This is your home too.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Welcome to Instructional Design Central" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
