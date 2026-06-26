export type BookMeta = {
  code: string;
  index: number;
  chapters: number;
  testament: "OT" | "NT";
  names: Record<Lang, string>;
};

export const BOOKS: BookMeta[] = [
  { code: "gen", index: 0, chapters: 50, testament: "OT", names: { en: "Genesis", ko: "창세기", vi: "Sáng Thế Ký", th: "ปฐมกาล", zh: "創世記" } },
  { code: "exo", index: 1, chapters: 40, testament: "OT", names: { en: "Exodus", ko: "출애굽기", vi: "Xuất Ê-díp-tô Ký", th: "อพยพ", zh: "出埃及記" } },
  { code: "lev", index: 2, chapters: 27, testament: "OT", names: { en: "Leviticus", ko: "레위기", vi: "Lê-vi Ký", th: "เลวีนิติ", zh: "利未記" } },
  { code: "num", index: 3, chapters: 36, testament: "OT", names: { en: "Numbers", ko: "민수기", vi: "Dân Số Ký", th: "กันดารวิถี", zh: "民數記" } },
  { code: "deu", index: 4, chapters: 34, testament: "OT", names: { en: "Deuteronomy", ko: "신명기", vi: "Phục Truyền Luật Lệ Ký", th: "เฉลยธรรมบัญญัติ", zh: "申命記" } },
  { code: "jos", index: 5, chapters: 24, testament: "OT", names: { en: "Joshua", ko: "여호수아", vi: "Giô-suê", th: "โยชูวา", zh: "約書亞記" } },
  { code: "jdg", index: 6, chapters: 21, testament: "OT", names: { en: "Judges", ko: "사사기", vi: "Các Quan Xét", th: "ผู้วินิจฉัย", zh: "士師記" } },
  { code: "rut", index: 7, chapters: 4, testament: "OT", names: { en: "Ruth", ko: "룻기", vi: "Ru-tơ", th: "นางรูธ", zh: "路得記" } },
  { code: "1sa", index: 8, chapters: 31, testament: "OT", names: { en: "1 Samuel", ko: "사무엘상", vi: "I Sa-mu-ên", th: "1 ซามูเอล", zh: "撒母耳記上" } },
  { code: "2sa", index: 9, chapters: 24, testament: "OT", names: { en: "2 Samuel", ko: "사무엘하", vi: "II Sa-mu-ên", th: "2 ซามูเอล", zh: "撒母耳記下" } },
  { code: "1ki", index: 10, chapters: 22, testament: "OT", names: { en: "1 Kings", ko: "열왕기상", vi: "I Các Vua", th: "1 พงศ์กษัตริย์", zh: "列王紀上" } },
  { code: "2ki", index: 11, chapters: 25, testament: "OT", names: { en: "2 Kings", ko: "열왕기하", vi: "II Các Vua", th: "2 พงศ์กษัตริย์", zh: "列王紀下" } },
  { code: "1ch", index: 12, chapters: 29, testament: "OT", names: { en: "1 Chronicles", ko: "역대상", vi: "I Sử Ký", th: "1 พงศาวดาร", zh: "歷代志上" } },
  { code: "2ch", index: 13, chapters: 36, testament: "OT", names: { en: "2 Chronicles", ko: "역대하", vi: "II Sử Ký", th: "2 พงศาวดาร", zh: "歷代志下" } },
  { code: "ezr", index: 14, chapters: 10, testament: "OT", names: { en: "Ezra", ko: "에스라", vi: "E-xơ-ra", th: "เอสรา", zh: "以斯拉記" } },
  { code: "neh", index: 15, chapters: 13, testament: "OT", names: { en: "Nehemiah", ko: "느헤미야", vi: "Nê-hê-mi", th: "เนหะมีย์", zh: "尼希米記" } },
  { code: "est", index: 16, chapters: 10, testament: "OT", names: { en: "Esther", ko: "에스더", vi: "Ê-xơ-tê", th: "เอสเธอร์", zh: "以斯帖記" } },
  { code: "job", index: 17, chapters: 42, testament: "OT", names: { en: "Job", ko: "욥기", vi: "Gióp", th: "โยบ", zh: "約伯記" } },
  { code: "psa", index: 18, chapters: 150, testament: "OT", names: { en: "Psalms", ko: "시편", vi: "Thi Thiên", th: "เพลงสดุดี", zh: "詩篇" } },
  { code: "pro", index: 19, chapters: 31, testament: "OT", names: { en: "Proverbs", ko: "잠언", vi: "Châm Ngôn", th: "สุภาษิต", zh: "箴言" } },
  { code: "ecc", index: 20, chapters: 12, testament: "OT", names: { en: "Ecclesiastes", ko: "전도서", vi: "Truyền Đạo", th: "ปัญญาจารย์", zh: "傳道書" } },
  { code: "sng", index: 21, chapters: 8, testament: "OT", names: { en: "Song of Solomon", ko: "아가", vi: "Nhã Ca", th: "เพลงซาโลมอน", zh: "雅歌" } },
  { code: "isa", index: 22, chapters: 66, testament: "OT", names: { en: "Isaiah", ko: "이사야", vi: "Ê-sai", th: "อิสยาห์", zh: "以賽亞書" } },
  { code: "jer", index: 23, chapters: 52, testament: "OT", names: { en: "Jeremiah", ko: "예레미야", vi: "Giê-rê-mi", th: "เยเรมีย์", zh: "耶利米書" } },
  { code: "lam", index: 24, chapters: 5, testament: "OT", names: { en: "Lamentations", ko: "예레미야애가", vi: "Ca Thương", th: "เพลงคร่ำครวญ", zh: "耶利米哀歌" } },
  { code: "ezk", index: 25, chapters: 48, testament: "OT", names: { en: "Ezekiel", ko: "에스겔", vi: "Ê-xê-chi-ên", th: "เอเสเคียล", zh: "以西結書" } },
  { code: "dan", index: 26, chapters: 12, testament: "OT", names: { en: "Daniel", ko: "다니엘", vi: "Đa-ni-ên", th: "ดาเนียล", zh: "但以理書" } },
  { code: "hos", index: 27, chapters: 14, testament: "OT", names: { en: "Hosea", ko: "호세아", vi: "Ô-sê", th: "โฮเชยา", zh: "何西阿書" } },
  { code: "jol", index: 28, chapters: 3, testament: "OT", names: { en: "Joel", ko: "요엘", vi: "Giô-ên", th: "โยเอล", zh: "約珥書" } },
  { code: "amo", index: 29, chapters: 9, testament: "OT", names: { en: "Amos", ko: "아모스", vi: "A-mốt", th: "อาโมส", zh: "阿摩司書" } },
  { code: "oba", index: 30, chapters: 1, testament: "OT", names: { en: "Obadiah", ko: "오바댜", vi: "Áp-đia", th: "โอบาดีห์", zh: "俄巴底亞書" } },
  { code: "jon", index: 31, chapters: 4, testament: "OT", names: { en: "Jonah", ko: "요나", vi: "Giô-na", th: "โยนาห์", zh: "約拿書" } },
  { code: "mic", index: 32, chapters: 7, testament: "OT", names: { en: "Micah", ko: "미가", vi: "Mi-chê", th: "มีคาห์", zh: "彌迦書" } },
  { code: "nam", index: 33, chapters: 3, testament: "OT", names: { en: "Nahum", ko: "나훔", vi: "Na-hum", th: "นาฮูม", zh: "那鴻書" } },
  { code: "hab", index: 34, chapters: 3, testament: "OT", names: { en: "Habakkuk", ko: "하박국", vi: "Ha-ba-cúc", th: "ฮาบากุก", zh: "哈巴谷書" } },
  { code: "zep", index: 35, chapters: 3, testament: "OT", names: { en: "Zephaniah", ko: "스바냐", vi: "Sô-phô-ni", th: "เศฟันยาห์", zh: "西番雅書" } },
  { code: "hag", index: 36, chapters: 2, testament: "OT", names: { en: "Haggai", ko: "학개", vi: "A-ghê", th: "ฮักกัย", zh: "哈該書" } },
  { code: "zec", index: 37, chapters: 14, testament: "OT", names: { en: "Zechariah", ko: "스가랴", vi: "Xa-cha-ri", th: "เศคาริยาห์", zh: "撒迦利亞書" } },
  { code: "mal", index: 38, chapters: 4, testament: "OT", names: { en: "Malachi", ko: "말라기", vi: "Ma-la-chi", th: "มาลาคี", zh: "瑪拉基書" } },
  { code: "mat", index: 39, chapters: 28, testament: "NT", names: { en: "Matthew", ko: "마태복음", vi: "Ma-thi-ơ", th: "มัทธิว", zh: "馬太福音" } },
  { code: "mrk", index: 40, chapters: 16, testament: "NT", names: { en: "Mark", ko: "마가복음", vi: "Mác", th: "มาระโก", zh: "馬可福音" } },
  { code: "luk", index: 41, chapters: 24, testament: "NT", names: { en: "Luke", ko: "누가복음", vi: "Lu-ca", th: "ลูกา", zh: "路加福音" } },
  { code: "jhn", index: 42, chapters: 21, testament: "NT", names: { en: "John", ko: "요한복음", vi: "Giăng", th: "ยอห์น", zh: "約翰福音" } },
  { code: "act", index: 43, chapters: 28, testament: "NT", names: { en: "Acts", ko: "사도행전", vi: "Công Vụ", th: "กิจการ", zh: "使徒行傳" } },
  { code: "rom", index: 44, chapters: 16, testament: "NT", names: { en: "Romans", ko: "로마서", vi: "Rô-ma", th: "โรม", zh: "羅馬書" } },
  { code: "1co", index: 45, chapters: 16, testament: "NT", names: { en: "1 Corinthians", ko: "고린도전서", vi: "I Cô-rinh-tô", th: "1 โครินธ์", zh: "哥林多前書" } },
  { code: "2co", index: 46, chapters: 13, testament: "NT", names: { en: "2 Corinthians", ko: "고린도후서", vi: "II Cô-rinh-tô", th: "2 โครินธ์", zh: "哥林多後書" } },
  { code: "gal", index: 47, chapters: 6, testament: "NT", names: { en: "Galatians", ko: "갈라디아서", vi: "Ga-la-ti", th: "กาลาเทีย", zh: "加拉太書" } },
  { code: "eph", index: 48, chapters: 6, testament: "NT", names: { en: "Ephesians", ko: "에베소서", vi: "Ê-phê-sô", th: "เอเฟซัส", zh: "以弗所書" } },
  { code: "php", index: 49, chapters: 4, testament: "NT", names: { en: "Philippians", ko: "빌립보서", vi: "Phi-líp", th: "ฟีลิปปี", zh: "腓立比書" } },
  { code: "col", index: 50, chapters: 4, testament: "NT", names: { en: "Colossians", ko: "골로새서", vi: "Cô-lô-se", th: "โคโลสี", zh: "歌羅西書" } },
  { code: "1th", index: 51, chapters: 5, testament: "NT", names: { en: "1 Thessalonians", ko: "데살로니가전서", vi: "I Tê-sa-lô-ni-ca", th: "1 เธสะโลนิกา", zh: "帖撒羅尼迦前書" } },
  { code: "2th", index: 52, chapters: 3, testament: "NT", names: { en: "2 Thessalonians", ko: "데살로니가후서", vi: "II Tê-sa-lô-ni-ca", th: "2 เธสะโลนิกา", zh: "帖撒羅尼迦後書" } },
  { code: "1ti", index: 53, chapters: 6, testament: "NT", names: { en: "1 Timothy", ko: "디모데전서", vi: "I Ti-mô-thê", th: "1 ทิโมธี", zh: "提摩太前書" } },
  { code: "2ti", index: 54, chapters: 4, testament: "NT", names: { en: "2 Timothy", ko: "디모데후서", vi: "II Ti-mô-thê", th: "2 ทิโมธี", zh: "提摩太後書" } },
  { code: "tit", index: 55, chapters: 3, testament: "NT", names: { en: "Titus", ko: "디도서", vi: "Tít", th: "ทิตัส", zh: "提多書" } },
  { code: "phm", index: 56, chapters: 1, testament: "NT", names: { en: "Philemon", ko: "빌레몬서", vi: "Phi-lê-môn", th: "ฟีเลโมน", zh: "腓利門書" } },
  { code: "heb", index: 57, chapters: 13, testament: "NT", names: { en: "Hebrews", ko: "히브리서", vi: "Hê-bơ-rơ", th: "ฮีบรู", zh: "希伯來書" } },
  { code: "jas", index: 58, chapters: 5, testament: "NT", names: { en: "James", ko: "야고보서", vi: "Gia-cơ", th: "ยากอบ", zh: "雅各書" } },
  { code: "1pe", index: 59, chapters: 5, testament: "NT", names: { en: "1 Peter", ko: "베드로전서", vi: "I Phi-e-rơ", th: "1 เปโตร", zh: "彼得前書" } },
  { code: "2pe", index: 60, chapters: 3, testament: "NT", names: { en: "2 Peter", ko: "베드로후서", vi: "II Phi-e-rơ", th: "2 เปโตร", zh: "彼得後書" } },
  { code: "1jn", index: 61, chapters: 5, testament: "NT", names: { en: "1 John", ko: "요한일서", vi: "I Giăng", th: "1 ยอห์น", zh: "約翰一書" } },
  { code: "2jn", index: 62, chapters: 1, testament: "NT", names: { en: "2 John", ko: "요한이서", vi: "II Giăng", th: "2 ยอห์น", zh: "約翰二書" } },
  { code: "3jn", index: 63, chapters: 1, testament: "NT", names: { en: "3 John", ko: "요한삼서", vi: "III Giăng", th: "3 ยอห์น", zh: "約翰三書" } },
  { code: "jud", index: 64, chapters: 1, testament: "NT", names: { en: "Jude", ko: "유다서", vi: "Giu-đe", th: "ยูดา", zh: "猶大書" } },
  { code: "rev", index: 65, chapters: 22, testament: "NT", names: { en: "Revelation", ko: "요한계시록", vi: "Khải Huyền", th: "วิวรณ์", zh: "啟示錄" } },
];

export const BOOK_BY_CODE: Record<string, BookMeta> = Object.fromEntries(
  BOOKS.map((b) => [b.code, b]),
);

export const LANGUAGES = ["ko", "en", "vi", "th", "zh"] as const;
export type Lang = (typeof LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Lang, { native: string; english: string }> = {
  ko: { native: "한국어", english: "Korean" },
  en: { native: "English", english: "English" },
  vi: { native: "Tiếng Việt", english: "Vietnamese" },
  th: { native: "ไทย", english: "Thai" },
  zh: { native: "中文", english: "Chinese" },
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
  zh: {
    name: "和合本",
    license: "Public Domain",
    attribution: "和合本 (Chinese Union Version, 1919) — Public Domain",
  },
};
