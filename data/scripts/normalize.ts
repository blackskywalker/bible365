import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { BOOKS, type Lang } from "../../lib/books";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_ROOT = resolve(__dirname, "..");
const RAW = join(DATA_ROOT, "raw");
const OUT = join(DATA_ROOT, "processed");

type ScrollmapperVerse = { verse: number; text: string };
type ScrollmapperChapter = { chapter: number; verses: ScrollmapperVerse[] };
type ScrollmapperBook = { name: string; chapters: ScrollmapperChapter[] };
type ScrollmapperRoot = {
  translation: string;
  books: ScrollmapperBook[];
};

type OutVerse = { v: number; t: string };
type OutChapter = {
  lang: Lang;
  book: string;
  chapter: number;
  verses: OutVerse[];
};

const SOURCES: Record<Lang, string> = {
  ko: "KorRV.json",
  en: "ASV.json",
  vi: "Viet.json",
  th: "ThaiKJV.json",
  zh: "ChiUn.json",
};

async function processLang(lang: Lang, file: string) {
  const raw = JSON.parse(
    await readFile(join(RAW, file), "utf8"),
  ) as ScrollmapperRoot;

  if (raw.books.length !== 66) {
    throw new Error(`${lang}: expected 66 books, got ${raw.books.length}`);
  }

  let written = 0;
  for (let i = 0; i < BOOKS.length; i++) {
    const meta = BOOKS[i];
    const srcBook = raw.books[i];
    if (srcBook.chapters.length !== meta.chapters) {
      console.warn(
        `[${lang}] ${meta.code}: expected ${meta.chapters} chapters, got ${srcBook.chapters.length}`,
      );
    }
    for (const ch of srcBook.chapters) {
      const out: OutChapter = {
        lang,
        book: meta.code,
        chapter: ch.chapter,
        verses: ch.verses.map((v) => ({ v: v.verse, t: v.text.trim() })),
      };
      const outDir = join(OUT, lang, meta.code);
      await mkdir(outDir, { recursive: true });
      await writeFile(
        join(outDir, `${ch.chapter}.json`),
        JSON.stringify(out),
        "utf8",
      );
      written++;
    }
  }
  console.log(`[${lang}] wrote ${written} chapter files`);
}

async function main() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  for (const [lang, file] of Object.entries(SOURCES) as [Lang, string][]) {
    await processLang(lang, file);
  }
  console.log("done");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
