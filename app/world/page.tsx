import Link from "next/link";
import type { Metadata } from "next";
import { WorldMap } from "@/components/WorldMap";
import { MISSION_COUNTRIES, CATEGORY_LABELS, CATEGORY_COLORS, type MissionCategory } from "@/lib/mission-countries";

export const metadata: Metadata = {
  title: "세계 전도 지도 · bible365",
  description: "국가별 선교 자유도 세계 지도. bible365 아시아 전도 사역.",
};

const CATEGORIES: MissionCategory[] = ["FREE", "CAUTION", "RESTRICTED", "HOSTILE"];

const CATEGORY_DESC: Record<MissionCategory, string> = {
  FREE: "종교자유 완전 보장, 선교·전도 자유롭게 가능",
  CAUTION: "법적으로 가능하나 사회적 갈등·제약 존재",
  RESTRICTED: "선교 법적 제한, 일부 국가는 개종 불법",
  HOSTILE: "심각한 박해, 투옥·사형 위험, 극도로 위험",
};

export default function WorldPage() {
  const counts = CATEGORIES.reduce(
    (acc, cat) => {
      acc[cat] = MISSION_COUNTRIES.filter((c) => c.category === cat).length;
      return acc;
    },
    {} as Record<MissionCategory, number>
  );

  return (
    <div className="min-h-full flex flex-col bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100">
      <header className="sticky top-0 z-10 bg-stone-50/90 dark:bg-neutral-950/90 backdrop-blur border-b border-stone-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center gap-3">
          <Link href="/ko" className="font-semibold tracking-tight text-stone-700 dark:text-stone-200">
            bible<span className="text-amber-700 dark:text-amber-400">365</span>
          </Link>
          <span className="text-stone-400">/</span>
          <span className="text-sm text-stone-600 dark:text-stone-400">세계 전도 지도</span>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-10 w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">
            세계 전도 지도
            <span className="ml-2 text-base font-normal text-stone-500 dark:text-stone-400">
              World Mission Map
            </span>
          </h1>
          <p className="text-sm text-stone-600 dark:text-stone-400 max-w-2xl">
            국가별 선교·전도 자유도를 분석했습니다. bible365는 안전한 지역을 우선으로,
            디지털 선교를 통해 전세계 어디서든 성경을 전할 수 있습니다.
          </p>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat}
              className="rounded-lg border border-stone-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 p-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLORS[cat] }}
                />
                <span className="text-xs font-medium text-stone-600 dark:text-stone-400">
                  {CATEGORY_LABELS[cat]}
                </span>
              </div>
              <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                {counts[cat]}
                <span className="text-sm font-normal text-stone-500 ml-1">개국</span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1 leading-relaxed">
                {CATEGORY_DESC[cat]}
              </p>
            </div>
          ))}
        </div>

        {/* 인터랙티브 지도 */}
        <WorldMap />

        {/* 안내 */}
        <div className="mt-10 p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <h3 className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-2">
            bible365 디지털 전도 전략
          </h3>
          <ul className="text-xs text-amber-700 dark:text-amber-400 space-y-1 leading-relaxed">
            <li>• <strong>자유 국가</strong> — 앱·링크 직접 공유, SNS 전도 가능</li>
            <li>• <strong>주의 국가</strong> — 링크 공유 가능, 현지 상황 파악 후 대면 접촉</li>
            <li>• <strong>제한 국가</strong> — 디지털 배포만, 절대 대면 선교 금지</li>
            <li>• <strong>위험 국가</strong> — 온라인 성경 접근 제공 유지, 현지인이 자율적으로 접근</li>
          </ul>
          <p className="text-xs text-amber-600 dark:text-amber-500 mt-3">
            ※ 안전이 최우선입니다. 위험 지역 대면 전도는 절대 권장하지 않습니다.
          </p>
        </div>

        <div className="mt-6 text-center space-x-4">
          <Link href="/ko" className="text-sm text-amber-700 dark:text-amber-400 underline">
            성경 읽기
          </Link>
          <Link href="/support" className="text-sm text-amber-700 dark:text-amber-400 underline">
            전도 사역 후원
          </Link>
        </div>
      </main>

      <footer className="border-t border-stone-200 dark:border-neutral-800 py-6 text-xs text-stone-500 dark:text-stone-400">
        <div className="max-w-5xl mx-auto px-4 text-center">
          bible365 · 국가별 현황은 Open Doors, USCIRF 자료 기반 분석입니다.
        </div>
      </footer>
    </div>
  );
}
