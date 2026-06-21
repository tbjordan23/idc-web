import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Image from "next/image"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Exploring Instructional Design Career Opportunities",
  description:
    "Instructional design opens doors across corporate L&D, higher ed, freelancing, and the public sector — and what each path actually looks like.",
  path: "/post/exploring-instructional-design-career-opportunities",
  ogImage: "/images/young-woman-laptop-interview-1.png",
})


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
          Exploring Instructional Design Career Opportunities
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Mar 23, 2023
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
            &ldquo;One of the things people love most about instructional design is how many directions
            it can take you. Corporate, academic, freelance, government — each path looks different,
            and that&rsquo;s the point. You get to choose the version that fits your life.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Featured Image ──────────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <div className="relative mt-10 aspect-video overflow-hidden rounded-card">
          <Image
            src="/images/young-woman-laptop-interview-1.png"
            alt="Exploring Instructional Design Career Opportunities"
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
            If you&rsquo;re exploring instructional design as a career — whether you&rsquo;re coming from
            teaching, corporate training, subject matter expertise, or something else entirely —
            one of the first things you&rsquo;ll notice is how wide the field actually is.
          </p>

          <p>
            Instructional designers work in tech companies and school districts, hospitals and
            nonprofits, government agencies and creative agencies. The skills transfer broadly,
            which means you have genuine flexibility in how you build your career. Here&rsquo;s a look
            at the major paths and what each one tends to look like in practice.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">Corporate Learning &amp; Development</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Corporate L&amp;D is the largest employer of instructional designers. Companies across
                every industry — technology, finance, healthcare, retail, manufacturing — rely on
                L&amp;D teams to onboard employees, develop skills, ensure compliance, and build the
                capabilities the business needs to grow.
              </p>
              <p>
                In this environment, you&rsquo;ll typically work alongside HR, operations, and business
                leaders. Projects tend to move fast, stakeholder management is a core skill, and
                measurable outcomes matter. Common titles include Instructional Designer, Learning
                Experience Designer, eLearning Developer, and L&amp;D Specialist.
              </p>
              <p>
                Salaries in corporate L&amp;D range broadly — entry-level positions often start around
                $55,000–$65,000, while senior designers and managers at larger organizations can
                earn $90,000–$130,000 or more, particularly in tech and financial services.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">Higher Education</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Colleges and universities are significant employers of instructional designers,
                particularly as online and hybrid learning has expanded. In higher ed, you might
                work in a center for teaching and learning, an online program office, or directly
                with an academic department.
              </p>
              <p>
                The work here often centers on partnering with faculty to translate in-person
                courses to online formats, improving course quality and accessibility, or
                developing faculty professional development programs. The pace tends to be
                slower than corporate environments, which some designers find appealing. Benefits
                packages are often strong, and there can be real satisfaction in supporting
                academic work.
              </p>
              <p>
                Salaries in higher ed generally run somewhat lower than comparable corporate
                roles — typically $50,000–$80,000 — but the work environment and mission often
                make up the difference for people who are drawn to academic settings.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Freelance &amp; Consulting</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Freelancing and independent consulting is a path that appeals to designers who
                want more control over their work, their schedule, and the types of projects they
                take on. As a freelancer, you might work with multiple clients across industries,
                serve as a full-service solo designer, or specialize in a particular niche —
                compliance training, leadership development, healthcare education, and so on.
              </p>
              <p>
                The income ceiling is high for experienced freelancers. Hourly rates of $75–$150+
                are achievable once you&rsquo;ve built a track record and client base. The trade-off is
                the work of running a small business: finding clients, managing contracts, handling
                inconsistent income, and operating without employer benefits.
              </p>
              <p>
                Many designers move into freelancing after several years of corporate or higher
                ed experience. Having a portfolio, a professional network, and a clear niche
                makes the transition significantly smoother.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Government &amp; Nonprofit</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Government agencies at the federal, state, and local level employ instructional
                designers for workforce training, public safety education, policy communication,
                and more. Federal roles in particular can offer excellent stability, strong
                benefits, and meaningful work on public-interest programs.
              </p>
              <p>
                Nonprofits represent another meaningful path — from international development
                organizations to healthcare nonprofits to workforce development programs. The
                mission-driven nature of the work attracts many designers, even when compensation
                is more modest than the private sector.
              </p>
              <p>
                Both government and nonprofit ID work tends to involve a unique mix of stakeholders,
                bureaucratic processes, and resource constraints that build real adaptability
                in anyone who works in those environments long enough.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">Remote Work in Instructional Design</h2>
            <div className="mt-3 space-y-3">
              <p>
                One of the genuine advantages of instructional design as a career is how well it
                translates to remote work. The tools of the trade — authoring software, LMS
                platforms, collaboration tools — are built for distributed work. Many corporate
                L&amp;D roles are fully remote or hybrid, and freelancing is inherently location-flexible.
              </p>
              <p>
                If remote work is a priority for you, instructional design is a field where that
                preference doesn&rsquo;t have to be a compromise. It&rsquo;s increasingly the default.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Instructional design doesn&rsquo;t put you on a single track — it opens up a landscape.
              Corporate, academic, freelance, government, nonprofit: each offers a genuinely
              different experience of the work, and none is the &ldquo;right&rdquo; path for everyone.
            </p>
            <p>
              The best thing you can do early in your career is explore. Talk to designers working
              in different environments. Take on a variety of projects if you can. Pay attention
              to what energizes you — not just what the salary looks like — and let that guide
              where you invest your time next.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Exploring Instructional Design Career Opportunities" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
