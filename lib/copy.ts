import type { Lang } from "./books";

type HomeCopy = {
  tagline: string;
  subline: string;
  oldTestament: string;
  newTestament: string;
  featured: string;
};

export const HOME_COPY: Record<Lang, HomeCopy> = {
  ko: {
    tagline: "어디서든 펼치는 성경",
    subline: "24시간 365일, 가벼운 마음으로 말씀 곁에.",
    oldTestament: "구약 39권",
    newTestament: "신약 27권",
    featured: "오늘의 말씀",
  },
  en: {
    tagline: "The Bible, anywhere, anytime",
    subline: "Open the Word in your pocket, 24/7.",
    oldTestament: "Old Testament · 39 books",
    newTestament: "New Testament · 27 books",
    featured: "Verse of the day",
  },
  vi: {
    tagline: "Kinh Thánh, mọi lúc, mọi nơi",
    subline: "Mở Lời Chúa bất cứ khi nào, 24/7.",
    oldTestament: "Cựu Ước · 39 sách",
    newTestament: "Tân Ước · 27 sách",
    featured: "Câu Kinh Thánh hôm nay",
  },
  th: {
    tagline: "พระคัมภีร์ ทุกที่ ทุกเวลา",
    subline: "เปิดพระวจนะได้ทุกเมื่อ ตลอด 24 ชั่วโมง",
    oldTestament: "พันธสัญญาเดิม · 39 เล่ม",
    newTestament: "พันธสัญญาใหม่ · 27 เล่ม",
    featured: "ข้อพระคัมภีร์ประจำวัน",
  },
  zh: {
    tagline: "隨時隨地，展開聖經",
    subline: "全天候24小時，輕鬆閱讀神的話語。",
    oldTestament: "舊約 · 39卷",
    newTestament: "新約 · 27卷",
    featured: "今日金句",
  },
  tl: {
    tagline: "Ang Biblia, kahit saan, kahit kailan",
    subline: "Buksan ang Salita ng Diyos anumang oras, 24/7.",
    oldTestament: "Lumang Tipan · 39 aklat",
    newTestament: "Bagong Tipan · 27 aklat",
    featured: "Talata ng araw",
  },
};

export const FEATURED_VERSES: { book: string; chapter: number; verse: number }[] = [
  // 요한복음
  { book: "jhn", chapter: 3, verse: 16 },
  { book: "jhn", chapter: 1, verse: 1 },
  { book: "jhn", chapter: 14, verse: 6 },
  { book: "jhn", chapter: 11, verse: 25 },
  { book: "jhn", chapter: 8, verse: 32 },
  { book: "jhn", chapter: 15, verse: 5 },
  { book: "jhn", chapter: 10, verse: 10 },
  { book: "jhn", chapter: 16, verse: 33 },
  { book: "jhn", chapter: 4, verse: 24 },
  { book: "jhn", chapter: 6, verse: 35 },
  // 시편
  { book: "psa", chapter: 23, verse: 1 },
  { book: "psa", chapter: 46, verse: 1 },
  { book: "psa", chapter: 119, verse: 105 },
  { book: "psa", chapter: 27, verse: 1 },
  { book: "psa", chapter: 91, verse: 1 },
  { book: "psa", chapter: 37, verse: 4 },
  { book: "psa", chapter: 34, verse: 8 },
  { book: "psa", chapter: 103, verse: 1 },
  { book: "psa", chapter: 121, verse: 1 },
  { book: "psa", chapter: 139, verse: 14 },
  { book: "psa", chapter: 1, verse: 1 },
  { book: "psa", chapter: 19, verse: 1 },
  { book: "psa", chapter: 42, verse: 1 },
  { book: "psa", chapter: 51, verse: 10 },
  { book: "psa", chapter: 100, verse: 1 },
  // 마태복음
  { book: "mat", chapter: 6, verse: 33 },
  { book: "mat", chapter: 5, verse: 3 },
  { book: "mat", chapter: 11, verse: 28 },
  { book: "mat", chapter: 28, verse: 19 },
  { book: "mat", chapter: 6, verse: 9 },
  { book: "mat", chapter: 5, verse: 14 },
  { book: "mat", chapter: 7, verse: 7 },
  { book: "mat", chapter: 22, verse: 37 },
  { book: "mat", chapter: 6, verse: 34 },
  // 로마서
  { book: "rom", chapter: 8, verse: 28 },
  { book: "rom", chapter: 3, verse: 23 },
  { book: "rom", chapter: 5, verse: 8 },
  { book: "rom", chapter: 8, verse: 1 },
  { book: "rom", chapter: 12, verse: 1 },
  { book: "rom", chapter: 8, verse: 38 },
  { book: "rom", chapter: 10, verse: 9 },
  { book: "rom", chapter: 6, verse: 23 },
  { book: "rom", chapter: 1, verse: 16 },
  // 빌립보서
  { book: "php", chapter: 4, verse: 13 },
  { book: "php", chapter: 4, verse: 6 },
  { book: "php", chapter: 4, verse: 7 },
  { book: "php", chapter: 2, verse: 3 },
  { book: "php", chapter: 1, verse: 6 },
  { book: "php", chapter: 4, verse: 19 },
  { book: "php", chapter: 3, verse: 14 },
  // 잠언
  { book: "pro", chapter: 3, verse: 5 },
  { book: "pro", chapter: 3, verse: 6 },
  { book: "pro", chapter: 1, verse: 7 },
  { book: "pro", chapter: 16, verse: 3 },
  { book: "pro", chapter: 22, verse: 6 },
  { book: "pro", chapter: 4, verse: 23 },
  { book: "pro", chapter: 17, verse: 17 },
  { book: "pro", chapter: 31, verse: 25 },
  { book: "pro", chapter: 27, verse: 17 },
  // 이사야
  { book: "isa", chapter: 40, verse: 31 },
  { book: "isa", chapter: 41, verse: 10 },
  { book: "isa", chapter: 43, verse: 2 },
  { book: "isa", chapter: 53, verse: 5 },
  { book: "isa", chapter: 55, verse: 8 },
  { book: "isa", chapter: 26, verse: 3 },
  { book: "isa", chapter: 9, verse: 6 },
  { book: "isa", chapter: 40, verse: 28 },
  { book: "isa", chapter: 43, verse: 19 },
  // 예레미야
  { book: "jer", chapter: 29, verse: 11 },
  { book: "jer", chapter: 33, verse: 3 },
  { book: "jer", chapter: 17, verse: 7 },
  // 창세기
  { book: "gen", chapter: 1, verse: 1 },
  { book: "gen", chapter: 1, verse: 27 },
  { book: "gen", chapter: 28, verse: 15 },
  { book: "gen", chapter: 50, verse: 20 },
  // 출애굽기
  { book: "exo", chapter: 14, verse: 14 },
  { book: "exo", chapter: 20, verse: 3 },
  { book: "exo", chapter: 33, verse: 14 },
  // 신명기
  { book: "deu", chapter: 31, verse: 6 },
  { book: "deu", chapter: 6, verse: 5 },
  // 여호수아
  { book: "jos", chapter: 1, verse: 9 },
  { book: "jos", chapter: 24, verse: 15 },
  // 마가복음
  { book: "mrk", chapter: 16, verse: 15 },
  { book: "mrk", chapter: 10, verse: 27 },
  { book: "mrk", chapter: 12, verse: 30 },
  // 누가복음
  { book: "luk", chapter: 1, verse: 37 },
  { book: "luk", chapter: 6, verse: 31 },
  { book: "luk", chapter: 11, verse: 9 },
  { book: "luk", chapter: 15, verse: 7 },
  // 사도행전
  { book: "act", chapter: 1, verse: 8 },
  { book: "act", chapter: 2, verse: 38 },
  { book: "act", chapter: 4, verse: 12 },
  // 고린도전서
  { book: "1co", chapter: 13, verse: 4 },
  { book: "1co", chapter: 13, verse: 13 },
  { book: "1co", chapter: 10, verse: 13 },
  { book: "1co", chapter: 6, verse: 19 },
  { book: "1co", chapter: 15, verse: 55 },
  // 고린도후서
  { book: "2co", chapter: 5, verse: 17 },
  { book: "2co", chapter: 12, verse: 9 },
  { book: "2co", chapter: 4, verse: 17 },
  // 갈라디아서
  { book: "gal", chapter: 5, verse: 22 },
  { book: "gal", chapter: 2, verse: 20 },
  { book: "gal", chapter: 6, verse: 9 },
  // 에베소서
  { book: "eph", chapter: 2, verse: 8 },
  { book: "eph", chapter: 6, verse: 11 },
  { book: "eph", chapter: 3, verse: 20 },
  { book: "eph", chapter: 4, verse: 32 },
  // 골로새서
  { book: "col", chapter: 3, verse: 23 },
  { book: "col", chapter: 3, verse: 16 },
  // 데살로니가전서
  { book: "1th", chapter: 5, verse: 16 },
  { book: "1th", chapter: 5, verse: 17 },
  { book: "1th", chapter: 5, verse: 18 },
  // 디모데후서
  { book: "2ti", chapter: 3, verse: 16 },
  { book: "2ti", chapter: 1, verse: 7 },
  // 히브리서
  { book: "heb", chapter: 11, verse: 1 },
  { book: "heb", chapter: 13, verse: 8 },
  { book: "heb", chapter: 4, verse: 12 },
  { book: "heb", chapter: 12, verse: 1 },
  // 야고보서
  { book: "jas", chapter: 1, verse: 2 },
  { book: "jas", chapter: 1, verse: 17 },
  { book: "jas", chapter: 4, verse: 7 },
  // 베드로전서
  { book: "1pe", chapter: 5, verse: 7 },
  { book: "1pe", chapter: 2, verse: 9 },
  // 요한일서
  { book: "1jn", chapter: 4, verse: 8 },
  { book: "1jn", chapter: 1, verse: 9 },
  { book: "1jn", chapter: 4, verse: 19 },
  { book: "1jn", chapter: 5, verse: 4 },
  // 요한계시록
  { book: "rev", chapter: 21, verse: 4 },
  { book: "rev", chapter: 3, verse: 20 },
  { book: "rev", chapter: 22, verse: 20 },
];
