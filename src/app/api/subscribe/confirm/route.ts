import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

function verifyConfirmToken(token: string): { email: string; source?: string } | null {
  try {
    const secret = process.env.NEXTAUTH_SECRET!
    const { data, sig } = JSON.parse(Buffer.from(token, "base64url").toString())
    const expectedSig = crypto.createHmac("sha256", secret).update(data).digest("hex")
    if (sig !== expectedSig) return null
    const { email, expires, source } = JSON.parse(data)
    if (Date.now() > expires) return null
    return { email, source }
  } catch {
    return null
  }
}

export async function GET(req: NextRequest) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.instructionaldesigncentral.com"
  const token = req.nextUrl.searchParams.get("token")

  if (!token) {
    return NextResponse.redirect(`${siteUrl}/subscribe/confirmed?error=invalid`)
  }

  const verified = verifyConfirmToken(token)
  if (!verified) {
    return NextResponse.redirect(`${siteUrl}/subscribe/confirmed?error=expired`)
  }
  const { email, source } = verified

  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : null
  const welcomeTemplateId = process.env.BREVO_WELCOME_TEMPLATE_ID
    ? Number(process.env.BREVO_WELCOME_TEMPLATE_ID)
    : null

  if (apiKey && listId) {
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "api-key": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ email, listIds: [listId], updateEnabled: true }),
    })

    const isDuplicate = await (async () => {
      if (!contactRes.ok && contactRes.status !== 204) {
        const data = await contactRes.json().catch(() => ({}))
        if (data?.code !== "duplicate_parameter") {
          console.error("Brevo add contact error:", data)
        }
        return data?.code === "duplicate_parameter"
      }
      return false
    })()

    // Send welcome email only for new confirmations, not duplicate clicks
    if (!isDuplicate && welcomeTemplateId) {
      const welcomeRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: { "api-key": apiKey, "Content-Type": "application/json" },
        body: JSON.stringify({ to: [{ email }], templateId: welcomeTemplateId }),
      })
      if (!welcomeRes.ok) {
        const data = await welcomeRes.json().catch(() => ({}))
        console.error("Brevo welcome email error:", data)
      }
    }
  }

  const confirmedUrl = source
    ? `${siteUrl}/subscribe/confirmed?source=${encodeURIComponent(source)}`
    : `${siteUrl}/subscribe/confirmed`
  return NextResponse.redirect(confirmedUrl)
}
