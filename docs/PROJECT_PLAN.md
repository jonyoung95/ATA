# AqaraHome 한국어 번역 품질 관리 프로젝트 기획서

> 문서 상태: 초안 (Draft v0.1.1)
> 작성일: 2026-07-08 (최종 수정: 2026-07-08)
> 소유자(Owner): 동료 (ATA Project Owner)
> 대상 논의: 동료 리뷰 후 v0.2로 확정

---

## 0. 이 문서의 목적

본 문서는 AqaraHome 앱의 한국어 번역 오류를 탐지·수정·통보하는 워크플로우를 자동화하기 위한 **3단계 로드맵**, **기술 프레임**, **추가 기능 후보**, **미결 이슈**를 정리한 것이다.

본 프로젝트는 동료가 소유·주도하는 프로젝트이며, 본인은 기술 지원 및 데이터 파이프라인 구축을 담당한다. 따라서 본 문서는 **동료와의 협의 · 의사결정을 위한 논의 자료**로 사용된다.

동료가 이미 설계한 **ATA(Knowledge-driven Translation Workspace, F001~F011)** 스펙과의 정합성이 본 프로젝트의 핵심 설계 원칙이다.

---

## 1. 배경 및 문제 정의

### 1.1 현재 문제
- AqaraHome 앱 내 한국어 번역 중 오류·부자연스러운 표현·용어 불일치가 존재
- 오류 발견 시 Lumi(绿米/루미) 오픈 플랫폼의 번역 관리 웹사이트에서 수동으로 수정
- 수정 후 Lumi 담당자에게 어떤 제품·페이지·항목이 수정되었는지 개별 통보
- 이 과정 전체가 **수동·반복적·추적 어려움**

### 1.2 규모
- Lumi 사이트 기준 대략적 규모
  - APP 카테고리 약 **833 페이지**
  - SERVER 카테고리 약 **1,400 페이지**
  - 페이지당 항목 수는 **미확인 (추후 확인 필요)**

### 1.3 목표 (성공 지표)
- 반복 수동 작업 시간 감축
- 번역 용어의 일관성·정확성 확보
- 수정 이력의 추적성 확보
- 향후 ATA 프로젝트에 그대로 인계 가능한 데이터 자산 축적

---

## 2. 이해관계자 및 역할

| Role | Owner | 담당 |
| --- | --- | --- |
| Project Owner | 동료 | 스펙 확정, 방향성 결정, ATA와의 통합 |
| Technical Support | Doo | 스크래핑·용어집·자동화 도구 구현 |
| Lumi 담당자 | Lumi 측 | 수정 요청 수신, API·권한 문의 대응 |
| End User | 사내 QA/CS | 최종 검수, 사용자 리포트 기반 오류 제보 |

---

## 3. ATA 프로젝트와의 관계

동료의 ATA 스펙 (`Functional Specifications/F001~F011`)과 본 프로젝트는 다음과 같이 정합된다.

| 본 프로젝트 개념 | ATA 스펙 대응 | 정합 방식 |
| --- | --- | --- |
| 전문 용어 사전 (Glossary) | F003 Assets (Terminology, UI Translation category) | schema · category 명칭 동일 사용 |
| APP / SERVER 카테고리 | F005 Mode System (App / Email / Manual Mode) | Lumi "APP" → App Mode. "SERVER"는 매핑 규칙 별도 확정 |
| 수정 이력·관리 시스템 | F004 Workspace History + F009 Review Workflow | ATA V0.1 도입 시 인계 전제. 자체 구현 최소화 |
| 앱 스캔 (스크린샷 기반 오류 탐지) | F007 OCR | ATA OCR 기능과 동일 파이프라인 활용 가능 |
| Lumi 스크래핑 데이터 | Assets 시드 데이터 | JSON export → ATA Assets import 인터페이스 설계 |

**핵심 결정:** 본 프로젝트를 ATA의 **데이터 파이프라인 · 시드 데이터 공급자**로 포지셔닝한다. 별개의 관리 UI를 만들지 않는다.

---

## 3-A. 기존 자산 · 재사용 가능 도구

본 프로젝트 착수 이전에 이미 확보된 자산. 신규 개발 범위를 축소하고 정확도를 높이는 결정적 요소.

### 3-A.1 사내 자체 개발 · Android 앱 크롤링 도구

- **소유:** 본 프로젝트 기술 지원(Doo)이 별도로 이미 개발 완료
- **동작 방식:** PC를 Android 폰에 직접 연결 → AqaraHome 앱을 실제 실행 → 화면 순회 데이터 수집
- **수집 항목:**
  - 실제 앱에 **표시되는 문자열 텍스트**(OCR이 아닌 직접 추출, 정확도 매우 높음)
  - 화면 **스크린샷**
- **출력 포맷:** 이미 구조화된 JSON / CSV
- **본 프로젝트에서의 역할:** Phase 3 오류 탐지와 6.1 회귀 스캔의 **주요 입력 소스**

### 3-A.2 3-way Diff 워크플로우 (본 도구 덕분에 가능)

본 도구가 있음으로써 다음 세 가지 데이터를 정확히 대조할 수 있다.

| 소스 | 의미 |
| --- | --- |
| A. 실제 앱 표시 한국어 | 사용자가 실제로 보는 값 (본 도구가 수집) |
| B. Lumi 사이트 등록 한국어 | 번역 관리 플랫폼상 등록된 값 (Phase 1 스크래핑) |
| C. Glossary 확정 한국어 | 사내가 확정한 이상적 값 (Phase 2 사전) |

Diff 결과 해석:
- **A ≠ B**: 앱이 아직 최신 Lumi 값을 반영하지 않았거나, 앱에 하드코딩된 문자열이 존재
- **B ≠ C**: Lumi 사이트에 등록된 값이 사내 확정 용어와 불일치 → **수정 대상 (핵심 오류 후보)**
- **A ≠ C**: 최종 사용자 관점의 오류
- **B에만 존재**: 등록되었으나 앱에서 사용되지 않는 dead translation
- **A에만 존재**: 앱 하드코딩 또는 Lumi 미등록 (개발팀 확인 필요)

### 3-A.3 ATA F007 OCR과의 관계

- F007 OCR은 본 도구가 커버하지 못하는 예외 케이스(예: 이미지 안의 문자, 캡처 실패 화면)에 **보조 수단**으로 배치
- 기본 파이프라인은 본 도구를 우선 사용

---

## 4. 3단계 로드맵

### 4.1 Phase 1 — Lumi 번역 데이터 스크래핑 도구

**목표:** Lumi 웹사이트의 APP · SERVER 카테고리 전체 번역 데이터를 구조화된 JSON으로 추출.

**범위:**
- Lumi 사이트 로그인 (반자동: 사람이 직접 로그인 → 스크립트가 세션 이어받기)
- 페이지네이션 자동 처리 (다음 페이지 클릭 → 데이터 추출 반복)
- APP 카테고리 · SERVER 카테고리 각각 수집
- 페이지 단위 · 항목 단위 파싱
- 결과를 로컬 JSON으로 저장
- 재시도 · 중단점 재개 (idempotent 실행)
- 나중에 Google Sheet 연동 검토 (읽기·리뷰 편의성)

**비범위 (Non-goal):**
- Lumi 사이트로 자동 로그인
- 자동 CAPTCHA 우회
- 고빈도 병렬 요청
- 즉시 편집(왕복 쓰기)은 별도 단계로 분리

**리스크:**
- Lumi 측 자동화 허가 여부 미확인 → **최우선 확인 필요**
- 페이지 렌더링 방식(SSR vs SPA) 미확인
- 페이지당 항목 수 · 총 데이터 볼륨 미확인

**기술 후보:**
- Python 3.11+
- Playwright (JS 렌더링·세션 이어받기·안정성 우수)
- 대안: Selenium (레거시), Puppeteer(Node), Scrapy(SSR 전용)

**산출물:**
- `scraper/` CLI 도구
- `data/lumi_scrape/<yyyy-mm-dd>/app.json`, `server.json`
- 실행 로그, 진행률 리포트

---

### 4.2 Phase 2 — 전문 용어 사전 (Glossary) + AI-agnostic Skill 계층

**목표:** 중국어 → 한국어 번역 시 용어 일관성·정확성을 확보할 수 있는 사전(Glossary)을 구축하고, 이를 어떤 AI 모델에서도 재사용할 수 있도록 설계.

**설계 원칙: AI 모델 독립성 (Vendor-Neutral)**

사용자가 Claude 뿐 아니라 향후 Gemini · ChatGPT · 기타 LLM 사용 가능성을 명시적으로 요구했다. 따라서 다음 계층 구조를 채택한다.

```
+---------------------------------------------------+
|  L3. Model Adapter (교체 가능한 얇은 wrapper)      |
|      - Claude Skill (.claude/skills/...)          |
|      - Gemini Extension / System Instruction      |
|      - ChatGPT Custom GPT / OpenAI Assistant      |
|      - 어떤 CLI / API 클라이언트도 동일 규칙       |
+---------------------------------------------------+
|  L2. Retrieval / Lookup Layer                     |
|      - 순수 CLI + HTTP API                        |
|      - 입력: 중국어 원문                          |
|      - 출력: 관련 용어 · 권장 번역 · 컨텍스트     |
|      - 옵션: keyword search / semantic search     |
+---------------------------------------------------+
|  L1. Source of Truth (JSON, Vendor-Neutral)       |
|      - glossary.json (또는 분할된 여러 파일)      |
|      - ATA F003 Assets schema와 호환              |
|      - 규모 확대 시 SQLite → MongoDB 마이그레이션 |
+---------------------------------------------------+
```

**핵심 결정:**
- **L1(JSON)이 유일한 진실의 원천(Single Source of Truth).**
- Claude Skill · Gemini · ChatGPT는 모두 L1을 읽는 얇은 wrapper.
- Skill 전용 포맷에 데이터를 직접 넣지 않음.
- 어떤 모델을 쓰든 L2 Lookup Layer를 호출하도록 통일.

**Glossary JSON Schema (v0.1 초안, ATA F003과 정합):**

```json
{
  "id": "uuid-v4",
  "source_url": "https://<lumi>/...",
  "lumi_page_id": "string",
  "lumi_item_id": "string",

  "category": "UI Translation | Terminology | Product Description | Email | Manual | FAQ | Notes",
  "mode": "App | Email | Manual",

  "product_model": "string (Lumi 사이트 모델명)",
  "product_confirmed_model": "string (사내 확인 모델명)",
  "product_name_ko": "string",

  "key": "string (번역 key, 예: settings.title.wifi)",
  "context": "string (사용 위치·화면 설명)",

  "zh_source": "string (중국어 원문)",
  "ko_original": "string (Lumi 사이트에 원래 등록된 한국어)",
  "ko_current": "string (현재 확정된 한국어)",

  "ko_history": [
    {
      "value": "string",
      "changed_at": "ISO8601",
      "changed_by": "string",
      "reason": "string"
    }
  ],

  "status": "draft | reviewed | synced_to_lumi | notified",
  "human_reviewed": true,
  "reviewer": "string",
  "reviewed_at": "ISO8601",

  "notified_at": "ISO8601 (Lumi 담당자 통보 시각)",
  "notification_reference": "string (이메일/티켓 ID)",

  "tags": ["array of string"],
  "notes": "string (자유 메모)"
}
```

**필드 결정 근거:**
- `category`, `mode`: F003 · F005 스펙 명칭 그대로 사용 → ATA 직접 import 가능
- `source_url`, `lumi_page_id`, `lumi_item_id`: 왕복 편집 (수정 후 Lumi 사이트 재방문·확인) 지원
- `product_model` / `product_confirmed_model`: 사용자 원안 유지 (Lumi 표기와 사내 표기 불일치 가능성)
- `ko_history`: 수정 이력 배열 (F004 Workspace History 호환)
- `status`: 워크플로우 상태 머신 (F009 Review Workflow 호환)
- `human_reviewed`: 사용자 원안 유지 (사람 검수 여부 boolean)

**Claude Skill 구조 (예시):**

```
.claude/skills/aqara-translation-glossary/
  SKILL.md              # skill 설명 · 트리거 조건
  scripts/
    lookup.py           # L2 API 호출 (또는 로컬 JSON 직접 조회)
  data/
    glossary.json       # symlink or reference to L1
```

**타 모델 재사용 방법:**
- **Gemini:** System Instruction에 L2 API 사용 지침 삽입 + Function Calling으로 lookup 노출
- **ChatGPT / GPT-4o:** Custom GPT의 Actions 기능으로 L2 HTTP API 등록
- **CLI 도구:** `aqara-glossary lookup "小米智能门锁"` 형태로 어디서든 사용

**산출물:**
- `glossary/glossary.json`
- `glossary/schema.json` (JSON Schema validation)
- `glossary/lookup_cli/` (L2 구현)
- `.claude/skills/aqara-translation-glossary/`

---

### 4.3 Phase 3 — 번역 수정 관리 · 리포트 · 통합 자동화

**목표:** 오류 탐지 → 수정 → Lumi 통보 → 검증 → 이력 보존의 end-to-end 워크플로우 자동화.

**주의:** ATA F004 Workspace History · F009 Review Workflow와 상당 부분 중복된다. 본 프로젝트에서는 **자체 UI는 만들지 않고** 다음만 구현한다.

**범위 (자체 구현):**
1. **수정 이력 관리** — Phase 2 JSON의 `ko_history` · `status` 필드 활용, CLI로 조회
2. **자동 리포트 생성** — 기간별 수정 리포트 (Markdown / HTML / PDF)
3. **Lumi 담당자 통보 템플릿** — 어떤 제품 · 페이지 · 항목이 수정되었는지 표준 양식
4. **디바이스 단위 재스캔** — 특정 제품에 대한 재스캔 · 반영 확인
5. **앱 스캔 결과 자동 매칭** — 앱 크롤링툴에서 추출한 텍스트를 Glossary와 매칭 → 오류 후보 자동 표시
6. **시스템 수정 자동 검수** — 자동 수정한 항목에 대한 검증 파이프라인

**비범위 (ATA에 인계):**
- 인간 검수 UI
- 팀 협업 · 권한 관리
- Assets 승인 워크플로우

**산출물:**
- `report/` 리포트 생성 도구
- `notify/` Lumi 통보 템플릿 · 발송 스크립트
- `scan/` 앱 스크린샷 OCR 매칭 도구

---

## 5. 기술 스택 · 프레임

### 5.1 언어 · 런타임
- **Python 3.11+** (스크래핑 · 데이터 처리 · CLI 도구)
- **Node.js 20+** (필요 시 웹 UI · Google Sheet 연동)

### 5.2 주요 라이브러리
- Playwright (스크래핑)
- Pydantic (schema validation)
- Typer / Click (CLI)
- FastAPI (L2 Lookup HTTP API, 필요 시)
- SQLite → MongoDB (규모 확대 시 마이그레이션)

### 5.3 저장소 · 배포
- Git repository (본 디렉토리 그대로 사용)
- 데이터 파일은 대용량화 대비 Git LFS 또는 별도 스토리지 검토
- Google Sheet 연동은 gspread + Service Account

### 5.4 AI 모델 계층 (재확인)
- L1 데이터는 vendor-neutral JSON
- L2 Lookup은 CLI · HTTP API (모델 무관)
- L3 어댑터는 모델별로 얇게 (Claude Skill / Gemini / ChatGPT)

### 5.5 개발 도구
- VSCode + Claude 확장 (초기 편집)
- Git commit hook으로 JSON schema validation
- pre-commit + ruff + mypy (Python 품질)

---

## 6. 추가 기능 · 아이디어 (동료 논의용)

본 절은 사용자 원안에는 없었으나 실효성이 있다고 판단되는 추가 후보들이다. 동료 리뷰 시 채택 여부를 결정한다.

### 6.1 앱 릴리스 회귀 스캔 (Regression Scan)
- AqaraHome 앱 새 버전 릴리스마다 **3-A.1 Android 크롤링 도구**로 자동 스캔
- 이전 스캔과 diff → 새로 등장한 오류·의도치 않은 변경 탐지
- OCR은 보조 수단(3-A.3 참고). 기본은 텍스트 직접 추출로 100% 정확도 확보
- 3-way diff(A/B/C, 3-A.2)를 리포트 항목으로 자동 포함

### 6.2 QA 샘플링
- 전체 데이터 중 무작위 N% 추출하여 사람 검수
- 자동 수정 정확도 지표(precision · recall) 산출
- 자동화 신뢰도 측정

### 6.3 용어 폐기(Deprecation) 워크플로우
- 오래된 · 잘못된 용어를 즉시 삭제하지 않고 `deprecated` 상태로 표시
- Deprecated 용어 사용 시 경고
- 일정 기간 후 archive

### 6.4 알림 · 통보 채널 다양화
- 이메일 뿐 아니라 Slack / Teams / 사내 티켓 시스템 연동
- 표준 통보 템플릿 · 다국어 지원

### 6.5 사용자 리포트 수집
- 사용자로부터 접수된 번역 오류 제보를 시스템 입력으로 연결
- 자동으로 Glossary 조회 · 수정 제안

### 6.6 자동 diff 리포트
- Lumi 사이트 수정 전 · 후 대조 스크린샷 자동 생성
- 통보 시 첨부

### 6.7 신뢰도 스코어 (F001 V2 Future 참고)
- 자동 번역 추천마다 신뢰도(confidence) 노출
- 검수 우선순위 결정에 활용

### 6.8 Lumi 사이트 왕복 편집 (Write-back)
- 스크래핑에 그치지 않고 수정된 한국어를 Lumi 사이트에 자동 반영
- **높은 리스크** (자동화 허가 · 오작동 시 파급) → v0.2 이후 별도 논의

### 6.9 백업 · 스냅샷
- Lumi 사이트 상태를 주기적으로 스냅샷 → 변경 이력 자체 추적
- Lumi 측에서 예고 없이 변경한 항목 탐지

---

## 7. 리스크 · 미결 이슈 (Open Questions)

동료 · Lumi 담당자와 논의해 해결해야 하는 항목.

| # | 항목 | 담당 | 우선순위 |
| --- | --- | --- | --- |
| Q1 | Lumi 사이트 자동화(스크래핑) 허가 여부 | Lumi 담당자 문의 | **최우선** |
| Q2 | Lumi 측 공식 API · 데이터 export 기능 존재 여부 | Lumi 담당자 문의 | **최우선** |
| Q3 | 페이지당 항목 수 · 총 데이터 볼륨 | 본인 확인 (샘플 페이지 관찰) | 높음 |
| Q4 | 페이지 렌더링 방식(SSR / SPA / 하이브리드) | 본인 확인 | 높음 |
| Q5 | SERVER 카테고리를 ATA Mode 중 어디에 매핑할지 | 실제 데이터 샘플 확인 후 결정 | 높음 |
| Q6 | ATA V0.1 도입 시점 · 인계 인터페이스 형태 | 동료 협의 | 중간 |
| Q7 | Lumi 담당자에게 어떤 채널로 통보하는가 (이메일 / 티켓 / 기타) | 현행 방식 확인 | 중간 |
| Q8 | 데이터 저장 위치 · 접근 권한 (사내 서버 / 개인 로컬 / 클라우드) | 사내 정책 확인 | 중간 |
| Q9 | 검수 인력 · SLA (누가 얼마나 자주 검수하는가) | 동료 · QA 팀 협의 | 중간 |
| Q10 | 수집한 데이터 보관 기간 · 개인정보 여부 | 컴플라이언스 확인 | 낮음 |
| Q11 | 3-A.1 Android 크롤링 도구의 정식 이름 · 출력 JSON schema · 화면 순회 범위 | 본인 문서화 | 높음 |
| Q12 | 3-A.1 도구 출력 스키마와 Phase 2 Glossary 스키마 간 매핑 정의 | 본인 설계 | 높음 |

---

## 8. 언어 · 문서화 정책

- 모든 산출물(코드 주석 · 문서 · 커밋 메시지 · 로그): **한국어**
- 코드 식별자(변수 · 함수 · 파일명): 영문 관례 유지
- 기술 용어(API · JSON · SPA 등): 영문 원문 그대로 사용

---

## 9. 다음 단계 (Immediate Next Steps)

1. **동료 리뷰 요청** — 본 문서 v0.1을 공유하고 방향성 · 스코프 합의
2. **Lumi 담당자 문의** — Q1(자동화 허가) · Q2(공식 API) 확인
3. **Lumi 사이트 관찰** — 로그인 · 페이지 구조 · 렌더링 방식 · 페이지당 항목 수 확인 (스크린샷 확보)
4. **PoC 범위 확정** — 1~2개 제품 · 5~10 페이지로 축소한 PoC 정의
5. **Glossary Schema v0.2** — Q5(SERVER 매핑) · 동료 피드백 반영
6. **디렉토리 구조 · 리포지토리 초기화** — 위 방향 확정 후 실제 코드 착수

---

## 10. 부록

### 10.1 관련 문서
- `Functional Specifications/F001_Translation_Workspace.md`
- `Functional Specifications/F003_ATA_Assets.md`
- `Functional Specifications/F005_Mode_System.md`
- `Functional Specifications/F006_Translation_Optimization.md`
- `Functional Specifications/F007_OCR.md`
- `Functional Specifications/F009_Review_Workflow.md`

### 10.2 용어 정의
- **ATA** — 동료가 설계한 Knowledge-driven Translation Workspace (F001~F011)
- **Assets** — ATA의 공유 번역 지식 저장소 (F003)
- **Mode** — ATA의 번역 목적별 워크플로우 구분 (F005, App / Email / Manual)
- **Lumi (绿米/루미)** — AqaraHome 배후의 중국 IoT 회사 · 번역 관리 사이트 제공자
- **Glossary** — 본 프로젝트에서 만드는 전문 용어 사전 (Phase 2)
- **PoC** — Proof of Concept, 소규모 검증

### 10.3 문서 버전 이력
- v0.1 (2026-07-08) — 초안 작성. 동료 리뷰 대기.
- v0.1.1 (2026-07-08) — 사용자 자체 개발 Android 크롤링 도구를 3-A절로 정식 반영. 6.1 회귀 스캔을 OCR 기반에서 도구 기반으로 전환. 3-way diff 워크플로우(A/B/C) 명시. Q11·Q12 추가.

---

*문서 끝 · End of Document*
