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

const featuredPrograms: {
  school: string
  program: string
  logo: string | null
  logoAlt: string | null
  description: string
  href: string
}[] = [
  {
    school: "University of San Diego",
    program: "MS in Learning Design and Technology (MS-LDT)",
    logo: null,
    logoAlt: null,
    description:
      "USD's fully online MS in Learning Design and Technology prepares students to accelerate their careers in the instructional design industry. This project-based graduate program immerses students in industry-leading best practices — from needs assessment to evaluation — equipping them to create engaging, high-impact learning solutions for corporate, healthcare, and higher education environments.",
    href: "https://onlinedegrees.sandiego.edu/masters-learning-design-technology/",
  },
  {
    school: "Langevin",
    program: "Certified Virtual Instructional Designer/Developer (CVIDD)",
    logo: null,
    logoAlt: null,
    description:
      "Langevin's CVIDD certification equips professionals with the core skills to design virtual training that is engaging, interactive, and results-driven. Using Langevin's proven 12-step design process, participants learn to diagnose needs, determine timing parameters, manage critical course constraints, and develop compelling virtual classroom experiences. Backed by more than 35 years of instructional design expertise, this program is recognized as a gold standard in the training industry.",
    href: "https://www.langevin.com/certified-virtual-instructional-designer-developer/",
  },
  {
    school: "Utah State University",
    program: "Instructional Technology & Learning Sciences (ITLS)",
    logo: "/logos/utah-state-logo.png",
    logoAlt: "Utah State University logo",
    description:
      "Utah State University's Instructional Technology & Learning Sciences graduate programs have been recognized among the top instructional design programs in the nation by U.S. News & World Report. The ITLS department offers rigorous graduate training in learning design, educational technology, and research methodology, with flexible online and on-campus pathways at the certificate, MS, MEd, EdS, and PhD levels.",
    href: "https://itls.usu.edu/",
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
    href: "https://education.indiana.edu/programs/graduate/instructional-systems-technology/index.html",
    offerings: "Certificate, MS, EdS, PhD — online and on-campus",
  },
  {
    rank: 2,
    school: "Florida State University",
    program: "Instructional Systems and Learning Technologies",
    logo: "/logos/florida-state-logo.png",
    logoAlt: "Florida State University logo",
    description:
      "Florida State University's Instructional Systems and Learning Technologies (ISLT) program is nationally recognized for preparing professionals who drive innovation in learning design, emerging technologies, and performance improvement. Graduates enter careers in corporate training, higher education, government agencies, and nonprofit organizations. The curriculum integrates instructional design theory, applied research, and emerging technology practice.",
    href: "https://cehhs.fsu.edu/learning-and-instruction/programs",
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
    href: "https://coe.uga.edu/directory/educational-psychology-and-instructional-technology/",
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
    school: "Michigan State University",
    program: "Educational Psychology and Educational Technology",
    logo: "/logos/michigan-state-logo.png",
    logoAlt: "Michigan State University logo",
    description:
      "Michigan State University's Educational Psychology and Educational Technology (EPET) program prepares educators, designers, and researchers to develop technology-enhanced learning environments grounded in the science of human development and motivation. Drawing on current theories of learning and cognition, the program bridges research and practice for professionals working across K–12, higher education, and corporate settings.",
    href: "https://education.msu.edu/cepse/educational-psychology-and-educational-technology/",
    offerings: "Certificate, MA, PhD — online and on-campus",
  },
  {
    rank: 6,
    school: "Utah State University",
    program: "Instructional Technology and Learning Sciences",
    logo: "/logos/utah-state-logo.png",
    logoAlt: "Utah State University logo",
    description:
      "Utah State University's Instructional Technology and Learning Sciences department has been ranked among the top instructional design programs in the nation, according to the latest numbers from U.S. News & World Report. The ITLS program offers a rigorous, research-grounded curriculum with flexible study options — from certificate and MS programs to doctoral degrees — available online and on-campus.",
    href: "https://itls.usu.edu/",
    offerings: "Certificate, MS, MEd, EdS, PhD — online and on-campus",
  },
]

const certificatePrograms = [
  {
    name: "Certified Virtual Instructional Designer/Developer (CVIDD)",
    provider: "Langevin Learning Services",
    description:
      "Langevin's hands-on CVIDD program walks professionals through a proven 12-step process for designing and developing virtual training that engages learners and drives measurable results. Participants learn to apply core ID principles to the virtual environment — from needs analysis and storyboarding to course evaluation and continuous improvement.",
    href: "https://www.langevin.com/certified-virtual-instructional-designer-developer/",
  },
  {
    name: "ATD Designing Learning Certificate",
    provider: "Association for Talent Development (ATD)",
    description:
      "ATD's Designing Learning Certificate provides professionals with the foundational skills to develop powerful, performance-focused training programs. Using a human performance improvement lens, participants learn to conduct needs assessments, analyze job tasks, design instructional sequences, and build courses using proven adult learning principles.",
    href: "https://www.td.org/education/atd-certificate/designing-learning",
  },
  {
    name: "ATD Master Instructional Designer Program",
    provider: "Association for Talent Development (ATD)",
    description:
      "ATD's Master Instructional Designer Program is designed for experienced practitioners ready to deepen their expertise. The program covers instructional analysis, design, development, implementation, and evaluation of learning programs — emphasizing application of emerging design models and alignment with organizational performance goals.",
    href: "https://www.td.org/education/master-instructional-designer",
  },
  {
    name: "Certified Professional in Talent Development (CPTD)",
    provider: "Association for Talent Development (ATD)",
    description:
      "The CPTD is ATD's premier professional credential for talent development professionals with at least five years of experience. It validates competency across instructional design, learning technology, evaluating impact, and organizational effectiveness — signaling a high level of expertise to employers and clients.",
    href: "https://www.td.org/certification",
  },
  {
    name: "eLearning Instructional Design Certificate",
    provider: "eLearning Guild / Guild Academy",
    description:
      "Guild Academy offers focused eLearning training that helps instructional designers develop the technical and creative skills needed to produce compelling digital learning experiences. Programs cover topics including rapid authoring, visual design, learner engagement, and designing for mobile.",
    href: "https://www.learningguild.com/",
  },
  {
    name: "Human Performance Improvement (HPI) Certificate",
    provider: "Association for Talent Development (ATD)",
    description:
      "ATD's Human Performance Improvement Certificate helps instructional designers and learning professionals expand their practice beyond course design to diagnosing performance gaps, identifying root causes, and selecting the right interventions — whether training, job aids, process improvements, or organizational change initiatives.",
    href: "https://www.td.org/education/atd-certificate/human-performance-improvement",
  },
]

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
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                ★ Featured Programs
              </span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
              Featured Degree Programs
            </h2>
            <p className="mt-2 text-sm font-medium text-copy-muted">
              The following programs are featured partner listings from institutions and training providers who have partnered with IDC.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featuredPrograms.map((prog, i) => (
              <ScrollReveal key={prog.program} delay={(Math.min(i + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className="flex h-full flex-col rounded-card border-2 border-accent/30 bg-[var(--surface-2)] p-6 shadow-card">
                  {/* Logo or school initial */}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm">
                    {prog.logo ? (
                      <Image
                        src={prog.logo}
                        alt={prog.logoAlt ?? prog.school}
                        width={56}
                        height={56}
                        className="h-full w-full object-contain p-1"
                      />
                    ) : (
                      <span className="text-lg font-extrabold text-accent">
                        {prog.school.charAt(0)}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-bold uppercase tracking-widest text-accent">
                    {prog.school}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold leading-snug text-heading">
                    {prog.program}
                  </h3>
                  <div className="mt-3 h-0.5 w-8 rounded bg-accent opacity-60" />
                  <p className="mt-4 flex-1 text-sm font-medium leading-relaxed text-copy-muted">
                    {prog.description}
                  </p>
                  <a
                    href={prog.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
                  >
                    Learn More
                    <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Top Ranked University Programs ───────────────────────────────────── */}
      <section className="border-t border-edge py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
              Top Instructional Design Degree Programs
            </h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-copy-muted">
              Globally, multiple universities offer instructional design degree programs at the graduate level. The programs below are among the most recognized and well-regarded in the field, based on program quality, research output, faculty expertise, and graduate outcomes.
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-10">
            {rankedPrograms.map((prog, i) => (
              <ScrollReveal key={prog.rank} delay={(Math.min((i % 4) + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className={`flex flex-col gap-6 sm:flex-row sm:items-start ${i > 0 ? "border-t border-edge pt-10" : ""}`}>
                  {/* Logo */}
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm">
                      <Image
                        src={prog.logo}
                        alt={prog.logoAlt}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain p-1.5"
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-copy-dim">
                      Ranked #{prog.rank}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                      {prog.school}
                    </p>
                    <h3 className="mt-1 text-lg font-extrabold leading-snug text-heading">
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
                      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-edge bg-surface px-4 py-2 text-sm font-semibold text-copy btn-shadow-neutral hover:border-border-hover hover:text-heading"
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

      {/* ─── Certificate Programs ──────────────────────────────────────────────── */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
              Top Instructional Design Certificate Programs
            </h2>
            <p className="mt-3 text-base font-medium leading-relaxed text-copy-muted">
              Multiple organizations offer professional certificates in instructional design and eLearning development. While an advanced degree remains the gold standard for many senior roles, a recognized certificate can provide the foundational skills needed to enter or advance in the field — and is often preferred by employers for mid-career professionals making a transition.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-6">
            {certificatePrograms.map((cert, i) => (
              <ScrollReveal key={cert.name} delay={(Math.min((i % 4) + 1, 4)) as 1 | 2 | 3 | 4}>
                <div className="rounded-card border border-edge bg-[var(--surface-2)] p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent">
                    {cert.provider}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold text-heading">{cert.name}</h3>
                  <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
                  <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
                    {cert.description}
                  </p>
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                  >
                    Learn more
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
