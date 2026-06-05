import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BOOK_BY_CODE, type Lang } from "./books";

export type Verse = { v: number; t: string };
export type Chapter = {
  lang: Lang;
  book: string;
  chapter: number;
  verses: Verse[];
};

const PROCESSED = join(process.cwd(), "data", "processed");

export async function loadChapter(
  lang: Lang,
  bookCode: string,
  chapter: number,
): Promise<Chapter | null> {
  const meta = BOOK_BY_CODE[bookCode];
  if (!meta) return null;
  if (chapter < 1 || chapter > meta.chapters) return null;
  try {
    const raw = await readFile(
      join(PROCESSED, lang, bookCode, `${chapter}.json`),
      "utf8",
    );
    return JSON.parse(raw) as Chapter;
  } catch {
    return null;
  }
}
