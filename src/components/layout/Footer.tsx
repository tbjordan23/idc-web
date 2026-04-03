import Link from "next/link"
import NewsletterForm from "@/components/ui/NewsletterForm"

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      { label: "Explore Courses", href: "/instructional-design-courses" },
      { label: "Community", href: "/instructionaldesigncommunity" },
      { label: "ID Templates", href: "/instructionaldesigntemplates" },
      { label: "Blog", href: "/blog" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Needs Analysis Tool", href: "/needs-analysis-app" },
      { label: "ID Jobs", href: "/instructionaldesignjobs" },
      { label: "Top eLearning Tools", href: "/top-rated-elearning-tools" },
      { label: "Top LMS", href: "/top-rated-lms" },
      { label: "ID Conferences", href: "/instructionaldesignconferences" },
    ],
  },
  learn: {
    title: "Learn",
    links: [
      { label: "What is Instructional Design?", href: "/whatisinstructionaldesign" },
      { label: "ADDIE Model", href: "/addie-model" },
      { label: "ID Models", href: "/instructionaldesignmodels" },
      { label: "Needs Analysis", href: "/needs-analysis" },
      { label: "Adult Learning Theory", href: "/adult-learning-theory" },
      { label: "ID Salary Guide", href: "/instructionaldesignersalary" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About IDC", href: "/aboutinstructionaldesigncentral" },
      { label: "Contact", href: "/contactinstructionaldesigncentral" },
    ],
  },
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/instructional-design-central",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/id_central",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/idcentral",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/instructionaldesigncentral/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-idc-primary-900 text-gray-300">
      {/* Newsletter band */}
      <div className="border-b border-white/10 bg-idc-primary">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">Stay Sharp</h2>
              <p className="mt-1 text-sm text-blue-200">
                Get the latest IDC insights, expert content, and a{" "}
                <strong className="text-white">35% off coupon</strong> on courses and templates.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Instructional Design Central, LLC. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-500 hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
