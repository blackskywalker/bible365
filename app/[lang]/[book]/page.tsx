import { BOOKS, LANGUAGES } from "@/lib/books";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGUAGES.flatMap((lang) =>
    BOOKS.map((book) => ({ lang, book: book.code })),
  );
}

export default async function BookIndex({
  params,
}: PageProps<"/[lang]/[book]">) {
  const { lang, book } = await params;
  const target = `/${lang}/${book}/1/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <p style={{ padding: 24 }}>
        <a href={target}>Continue</a>
      </p>
    </>
  );
}
