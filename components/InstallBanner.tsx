"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/books";

const LABEL: Record<Lang, { msg: string; btn: string; dismiss: string }> = {
  ko: { msg: "bible365를 홈 화면에 추가하세요", btn: "설치", dismiss: "닫기" },
  en: { msg: "Add bible365 to your home screen", btn: "Install", dismiss: "Dismiss" },
  vi: { msg: "Thêm bible365 vào màn hình chính", btn: "Cài đặt", dismiss: "Bỏ qua" },
  th: { msg: "เพิ่ม bible365 ไปที่หน้าจอหลัก", btn: "ติดตั้ง", dismiss: "ปิด" },
  zh: { msg: "将 bible365 添加到主屏幕", btn: "安装", dismiss: "关闭" },
  tl: { msg: "Idagdag ang bible365 sa home screen", btn: "I-install", dismiss: "Isara" },
  es: { msg: "Añade bible365 a tu pantalla de inicio", btn: "Instalar", dismiss: "Cerrar" },
};

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallBanner({ lang }: { lang: Lang }) {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem("pwa-dismissed")) return;
    } catch {}
    setDismissed(false);

    function handler(e: Event) {
      e.preventDefault();
      setPrompt(e as BeforeInstallPromptEvent);
    }
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (dismissed || !prompt) return null;

  const c = LABEL[lang];

  async function install() {
    if (!prompt) return;
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === "accepted") {
      try { localStorage.setItem("pwa-dismissed", "1"); } catch {}
      setPrompt(null);
      setDismissed(true);
    }
  }

  function dismiss() {
    try { localStorage.setItem("pwa-dismissed", "1"); } catch {}
    setDismissed(true);
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex items-center gap-3 rounded-xl border border-amber-700/30 dark:border-amber-400/30 bg-white dark:bg-neutral-900 shadow-lg px-4 py-3 max-w-sm mx-auto">
      <span className="text-2xl">📖</span>
      <p className="flex-1 text-sm text-stone-700 dark:text-stone-300">{c.msg}</p>
      <button
        type="button"
        onClick={install}
        className="shrink-0 px-3 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white text-xs font-semibold transition-colors"
      >
        {c.btn}
      </button>
      <button
        type="button"
        onClick={dismiss}
        aria-label={c.dismiss}
        className="shrink-0 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 text-lg leading-none"
      >
        ✕
      </button>
    </div>
  );
}
