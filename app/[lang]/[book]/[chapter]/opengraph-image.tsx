import { ImageResponse } from "next/og";
import { BOOK_BY_CODE, LANGUAGES, type Lang } from "@/lib/books";

export const alt = "bible365 — read the Bible anywhere";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ENGLISH_BOOK_LABEL: Record<string, string> = {
  gen: "Genesis", exo: "Exodus", lev: "Leviticus", num: "Numbers",
  deu: "Deuteronomy", jos: "Joshua", jdg: "Judges", rut: "Ruth",
  "1sa": "1 Samuel", "2sa": "2 Samuel", "1ki": "1 Kings", "2ki": "2 Kings",
  "1ch": "1 Chronicles", "2ch": "2 Chronicles", ezr: "Ezra", neh: "Nehemiah",
  est: "Esther", job: "Job", psa: "Psalms", pro: "Proverbs",
  ecc: "Ecclesiastes", sng: "Song of Solomon", isa: "Isaiah", jer: "Jeremiah",
  lam: "Lamentations", ezk: "Ezekiel", dan: "Daniel", hos: "Hosea",
  jol: "Joel", amo: "Amos", oba: "Obadiah", jon: "Jonah", mic: "Micah",
  nam: "Nahum", hab: "Habakkuk", zep: "Zephaniah", hag: "Haggai",
  zec: "Zechariah", mal: "Malachi", mat: "Matthew", mrk: "Mark",
  luk: "Luke", jhn: "John", act: "Acts", rom: "Romans",
  "1co": "1 Corinthians", "2co": "2 Corinthians", gal: "Galatians",
  eph: "Ephesians", php: "Philippians", col: "Colossians",
  "1th": "1 Thessalonians", "2th": "2 Thessalonians", "1ti": "1 Timothy",
  "2ti": "2 Timothy", tit: "Titus", phm: "Philemon", heb: "Hebrews",
  jas: "James", "1pe": "1 Peter", "2pe": "2 Peter", "1jn": "1 John",
  "2jn": "2 John", "3jn": "3 John", jud: "Jude", rev: "Revelation",
};

const LANG_LABEL: Record<Lang, string> = {
  ko: "Korean",
  en: "English",
  vi: "Vietnamese",
  th: "Thai",
};

export default async function Image({
  params,
}: {
  params: Promise<{ lang: string; book: string; chapter: string }>;
}) {
  const { lang, book, chapter } = await params;
  const meta = BOOK_BY_CODE[book];
  const bookLabel = (meta && ENGLISH_BOOK_LABEL[book]) || "Bible";
  const langLabel =
    LANGUAGES.includes(lang as Lang) ? LANG_LABEL[lang as Lang] : "Multilingual";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#1c1917",
          color: "#fafaf9",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "32px",
            color: "#fbbf24",
            letterSpacing: "0.05em",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "3px solid #fbbf24",
              borderRadius: "8px",
              display: "flex",
            }}
          />
          <span style={{ fontWeight: 700 }}>bible365</span>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <div style={{ fontSize: "48px", color: "#a8a29e" }}>{bookLabel}</div>
          <div
            style={{
              fontSize: "180px",
              fontWeight: 700,
              lineHeight: 1,
              color: "#fbbf24",
              marginTop: "8px",
            }}
          >
            {chapter}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "28px",
            color: "#a8a29e",
          }}
        >
          <div style={{ display: "flex" }}>{langLabel} · 24/7</div>
          <div style={{ display: "flex" }}>
            Read the Bible anywhere
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
