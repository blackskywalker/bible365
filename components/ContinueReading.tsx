"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOK_BY_CODE } from "@/lib/books";
import type { Lang } from "@/lib/books";

interface LastRead {
  lang: string;
  book: string;
  chapter: number;
  ts: number;
}

export function ContinueReading({ lang }: { lang: Lang }) {
  const [last, setLast] = useState<LastRead | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("lastRead");
      if (raw) setLast(JSON.parse(raw));
    } catch {}
  }, []);

  if (!last) return null;

  const meta = BOOK_BY_CODE[last.book];
  if (!meta) return null;

  const bookName = meta.names[last.lang as Lang] ?? meta.names.en;
  const href = `/${last.lang}/${last.book}/${last.chapter}`;

  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-3 rounded-lg border border-amber-700/30 dark:border-amber-400/30 bg-amber-50 dark:bg-amber-900/20 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors mb-8"
    >
      <span className="text-amber-700 dark:text-amber-400 text-lg">📖</span>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-amber-700 dark:text-amber-400 font-medium mb-0.5">
          이어읽기
        </p>
        <p className="text-sm font-semibold text-stone-900 dark:text-stone-100 truncate">
          {bookName} {last.chapter}장
        </p>
      </div>
      <span className="text-stone-400 dark:text-stone-500 text-sm">→</span>
    </Link>
  );
}
