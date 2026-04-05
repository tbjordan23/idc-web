import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import Hero from "@/components/ui/Hero"
import ScrollReveal from "@/components/ui/ScrollReveal"
import Link from "next/link"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design FAQ",
  description:
    "Answers to the most frequently asked questions about instructional design, learning theory, the ADDIE model, LMS platforms, ID degrees, and more.",
  path: "/faq",
})

const faqs = [
  {
    question: "What is Instructional Design?",
    answer:
      "Instructional design is the process by which learning products and experiences are designed, developed, and delivered. These learning products include online courses, instructional manuals, video tutorials, learning simulations, and more. Instructional designers are the \"architects\" of the learning experience and the \"directors\" of the Instructional Systems Design (ISD) process.",
    link: { label: "Learn more about Instructional Design", href: "/whatisinstructionaldesign" },
  },
  {
    question: "What is an Instructional Designer?",
    answer:
      "An instructional designer is a professional who applies instructional design principles, models, and processes to create effective learning experiences. Instructional designers work across corporate, government, non-profit, and academic sectors to design training programs, eLearning courses, instructor-led training, and other learning solutions.",
    link: { label: "What is Instructional Design?", href: "/whatisinstructionaldesign" },
  },
  {
    question: "What is the ADDIE Model?",
    answer:
      "The ADDIE Model is the most widely used instructional design framework. It stands for Analysis, Design, Development, Implementation, and Evaluation — the five phases of the instructional design process. It provides a systematic approach for designing and developing effective learning experiences.",
    link: { label: "Learn more about the ADDIE Model", href: "/addie-model" },
  },
  {
    question: "What are Instructional Design Models?",
    answer:
      "Instructional design models are frameworks that guide the process of creating effective learning experiences. Popular models include ADDIE, SAM (Successive Approximation Model), Bloom's Taxonomy, Kirkpatrick's Four Levels of Evaluation, and Gagné's Nine Events of Instruction. Each model offers a different approach to structuring the design and development process.",
    link: { label: "View all Instructional Design Models", href: "/instructionaldesignmodels" },
  },
  {
    question: "What is Learning Theory?",
    answer:
      "Learning theory is the study of how people learn and the psychological and cognitive principles behind the learning process. Major learning theories include behaviorism, cognitivism, constructivism, and connectivism. Understanding learning theory is foundational for instructional designers who want to create evidence-based, effective learning experiences.",
    link: { label: "Explore Learning Theory", href: "/learning-theory" },
  },
  {
    question: "What is Adult Learning Theory?",
    answer:
      "Adult learning theory, also known as andragogy, describes how adults learn differently from children. Malcolm Knowles' andragogy model identifies key principles: adults are self-directed, bring prior experience to learning, are ready to learn when they need to, and are motivated by relevance to real life. These principles are essential for instructional designers working in corporate and professional training environments.",
    link: { label: "Explore Adult Learning Theory", href: "/adult-learning-theory" },
  },
  {
    question: "What is a Needs Analysis?",
    answer:
      "A needs analysis is the systematic process of identifying performance gaps and determining the right learning or training solutions to address them. It is a critical first step in the instructional design process and helps ensure that training resources are targeted at real, measurable business or performance needs.",
    link: { label: "Learn about Needs Analysis", href: "/needs-analysis" },
  },
  {
    question: "What are the top Learning Management Systems (LMS)?",
    answer:
      "A Learning Management System (LMS) is a software platform used to create, deliver, manage, and track online learning. Top-rated LMS platforms include Moodle, Canvas, Cornerstone OnDemand, Docebo, TalentLMS, Absorb LMS, and Litmos. The best LMS for your organization depends on your size, budget, and learning needs.",
    link: { label: "View Top Rated LMS", href: "/top-rated-lms" },
  },
  {
    question: "What are the top Instructional Design Conferences?",
    answer:
      "Multiple organizations sponsor and host instructional design and learning development conferences each year. These events focus on eLearning development, curriculum design, education technology, and training development. Key conferences include ATD International Conference, Learning Solutions Conference, DevLearn, and ASTD.",
    link: { label: "View Top ID Conferences", href: "/instructionaldesignconferences" },
  },
  {
    question: "What are the top Instructional Design Degree Programs?",
    answer:
      "Top instructional design programs offer degrees at the bachelor's, master's (MS, MEd), and doctoral (PhD, EdD) levels in instructional design, instructional technology, and learning design. Many programs are available fully online. Leading programs are offered at universities such as Utah State University, Florida State University, Indiana University, and Purdue University.",
    link: { label: "View Top ID Degree Programs", href: "/instructionaldesigndegree" },
  },
  {
    question: "Where can I find Instructional Design Templates?",
    answer:
      "Instructional Design Central offers a comprehensive library of free instructional design templates including ADDIE model templates, storyboard templates, training needs assessment templates, project plan templates, and more. These templates are designed to help instructional designers accelerate their workflow and maintain consistency across projects.",
    link: { label: "Access Free ID Templates", href: "/instructionaldesigntemplates" },
  },
  {
    question: "Where can I find Instructional Design Courses?",
    answer:
      "Instructional Design Central offers professional online courses including Instructional Design Foundations — a beginner-friendly course covering core ID principles — and Mastering the ADDIE Model — a practical, project-based course for applying the ADDIE framework. Both courses include practical templates, AI tools, and professional certifications.",
    link: { label: "View ID Courses", href: "/instructional-design-courses" },
  },
  {
    question: "Where can I find an Instructional Design Community?",
    answer:
      "The Instructional Design Central (IDC) Community connects over 40,000 instructional design professionals across more than 20 countries. It is a free community where members can network, share resources, ask questions, access free events, and collaborate with peers around the globe.",
    link: { label: "Join the IDC Community", href: "/instructionaldesigncommunity" },
  },
  {
    question: "What is the average Instructional Designer Salary?",
    answer:
      "Instructional designer salaries vary based on experience, location, industry, and role type. Entry-level instructional designers typically earn between $45,000–$60,000 per year, while senior and lead designers can earn $80,000–$120,000 or more. Remote and contract roles, as well as corporate sectors, often offer higher compensation.",
    link: { label: "View ID Salary Guide", href: "/instructionaldesignersalary" },
  },
]

// JSON-LD FAQPage schema for AI and search engines
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero
        title="Instructional Design FAQ"
        subtitle="Answers to the most common questions about instructional design, learning theory, tools, and careers."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">FAQ</p>
          <h2
            className="mt-2 font-extrabold tracking-tight text-heading"
            style={{ fontSize: "clamp(20px,3vw,30px)", letterSpacing: "-0.04rem" }}
          >
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <details className="group rounded-card border border-edge bg-surface shadow-card open:shadow-card-hover">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-base font-bold text-copy transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                  {faq.question}
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
                    {faq.answer}
                  </p>
                  {faq.link && (
                    <Link
                      href={faq.link.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover"
                    >
                      {faq.link.label}
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-edge bg-surface py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Get Started</p>
            <h2
              className="mt-2 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(20px,3vw,30px)", letterSpacing: "-0.04rem" }}
            >
              Ready to Dive Deeper?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-copy-muted">
              Explore our courses, join the community, or browse our free resources to advance your instructional design career.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/instructional-design-courses"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Explore Courses
              </Link>
              <Link
                href="/instructionaldesigncommunity"
                className="inline-flex items-center gap-2 rounded-lg border border-edge px-6 py-3 text-sm font-semibold text-copy-muted btn-shadow-neutral hover:border-edge-hover hover:text-copy"
              >
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Join the Community
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
