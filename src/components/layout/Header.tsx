"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import ThemeToggle from "@/components/ui/ThemeToggle"

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
    <div className="absolute top-full left-0 z-50 mt-2 w-60 overflow-hidden rounded-card border border-edge bg-surface shadow-card">
      <ul className="py-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm font-medium text-copy-muted transition-colors hover:bg-surface-2 hover:text-copy"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function NavLink({ item, onClose }: { item: NavItem; onClose?: () => void }) {
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
          className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-copy-muted transition-colors hover:text-copy"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {item.label}
          <svg
            className={`h-3.5 w-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
      onClick={onClose}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        isActive ? "text-accent" : "text-copy-muted hover:text-copy"
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
    <header
      className="sticky top-0 z-40 border-b border-edge backdrop-blur-nav"
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image src="/idc-logo.png" alt="IDC logo" width={28} height={28} className="h-7 w-7 object-contain" />
          <span className="text-sm font-bold tracking-tight text-copy">
            IDC
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center lg:flex">
          {navigation.main.map((item) => (
            <NavLink key={item.label} item={item as NavItem} />
          ))}
        </nav>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-2">
          <a
            href="https://instructional-design-central.mn.co/sign_in?from=https%3A%2F%2Finstructional-design-central.mn.co%2F"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-copy-muted btn-shadow-neutral hover:text-copy lg:flex"
          >
            <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
            </svg>
            Login
          </a>
          <a
            href="https://instructional-design-central.mn.co/"
            className="hidden items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white btn-shadow lg:flex hover:bg-accent-hover"
          >
            <svg className="h-3.5 w-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Join Free
          </a>
          <Link
            href="/instructional-design-courses"
            className="hidden rounded-lg border border-edge px-4 py-2 text-sm font-semibold text-copy-muted btn-shadow-neutral hover:border-edge-hover hover:text-copy xl:block"
          >
            Explore Courses →
          </Link>
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-edge text-copy-muted transition-colors hover:border-edge-hover hover:text-copy lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-edge bg-surface px-4 pb-4 lg:hidden">
          <ul className="mt-2 space-y-0.5">
            {navigation.main.map((item) => {
              if (item.dropdown) {
                const isExpanded = mobileExpanded === item.label
                return (
                  <li key={item.label}>
                    <button
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-copy-muted"
                      onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                    >
                      {item.label}
                      <svg
                        className={`h-3.5 w-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isExpanded && (
                      <ul className="ml-3 mt-0.5 space-y-0.5 border-l border-edge pl-3">
                        {item.dropdown.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className="block rounded-lg px-3 py-1.5 text-sm text-copy-dim transition-colors hover:text-copy"
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
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-copy-muted transition-colors hover:text-copy"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2 flex flex-col gap-2">
              <a
                href="https://instructional-design-central.mn.co/"
                className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white btn-shadow"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="h-3.5 w-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Join Free
              </a>
              <a
                href="https://instructional-design-central.mn.co/sign_in?from=https%3A%2F%2Finstructional-design-central.mn.co%2F"
                className="flex items-center justify-center gap-2 rounded-lg border border-edge px-4 py-2.5 text-sm font-semibold text-copy-muted btn-shadow-neutral"
                onClick={() => setMobileOpen(false)}
              >
                <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" />
                </svg>
                Login
              </a>
              <Link
                href="/instructional-design-courses"
                className="block rounded-lg border border-edge px-4 py-2.5 text-center text-sm font-semibold text-copy-muted btn-shadow-neutral"
                onClick={() => setMobileOpen(false)}
              >
                Explore Courses →
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
