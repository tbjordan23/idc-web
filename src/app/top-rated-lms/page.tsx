import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Best Learning Management Systems (LMS) — Top Rated",
  description:
    "IDC's top-rated Learning Management Systems for corporate training, L&D teams, and organizations of all sizes. Compare the best LMS platforms available today.",
  path: "/top-rated-lms",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Learning Management System (LMS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Learning Management System (LMS) is a software platform used to create, deliver, manage, and track online learning and training programs. Organizations use LMS platforms to host eLearning courses, manage learner progress, issue certifications, and report on training outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "What are the top-rated Learning Management Systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top-rated LMS platforms include Adobe Learning Manager, iSpring Learn, 360Learning, Litmos, and TalentLMS. The best LMS for your organization depends on factors such as organization size, budget, required features, and whether you need enterprise-grade capabilities or a lightweight solution for small teams.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the right LMS for my organization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When choosing an LMS, consider your organization's size and number of learners, budget, required features (such as SCORM compliance, reporting, mobile access, and integrations), ease of use for administrators and learners, and level of customer support. It is recommended to pilot two or three platforms before making a final decision.",
      },
    },
  ],
}

type LMSEntry = {
  rank: number
  vendor: string
  name: string
  image: string
  imageAlt: string
  description: string
  href: string
  tags: string[]
  highlights: string[]
}

const lmsList: LMSEntry[] = [
  {
    rank: 1,
    vendor: "Adobe",
    name: "Adobe Learning Manager",
    image: "/LMS/Adobe-Learning-Manager.avif",
    imageAlt: "Adobe Learning Manager logo",
    description:
      "Adobe Learning Manager (formerly Adobe Captivate Prime) is an enterprise-grade, cloud-based LMS built for organizations that need AI-powered personalization at scale. Deeply integrated with the Adobe Experience Cloud ecosystem, it lets you connect learning programs to real business workflows — from onboarding to continuous upskilling. The platform's AI engine surfaces recommended content, auto-assigns learning paths based on roles and skill gaps, and tracks progress across every format you deliver. If your team already works in Adobe tools, the native integration alone is a significant advantage. It's scalable, SCORM and xAPI compliant, and built for L&D teams that need robust analytics alongside their delivery.",
    href: "https://business.adobe.com/products/learning-manager/adobe-learning-manager.html",
    tags: ["Enterprise", "Cloud-Based", "AI-Powered", "SCORM / xAPI", "Adobe Suite"],
    highlights: [
      "AI-driven personalized learning paths that adapt based on individual learner behavior and skill gaps",
      "Native integration with Adobe Creative Cloud for seamless content authoring and asset management",
      "Social learning features including discussion boards, bookmarking, and peer interaction built into the platform",
      "Gamification engine with badges, points, and leaderboards to drive learner engagement",
      "Supports SCORM, xAPI, AICC, and cmi5 — compatible with content from any major authoring tool",
      "Deep analytics dashboard with customizable reports on completion, engagement, and skill development",
    ],
  },
  {
    rank: 2,
    vendor: "iSpring Solutions",
    name: "iSpring Learn",
    image: "/LMS/ispring logo 251x251.avif",
    imageAlt: "iSpring Learn logo",
    description:
      "iSpring Learn is a powerful, cloud-based LMS known for its clean interface and unusually tight integration with iSpring Suite — the PowerPoint-based authoring tool used by thousands of instructional designers. That connection means you can build a course in iSpring Suite and publish it directly to your LMS without format conversion headaches. Beyond the authoring integration, iSpring Learn holds up on its own: it supports blended learning, in-person session scheduling, mobile-first delivery, and detailed learner analytics. Its support model is consistently top-rated in the industry — fast, responsive, and available around the clock. If your team already uses PowerPoint for content development, iSpring Learn is the most natural LMS fit you'll find.",
    href: "https://www.ispringsolutions.com/ispring-learn",
    tags: ["Cloud-Based", "SCORM", "Blended Learning", "Mobile-Ready", "Mid-Market"],
    highlights: [
      "Seamless one-click publishing from iSpring Suite — no manual export or upload steps required",
      "Clean, intuitive admin interface that reduces setup time and flattens the learning curve for new admins",
      "Blended learning support with built-in ILT scheduling for in-person and virtual instructor-led sessions",
      "Mobile app with offline learning capability — learners can continue progress without a network connection",
      "Detailed reporting on completion rates, quiz scores, time-on-task, and individual learner progress",
      "24/7 customer support with consistently fast response times — one of the best in class for LMS service",
    ],
  },
  {
    rank: 3,
    vendor: "360Learning",
    name: "360Learning",
    image: "/LMS/360Learning-LMS-Learning-Management.avif",
    imageAlt: "360Learning logo",
    description:
      "360Learning is the LMS built for collaborative learning — a fundamentally different approach from traditional top-down training delivery. Instead of routing everything through the L&D team, 360Learning empowers subject matter experts across your organization to create, share, and improve courses themselves. AI-assisted course creation tools accelerate content development, while built-in social features (comments, reactions, Q&A) keep learners engaged and give authors instant feedback. L&D teams can still own the strategy, manage learning paths, and track outcomes — but the content creation bottleneck disappears. For organizations focused on onboarding, internal upskilling, or customer-facing team training, 360Learning is one of the most effective platforms available.",
    href: "https://360learning.com/",
    tags: ["Collaborative", "AI-Assisted", "Cloud-Based", "Corporate L&D", "Upskilling"],
    highlights: [
      "Collaborative authoring model — subject matter experts across the org can create and publish courses without L&D involvement",
      "AI-assisted course creation tools that help non-designers build effective training content faster",
      "Built-in social learning: per-lesson comments, reactions, and Q&A threads on every course",
      "Automated learning path assignment based on role, team, or skill profile",
      "Real-time analytics showing engagement, knowledge retention, and skill gap data at the team level",
      "Particularly effective for onboarding, peer upskilling, and enabling customer-facing teams",
    ],
  },
  {
    rank: 4,
    vendor: "Litmos",
    name: "Litmos",
    image: "/LMS/Top-LMS-SAP-Litmos.avif",
    imageAlt: "Litmos logo",
    description:
      "Litmos (formerly SAP Litmos) is a user-friendly, cloud-based LMS built for organizations that need a reliable, mobile-ready training platform without a steep implementation curve. Originally developed as SAP Litmos and now operating independently, it's well-regarded for its clean interface, fast setup, and solid compliance training capabilities. Litmos includes a built-in content library with hundreds of pre-built courses — which gives teams without large content development budgets a head start. It handles video, quizzes, ILT sessions, and eCommerce, and its integrations with Salesforce and other business tools make it a natural fit for sales enablement and customer training programs. A reliable, practical choice for mid-sized organizations with straightforward training needs.",
    href: "https://www.litmos.com/learning-management-system",
    tags: ["Cloud-Based", "Mobile-Ready", "SCORM / xAPI", "Mid-Market", "Content Library"],
    highlights: [
      "Intuitive admin interface that most L&D teams can configure and launch without dedicated IT support",
      "Mobile-optimized with a dedicated iOS and Android app for on-the-go learning",
      "Built-in content library with hundreds of ready-to-use compliance and professional skills courses",
      "Supports video, quizzes, assessments, ILT sessions, and compliance tracking in one platform",
      "eCommerce functionality for organizations that sell external training programs",
      "Strong Salesforce integration makes it a natural choice for sales enablement and customer training",
    ],
  },
  {
    rank: 5,
    vendor: "Absorb LMS",
    name: "Absorb LMS",
    image: "/LMS/absorb.png",
    imageAlt: "Absorb LMS logo",
    description:
      "Absorb LMS is a polished, enterprise-ready learning management system known for its clean learner experience, powerful admin tools, and strong performance at scale. Designed for corporate L&D teams that need more than a basic platform, Absorb combines an intuitive interface with advanced features — including AI-powered course recommendations, deep reporting, eCommerce support, and robust integrations with HRIS and CRM systems. The platform is particularly well regarded for its learner engagement tools and its ability to support large, geographically distributed workforces without sacrificing ease of use. For mid-market to enterprise organizations that want a capable, well-supported LMS without the complexity of legacy enterprise platforms, Absorb is a consistently strong choice.",
    href: "https://www.absorblms.com/products",
    tags: ["Enterprise", "Cloud-Based", "AI-Powered", "SCORM / xAPI", "Mid-Market"],
    highlights: [
      "AI-powered course recommendations that surface the right content for each learner automatically",
      "Highly rated learner experience — clean, intuitive interface that drives adoption and reduces drop-off",
      "Advanced reporting and analytics with customizable dashboards for L&D and executive stakeholders",
      "Built-in eCommerce for selling external training, with support for subscriptions and course bundles",
      "Deep integrations with major HRIS, CRM, and productivity platforms including Salesforce and BambooHR",
      "Dedicated implementation support and responsive customer success — consistently top-rated for service quality",
    ],
  },
]

export default function TopLMSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        title="Best Learning Management Systems (LMS)"
        subtitle="IDC's top-rated LMS platforms for corporate training, L&D teams, and organizations of every size."
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            Choosing the right Learning Management System is one of the most consequential decisions
            an L&D team makes — and the options have never been more varied. There are platforms
            built for enterprise compliance, platforms optimized for collaborative peer learning,
            and platforms designed to get a small team up and running in a single afternoon.
            Below are IDC&rsquo;s top-rated LMS platforms for the corporate sector, covering
            organizations of all sizes — from growing businesses and healthcare institutions to
            large enterprises and government organizations. Each platform has been evaluated for
            ease of use, feature depth, content standards compliance, support quality, and overall
            value for L&D teams.
          </p>
        </ScrollReveal>
      </section>

      {/* ─── LMS List ──────────────────────────────────────────────────────────── */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
              Top Rated Learning Management Systems
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              These platforms represent the best the market has to offer across different use cases
              and organizational sizes. Whether you&rsquo;re selecting your first LMS or evaluating
              alternatives to your current platform, this list is a reliable starting point.
            </p>
          </ScrollReveal>

          <div className="mt-14 space-y-12">
            {lmsList.map((lms, i) => (
              <ScrollReveal key={lms.rank} delay={(Math.min((i % 4) + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className={`flex flex-col gap-6 sm:flex-row sm:items-start ${i > 0 ? "border-t border-edge pt-12" : ""}`}>

                  {/* Image + rank */}
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <a href={lms.href} target="_blank" rel="noopener noreferrer">
                      <div
                        className="flex items-center justify-center overflow-hidden rounded-xl bg-[var(--surface-2)] border border-edge"
                        style={{ width: 80, height: 80, minWidth: 80, minHeight: 80 }}
                      >
                        <Image
                          src={lms.image}
                          alt={lms.imageAlt}
                          width={80}
                          height={80}
                          className="h-full w-full object-contain p-1"
                        />
                      </div>
                    </a>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-copy-dim">
                      #{lms.rank} Ranked
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                      {lms.vendor}
                    </p>
                    <h3 className="mt-1.5 text-xl font-extrabold leading-snug text-heading sm:text-2xl">
                      {lms.name}
                    </h3>

                    {/* Tags row */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {lms.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-edge bg-surface px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-copy-dim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3 h-0.5 w-8 rounded bg-accent opacity-60" />
                    <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
                      {lms.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {lms.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)]">
                            <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm font-medium leading-snug text-copy-muted">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={lms.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-lg border border-edge px-4 py-2 text-sm font-semibold text-copy-muted btn-shadow-neutral hover:border-edge-hover hover:text-copy"
                    >
                      Learn More
                      <svg className="h-3.5 w-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course promo banner ─────────────────────────────────────────────── */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-card border border-edge bg-surface p-6 shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">
                Featured Course
              </p>
              <Link
                href="/addie-model-course"
                className="mt-2 block text-lg font-extrabold tracking-tight text-heading transition-colors hover:text-accent"
              >
                Mastering the ADDIE Model — Course &amp; Certificate
              </Link>
              <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
              <div className="mt-4 flex items-start gap-5">
                <div className="mt-1 hidden h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] sm:flex">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium leading-relaxed text-copy-muted">
                    A great LMS is only as effective as the courses inside it. If you&rsquo;re
                    building or evaluating training programs, the ADDIE framework gives you the
                    structured process to design learning that actually works — from needs
                    analysis through evaluation. IDC&rsquo;s Mastering the ADDIE Model course
                    walks you through every phase with real examples, practical templates, and
                    a professional certificate upon completion.
                  </p>
                  <Link
                    href="/addie-model-course"
                    className="btn-shadow mt-4 inline-flex self-start items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
                  >
                    Start the Course
                    <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
