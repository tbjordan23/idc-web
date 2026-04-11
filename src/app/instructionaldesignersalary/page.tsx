import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ContentPage from "@/components/ui/ContentPage"

export const metadata: Metadata = generatePageMetadata({
  title: "Instructional Designer Salary",
  description:
    "What is the average salary of an instructional designer? Explore salary ranges by role, experience level, industry, and location — so you can advocate for yourself with confidence.",
  path: "/instructionaldesignersalary",
})

// ── Salary data — keep in sync with /instructionaldesignjobs ──────────────
const byExperience = [
  { stage: "Entry Level", years: "0 – 2 years", range: "$45K – $65K", note: "First ID or training role; portfolio building phase" },
  { stage: "Mid Level", years: "3 – 6 years", range: "$65K – $95K", note: "Independent contributor with proven deliverables" },
  { stage: "Senior", years: "7 – 12 years", range: "$90K – $130K", note: "Leads projects, mentors others, shapes strategy" },
  { stage: "Lead / Manager", years: "10+ years", range: "$110K – $155K", note: "Manages a team or program; owns L&D outcomes" },
  { stage: "Director / CLO", years: "15+ years", range: "$140K – $300K+", note: "Executive-level; aligns learning to business strategy" },
]

const byRole = [
  { title: "Training Specialist / Developer", level: "Entry – Mid", salary: "$48K – $80K" },
  { title: "Curriculum Designer / Developer", level: "Entry – Senior", salary: "$50K – $95K" },
  { title: "L&D Specialist", level: "Entry – Mid", salary: "$52K – $85K" },
  { title: "Instructional Designer", level: "Entry – Senior", salary: "$55K – $110K" },
  { title: "eLearning Developer", level: "Entry – Senior", salary: "$55K – $105K" },
  { title: "Learning Technologist", level: "Mid – Senior", salary: "$65K – $110K" },
  { title: "Learning Experience Designer (LXD)", level: "Mid – Senior", salary: "$70K – $120K" },
  { title: "Performance Consultant", level: "Senior", salary: "$85K – $135K" },
  { title: "L&D Manager", level: "Senior – Lead", salary: "$90K – $140K" },
  { title: "Chief Learning Officer (CLO)", level: "Executive", salary: "$150K – $300K+" },
]

const byIndustry = [
  { industry: "K–12 / Nonprofit", modifier: "10 – 25% below average", note: "Mission-driven work; often offset by benefits and flexibility" },
  { industry: "Higher Education", modifier: "5 – 15% below average", note: "Strong benefits; tenure-track roles offer stability" },
  { industry: "Government / Federal", modifier: "At or near average", note: "Stable, structured pay bands; excellent benefits and job security" },
  { industry: "Corporate / Enterprise", modifier: "At or above average", note: "Broadest range; varies widely by company size and sector" },
  { industry: "Healthcare / Pharma", modifier: "5 – 15% above average", note: "Compliance-driven demand; specialized content commands premium" },
  { industry: "Technology / SaaS", modifier: "10 – 25% above average", note: "Highest paying sector; equity and remote perks often included" },
]

const salaryFactors = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Years of experience",
    description: "The single biggest driver of salary in this field. Moving from entry to mid-level typically adds $15K–$25K. Senior roles unlock the widest range.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Industry",
    description: "Tech and pharma pay significantly more than education and nonprofit for equivalent roles. If compensation is a priority, industry choice matters as much as title.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Tool proficiency",
    description: "Articulate Storyline, Rise, Captivate, and LMS administration skills directly affect hiring competitiveness and salary negotiation leverage — especially at the entry and mid levels.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Location (and remote status)",
    description: "High-cost metros like NYC, SF, and Seattle historically paid more. Remote normalization has compressed geographic gaps — but some employers still apply location-based pay adjustments.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Credentials and education",
    description: "A master's in instructional design, educational technology, or a related field adds credibility and can shift starting salary upward — particularly in education and government sectors. ATD's CPTD certification carries weight in corporate L&D.",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Negotiation",
    description: "Research consistently shows that candidates who negotiate receive higher offers — and IDs who can articulate the business impact of their work are better positioned to do it. Know your number before every conversation.",
  },
]

export default function IDSalaryPage() {
  return (
    <ContentPage
      eyebrow="Career & Compensation"
      title="Instructional Designer Salary Guide"
      subtitle="Know your worth. Explore what instructional designers earn by experience, role, and industry — so you can advocate for yourself with confidence."
    >
      <p>
        Instructional design salaries span a wide range — and that range reflects the diversity of
        the field itself. An entry-level training specialist at a nonprofit and a senior learning
        experience designer at a tech company are both doing instructional design work, but they&rsquo;re
        operating in very different compensation environments. Understanding what shapes pay in this
        field is the first step toward making informed decisions about where to work, which roles to
        pursue, and how to negotiate confidently.
      </p>

      {/* ── Salary by Experience ───────────────────────────────────────────── */}
      <h2 className="mt-10 text-xl font-extrabold tracking-tight text-heading">
        Salary by Experience Level
      </h2>

      <p>
        Experience is the primary driver of compensation in instructional design. Here&rsquo;s
        what to expect at each career stage across U.S. corporate roles.
      </p>

      <div className="mt-5 overflow-hidden rounded-card border border-edge shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-edge bg-surface-2">
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-copy-dim">Career Stage</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-copy-dim">Experience</th>
              <th className="px-5 py-3 text-right text-xs font-bold uppercase tracking-wider text-copy-dim">Salary Range</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-edge bg-surface">
            {byExperience.map((row) => (
              <tr key={row.stage}>
                <td className="px-5 py-4">
                  <p className="font-bold text-copy">{row.stage}</p>
                  <p className="mt-0.5 text-xs text-copy-dim">{row.note}</p>
                </td>
                <td className="px-5 py-4 text-copy-muted">{row.years}</td>
                <td className="px-5 py-4 text-right font-bold text-accent">{row.range}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs font-bold text-copy-dim">
        U.S. national ranges, corporate sector, as of 2025. Education and nonprofit roles typically run 10–25% lower.
      </p>

      {/* ── Salary by Role ─────────────────────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Salary by Job Title
      </h2>

      <p>
        The ID field uses many different titles for overlapping work. Here&rsquo;s how compensation
        stacks up across the most common roles, ordered from entry to executive.
      </p>

      <div className="mt-5 space-y-3">
        {byRole.map((role) => (
          <div
            key={role.title}
            className="flex items-center justify-between gap-4 rounded-card border border-edge bg-surface px-5 py-4 shadow-card"
          >
            <div>
              <p className="text-sm font-extrabold text-copy">{role.title}</p>
              <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-copy-dim">{role.level}</p>
            </div>
            <span className="shrink-0 rounded-full bg-[var(--accent-glow)] px-3 py-1 text-sm font-bold text-accent">
              {role.salary}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs font-bold text-copy-dim">
        Ranges reflect U.S. national data as of 2025. Tech-sector and remote roles targeting high-cost markets often exceed the upper end.
      </p>

      {/* ── Salary by Industry ─────────────────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        How Industry Affects Pay
      </h2>

      <p>
        Across all experience levels and titles, industry has an outsized effect on what
        instructional designers earn. The same role can pay 30–40% more in tech than in education.
      </p>

      <div className="mt-5 overflow-hidden rounded-card border border-edge shadow-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-edge bg-surface-2">
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-copy-dim">Industry</th>
              <th className="px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-copy-dim">Pay vs. Average</th>
              <th className="hidden px-5 py-3 text-left text-xs font-bold uppercase tracking-wider text-copy-dim sm:table-cell">Context</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-edge bg-surface">
            {byIndustry.map((row) => (
              <tr key={row.industry}>
                <td className="px-5 py-3.5 font-bold text-copy">{row.industry}</td>
                <td className="px-5 py-3.5 font-semibold text-copy-muted">{row.modifier}</td>
                <td className="hidden px-5 py-3.5 text-xs text-copy-dim sm:table-cell">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── What Moves the Number ──────────────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        What Actually Moves Your Salary
      </h2>

      <p>
        Ranges tell you the playing field — these are the factors that determine where you land
        within it.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {salaryFactors.map((factor) => (
          <div key={factor.title} className="rounded-card border border-edge bg-surface p-5 shadow-card">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-accent">
                {factor.icon}
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-copy">{factor.title}</h3>
                <p className="mt-1.5 text-xs font-medium leading-relaxed text-copy-muted">
                  {factor.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Negotiation ───────────────────────────────────────────────────── */}
      <h2 className="mt-12 text-xl font-extrabold tracking-tight text-heading">
        Negotiating Your Salary as an Instructional Designer
      </h2>

      <p>
        Most IDs leave money on the table — not because they lack skill, but because they undervalue
        their work or don&rsquo;t know how to frame it. A few things that consistently make a
        difference:
      </p>

      <div className="mt-5 space-y-4">
        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <h3 className="text-sm font-extrabold text-copy">Speak in outcomes, not outputs</h3>
          <div className="mt-2 h-0.5 w-6 rounded bg-accent opacity-60" />
          <p className="mt-2 text-xs font-medium leading-relaxed text-copy-muted">
            &ldquo;I built 12 eLearning modules&rdquo; is easy to ignore. &ldquo;I reduced onboarding
            time by 30% and cut manager burden during new hire ramp&rdquo; is a business result.
            When you can connect your work to time, money, or performance, your value becomes
            concrete — and much harder to discount.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <h3 className="text-sm font-extrabold text-copy">Know the market before every conversation</h3>
          <div className="mt-2 h-0.5 w-6 rounded bg-accent opacity-60" />
          <p className="mt-2 text-xs font-medium leading-relaxed text-copy-muted">
            Use resources like Glassdoor, LinkedIn Salary, the ATD Salary Report, and this page to
            build a real picture of what roles pay in your industry and region. Walking in with data
            shifts the conversation from &ldquo;what do you want?&rdquo; to &ldquo;here&rsquo;s what
            the market shows for this role.&rdquo;
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <h3 className="text-sm font-extrabold text-copy">Don&rsquo;t anchor to your current salary</h3>
          <div className="mt-2 h-0.5 w-6 rounded bg-accent opacity-60" />
          <p className="mt-2 text-xs font-medium leading-relaxed text-copy-muted">
            Your previous salary is irrelevant to what the new role should pay — especially if
            you&rsquo;re moving industries, taking on more scope, or transitioning from education
            to corporate. Anchor to the role&rsquo;s market value, not your history.
          </p>
        </div>

        <div className="rounded-card border border-edge bg-surface p-5 shadow-card">
          <h3 className="text-sm font-extrabold text-copy">Total compensation includes more than base</h3>
          <div className="mt-2 h-0.5 w-6 rounded bg-accent opacity-60" />
          <p className="mt-2 text-xs font-medium leading-relaxed text-copy-muted">
            Remote flexibility, professional development budgets, conference attendance, retirement
            match, healthcare, and equity all have real dollar value. When base salary has a ceiling,
            these are often where there&rsquo;s more room to negotiate — and where IDs in education
            and nonprofit roles often find compensation equity with their corporate counterparts.
          </p>
        </div>
      </div>

    </ContentPage>
  )
}
