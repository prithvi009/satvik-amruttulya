import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Satvik Amruttulya Franchise — ₹2.5 lakh, Zero Royalty";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#3a2010",
          color: "#f8f0e1",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        <div style={{ color: "#f2721c", fontSize: 80, marginBottom: 20 }}>Satvik Amruttulya</div>
        {/* Latin-only copy here on purpose: satori (next/og) resolves a
            separate web font per script at build time, and a Devanagari
            string would trigger a live fetch to fonts.googleapis.com that
            may not always succeed in every build environment. */}
        <div style={{ fontSize: 40, display: "flex" }}>Rs 2.5 Lakh Franchise · Zero Royalty</div>
      </div>
    ),
    { ...size }
  );
}
