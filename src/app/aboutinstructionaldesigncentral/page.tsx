import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = generatePageMetadata({
  title: "Resources, Community and Content",
  description:
    "Instructional Design Central's (IDC) mission is to provide instructional design professionals access to brilliant resources, content, and networking.",
  path: "/aboutinstructionaldesigncentral",
})

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Instructional Design Central"
        subtitle="We built IDC because great instructional designers deserve a home — with the resources, community, and support to do their best work."
      />

      {/* Our Story */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-xl font-extrabold tracking-tight text-heading">Our Story</h2>
          <div className="mt-6 space-y-6 text-base font-medium leading-relaxed text-copy-muted">
            <p>
              IDC was built on a simple belief: instructional designers do important work, and they deserve real support. We created a place where you can find the tools, knowledge, and community you need to grow — whether you&rsquo;re just starting out or deep into your career.
            </p>
            <p>
              Today, IDC connects over 40,000 professionals across more than 20 countries — a global network of people who care deeply about how learning is designed, built, and delivered.
            </p>
            <p>
              We&rsquo;ve been proudly independent since 2011, launched out of Saratoga Springs, Utah.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Company Leadership */}
      <section className="border-t border-edge bg-surface py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2
              className="font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(24px,4vw,38px)", letterSpacing: "-0.05rem" }}
            >
              Company Leadership
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-10 rounded bg-accent" />
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="mt-12 flex flex-col items-center">
              {/* Photo */}
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-edge shadow-card">
                <Image
                  src="/travis-jordan.jpg"
                  alt="Travis Jordan, Founder and Owner of Instructional Design Central"
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </div>

              {/* Name & title */}
              <p className="mt-6 text-lg italic text-copy-muted">
                Travis Jordan,<br />
                <span className="font-medium">Founder and Owner</span>
              </p>

              {/* Bio */}
              <div className="mt-8 space-y-6 text-base font-medium leading-relaxed text-copy-muted">
                <p>
                  Travis started IDC in 2011 because he saw how isolated instructional designers could feel — without a community, without quality resources, without a real professional home. He wanted to change that. Today, IDC serves over 40,000 professionals across more than 20 countries, and that original mission hasn&rsquo;t changed.
                </p>
                <p>
                  With over 15 years of experience across corporate, non-profit, and academic sectors, Travis has led learning strategy and operations as Head of Learning for two global organizations. He&rsquo;s an experienced consultant, coach, and presenter who genuinely cares about helping instructional designers and learning leaders find their footing — and build something they&rsquo;re proud of.
                </p>
                <p>
                  Outside of IDC, Travis has worked as a Product Leader in tech, including time at Adobe. He holds a Master of Science in Instructional Technology from Utah State University.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contactinstructionaldesigncentral"
                className="mt-12 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact IDC
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
