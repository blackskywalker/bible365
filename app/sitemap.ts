import type { MetadataRoute } from "next";
import { BOOKS, LANGUAGES } from "@/lib/books";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bible365-khaki.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/ko`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/en`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/vi`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/th`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/zh`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/world`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const chapters: MetadataRoute.Sitemap = [];
  for (const lang of LANGUAGES) {
    for (const book of BOOKS) {
      for (let c = 1; c <= book.chapters; c++) {
        chapters.push({
          url: `${BASE_URL}/${lang}/${book.code}/${c}`,
          lastModified: now,
          changeFrequency: "yearly",
          priority: lang === "ko" || lang === "en" ? 0.8 : 0.6,
        });
      }
    }
  }

  return [...statics, ...chapters];
}
