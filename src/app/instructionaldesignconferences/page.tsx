import type { Metadata } from "next"
import Image from "next/image"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Instructional Design Conferences",
  description:
    "Explore the top instructional design and L&D conferences — from ATD ICE to DevLearn. Find the events worth attending to grow your skills, network, and stay current in the field.",
  path: "/instructionaldesignconferences",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the top instructional design conferences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top instructional design and L&D conferences include the ATD International Conference & Exposition, DevLearn Conference & Expo, Learning Solutions Conference, Training Magazine Conference & Expo, and the ISPI Annual Performance Improvement Conference. These events cover eLearning development, instructional design theory and practice, learning technology, and performance consulting.",
      },
    },
    {
      "@type": "Question",
      name: "Why should instructional designers attend conferences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional design conferences offer opportunities to learn about the latest tools, research, and best practices in the field, network with peers and thought leaders, attend hands-on workshops, and earn continuing education credits. They are valuable for both new and experienced instructional designers looking to stay current and grow professionally.",
      },
    },
    {
      "@type": "Question",
      name: "What is the ATD International Conference?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ATD International Conference & Exposition (ATD ICE) is the largest talent development conference in the world, hosted annually by the Association for Talent Development. It draws 10,000+ learning and development professionals from 75+ countries for sessions, workshops, and an expansive technology expo.",
      },
    },
  ],
}

type FeaturedConference = {
  org: string
  name: string
  description: string
  href: string
  when: string
}

const featuredConferences: FeaturedConference[] = [
  {
    org: "Langevin Learning Services",
    name: "Certified Virtual Instructional Designer/Developer",
    description:
      "Acquire the key skills to successfully design virtual training that is engaging, interactive, and maximizes performance. Apply Langevin's proven step-by-step design process to tackle the critical constraints of virtual classroom design, select the best methods and tools for your content, and more — backed by 35+ years of instructional design experience and innovation.",
    href: "https://www.langevin.com/certified-virtual-instructional-designer-developer/",
    when: "Online · On-Demand",
  },
  {
    org: "eLearning Guild",
    name: "DevLearn Conference & Expo",
    description:
      "The premier event for learning professionals who want to stay ahead of the technology curve. DevLearn covers eLearning tools, authoring platforms, AI in learning, and emerging tech — all with a strong hands-on ethos. DemoFest, where practitioners showcase real projects, is one of the most engaging sessions in the industry.",
    href: "https://devlearn.com/",
    when: "Annual · October · Las Vegas",
  },
  {
    org: "Association for Talent Development (ATD)",
    name: "ATD International Conference & EXPO",
    description:
      "The world's largest talent development event. ATD ICE brings together 10,000+ L&D professionals from 80+ countries for 350+ sessions spanning instructional design, eLearning, AI in learning, leadership development, coaching, and performance consulting. The expo floor alone — 300+ exhibitors — is worth the trip.",
    href: "https://atdconference.td.org/",
    when: "Annual · May · Los Angeles",
  },
]

type ConferenceEntry = {
  rank: number
  org: string
  name: string
  when: string
  location: string
  description: string
  href: string
  tags: string[]
  highlights: string[]
  icon: React.ReactNode
}

const conferences: ConferenceEntry[] = [
  {
    rank: 1,
    org: "eLearning Guild",
    name: "DevLearn Conference & Expo",
    when: "Annual · October",
    location: "Las Vegas, NV",
    description:
      "DevLearn is the go-to conference for eLearning developers and instructional designers who care about the craft of building digital learning. Sessions go deep on tools, techniques, and technologies — Articulate Storyline, Rise, AI-powered development, video production, xAPI, and more. The annual DemoFest is one of the most practical learning experiences in the field: practitioners showcase real projects they built, explaining the challenge, the solution, and what they'd do differently. If you're serious about eLearning development, DevLearn is essential.",
    href: "https://devlearn.com/",
    tags: ["Annual", "In-Person", "October", "Las Vegas"],
    highlights: [
      "Premier conference for eLearning technology, tools, and development",
      "DemoFest showcases real-world learner projects from practitioners",
      "Hands-on workshops with leading authoring tools and platforms",
      "Deep-dive sessions on AI in learning, xAPI, video, and interactivity",
      "Strong community of eLearning developers sharing real craft knowledge",
    ],
    icon: (
      <Image
        src="/logos/devlearn-logo.png"
        alt="DevLearn Logo"
        width={64}
        height={64}
        className="rounded-lg object-cover"
      />
    ),
  },
  {
    rank: 2,
    org: "Association for Talent Development",
    name: "ATD International Conference & EXPO",
    when: "Annual · May 17–20, 2026",
    location: "Los Angeles Convention Center, Los Angeles, CA",
    description:
      "ATD ICE is the flagship event of the instructional design and talent development world — the world's largest, most comprehensive conference for L&D professionals. No other event comes close in scale: 10,000+ attendees from 80+ countries, 350+ educational sessions, and an expo floor with 300+ exhibitors showcasing the latest learning technology. The 2026 theme is \"Embrace Disruption. Direct the Future\" — with 35+ dedicated AI sessions alongside tracks in instructional design, facilitation, measurement, leadership development, and performance consulting. If you're investing in one conference this year, ATD ICE is the one.",
    href: "https://atdconference.td.org/",
    tags: ["Annual", "In-Person", "Virtual", "May", "Flagship", "Los Angeles"],
    highlights: [
      "World's largest L&D conference — 10,000+ attendees from 80+ countries",
      "350+ sessions including 35+ dedicated AI and emerging technology sessions",
      "300+ exhibitors on the EXPO floor — the most comprehensive vendor showcase in the field",
      "Preconference workshops on tools like Articulate Storyline and eLearning design",
      "Past keynotes: Seth Godin, Simone Biles, Matthew McConaughey, Venus Williams",
    ],
    icon: (
      <Image
        src="/logos/atd-conference-logo.webp"
        alt="ATD Logo"
        width={60}
        height={38}
        className="object-contain"
      />
    ),
  },
  {
    rank: 3,
    org: "eLearning Guild",
    name: "Learning Solutions Conference",
    when: "Annual · March",
    location: "Orlando, FL",
    description:
      "Learning Solutions is the practical counterpart to DevLearn — focused on applied L&D work that you can take back and use on Monday. Sessions cover instructional design fundamentals, learning strategy, accessibility, UX for learning, and current tools, all with an emphasis on real-world application. The conference is intentionally smaller than ATD ICE, which makes it easier to actually connect with other practitioners. For early-career IDs, it's one of the best first conferences to attend — accessible, welcoming, and substantive.",
    href: "https://www.learningsolutionscon.com/",
    tags: ["Annual", "In-Person", "Virtual", "March", "Orlando"],
    highlights: [
      "Practical, applied sessions focused on real instructional design work",
      "Accessible pricing — a great entry point for early-career professionals",
      "Intentionally smaller scale for genuine peer networking",
      "Covers eLearning, ILT, microlearning, accessibility, and learning strategy",
      "Strong eLearning Guild community presence with active peer engagement",
    ],
    icon: (
      <Image
        src="/logos/elearning-guild-logo.png"
        alt="eLearning Guild Logo"
        width={64}
        height={64}
        className="rounded-lg object-cover"
      />
    ),
  },
  {
    rank: 4,
    org: "Training Magazine",
    name: "Training Magazine Conference & Expo",
    when: "Annual · February",
    location: "Orlando, FL",
    description:
      "Training Magazine's flagship event draws corporate L&D teams from Training 100-recognized organizations and beyond. The conference is known for its strong focus on measurement, ROI, and the business case for learning — making it particularly valuable for IDs who want to build credibility with executives and speak the language of business outcomes. Sessions emphasize what works in organizational training contexts, with lessons from practitioners who've delivered programs at scale.",
    href: "https://www.trainingconference.com/",
    tags: ["Annual", "In-Person", "February", "Corporate L&D"],
    highlights: [
      "Strong emphasis on measurement, evaluation, and learning ROI",
      "Draws from Training 100-recognized organizations",
      "Highly practical content aimed at corporate L&D teams",
      "Sessions on program design, facilitation, and performance impact",
      "One of the longest-running L&D conferences in the industry",
    ],
    icon: (
      <Image
        src="/logos/training-magazine-logo.png"
        alt="Training Magazine Logo"
        width={64}
        height={32}
        className="object-contain"
      />
    ),
  },
  {
    rank: 5,
    org: "Wilmington Group",
    name: "Learning Technologies Conference & Exhibition",
    when: "Annual · February",
    location: "ExCeL London, UK",
    description:
      "Learning Technologies is Europe's largest workplace learning and technology event — and a serious destination for instructional designers who want a global perspective on where the field is heading. The conference brings together thousands of L&D professionals alongside an exhibition floor packed with the latest learning platforms, authoring tools, and vendors. Sessions are practical and research-informed, covering digital learning design, AI in L&D, performance support, and the future of workplace learning. If you're based in or traveling to Europe, this is the unmissable annual event.",
    href: "https://www.learningtechnologies.co.uk/",
    tags: ["Annual", "In-Person", "February", "London", "Europe"],
    highlights: [
      "Europe's largest L&D conference and exhibition",
      "Thousands of attendees from across the UK, Europe, and internationally",
      "Massive exhibition floor with leading learning platforms and authoring tools",
      "Sessions covering digital learning design, AI in L&D, and performance support",
      "Conference + free-to-attend exhibition — flexible options for any budget",
    ],
    icon: (
      <Image
        src="/logos/learning-technologies-logo.png"
        alt="Learning Technologies Logo"
        width={64}
        height={36}
        className="object-contain"
      />
    ),
  },
  {
    rank: 6,
    org: "Training Industry",
    name: "Training Industry Conference & Expo (TICE)",
    when: "Annual · May",
    location: "Raleigh, NC",
    description:
      "TICE is Training Industry's annual flagship event for corporate learning and development leaders — focused on the business side of L&D, not just the craft. Sessions draw on Training Industry's extensive research into what separates high-performing L&D functions from the rest. For instructional designers who want to understand how training organizations are structured, how decisions get made, and how to build influence with business stakeholders, TICE offers a perspective you won't find at most ID-focused conferences.",
    href: "https://trainingindustry.com/tice/",
    tags: ["Annual", "In-Person", "May", "Raleigh", "Corporate L&D"],
    highlights: [
      "Research-driven content from Training Industry's benchmark studies",
      "Focus on L&D strategy, measurement, and business alignment",
      "Connects instructional designers with learning leaders and decision-makers",
      "Covers vendor management, sourcing, and building L&D capability",
      "Ideal for mid-career and senior IDs growing into L&D leadership roles",
    ],
    icon: (
      <Image
        src="/logos/training-industry-logo.png"
        alt="Training Industry Logo"
        width={64}
        height={32}
        className="object-contain"
      />
    ),
  },
  {
    rank: 7,
    org: "SXSW",
    name: "SXSW EDU",
    when: "Annual · March",
    location: "Austin, TX",
    description:
      "SXSW EDU is unlike any other event in the L&D world. Held during the broader SXSW week in Austin, it draws educators, EdTech founders, designers, policymakers, and learning innovators into a creative, fast-moving environment where the adjacent possible gets explored openly. It's less focused on practical tooling and more on emerging ideas, systemic change, and where learning is headed. For IDs who feel constrained by the same conversations at traditional conferences, SXSW EDU is a productive disruption.",
    href: "https://sxswedu.com/",
    tags: ["Annual", "In-Person", "March", "Austin", "Innovation"],
    highlights: [
      "Creative, disruptive environment unlike traditional L&D conferences",
      "Strong EdTech startup and innovation presence",
      "Crossover with technology, design thinking, and future-of-work conversations",
      "Ideal for IDs interested in emerging models and systemic learning challenges",
      "Access to the full SXSW week ecosystem — music, tech, and culture",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
]

function FeaturedCard({ card }: { card: FeaturedConference }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-edge bg-[var(--surface-2)] p-5">
      {/* Org name */}
      <p className="text-[13px] font-bold text-copy-dim">{card.org}</p>

      {/* Conference name */}
      <p className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-heading">
        {card.name}
      </p>

      {/* Timing badge */}
      <span className="mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-[var(--accent-glow)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
        {card.when}
      </span>

      {/* Description */}
      <p className="mt-3 flex-1 overflow-hidden line-clamp-[10] text-xs font-medium leading-relaxed text-copy-muted">
        {card.description}
      </p>

      {/* Learn More */}
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
      >
        Learn More
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  )
}

export default function ConferencesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        title="Top Instructional Design Conferences"
        subtitle="The events worth attending — to grow your skills, build your network, and stay current in the field."
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            Conferences are one of the fastest ways to level up as an instructional designer —
            not just for the sessions, but for the conversations in the hallways, the demos on
            the expo floor, and the practitioners you meet who are solving the same problems
            you are. Below are the events the IDC community returns to year after year, curated
            for working professionals who want to invest their conference budget wisely.
          </p>
        </ScrollReveal>
      </section>

      {/* ─── Featured Conferences ──────────────────────────────────────────────── */}
      <section className="border-t border-edge bg-surface py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                Featured Conferences
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {featuredConferences.map((card, i) => (
              <ScrollReveal key={card.name} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4} className="h-full sm:aspect-square">
                <FeaturedCard card={card} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Full Conference List ──────────────────────────────────────────────── */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
              Top Instructional Design Conferences
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              These are the events most worth your time — ranked by reputation, relevance to
              instructional designers, and long-term community value. Whether you&rsquo;re
              attending your first conference or choosing where to focus your professional
              development budget, this list is a good place to start.
            </p>
          </ScrollReveal>

          <div className="mt-14 space-y-12">
            {conferences.map((conf, i) => (
              <ScrollReveal key={conf.rank} delay={(Math.min((i % 4) + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className={`flex flex-col gap-6 sm:flex-row sm:items-start ${i > 0 ? "border-t border-edge pt-12" : ""}`}>

                  {/* Icon + rank */}
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <div
                      className="flex items-center justify-center rounded-xl bg-[var(--surface-2)] border border-edge text-accent"
                      style={{ width: 80, height: 80, minWidth: 80, minHeight: 80 }}
                    >
                      {conf.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-copy-dim">
                      #{conf.rank} Ranked
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                      {conf.org}
                    </p>
                    <h3 className="mt-1.5 text-xl font-extrabold leading-snug text-heading sm:text-2xl">
                      {conf.name}
                    </h3>

                    {/* Tags row */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {conf.tags.map((tag) => (
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
                      {conf.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {conf.highlights.map((item) => (
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
                      href={conf.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-lg border border-edge px-4 py-2 text-sm font-semibold text-copy-muted btn-shadow-neutral hover:border-edge-hover hover:text-copy"
                    >
                      Visit Conference
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
    </>
  )
}
