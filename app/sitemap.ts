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

  // 사이트맵은 ko/en 핵심 챕터만 — 구글봇 크롤링 부하 최소화
  const SITEMAP_BOOKS: Record<string, number> = {
    jhn: 21, psa: 150, gen: 50, mat: 28, rom: 16,
    pro: 31, isa: 66, rev: 22, luk: 24, act: 28,
    mrk: 16, eph: 6, php: 4, col: 4, heb: 13,
  };

  const chapters: MetadataRoute.Sitemap = [];
  for (const lang of ["ko", "en"] as const) {
    for (const book of BOOKS) {
      const limit = SITEMAP_BOOKS[book.code];
      if (!limit) continue;
      for (let c = 1; c <= limit; c++) {
        chapters.push({
          url: `${BASE_URL}/${lang}/${book.code}/${c}`,
          lastModified: now,
          changeFrequency: "yearly",
          priority: 0.7,
        });
      }
    }
  }

  return [...statics, ...chapters];
}
