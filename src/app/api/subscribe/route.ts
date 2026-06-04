import { NextRequest, NextResponse } from "next/server"

// Double opt-in flow using Brevo's native DOI endpoint.
//
// How it works:
//   1. User submits email → this route calls POST /contacts/doubleOptinConfirmation
//   2. Brevo sends a confirmation email using BREVO_DOI_TEMPLATE_ID
//   3. User clicks the {{ doubleoptin }} link in that email
//   4. Brevo adds them to the list and redirects to /subscribe/confirmed
//
// The welcome email (35% coupon) should fire from a Brevo automation that
// triggers on the "Contact added to list" event for BREVO_LIST_ID, NOT here.
// This ensures the coupon only reaches confirmed, deliverable addresses.
//
// Brevo template requirements:
//   - Create a new template in Brevo → Email Marketing → Templates
//   - The template body MUST contain {{ doubleoptin }} somewhere — this is the
//     confirmation hyperlink Brevo auto-populates. Wrap it in an anchor tag, e.g.:
//       <a href="{{ doubleoptin }}">Yes, confirm my subscription</a>
//   - Save the template, note its numeric ID, set it as BREVO_DOI_TEMPLATE_ID

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : null
  const doiTemplateId = process.env.BREVO_DOI_TEMPLATE_ID
    ? Number(process.env.BREVO_DOI_TEMPLATE_ID)
    : null
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.instructionaldesigncentral.com"

  if (!apiKey) {
    console.error("BREVO_API_KEY is not set")
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
  }

  if (!doiTemplateId || !listId) {
    console.error("BREVO_DOI_TEMPLATE_ID or BREVO_LIST_ID is not set")
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
  }

  const res = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      includeListIds: [listId],
      templateId: doiTemplateId,
      redirectionUrl: `${siteUrl}/subscribe/confirmed`,
    }),
  })

  // 204 = success (no body). Any other non-ok status is an error.
  if (!res.ok && res.status !== 204) {
    const data = await res.json().catch(() => ({}))
    console.error("Brevo DOI API error:", data)
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
