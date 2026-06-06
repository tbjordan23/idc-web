import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ShareButtons from "@/components/ui/ShareButtons"
import CoursesBanner from "@/components/ui/CoursesBanner"

export const metadata: Metadata = generatePageMetadata({
  title: "Content Curation: A Necessary Skill for Future Instructional Designers",
  description: "Content curation is one of the most underrated skills in ID. Learn what it means, how to evaluate sources, and the tools that make it work.",
  path: "/post/content-curation-instructional-designers",
})


export default function BlogPost() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-1.5">
          {["Instructional Design"].map(t => (
            <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-copy-muted">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t}
            </span>
          ))}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
          Content Curation: A Necessary Skill for Future Instructional Designers
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-copy-dim">
          <span className="font-semibold text-copy-muted">Travis Jordan</span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            May 20, 2017
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            3 min read
          </span>
        </div>
      </ScrollReveal>

      {/* ── Hook / Summary blurb ────────────────────────────────────────────── */}
      <ScrollReveal delay={1}>
        <blockquote className="mt-10 border-l-4 border-accent pl-5">
          <p className="text-lg font-medium leading-relaxed text-copy-muted italic">
            &ldquo;Instructional designers will spend most of their time curating content rather than creating it.&rdquo;
          </p>
        </blockquote>
      </ScrollReveal>

      {/* ── Article Body ────────────────────────────────────────────────────── */}
      <ScrollReveal delay={2}>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-copy">

          <p>
            That prediction came from Professor M. David Merrill during a graduate seminar years ago — and it&rsquo;s turned out to be exactly right. We&rsquo;re living in an era of content abundance. Every minute, thousands of articles, videos, podcasts, and courses are published across the web. For instructional designers, that&rsquo;s not just background noise — it&rsquo;s an opportunity. The question is whether you know how to use it.
          </p>
          <p>
            Content curation has become one of the most valuable skills you can develop as an ID. And no, it doesn&rsquo;t mean bookmarking articles or dumping links into a slide deck. Done well, it means thoughtfully selecting, organizing, and contextualizing existing content so it serves real learning goals. Here&rsquo;s how to do it.
          </p>

          {/* Section 1 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">01</span>
              <h2 className="text-xl font-bold text-heading">What Content Curation Actually Means in ID</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Content curation isn&rsquo;t a shortcut — it&rsquo;s a discipline. At its core, it means sorting through the enormous volume of available material and presenting the right pieces in a meaningful, organized way for your specific learners. Think of a museum curator: they don&rsquo;t create the art, but they decide what belongs in the exhibition, how it&rsquo;s arranged, and what story it tells together.
              </p>
              <p>
                For instructional designers, the process typically moves through three phases: gathering content that&rsquo;s relevant to your learning objectives, grouping it around related topics or themes, and delivering it in a format that makes sense for your learners. The magic isn&rsquo;t in finding the content — it&rsquo;s in the judgment you bring to selecting and sequencing it.
              </p>
              <p>
                In 2025, AI tools have added a fourth layer: AI-assisted discovery. Tools like Perplexity, ChatGPT, and specialized research assistants can surface relevant content at scale. But the human judgment — knowing what&rsquo;s credible, what fits your learners, what&rsquo;s actually useful — still sits squarely with you.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">02</span>
              <h2 className="text-xl font-bold text-heading">How to Evaluate and Select Quality Content</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Not everything on the internet deserves a spot in your learning design. Before you include any piece of curated content, run it through a quick filter: Is it accurate and up to date? Is the source credible? Is it appropriate for your audience&rsquo;s existing knowledge level? Does it actually move learners toward a specific objective?
              </p>
              <p>
                Start by anchoring your curation to learner goals — not your own interests, not what ranks well, not what looks impressive. What does your learner need to be able to do or understand after engaging with this content? Work backward from that. Build relationships with consistent, high-quality content creators in your domain so you&rsquo;re not starting from scratch every time.
              </p>
              <p>
                Create and organize by topics, then chunk content within each topic so learners can navigate at their own pace. Sequencing matters — don&rsquo;t throw advanced content at someone who hasn&rsquo;t built the foundation yet.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">03</span>
              <h2 className="text-xl font-bold text-heading">Integrating Curated Content Into Designed Learning</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Curated content works best when it&rsquo;s woven into a learning experience — not just listed. A wall of links isn&rsquo;t curation; it&rsquo;s homework. Your job as a designer is to provide context: why does this piece matter, what should the learner look for, how does it connect to what comes before and after it?
              </p>
              <p>
                Design matters here. Presenting curated content visually — through cards, tiles, or organized modules — helps learners navigate without feeling overwhelmed. Think about the delivery format too: a curated playlist of short videos works differently than a curated reading list, and both work differently than a curated case study library. Match the format to how learners will actually use it.
              </p>
              <p>
                And don&rsquo;t forget to keep it current. Curated content has a shelf life. Build in a review cadence so you&rsquo;re not pointing learners to outdated resources six months down the road.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mt-10">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-black text-accent opacity-40 select-none">04</span>
              <h2 className="text-xl font-bold text-heading">Tools and Workflows for Curation in 2025</h2>
            </div>
            <div className="mt-4 space-y-4">
              <p>
                Your curation workflow doesn&rsquo;t need to be complicated — it just needs to be intentional. Here are some tools worth exploring:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Notion or Obsidian</strong> — great for building personal content libraries, tagging by topic, and linking related pieces</li>
                <li><strong>Feedly or Inoreader</strong> — RSS-based feeds that surface new content from sources you trust, without the noise of social media</li>
                <li><strong>Scoop.it</strong> — built specifically for curating and publishing content collections, useful when you want a shareable resource hub</li>
                <li><strong>Perplexity or ChatGPT</strong> — useful for AI-assisted discovery, surfacing sources you may not have found otherwise (always verify independently)</li>
                <li><strong>Boost HQ or similar platforms</strong> — purpose-built for sharing curated knowledge within teams and organizations</li>
              </ul>
              <p>
                The best workflow is one you&rsquo;ll actually maintain. Start simple: a folder system, a tagging habit, a weekly review ritual. Then layer in tools as your practice grows.
              </p>
            </div>
          </div>

          {/* Callout box */}
          <div className="mt-10 rounded-card border border-edge bg-surface-2 p-6">
            <h2 className="text-lg font-bold text-heading">A Note on Copyright &amp; Attribution</h2>
            <div className="mt-3 space-y-3">
              <p>
                Curating content doesn&rsquo;t mean repurposing it without permission. Before you embed, reproduce, or distribute someone else&rsquo;s work inside a course or platform, check the licensing terms. Creative Commons licenses vary widely — some allow commercial use, some don&rsquo;t. When in doubt, link out rather than copy in.
              </p>
              <p>
                Always credit the original source clearly, even when you&rsquo;re legally in the clear. It&rsquo;s not just an ethical practice — it models good research habits for your learners and builds credibility for your work.
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="mt-10 space-y-4">
            <h2 className="text-xl font-bold text-heading">The Bottom Line</h2>
            <p>
              Content curation is a real skill — not a workaround for designers who don&rsquo;t want to create. In a world drowning in information, the ability to find what&rsquo;s actually worth a learner&rsquo;s time, organize it clearly, and deliver it with context is genuinely valuable. Build this muscle now and you&rsquo;ll be ahead of designers who are still trying to create everything from scratch.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ── Share ───────────────────────────────────────────────────────────── */}
      <ScrollReveal>
        <div className="mt-14 border-t border-edge pt-8">
          <ShareButtons title="Content Curation: A Necessary Skill for Future Instructional Designers" />
        </div>
      </ScrollReveal>

      {/* ── Courses promo banner ────────────────────────────────────────────── */}
      <ScrollReveal>
        <CoursesBanner />
      </ScrollReveal>

    </article>
  )
}
