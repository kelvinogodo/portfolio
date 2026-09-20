import { ImageResponse } from "next/og";

export const alt = "Kelvin Ogodo, builder, engineer, founder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  // Concentric rings echo the fingerprint ridges in the page header.
  const rings = Array.from({ length: 9 }, (_, i) => 200 + i * 78);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#14171C",
          color: "#ECE9E2",
        }}
      >
        {rings.map((d) => (
          <div
            key={d}
            style={{
              position: "absolute",
              right: 120 - d / 2,
              top: 315 - d / 2,
              width: d,
              height: d,
              borderRadius: "50%",
              border: "2px solid #35597B",
            }}
          />
        ))}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 80px",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#D8D3C8", letterSpacing: 1 }}>Identity record</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 128, fontWeight: 300, letterSpacing: -4, lineHeight: 1 }}>Kelvin Ogodo</div>
            <div style={{ display: "flex", fontSize: 44, color: "#D8D3C8", marginTop: 20, fontStyle: "italic" }}>
              builder. engineer. founder.
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
