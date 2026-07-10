export type MissionCategory = "FREE" | "CAUTION" | "RESTRICTED" | "HOSTILE";

export interface MissionCountry {
  country_en: string;
  country_ko: string;
  iso: string;
  category: MissionCategory;
  note: string;
  lang?: string; // bible365 지원 언어
}

export const MISSION_COUNTRIES: MissionCountry[] = [
  { country_en: "Philippines", country_ko: "필리핀", iso: "PH", category: "FREE", note: "카톨릭 다수, 선교 자유", lang: "en" },
  { country_en: "Singapore", country_ko: "싱가포르", iso: "SG", category: "FREE", note: "세속 다신앙 국가, 선교 법적 허용" },
  { country_en: "South Korea", country_ko: "대한민국", iso: "KR", category: "FREE", note: "기독교 강세, 선교 자유", lang: "ko" },
  { country_en: "Japan", country_ko: "일본", iso: "JP", category: "FREE", note: "종교자유 완전 보장, 소수 기독교" },
  { country_en: "Taiwan", country_ko: "대만", iso: "TW", category: "FREE", note: "민주국가, 종교자유 강함", lang: "zh" },
  { country_en: "Israel", country_ko: "이스라엘", iso: "IL", category: "FREE", note: "선교 법적 허용, 사회적 민감" },
  { country_en: "United States", country_ko: "미국", iso: "US", category: "FREE", note: "헌법적 종교자유, 복음주의 활발", lang: "en" },
  { country_en: "Brazil", country_ko: "브라질", iso: "BR", category: "FREE", note: "카톨릭+복음주의 공존, 선교 활발" },
  { country_en: "Australia", country_ko: "호주", iso: "AU", category: "FREE", note: "세속 민주국가, 선교 자유", lang: "en" },
  { country_en: "United Kingdom", country_ko: "영국", iso: "GB", category: "FREE", note: "종교자유 보장", lang: "en" },
  { country_en: "Canada", country_ko: "캐나다", iso: "CA", category: "FREE", note: "종교자유 보장", lang: "en" },
  { country_en: "New Zealand", country_ko: "뉴질랜드", iso: "NZ", category: "FREE", note: "종교자유 보장", lang: "en" },
  { country_en: "Germany", country_ko: "독일", iso: "DE", category: "FREE", note: "종교자유 보장" },
  { country_en: "France", country_ko: "프랑스", iso: "FR", category: "FREE", note: "종교자유 보장, 세속주의 강함" },

  { country_en: "Indonesia", country_ko: "인도네시아", iso: "ID", category: "CAUTION", note: "이슬람 다수, 개종 시 사회적 갈등", lang: "en" },
  { country_en: "Thailand", country_ko: "태국", iso: "TH", category: "CAUTION", note: "불교 다수, 불교 비하 시 법적 문제", lang: "th" },
  { country_en: "Cambodia", country_ko: "캄보디아", iso: "KH", category: "CAUTION", note: "불교 다수, 선교 허용이나 개종 압박 제한" },
  { country_en: "Myanmar", country_ko: "미얀마", iso: "MM", category: "CAUTION", note: "불교 다수, 지역별 편차, 소수민족 지역 관용적" },
  { country_en: "Hong Kong", country_ko: "홍콩", iso: "HK", category: "CAUTION", note: "중국 통제 강화, 교회 자기검열 중", lang: "zh" },
  { country_en: "India", country_ko: "인도", iso: "IN", category: "CAUTION", note: "힌두 민족주의 증가, 일부 주 개종법" },
  { country_en: "Nigeria", country_ko: "나이지리아", iso: "NG", category: "CAUTION", note: "북부 이슬람법, 남부 기독교 우세, 갈등 존재" },
  { country_en: "Ethiopia", country_ko: "에티오피아", iso: "ET", category: "CAUTION", note: "동방정교+이슬람, 복음주의 성장 중" },
  { country_en: "Kenya", country_ko: "케냐", iso: "KE", category: "CAUTION", note: "기독교 다수이나 북부 이슬람 지역 긴장" },

  { country_en: "Vietnam", country_ko: "베트남", iso: "VN", category: "RESTRICTED", note: "공산국가, 미등록 종교활동 불법, 교회 감시", lang: "vi" },
  { country_en: "Malaysia", country_ko: "말레이시아", iso: "MY", category: "RESTRICTED", note: "무슬림 개종 불법, 이슬람 대상 선교 금지" },
  { country_en: "Nepal", country_ko: "네팔", iso: "NP", category: "RESTRICTED", note: "힌두교도 개종 불법" },
  { country_en: "Bangladesh", country_ko: "방글라데시", iso: "BD", category: "RESTRICTED", note: "이슬람 개종 불법, 소수종교 박해" },
  { country_en: "United Arab Emirates", country_ko: "아랍에미리트", iso: "AE", category: "RESTRICTED", note: "외국인 교회 허용, 현지인 선교 금지" },
  { country_en: "Egypt", country_ko: "이집트", iso: "EG", category: "RESTRICTED", note: "이슬람 개종 불법, 선교 금지" },
  { country_en: "Laos", country_ko: "라오스", iso: "LA", category: "RESTRICTED", note: "공산국가, 종교활동 국가 통제" },
  { country_en: "Uzbekistan", country_ko: "우즈베키스탄", iso: "UZ", category: "RESTRICTED", note: "이슬람 다수, 선교 법적 제한" },

  { country_en: "China", country_ko: "중국", iso: "CN", category: "HOSTILE", note: "미등록 교회 탄압, 외국 선교사 추방", lang: "zh" },
  { country_en: "Pakistan", country_ko: "파키스탄", iso: "PK", category: "HOSTILE", note: "신성모독법, 기독교인 극심한 박해" },
  { country_en: "Afghanistan", country_ko: "아프가니스탄", iso: "AF", category: "HOSTILE", note: "이슬람 개종 사형, 탈레반 통치" },
  { country_en: "Iran", country_ko: "이란", iso: "IR", category: "HOSTILE", note: "이슬람 개종 불법, 지하교회 박해" },
  { country_en: "Saudi Arabia", country_ko: "사우디아라비아", iso: "SA", category: "HOSTILE", note: "교회 금지, 선교 불법, 개종 사형 위험" },
  { country_en: "North Korea", country_ko: "북한", iso: "KP", category: "HOSTILE", note: "최악의 박해국, 종교 자체가 국가 전복죄" },
  { country_en: "Somalia", country_ko: "소말리아", iso: "SO", category: "HOSTILE", note: "이슬람 극단주의, 기독교인 생명 위협" },
];

export const CATEGORY_COLORS: Record<MissionCategory, string> = {
  FREE: "#16a34a",       // green-600
  CAUTION: "#ca8a04",   // yellow-600
  RESTRICTED: "#ea580c", // orange-600
  HOSTILE: "#dc2626",   // red-600
};

export const CATEGORY_LABELS: Record<MissionCategory, string> = {
  FREE: "선교 자유",
  CAUTION: "주의 필요",
  RESTRICTED: "제한적",
  HOSTILE: "위험 / 박해",
};

export const CATEGORY_BG: Record<MissionCategory, string> = {
  FREE: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
  CAUTION: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
  RESTRICTED: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
  HOSTILE: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
};

export function getCountryByIso(iso: string): MissionCountry | undefined {
  return MISSION_COUNTRIES.find((c) => c.iso === iso);
}
