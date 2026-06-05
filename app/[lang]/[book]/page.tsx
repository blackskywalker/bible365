import { redirect } from "next/navigation";

export default async function BookIndex({
  params,
}: PageProps<"/[lang]/[book]">) {
  const { lang, book } = await params;
  redirect(`/${lang}/${book}/1`);
}
