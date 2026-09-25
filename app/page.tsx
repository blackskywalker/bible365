"use client";

import { useEffect } from "react";
import { LANGUAGES } from "@/lib/books";

function detectLang(): string {
  if (typeof navigator === "undefined") return "en";
  for (const tag of navigator.languages ?? [navigator.language]) {
    const code = tag.toLowerCase().split("-")[0];
    if ((LANGUAGES as readonly string[]).includes(code)) return code;
  }
  return "en";
}

export default function Home() {
  useEffect(() => {
    window.location.replace(`/${detectLang()}/`);
  }, []);

  return (
    <main className="flex-1 flex items-center justify-center">
      <p className="text-sm text-stone-500 dark:text-stone-400">
        bible365 — Read the Bible anywhere
      </p>
      <noscript>
        <a href="/en/" className="underline">Continue to bible365</a>
      </noscript>
    </main>
  );
}
