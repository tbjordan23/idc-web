# CLAUDE.md — Instructional Design Central (idc-web)

## Build Phase
**MVP: Content site migration** — migrating instructionaldesigncentral.com from Wix to Next.js 14.
The site grows from a content/SEO resource platform into a SaaS product platform over time.

---

## Stack

| Layer       | Technology                                    |
|-------------|-----------------------------------------------|
| Framework   | Next.js 14 (App Router)                       |
| Language    | TypeScript (strict)                           |
| Styling     | Tailwind CSS with IDC brand tokens            |
| Auth        | NextAuth.js v4 (no providers wired yet)       |
| Database    | PostgreSQL via Prisma v5                      |
| Deployment  | Railway (Node server, auto-deploy from GitHub)|
| Sitemap     | next-sitemap (runs as postbuild step)         |

---

## Key Architectural Decisions

### URL structure is SEO-critical — never change existing routes
The live site (Wix) has URLs like `/whatisinstructionaldesign`, `/addie-model`, `/aboutinstructionaldesigncentral`.
These flat, hyphen-inconsistent slugs are the actual URLs with existing PageRank and inbound links.
**Do not "clean up" or nest them.** Match exactly.

Blog posts live at `/post/[slug]` (NOT `/blog/[slug]`). The blog index is at `/blog`.
Legacy date-based posts (`/post/2016/04/14/slug`) are handled by the catch-all `[...slug]` route.

### Server Components by default
Only add `"use client"` when strictly necessary (event handlers, browser APIs, hooks).
The Header is client-side due to mobile menu state. Everything else should be server components.

### Metadata via generateMetadata / metadata export
Use the `generatePageMetadata()` helper from `@/lib/metadata` to keep Open Graph, canonical URLs,
and title templates consistent. Never write raw `<head>` tags; Next.js handles this.

### Auth is a placeholder
NextAuth is installed but has zero providers configured. The `authOptions` in `@/lib/auth.ts`
is the place to add providers (Google, GitHub, magic link, etc.) when auth is needed.

### Database is not migrated yet
Prisma schema exists with a `User` model only. Do NOT run `prisma migrate` until the database
is provisioned and you're ready for the user auth feature. Use `prisma db push` for quick dev.

---

## Folder Structure

```
idc-web/
├── prisma/
│   └── schema.prisma            # DB schema — User model only for now
├── public/                      # Static assets (sitemap/robots generated at build)
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── layout.tsx           # Root layout (Header + Footer)
│   │   ├── page.tsx             # Homepage /
│   │   ├── globals.css          # Tailwind base + global styles
│   │   │
│   │   ├── post/[...slug]/      # Blog posts: /post/slug AND /post/YYYY/MM/DD/slug
│   │   ├── blog/                # Blog index + category pages
│   │   │   └── categories/[category]/
│   │   │
│   │   ├── instructional-design-courses/   # All courses listing
│   │   ├── instructional-design-course/    # ID Foundations course
│   │   ├── addie-model-course/             # ADDIE course
│   │   │
│   │   ├── instructionaldesigntemplates/   # Templates resource
│   │   ├── needs-analysis-app/             # Needs Analysis Tool
│   │   ├── chatid-instructional-design-ai/ # ChatID GPT
│   │   ├── learning-circle-framework/      # Learning Circle
│   │   ├── the-learning-design-canvas/     # Design Canvas
│   │   ├── top-rated-elearning-tools/      # Tool reviews
│   │   ├── top-rated-lms/                  # LMS reviews
│   │   ├── instructionaldesignjobs/        # Jobs board
│   │   ├── instructionaldesignconferences/ # Conferences
│   │   ├── instructionaldesigndegree/      # Degree programs
│   │   ├── instructionaldesignersalary/    # Salary guide
│   │   │
│   │   ├── whatisinstructionaldesign/      # Content: What is ID
│   │   ├── instructionaldesignmodels/      # Content: ID Models
│   │   ├── addie-model/                    # Content: ADDIE Model
│   │   ├── needs-analysis/                 # Content: Needs Analysis
│   │   ├── adult-learning-theory/          # Content: Adult Learning
│   │   ├── learning-theory/                # Content: Learning Theory
│   │   ├── instructional-design-history/   # Content: ID History
│   │   │
│   │   ├── aboutinstructionaldesigncentral/
│   │   ├── contactinstructionaldesigncentral/
│   │   ├── instructionaldesigncommunity/
│   │   └── api/auth/[...nextauth]/         # NextAuth handler
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # Full nav with dropdowns + mobile menu
│   │   │   └── Footer.tsx       # Footer with links + newsletter CTA
│   │   └── ui/
│   │       ├── Hero.tsx         # Reusable hero (props-driven)
│   │       ├── Card.tsx         # Course / resource / blog card
│   │       └── ContentPage.tsx  # Shared template for content/learn pages
│   │
│   ├── lib/
│   │   ├── metadata.ts          # generatePageMetadata() helper
│   │   ├── auth.ts              # NextAuth authOptions
│   │   └── prisma.ts            # Prisma singleton
│   │
│   └── types/
│       └── next-auth.d.ts       # Session type augmentation (adds .user.id)
```

---

## Running Locally

```bash
cd idc-web
npm install
npm run dev       # http://localhost:3000
```

## Environment
Copy `.env.example` to `.env` and fill in values. See README for details.

## Deployment
Push to GitHub → Railway autodeploys. See README for Railway setup steps.

---

## Target Audience & Content Tone

**Audience:** Instructional design professionals and career changers — 70% female, ages 25–40.

**Tone principles — always write this way:**
- **Warm and community-forward** — this audience responds to belonging and connection, not just credentials and stats. Lead with "you're in the right place" energy.
- **Career empowerment framing** — less "here are the numbers," more "here's what becomes possible for you." Focus on outcomes and transformation, not features and statistics.
- **Conversational but professional** — not corporate, not casual. Write like a trusted colleague who knows their stuff, not a textbook or a sales pitch.
- **Inclusive and relatable** — language that feels written specifically for this person, not a generic professional audience. Avoid jargon-heavy or overly masculine achievement framing (e.g., avoid "dominate," "crush," "win"). Prefer "grow," "build," "explore," "connect."
- **Direct but human** — get to the point, but don't strip out the warmth doing it.

**Red flags to avoid:**
- Stat-heavy intros that feel like a press release
- Generic motivational language ("take your career to the next level")
- Cold, credentials-first framing without context for why it matters to the reader
- Passive, distant voice — write in second person ("you") whenever natural
