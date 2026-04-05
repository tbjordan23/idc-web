import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Courses",
  description:
    "Explore top-rated online instructional design courses at Instructional Design Central. From beginner foundations to advanced ADDIE model training, our interactive, certificate-based courses feature practical templates, AI tools, and real-world application to help you design impactful learning experiences.",
  path: "/instructional-design-courses",
})

const courses = [
  {
    title: "Instructional Design Foundations",
    description:
      "Instructional Design Foundations is a beginner-friendly course that teaches you the core principles, language, and practices of instructional design—giving you the confidence to start creating effective learning experiences from day one.",
    href: "/instructional-design-course",
    image: "/course-id-foundations.png",
    imageAlt: "Student working on instructional design course",
    tag: "Foundations",
  },
  {
    title: "Mastering the ADDIE Model",
    description:
      "This practical course walks you step-by-step through the ADDIE framework—widely recognized as the gold standard in instructional design—giving you the skills to confidently design and build effective courses that work!",
    href: "/addie-model-course",
    image: "/course-addie-model.png",
    imageAlt: "Professional learning the ADDIE model",
    tag: "ADDIE",
  },
]

const instructorCredentials = [
  "Founder and Owner of Instructional Design Central (IDC)",
  "Adjunct Faculty at Brigham Young University in the Instructional Psychology and Technology Department",
  "Product leader at Adobe",
  "15 years experience designing, developing, and delivering learning experiences and products",
  "Former Head of Learning for two global organizations",
  "Expert trainer, presenter, and consultant",
  "Master of Science (M.S.) in Instructional Technology from Utah State University",
]

const courseTiles = [
  {
    stat: "2,500+",
    label: "Enrollments",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    stat: "Affordable",
    label: "Cost",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    stat: "Certified",
    label: "Learning",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

export default function CoursesPage() {
  return (
    <>
      <Hero
        title="Instructional Design Courses and Certificates"
        subtitle="Online courses designed for instructional designers at every level."
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center text-base font-medium leading-relaxed text-copy-muted">
            Welcome to Instructional Design Central courses—your go-to destination for building and
            advancing your instructional design expertise. Start with Instructional Design Foundations
            to learn the core principles and confidently step into the field, then dive into Mastering
            the ADDIE Model to master a full-cycle framework for designing impactful learning
            experiences. Both courses are packed with interactive content, professional certifications,
            practical templates, and tools to help you apply what you learn in real time. It&rsquo;s
            everything you need to grow your skills—and your career—in instructional design.
          </p>
        </ScrollReveal>
      </section>

      {/* Stat tiles */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {courseTiles.map((tile) => (
              <div key={tile.label} className="flex flex-col items-center rounded-card border border-edge bg-surface p-8 text-center shadow-card">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
                  {tile.icon}
                </div>
                <p className="text-2xl font-extrabold tracking-tight text-heading">{tile.stat}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-copy-muted">{tile.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Course listings */}
      <section className="border-t border-edge">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {courses.map((course, i) => (
            <ScrollReveal key={course.href} delay={1}>
              <div className={`flex flex-col gap-10 py-16 lg:flex-row lg:items-center lg:gap-16 ${i > 0 ? "border-t border-edge" : ""}`}>
                {/* Image */}
                <div className="w-full shrink-0 overflow-hidden rounded-card lg:w-80">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card">
                    <Image
                      src={course.image}
                      alt={course.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 320px"
                      onError={undefined}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    {course.tag}
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-heading">
                    {course.title}
                  </h2>
                  <div className="mt-3 h-0.5 w-8 rounded bg-accent opacity-60" />
                  <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
                    {course.description}
                  </p>
                  <Link
                    href={course.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
                  >
                    Learn More
                    <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About the Instructor */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
              {/* Text + inline photo header */}
              <div className="flex-1">
                {/* Photo sits left of the three header lines */}
                <div className="flex items-center gap-5">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-edge shadow-card">
                    <Image
                      src="/travis-jordan.jpg"
                      alt="Travis Jordan, Founder and Owner of Instructional Design Central"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">Meet Your Teacher</p>
                    <h2
                      className="mt-1 font-extrabold tracking-tight text-heading"
                      style={{ fontSize: "clamp(18px,2.5vw,26px)", letterSpacing: "-0.04rem" }}
                    >
                      About the Instructor
                    </h2>
                    <p className="mt-0.5 text-base font-bold text-copy">Travis Jordan</p>
                  </div>
                </div>
                <div className="mt-4 h-0.5 w-8 rounded bg-accent opacity-60" />
                <ul className="mt-6 space-y-3">
                  {instructorCredentials.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-glow)]">
                        <svg className="h-3 w-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm font-medium leading-relaxed text-copy-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
