import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Free Needs Analysis App — IDC Needs Analysis App",
  description:
    "Download IDC's free Needs Analysis App for iPhone and iPad. Create, publish, and share a beautiful learning needs analysis in minutes — no spreadsheets required.",
  path: "/needs-analysis-app",
})

const APP_STORE_URL = "https://apps.apple.com/us/app/instructional-design/id1442176277"

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the IDC Needs Analysis App?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IDC Needs Analysis App is a free mobile app for iPhone and iPad that guides instructional designers through a step-by-step needs analysis process, then lets you export and share the finished analysis as a polished PDF report.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Needs Analysis App free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Needs Analysis App is completely free to download from the App Store, with no account or email required, and you can create unlimited needs analysis projects.",
      },
    },
    {
      "@type": "Question",
      name: "Is the Needs Analysis App available on Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Needs Analysis App is currently available on the Apple App Store for iPhone and iPad.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a needs analysis take in the app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most learning professionals can build a complete, industry-aligned needs analysis in the app in about 5 to 10 minutes, then export it as a shareable PDF report.",
      },
    },
  ],
}

const steps = [
  {
    step: "1",
    heading: "Download",
    text: "Grab the free app from the App Store on your iPhone or iPad. No account, no email, no credit card.",
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
  {
    step: "2",
    heading: "Create",
    text: "Work through a guided, step-by-step flow that prompts you for exactly what a strong needs analysis needs — no blank page, no guesswork.",
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    step: "3",
    heading: "Share",
    text: "Export a clean, professional PDF report and send it straight to your team, your client, or your stakeholders.",
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
]

const benefits = [
  { label: "100% Free to Download" },
  { label: "5–10 Minute Reports" },
  { label: "Unlimited Projects" },
  { label: "Export to PDF" },
]

const testimonials = [
  {
    name: "Jake",
    role: "Developer",
    quote:
      "There&rsquo;s nothing else like this in the App Store. The interface is clean and streamlined, and it gives me everything I need to quickly gather the needs of my audience and export a professional report for my team.",
  },
  {
    name: "Jason",
    role: "Designer / Author",
    quote:
      "Amazing app! The Needs Analysis App is my go-to resource to flesh out my thinking for learning strategies. The prompts and share-ability are a must. Thank you!",
  },
]

const appStoreBadge = (
  <a
    href={APP_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2.5 rounded-lg bg-black px-6 py-3 text-white btn-shadow-neutral transition-transform hover:scale-[1.02]"
  >
    <svg className="h-7 w-7" viewBox="0 0 384 512" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 35-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.4z" />
    </svg>
    <span className="flex flex-col items-start leading-none">
      <span className="text-[10px] font-medium uppercase tracking-wide">Download on the</span>
      <span className="text-xl font-semibold leading-tight" style={{ fontFamily: "system-ui" }}>App Store</span>
    </span>
  </a>
)

export default function NeedsAnalysisApp() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        eyebrow="Free Mobile App"
        title="IDC Needs Analysis App"
        subtitle="Great learning design starts with a needs analysis — and it doesn&rsquo;t have to take forever. Create, publish, and share a beautiful needs analysis right from your phone."
        cta={{ label: "Download Free", href: APP_STORE_URL, target: "_blank" }}
        secondaryCta={{ label: "Learn About Needs Analysis", href: "/needs-analysis" }}
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            You know a needs analysis matters — it&rsquo;s the foundation every good learning
            solution gets built on. But between client calls, SME interviews, and everything else
            on your plate, it&rsquo;s easy to let it turn into a sprawling document that takes
            way longer than it should. IDC&rsquo;s free Needs Analysis App fixes that.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <p className="mt-6 text-base font-medium leading-relaxed text-copy-muted">
            The app guides you through a simple, step-by-step process right on your iPhone or
            iPad, so you can capture everything you need wherever the conversation happens —
            on a call, in a workshop, or between meetings. When you&rsquo;re done, it turns your
            inputs into a clean, professional report you can export and share in seconds.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-card border border-edge bg-surface p-4 shadow-card"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)]">
                  <svg className="h-4 w-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-bold text-heading">{item.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* How It Works */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-xs font-bold uppercase tracking-widest text-accent">
              How It Works
            </p>
            <h2
              className="mt-2 text-center font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Download, Create, Share
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base font-medium leading-relaxed text-copy-muted">
              Three steps between you and a finished needs analysis — no spreadsheets, no
              templates to wrangle, no starting from a blank page.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {steps.map((s, i) => (
              <ScrollReveal key={s.step} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="flex h-full flex-col items-center rounded-card border border-edge bg-canvas p-6 text-center shadow-card">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-extrabold text-white">
                    {s.step}
                  </div>
                  <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent-glow)]">
                    {s.icon}
                  </div>
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-heading">{s.heading}</h3>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-copy-muted">{s.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={2}>
            <div className="mt-10 flex justify-center">{appStoreBadge}</div>
          </ScrollReveal>
        </div>
      </section>

      {/* App Preview */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">App Details</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              A Complete Needs Analysis in 5–10 Minutes
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              IDC&rsquo;s free needs analysis creator app walks you through an analysis
              that&rsquo;s aligned with industry standards, start to finish, in about 5 to 10
              minutes. Create unlimited projects, then export and share each one as a clean PDF
              report. It&rsquo;s available on the App Store for both iPhone and iPad.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="mt-8 rounded-card border border-edge bg-white p-[7px] shadow-[0_8px_40px_-8px_rgba(0,0,0,0.18)]">
              <Image
                src="/needs-app/IDC-Needs-Analysis-App.avif"
                alt="IDC Needs Analysis App shown on mobile devices — guided needs analysis creation and shareable PDF reports"
                width={1538}
                height={630}
                className="w-full rounded-[5px]"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="mt-8 flex justify-center">{appStoreBadge}</div>
            <p className="mt-4 text-center text-xs text-copy-muted opacity-70">
              100% free &middot; No account required &middot; Unlimited projects
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-xs font-bold uppercase tracking-widest text-accent">
              Loved by Learning Professionals
            </p>
            <h2
              className="mt-2 text-center font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              What People Are Saying
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={((i % 2) + 1) as 1 | 2} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-edge bg-canvas p-6 shadow-card">
                  <svg className="h-7 w-7 text-accent opacity-60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p
                    className="mt-4 flex-1 text-sm font-medium italic leading-relaxed text-copy-muted"
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${t.quote}&rdquo;` }}
                  />
                  <div className="mt-5 h-0.5 w-6 rounded bg-accent opacity-60" />
                  <p className="mt-3 text-sm font-extrabold tracking-wide text-heading">{t.name}</p>
                  <p className="text-xs font-semibold text-copy-muted">{t.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Needs Analysis content cross-link */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 rounded-card border border-edge bg-surface-2 p-10 text-center shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">New to Needs Analysis?</p>
              <h2
                className="font-extrabold tracking-tight text-heading"
                style={{ fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-0.04rem" }}
              >
                Learn the Fundamentals First
              </h2>
              <p className="max-w-md text-sm font-medium leading-relaxed text-copy-muted">
                Not sure where to start? Our guide breaks down gap analysis, learner analysis,
                task analysis, and the data-gathering methods every solid needs analysis is
                built on — so you know exactly what to capture in the app.
              </p>
              <Link
                href="/needs-analysis"
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                Explore Needs Analysis
                <svg className="h-4 w-4 text-white/80 animate-nudge-right" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">FAQ</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.05rem" }}
            >
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="mt-8 space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <ScrollReveal key={faq.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <details className="group rounded-card border border-edge bg-surface shadow-card open:shadow-card-hover">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-bold text-copy transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                    {faq.name}
                    <svg
                      className="h-4 w-4 shrink-0 text-copy-muted transition-transform duration-200 group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="border-t border-edge px-6 pb-6 pt-4">
                    <p className="text-sm font-medium leading-relaxed text-copy-muted">
                      {faq.acceptedAnswer.text}
                    </p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
