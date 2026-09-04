import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support · bible365",
  description: "Support the bible365 Asia Bible Mission. Free Bible in 7 languages.",
};

const PAYPAL_LINK = "https://www.paypal.com/ncp/payment/YRRSUFQP2JKNL";

export default function SupportPage() {
  return (
    <div className="min-h-full flex flex-col bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <header className="sticky top-0 z-10 bg-stone-50/90 dark:bg-neutral-950/90 backdrop-blur border-b border-stone-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-4 py-2 flex items-center gap-3">
          <Link
            href="/en"
            className="font-semibold tracking-tight text-stone-700 dark:text-stone-200"
          >
            bible<span className="text-amber-700 dark:text-amber-400">365</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 w-full">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-3">
            Support
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Support Asia Bible Mission
            <span className="block text-xl font-normal text-stone-500 dark:text-stone-400 mt-1">아시아 말씀 사역 후원</span>
          </h1>
          <p className="text-stone-500 dark:text-stone-400 leading-relaxed">
            bible365 is free for everyone, 24/7 — no ads, no paywalls.
            <br />
            Your gift keeps the Word accessible across Asia and the world.
            <br />
            <span className="text-xs">bible365는 누구나 무료로, 광고 없이 말씀을 읽을 수 있습니다.</span>
          </p>
        </div>

        <div className="bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 rounded-xl p-8 mb-8">
          <ul className="space-y-3 text-sm text-stone-600 dark:text-stone-400 mb-8">
            <li className="flex items-start gap-2">
              <span className="text-amber-700 dark:text-amber-400 mt-0.5">✦</span>
              Free Bible in 7 languages — Korean, English, Vietnamese, Thai, Chinese, Filipino, Spanish
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-700 dark:text-amber-400 mt-0.5">✦</span>
              Supporting local Bible ministries across Asia
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-700 dark:text-amber-400 mt-0.5">✦</span>
              Expanding multilingual access to Scripture worldwide
            </li>
          </ul>

          <a
            href={PAYPAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-500 text-white font-semibold py-4 rounded-lg transition-colors text-lg"
          >
            Donate via PayPal · PayPal로 후원하기
          </a>
          <p className="text-xs text-center text-stone-400 dark:text-stone-500 mt-3">
            PayPal · 신용카드 · 체크카드 모두 가능 · 금액 자유 설정
          </p>
        </div>

        <p className="text-center text-sm text-stone-500 dark:text-stone-400">
          말씀을 함께 나눠주셔서 감사합니다.
          <br />
          <span className="text-xs">
            Contact / 문의:{" "}
            <a
              href="mailto:blackskywk09@gmail.com"
              className="underline hover:text-amber-700 dark:hover:text-amber-400"
            >
              blackskywk09@gmail.com
            </a>
          </span>
        </p>
      </main>

      <footer className="border-t border-stone-200 dark:border-neutral-800 py-6 text-xs text-stone-500 dark:text-stone-400">
        <div className="max-w-3xl mx-auto px-4 text-center">
          bible365 · 어디서든 펼치는 성경
        </div>
      </footer>
    </div>
  );
}
