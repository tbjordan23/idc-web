import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

// Custom double opt-in flow (Brevo's native DOI endpoint requires templates created
// through their internal DOI wizard, which can't be done via the regular template editor).
//
// How it works:
//   1. User submits email → this route generates a signed token and sends a
//      confirmation email via a regular Brevo transactional template.
//   2. The template must contain a link whose URL is: {{ params.CONFIRMATION_URL }}
//      Brevo will substitute the actual URL at send time.
//   3. User clicks the link → /api/subscribe/confirm validates the token and
//      adds them to the list, then redirects to /subscribe/confirmed.
//
// Brevo template setup (one-time):
//   - Edit your Confirm-Email template (#5)
//   - Select the "Confirm my subscription" link text
//   - Change the link URL to: {{ params.CONFIRMATION_URL }}
//   - Save & activate
//
// Whitepaper signups (source: "whitepaper") use a separate confirmation template so the
// copy can mention the download instead of just the newsletter. Duplicate the Confirm-Email
// template, update the wording, apply the same {{ params.CONFIRMATION_URL }} link, and set
// its ID as BREVO_DOI_TEMPLATE_ID_WHITEPAPER. Falls back to BREVO_DOI_TEMPLATE_ID if unset.

function generateConfirmToken(email: string, source?: string): string {
  const secret = process.env.NEXTAUTH_SECRET!
  const expires = Date.now() + 48 * 60 * 60 * 1000 // 48 hours
  const data = JSON.stringify({ email, expires, source })
  const sig = crypto.createHmac("sha256", secret).update(data).digest("hex")
  return Buffer.from(JSON.stringify({ data, sig })).toString("base64url")
}

export async function POST(req: NextRequest) {
  const { email, source } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required." }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const whitepaperTemplateId = process.env.BREVO_DOI_TEMPLATE_ID_WHITEPAPER
    ? Number(process.env.BREVO_DOI_TEMPLATE_ID_WHITEPAPER)
    : null
  const templateId =
    source === "whitepaper" && whitepaperTemplateId
      ? whitepaperTemplateId
      : process.env.BREVO_DOI_TEMPLATE_ID
        ? Number(process.env.BREVO_DOI_TEMPLATE_ID)
        : null
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.instructionaldesigncentral.com"

  if (!apiKey || !templateId) {
    console.error("Missing BREVO_API_KEY or BREVO_DOI_TEMPLATE_ID")
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 })
  }

  const token = generateConfirmToken(email, source)
  const confirmationUrl = `${siteUrl}/api/subscribe/confirm?token=${token}`

  const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": apiKey, "Content-Type": "application/json" },
    body: JSON.stringify({
      to: [{ email }],
      templateId,
      params: { CONFIRMATION_URL: confirmationUrl },
    }),
  })

  if (!emailRes.ok) {
    const data = await emailRes.json().catch(() => ({}))
    console.error("Brevo send email error:", data)
    return NextResponse.json({ error: "Could not subscribe. Please try again." }, { status: 502 })
  }

  return NextResponse.json({ success: true })
}
