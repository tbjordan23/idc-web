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
  // ── Real articles ──────────────────────────────────────────────────────────
  {
    title: "Working Smarter with SMEs: How AI Is Transforming the Content Gathering Process",
    description:
      "Subject matter experts are busy. AI tools are changing how instructional designers gather content, validate accuracy, and reduce back-and-forth — here's how to use them effectively.",
    href: "/post/working-smarter-with-smes-how-ai-is-transforming-the-content-gathering-process",
    tag: "AI",
    date: "Mar 30, 2026",
    readTime: "6 min",
    views: 2847,
  },
  {
    title: "Top 5 Learning Experience Design Trends for 2026",
    description:
      "The LX design landscape is shifting fast. These five trends will shape how we build learning experiences in 2026 and beyond.",
    href: "/post/top-5-learning-experience-design-trends-for-2026",
    tag: "LX Design",
    date: "Dec 24, 2025",
    readTime: "2 min",
    views: 5102,
  },
  {
    title: "The Future of Learning: Why Personalization Changes Everything",
    description:
      "Personalized learning is no longer a nice-to-have. Here's why it's becoming mission-critical for organizations that want training to actually stick.",
    href: "/post/the-future-of-learning-why-personalization-changes-everything",
    tag: "Learning Design",
    date: "Nov 12, 2025",
    readTime: "2 min",
    views: 3921,
  },
  {
    title: "The GenAI Revolution: Transforming Higher Education",
    description:
      "Generative AI isn't just changing corporate learning — it's reshaping how universities design curriculum, support students, and think about assessment.",
    href: "/post/the-genai-revolution-transforming-higher-education",
    tag: "GenAI",
    date: "Jul 27, 2024",
    readTime: "3 min",
    views: 8403,
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

  // ── Placeholder articles ───────────────────────────────────────────────────
  {
    title: "What Is ADDIE? A Beginner's Guide to the Most Popular ID Framework",
    description:
      "ADDIE is the backbone of instructional design practice. Here's what each phase actually means — and how to use it without getting stuck in analysis paralysis.",
    href: "/post/what-is-addie-beginners-guide",
    tag: "ID Models",
    date: "Mar 5, 2024",
    readTime: "5 min",
    views: 18432,
  },
  {
    title: "Bloom's Taxonomy: What It Is and How to Actually Use It",
    description:
      "Most IDs know Bloom's Taxonomy. Fewer know how to write objectives with it that guide meaningful learning. Here's the practical, no-fluff version.",
    href: "/post/blooms-taxonomy-how-to-use-it",
    tag: "Learning Theory",
    date: "Jan 22, 2024",
    readTime: "4 min",
    views: 14205,
  },
  {
    title: "The Best Free eLearning Authoring Tools in 2025",
    description:
      "You don't need an expensive license to build great eLearning. These free and freemium tools are worth your time — and we've ranked them honestly.",
    href: "/post/best-free-elearning-authoring-tools-2025",
    tag: "eLearning Tools",
    date: "Jan 8, 2025",
    readTime: "7 min",
    views: 9877,
  },
  {
    title: "How to Write Learning Objectives That Actually Work",
    description:
      "Vague learning objectives lead to vague learning. Here's how to write objectives that connect directly to assessment, activities, and real behavior change.",
    href: "/post/how-to-write-learning-objectives",
    tag: "Instructional Design",
    date: "Nov 3, 2023",
    readTime: "5 min",
    views: 11349,
  },
  {
    title: "Instructional Design vs. Learning Experience Design: What's the Difference?",
    description:
      "ID and LXD are often used interchangeably — but they're not the same thing. Here's a clear breakdown of what each brings to the table and when each label fits.",
    href: "/post/instructional-design-vs-learning-experience-design",
    tag: "Career",
    date: "Sep 14, 2023",
    readTime: "4 min",
    views: 8762,
  },
  {
    title: "Building Your First eLearning Portfolio: A Step-by-Step Guide",
    description:
      "You don't need years of experience to build a portfolio that gets you hired. Here's exactly how to put one together — even if you're starting from scratch.",
    href: "/post/building-your-first-elearning-portfolio",
    tag: "Career",
    date: "Aug 1, 2023",
    readTime: "6 min",
    views: 15920,
  },
  {
    title: "The Rise of Microlearning: Is It Right for Your Learners?",
    description:
      "Microlearning is everywhere right now. But shorter isn't always better. Here's how to know when bite-sized learning will work — and when it won't.",
    href: "/post/the-rise-of-microlearning",
    tag: "Learning Design",
    date: "Jun 19, 2023",
    readTime: "3 min",
    views: 6483,
  },
  {
    title: "SAM vs. ADDIE: Which Instructional Design Model Should You Use?",
    description:
      "Both ADDIE and SAM are widely used ID frameworks — but they take very different approaches. Here's how to choose the right one for your project.",
    href: "/post/sam-vs-addie-which-to-use",
    tag: "ID Models",
    date: "May 10, 2023",
    readTime: "5 min",
    views: 10241,
  },
  {
    title: "How to Conduct a Needs Analysis Without a Budget",
    description:
      "Needs analysis is often skipped because it feels like it requires resources. Here's how to do it effectively with just conversations, observation, and Google Forms.",
    href: "/post/needs-analysis-without-a-budget",
    tag: "Needs Analysis",
    date: "Mar 28, 2023",
    readTime: "4 min",
    views: 5318,
  },
  {
    title: "The Truth About Instructional Design Salaries in 2025",
    description:
      "What do instructional designers actually earn? We break down salary data by experience level, industry, and location — and what moves the needle most.",
    href: "/post/instructional-design-salaries-2025",
    tag: "Career",
    date: "Feb 14, 2025",
    readTime: "6 min",
    views: 21034,
  },
  {
    title: "Getting Your First ID Job: What Hiring Managers Really Want",
    description:
      "Hiring managers in instructional design see hundreds of applications. Here's what actually stands out — and what common mistakes cost candidates the interview.",
    href: "/post/getting-your-first-id-job",
    tag: "Career",
    date: "Dec 5, 2022",
    readTime: "5 min",
    views: 17882,
  },
  {
    title: "Articulate Storyline vs. Rise: Which Should You Choose?",
    description:
      "Storyline and Rise are the two most popular eLearning tools — but they serve very different needs. Here's an honest comparison to help you decide which fits your work.",
    href: "/post/articulate-storyline-vs-rise",
    tag: "eLearning Tools",
    date: "Oct 17, 2022",
    readTime: "6 min",
    views: 13427,
  },
  {
    title: "ChatGPT for Instructional Designers: A Practical Guide",
    description:
      "ChatGPT can accelerate nearly every phase of ID work — but only if you know how to use it well. Here's a practical guide with real prompts and examples.",
    href: "/post/chatgpt-for-instructional-designers",
    tag: "AI",
    date: "Mar 22, 2023",
    readTime: "7 min",
    views: 19765,
  },
  {
    title: "Kirkpatrick Model: How to Measure Training Effectiveness",
    description:
      "The Kirkpatrick Model is the industry standard for evaluating training. Here's how to actually apply all four levels — not just slap a smile sheet on the end.",
    href: "/post/kirkpatrick-model-training-effectiveness",
    tag: "Evaluation",
    date: "Aug 30, 2022",
    readTime: "5 min",
    views: 9103,
  },
  {
    title: "Scenario-Based Learning: How to Design Engaging Practice Activities",
    description:
      "Scenarios are one of the most powerful tools in an ID's toolkit. Here's how to build them so learners actually engage — and transfer skills to their real work.",
    href: "/post/scenario-based-learning-design",
    tag: "Learning Design",
    date: "Jul 11, 2022",
    readTime: "5 min",
    views: 7654,
  },
  {
    title: "Building Accessible eLearning: A Practical WCAG Guide for IDs",
    description:
      "Accessibility isn't optional — and it's not as hard as it looks. Here's a practical guide to WCAG 2.1 compliance written specifically for instructional designers.",
    href: "/post/accessible-elearning-wcag-guide",
    tag: "Accessibility",
    date: "Jun 2, 2022",
    readTime: "8 min",
    views: 6221,
  },
  {
    title: "The Instructional Design Freelance Guide: How to Get Started",
    description:
      "Freelancing as an instructional designer is more accessible than you think. Here's what you need to know about rates, clients, contracts, and landing your first project.",
    href: "/post/instructional-design-freelance-guide",
    tag: "Career",
    date: "Apr 19, 2022",
    readTime: "7 min",
    views: 14398,
  },
  {
    title: "Cognitive Load Theory: How to Design for the Brain",
    description:
      "Too much at once and learners shut down. Cognitive Load Theory explains why — and gives IDs a framework for designing experiences that actually stick.",
    href: "/post/cognitive-load-theory-design",
    tag: "Learning Theory",
    date: "Feb 28, 2022",
    readTime: "5 min",
    views: 8976,
  },
  {
    title: "Storyboarding for eLearning: Templates and Best Practices",
    description:
      "A good storyboard saves hours in development. Here's how to build one that communicates clearly with clients, developers, and SMEs — plus free templates.",
    href: "/post/storyboarding-for-elearning",
    tag: "ID Skills",
    date: "Jan 10, 2022",
    readTime: "6 min",
    views: 11093,
  },
  {
    title: "How AI Is Changing the Instructional Design Job Market",
    description:
      "AI tools are automating parts of the ID workflow — but that doesn't mean IDs are being replaced. Here's what's changing, what's staying, and how to stay ahead.",
    href: "/post/ai-changing-instructional-design-jobs",
    tag: "AI",
    date: "Sep 6, 2023",
    readTime: "5 min",
    views: 16342,
  },
  {
    title: "The Learning Design Canvas: A New Framework for Modern IDs",
    description:
      "The Learning Design Canvas gives you a one-page view of your entire learning experience — learners, goals, activities, and outcomes. Here's how to use it.",
    href: "/post/learning-design-canvas-framework",
    tag: "ID Models",
    date: "Nov 20, 2021",
    readTime: "4 min",
    views: 5749,
  },
  {
    title: "Adult Learning Theory: What Every ID Should Know About Andragogy",
    description:
      "Andragogy isn't just a buzzword — it's a framework that explains why adult learners are different from students, and what that means for how you design.",
    href: "/post/adult-learning-theory-andragogy",
    tag: "Learning Theory",
    date: "Oct 4, 2021",
    readTime: "5 min",
    views: 12817,
  },
  {
    title: "Remote Instructional Design: Tools and Tips for Working from Home",
    description:
      "Remote ID work comes with unique challenges — stakeholder alignment, async communication, and collaboration across time zones. Here's how to handle all of it well.",
    href: "/post/remote-instructional-design-tools-tips",
    tag: "ID Skills",
    date: "Aug 16, 2021",
    readTime: "4 min",
    views: 7392,
  },
  {
    title: "The Difference Between Training and Learning — And Why It Matters",
    description:
      "Organizations talk about training. Instructional designers care about learning. Understanding the difference changes how you design, sell, and evaluate every project you touch.",
    href: "/post/training-vs-learning-difference",
    tag: "Instructional Design",
    date: "Jul 5, 2021",
    readTime: "3 min",
    views: 9834,
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
