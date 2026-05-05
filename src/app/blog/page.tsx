import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import BlogFeed from "@/components/ui/BlogFeed"
import type { BlogPost } from "@/components/ui/BlogFeed"

export const metadata: Metadata = generatePageMetadata({
  title: "Blog — Instructional Design Insights",
  description:
    "Articles, insights, and practical tips for instructional designers. Covering ID models, eLearning tools, AI, learning theory, and more.",
  path: "/blog",
})

const allPosts: BlogPost[] = [
  // ── Recent articles (real metadata) ───────────────────────────────────────
  {
    title: "Working Smarter with SMEs: How AI Is Transforming the Content Gathering Process",
    description:
      "Subject matter experts are busy. AI tools are changing how instructional designers gather content, validate accuracy, and reduce back-and-forth — here's how to use them effectively.",
    href: "/post/working-smarter-with-smes-how-ai-is-transforming-the-content-gathering-process",
    tag: "AI",
    date: "Mar 30, 2026",
    readTime: "6 min",
    views: 107,
  },
  {
    title: "Top 5 Learning Experience Design Trends for 2026",
    description:
      "The LX design landscape is shifting fast. These five trends will shape how we build learning experiences in 2026 and beyond.",
    href: "/post/top-5-learning-experience-design-trends-for-2026",
    tag: "LX Design",
    date: "Dec 24, 2025",
    readTime: "2 min",
    views: 529,
  },
  {
    title: "The Future of Learning: Why Personalization Changes Everything",
    description:
      "Personalized learning is no longer a nice-to-have. Here's why it's becoming mission-critical for organizations that want training to actually stick.",
    href: "/post/the-future-of-learning-why-personalization-changes-everything",
    tag: "Learning Design",
    date: "Nov 12, 2025",
    readTime: "2 min",
    views: 82,
  },
  {
    title: "The GenAI Revolution: Transforming Higher Education",
    description:
      "Generative AI isn't just changing corporate learning — it's reshaping how universities design curriculum, support students, and think about assessment.",
    href: "/post/the-genai-revolution-transforming-higher-education",
    tag: "GenAI",
    date: "Jul 27, 2024",
    readTime: "3 min",
    views: 853,
  },
  {
    title: "Making the Leap: From Teaching to Instructional Design",
    description:
      "Thinking about transitioning from classroom teaching to instructional design? Here's what you need to know about the skills, salary difference, and how to actually make it happen.",
    href: "/post/making-the-leap-from-teaching-to-instructional-design",
    tag: "Career",
    date: "May 20, 2024",
    readTime: "3 min",
    views: 12658,
  },
  {
    title: "Uncovering the Future: 5 Game-Changing Trends in Learning Design for 2024",
    description:
      "From AI-assisted design to immersive simulations, here are the trends that defined learning design in 2024 — and what they mean for your work right now.",
    href: "/post/uncovering-the-future-5-game-changing-trends-in-learning-design-for-2024",
    tag: "Learning Design",
    date: "Apr 11, 2024",
    readTime: "2 min",
    views: 7291,
  },
  {
    title: "Top 5 Trends in Learning Design for 2023",
    description:
      "A look at the trends that shaped how instructional designers approached their work in 2023 — from generative AI to skills-based learning.",
    href: "/post/top-5-trends-of-learning-design-for-2023",
    tag: "Learning Design",
    date: "Jan 2023",
    readTime: "3 min",
    views: 14200,
  },

  // ── Archive articles (placeholder metadata, real URLs) ─────────────────────
  {
    title: "Instructional Design: The Art and Science of Creating Effective Learning Experiences",
    description:
      "What does it actually mean to design for learning? This article breaks down the principles behind effective instructional design and why they matter.",
    href: "/post/instructional-design-the-art-and-science-of-creating-effective-learning-experiences",
    tag: "Instructional Design",
    date: "2023",
    readTime: "5 min",
    views: 9200,
  },
  {
    title: "Elevate Your Instructional Design Game with ChatGPT",
    description:
      "ChatGPT can speed up research, storyboarding, and content drafting at every phase of the ADDIE process. Here's how to put it to work.",
    href: "/post/elevate-your-instructional-design-game-with-chat-gpt",
    tag: "AI",
    date: "2023",
    readTime: "4 min",
    views: 11450,
  },
  {
    title: "Content Curation for Instructional Designers",
    description:
      "You don't have to create everything from scratch. Here's how to find, evaluate, and use curated content to build stronger, faster learning experiences.",
    href: "/post/content-curation-instructional-designers",
    tag: "ID Skills",
    date: "2022",
    readTime: "4 min",
    views: 6830,
  },
  {
    title: "Top Five Learning Management Systems for Academic Institutions",
    description:
      "Choosing an LMS for higher education involves very different criteria than corporate learning. Here's how the top academic platforms stack up.",
    href: "/post/top-five-learning-management-systems-academic",
    tag: "eLearning Tools",
    date: "2023",
    readTime: "6 min",
    views: 8920,
  },
  {
    title: "Needs Analysis Tips for Instructional Designers",
    description:
      "A needs analysis is only as good as the questions you ask. Here are practical tips for uncovering the real performance gaps before you start designing.",
    href: "/post/need-analysis-tips",
    tag: "Needs Analysis",
    date: "2022",
    readTime: "4 min",
    views: 7640,
  },
  {
    title: "Working with SMEs: A Practical Guide for Instructional Designers",
    description:
      "Subject matter experts are essential — and sometimes exasperating. Here's how to build productive SME relationships that keep your projects on track.",
    href: "/post/working-with-smes",
    tag: "ID Skills",
    date: "2022",
    readTime: "5 min",
    views: 9850,
  },
  {
    title: "The Instructional Design Career",
    description:
      "What does an instructional design career actually look like? From entry-level roles to senior positions, here's a realistic picture of the path ahead.",
    href: "/post/the-instructional-design-career",
    tag: "Career",
    date: "2021",
    readTime: "5 min",
    views: 18700,
  },
  {
    title: "Why Instructional Designers Need to Change",
    description:
      "The skills that made IDs successful a decade ago aren't enough anymore. Here's an honest look at what the field demands now — and how to adapt.",
    href: "/post/why-instructional-designers-need-to-change",
    tag: "Instructional Design",
    date: "2022",
    readTime: "4 min",
    views: 8120,
  },
  {
    title: "The Adaptive Advantage: How eLearning Will Change Higher Education",
    description:
      "Adaptive learning technology is reshaping what's possible in higher education. Here's what instructional designers need to know about designing for adaptive systems.",
    href: "/post/the-adaptive-advantage-how-e-learning-will-change-higher-education",
    tag: "eLearning",
    date: "2023",
    readTime: "4 min",
    views: 6900,
  },
  {
    title: "The Benefits of eLearning",
    description:
      "From cost savings to flexibility, eLearning offers advantages that traditional training simply can't match. Here's a clear breakdown of the real benefits.",
    href: "/post/elearningbenefits",
    tag: "eLearning",
    date: "2016",
    readTime: "3 min",
    views: 19400,
  },
  {
    title: "Top L&D Experts Reveal Winning Strategies for Training Remote Workers",
    description:
      "Remote work changed everything about how we train people. We asked leading L&D professionals what's actually working — here's what they said.",
    href: "/post/top-l-d-experts-reveal-winning-strategies-for-training-remote-workers",
    tag: "Remote Learning",
    date: "2021",
    readTime: "5 min",
    views: 12300,
  },
  {
    title: "The Role of the Instructional Designer",
    description:
      "What does an instructional designer actually do day to day? A breakdown of the core responsibilities, common project types, and how the role varies by context.",
    href: "/post/the-role-of-instructional-designer",
    tag: "Career",
    date: "2020",
    readTime: "4 min",
    views: 21500,
  },
  {
    title: "Instructional Design: The Foundation for Problem Solving",
    description:
      "At its core, instructional design is a problem-solving discipline. Here's how to apply that framing to every project — from simple training to complex performance interventions.",
    href: "/post/instructional-design-the-foundation-for-problem-solving",
    tag: "Instructional Design",
    date: "2021",
    readTime: "4 min",
    views: 8900,
  },
  {
    title: "What Is Microlearning?",
    description:
      "Microlearning is one of the most discussed trends in L&D — but what does it actually mean, and when should you use it? Here's a clear, practical explanation.",
    href: "/post/what-is-microlearning",
    tag: "Learning Design",
    date: "2020",
    readTime: "3 min",
    views: 16700,
  },
  {
    title: "How to Reduce the Cost of Your Training with eLearning",
    description:
      "eLearning can dramatically reduce training costs — but only if you design it right. Here's how to maximize value without cutting corners on quality.",
    href: "/post/how-to-reduce-the-cost-of-your-training-with-elearning",
    tag: "eLearning",
    date: "2019",
    readTime: "4 min",
    views: 13200,
  },
  {
    title: "Instructional Design Tool Review",
    description:
      "A hands-on review of the most commonly used tools in the field — from rapid authoring platforms to prototyping and collaboration tools.",
    href: "/post/instructionaldesigntoolreview",
    tag: "eLearning Tools",
    date: "2020",
    readTime: "6 min",
    views: 10400,
  },
  {
    title: "Instructional Design Acronyms: A Complete Reference Guide",
    description:
      "ADDIE, SAM, SME, LMS, SCORM, xAPI — the world of instructional design is full of acronyms. Here's your go-to reference for all of them.",
    href: "/post/acronyms",
    tag: "Instructional Design",
    date: "2019",
    readTime: "4 min",
    views: 17800,
  },
  {
    title: "Exploring Instructional Design Career Opportunities",
    description:
      "The instructional design career path isn't one-size-fits-all. From corporate L&D to freelance consulting, here's a look at where the opportunities actually are.",
    href: "/post/exploring-instructional-design-career-opportunities",
    tag: "Career",
    date: "2021",
    readTime: "5 min",
    views: 14600,
  },
  {
    title: "A Case Study in Design Thinking",
    description:
      "Design thinking and instructional design have more in common than you might expect. This case study explores how design thinking principles can transform an ID project.",
    href: "/post/a-case-study-design-thinking",
    tag: "ID Models",
    date: "2020",
    readTime: "5 min",
    views: 7200,
  },
  {
    title: "5 Common Myths About eLearning",
    description:
      "eLearning gets a bad reputation — and some of it is deserved. But many of the criticisms come from myths. Here's the truth behind five of the most persistent ones.",
    href: "/post/5-common-myths-about-elearning",
    tag: "eLearning",
    date: "2019",
    readTime: "4 min",
    views: 11300,
  },

  // ── Legacy date-based URLs ─────────────────────────────────────────────────
  {
    title: "What Is Instructional Design?",
    description:
      "A foundational introduction to the field — what instructional design is, where it came from, and why it matters more than ever in a world of information overload.",
    href: "/post/2016/04/27/what-is-instructional-design",
    tag: "Instructional Design",
    date: "Apr 27, 2016",
    readTime: "5 min",
    views: 28400,
  },
  {
    title: "The Rise of LX Design",
    description:
      "Learning experience design is more than a rebrand of instructional design. Here's what's actually different — and what it means for how we approach our work.",
    href: "/post/2017/01/14/the-rise-of-lx-design",
    tag: "LX Design",
    date: "Jan 14, 2017",
    readTime: "4 min",
    views: 15300,
  },
  {
    title: "Top Five Learning Management Systems for the Corporate Sector",
    description:
      "Corporate learning has unique requirements. Here's how the top enterprise LMS platforms compare on features, pricing, and real-world usability.",
    href: "/post/2016/04/14/top-five-learning-management-systems-corporate-sector",
    tag: "eLearning Tools",
    date: "Apr 14, 2016",
    readTime: "6 min",
    views: 22100,
  },
  {
    title: "Top 15 Reasons to Be Grateful as an Instructional Designer",
    description:
      "It's easy to focus on the frustrations of ID work. Here are 15 reminders of why this field is genuinely worth showing up for — every day.",
    href: "/post/2016/11/23/top-15-reasons-to-be-grateful-as-an-instructional-designer",
    tag: "Instructional Design",
    date: "Nov 23, 2016",
    readTime: "3 min",
    views: 11800,
  },
  {
    title: "Welcome to Instructional Design Central",
    description:
      "The first post — a look at what IDC is, why we built it, and what we hope it becomes for the instructional design community.",
    href: "/post/2015/12/31/welcome-to-instructional-design-central",
    tag: "Community",
    date: "Dec 31, 2015",
    readTime: "2 min",
    views: 9100,
  },
  {
    title: "Instructional Design: From Theory to Tangible Application",
    description:
      "The gap between learning theory and real-world ID practice can feel enormous. This article bridges that gap with concrete examples of how theory shapes effective design.",
    href: "/post/2016/11/09/instructional-design-from-theory-to-tangible-application",
    tag: "Learning Theory",
    date: "Nov 9, 2016",
    readTime: "5 min",
    views: 12900,
  },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="text-4xl font-bold text-heading">Blog</h1>
        <p className="mt-4 text-lg text-copy-muted">
          Insights and practical tips for instructional designers.
        </p>
        <p className="mt-1 text-sm text-copy-dim">{allPosts.length} articles</p>
      </ScrollReveal>

      <div className="mt-12">
        <BlogFeed posts={allPosts} />
      </div>
    </div>
  )
}
