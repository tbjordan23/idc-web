import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Image from "next/image"

export const metadata: Metadata = generatePageMetadata({
  title: "Top Instructional Design Degrees & Programs",
  description:
    "Explore top-rated instructional design degree programs and certificate options. Compare MS, MEd, EdD, and PhD programs at leading universities — many available fully online.",
  path: "/instructionaldesigndegree",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the top instructional design degree programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Top instructional design programs offer degrees at the master's (MS, MEd) and doctoral (PhD, EdD) levels in instructional design, instructional technology, and learning design. Many programs are available fully online. Leading programs are offered at universities such as Indiana University, Florida State University, Utah State University, and Purdue University.",
      },
    },
    {
      "@type": "Question",
      name: "What degree do I need to become an instructional designer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most instructional design positions require at minimum a bachelor's degree, with many professional roles preferring a master's degree in instructional design, instructional technology, or a related field. Common graduate credentials include the MS, MEd, and professional certificates. Senior and academic roles often require a PhD or EdD.",
      },
    },
    {
      "@type": "Question",
      name: "Are there online instructional design degree programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many accredited universities offer fully online instructional design degree programs at the master's and doctoral levels. Programs are available through institutions such as Utah State University, Purdue University, the University of San Diego, and many others.",
      },
    },
  ],
}

type FeaturedCard = {
  school: string
  program: string
  logo: string | null
  logoAlt: string | null
  description: string
  href: string
}

const featuredDegrees: FeaturedCard[] = [
  {
    school: "University of San Diego",
    program: "MS in Learning Design and Technology",
    logo: "/logos/usd-logo.png",
    logoAlt: "University of San Diego logo",
    description:
      "USD's fully online MS-LDT prepares students for careers in the instructional design industry through a project-based curriculum grounded in industry-leading best practices.",
    href: "https://onlinedegrees.sandiego.edu/masters-learning-design-technology/",
  },
  {
    school: "Langevin",
    program: "Certified Virtual Instructional Designer/Developer",
    logo: "/logos/langevin-logo.png",
    logoAlt: "Langevin logo",
    description:
      "Langevin's CVIDD certification teaches professionals to design engaging virtual training using a proven 12-step process, backed by more than 35 years of instructional design expertise.",
    href: "https://www.langevin.com/certified-virtual-instructional-designer-developer/",
  },
  {
    school: "Utah State University",
    program: "Instructional Technology & Learning Sciences",
    logo: "/logos/utah-state-logo.png",
    logoAlt: "Utah State University logo",
    description:
      "USU's ITLS programs are ranked among the top instructional design programs in the nation by U.S. News & World Report, offering certificates through PhD, online and on-campus.",
    href: "https://itls.usu.edu/",
  },
]

const featuredCertificates: FeaturedCard[] = [
  {
    school: "Langevin Learning Services",
    program: "Certified Virtual Instructional Designer/Developer (CVIDD)",
    logo: "/logos/langevin-logo.png",
    logoAlt: "Langevin logo",
    description:
      "A hands-on certification using Langevin's proven 12-step design process for creating engaging, high-impact virtual training.",
    href: "https://www.langevin.com/certified-virtual-instructional-designer-developer/",
  },
  {
    school: "Association for Talent Development (ATD)",
    program: "Instructional Design Certificate",
    logo: "/logos/atd-logo.webp",
    logoAlt: "ATD logo",
    description:
      "Foundational certificate covering needs assessment, instructional sequencing, and adult learning principles for performance-focused training design.",
    href: "https://www.td.org/education-courses/instructional-design-certificate",
  },
  {
    school: "Association for Talent Development (ATD)",
    program: "ATD Master Trainer Program",
    logo: "/logos/atd-logo.webp",
    logoAlt: "ATD logo",
    description:
      "Advanced program for experienced practitioners covering analysis, design, development, implementation, and evaluation of complex learning programs.",
    href: "https://www.td.org/education-courses/atd-master-trainer-program?utm_source=google&utm_medium=cpc&utm_campaign=edu-master-engagement-ongoing-branded-mastertrainer",
  },
  {
    school: "Association for Talent Development (ATD)",
    program: "Certified Professional in Talent Development (CPTD)",
    logo: "/logos/atd-logo.webp",
    logoAlt: "ATD logo",
    description:
      "ATD's premier credential for talent development professionals with five or more years of experience, validating expertise across ID, learning tech, and organizational effectiveness.",
    href: "https://www.td.org/certification",
  },
]

const rankedPrograms = [
  {
    rank: 1,
    school: "Indiana University Bloomington",
    program: "Instructional Systems Technology",
    logo: "/logos/indiana-logo.png",
    logoAlt: "Indiana University logo",
    description:
      "Indiana University's Department of Instructional Systems Technology prepares practitioners and researchers to design, develop, and evaluate learning systems across diverse organizational contexts. Grounded in cognitive science, learning theory, and systems thinking, the IST program emphasizes real-world application and research-informed practice. Graduate offerings span certificate, MS, EdS, and PhD levels, with multiple online pathways available.",
    href: "https://education.indiana.edu/programs/instructional-systems-technology.html",
    offerings: "Certificate, MS, EdS, PhD — online and on-campus",
  },
  {
    rank: 2,
    school: "Florida State University",
    program: "Instructional Systems and Learning Technologies",
    logo: "/logos/florida-state-logo.png",
    logoAlt: "Florida State University logo",
    description:
      "Florida State University's Instructional Systems and Learning Technologies (ISLT) program is nationally recognized for preparing professionals who drive innovation in learning design, emerging technologies, and performance improvement. Graduates pursue careers in corporate training, higher education, government, and nonprofit sectors. The curriculum integrates instructional design theory, applied research, and emerging technology practice.",
    href: "https://annescollege.fsu.edu/instructional-systems-and-learning-technologies",
    offerings: "Certificate, MS, PhD — online and on-campus",
  },
  {
    rank: 3,
    school: "University of Georgia",
    program: "Learning, Design & Technology",
    logo: "/logos/georgia-logo.png",
    logoAlt: "University of Georgia logo",
    description:
      "The University of Georgia's Learning, Design, and Technology program develops professionals with a deep understanding of human learning, motivation, and the instructional conditions that support effective performance. Students engage with research-grounded theory while building applied skills in instructional design, educational technology, and performance improvement. Graduate pathways include certificates, MEd, MA, and PhD degrees.",
    href: "https://online.uga.edu/degrees-certificates/med-learning-design-technology-instructional-design-development/",
    offerings: "Certificate, MEd, MA, PhD — online and on-campus",
  },
  {
    rank: 4,
    school: "Purdue University",
    program: "Learning Design and Technology",
    logo: "/logos/purdue-logo.png",
    logoAlt: "Purdue University logo",
    description:
      "Purdue University's Learning Design and Technology program prepares scholars and practitioners to serve as outstanding educators and leaders in the field. The curriculum integrates instructional pedagogy, learning theory, and educational technology to equip graduates who can design, implement, and evaluate effective learning experiences for diverse audiences in corporate, academic, and non-profit settings.",
    href: "https://education.purdue.edu/graduate-students/graduate-programs/learning-design-and-technology/",
    offerings: "MS, PhD — online and on-campus",
  },
  {
    rank: 5,
    school: "Utah State University",
    program: "Instructional Technology and Learning Sciences",
    logo: "/logos/utah-state-logo.png",
    logoAlt: "Utah State University logo",
    description:
      "Utah State University's Instructional Technology and Learning Sciences department has been consistently ranked among the top instructional design programs in the nation by U.S. News & World Report. The ITLS program offers rigorous, research-grounded graduate training with flexible study options from certificate and MS through EdS and PhD, available online and on-campus.",
    href: "https://itls.usu.edu/",
    offerings: "Certificate, MS, MEd, EdS, PhD — online and on-campus",
  },
  {
    rank: 6,
    school: "Michigan State University",
    program: "Educational Psychology and Educational Technology",
    logo: "/logos/michigan-state-logo.png",
    logoAlt: "Michigan State University logo",
    description:
      "Michigan State University's Educational Psychology and Educational Technology (EPET) program prepares educators, designers, and researchers to develop technology-enhanced learning environments grounded in the science of human development and motivation. Drawing on current theories of learning and cognition, the program bridges research and practice for professionals across K–12, higher education, and corporate settings.",
    href: "https://education.msu.edu/cepse/ed-tech",
    offerings: "Certificate, MA, PhD — online and on-campus",
  },
]

/** Square card — logo top, school name, program title, Learn More at bottom */
function FeaturedCard({ card }: { card: FeaturedCard }) {
  return (
    <div className="aspect-square flex flex-col rounded-lg border border-edge bg-surface p-5">
      {/* Logo */}
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className="mb-3 shrink-0 self-start"
      >
        <div
          className="flex items-center justify-center overflow-hidden rounded bg-white shadow-sm"
          style={{ width: 44, height: 44, minWidth: 44, minHeight: 44 }}
        >
          {card.logo ? (
            <Image
              src={card.logo}
              alt={card.logoAlt ?? card.school}
              width={44}
              height={44}
              className="h-full w-full object-contain p-1"
            />
          ) : (
            <span className="text-sm font-extrabold text-accent">
              {card.school.charAt(0)}
            </span>
          )}
        </div>
      </a>

      {/* School name — 1px larger than xs */}
      <p className="text-[13px] font-bold text-copy-dim">{card.school}</p>

      {/* Program title — 3px above school name */}
      <p className="mt-1 flex-1 text-[16px] font-bold leading-snug text-heading">
        {card.program}
      </p>

      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
      >
        Learn More
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  )
}

export default function IDDegreePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        title="Top Instructional Design Degrees & Programs"
        subtitle="Find the degree or certificate program that fits where you are now — and where you want to go."
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-base font-medium leading-relaxed text-copy-muted">
            Most institutions offer instructional design degree programs at the graduate level — MS, MEd, and PhD are the most common. Many programs can be completed entirely online, or at least partially from a distance, making it easier than ever to earn a credential without uprooting your life. Below are IDC&rsquo;s top-rated instructional design programs and degrees, curated for working professionals and career changers who want to build real expertise in the field.
          </p>
        </ScrollReveal>
      </section>

      {/* ─── Featured Degree Programs ──────────────────────────────────────────── */}
      <section className="border-t border-edge py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Featured Degree Programs
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {featuredDegrees.map((card, i) => (
              <ScrollReveal key={card.program} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <FeaturedCard card={card} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Top Ranked University Programs ───────────────────────────────────── */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-xl font-extrabold tracking-tight text-heading sm:text-2xl">
              Top Instructional Design Degree Programs
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-copy-muted">
              Globally, multiple universities offer instructional design degree programs at the graduate level. The programs below are among the most recognized and well-regarded in the field, based on program quality, research output, faculty expertise, and graduate outcomes.
            </p>
          </ScrollReveal>

          <div className="mt-14 space-y-12">
            {rankedPrograms.map((prog, i) => (
              <ScrollReveal key={prog.rank} delay={(Math.min((i % 4) + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className={`flex flex-col gap-6 sm:flex-row sm:items-start ${i > 0 ? "border-t border-edge pt-12" : ""}`}>

                  {/* Logo + rank — fixed-size box, no flex influence on image */}
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <a href={prog.href} target="_blank" rel="noopener noreferrer">
                      <div
                        className="flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm"
                        style={{ width: 80, height: 80, minWidth: 80, minHeight: 80 }}
                      >
                        <Image
                          src={prog.logo}
                          alt={prog.logoAlt}
                          width={68}
                          height={68}
                          className="object-contain"
                          style={{ display: "block", width: 68, height: 68 }}
                        />
                      </div>
                    </a>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-copy-dim">
                      Ranked #{prog.rank}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                      {prog.school}
                    </p>
                    <h3 className="mt-1.5 text-xl font-extrabold leading-snug text-heading sm:text-2xl">
                      {prog.program}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-copy-dim">{prog.offerings}</p>
                    <div className="mt-3 h-0.5 w-8 rounded bg-accent opacity-60" />
                    <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
                      {prog.description}
                    </p>
                    <a
                      href={prog.href}
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

      {/* ─── Featured Certificate Programs ────────────────────────────────────── */}
      <section className="border-t border-edge bg-surface py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Featured Certificate Programs
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {featuredCertificates.map((card, i) => (
              <ScrollReveal key={card.program} delay={(Math.min((i % 4) + 1, 4)) as 1 | 2 | 3 | 4}>
                <FeaturedCard card={card} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
