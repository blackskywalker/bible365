"use client";

import { useState } from "react";

export function VerseCopyButton({
  verseNum,
  verseText,
  bookName,
  chapter,
}: {
  verseNum: number;
  verseText: string;
  bookName: string;
  chapter: number;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function getUrl() {
    return `${window.location.origin}${window.location.pathname}#v${verseNum}`;
  }

  function getMessage() {
    return `"${verseText}"\n— ${bookName} ${chapter}:${verseNum}\n\nbible365 ${getUrl()}`;
  }

  async function copyLink(e: React.MouseEvent) {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(getMessage());
      setCopied(true);
      setTimeout(() => { setCopied(false); setOpen(false); }, 1500);
    } catch {}
  }

  function shareWhatsApp(e: React.MouseEvent) {
    e.stopPropagation();
    const text = encodeURIComponent(getMessage());
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener");
    setOpen(false);
  }

  function shareKakao(e: React.MouseEvent) {
    e.stopPropagation();
    // 카카오톡은 딥링크로 텍스트 직접 공유 불가 — 클립보드 복사 후 안내
    navigator.clipboard.writeText(getMessage()).catch(() => {});
    window.open("kakaotalk://", "_blank");
    setOpen(false);
  }

  function toggle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setOpen((v) => !v);
  }

  return (
    <span className="relative inline-block ml-1">
      <button
        type="button"
        onClick={toggle}
        aria-label={`${bookName} ${chapter}:${verseNum} 공유`}
        className="text-xs text-stone-400 dark:text-stone-500 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity hover:text-amber-700 dark:hover:text-amber-400"
      >
        {open ? "✕" : "🔗"}
      </button>

      {open && (
        <span
          className="absolute left-0 top-6 z-20 flex flex-col min-w-[140px] rounded-lg border border-stone-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-lg overflow-hidden text-xs"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={copyLink}
            className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 dark:hover:bg-neutral-800 text-stone-700 dark:text-stone-300 text-left"
          >
            {copied ? "✓ 복사됨" : "📋 텍스트 복사"}
          </button>
          <button
            type="button"
            onClick={shareWhatsApp}
            className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 dark:hover:bg-neutral-800 text-stone-700 dark:text-stone-300 text-left"
          >
            💬 WhatsApp
          </button>
          <button
            type="button"
            onClick={shareKakao}
            className="flex items-center gap-2 px-3 py-2 hover:bg-stone-100 dark:hover:bg-neutral-800 text-stone-700 dark:text-stone-300 text-left"
          >
            🟡 카카오톡
          </button>
        </span>
      )}
    </span>
  );
}
