// Jooble REST API integration — fetches instructional design job listings and
// upserts them into the `instructional_design_jobs` table.
//
// Requires the JOOBLE_API_KEY environment variable (see Railway → Variables).
// Register for a key at https://jooble.org/api/about
//
// API docs: https://help.jooble.org/en/support/solutions/articles/60001448238-rest-api-documentation
// Request:  POST https://jooble.org/api/{api_key}  { keywords, location, page, ... }
// Response: { totalCount, jobs: [{ id, title, location, snippet, salary, source, type, link, company, updated }] }

import { prisma } from "@/lib/prisma"

const JOOBLE_ENDPOINT = "https://jooble.org/api"

const SEARCH_TERMS = [
  "instructional designer",
  "learning experience designer",
  "eLearning developer",
  "instructional design",
  "L&D specialist",
  "learning and development",
]

const US_STATE_ABBREVIATIONS = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
  "DC",
]

const US_STATE_PATTERN = new RegExp(`,\\s*(${US_STATE_ABBREVIATIONS.join("|")})\\b`, "i")
const US_NAME_PATTERN = /\b(united states|usa|u\.s\.a?\.?)\b/i
const REMOTE_PATTERN = /\bremote\b/i

interface JoobleJob {
  id: number | string
  title: string
  location?: string
  snippet?: string
  salary?: string
  source?: string
  type?: string
  link: string
  company?: string
  updated?: string
}

interface JoobleResponse {
  totalCount: number
  jobs: JoobleJob[]
}

function isRemoteListing(job: JoobleJob): boolean {
  return REMOTE_PATTERN.test(job.location ?? "") || REMOTE_PATTERN.test(job.title ?? "")
}

function isUsBased(job: JoobleJob): boolean {
  const location = job.location ?? ""
  return US_STATE_PATTERN.test(location) || US_NAME_PATTERN.test(location)
}

async function fetchForKeyword(apiKey: string, keywords: string): Promise<JoobleJob[]> {
  const res = await fetch(`${JOOBLE_ENDPOINT}/${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keywords, location: "United States" }),
  })

  if (!res.ok) {
    console.error(`Jooble request failed for "${keywords}": ${res.status} ${res.statusText}`)
    return []
  }

  const data: JoobleResponse = await res.json()
  return data.jobs ?? []
}

export async function syncJoobleJobs(): Promise<{ fetched: number; added: number }> {
  const apiKey = process.env.JOOBLE_API_KEY
  if (!apiKey) {
    throw new Error("JOOBLE_API_KEY is not set")
  }

  const results = await Promise.allSettled(
    SEARCH_TERMS.map((keywords) => fetchForKeyword(apiKey, keywords))
  )

  const allJobs = results.flatMap((result) => (result.status === "fulfilled" ? result.value : []))

  const eligibleJobs = allJobs.filter((job) => isRemoteListing(job) || isUsBased(job))

  // Dedupe by external ID — a job can appear under multiple search terms.
  const dedupedJobs = new Map<string, JoobleJob>()
  for (const job of eligibleJobs) {
    dedupedJobs.set(String(job.id), job)
  }

  const externalIds = Array.from(dedupedJobs.keys())
  const existing = await prisma.instructionalDesignJob.findMany({
    where: { externalId: { in: externalIds } },
    select: { externalId: true },
  })
  const existingIds = new Set(existing.map((job) => job.externalId))

  for (const [externalId, job] of Array.from(dedupedJobs)) {
    const remote = isRemoteListing(job)
    const data = {
      title: job.title,
      company: job.company ?? null,
      location: job.location ?? null,
      isRemote: remote,
      jobType: job.type ?? null,
      salary: job.salary ?? null,
      description: job.snippet ?? null,
      applyUrl: job.link,
      source: job.source ?? "jooble",
      datePosted: job.updated ? new Date(job.updated) : null,
      fetchedAt: new Date(),
    }

    await prisma.instructionalDesignJob.upsert({
      where: { externalId },
      create: { externalId, ...data },
      update: data,
    })
  }

  const added = externalIds.filter((id) => !existingIds.has(id)).length

  return { fetched: dedupedJobs.size, added }
}
