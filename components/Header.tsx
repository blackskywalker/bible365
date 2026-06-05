import Link from "next/link";
import { LANGUAGE_LABELS, LANGUAGES, type Lang } from "@/lib/books";
import { ReaderControls } from "./ReaderControls";

export function Header({
  lang,
  hrefForLang,
}: {
  lang: Lang;
  hrefForLang?: (l: Lang) => string;
}) {
  return (
    <header className="sticky top-0 z-10 bg-stone-50/90 dark:bg-neutral-950/90 backdrop-blur border-b border-stone-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 py-2 flex items-center gap-3">
        <Link
          href={`/${lang}`}
          className="font-semibold tracking-tight text-stone-700 dark:text-stone-200"
        >
          bible<span className="text-amber-700 dark:text-amber-400">365</span>
        </Link>
        <nav className="flex-1 flex items-center gap-1 text-xs overflow-x-auto">
          {LANGUAGES.map((l) => (
            <Link
              key={l}
              href={hrefForLang ? hrefForLang(l) : `/${l}`}
              className={`px-2 py-1 rounded whitespace-nowrap ${
                l === lang
                  ? "bg-stone-800 text-stone-50 dark:bg-stone-200 dark:text-stone-900"
                  : "hover:bg-stone-200 dark:hover:bg-neutral-800"
              }`}
            >
              {LANGUAGE_LABELS[l].native}
            </Link>
          ))}
        </nav>
        <ReaderControls />
      </div>
    </header>
  );
}
