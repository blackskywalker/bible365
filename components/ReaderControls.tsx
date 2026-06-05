"use client";

import { useEffect, useState } from "react";

export function ReaderControls() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [size, setSize] = useState(18);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    const s = Number(
      getComputedStyle(document.documentElement)
        .getPropertyValue("--reader-font-size")
        .replace("px", "")
        .trim(),
    );
    if (s) setSize(s);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  }

  function changeSize(delta: number) {
    const next = Math.max(14, Math.min(28, size + delta));
    setSize(next);
    document.documentElement.style.setProperty("--reader-font-size", `${next}px`);
    localStorage.setItem("fontSize", String(next));
  }

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={() => changeSize(-2)}
        aria-label="글자 작게"
        className="px-2 py-1 rounded hover:bg-stone-200 dark:hover:bg-neutral-800 text-sm"
      >
        A−
      </button>
      <button
        type="button"
        onClick={() => changeSize(2)}
        aria-label="글자 크게"
        className="px-2 py-1 rounded hover:bg-stone-200 dark:hover:bg-neutral-800 text-base"
      >
        A+
      </button>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "라이트 모드" : "다크 모드"}
        className="px-2 py-1 rounded hover:bg-stone-200 dark:hover:bg-neutral-800 text-sm"
      >
        {theme === "dark" ? "☀︎" : "☾"}
      </button>
    </div>
  );
}
