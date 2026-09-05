import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "bible365 — Read the Bible Anywhere",
    short_name: "bible365",
    description:
      "Free multilingual Bible — Korean, English, Vietnamese, Thai, Chinese, Filipino, Spanish. 24/7.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#b45309",
    orientation: "portrait",
    lang: "en",
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
        name: "Verse of the Day",
        url: "/",
        description: "Go to home",
      },
    ],
  };
}
