import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, message } = await req.json()

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }

  if (!process.env.BREVO_API_KEY) {
    console.error("BREVO_API_KEY is not set")
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
  }

  const name = `${firstName} ${lastName}`

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "IDC Contact Form", email: "travis@instructionaldesigncentral.com" },
      to: [{ email: "info@instructionaldesigncentral.com", name: "Instructional Design Central" }],
      replyTo: { email, name },
      subject: `New IDC Contact Form Submission from ${name}`,
      textContent: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      htmlContent: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f26522;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    console.error(`Brevo error ${res.status}:`, body)
    const devDetail = process.env.NODE_ENV === "development" ? ` (Brevo ${res.status}: ${body})` : ""
    return NextResponse.json(
      { error: `Failed to send message. Please try again.${devDetail}` },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
