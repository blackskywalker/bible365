export type BookMeta = {
  code: string;
  index: number;
  chapters: number;
  testament: "OT" | "NT";
  names: Record<Lang, string>;
};

export const BOOKS: BookMeta[] = [
  { code: "gen", index: 0, chapters: 50, testament: "OT", names: { en: "Genesis", ko: "창세기", vi: "Sáng Thế Ký", th: "ปฐมกาล" } },
  { code: "exo", index: 1, chapters: 40, testament: "OT", names: { en: "Exodus", ko: "출애굽기", vi: "Xuất Ê-díp-tô Ký", th: "อพยพ" } },
  { code: "lev", index: 2, chapters: 27, testament: "OT", names: { en: "Leviticus", ko: "레위기", vi: "Lê-vi Ký", th: "เลวีนิติ" } },
  { code: "num", index: 3, chapters: 36, testament: "OT", names: { en: "Numbers", ko: "민수기", vi: "Dân Số Ký", th: "กันดารวิถี" } },
  { code: "deu", index: 4, chapters: 34, testament: "OT", names: { en: "Deuteronomy", ko: "신명기", vi: "Phục Truyền Luật Lệ Ký", th: "เฉลยธรรมบัญญัติ" } },
  { code: "jos", index: 5, chapters: 24, testament: "OT", names: { en: "Joshua", ko: "여호수아", vi: "Giô-suê", th: "โยชูวา" } },
  { code: "jdg", index: 6, chapters: 21, testament: "OT", names: { en: "Judges", ko: "사사기", vi: "Các Quan Xét", th: "ผู้วินิจฉัย" } },
  { code: "rut", index: 7, chapters: 4, testament: "OT", names: { en: "Ruth", ko: "룻기", vi: "Ru-tơ", th: "นางรูธ" } },
  { code: "1sa", index: 8, chapters: 31, testament: "OT", names: { en: "1 Samuel", ko: "사무엘상", vi: "I Sa-mu-ên", th: "1 ซามูเอล" } },
  { code: "2sa", index: 9, chapters: 24, testament: "OT", names: { en: "2 Samuel", ko: "사무엘하", vi: "II Sa-mu-ên", th: "2 ซามูเอล" } },
  { code: "1ki", index: 10, chapters: 22, testament: "OT", names: { en: "1 Kings", ko: "열왕기상", vi: "I Các Vua", th: "1 พงศ์กษัตริย์" } },
  { code: "2ki", index: 11, chapters: 25, testament: "OT", names: { en: "2 Kings", ko: "열왕기하", vi: "II Các Vua", th: "2 พงศ์กษัตริย์" } },
  { code: "1ch", index: 12, chapters: 29, testament: "OT", names: { en: "1 Chronicles", ko: "역대상", vi: "I Sử Ký", th: "1 พงศาวดาร" } },
  { code: "2ch", index: 13, chapters: 36, testament: "OT", names: { en: "2 Chronicles", ko: "역대하", vi: "II Sử Ký", th: "2 พงศาวดาร" } },
  { code: "ezr", index: 14, chapters: 10, testament: "OT", names: { en: "Ezra", ko: "에스라", vi: "E-xơ-ra", th: "เอสรา" } },
  { code: "neh", index: 15, chapters: 13, testament: "OT", names: { en: "Nehemiah", ko: "느헤미야", vi: "Nê-hê-mi", th: "เนหะมีย์" } },
  { code: "est", index: 16, chapters: 10, testament: "OT", names: { en: "Esther", ko: "에스더", vi: "Ê-xơ-tê", th: "เอสเธอร์" } },
  { code: "job", index: 17, chapters: 42, testament: "OT", names: { en: "Job", ko: "욥기", vi: "Gióp", th: "โยบ" } },
  { code: "psa", index: 18, chapters: 150, testament: "OT", names: { en: "Psalms", ko: "시편", vi: "Thi Thiên", th: "เพลงสดุดี" } },
  { code: "pro", index: 19, chapters: 31, testament: "OT", names: { en: "Proverbs", ko: "잠언", vi: "Châm Ngôn", th: "สุภาษิต" } },
  { code: "ecc", index: 20, chapters: 12, testament: "OT", names: { en: "Ecclesiastes", ko: "전도서", vi: "Truyền Đạo", th: "ปัญญาจารย์" } },
  { code: "sng", index: 21, chapters: 8, testament: "OT", names: { en: "Song of Solomon", ko: "아가", vi: "Nhã Ca", th: "เพลงซาโลมอน" } },
  { code: "isa", index: 22, chapters: 66, testament: "OT", names: { en: "Isaiah", ko: "이사야", vi: "Ê-sai", th: "อิสยาห์" } },
  { code: "jer", index: 23, chapters: 52, testament: "OT", names: { en: "Jeremiah", ko: "예레미야", vi: "Giê-rê-mi", th: "เยเรมีย์" } },
  { code: "lam", index: 24, chapters: 5, testament: "OT", names: { en: "Lamentations", ko: "예레미야애가", vi: "Ca Thương", th: "เพลงคร่ำครวญ" } },
  { code: "ezk", index: 25, chapters: 48, testament: "OT", names: { en: "Ezekiel", ko: "에스겔", vi: "Ê-xê-chi-ên", th: "เอเสเคียล" } },
  { code: "dan", index: 26, chapters: 12, testament: "OT", names: { en: "Daniel", ko: "다니엘", vi: "Đa-ni-ên", th: "ดาเนียล" } },
  { code: "hos", index: 27, chapters: 14, testament: "OT", names: { en: "Hosea", ko: "호세아", vi: "Ô-sê", th: "โฮเชยา" } },
  { code: "jol", index: 28, chapters: 3, testament: "OT", names: { en: "Joel", ko: "요엘", vi: "Giô-ên", th: "โยเอล" } },
  { code: "amo", index: 29, chapters: 9, testament: "OT", names: { en: "Amos", ko: "아모스", vi: "A-mốt", th: "อาโมส" } },
  { code: "oba", index: 30, chapters: 1, testament: "OT", names: { en: "Obadiah", ko: "오바댜", vi: "Áp-đia", th: "โอบาดีห์" } },
  { code: "jon", index: 31, chapters: 4, testament: "OT", names: { en: "Jonah", ko: "요나", vi: "Giô-na", th: "โยนาห์" } },
  { code: "mic", index: 32, chapters: 7, testament: "OT", names: { en: "Micah", ko: "미가", vi: "Mi-chê", th: "มีคาห์" } },
  { code: "nam", index: 33, chapters: 3, testament: "OT", names: { en: "Nahum", ko: "나훔", vi: "Na-hum", th: "นาฮูม" } },
  { code: "hab", index: 34, chapters: 3, testament: "OT", names: { en: "Habakkuk", ko: "하박국", vi: "Ha-ba-cúc", th: "ฮาบากุก" } },
  { code: "zep", index: 35, chapters: 3, testament: "OT", names: { en: "Zephaniah", ko: "스바냐", vi: "Sô-phô-ni", th: "เศฟันยาห์" } },
  { code: "hag", index: 36, chapters: 2, testament: "OT", names: { en: "Haggai", ko: "학개", vi: "A-ghê", th: "ฮักกัย" } },
  { code: "zec", index: 37, chapters: 14, testament: "OT", names: { en: "Zechariah", ko: "스가랴", vi: "Xa-cha-ri", th: "เศคาริยาห์" } },
  { code: "mal", index: 38, chapters: 4, testament: "OT", names: { en: "Malachi", ko: "말라기", vi: "Ma-la-chi", th: "มาลาคี" } },
  { code: "mat", index: 39, chapters: 28, testament: "NT", names: { en: "Matthew", ko: "마태복음", vi: "Ma-thi-ơ", th: "มัทธิว" } },
  { code: "mrk", index: 40, chapters: 16, testament: "NT", names: { en: "Mark", ko: "마가복음", vi: "Mác", th: "มาระโก" } },
  { code: "luk", index: 41, chapters: 24, testament: "NT", names: { en: "Luke", ko: "누가복음", vi: "Lu-ca", th: "ลูกา" } },
  { code: "jhn", index: 42, chapters: 21, testament: "NT", names: { en: "John", ko: "요한복음", vi: "Giăng", th: "ยอห์น" } },
  { code: "act", index: 43, chapters: 28, testament: "NT", names: { en: "Acts", ko: "사도행전", vi: "Công Vụ", th: "กิจการ" } },
  { code: "rom", index: 44, chapters: 16, testament: "NT", names: { en: "Romans", ko: "로마서", vi: "Rô-ma", th: "โรม" } },
  { code: "1co", index: 45, chapters: 16, testament: "NT", names: { en: "1 Corinthians", ko: "고린도전서", vi: "I Cô-rinh-tô", th: "1 โครินธ์" } },
  { code: "2co", index: 46, chapters: 13, testament: "NT", names: { en: "2 Corinthians", ko: "고린도후서", vi: "II Cô-rinh-tô", th: "2 โครินธ์" } },
  { code: "gal", index: 47, chapters: 6, testament: "NT", names: { en: "Galatians", ko: "갈라디아서", vi: "Ga-la-ti", th: "กาลาเทีย" } },
  { code: "eph", index: 48, chapters: 6, testament: "NT", names: { en: "Ephesians", ko: "에베소서", vi: "Ê-phê-sô", th: "เอเฟซัส" } },
  { code: "php", index: 49, chapters: 4, testament: "NT", names: { en: "Philippians", ko: "빌립보서", vi: "Phi-líp", th: "ฟีลิปปี" } },
  { code: "col", index: 50, chapters: 4, testament: "NT", names: { en: "Colossians", ko: "골로새서", vi: "Cô-lô-se", th: "โคโลสี" } },
  { code: "1th", index: 51, chapters: 5, testament: "NT", names: { en: "1 Thessalonians", ko: "데살로니가전서", vi: "I Tê-sa-lô-ni-ca", th: "1 เธสะโลนิกา" } },
  { code: "2th", index: 52, chapters: 3, testament: "NT", names: { en: "2 Thessalonians", ko: "데살로니가후서", vi: "II Tê-sa-lô-ni-ca", th: "2 เธสะโลนิกา" } },
  { code: "1ti", index: 53, chapters: 6, testament: "NT", names: { en: "1 Timothy", ko: "디모데전서", vi: "I Ti-mô-thê", th: "1 ทิโมธี" } },
  { code: "2ti", index: 54, chapters: 4, testament: "NT", names: { en: "2 Timothy", ko: "디모데후서", vi: "II Ti-mô-thê", th: "2 ทิโมธี" } },
  { code: "tit", index: 55, chapters: 3, testament: "NT", names: { en: "Titus", ko: "디도서", vi: "Tít", th: "ทิตัส" } },
  { code: "phm", index: 56, chapters: 1, testament: "NT", names: { en: "Philemon", ko: "빌레몬서", vi: "Phi-lê-môn", th: "ฟีเลโมน" } },
  { code: "heb", index: 57, chapters: 13, testament: "NT", names: { en: "Hebrews", ko: "히브리서", vi: "Hê-bơ-rơ", th: "ฮีบรู" } },
  { code: "jas", index: 58, chapters: 5, testament: "NT", names: { en: "James", ko: "야고보서", vi: "Gia-cơ", th: "ยากอบ" } },
  { code: "1pe", index: 59, chapters: 5, testament: "NT", names: { en: "1 Peter", ko: "베드로전서", vi: "I Phi-e-rơ", th: "1 เปโตร" } },
  { code: "2pe", index: 60, chapters: 3, testament: "NT", names: { en: "2 Peter", ko: "베드로후서", vi: "II Phi-e-rơ", th: "2 เปโตร" } },
  { code: "1jn", index: 61, chapters: 5, testament: "NT", names: { en: "1 John", ko: "요한일서", vi: "I Giăng", th: "1 ยอห์น" } },
  { code: "2jn", index: 62, chapters: 1, testament: "NT", names: { en: "2 John", ko: "요한이서", vi: "II Giăng", th: "2 ยอห์น" } },
  { code: "3jn", index: 63, chapters: 1, testament: "NT", names: { en: "3 John", ko: "요한삼서", vi: "III Giăng", th: "3 ยอห์น" } },
  { code: "jud", index: 64, chapters: 1, testament: "NT", names: { en: "Jude", ko: "유다서", vi: "Giu-đe", th: "ยูดา" } },
  { code: "rev", index: 65, chapters: 22, testament: "NT", names: { en: "Revelation", ko: "요한계시록", vi: "Khải Huyền", th: "วิวรณ์" } },
];

export const BOOK_BY_CODE: Record<string, BookMeta> = Object.fromEntries(
  BOOKS.map((b) => [b.code, b]),
);

export const LANGUAGES = ["ko", "en", "vi", "th"] as const;
export type Lang = (typeof LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Lang, { native: string; english: string }> = {
  ko: { native: "한국어", english: "Korean" },
  en: { native: "English", english: "English" },
  vi: { native: "Tiếng Việt", english: "Vietnamese" },
  th: { native: "ไทย", english: "Thai" },
};

export const TRANSLATIONS: Record<Lang, { name: string; license: string; attribution: string }> = {
  ko: {
    name: "개역한글판",
    license: "Public Domain",
    attribution: "개역한글판 (Korean Revised Version, 1961) — Public Domain",
  },
  en: {
    name: "American Standard Version",
    license: "Public Domain",
    attribution: "American Standard Version (ASV, 1901) — Public Domain",
  },
  vi: {
    name: "Kinh Thánh Tiếng Việt 1934",
    license: "Public Domain",
    attribution: "Kinh Thánh Tiếng Việt 1934 — Public Domain",
  },
  th: {
    name: "Thai KJV",
    license: "Free distribution",
    attribution: "Thai KJV — Free distribution (CrossWire)",
  },
};
