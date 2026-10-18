
import { ImageResponse } from "next/og";


export const alt = "Addis Eats — Ethiopian food delivery in Addis Ababa";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "#fff7ed",
          color: "#7c2d12",
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        <div>Addis Eats</div>
        <div style={{ fontSize: 32, marginTop: 24 }}>
          Ethiopian food delivered across Addis Ababa
        </div>
      </div>
    ),
    size
  );
}
