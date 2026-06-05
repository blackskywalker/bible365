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
  return <>{children}</>;
}
