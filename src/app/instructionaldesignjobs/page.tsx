import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"
import ScrollReveal from "@/components/ui/ScrollReveal"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Design Jobs",
  description:
    "Explore instructional design job titles, salary ranges, top industries, and career paths. A complete guide to what you can do with a background in instructional design or learning experience design.",
  path: "/instructionaldesignjobs",
})

const jobRoles = [
  {
    title: "Instructional Designer",
    level: "Entry – Senior",
    salary: "$55K – $110K",
    description:
      "The core role in the field. You analyze learning needs, design curricula, and develop training solutions — from eLearning courses to instructor-led workshops. IDs work closely with subject matter experts and stakeholders to translate complex content into effective learning experiences.",
  },
  {
    title: "Learning Experience Designer (LXD)",
    level: "Mid – Senior",
    salary: "$70K – $120K",
    description:
      "A newer evolution of the ID role with a stronger emphasis on the learner's emotional journey and UX principles. LX Designers apply human-centered design thinking alongside learning science — crafting experiences that are not just instructionally sound, but genuinely engaging.",
  },
  {
    title: "eLearning Developer",
    level: "Entry – Senior",
    salary: "$55K – $105K",
    description:
      "Where design meets execution. eLearning Developers build interactive digital courses using authoring tools like Articulate Storyline, Rise, or Adobe Captivate. The role often blends ID skills with front-end development — HTML, CSS, JavaScript, and multimedia production.",
  },
  {
    title: "Training Specialist / Training Developer",
    level: "Entry – Mid",
    salary: "$48K – $80K",
    description:
      "A foundational corporate L&D role focused on designing and facilitating training programs. Training specialists often own the full delivery cycle — needs analysis, content creation, facilitation, and evaluation — making it a great entry point into the field.",
  },
  {
    title: "Curriculum Designer / Curriculum Developer",
    level: "Entry – Senior",
    salary: "$50K – $95K",
    description:
      "Common in higher education and K–12 contexts, but increasingly found in corporate settings. Curriculum designers map out the structure and sequence of learning across programs, ensuring coherence from module to module and alignment with broader learning objectives.",
  },
  {
    title: "L&D Specialist / Learning & Development Specialist",
    level: "Entry – Mid",
    salary: "$52K – $85K",
    description:
      "A broad corporate role that touches design, facilitation, program coordination, and evaluation. L&D Specialists often serve as the connective tissue between HR strategy and employee learning programs — building both content and culture.",
  },
  {
    title: "L&D Manager / Learning & Development Manager",
    level: "Senior – Lead",
    salary: "$90K – $140K",
    description:
      "A leadership role overseeing the design and delivery of learning programs across a team or organization. L&D Managers shape strategy, manage budgets, lead instructional designers, and align learning initiatives with business goals.",
  },
  {
    title: "Learning Technologist",
    level: "Mid – Senior",
    salary: "$65K – $110K",
    description:
      "A tech-forward role at the intersection of ID and systems administration. Learning Technologists manage LMS platforms, evaluate and implement new learning tools, and support the technical infrastructure that makes learning programs run.",
  },
  {
    title: "Performance Consultant",
    level: "Senior",
    salary: "$85K – $135K",
    description:
      "A strategic role that goes beyond course design to diagnose the root causes of performance gaps. Performance consultants determine whether a learning solution is even the right answer — or whether the fix lies in processes, tools, environment, or incentives.",
  },
  {
    title: "Chief Learning Officer (CLO)",
    level: "Executive",
    salary: "$150K – $300K+",
    description:
      "The top L&D executive in an organization. CLOs set the vision for a company's learning culture, build and lead learning teams, and make the case for learning investment at the board level. Typically requires 15+ years of L&D leadership experience.",
  },
]

const industries = [
  {
    name: "Corporate / Enterprise",
    demand: "Very High",
    notes:
      "The largest employer of IDs. Financial services, retail, manufacturing, and tech companies all invest heavily in employee onboarding, compliance training, and leadership development.",
  },
  {
    name: "Technology & SaaS",
    demand: "Very High",
    notes:
      "Fast-moving tech companies need IDs to build product training, customer education, and internal enablement at scale. This sector tends to pay above average and normalizes remote work.",
  },
  {
    name: "Healthcare & Pharma",
    demand: "High",
    notes:
      "Compliance requirements and patient safety make learning non-negotiable. IDs in healthcare design clinical training, regulatory compliance courses, and continuing education for staff.",
  },
  {
    name: "Government & Defense",
    demand: "High",
    notes:
      "Federal agencies, the military, and defense contractors are among the largest consumers of instructional systems design. Many roles require U.S. citizenship or security clearance.",
  },
  {
    name: "Higher Education",
    demand: "Moderate",
    notes:
      "Universities hire IDs to support online course development, faculty training, and academic program design. Compensation is typically lower than corporate, but benefits and flexibility are often strong.",
  },
  {
    name: "Consulting & Staffing",
    demand: "High",
    notes:
      "L&D consulting firms and staffing agencies place IDs across industries on contract and full-time roles. Consulting can offer variety, higher billing rates, and exposure to multiple sectors quickly.",
  },
  {
    name: "Nonprofit & NGO",
    demand: "Moderate",
    notes:
      "Mission-driven organizations need IDs for volunteer training, program delivery, and capacity building. Salaries are typically lower, but the work is often high-impact and values-aligned.",
  },
  {
    name: "K–12 Education",
    demand: "Moderate",
    notes:
      "School districts and edtech companies serving K–12 hire curriculum designers and instructional coaches. The rise of digital learning has created demand for IDs who understand both pedagogy and technology.",
  },
]

export default function IDJobsPage() {
  return (
    <ContentPage
      eyebrow="Career Guide"
      title="Instructional Design Jobs"
      subtitle="Whether you're just starting out or thinking about what's next — here's a clear look at the roles, industries, and opportunities in the ID field."
    >
      <ScrollReveal>
      <p>
        One of the best-kept secrets about instructional design? It opens more doors than most people realize.
        When you can analyze a learning need, design a solution, and build something people actually learn from,
        you become valuable across nearly every industry on the planet. From healthcare systems to tech startups
        to government agencies — organizations everywhere need people who know how to make learning work.
        This guide breaks down the job titles you&rsquo;ll encounter, what each role actually does,
        what you can expect to earn, and where the strongest demand is right now.
      </p>
      </ScrollReveal>

      {/* ── Job Titles ─────────────────────────────────────────────────── */}
      <ScrollReveal>
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
        Instructional Design Job Titles
      </h2>
      </ScrollReveal>

      <ScrollReveal delay={1}>
      <p>
        The ID field doesn&rsquo;t have a single standard title — you&rsquo;ll see the same core
        work described a dozen different ways depending on the organization, the industry, and the
        era. Here are the roles you&rsquo;re most likely to encounter, from entry-level to executive.
      </p>
      </ScrollReveal>

      <div className="mt-6 space-y-5">
        {jobRoles.map((role, i) => (
          <ScrollReveal key={role.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
          <div
            className="rounded-card border border-edge bg-surface p-6 shadow-card"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-extrabold text-copy">{role.title}</h3>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-copy-dim">
                  {role.level}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-[var(--accent-glow)] px-3 py-1 text-sm font-bold text-accent">
                {role.salary}
              </span>
            </div>
            <div className="mt-3 h-0.5 w-8 rounded bg-accent opacity-60" />
            <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">
              {role.description}
            </p>
          </div>
          </ScrollReveal>
        ))}
      </div>

      <p className="mt-4 text-xs font-bold text-copy-dim">
        Salary ranges reflect U.S. national figures as of 2025. Actual compensation varies by
        location, industry, organization size, and experience level. Remote roles in high-cost
        markets often pay above these ranges.
      </p>

      {/* ── Industries ─────────────────────────────────────────────────── */}
      <ScrollReveal>
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Where Instructional Designers Work
      </h2>
      </ScrollReveal>

      <ScrollReveal delay={1}>
      <p>
        Instructional design is a horizontal skill — it crosses every sector where people need to
        learn something. Below are the industries with the most active demand for ID professionals,
        along with what makes each one distinct.
      </p>
      </ScrollReveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {industries.map((industry, i) => (
          <ScrollReveal key={industry.name} delay={((i % 2) + 1) as 1 | 2}>
          <div
            className="rounded-card border border-edge bg-surface p-5 shadow-card"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-extrabold text-copy">{industry.name}</h3>
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                  industry.demand === "Very High"
                    ? "bg-[var(--accent-glow)] text-accent"
                    : industry.demand === "High"
                      ? "bg-[rgba(74,123,196,0.15)] text-accent-2"
                      : "bg-surface-2 text-copy-muted"
                }`}
              >
                {industry.demand}
              </span>
            </div>
            <p className="mt-3 text-xs font-medium leading-relaxed text-copy-muted">
              {industry.notes}
            </p>
          </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ── Market Demand ──────────────────────────────────────────────── */}
      <ScrollReveal>
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Market Demand & Career Outlook
      </h2>
      </ScrollReveal>

      <ScrollReveal delay={1}>
      <p>
        The short version: instructional design is growing, and it&rsquo;s not slowing down.
        The U.S. Bureau of Labor Statistics projects steady growth in training and development
        roles, driven by a few powerful forces reshaping how organizations think about learning.
      </p>

      </ScrollReveal>

      <ScrollReveal delay={2}>
      <h3 className="mt-8 text-base font-bold text-copy">
        Skills gaps are accelerating demand
      </h3>
      <p>
        Technology is changing jobs faster than organizations can keep up. Companies need people
        who can build learning quickly, iterate on it, and connect it to measurable performance
        outcomes. That&rsquo;s an instructional designer&rsquo;s job description.
      </p>
      </ScrollReveal>

      <ScrollReveal delay={1}>
      <h3 className="mt-6 text-base font-bold text-copy">
        Remote work normalized the market
      </h3>
      <p>
        Before 2020, most ID roles were tied to a physical location. Today, remote and hybrid
        positions are the norm — which means you&rsquo;re no longer limited to opportunities
        in your city. A designer in a mid-sized market can compete for tech company roles in
        San Francisco or New York without relocating.
      </p>
      </ScrollReveal>

      <ScrollReveal delay={2}>
      <h3 className="mt-6 text-base font-bold text-copy">
        AI is changing the work, not replacing it
      </h3>
      <p>
        Generative AI is reshaping how IDs work — automating first drafts, accelerating
        content development, and enabling more personalized learning at scale. The designers
        who are thriving right now are using AI to do more strategic work, not less. The
        ability to evaluate, direct, and critically apply AI-generated content is quickly
        becoming a core ID skill.
      </p>
      </ScrollReveal>

      <ScrollReveal delay={1}>
      <h3 className="mt-6 text-base font-bold text-copy">
        L&D is moving closer to business strategy
      </h3>
      <p>
        Learning and development is no longer seen as a support function — it&rsquo;s a
        strategic lever for retention, productivity, and organizational agility. That shift
        is creating more senior roles, more CLO positions, and more opportunities for IDs
        to move into leadership without leaving the craft entirely.
      </p>
      </ScrollReveal>

      {/* ── Salary Overview ────────────────────────────────────────────── */}
      <ScrollReveal>
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Salary by Experience Level
      </h2>
      </ScrollReveal>

      <p>
        Compensation in instructional design varies widely based on experience, industry,
        and whether you&rsquo;re in a corporate or education setting. Here&rsquo;s a
        broad-strokes view of what to expect at each career stage.
      </p>

      <div className="mt-6 overflow-hidden rounded-card border border-edge shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-edge bg-surface-2">
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-copy-dim">
                Career Stage
              </th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-copy-dim">
                Years of Experience
              </th>
              <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wider text-copy-dim">
                Typical Salary Range
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-edge bg-surface">
            {[
              { stage: "Entry Level", years: "0 – 2 years", range: "$45K – $65K" },
              { stage: "Mid Level", years: "3 – 6 years", range: "$65K – $95K" },
              { stage: "Senior", years: "7 – 12 years", range: "$90K – $130K" },
              { stage: "Lead / Manager", years: "10+ years", range: "$110K – $155K" },
              { stage: "Director / CLO", years: "15+ years", range: "$140K – $300K+" },
            ].map((row) => (
              <tr key={row.stage}>
                <td className="px-5 py-3.5 font-bold text-copy">{row.stage}</td>
                <td className="px-5 py-3.5 text-copy-muted">{row.years}</td>
                <td className="px-5 py-3.5 text-right font-bold text-accent">{row.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs font-bold text-copy-dim">
        Ranges reflect U.S. corporate roles as of 2025. Education sector salaries typically run
        10–25% lower. High-cost metro areas (NYC, SF, Seattle) and tech-sector roles often
        exceed the upper end.
      </p>

      {/* ── Tips ───────────────────────────────────────────────────────── */}
      <ScrollReveal>
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Getting Hired: What Actually Moves the Needle
      </h2>

      <p>
        The ID job market is competitive — but it rewards people who show, not just tell.
        A few things that consistently make a difference:
      </p>

      <ul className="list-disc space-y-2.5 pl-5">
        <li>
          <strong className="font-bold text-copy">Your portfolio is your resume.</strong>{" "}
          Hiring managers want to see real samples — eLearning modules, design documents,
          storyboards, job aids. A strong portfolio matters more than almost anything else
          on your application.
        </li>
        <li>
          <strong className="font-bold text-copy">Tool fluency signals readiness.</strong>{" "}
          Proficiency in Articulate Storyline, Rise, or a comparable authoring tool is
          often expected at the entry level. LMS experience (Cornerstone, Canvas, Moodle)
          is a strong bonus.
        </li>
        <li>
          <strong className="font-bold text-copy">Frame your experience in outcomes.</strong>{" "}
          Don&rsquo;t just list what you built — describe the impact. &ldquo;Reduced
          onboarding time by 30%&rdquo; or &ldquo;trained 500+ employees across 12
          locations&rdquo; is far more compelling than &ldquo;created training materials.&rdquo;
        </li>
        <li>
          <strong className="font-bold text-copy">Networking opens doors faster than job boards.</strong>{" "}
          The ID community is active on LinkedIn and in associations like ATD and ISPI.
          Connections made in community spaces regularly lead to referrals and introductions
          that skip the applicant queue entirely.
        </li>
        <li>
          <strong className="font-bold text-copy">Certifications add credibility.</strong>{" "}
          ATD&rsquo;s CPTD (Certified Professional in Talent Development) and CPLP are
          widely recognized in corporate L&D. For academic contexts, a master&rsquo;s
          in instructional design, educational technology, or curriculum development
          carries real weight.
        </li>
      </ul>
      </ScrollReveal>
    </ContentPage>
  )
}
