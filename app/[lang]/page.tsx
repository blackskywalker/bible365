import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { loadChapter } from "@/lib/bible";
import { BOOKS, LANGUAGES, type Lang } from "@/lib/books";
import { FEATURED_VERSES, HOME_COPY } from "@/lib/copy";

function pickDaily<T>(items: T[]): T {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24),
  );
  return items[dayOfYear % items.length];
}

export default async function LangHome({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!LANGUAGES.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  const copy = HOME_COPY[l];
  const ot = BOOKS.filter((b) => b.testament === "OT");
  const nt = BOOKS.filter((b) => b.testament === "NT");

  const featured = pickDaily(FEATURED_VERSES);
  const chapter = await loadChapter(l, featured.book, featured.chapter);
  const verse = chapter?.verses.find((v) => v.v === featured.verse);
  const featuredBook = BOOKS.find((b) => b.code === featured.book)!;

  return (
    <>
      <Header lang={l} />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-8 w-full">
        <section className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            {copy.tagline}
          </h1>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-2">
            {copy.subline}
          </p>
        </section>

        {verse && (
          <section className="mb-12">
            <p className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2 text-center">
              {copy.featured}
            </p>
            <Link
              href={`/${l}/${featured.book}/${featured.chapter}#v${featured.verse}`}
              className="block border border-stone-200 dark:border-neutral-800 rounded-lg p-6 hover:border-amber-700/40 dark:hover:border-amber-400/40 transition-colors bg-white dark:bg-neutral-900"
            >
              <blockquote className="text-lg leading-relaxed mb-3">
                &ldquo;{verse.t}&rdquo;
              </blockquote>
              <cite className="text-sm text-stone-500 dark:text-stone-400 not-italic">
                — {featuredBook.names[l]} {featured.chapter}:{featured.verse}
              </cite>
            </Link>
          </section>
        )}

        <BookGrid title={copy.oldTestament} lang={l} books={ot} />
        <BookGrid title={copy.newTestament} lang={l} books={nt} highlight />
      </main>
      <Footer lang={l} />
    </>
  );
}

function BookGrid({
  title,
  lang,
  books,
  highlight,
}: {
  title: string;
  lang: Lang;
  books: typeof BOOKS;
  highlight?: boolean;
}) {
  const gospels = new Set(["mat", "mrk", "luk", "jhn"]);
  return (
    <section className="mb-10">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3 px-1">
        {title}
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
        {books.map((b) => {
          const isGospel = highlight && gospels.has(b.code);
          return (
            <li key={b.code}>
              <Link
                href={`/${lang}/${b.code}/1`}
                className={`block px-3 py-2 rounded text-sm transition-colors ${
                  isGospel
                    ? "bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-200 hover:bg-amber-100 dark:hover:bg-amber-900/40"
                    : "hover:bg-stone-200 dark:hover:bg-neutral-800"
                }`}
              >
                {b.names[lang]}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
