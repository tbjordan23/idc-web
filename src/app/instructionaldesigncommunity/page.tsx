import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Link from "next/link"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Community",
  description:
    "Join the Instructional Design Central community. Connect with instructional designers worldwide, share resources, and grow your career.",
  path: "/instructionaldesigncommunity",
})

const features = [
  {
    title: "Connect, Learn, and Share",
    description:
      "Connect, learn, and share with hundreds of instructional design related professionals around the globe.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    gradient: "from-accent/20 to-accent/5",
    accent: "text-accent",
  },
  {
    title: "Free Templates and Courses",
    description:
      "Access free instructional design templates and micro-courses to help you get ahead and grow in your career.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    gradient: "from-accent-2/20 to-accent-2/5",
    accent: "text-accent-2",
  },
  {
    title: "Free Events and Support",
    description:
      "Join free events, and ask questions from the pros to get just-in-time support on current learning design topics.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: "from-accent/20 to-accent-2/10",
    accent: "text-accent",
  },
]

const highlights = [
  {
    stat: "10,000+",
    label: "Community Members",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    stat: "100%",
    label: "Free to Join",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    stat: "Global",
    label: "Reach Worldwide",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    stat: "Active",
    label: "Daily Discussions",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
]

export default function CommunityPage() {
  return (
    <>
      <Hero
        title="Instructional Design Central Community"
        subtitle="Connect with instructional designers from around the world."
        cta={{ label: "Join for Free", href: "https://instructional-design-central.mn.co/", target: "_blank" }}
        secondaryCta={{ label: "Sign In", href: "https://instructional-design-central.mn.co/sign_in?from=https%3A%2F%2Finstructional-design-central.mn.co%2F", target: "_blank" }}
      />

      {/* Intro paragraph */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            Whether you&rsquo;re a seasoned instructional designer, a transitioning teacher, or brand new to the field of learning design, our community will provide you with the networking platform, content, and resources you need to get ahead in the field. Join our vibrant community of like-minded individuals who are passionate about creating brilliant learning experiences. Together, we collaborate, learn, share insights, and empower each other to inspire learners all around the world!
          </p>
        </ScrollReveal>
      </section>

      {/* Feature cards */}
      <section className="border-y border-edge bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Community Features</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Everything You Need to Grow
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={(i + 1) as 1 | 2 | 3} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-edge bg-surface-2 p-8 shadow-card transition-all duration-200 hover:border-edge-hover hover:shadow-card-hover">
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} ${feature.accent}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-heading">
                    {feature.title}
                  </h3>
                  <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
                  <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-copy-muted">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {highlights.map((h, i) => (
            <ScrollReveal key={h.label} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="rounded-card border border-edge bg-surface p-6 text-center shadow-card">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-glow)] text-accent">
                  {h.icon}
                </div>
                <p className="text-2xl font-extrabold tracking-tight text-heading">{h.stat}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-copy-muted">{h.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* What you get list */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <ScrollReveal>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Why Join</p>
              <h2
                className="mt-2 font-extrabold tracking-tight text-heading"
                style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
              >
                A Community Built for ID Professionals
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-copy-muted">
                The IDC Community is the go-to networking and learning hub for instructional designers at every stage of their career. Whether you have a quick question or want deep collaboration, you&rsquo;ll find your people here.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Network with thousands of ID professionals globally",
                  "Get answers from experienced designers and thought leaders",
                  "Access exclusive templates, tools, and micro-courses",
                  "Stay current with free live events and webinars",
                  "Share your work and get meaningful feedback",
                  "Find job leads and career growth opportunities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)]">
                      <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-copy-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="rounded-card border border-edge bg-surface-2 p-10 shadow-card">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">Ready to Join?</p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-heading">
                  It&rsquo;s Free — Always
                </h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-copy-muted">
                  Membership is completely free. Sign up in seconds and start connecting with the instructional design community today.
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="https://instructional-design-central.mn.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
                  >
                    <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Join the Community — Free
                  </a>
                  <a
                    href="https://instructional-design-central.mn.co/sign_in?from=https%3A%2F%2Finstructional-design-central.mn.co%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-edge px-6 py-3 text-sm font-semibold text-copy-muted btn-shadow-neutral hover:border-edge-hover hover:text-copy"
                  >
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Already a Member? Sign In
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
