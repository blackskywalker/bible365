const CACHE_NAME = "bible365-v1";

// 캐시할 핵심 경로
const CORE_URLS = [
  "/ko",
  "/en",
  "/vi",
  "/th",
  "/zh",
  "/support",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  // GET 요청만 캐시
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        // 성경 챕터 페이지는 캐시에 저장
        if (
          response.ok &&
          event.request.url.includes(self.location.origin)
        ) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // 오프라인 시 캐시된 홈 반환
        return caches.match("/ko");
      });
    })
  );
});
