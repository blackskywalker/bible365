import type { Metadata } from "next";
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "bible365 — Read the Bible Anywhere",
    template: "%s · bible365",
  },
  description:
    "Free multilingual Bible — Korean, English, Vietnamese, Thai, Chinese, Filipino, Spanish. Read anytime, anywhere, 24/7.",
  keywords: ["Bible", "성경", "Biblia", "พระคัมภีร์", "圣经", "Kinh Thánh", "multilingual", "free"],
  verification: {
    google: "hwtyn_ST-aT6hKh23teQfrRcio0fOfWgBDzSDp_451Y",
  },
  openGraph: {
    type: "website",
    siteName: "bible365",
    title: "bible365 — Read the Bible Anywhere",
    description: "Free multilingual Bible in 7 languages. No ads. No login. 24/7.",
    images: [{ url: "/icon-512.png", width: 512, height: 512, alt: "bible365" }],
  },
  twitter: {
    card: "summary",
    title: "bible365 — Read the Bible Anywhere",
    description: "Free multilingual Bible in 7 languages. No ads. No login. 24/7.",
    images: ["/icon-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark');var s=localStorage.getItem('fontSize');if(s)document.documentElement.style.setProperty('--reader-font-size',s+'px');}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-stone-100 transition-colors">
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
