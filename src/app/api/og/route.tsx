import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get("title") ?? "Instructional Design Central"
  const description = searchParams.get("description") ?? ""

  // Truncate description to keep it to roughly one line
  const shortDesc =
    description.length > 120 ? description.slice(0, 117) + "…" : description

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#0c1c35",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top orange accent bar */}
        <div style={{ width: "100%", height: "10px", backgroundColor: "#f26522", flexShrink: 0 }} />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "52px 72px 48px",
            justifyContent: "space-between",
          }}
        >
          {/* IDC wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                backgroundColor: "#f26522",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#ffffff", fontWeight: 900, fontSize: "16px", letterSpacing: "0.05em" }}>
                IDC
              </span>
            </div>
            <span
              style={{
                color: "#cbd5e1",
                fontWeight: 600,
                fontSize: "16px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Instructional Design Central
            </span>
          </div>

          {/* Title block */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "920px" }}>
            {/* Orange accent rule */}
            <div
              style={{
                width: "52px",
                height: "5px",
                backgroundColor: "#f26522",
                borderRadius: "3px",
              }}
            />
            {/* Page title */}
            <div
              style={{
                fontSize: title.length > 40 ? "48px" : "58px",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </div>
            {/* Description */}
            {shortDesc && (
              <div
                style={{
                  fontSize: "22px",
                  color: "#7e9abf",
                  lineHeight: 1.4,
                  fontWeight: 500,
                }}
              >
                {shortDesc}
              </div>
            )}
          </div>

          {/* Footer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#3d5a80", fontSize: "15px", letterSpacing: "0.06em", fontWeight: 600 }}>
              instructionaldesigncentral.com
            </span>
            {/* Decorative dots */}
            <div style={{ display: "flex", gap: "6px" }}>
              {["#f26522", "#f26522", "#f26522"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: c,
                    opacity: 1 - i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
