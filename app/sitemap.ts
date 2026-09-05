import type { MetadataRoute } from "next";
import { BOOKS, LANGUAGES } from "@/lib/books";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bible365.art";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statics: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/ko`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/en`, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/vi`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/th`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/zh`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/tl`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/es`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/world`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // ko/en은 전체 핵심 챕터, 나머지 언어는 복음서+시편만
  const SITEMAP_BOOKS_FULL: Record<string, number> = {
    jhn: 21, psa: 150, gen: 50, mat: 28, rom: 16,
    pro: 31, isa: 66, rev: 22, luk: 24, act: 28,
    mrk: 16, eph: 6, php: 4, col: 4, heb: 13,
  };
  const SITEMAP_BOOKS_CORE: Record<string, number> = {
    jhn: 21, mat: 28, luk: 24, mrk: 16, psa: 50, rom: 16,
  };

  const chapters: MetadataRoute.Sitemap = [];
  for (const lang of LANGUAGES) {
    const SITEMAP_BOOKS = (lang === "ko" || lang === "en") ? SITEMAP_BOOKS_FULL : SITEMAP_BOOKS_CORE;
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
