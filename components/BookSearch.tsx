"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BOOKS } from "@/lib/books";
import type { Lang } from "@/lib/books";

const SEARCH_PLACEHOLDER: Record<Lang, string> = {
  ko: "성경 책 검색...",
  en: "Search books...",
  vi: "Tìm sách...",
  th: "ค้นหาหนังสือ...",
  zh: "搜尋書卷...",
  tl: "Maghanap ng aklat...",
};

export function BookSearch({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const q = query.trim().toLowerCase();
  const results = q
    ? BOOKS.filter((b) => {
        const name = b.names[lang].toLowerCase();
        const en = b.names.en.toLowerCase();
        return name.includes(q) || en.includes(q);
      })
    : [];

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setQuery("");
        inputRef.current?.blur();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative mb-8">
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 dark:text-stone-500 pointer-events-none">
          🔍
        </span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder={SEARCH_PLACEHOLDER[lang]}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-stone-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-stone-900 dark:text-stone-100 placeholder:text-stone-400 dark:placeholder:text-stone-500 focus:outline-none focus:border-amber-500 dark:focus:border-amber-500 transition-colors"
        />
        {query && (
          <button
            type="button"
            onMouseDown={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300"
          >
            ✕
          </button>
        )}
      </div>

      {focused && results.length > 0 && (
        <ul className="absolute top-full mt-1 left-0 right-0 z-30 bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-700 rounded-lg shadow-lg overflow-hidden max-h-72 overflow-y-auto">
          {results.map((b) => (
            <li key={b.code}>
              <Link
                href={`/${lang}/${b.code}/1`}
                className="flex items-center justify-between px-4 py-2.5 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
                onClick={() => setQuery("")}
              >
                <span className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  {b.names[lang]}
                </span>
                <span className="text-xs text-stone-400 dark:text-stone-500">
                  {b.testament === "OT" ? "구약" : "신약"} · {b.chapters}장
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {focused && q && results.length === 0 && (
        <div className="absolute top-full mt-1 left-0 right-0 z-30 bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-700 rounded-lg shadow-lg px-4 py-3 text-sm text-stone-500 dark:text-stone-400">
          검색 결과 없음
        </div>
      )}
    </div>
  );
}
