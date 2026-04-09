import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "What is Instructional Design?",
  description:
    "View definitions for instructional design, educational technology, educational psychology, instructional technology, curriculum design, & instructional systems",
  path: "/whatisinstructionaldesign",
})

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Instructional Design?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional design is the process by which learning products and experiences are designed, developed, and delivered. These learning products include online courses, instructional manuals, video tutorials, learning simulations, and more. Instructional designers are the architects of the learning experience and the directors of the Instructional Systems Design (ISD) process.",
      },
    },
    {
      "@type": "Question",
      name: "What is an Instructional Designer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An instructional designer is a professional who applies instructional design principles, models, and processes to create effective learning experiences. Instructional designers work across corporate, government, non-profit, and academic sectors to design training programs, eLearning courses, instructor-led training, and other learning solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What skills does an instructional designer need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Instructional designers typically need skills in needs analysis, curriculum development, eLearning authoring tools (such as Articulate Storyline or Adobe Captivate), learning management systems (LMS), project management, writing and communication, and an understanding of learning theories such as behaviorism, cognitivism, and constructivism.",
      },
    },
  ],
}

export default function WhatIsIDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContentPage
      eyebrow="The Field"
      title="What is Instructional Design?"
      subtitle="A complete guide to the field, the role, and how to get started."
    >
      <p>
        Instructional design is the craft of creating learning experiences that actually work. If
        you&rsquo;ve ever built a course, designed a training program, or helped someone develop a
        new skill — you&rsquo;ve done instructional design. At its core, it&rsquo;s a systematic
        process for designing, developing, and delivering learning products: online courses, video
        tutorials, training manuals, simulations, and more. Instructional designers are the
        architects behind those experiences — shaping how knowledge gets structured, delivered, and
        retained. You might also hear the terms <em>instructional technology</em>,{" "}
        <em>learning experience (LX) design</em>, <em>curriculum design</em>, and{" "}
        <em>instructional systems design (ISD)</em> — they overlap significantly and are often
        used interchangeably.
      </p>

      {/* ── Instructional Design Definitions ───────────────────────────── */}
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
        Instructional Design Definitions
      </h2>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Instructional design, also known as instructional systems design or instructional
          systems development (ISD), is the practice of creating learning experiences to support
          long term learning. It&rsquo;s a systems approach to analyzing, designing, developing,
          implementing, and evaluating any instructional experience.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.td.org (Association for Talent Development)
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Instructional design (ID), also known as instructional systems design, is the
          practice of systematically designing, developing and delivering instructional materials
          and experiences, both digital and physical, in a consistent and reliable fashion toward
          an efficient, effective, appealing, engaging and inspiring acquisition of knowledge.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.wikipedia.org
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Instructional design is the behind-the-scenes blueprint that shapes how people
          learn. Whether it&rsquo;s an employee onboarding session or an online course for adult
          learners, instructional designers create experiences that are clear, engaging, and
          effective. This field uses a systematic process to analyze learning needs, define goals,
          and create learning materials that support specific learning outcomes.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — education.purdue.edu (Purdue University College of Education, 2024)
        </cite>
      </blockquote>

      {/* ── Educational Technology ──────────────────────────────────────── */}
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
        Educational Technology
      </h2>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Educational technology is the ethical study and application of theory, research,
          and practices to advance knowledge, improve learning and performance, and empower learners
          through strategic design, management, implementation, and evaluation of learning
          experiences and environments using appropriate processes and resources.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.aect.org (Association for Educational Communications and Technology, 2023 Definition Task Force)
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Educational technologies refer to the set of digital tools, resources,
          applications, and methodologies used to facilitate the teaching&ndash;learning process.
          These technologies include software, online platforms, hardware devices (such as tablets,
          computers, and interactive whiteboards), and assistive technologies, all aimed at
          improving access to education, personalizing learning paths, and fostering a more dynamic
          interaction between students and teachers.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.wikipedia.org
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Education Technology (EdTech) is the strategic integration of digital tools,
          software, and hardware into the learning environment to enhance pedagogical outcomes.
          The integration of digital tools such as interactive software, cloud-based platforms,
          and adaptive learning systems has shifted traditional educational models towards more
          personalized, flexible, and engaging learning experiences.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — research.com
        </cite>
      </blockquote>

      {/* ── Learning Experience (LX) Design ────────────────────────────── */}
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
        Learning Experience (LX) Design
      </h2>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Learning experience design is the process of creating learning experiences that
          enable the learner to achieve the desired learning outcome in a human-centered and
          goal-oriented way.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.lxd.org (Niels Floor, pioneer of the LXD discipline)
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;At its core, LXD is a human-centered, research-driven approach to learning design
          that integrates UX principles with learning science. While instructional design
          traditionally centered on delivering content efficiently, LXD adds a new dimension —
          designing for emotion, engagement, and human connection.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.devlinpeck.com (Devlin Peck, 2024)
        </cite>
      </blockquote>

      {/* ── What is an Instructional Designer? ─────────────────────────── */}
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
        What is an Instructional Designer?
      </h2>

      <p>
        So what does an instructional designer actually do? In short: they make learning work.
        IDs create and deliver learning solutions across industries — from corporate training and
        K&ndash;12 education to higher ed and government. If an organization needs people to learn
        something, change behavior, or perform better, an instructional designer figures out how
        to make that happen. The role is in high demand globally, and for good reason — effective
        learning design directly impacts performance, and organizations know it.
      </p>

      <h3 className="mt-8 text-lg font-bold text-copy">Instructional Designer</h3>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;An instructional designer is a learning professional who specializes in
          instructional design — the process of creating educational materials and training
          programs that are engaging, accessible, and aligned with desired learning outcomes.
          Instructional designers work with subject matter experts to identify learning needs,
          apply instructional design theories and methods, and create learning materials and
          assessments.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — education.purdue.edu (Purdue University College of Education, 2024)
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;An instructional designer applies learning theory to design course content,
          learning activities, and other training solutions to support the acquisition of new
          knowledge or real-world skills. They take on multiple roles: analyst (identifying
          performance gaps), architect (designing the learning experience), creator (building the
          content), and evaluator (measuring effectiveness).&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.td.org (Association for Talent Development)
        </cite>
      </blockquote>

      <h3 className="mt-8 text-lg font-bold text-copy">Instructional Technologist</h3>

      <p>What does an instructional technologist do?</p>
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Evaluate new technologies to discover new and better ways to enhance instruction</li>
        <li>
          Assist faculty in discovering methods of improving their instruction with and without
          technology
        </li>
        <li>Conduct training sessions teaching faculty and staff how to use new technologies</li>
        <li>
          Conduct research studies evaluating the use of technologies and their impact on student
          learning outcomes
        </li>
        <li>
          Create training materials to accommodate self-learners and provide resources for customers
        </li>
        <li>
          Manage the implementation of new technologies on-campus for the use of instruction
        </li>
      </ul>
      <p className="text-xs font-bold text-copy-dim">— www.instructtech.wordpress.com</p>

      <h3 className="mt-8 text-lg font-bold text-copy">Educational Technologist</h3>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;An Educational Technologist is a professional who applies technology to the field
          of education, working to design, develop, and implement technology-based solutions for
          educational institutions and organizations. Educational technologists analyze, design,
          develop, implement, and evaluate processes and tools to make learning easier and more
          effective.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.ziprecruiter.com
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Educational Technologists are responsible for designing and implementing
          technology-based solutions to support learning and teaching, working closely with
          teachers, curriculum developers, and instructional designers to create engaging and
          effective learning environments. They assess and evaluate the effectiveness of these
          tools and make adjustments as necessary, and provide training and support to educators
          on the use of technology.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — research.com (2025)
        </cite>
      </blockquote>
    </ContentPage>
    </>
  )
}
