"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = {
  main: [
    { label: "Home", href: "/" },
    { label: "About", href: "/aboutinstructionaldesigncentral" },
    {
      label: "Courses",
      dropdown: [
        { label: "Instructional Design Foundations", href: "/instructional-design-course" },
        { label: "Mastering the ADDIE Model", href: "/addie-model-course" },
        { label: "All Courses", href: "/instructional-design-courses" },
      ],
    },
    {
      label: "Resources",
      dropdown: [
        { label: "ID Templates", href: "/instructionaldesigntemplates" },
        { label: "Needs Analysis Tool", href: "/needs-analysis-app" },
        { label: "ChatID: ID GPT", href: "/chatid-instructional-design-ai" },
        { label: "Learning Circle Framework", href: "/learning-circle-framework" },
        { label: "Learning Design Canvas", href: "/the-learning-design-canvas" },
      ],
    },
    { label: "Community", href: "/instructionaldesigncommunity" },
    { label: "Blog", href: "/blog" },
    {
      label: "More",
      dropdown: [
        { label: "ID Jobs", href: "/instructionaldesignjobs" },
        { label: "Top eLearning Tools", href: "/top-rated-elearning-tools" },
        { label: "Top LMS", href: "/top-rated-lms" },
        { label: "ID Conferences", href: "/instructionaldesignconferences" },
        { label: "ID Degrees", href: "/instructionaldesigndegree" },
        { label: "What is Instructional Design?", href: "/whatisinstructionaldesign" },
        { label: "ID Models", href: "/instructionaldesignmodels" },
        { label: "Adult Learning Theory", href: "/adult-learning-theory" },
        { label: "Needs Analysis", href: "/needs-analysis" },
        { label: "ID Salary", href: "/instructionaldesignersalary" },
        { label: "Learning Theory", href: "/learning-theory" },
        { label: "ID History", href: "/instructional-design-history" },
        { label: "ADDIE Model", href: "/addie-model" },
      ],
    },
  ],
}

type NavItem =
  | { label: string; href: string; dropdown?: undefined }
  | { label: string; href?: undefined; dropdown: { label: string; href: string }[] }

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-0 z-50 mt-1 w-64 rounded-md border border-gray-100 bg-white shadow-lg">
      <ul className="py-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-idc-primary-50 hover:text-idc-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function NavLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  if (item.dropdown) {
    return (
      <div
        className="group relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-idc-primary"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {item.label}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {open && <DropdownMenu items={item.dropdown} />}
      </div>
    )
  }

  const isActive = pathname === item.href
  return (
    <Link
      href={item.href}
      className={`px-3 py-2 text-sm font-medium ${
        isActive ? "text-idc-primary" : "text-gray-700 hover:text-idc-primary"
      }`}
    >
      {item.label}
    </Link>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-idc-primary">IDC</span>
          <span className="hidden text-sm font-medium text-gray-600 sm:block">
            Instructional Design Central
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center lg:flex">
          {navigation.main.map((item) => (
            <NavLink key={item.label} item={item as NavItem} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contactinstructionaldesigncentral"
            className="rounded-md bg-idc-primary px-4 py-2 text-sm font-medium text-white hover:bg-idc-primary-700"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 pb-4 lg:hidden">
          <ul className="mt-2 space-y-1">
            {navigation.main.map((item) => {
              if (item.dropdown) {
                const isExpanded = mobileExpanded === item.label
                return (
                  <li key={item.label}>
                    <button
                      className="flex w-full items-center justify-between px-3 py-2 text-sm font-medium text-gray-700"
                      onClick={() =>
                        setMobileExpanded(isExpanded ? null : item.label)
                      }
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <ul className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-3">
                        {item.dropdown.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block py-1.5 text-sm text-gray-600 hover:text-idc-primary"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              }
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-idc-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
