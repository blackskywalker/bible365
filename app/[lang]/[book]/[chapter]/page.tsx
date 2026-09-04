import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LastReadTracker } from "@/components/LastReadTracker";
import { VerseCopyButton } from "@/components/VerseCopyButton";
import { loadChapter } from "@/lib/bible";
import { BOOK_BY_CODE, BOOKS, LANGUAGES, type Lang } from "@/lib/books";

const BACK_LABEL: Record<Lang, string> = {
  ko: "← 목록", en: "← List", vi: "← Danh sách",
  th: "← รายการ", zh: "← 列表", tl: "← Listahan", es: "← Lista",
};

// 나머지 챕터는 첫 방문 시 생성 후 캐시 (ISR)
export const dynamicParams = true;
export const revalidate = 86400; // 24시간 캐시

// 핵심 챕터만 빌드 시 pre-render — 나머지는 on-demand
const PRIORITY_BOOKS: Record<string, number> = {
  jhn: 21, psa: 10, gen: 3, mat: 5, rom: 8,
  pro: 3, isa: 1, rev: 1, luk: 3, act: 2,
};

export async function generateStaticParams() {
  const params: { lang: string; book: string; chapter: string }[] = [];
  for (const lang of LANGUAGES) {
    for (const book of BOOKS) {
      const limit = PRIORITY_BOOKS[book.code] ?? 1;
      for (let c = 1; c <= Math.min(limit, book.chapters); c++) {
        params.push({ lang, book: book.code, chapter: String(c) });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/[book]/[chapter]">) {
  const { lang, book, chapter } = await params;
  const meta = BOOK_BY_CODE[book];
  if (!meta) return {};
  const name = meta.names[lang as Lang] ?? meta.names.en;
  const title = `${name} ${chapter} · bible365`;
  const description = `${name} ${chapter} — bible365: Read the Bible anywhere, anytime.`;
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ChapterPage({
  params,
}: PageProps<"/[lang]/[book]/[chapter]">) {
  const { lang, book, chapter } = await params;
  const meta = BOOK_BY_CODE[book];
  if (!meta || !LANGUAGES.includes(lang as Lang)) notFound();
  const chNum = Number(chapter);
  if (!Number.isInteger(chNum)) notFound();
  const data = await loadChapter(lang as Lang, book, chNum);
  if (!data) notFound();

  const l = lang as Lang;
  const name = meta.names[l];
  const prev = chNum > 1 ? `/${l}/${book}/${chNum - 1}` : null;
  const next = chNum < meta.chapters ? `/${l}/${book}/${chNum + 1}` : null;

  return (
    <>
      <Header lang={l} hrefForLang={(other) => `/${other}/${book}/${chNum}`} />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-6 w-full">
        <nav className="flex items-center justify-between mb-4 text-sm">
          <Link
            href={`/${l}`}
            className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          >
            {BACK_LABEL[l]}
          </Link>
          <h1 className="font-semibold text-lg tracking-tight">
            {name} <span className="text-amber-700 dark:text-amber-400">{chNum}</span>
          </h1>
          <div className="flex gap-2">
            {prev && (
              <Link href={prev} className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100">
                ←
              </Link>
            )}
            {next && (
              <Link href={next} className="text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100">
                →
              </Link>
            )}
          </div>
        </nav>

        <LastReadTracker lang={l} book={book} chapter={chNum} />
        <ChapterPicker lang={l} book={book} current={chNum} total={meta.chapters} />

        <article className="reader mt-6 space-y-1">
          {data.verses.map((v) => (
            <p key={v.v} id={`v${v.v}`} className="verse group">
              <a href={`#v${v.v}`} className="verse-num no-underline">
                {v.v}
              </a>
              {v.t}
              <VerseCopyButton verseNum={v.v} verseText={v.t} bookName={name} chapter={chNum} />
            </p>
          ))}
        </article>

        <nav className="mt-10 flex justify-between text-sm">
          {prev ? (
            <Link href={prev} className="underline">
              ← {name} {chNum - 1}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={next} className="underline">
              {name} {chNum + 1} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>
      <Footer lang={l} />
    </>
  );
}

function ChapterPicker({
  lang,
  book,
  current,
  total,
}: {
  lang: Lang;
  book: string;
  current: number;
  total: number;
}) {
  return (
    <div className="flex flex-wrap gap-1 text-xs">
      {Array.from({ length: total }, (_, i) => i + 1).map((c) => (
        <Link
          key={c}
          href={`/${lang}/${book}/${c}`}
          className={`w-7 h-7 inline-flex items-center justify-center rounded ${
            c === current
              ? "bg-stone-800 text-stone-50 dark:bg-stone-200 dark:text-stone-900"
              : "hover:bg-stone-200 dark:hover:bg-neutral-800 text-stone-600 dark:text-stone-400"
          }`}
        >
          {c}
        </Link>
      ))}
    </div>
  );
}
