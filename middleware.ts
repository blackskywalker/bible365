import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SUPPORTED = ["ko", "en", "vi", "th", "zh", "tl", "es"] as const;

function detectLang(req: NextRequest): string {
  const header = req.headers.get("accept-language") ?? "";
  for (const part of header.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase();
    const code = tag.split("-")[0];
    if ((SUPPORTED as readonly string[]).includes(code)) return code;
  }
  return "en";
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname !== "/") return NextResponse.next();
  const lang = detectLang(req);
  return NextResponse.redirect(new URL(`/${lang}`, req.url));
}

export const config = { matcher: ["/"] };
