import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

function verifyConfirmToken(token: string): string | null {
  try {
    const secret = process.env.NEXTAUTH_SECRET!
    const { data, sig } = JSON.parse(Buffer.from(token, "base64url").toString())
    const expectedSig = crypto.createHmac("sha256", secret).update(data).digest("hex")
    if (sig !== expectedSig) return null
    const { email, expires } = JSON.parse(data)
    if (Date.now() > expires) return null
    return email
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

  const email = verifyConfirmToken(token)
  if (!email) {
    return NextResponse.redirect(`${siteUrl}/subscribe/confirmed?error=expired`)
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : null

  if (apiKey && listId) {
    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: { "api-key": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ email, listIds: [listId], updateEnabled: true }),
    })

    if (!contactRes.ok && contactRes.status !== 204) {
      const data = await contactRes.json().catch(() => ({}))
      if (data?.code !== "duplicate_parameter") {
        console.error("Brevo add contact error:", data)
      }
    }
  }

  return NextResponse.redirect(`${siteUrl}/subscribe/confirmed`)
}
