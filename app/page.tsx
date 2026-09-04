import { redirect } from "next/navigation";

// 미들웨어가 Accept-Language로 감지 후 리다이렉트.
// 미들웨어를 통하지 않은 직접 접근 대비 fallback.
export default function Home() {
  redirect("/en");
}
