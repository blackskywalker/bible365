# bible365

어디서든 펼치는 성경 · Read the Bible anywhere, anytime.

24시간 365일 누구나 가볍게 접근할 수 있는 다국어 온라인 성경. 동남아 전도 사역을 위해 만들어졌습니다.

## 언어 / Languages

| Code | Translation | License |
|------|-------------|---------|
| `ko` | 개역한글판 (1961) | Public Domain |
| `en` | American Standard Version (1901) | Public Domain |
| `vi` | Kinh Thánh Tiếng Việt 1934 | Public Domain |
| `th` | Thai KJV | Free distribution |

## 라우트

- `/` → `/ko` 리다이렉트
- `/[lang]` — 책 목록 + 오늘의 말씀
- `/[lang]/[book]/[chapter]` — 본문 (예: `/ko/jhn/3`)
- `/[lang]/[book]/[chapter]#v[verse]` — 구절 영구 링크 (예: `/ko/jhn/3#v16`)

책 코드는 OSIS 3자(`gen`, `jhn`, `rev` …).

## 데이터

원본은 [scrollmapper/bible_databases](https://github.com/scrollmapper/bible_databases)에서 받습니다. `data/raw/`는 git 제외, `data/processed/{lang}/{book}/{chapter}.json` (4 × 1189 = 4756개)만 커밋합니다.

원본 재생성:

```bash
npm run fetch:bibles   # raw JSON 다운로드
npm run normalize       # processed JSON 생성
```

## 개발

```bash
npm install
npm run dev   # http://localhost:3000
```

## 배포

Vercel에 import 후 그대로 배포. 추가 환경 변수 필요 없음.
