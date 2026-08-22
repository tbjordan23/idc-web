// Triggered daily by the Railway cron service (see railway.cron.json) to refresh
// the instructional design job board with listings from the Jooble API.
//
// Manual trigger during development:
//   curl -X POST http://localhost:3000/api/jobs/sync \
//     -H "Authorization: Bearer YOUR_CRON_SECRET"
//
// Requires CRON_SECRET to be set in .env (and in Railway → Variables for production).

import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { syncJoobleJobs } from "@/lib/jobs/jooble"

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

export async function POST(req: NextRequest) {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret) {
    console.error("CRON_SECRET is not set")
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
  }

  const authHeader = req.headers.get("authorization")
  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const startedAt = new Date()

  try {
    const { fetched, added } = await syncJoobleJobs()

    const { count: removed } = await prisma.instructionalDesignJob.deleteMany({
      where: { fetchedAt: { lt: new Date(Date.now() - THIRTY_DAYS_MS) } },
    })

    const result = { fetched, added, removed }
    console.log(`[jobs/sync] ${startedAt.toISOString()} completed`, result)

    return NextResponse.json(result)
  } catch (err) {
    console.error(`[jobs/sync] ${startedAt.toISOString()} failed`, err)
    return NextResponse.json({ error: "Job sync failed." }, { status: 500 })
  }
}
