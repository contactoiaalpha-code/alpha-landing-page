import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const fontData = await fetch(new URL("../../fonts/GeistVF.woff", import.meta.url))
    .then((res) => res.arrayBuffer())
    .catch(() => undefined);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#000,#1A1A1A)",
          color: "#fff",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            fontFamily: "Inter, system-ui, sans-serif",
            textAlign: "center",
          }}
        >
          Agencia Alpha IA
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            color: "#FFD700",
            fontWeight: 600,
            textAlign: "center",
            maxWidth: 1000,
          }}
        >
          La IA que libera tu TIEMPO, para que TU LIDERES.
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontData
        ? [
            {
              name: "Geist",
              data: fontData,
              weight: 700,
              style: "normal",
            },
          ]
        : [],
    }
  );
}


