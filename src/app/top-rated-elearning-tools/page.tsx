import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Rated eLearning Tools",
  description:
    "IDC's top-ranked eLearning authoring tools — reviewed and curated for instructional designers who want to build great courses without the guesswork.",
  path: "/top-rated-elearning-tools",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best eLearning authoring tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The top eLearning authoring tools include Articulate 360 (with Storyline 360 and Rise 360), Adobe Captivate, TechSmith Camtasia, iSpring Suite, Synapse, and Lectora Online. The best tool for you depends on your project needs, team workflow, and required output formats — but Articulate 360 is the most widely used suite among professional instructional designers.",
      },
    },
    {
      "@type": "Question",
      name: "What is Articulate 360?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Articulate 360 is a subscription-based eLearning suite that includes Storyline 360, Rise 360, Review 360, and several other authoring and collaboration apps. It is the most widely used eLearning development platform among professional instructional designers and L&D teams.",
      },
    },
    {
      "@type": "Question",
      name: "What eLearning tools are best for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For beginners, Coassemble and iSpring Suite offer the most accessible on-ramps to eLearning development. Coassemble uses a blocks-based building interface and AI course generator that require no prior development experience, while iSpring Suite lets you build courses directly inside PowerPoint — a tool most professionals already know.",
      },
    },
  ],
}

type ElearningTool = {
  rank: number
  org: string
  name: string
  image: string
  imageAlt: string
  description: string
  href: string
  tags: string[]
  highlights: string[]
}

const tools: ElearningTool[] = [
  {
    rank: 1,
    org: "Articulate",
    name: "Articulate 360",
    image: "/eLearning/Top-eLearning-Tools-Adobe-Articualte-360.avif",
    imageAlt: "Articulate 360 logo",
    description:
      "Articulate 360 is the industry standard suite for eLearning development — and for good reason. A single subscription gives you access to every Articulate app: Storyline 360 for custom, interaction-rich courses; Rise 360 for fast, beautiful responsive content; Review 360 for real-time stakeholder feedback; and more. AI features are now built into the platform, helping you draft content, generate images, and move from storyboard to polished course faster than ever. Whether you're a beginner building your first module or a veteran creating complex branching scenarios, Articulate 360 has the right tool for the job.",
    href: "https://articulate.com/360",
    tags: ["Cloud-Based", "Subscription", "Storyline + Rise", "AI-Powered"],
    highlights: [
      "Storyline 360 for custom, interaction-rich eLearning with pixel-level creative control",
      "Rise 360 for beautiful, inherently responsive web-based courses built in a fraction of the time",
      "Review 360 for real-time stakeholder collaboration and feedback — no more email chains",
      "AI content generation features built directly into the authoring workflow",
      "The largest eLearning developer community in the field — with millions of shared templates and resources",
    ],
  },
  {
    rank: 2,
    org: "Coassemble",
    name: "Coassemble",
    image: "/eLearning/coassemble.png",
    imageAlt: "Coassemble logo",
    description:
      "Coassemble is an entirely web-based authoring tool built to make course creation feel approachable, even if you're new to instructional design. Its blocks-based interface lets you drag in content, quizzes, and interactions without touching code or wrestling with a steep learning curve, and the built-in AI course generator can turn a rough outline into a structured first draft in minutes. Courses are inherently responsive, so they look polished on any device without manual adjustment. For solo instructional designers, small teams, and anyone who wants to go from idea to published course quickly, Coassemble strikes a great balance between simplicity and capability.",
    href: "https://www.coassemble.com/",
    tags: ["Cloud-Based", "Responsive", "AI Course Generator", "Beginner-Friendly"],
    highlights: [
      "Entirely web-based — no desktop software required, accessible from any browser",
      "Inherently responsive output that looks great on every device automatically",
      "Blocks-based building makes course creation fast and approachable for beginners",
      "Built-in AI course generator turns an outline into a structured first draft",
      "Templates and ready-made interactions help you go from idea to published course quickly",
    ],
  },
  {
    rank: 3,
    org: "Adobe",
    name: "Adobe Captivate",
    image: "/eLearning/Top-eLearning-Tools-Adobe-Captivate.avif",
    imageAlt: "Adobe Captivate logo",
    description:
      "Adobe Captivate is a full-featured eLearning authoring tool built for instructional designers who need depth. It handles complex branching scenarios, software simulations, 360° VR experiences, and accessible course design with confidence. The updated version of Captivate features a redesigned interface and AI-powered asset creation tools, making a powerful platform more approachable than it's ever been. Captivate integrates naturally with the broader Adobe ecosystem, and its output is SCORM and xAPI compliant. For teams with complex accessibility requirements or heavy software simulation needs, Captivate remains a strong choice.",
    href: "https://www.adobe.com/products/captivate.html",
    tags: ["Desktop + Cloud", "Advanced Interactions", "VR Support", "Simulations"],
    highlights: [
      "Industry-leading software simulation capabilities for IT and software training",
      "360° VR experience authoring for immersive and scenario-based learning",
      "Strong accessibility support — WCAG 2.1 and Section 508 compliant output",
      "Redesigned modern interface with AI-powered asset generation tools",
      "Deep Adobe ecosystem integration with Photoshop, Illustrator, and more",
    ],
  },
  {
    rank: 4,
    org: "TechSmith",
    name: "TechSmith Camtasia",
    image: "/eLearning/Top-eLearning-Tools-Adobe-Camtasia.avif",
    imageAlt: "TechSmith Camtasia logo",
    description:
      "Camtasia is the gold standard for screen-recording-based training content. It captures everything on your screen — software workflows, process walkthroughs, live presentations — and gives you a full suite of video editing tools to produce polished training content ready for any platform. Camtasia's annotation tools, callouts, and interactive quizzes make it more than just a video editor. For software training, IT onboarding, and process documentation, Camtasia is often the fastest path from a recorded workflow to a published, learner-ready course.",
    href: "https://www.techsmith.com/camtasia.html",
    tags: ["Screen Recording", "Video Editing", "Windows + Mac", "Software Training"],
    highlights: [
      "Best-in-class screen recording with system audio, webcam, and narration capture",
      "Full-featured video editing timeline with annotations, callouts, and effects",
      "Built-in interactive quizzes and hotspots to build engagement into video content",
      "Export directly to MP4, SCORM, YouTube, Google Drive, and more",
      "Available for Windows and Mac — with a perpetual license option alongside subscription",
    ],
  },
  {
    rank: 5,
    org: "iSpring Solutions",
    name: "iSpring Suite",
    image: "/eLearning/Top-eLearning-Tools-Adobe-iSpring.avif",
    imageAlt: "iSpring Suite logo",
    description:
      "iSpring Suite is the fastest on-ramp to eLearning development for instructional designers who already live in PowerPoint. It installs directly as a PowerPoint add-in, letting you convert existing presentations into interactive courses — complete with quizzes, role-play simulations, screen recordings, and video lectures — without leaving the tool you already know. iSpring Suite Max includes iSpring Learn, a fully featured LMS for delivering and tracking your courses. If your team is PowerPoint-first and needs to produce quality eLearning fast, iSpring Suite bridges that gap better than any other tool on the market.",
    href: "https://www.ispringsolutions.com/",
    tags: ["PowerPoint Plugin", "Cloud-Based", "Built-in LMS", "Rapid Development"],
    highlights: [
      "Installs as a PowerPoint add-in — build eLearning from inside a tool you already know",
      "Converts presentations to SCORM-compliant courses with minimal extra effort",
      "Includes role-play simulations, screen recordings, and video lecture authoring",
      "iSpring Suite Max includes iSpring Learn — a fully featured LMS for delivery and tracking",
      "Low learning curve makes it a strong choice for SMEs stepping into content creation",
    ],
  },
  {
    rank: 6,
    org: "Synapse",
    name: "Synapse",
    image: "/eLearning/Top-eLearning-Tools-Adobe-Synapse.avif",
    imageAlt: "Synapse logo",
    description:
      "Synapse is a cloud-based learning design tool built to streamline the instructional design process from strategy through production. Designed for collaboration, Synapse connects learning teams and subject-matter experts in a shared workspace — making it easier to design, develop, refine, and manage corporate training at scale. It automates much of the structural work of instructional design, helping teams organize content, maintain consistency across projects, and move from design to development faster. For organizations where SME collaboration is a bottleneck, Synapse offers a more efficient path through the process.",
    href: "https://www.synapsepro.com",
    tags: ["Cloud-Based", "AI-Assisted", "Collaborative", "SME-Friendly"],
    highlights: [
      "Cloud-based platform built for both instructional designers and subject-matter experts",
      "Structured collaboration tools that keep projects organized and moving forward",
      "Automates parts of the ID process to reduce production time and rework",
      "Purpose-built for corporate learning teams managing multiple concurrent projects",
      "Streamlines the handoff from content design to course development",
    ],
  },
  {
    rank: 7,
    org: "ELB Learning",
    name: "Lectora Online",
    image: "/eLearning/Top-eLearning-Tools-Lectora-Online.avif",
    imageAlt: "Lectora Online logo",
    description:
      "Lectora Online is a cloud-based eLearning authoring tool with a long track record in enterprise and government training. It's particularly strong in accessibility — Lectora produces Section 508 and WCAG 2.1 compliant output more reliably than most other tools on the market, making it the go-to choice for organizations with strict compliance requirements. The platform supports HTML5, SCORM, xAPI, and AICC output, and includes built-in responsive design tools, a collaborative review workflow, and a rich media library. For regulated industries and large enterprises, Lectora Online delivers the reliability and accessibility depth that matters most.",
    href: "https://www.lectora.com/",
    tags: ["Cloud-Based", "Section 508", "Accessibility", "SCORM + xAPI"],
    highlights: [
      "Industry-leading accessibility — Section 508 and WCAG 2.1 compliant output out of the box",
      "Full HTML5, SCORM, xAPI, and AICC output support for any LMS environment",
      "Cloud-based authoring with real-time collaboration and review tools",
      "Built-in media library and asset management for large content libraries",
      "Strong track record in enterprise, government, and highly regulated industry training",
    ],
  },
]

export default function TopElearningToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        title="Top Rated eLearning Tools"
        subtitle="The authoring tools worth knowing — reviewed and ranked for working instructional designers."
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            The right eLearning authoring tool can make the difference between a course you&rsquo;re
            proud of and one that took twice as long to build. The best tools share a few things in
            common: an intuitive interface, responsive output that works on any device, and a
            subscription model that keeps features current. Below are IDC&rsquo;s top-ranked
            eLearning development tools — curated for instructional designers who want to build
            great courses without the guesswork.
          </p>
        </ScrollReveal>
      </section>

      {/* ─── Tools List ─────────────────────────────────────────────────────────── */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
              Top Rated eLearning Authoring Tools
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              These tools represent the best of what&rsquo;s available for eLearning development
              today — ranked by reputation, breadth of features, and long-term adoption among
              professional instructional designers. Whether you&rsquo;re choosing your first
              authoring tool or evaluating your team&rsquo;s current stack, this list is a solid
              place to start.
            </p>
          </ScrollReveal>

          <div className="mt-14 space-y-12">
            {tools.map((tool, i) => (
              <ScrollReveal key={tool.rank} delay={(Math.min((i % 4) + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className={`flex flex-col gap-6 sm:flex-row sm:items-start ${i > 0 ? "border-t border-edge pt-12" : ""}`}>

                  {/* Image + rank */}
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <a href={tool.href} target="_blank" rel="noopener noreferrer">
                      <div
                        className="flex items-center justify-center overflow-hidden rounded-xl bg-[var(--surface-2)] border border-edge"
                        style={{ width: 80, height: 80, minWidth: 80, minHeight: 80 }}
                      >
                        <Image
                          src={tool.image}
                          alt={tool.imageAlt}
                          width={80}
                          height={80}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </a>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-copy-dim">
                      #{tool.rank} Ranked
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                      {tool.org}
                    </p>
                    <h3 className="mt-1.5 text-xl font-extrabold leading-snug text-heading sm:text-2xl">
                      {tool.name}
                    </h3>

                    {/* Tags */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {tool.tags.map((tag) => (
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
                      {tool.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {tool.highlights.map((item) => (
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
                      href={tool.href}
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

      {/* ─── Course promo banner ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
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
                  You&rsquo;ve got the tools — now build the process to go with them. IDC&rsquo;s
                  Mastering the ADDIE Model course walks you through the systematic design
                  framework that professional instructional designers use to create learning that
                  actually works. From needs analysis through evaluation, you&rsquo;ll learn how to
                  apply ADDIE in real-world contexts, with AI tools, downloadable templates, and a
                  completion certificate included.
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
      </section>
    </>
  )
}
