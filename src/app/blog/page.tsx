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
  {
    title: "The Quiet Burnout in L&D: Why So Many Instructional Designers Are Exhausted (and What Helps)",
    description:
      "Burnout in L&D rarely looks like a breakdown. It looks like absorbing last-minute scope changes, managing stakeholders who override your expertise, and quietly wondering if you still like this work. Here's what's really driving it — and what actually helps.",
    href: "/post/the-quiet-burnout-in-ld",
    tag: "Wellbeing",
    tags: ["Career"],
    date: "Jun 6, 2026",
    readTime: "6 min",
  },
  {
    title: "Working Smarter with SMEs: How AI Is Transforming the Content Gathering Process",
    description:
      "Subject matter experts are busy. AI tools are changing how instructional designers gather content, validate accuracy, and reduce back-and-forth — here's how to use them effectively.",
    href: "/post/working-smarter-with-smes-how-ai-is-transforming-the-content-gathering-process",
    tag: "AI",
    tags: ["SME"],
    date: "Mar 30, 2026",
    readTime: "6 min",
  },
  {
    title: "Top 5 Learning Experience Design Trends for 2026",
    description:
      "The LX design landscape is shifting fast. These five trends will shape how we build learning experiences in 2026 and beyond.",
    href: "/post/top-5-learning-experience-design-trends-for-2026",
    tag: "LX Design",
    date: "Dec 24, 2025",
    readTime: "2 min",
  },
  {
    title: "The Future of Learning: Why Personalization Changes Everything",
    description:
      "Personalized learning is no longer a nice-to-have. Here's why it's becoming mission-critical for organizations that want training to actually stick.",
    href: "/post/the-future-of-learning-why-personalization-changes-everything",
    tag: "LX Design",
    date: "Nov 12, 2025",
    readTime: "2 min",
  },
  {
    title: "The GenAI Revolution: Transforming Higher Education",
    description:
      "Generative AI isn't just changing corporate learning — it's reshaping how universities design curriculum, support students, and think about assessment.",
    href: "/post/the-genai-revolution-transforming-higher-education",
    tag: "AI",
    tags: ["Higher Education"],
    date: "Jul 27, 2024",
    readTime: "3 min",
  },
  {
    title: "Making the Leap: From Teaching to Instructional Design",
    description:
      "Thinking about transitioning from classroom teaching to instructional design? Here's what you need to know about the skills, salary difference, and how to actually make it happen.",
    href: "/post/making-the-leap-from-teaching-to-instructional-design",
    tag: "Career",
    tags: ["Teacher Transition"],
    date: "May 20, 2024",
    readTime: "3 min",
  },
  {
    title: "Uncovering the Future: 5 Game-Changing Trends in Learning Design for 2024",
    description:
      "From AI-assisted design to immersive simulations, here are the trends that defined learning design in 2024 — and what they mean for your work right now.",
    href: "/post/uncovering-the-future-5-game-changing-trends-in-learning-design-for-2024",
    tag: "LX Design",
    date: "Apr 11, 2024",
    readTime: "2 min",
  },
  {
    title: "Top 5 Trends of Learning Design for 2023",
    description:
      "A look at the trends that shaped how instructional designers approached their work in 2023 — from generative AI to skills-based learning.",
    href: "/post/top-5-trends-of-learning-design-for-2023",
    tag: "LX Design",
    date: "Jan 2023",
    readTime: "4 min",
  },
  {
    title: "Instructional Design: The Art and Science of Creating Effective Learning Experiences",
    description:
      "What does it actually mean to design for learning? This article breaks down the principles behind effective instructional design and why they matter.",
    href: "/post/instructional-design-the-art-and-science-of-creating-effective-learning-experiences",
    tag: "Instructional Design",
    date: "Feb 2023",
    readTime: "2 min",
  },
  {
    title: "Elevate your Instructional Design Game with Chat GPT",
    description:
      "ChatGPT can speed up research, storyboarding, and content drafting at every phase of the ADDIE process. Here's how to put it to work.",
    href: "/post/elevate-your-instructional-design-game-with-chat-gpt",
    tag: "AI",
    date: "May 2023",
    readTime: "2 min",
  },
  {
    title: "Exploring Instructional Design Career Opportunities",
    description:
      "The instructional design career path isn't one-size-fits-all. From corporate L&D to freelance consulting, here's a look at where the opportunities actually are.",
    href: "/post/exploring-instructional-design-career-opportunities",
    tag: "Career",
    tags: ["Instructional Design"],
    date: "Mar 2023",
    readTime: "2 min",
  },
  {
    title: "The Instructional Design Career",
    description:
      "What does an instructional design career actually look like? From entry-level roles to senior positions, here's a realistic picture of the path ahead.",
    href: "/post/the-instructional-design-career",
    tag: "Career",
    tags: ["Instructional Design"],
    date: "Dec 28, 2021",
    readTime: "2 min",
  },
  {
    title: "The Role of the Instructional Designer",
    description:
      "What does an instructional designer actually do day to day? A breakdown of the core responsibilities, common project types, and how the role varies by context.",
    href: "/post/the-role-of-instructional-designer",
    tag: "Career",
    tags: ["Instructional Design"],
    date: "Aug 15, 2022",
    readTime: "3 min",
  },
  {
    title: "How to Effectively Work with SMEs",
    description:
      "Subject matter experts are essential — and sometimes exasperating. Here's how to build productive SME relationships that keep your projects on track.",
    href: "/post/working-with-smes",
    tag: "Instructional Design",
    date: "Jan 19, 2021",
    readTime: "4 min",
  },
  {
    title: "A Case Study: Design Thinking",
    description:
      "Design thinking and instructional design have more in common than you might expect. This case study explores how design thinking principles can transform an ID project.",
    href: "/post/a-case-study-design-thinking",
    tag: "ID Models",
    date: "Aug 19, 2021",
    readTime: "4 min",
  },
  {
    title: "15 Reasons to be Grateful as an Instructional Designer",
    description:
      "It's easy to focus on the frustrations of ID work. Here are 15 reminders of why this field is genuinely worth showing up for — every day.",
    href: "/post/2016/11/23/top-15-reasons-to-be-grateful-as-an-instructional-designer",
    tag: "Instructional Design",
    date: "Nov 28, 2019",
    readTime: "1 min",
  },
  {
    title: "Top L&D Experts Reveal Winning Strategies for Training Remote Workers",
    description:
      "Remote work changed everything about how we train people. We asked leading L&D professionals what's actually working — here's what they said.",
    href: "/post/top-l-d-experts-reveal-winning-strategies-for-training-remote-workers",
    tag: "L&D",
    date: "May 28, 2021",
    readTime: "2 min",
  },
  {
    title: "Need Analysis: 5 Important Areas",
    description:
      "A needs analysis is only as good as the questions you ask. Here are the five most important areas to focus on before you start designing.",
    href: "/post/need-analysis-tips",
    tag: "Needs Analysis",
    date: "Aug 13, 2018",
    readTime: "4 min",
  },
  {
    title: "How to Reduce the Cost of Your Training with eLearning",
    description:
      "eLearning can dramatically reduce training costs — but only if you design it right. Here's how to maximize value without cutting corners on quality.",
    href: "/post/how-to-reduce-the-cost-of-your-training-with-elearning",
    tag: "eLearning",
    date: "Aug 24, 2019",
    readTime: "4 min",
  },
  {
    title: "5 Common myths about eLearning",
    description:
      "eLearning gets a bad reputation — and some of it is deserved. But many criticisms come from myths. Here's the truth behind five of the most persistent ones.",
    href: "/post/5-common-myths-about-elearning",
    tag: "eLearning",
    date: "Jul 4, 2019",
    readTime: "4 min",
  },
  {
    title: "The Adaptive Advantage: How E-Learning Will Change Higher Education",
    description:
      "Adaptive learning technology is reshaping what's possible in higher education. Here's what instructional designers need to know about designing for adaptive systems.",
    href: "/post/the-adaptive-advantage-how-e-learning-will-change-higher-education",
    tag: "eLearning",
    date: "Jul 20, 2019",
    readTime: "4 min",
  },
  {
    title: "Overview: Top Instructional Design Acronyms",
    description:
      "ADDIE, SAM, SME, LMS, SCORM, xAPI — the world of instructional design is full of acronyms. Here's your go-to reference for all of them.",
    href: "/post/acronyms",
    tag: "Instructional Design",
    date: "Jun 26, 2018",
    readTime: "3 min",
  },
  {
    title: "eLearn Or Get Left Behind",
    description:
      "From cost savings to flexibility, eLearning offers advantages that traditional training simply can't match. Here's a clear breakdown of the real benefits.",
    href: "/post/elearningbenefits",
    tag: "eLearning",
    date: "2016",
    readTime: "3 min",
  },
  {
    title: "3 Reasons Why Instructional Designers Need to Change",
    description:
      "The skills that made IDs successful a decade ago aren't enough anymore. Here's an honest look at what the field demands now — and how to adapt.",
    href: "/post/why-instructional-designers-need-to-change",
    tag: "Instructional Design",
    date: "Nov 22, 2017",
    readTime: "3 min",
  },
  {
    title: "Instructional Design: The Foundation for Problem Solving",
    description:
      "At its core, instructional design is a problem-solving discipline. Here's how to apply that framing to every project — from simple training to complex performance interventions.",
    href: "/post/instructional-design-the-foundation-for-problem-solving",
    tag: "Instructional Design",
    date: "Apr 14, 2016",
    readTime: "3 min",
  },
  {
    title: "Top Five Learning Management Systems (Academic)",
    description:
      "Choosing an LMS for higher education involves very different criteria than corporate learning. Here's how the top academic platforms stack up.",
    href: "/post/top-five-learning-management-systems-academic",
    tag: "Tools",
    date: "Nov 22, 2017",
    readTime: "3 min",
  },
  {
    title: "Content Curation: A Necessary Skill for Future Instructional Designers",
    description:
      "You don't have to create everything from scratch. Here's how to find, evaluate, and use curated content to build stronger, faster learning experiences.",
    href: "/post/content-curation-instructional-designers",
    tag: "Instructional Design",
    date: "May 20, 2017",
    readTime: "3 min",
  },
  {
    title: "Review: Synapse Learning Experience Tool",
    description:
      "Synapse is a cloud-based Learning Experience Design System that lets your team design and prototype learning content. Here's our full review.",
    href: "/post/instructionaldesigntoolreview",
    tag: "Tools",
    date: "May 13, 2017",
    readTime: "2 min",
  },
  {
    title: "What is Microlearning? Definition and Tips",
    description:
      "Microlearning is one of the most discussed trends in L&D — but what does it actually mean, and when should you use it? Here's a clear, practical explanation.",
    href: "/post/what-is-microlearning",
    tag: "LX Design",
    date: "Aug 4, 2017",
    readTime: "2 min",
  },
  {
    title: "Instructional Design: A Paradigm Shift",
    description:
      "The basis for instructional design and technology lies in theory; well-designed and effective instruction is the tangible embodiment of its principles.",
    href: "/post/2016/11/09/instructional-design-from-theory-to-tangible-application",
    tag: "Learning Theory",
    tags: ["Instructional Design"],
    date: "Nov 9, 2016",
    readTime: "1 min",
  },
  {
    title: "The Rise of LX Design",
    description:
      "Learning experience design is more than a rebrand of instructional design. Here's what's actually different — and what it means for how we approach our work.",
    href: "/post/2017/01/14/the-rise-of-lx-design",
    tag: "LX Design",
    date: "Jan 4, 2017",
    readTime: "1 min",
  },
  {
    title: "Top Five Learning Management Systems (Corporate Sector)",
    description:
      "Corporate learning has unique requirements. Here's how the top enterprise LMS platforms compare on features, pricing, and real-world usability.",
    href: "/post/2016/04/14/top-five-learning-management-systems-corporate-sector",
    tag: "Tools",
    date: "Apr 14, 2016",
    readTime: "2 min",
  },
  {
    title: "What is Instructional Design?",
    description:
      "A foundational introduction to the field — what instructional design is, where it came from, and why it matters more than ever in a world of information overload.",
    href: "/post/2016/04/27/what-is-instructional-design",
    tag: "Instructional Design",
    date: "Apr 27, 2016",
    readTime: "2 min",
  },
  {
    title: "New Instructional Design Central Site!",
    description:
      "Instructional Design Central is pleased to announce the launch of our new website — a significantly enhanced user experience for the ID community.",
    href: "/post/2015/12/31/welcome-to-instructional-design-central",
    tag: "Community",
    date: "Dec 31, 2015",
    readTime: "1 min",
  },
]

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <ScrollReveal>
        <h1 className="text-4xl font-bold text-heading">Instructional Design Blog</h1>
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
