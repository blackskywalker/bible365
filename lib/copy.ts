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
};

export const FEATURED_VERSES: { book: string; chapter: number; verse: number }[] = [
  { book: "jhn", chapter: 3, verse: 16 },
  { book: "psa", chapter: 23, verse: 1 },
  { book: "mat", chapter: 6, verse: 33 },
  { book: "rom", chapter: 8, verse: 28 },
  { book: "php", chapter: 4, verse: 13 },
  { book: "pro", chapter: 3, verse: 5 },
];
