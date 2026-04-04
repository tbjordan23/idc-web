import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "What is Instructional Design?",
  description:
    "A complete guide to instructional design — what it is, what instructional designers do, key models, and how to get started in the field.",
  path: "/whatisinstructionaldesign",
})

export default function WhatIsIDPage() {
  return (
    <ContentPage
      eyebrow="The Field"
      title="What is Instructional Design?"
      subtitle="A complete guide to the field, the role, and how to get started."
    >
      <p>
        Instructional design is the process by which learning products and experiences are designed,
        developed, and delivered. These learning products include online courses, instructional
        manuals, video tutorials, learning simulations, and more. Instructional designers are the
        &ldquo;architects&rdquo; of the learning experience and the &ldquo;directors&rdquo; of the
        Instructional Systems Design (ISD) process. The terms <em>instructional design</em>,{" "}
        <em>instructional technology</em>, <em>learning experience (LX) design</em>,{" "}
        <em>curriculum design</em>, and <em>instructional systems design (ISD)</em> are sometimes
        used interchangeably.
      </p>

      {/* ── Instructional Design Definitions ───────────────────────────── */}
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-copy">
        Instructional Design Definitions
      </h2>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Instructional Design is defined as &lsquo;a systematic process that is employed to
          develop education and training programs in a consistent and reliable fashion&rsquo; (Reiser,
          Dempsey, 2007). In addition, it may be thought of as a framework for developing modules or
          lessons that (Merrill, Drake, Lacy, Pratt, 1996).&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.nwlink.com
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Instructional design, also known as instructional systems design, is the analysis of
          learning needs and systematic development of instruction. Instructional designers often use
          instructional technology as a method for developing instruction. Instructional design models
          typically specify a method that, if followed, will facilitate the transfer of knowledge,
          skills and attitude to the recipient or acquirer of the instruction.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.wikipedia.org
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Instructional Design is the systematic development of instructional specifications
          using learning and instructional theory to ensure the quality of instruction. It is the
          entire process of analysis of learning needs and goals and the development of a delivery
          system to meet those needs. It includes development of instructional materials and
          activities; and tryout and evaluation of all instruction and learner activities.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.umich.edu
        </cite>
      </blockquote>

      {/* ── Educational Technology ──────────────────────────────────────── */}
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-copy">
        Educational Technology
      </h2>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Educational technology is the study and ethical practice of facilitating learning
          and improving performance by creating, using and managing appropriate technological
          processes and resources.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.cjlt.ca
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;The term educational technology is often associated with, and encompasses,
          instructional theory and learning theory. While instructional technology is &lsquo;the
          theory and practice of design, development, utilization, management, and evaluation of
          processes and resources for learning,&rsquo; according to the Association for Educational
          Communications and Technology (AECT) Definitions and Terminology Committee, educational
          technology includes other systems used in the process of developing human capability.
          Educational technology includes, but is not limited to, software, hardware, as well as
          Internet applications, such as wikis and blogs, and activities.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.wikipedia.org
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Educational technology, sometimes termed EdTech, is the study and ethical practice
          of facilitating e-learning, which is the learning and improving performance by creating,
          using and managing appropriate technological processes and resources. The term educational
          technology is often associated with, and encompasses, instructional theory and learning
          theory. While instructional technology is &lsquo;the theory and practice of design,
          development, utilization, management, and evaluation of processes and resources for
          learning,&rsquo; according to the AECT Definitions and Terminology Committee, educational
          technology includes other systems used in the process of developing human capability.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.edtech.wikia.com
        </cite>
      </blockquote>

      {/* ── Learning Experience (LX) Design ────────────────────────────── */}
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-copy">
        Learning Experience (LX) Design
      </h2>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;An emerging discipline, learning experience design (LX) draws from other disciplines
          including experiential learning, cognitive psychology, interaction design, user experience
          design, instructional design and design thinking.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.learningexperiencedesign.com
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;Learning Experience Design&trade; (LX or LX Design)&mdash;a synthesis of
          instructional design, educational pedagogy, neuroscience, social sciences, design thinking,
          and UI/UX&mdash;is critical for any organization looking to compete in the modern
          educational marketplace.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.sixredmarbles.com
        </cite>
      </blockquote>

      {/* ── What is an Instructional Designer? ─────────────────────────── */}
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-copy">
        What is an Instructional Designer?
      </h2>

      <p>
        What exactly is an instructional designer and what do they do? Instructional designers create
        and deliver learning products for business, K&ndash;12, higher education, and government
        organizations. They are the &ldquo;architects&rdquo; of the learning experience and the
        &ldquo;directors&rdquo; of the Instructional Systems Design (ISD) process. Instructional
        designers are in high demand worldwide&mdash;particularly in North America, Asia, and
        Europe&mdash;as organizations turn to instructional designers to solve business performance
        problems through the delivery of effective learning experiences.
      </p>

      <h3 className="mt-8 text-lg font-bold text-copy">Instructional Designer</h3>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;An instructional designer is somebody who applies a systematic methodology based on
          instructional theory to create content for learning events.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.eng.wayne.edu
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;An instructional designer is an individual who develops the methodology and delivery
          systems for presenting course content.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.syberworks.com
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
          &ldquo;An educational technologist is someone who is trained in the field of educational
          technology. Educational technologists try to analyze, design, develop, implement and
          evaluate process and tools to enhance learning.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.wikipedia.org
        </cite>
      </blockquote>

      <blockquote className="border-l-2 border-accent pl-5 not-italic">
        <p>
          &ldquo;As online technologies have exploded into mainstream education and corporate
          training, the need for professionals who are highly qualified in designing, developing,
          implementing, and assessing instruction has increased. However, the roles and
          responsibilities of educational technologists have become as varied as the employers who
          hire them and the tools they use. In order to shed some light on the matter, 161 EdTech
          professionals were surveyed in order to define the role(s) they play in K&ndash;12, higher
          education, corporate, and government work environments.&rdquo;
        </p>
        <cite className="mt-2 block text-xs font-bold not-italic text-copy-dim">
          — www.infogr.am
        </cite>
      </blockquote>
    </ContentPage>
  )
}
