import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : null
  const templateId = process.env.BREVO_WELCOME_TEMPLATE_ID
    ? Number(process.env.BREVO_WELCOME_TEMPLATE_ID)
    : null

  if (!apiKey) {
    console.error("BREVO_API_KEY is not set")
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
  }

  // Add contact to list
  const contactBody: Record<string, unknown> = { email, updateEnabled: true }
  if (listId) contactBody.listIds = [listId]

  const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify(contactBody),
  })

  if (!contactRes.ok && contactRes.status !== 204) {
    const data = await contactRes.json().catch(() => ({}))
    if (data?.code !== "duplicate_parameter") {
      console.error("Brevo contacts API error:", data)
      return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 502 })
    }
  }

  // Send welcome email via template
  if (templateId) {
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: { "api-key": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        to: [{ email }],
        templateId,
      }),
    })

    if (!emailRes.ok) {
      const data = await emailRes.json().catch(() => ({}))
      console.error("Brevo transactional email error:", data)
    }
  }

  return NextResponse.json({ success: true })
}
