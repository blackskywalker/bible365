import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "bible365 — 어디서든 펼치는 성경",
  description:
    "24시간 365일 어디서든 가볍게 펼치는 다국어 온라인 성경. Read the Bible anywhere, anytime, in your language.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');var s=localStorage.getItem('fontSize');if(s)document.documentElement.style.setProperty('--reader-font-size',s+'px');}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100 transition-colors">
        {children}
      </body>
    </html>
  );
}
