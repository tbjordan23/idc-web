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
    org: "Association for Talent Development (ATD)",
    name: "ATD International Conference & EXPO",
    description:
      "The world's largest talent development event. ATD ICE brings together 10,000+ L&D professionals from 80+ countries for 350+ sessions spanning instructional design, eLearning, AI in learning, leadership development, coaching, and performance consulting. The expo floor alone — 300+ exhibitors — is worth the trip.",
    href: "https://atdconference.td.org/",
    when: "Annual · May · Los Angeles",
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
    org: "eLearning Guild",
    name: "Learning Solutions Conference",
    description:
      "Learning Solutions is the eLearning Guild's spring conference — practical, applied, and accessible. It's the right size to actually make connections, with sessions focused on real ID work rather than trend-chasing. A great first conference for early-career designers and a reliable annual reset for experienced practitioners.",
    href: "https://www.learningsolutionscon.com/",
    when: "Annual · March · Orlando",
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
    rank: 2,
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
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
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
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
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
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    rank: 5,
    org: "International Society for Performance Improvement",
    name: "ISPI Annual Performance Improvement Conference",
    when: "Annual · Spring",
    location: "Varies",
    description:
      "ISPI's annual conference is the most analytically rigorous event in the field — and the most underattended by people who would benefit from it. Where most L&D conferences focus on design and delivery, ISPI centers the conversation on performance: diagnosing the real causes of gaps, evaluating whether interventions actually worked, and thinking beyond training to systemic solutions. For instructional designers who want to evolve into performance consultants or senior L&D strategists, this is the conference that sharpens your thinking most.",
    href: "https://www.ispi.org/conference",
    tags: ["Annual", "In-Person", "Performance Consulting", "Niche"],
    highlights: [
      "Most analytically rigorous conference in the L&D field",
      "Deep focus on performance improvement beyond just training solutions",
      "Attended by senior IDs, performance consultants, and L&D strategists",
      "Evidence-based, research-to-practice sessions with real case studies",
      "Small, intimate format — easier to build meaningful connections",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    rank: 6,
    org: "Online Learning Consortium",
    name: "OLC Innovate",
    when: "Annual · April",
    location: "Varies",
    description:
      "OLC Innovate is the premier conference for online and blended learning in higher education — and increasingly relevant for instructional designers working in academic contexts or transitioning between corporate and higher ed. Sessions are research-grounded and peer-reviewed, covering instructional design, accessibility, equity-centered design, faculty development, and the pedagogy of online learning. The hybrid format makes attendance accessible from anywhere.",
    href: "https://onlinelearningconsortium.org/attend-2/olc-innovate/",
    tags: ["Annual", "In-Person", "Virtual", "Hybrid", "April", "Higher Ed"],
    highlights: [
      "Premier conference for online and blended learning in higher education",
      "Peer-reviewed, research-backed sessions on pedagogy and learning design",
      "Strong focus on accessibility, equity, and inclusive design practices",
      "Hybrid format supports both in-person and fully virtual participation",
      "Ideal for IDs working in or transitioning to higher education contexts",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
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
