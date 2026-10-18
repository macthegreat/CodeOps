
import { ImageResponse } from "next/og";
import { getDishes } from "../../../lib/getDishes";

export const alt = "Dish preview from Addis Eats";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }) {
  const { id } = await params;
  const dishes = await getDishes();
  const dish = dishes.find((item) => String(item.id) === id);

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
          padding: "48px",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>
          {dish?.name ?? "Addis Eats"}
        </div>
        <div style={{ fontSize: 36, marginTop: 24 }}>
          {dish ? `${dish.price} ETB · Addis Ababa` : "Ethiopian food delivery"}
        </div>
      </div>
    ),
    size
  );
}
