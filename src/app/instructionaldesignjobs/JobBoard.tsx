"use client"

import { useMemo, useState } from "react"
import { timeAgo } from "@/lib/jobs/format"

export interface JobDTO {
  id: number
  title: string
  company: string | null
  location: string | null
  isRemote: boolean
  jobType: string | null
  salary: string | null
  description: string | null
  applyUrl: string
  datePosted: string | null
}

interface JobBoardProps {
  jobs: JobDTO[]
}

const JOB_TYPES = ["All", "Full-time", "Part-time", "Contract"] as const

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z]/g, "")
}

function JobTypeBadge({ jobType }: { jobType: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[rgba(74,123,196,0.15)] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent-2">
      {jobType}
    </span>
  )
}

function RemoteBadge() {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--accent-glow)] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-accent">
      Remote
    </span>
  )
}

function JobCard({ job }: { job: JobDTO }) {
  const excerpt = job.description
    ? job.description.length > 150
      ? `${job.description.slice(0, 150).trim()}…`
      : job.description
    : null

  return (
    <div className="rounded-card border border-edge bg-surface p-6 shadow-card transition-all duration-200 hover:border-edge-hover hover:shadow-card-hover">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-extrabold text-copy transition-colors hover:text-accent"
          >
            {job.title}
          </a>
          {job.company && <p className="mt-0.5 text-sm font-bold text-copy-muted">{job.company}</p>}
        </div>
        {job.salary && (
          <span className="inline-flex items-center rounded-full bg-[var(--accent-glow)] px-3 py-1 text-sm font-bold text-accent">
            {job.salary}
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {job.location && (
          <span className="text-xs font-bold uppercase tracking-wider text-copy-dim">
            {job.location}
          </span>
        )}
        {job.isRemote && <RemoteBadge />}
        {job.jobType && <JobTypeBadge jobType={job.jobType} />}
        {job.datePosted && (
          <span className="text-xs font-medium text-copy-dim" suppressHydrationWarning>
            {timeAgo(job.datePosted)}
          </span>
        )}
      </div>

      {excerpt && (
        <p className="mt-3 text-sm font-medium leading-relaxed text-copy-muted">{excerpt}</p>
      )}

      <a
        href={job.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-shadow mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
      >
        View & Apply
        <svg
          className="h-4 w-4 text-white/80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  )
}

export default function JobBoard({ jobs }: JobBoardProps) {
  const [keyword, setKeyword] = useState("")
  const [remoteOnly, setRemoteOnly] = useState(false)
  const [jobType, setJobType] = useState<(typeof JOB_TYPES)[number]>("All")

  const filteredJobs = useMemo(() => {
    const needle = keyword.trim().toLowerCase()
    return jobs.filter((job) => {
      if (needle) {
        const haystack = `${job.title} ${job.company ?? ""}`.toLowerCase()
        if (!haystack.includes(needle)) return false
      }
      if (remoteOnly && !job.isRemote) return false
      if (jobType !== "All") {
        if (!job.jobType || normalize(job.jobType) !== normalize(jobType)) return false
      }
      return true
    })
  }, [jobs, keyword, remoteOnly, jobType])

  if (jobs.length === 0) {
    return (
      <div className="rounded-card border border-edge bg-surface p-8 text-center shadow-card">
        <p className="text-sm font-medium leading-relaxed text-copy-muted">
          Job listings are being loaded — check back soon. In the meantime, explore our career guide
          below.
        </p>
      </div>
    )
  }

  const inputClass =
    "rounded-lg border border-edge bg-surface px-4 py-2.5 text-sm font-medium text-copy placeholder:text-copy-dim focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 rounded-card border border-edge bg-surface-2 p-4">
        <div className="relative min-w-[200px] flex-1">
          <svg
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-copy-dim"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search job title or company…"
            className={`${inputClass} w-full pl-9`}
          />
        </div>

        <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-copy">
          <input
            type="checkbox"
            checked={remoteOnly}
            onChange={(e) => setRemoteOnly(e.target.checked)}
            className="h-4 w-4 rounded border-edge text-accent accent-accent focus:ring-1 focus:ring-accent"
          />
          Remote only
        </label>

        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value as (typeof JOB_TYPES)[number])}
          className={inputClass}
        >
          {JOB_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <span className="ml-auto text-xs font-bold uppercase tracking-wider text-copy-dim">
          Showing {filteredJobs.length} job{filteredJobs.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="mt-6 space-y-5">
        {filteredJobs.length === 0 ? (
          <p className="rounded-card border border-edge bg-surface p-6 text-center text-sm font-medium text-copy-muted shadow-card">
            No jobs match your filters. Try widening your search.
          </p>
        ) : (
          filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
        )}
      </div>
    </div>
  )
}
