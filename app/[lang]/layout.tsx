import { notFound } from "next/navigation";
import { LANGUAGES, type Lang } from "@/lib/books";

export function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!LANGUAGES.includes(lang as Lang)) notFound();
  return (
    <>
      {/* 정적 export는 루트 <html>이 하나뿐이라 서버에서 lang을 못 바꾼다 */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(lang)}`,
        }}
      />
      {children}
    </>
  );
}
