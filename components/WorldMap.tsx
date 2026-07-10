"use client";

import { useState } from "react";
import {
  MISSION_COUNTRIES,
  CATEGORY_COLORS,
  CATEGORY_LABELS,
  CATEGORY_BG,
  getCountryByIso,
  type MissionCountry,
  type MissionCategory,
} from "@/lib/mission-countries";

// ISO 코드 → SVG path id 매핑 (Natural Earth / Wikipedia SVG 기준)
const ISO_TO_PATH_ID: Record<string, string> = {
  PH: "ph", SG: "sg", KR: "kr", JP: "jp", TW: "tw", IL: "il",
  US: "us", BR: "br", AU: "au", GB: "gb", CA: "ca", NZ: "nz",
  DE: "de", FR: "fr", ID: "id", TH: "th", KH: "kh", MM: "mm",
  HK: "hk", IN: "in", NG: "ng", ET: "et", KE: "ke",
  VN: "vn", MY: "my", NP: "np", BD: "bd", AE: "ae", EG: "eg",
  LA: "la", UZ: "uz", CN: "cn", PK: "pk", AF: "af", IR: "ir",
  SA: "sa", KP: "kp", SO: "so",
};

const CATEGORY_COUNT = MISSION_COUNTRIES.reduce(
  (acc, c) => { acc[c.category] = (acc[c.category] ?? 0) + 1; return acc; },
  {} as Record<MissionCategory, number>
);

export function WorldMap() {
  const [selected, setSelected] = useState<MissionCountry | null>(null);
  const [filter, setFilter] = useState<MissionCategory | "ALL">("ALL");

  const isoColorMap: Record<string, string> = {};
  for (const c of MISSION_COUNTRIES) {
    if (filter === "ALL" || c.category === filter) {
      isoColorMap[c.iso] = CATEGORY_COLORS[c.category];
    }
  }

  function handleClick(iso: string) {
    const country = getCountryByIso(iso.toUpperCase());
    if (country) setSelected(country);
  }

  const filtered = filter === "ALL"
    ? MISSION_COUNTRIES
    : MISSION_COUNTRIES.filter((c) => c.category === filter);

  return (
    <div className="space-y-6">
      {/* 범례 + 필터 */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setFilter("ALL")}
          className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${filter === "ALL" ? "bg-stone-800 text-white border-stone-800 dark:bg-stone-100 dark:text-stone-900" : "border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"}`}
        >
          전체 {MISSION_COUNTRIES.length}개국
        </button>
        {(["FREE", "CAUTION", "RESTRICTED", "HOSTILE"] as MissionCategory[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${filter === cat ? "text-white border-transparent" : "border-stone-300 dark:border-stone-600 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"}`}
            style={filter === cat ? { backgroundColor: CATEGORY_COLORS[cat] } : {}}
          >
            <span
              className="inline-block w-2 h-2 rounded-full mr-1"
              style={{ backgroundColor: CATEGORY_COLORS[cat] }}
            />
            {CATEGORY_LABELS[cat]} {CATEGORY_COUNT[cat]}
          </button>
        ))}
      </div>

      {/* SVG 세계 지도 */}
      <div className="relative rounded-xl overflow-hidden border border-stone-200 dark:border-neutral-700 bg-sky-50 dark:bg-sky-950/20">
        <svg
          viewBox="0 0 2000 1001"
          className="w-full"
          style={{ maxHeight: "420px" }}
        >
          {/* 바다 배경 */}
          <rect width="2000" height="1001" fill="currentColor" className="text-sky-100 dark:text-sky-950" />

          {/* 국가 경로 — Wikipedia SVG World Map 기반 간략 경로 */}
          {/* 각 국가는 대략적 위치 기반 rect/ellipse로 표현 (실제 SVG 경로 대신 위치 시각화) */}
          <WorldMapPaths isoColorMap={isoColorMap} onCountryClick={handleClick} selected={selected?.iso ?? null} />
        </svg>

        {/* 선택된 국가 팝업 */}
        {selected && (
          <div className="absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 sm:w-64 bg-white dark:bg-neutral-900 rounded-lg border border-stone-200 dark:border-neutral-700 shadow-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-semibold text-stone-900 dark:text-stone-100">{selected.country_ko}</div>
                <div className="text-xs text-stone-500">{selected.country_en}</div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 ml-2"
              >
                ✕
              </button>
            </div>
            <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-2 ${CATEGORY_BG[selected.category]}`}>
              {CATEGORY_LABELS[selected.category]}
            </span>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">{selected.note}</p>
            {selected.lang && (
              <a
                href={`/${selected.lang}`}
                className="mt-3 block text-center text-xs py-1.5 rounded-md bg-amber-700 text-white hover:bg-amber-800 transition-colors"
              >
                bible365 {selected.lang.toUpperCase()} 버전 읽기
              </a>
            )}
          </div>
        )}
      </div>

      {/* 국가 카드 목록 */}
      <div>
        <h2 className="text-sm font-semibold text-stone-600 dark:text-stone-400 mb-3">
          {filter === "ALL" ? "전체 국가 목록" : `${CATEGORY_LABELS[filter]} 국가`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {filtered.map((c) => (
            <button
              key={c.iso}
              onClick={() => setSelected(c)}
              className={`text-left p-3 rounded-lg border transition-all ${
                selected?.iso === c.iso
                  ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
                  : "border-stone-200 dark:border-neutral-700 hover:border-stone-300 dark:hover:border-neutral-600 bg-white dark:bg-neutral-900"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: CATEGORY_COLORS[c.category] }}
                />
                <span className="font-medium text-sm text-stone-900 dark:text-stone-100">{c.country_ko}</span>
                {c.lang && (
                  <span className="ml-auto text-xs px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400">
                    {c.lang}
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">{c.note}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// 국가 위치 기반 시각적 표현 (SVG viewBox 2000x1001 기준)
function WorldMapPaths({
  isoColorMap,
  onCountryClick,
  selected,
}: {
  isoColorMap: Record<string, string>;
  onCountryClick: (iso: string) => void;
  selected: string | null;
}) {
  // [iso, cx, cy, rx, ry, label] — 대략적 지리 위치
  const spots: [string, number, number, number, number, string][] = [
    ["US",  420, 380, 110, 65, "미국"],
    ["CA",  390, 290, 100, 45, "캐나다"],
    ["BR",  550, 600, 75, 80, "브라질"],
    ["GB",  930, 280, 22, 18, "영국"],
    ["DE",  975, 295, 18, 15, "독일"],
    ["FR",  955, 310, 20, 16, "프랑스"],
    ["NG", 1000, 510, 30, 25, "나이지리아"],
    ["ET", 1080, 530, 25, 22, "에티오피아"],
    ["KE", 1090, 570, 20, 18, "케냐"],
    ["EG", 1055, 440, 30, 22, "이집트"],
    ["SO", 1110, 560, 18, 14, "소말리아"],
    ["SA", 1110, 460, 35, 26, "사우디"],
    ["IR", 1140, 400, 32, 24, "이란"],
    ["AE", 1150, 465, 14, 11, "UAE"],
    ["PK", 1195, 410, 28, 22, "파키스탄"],
    ["AF", 1170, 380, 26, 20, "아프간"],
    ["IN", 1230, 470, 42, 50, "인도"],
    ["NP", 1240, 420, 16, 10, "네팔"],
    ["BD", 1270, 450, 13, 11, "방글라데시"],
    ["UZ", 1200, 350, 22, 15, "우즈벡"],
    ["IL", 1070, 420, 10, 10, "이스라엘"],
    ["CN", 1350, 380, 90, 70, "중국"],
    ["KP", 1430, 330, 16, 13, "북한"],
    ["KR", 1445, 345, 13, 12, "한국"],
    ["JP", 1480, 340, 22, 30, "일본"],
    ["TW", 1450, 410, 10, 10, "대만"],
    ["HK", 1430, 430, 8, 7, "홍콩"],
    ["VN", 1370, 470, 14, 35, "베트남"],
    ["TH", 1345, 480, 18, 28, "태국"],
    ["LA", 1365, 460, 10, 16, "라오스"],
    ["KH", 1375, 500, 12, 10, "캄보디아"],
    ["MM", 1320, 460, 16, 26, "미얀마"],
    ["MY", 1390, 540, 25, 14, "말레이시아"],
    ["SG", 1405, 555, 7, 7, "싱가포르"],
    ["ID", 1430, 580, 80, 30, "인도네시아"],
    ["PH", 1470, 510, 18, 35, "필리핀"],
    ["AU", 1500, 680, 90, 70, "호주"],
    ["NZ", 1600, 750, 14, 22, "뉴질랜드"],
  ];

  return (
    <g>
      {/* 대륙 배경 */}
      <ellipse cx="450" cy="430" rx="200" ry="200" fill="#d6d3d1" opacity="0.3" /> {/* 북미 */}
      <ellipse cx="540" cy="640" rx="100" ry="130" fill="#d6d3d1" opacity="0.3" /> {/* 남미 */}
      <ellipse cx="1000" cy="420" rx="120" ry="140" fill="#d6d3d1" opacity="0.3" /> {/* 유럽+아프리카 */}
      <ellipse cx="1000" cy="580" rx="80" ry="120" fill="#d6d3d1" opacity="0.3" />
      <ellipse cx="1250" cy="430" rx="230" ry="180" fill="#d6d3d1" opacity="0.3" /> {/* 아시아 */}
      <ellipse cx="1490" cy="680" rx="100" ry="80" fill="#d6d3d1" opacity="0.3" /> {/* 호주 */}

      {spots.map(([iso, cx, cy, rx, ry, label]) => {
        const color = isoColorMap[iso] ?? "#d6d3d1";
        const isSelected = selected === iso;
        const hasData = !!isoColorMap[iso];
        return (
          <g key={iso} onClick={() => hasData && onCountryClick(iso)} style={{ cursor: hasData ? "pointer" : "default" }}>
            <ellipse
              cx={cx} cy={cy} rx={rx} ry={ry}
              fill={color}
              stroke={isSelected ? "#fbbf24" : "rgba(255,255,255,0.6)"}
              strokeWidth={isSelected ? 3 : 1}
              opacity={hasData ? 0.85 : 0.25}
            />
            {(rx > 14 || ry > 14) && (
              <text
                x={cx} y={cy + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={Math.max(8, Math.min(12, rx * 0.35))}
                fill="white"
                fontWeight="600"
                style={{ pointerEvents: "none", userSelect: "none" }}
              >
                {label}
              </text>
            )}
          </g>
        );
      })}
    </g>
  );
}
