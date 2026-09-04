import { TRANSLATIONS, type Lang } from "@/lib/books";

const FOOTER_COPY: Record<Lang, { support: string; tagline: string; worldMap: string; privacy: string }> = {
  ko: { support: "♡ 아시아 말씀 사역 후원하기", tagline: "어디서든 펼치는 성경", worldMap: "세계 전도 지도", privacy: "개인정보처리방침" },
  en: { support: "♡ Support Asia Bible Mission", tagline: "The Bible, anywhere, anytime", worldMap: "World Mission Map", privacy: "Privacy Policy" },
  vi: { support: "♡ Ủng hộ Sứ mạng Kinh Thánh châu Á", tagline: "Kinh Thánh mọi lúc, mọi nơi", worldMap: "Bản đồ Truyền giáo", privacy: "Chính sách Bảo mật" },
  th: { support: "♡ สนับสนุนพันธกิจพระคัมภีร์เอเชีย", tagline: "พระคัมภีร์ ทุกที่ ทุกเวลา", worldMap: "แผนที่มิชชัน", privacy: "นโยบายความเป็นส่วนตัว" },
  zh: { support: "♡ 支持亚洲圣经事工", tagline: "随时随地，展开圣经", worldMap: "世界宣教地图", privacy: "隐私政策" },
  tl: { support: "♡ Suportahan ang Misyon ng Biblia sa Asya", tagline: "Ang Biblia, kahit saan, kahit kailan", worldMap: "Mapa ng Misyon", privacy: "Patakaran sa Privacy" },
  es: { support: "♡ Apoyar la Misión Bíblica en Asia", tagline: "La Biblia, en cualquier lugar", worldMap: "Mapa de Misión Mundial", privacy: "Política de Privacidad" },
};

export function Footer({ lang }: { lang: Lang }) {
  const t = TRANSLATIONS[lang];
  const c = FOOTER_COPY[lang];
  return (
    <footer className="mt-16 border-t border-stone-200 dark:border-neutral-800 py-6 text-xs text-stone-500 dark:text-stone-400">
      <div className="max-w-3xl mx-auto px-4 space-y-3">
        <a
          href="/support"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-amber-700/40 dark:border-amber-400/40 text-amber-700 dark:text-amber-400 font-medium text-sm hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-colors"
        >
          {c.support}
        </a>
        <p>{t.attribution}</p>
        <p className="text-stone-400 dark:text-stone-500">
          bible365 · {c.tagline} · 24/7 ·{" "}
          <a href="/world" className="underline">
            {c.worldMap}
          </a>
          {" · "}
          <a href="/privacy" className="underline">
            {c.privacy}
          </a>
        </p>
      </div>
    </footer>
  );
}
