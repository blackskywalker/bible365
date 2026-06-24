import { TRANSLATIONS, type Lang } from "@/lib/books";

export function Footer({ lang }: { lang: Lang }) {
  const t = TRANSLATIONS[lang];
  return (
    <footer className="mt-16 border-t border-stone-200 dark:border-neutral-800 py-6 text-xs text-stone-500 dark:text-stone-400">
      <div className="max-w-3xl mx-auto px-4 space-y-3">
        <a
          href="/support"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-amber-700/40 dark:border-amber-400/40 text-amber-700 dark:text-amber-400 font-medium text-sm hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
        >
          ♡ 아시아 전도 사역 후원하기
        </a>
        <p>{t.attribution}</p>
        <p className="text-stone-400 dark:text-stone-500">
          bible365 · 어디서든 펼치는 성경 · 24/7 ·{" "}
          <a
            href="https://github.com/scrollmapper/bible_databases"
            className="underline"
          >
            data source
          </a>
        </p>
      </div>
    </footer>
  );
}
