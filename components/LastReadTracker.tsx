"use client";

import { useEffect } from "react";

export function LastReadTracker({
  lang,
  book,
  chapter,
}: {
  lang: string;
  book: string;
  chapter: number;
}) {
  useEffect(() => {
    try {
      localStorage.setItem(
        "lastRead",
        JSON.stringify({ lang, book, chapter, ts: Date.now() })
      );
    } catch {}
  }, [lang, book, chapter]);

  return null;
}
