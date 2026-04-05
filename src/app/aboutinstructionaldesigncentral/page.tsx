import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = generatePageMetadata({
  title: "Resources, Community and Content",
  description:
    "Learn about Instructional Design Central (IDC) — our mission, story, and the team behind the #1 resource hub for instructional designers.",
  path: "/aboutinstructionaldesigncentral",
})

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About IDC"
        subtitle="Our mission is to help course designers create brilliant learning experiences."
      />

      {/* Our Story */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-xl font-extrabold tracking-tight text-heading">Our Story</h2>
          <div className="mt-6 space-y-6 text-base font-medium leading-relaxed text-copy-muted">
            <p>
              IDC was created to provide instructional design and learning design related professionals
              access to brilliant resources, tools, and content so that they can be successful in their
              career and education.
            </p>
            <p>
              Instructional Design Central (IDC) is also a vibrant community that connects over 40,000
              instructional design related professionals across its platforms in more than 20 countries
              worldwide.
            </p>
            <p>
              Instructional Design Central (IDC) is a privately owned and operated company launched in
              2011 out of Saratoga Springs, Utah in the shadows of Silicon Slopes.
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
                  Travis founded Instructional Design Central (IDC) in 2011 with the vision of
                  supporting instructional design professionals and students by providing access to
                  industry insights, valuable resources, and opportunities for connection and
                  collaboration. Today, IDC serves a global community of over 40,000 instructional
                  design professionals across more than 20 countries.
                </p>
                <p>
                  With over 15 years of experience in the learning and development industry, Travis
                  has held a variety of roles across corporate, non-profit, and academic sectors. He
                  has served as Head of Learning for two large global organizations, where he led
                  learning strategy, development, and operations. As an experienced consultant and
                  coach, he is passionate about empowering instructional designers and learning
                  leaders to thrive in their careers.
                </p>
                <p>
                  In addition to his work in learning and development, Travis has several years of
                  experience as a Product Leader in the high-tech sector, including roles at companies
                  such as Adobe. He holds a Master of Science (MS) degree in Instructional Technology
                  from Utah State University.
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
