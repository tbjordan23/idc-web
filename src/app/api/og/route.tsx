import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get("title") ?? "Instructional Design Central"
  const description = searchParams.get("description") ?? ""

  const shortDesc =
    description.length > 110 ? description.slice(0, 107) + "…" : description

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#090f1e",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background gradient wash — top-right warm glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(242,101,34,0.07) 0%, transparent 65%)",
          }}
        />
        {/* Background gradient wash — bottom-left cool glow */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,123,196,0.10) 0%, transparent 65%)",
          }}
        />

        {/* Decorative rings — top right */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -180,
            width: 620,
            height: 620,
            borderRadius: "50%",
            border: "1.5px solid rgba(242,101,34,0.10)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 420,
            height: 420,
            borderRadius: "50%",
            border: "1.5px solid rgba(242,101,34,0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -30,
            right: -30,
            width: 240,
            height: 240,
            borderRadius: "50%",
            border: "1px solid rgba(242,101,34,0.10)",
          }}
        />

        {/* Decorative rings — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 520,
            height: 520,
            borderRadius: "50%",
            border: "1px solid rgba(74,123,196,0.10)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            border: "1px solid rgba(74,123,196,0.08)",
          }}
        />

        {/* Top orange bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(to right, #f26522, #f9924a)",
          }}
        />

        {/* Dot grid — mid-right decorative area */}
        <div
          style={{
            position: "absolute",
            right: 72,
            top: 180,
            display: "flex",
            flexDirection: "column",
            gap: 14,
            opacity: 0.18,
          }}
        >
          {[0, 1, 2, 3, 4].map((row) => (
            <div key={row} style={{ display: "flex", gap: 14 }}>
              {[0, 1, 2, 3, 4].map((col) => (
                <div
                  key={col}
                  style={{
                    width: 3,
                    height: 3,
                    borderRadius: "50%",
                    backgroundColor: "#f26522",
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "48px 80px 44px",
            justifyContent: "space-between",
          }}
        >
          {/* IDC wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                background: "linear-gradient(135deg, #f26522, #e0541a)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(242,101,34,0.35)",
              }}
            >
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 15, letterSpacing: "0.04em" }}>
                IDC
              </span>
            </div>
            <span
              style={{
                color: "#64748b",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Instructional Design Central
            </span>
          </div>

          {/* Title block */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 860 }}>
            {/* Accent rule — double dash */}
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 36, height: 4, backgroundColor: "#f26522", borderRadius: 2 }} />
              <div style={{ width: 14, height: 4, backgroundColor: "#f26522", borderRadius: 2, opacity: 0.4 }} />
              <div style={{ width: 6, height: 4, backgroundColor: "#f26522", borderRadius: 2, opacity: 0.2 }} />
            </div>
            {/* Title */}
            <div
              style={{
                fontSize: title.length > 50 ? "46px" : title.length > 35 ? "54px" : "64px",
                fontWeight: 800,
                color: "#f8fafc",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
              }}
            >
              {title}
            </div>
            {/* Description */}
            {shortDesc && (
              <div
                style={{
                  fontSize: 21,
                  color: "#6b88a8",
                  lineHeight: 1.5,
                  fontWeight: 500,
                  maxWidth: 780,
                }}
              >
                {shortDesc}
              </div>
            )}
          </div>

          {/* Footer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#f26522", opacity: 0.7 }} />
              <span style={{ color: "#2d4a6e", fontSize: 14, letterSpacing: "0.07em", fontWeight: 600 }}>
                instructionaldesigncentral.com
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 28, height: 2, backgroundColor: "#f26522", borderRadius: 1, opacity: 0.6 }} />
              <div style={{ width: 16, height: 2, backgroundColor: "#f26522", borderRadius: 1, opacity: 0.35 }} />
              <div style={{ width: 8, height: 2, backgroundColor: "#f26522", borderRadius: 1, opacity: 0.18 }} />
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
