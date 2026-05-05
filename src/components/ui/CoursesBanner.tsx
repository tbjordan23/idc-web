import Link from "next/link"

export default function CoursesBanner() {
  return (
    <div className="mt-12 rounded-card border border-edge bg-surface p-6 shadow-card">
      <p className="text-xs font-bold uppercase tracking-widest text-accent">
        Featured Resources
      </p>
      <Link
        href="/instructional-design-courses"
        className="mt-2 block text-lg font-extrabold tracking-tight text-heading transition-colors hover:text-accent"
      >
        Instructional Design Courses
      </Link>
      <div className="mt-2 h-0.5 w-8 rounded bg-accent opacity-60" />
      <div className="mt-4 flex items-start gap-5">
        <div className="mt-1 hidden h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-glow)] sm:flex">
          <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium leading-relaxed text-copy-muted">
            Ready to grow your instructional design skills? Explore IDC&rsquo;s curated course
            collection — covering ADDIE, eLearning development, needs analysis, and more.
            Built for working professionals who want practical, career-ready expertise.
          </p>
          <Link
            href="/instructional-design-courses"
            className="btn-shadow mt-4 inline-flex self-start items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Explore ID Courses
            <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
