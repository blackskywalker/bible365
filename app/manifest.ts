import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "bible365 — 어디서든 펼치는 성경",
    short_name: "bible365",
    description:
      "24시간 365일 어디서든 가볍게 펼치는 다국어 온라인 성경. Read the Bible anywhere, anytime.",
    start_url: "/ko",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#b45309",
    orientation: "portrait",
    lang: "ko",
    categories: ["education", "lifestyle", "religion"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "오늘의 말씀",
        url: "/ko",
        description: "홈으로 이동",
      },
    ],
  };
}
