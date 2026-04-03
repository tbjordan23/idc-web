# Instructional Design Central — Web Platform

Next.js 14 (App Router) rewrite of [instructionaldesigncentral.com](https://www.instructionaldesigncentral.com).

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file
cp .env.example .env
# Edit .env and fill in your values

# 3. Start dev server
npm run dev
# → http://localhost:3000
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXTAUTH_URL` | Full URL of your app (e.g. `http://localhost:3000`) | Yes |
| `NEXTAUTH_SECRET` | Random secret — generate with `openssl rand -base64 32` | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `NEXT_PUBLIC_SITE_URL` | Public site URL used for metadata and sitemap generation | Yes |

## Database Setup

Prisma is configured but no migrations have been run yet.

```bash
# After setting DATABASE_URL in .env:
npx prisma db push      # push schema to your DB (development)
npx prisma studio       # optional: browse your data
```

> Do NOT run `prisma migrate dev` until you are ready to commit migrations to version control.

## Build

```bash
npm run build   # builds Next.js + generates sitemap/robots.txt
npm start       # starts production server
```

## Linting & Formatting

```bash
npm run lint      # ESLint
npm run format    # Prettier (writes files)
```

## Railway Deployment

1. Push this directory to a GitHub repo under `tbjordan23/idc-web` (or your repo name).
2. Create a new Railway project and connect it to that GitHub repo.
3. Add all environment variables from `.env.example` in the Railway dashboard.
4. Railway will autodeploy on every push to `main`.

The `railway.toml` at the project root tells Railway to use Nixpacks, run `npm run build`, and start with `npm start`.

## Project Structure

See `CLAUDE.md` for a full folder structure explanation and architectural decisions.

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with IDC brand colors
- **NextAuth.js v4** (auth foundation, no providers yet)
- **Prisma v5** + PostgreSQL (schema ready, not migrated)
- **next-sitemap** (generates sitemap.xml + robots.txt at build time)
