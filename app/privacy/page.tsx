import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 · bible365",
  description: "bible365 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-full flex flex-col bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <header className="sticky top-0 z-10 bg-stone-50/90 dark:bg-neutral-950/90 backdrop-blur border-b border-stone-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-4 py-2 flex items-center gap-3">
          <Link href="/ko" className="font-semibold tracking-tight text-stone-700 dark:text-stone-200">
            bible<span className="text-amber-700 dark:text-amber-400">365</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-2xl mx-auto px-4 py-12 w-full prose prose-stone dark:prose-invert">
        <h1 className="text-2xl font-semibold mb-2">개인정보처리방침</h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-8">Privacy Policy · 最終更新: 2026-07-06</p>

        <section className="mb-8 space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">1. 개요</h2>
          <p>
            bible365 (이하 "서비스")는 어디서든 성경을 읽을 수 있도록 제공되는 무료 다국어 성경 웹 애플리케이션입니다.
            본 서비스는 <strong>개인정보를 수집하지 않습니다.</strong>
          </p>
          <p>
            본 서비스는 특정 교단, 교회, 정부기관의 공식 앱이 아니며 개인이 운영하는 독립 서비스입니다.
          </p>
        </section>

        <section className="mb-8 space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">2. 수집하는 정보</h2>
          <p>bible365는 다음 정보를 <strong>수집하지 않습니다:</strong></p>
          <ul className="list-disc pl-5 space-y-1">
            <li>이름, 이메일, 전화번호 등 개인 식별 정보</li>
            <li>로그인 계정 정보</li>
            <li>위치 정보</li>
            <li>결제 정보</li>
          </ul>
          <p>
            다만 서비스 개선을 위해 <strong>Vercel Analytics</strong>를 통해 익명의 방문 통계(페이지뷰, 접속 국가 등)가
            자동으로 수집될 수 있습니다. 이는 개인을 식별할 수 없는 집계 데이터입니다.
          </p>
        </section>

        <section className="mb-8 space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">3. 로컬 저장소 사용</h2>
          <p>
            본 서비스는 사용자 기기의 <strong>localStorage</strong>에 다음 설정을 저장합니다:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>테마 설정 (라이트/다크 모드)</li>
            <li>글자 크기 설정</li>
          </ul>
          <p>이 데이터는 서버로 전송되지 않으며 기기 내에만 저장됩니다.</p>
        </section>

        <section className="mb-8 space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">4. 성경 데이터 출처</h2>
          <p>본 서비스에서 제공하는 성경 본문은 모두 퍼블릭 도메인(Public Domain) 번역본입니다:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>한국어: 개역한글판 (1961) — Public Domain</li>
            <li>영어: American Standard Version (ASV, 1901) — Public Domain</li>
            <li>베트남어: Kinh Thánh Tiếng Việt 1934 — Public Domain</li>
            <li>태국어: Thai KJV — Free distribution (CrossWire)</li>
            <li>중국어: 和合本 (Chinese Union Version, 1919) — Public Domain</li>
          </ul>
          <p>
            원본 데이터 출처:{" "}
            <a href="https://github.com/scrollmapper/bible_databases" className="underline text-amber-700 dark:text-amber-400">
              github.com/scrollmapper/bible_databases
            </a>
          </p>
        </section>

        <section className="mb-8 space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">5. 제3자 서비스</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Vercel</strong> — 호스팅 및 배포 (vercel.com/privacy)</li>
            <li><strong>PayPal</strong> — 후원 결제 처리 (paypal.com/privacy)</li>
          </ul>
          <p>후원 결제 시 PayPal의 개인정보처리방침이 적용됩니다.</p>
        </section>

        <section className="mb-8 space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">6. 문의</h2>
          <p>
            개인정보 관련 문의:{" "}
            <a href="mailto:blackskywk09@gmail.com" className="underline text-amber-700 dark:text-amber-400">
              blackskywk09@gmail.com
            </a>
          </p>
        </section>

        <section className="space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">7. 면책조항</h2>
          <p>
            bible365는 공식 교단, 교회, 정부기관과 무관한 독립 서비스입니다.
            성경 본문 해석에 대한 법적 책임을 지지 않으며, 서비스 제공 중단 또는 내용 변경 권리를 보유합니다.
          </p>
        </section>
      </main>

      <footer className="border-t border-stone-200 dark:border-neutral-800 py-6 text-xs text-stone-500 dark:text-stone-400">
        <div className="max-w-3xl mx-auto px-4 text-center">
          bible365 · <Link href="/support" className="underline">후원하기</Link>
        </div>
      </footer>
    </div>
  );
}
