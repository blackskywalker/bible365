import { BOOK_BY_CODE, type Lang } from "./books";

export type Verse = { v: number; t: string };
export type Chapter = {
  lang: Lang;
  book: string;
  chapter: number;
  verses: Verse[];
};

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export async function loadChapter(
  lang: Lang,
  bookCode: string,
  chapter: number,
): Promise<Chapter | null> {
  const meta = BOOK_BY_CODE[bookCode];
  if (!meta) return null;
  if (chapter < 1 || chapter > meta.chapters) return null;
  try {
    const url = `${BASE_URL}/bible/${lang}/${bookCode}/${chapter}.json`;
    const res = await fetch(url, { next: { revalidate: false } });
    if (!res.ok) return null;
    return (await res.json()) as Chapter;
  } catch {
    return null;
  }
}
