import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : null

  if (!apiKey) {
    console.error("BREVO_API_KEY is not set")
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
  }

  const body: Record<string, unknown> = {
    email,
    updateEnabled: true,
  }
  if (listId) body.listIds = [listId]

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (res.ok || res.status === 204) {
    return NextResponse.json({ success: true })
  }

  const data = await res.json().catch(() => ({}))
  // Brevo returns 400 with code "duplicate_parameter" when contact already exists
  if (data?.code === "duplicate_parameter") {
    return NextResponse.json({ success: true })
  }

  console.error("Brevo API error:", data)
  return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 502 })
}
