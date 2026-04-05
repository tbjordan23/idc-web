import Link from "next/link"

/* ─── SVG Illustration ──────────────────────────────────────────────────── */
function CourseIllustration() {
  return (
    <svg
      viewBox="0 0 500 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full select-none"
      aria-hidden="true"
    >
      <defs>
        <filter id="cs" x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#2e4057" floodOpacity="0.1" />
        </filter>
      </defs>

      {/* ── Dashed connector lines ──────────────────────────────────────── */}
      <path d="M134 84 C162 84 180 114 192 122" stroke="#f26522" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.4" />
      <path d="M366 70 C341 70 356 112 350 118" stroke="#4a7bc4" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.4" />
      <path d="M142 282 C170 282 184 250 192 242" stroke="#4a7bc4" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.4" />
      <path d="M358 288 C331 288 346 252 350 246" stroke="#f26522" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.4" />

      {/* ── Main course-editor canvas ───────────────────────────────────── */}
      <rect x="155" y="58" width="242" height="212" rx="14" filter="url(#cs)" style={{ fill: "var(--surface)", stroke: "var(--border)" }} strokeWidth="1" />
      {/* Title bar */}
      <rect x="155" y="58" width="242" height="42" rx="14" style={{ fill: "var(--surface-2)" }} />
      <rect x="155" y="84" width="242" height="16" style={{ fill: "var(--surface-2)" }} />
      {/* Window traffic-light dots */}
      <circle cx="179" cy="81" r="4.5" fill="#ff5f57" />
      <circle cx="195" cy="81" r="4.5" fill="#febc2e" />
      <circle cx="211" cy="81" r="4.5" fill="#28c840" />
      {/* Window title placeholder */}
      <rect x="232" y="77" width="72" height="7" rx="3.5" style={{ fill: "var(--border-hover)" }} />

      {/* Module rows */}
      <rect x="173" y="114" width="8" height="8" rx="2" fill="#f26522" />
      <rect x="187" y="115" width="150" height="6" rx="3" fill="#2e4057" opacity="0.65" />

      <rect x="173" y="133" width="8" height="8" rx="2" fill="#4a7bc4" opacity="0.7" />
      <rect x="187" y="134" width="120" height="6" rx="3" style={{ fill: "var(--border-hover)" }} />

      <rect x="173" y="152" width="8" height="8" rx="2" style={{ fill: "var(--border-hover)" }} />
      <rect x="187" y="153" width="136" height="6" rx="3" style={{ fill: "var(--border)" }} />

      <rect x="173" y="171" width="8" height="8" rx="2" style={{ fill: "var(--border-hover)" }} />
      <rect x="187" y="172" width="108" height="6" rx="3" style={{ fill: "var(--border)" }} />

      <rect x="173" y="190" width="8" height="8" rx="2" style={{ fill: "var(--border-hover)" }} />
      <rect x="187" y="191" width="128" height="6" rx="3" style={{ fill: "var(--border)" }} />

      <rect x="173" y="209" width="8" height="8" rx="2" style={{ fill: "var(--border)" }} />
      <rect x="187" y="210" width="100" height="6" rx="3" style={{ fill: "var(--border)" }} />

      {/* Progress bar */}
      <rect x="173" y="232" width="208" height="6" rx="3" style={{ fill: "var(--border)" }} />
      <rect x="173" y="232" width="122" height="6" rx="3" fill="#f26522" />
      <rect x="286" y="228" width="32" height="13" rx="4" fill="rgba(242,101,34,0.15)" />

      {/* ── Card 1 — Learning (top-left) ────────────────────────────────── */}
      <g className="illus-float">
        <rect x="12" y="42" width="122" height="82" rx="12" filter="url(#cs)" style={{ fill: "var(--surface)", stroke: "var(--border)" }} strokeWidth="1" />
        {/* Icon bg */}
        <circle cx="43" cy="74" r="17" fill="rgba(242,101,34,0.1)" />
        {/* Graduation cap — education icon */}
        <path d="M43 64 L55 70 L43 76 L31 70 Z" fill="#f26522" opacity="0.85" />
        <path d="M37 72.5 L37 80 Q43 83.5 49 80 L49 72.5" fill="#f26522" opacity="0.35" stroke="#f26522" strokeWidth="0.75" />
        <line x1="55" y1="70" x2="55" y2="78" stroke="#f26522" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <circle cx="55" cy="79.5" r="1.8" fill="#f26522" opacity="0.6" />
        {/* Text */}
        <rect x="67" y="64" width="58" height="7" rx="3.5" fill="#2e4057" opacity="0.65" />
        <rect x="67" y="77" width="42" height="5" rx="2.5" style={{ fill: "var(--border-hover)" }} />
        {/* Tag strip */}
        <rect x="20" y="108" width="96" height="10" rx="5" fill="rgba(242,101,34,0.1)" />
        <rect x="28" y="112" width="58" height="3" rx="1.5" fill="#f26522" opacity="0.45" />
      </g>

      {/* ── Card 2 — Video Module (top-right) ──────────────────────────── */}
      <g className="illus-float-2">
        <rect x="366" y="32" width="122" height="76" rx="12" filter="url(#cs)" style={{ fill: "var(--surface)", stroke: "var(--border)" }} strokeWidth="1" />
        {/* Play button */}
        <circle cx="398" cy="64" r="17" fill="rgba(74,123,196,0.12)" />
        <circle cx="398" cy="64" r="11" fill="rgba(74,123,196,0.22)" />
        <polygon points="395,59 406,64 395,69" fill="#4a7bc4" />
        {/* Text */}
        <rect x="420" y="55" width="56" height="7" rx="3.5" fill="#2e4057" opacity="0.65" />
        <rect x="420" y="68" width="40" height="5" rx="2.5" style={{ fill: "var(--border-hover)" }} />
        {/* Duration bar */}
        <rect x="374" y="96" width="102" height="5" rx="2.5" style={{ fill: "var(--border)" }} />
        <rect x="374" y="96" width="56" height="5" rx="2.5" fill="#4a7bc4" opacity="0.5" />
      </g>

      {/* ── Card 3 — Community (bottom-left) ───────────────────────────── */}
      <g className="illus-float-3">
        <rect x="10" y="248" width="132" height="76" rx="12" filter="url(#cs)" style={{ fill: "var(--surface)", stroke: "var(--border)" }} strokeWidth="1" />
        {/* Overlapping avatar circles */}
        <circle cx="40" cy="276" r="14" fill="rgba(74,123,196,0.22)" />
        <circle cx="56" cy="276" r="14" fill="rgba(242,101,34,0.22)" style={{ stroke: "var(--surface)" }} strokeWidth="2" />
        <circle cx="72" cy="276" r="14" fill="rgba(46,64,87,0.18)" style={{ stroke: "var(--surface)" }} strokeWidth="2" />
        <circle cx="40" cy="276" r="8" fill="#4a7bc4" opacity="0.5" />
        <circle cx="56" cy="276" r="8" fill="#f26522" opacity="0.5" />
        <circle cx="72" cy="276" r="8" fill="#2e4057" opacity="0.38" />
        {/* Text */}
        <rect x="92" y="267" width="42" height="8" rx="4" fill="#2e4057" opacity="0.65" />
        <rect x="92" y="281" width="34" height="5" rx="2.5" style={{ fill: "var(--border-hover)" }} />
        {/* Activity bar */}
        <rect x="22" y="306" width="108" height="9" rx="4.5" fill="rgba(74,123,196,0.1)" />
        <rect x="22" y="306" width="70" height="9" rx="4.5" fill="rgba(74,123,196,0.28)" />
      </g>

      {/* ── Card 4 — AI (bottom-right) ──────────────────────────────────── */}
      <g className="illus-float-4">
        <rect x="358" y="256" width="122" height="74" rx="12" filter="url(#cs)" style={{ fill: "var(--surface)", stroke: "var(--border)" }} strokeWidth="1" />
        {/* AI icon bg */}
        <circle cx="391" cy="284" r="17" fill="rgba(242,101,34,0.1)" />
        {/* Neural network — AI icon (3-layer: 2 inputs, 1 hidden, 1 output) */}
        {/* Input nodes */}
        <circle cx="383" cy="280" r="2.2" fill="#f26522" opacity="0.7" />
        <circle cx="383" cy="288" r="2.2" fill="#f26522" opacity="0.7" />
        {/* Hidden node */}
        <circle cx="391" cy="284" r="2.8" fill="#f26522" opacity="0.9" />
        {/* Output node */}
        <circle cx="399" cy="284" r="2.2" fill="#f26522" opacity="0.7" />
        {/* Connections: inputs → hidden */}
        <line x1="385" y1="280" x2="388" y2="283" stroke="#f26522" strokeWidth="1" opacity="0.5" />
        <line x1="385" y1="288" x2="388" y2="285" stroke="#f26522" strokeWidth="1" opacity="0.5" />
        {/* Connection: hidden → output */}
        <line x1="394" y1="284" x2="397" y2="284" stroke="#f26522" strokeWidth="1" opacity="0.5" />
        {/* Text */}
        <rect x="414" y="274" width="54" height="7" rx="3.5" fill="#2e4057" opacity="0.65" />
        <rect x="414" y="287" width="38" height="5" rx="2.5" style={{ fill: "var(--border-hover)" }} />
        {/* Pulse dots */}
        <circle cx="368" cy="316" r="3" fill="#f26522" opacity="0.75" />
        <circle cx="377" cy="316" r="3" fill="#f26522" opacity="0.6" />
        <circle cx="386" cy="316" r="3" fill="#f26522" opacity="0.45" />
        <circle cx="395" cy="316" r="3" fill="#f26522" opacity="0.3" />
        <circle cx="404" cy="316" r="3" fill="#f26522" opacity="0.15" />
      </g>

      {/* ── Accent sparkle dots ─────────────────────────────────────────── */}
      <circle cx="150" cy="50"  r="4"   fill="#f26522"  className="illus-pulse"   />
      <circle cx="362" cy="158" r="3"   fill="#4a7bc4"  className="illus-pulse-2" />
      <circle cx="138" cy="180" r="3"   fill="#4a7bc4"  className="illus-pulse-3" />
      <circle cx="410" cy="225" r="4"   fill="#f26522"  className="illus-pulse"   />
      <circle cx="278" cy="48"  r="3"   fill="#2e4057"  opacity="0.5" className="illus-pulse-2" />
      <circle cx="152" cy="342" r="3.5" fill="#f26522"  className="illus-pulse-3" />
      <circle cx="452" cy="160" r="2.5" fill="#4a7bc4"  className="illus-pulse"   />
    </svg>
  )
}

/* ─── HomeHero ──────────────────────────────────────────────────────────── */
export default function HomeHero() {
  return (
    <section
      className="relative overflow-hidden border-b border-edge"
      style={{
        backgroundImage:
          "radial-gradient(circle, var(--dot-texture) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        boxShadow: "0 4px 28px rgba(0,0,0,0.07)",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12">

          {/* ── Text ──────────────────────────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            <p className="hero-animate mb-4 text-xs font-bold uppercase tracking-widest text-accent">
              Welcome to IDC
            </p>
            <h1
              className="hero-animate hero-animate-delay-1 font-extrabold tracking-tight text-heading"
              style={{ fontSize: "clamp(32px,5vw,52px)", letterSpacing: "-0.075rem", lineHeight: 1.1 }}
            >
              Instructional Design Central
            </h1>
            <p className="hero-animate hero-animate-delay-2 mt-5 max-w-lg text-lg font-medium text-copy-muted lg:max-w-none">
              Helping course designers create brilliant learning experiences —
              online courses, community, and professional resources.
            </p>
            <div className="hero-animate hero-animate-delay-3 mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link
                href="/instructional-design-courses"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white btn-shadow hover:bg-accent-hover"
              >
                <svg className="h-4 w-4 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Explore Courses
              </Link>
              <Link
                href="/instructionaldesigncommunity"
                className="inline-flex items-center gap-2 rounded-lg border border-edge px-6 py-3 text-sm font-semibold text-copy-muted btn-shadow-neutral hover:border-edge-hover hover:text-copy"
              >
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Join the Community
              </Link>
            </div>
          </div>

          {/* ── Illustration ──────────────────────────────────────────── */}
          <div className="hero-animate hero-animate-delay-2 w-full shrink-0 lg:w-[460px] xl:w-[520px]">
            <CourseIllustration />
          </div>

        </div>
      </div>
    </section>
  )
}
