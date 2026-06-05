"use client";

import { useState } from "react";

export function VerseCopyButton({
  verseNum,
  label,
}: {
  verseNum: number;
  label: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}${window.location.pathname}#v${verseNum}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className="ml-1 text-xs text-stone-400 dark:text-stone-500 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity hover:text-amber-700 dark:hover:text-amber-400"
    >
      {copied ? "✓" : "🔗"}
    </button>
  );
}
