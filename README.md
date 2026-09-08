# BLACK COMBAT Fan Service

블랙컴뱃 격투기 팬들을 위한 경기 정보 및 선수 정보 서비스입니다.  
경기 일정, 대진 정보, 선수 프로필과 전적 등을 한곳에서 쉽고 빠르게 확인할 수 있도록 제작하는 Full-stack 프로젝트입니다.

## 1. 프로젝트 개요

### 프로젝트 목적

블랙컴뱃과 관련된 경기 및 선수 정보가 여러 곳에 흩어져 있어 원하는 정보를 찾기 불편한 문제를 해결하는 것을 목표로 합니다.

MVP에서는 다음 핵심 기능에 집중합니다.

- 경기 정보 조회
- 선수 목록 조회
- 선수 상세 정보 조회
- 관심 선수 찜하기
- 회원가입 및 로그인

## 2. 기술 스택

이번 프로젝트에서 사용할 기술 스택은 다음과 같습니다.

- **Next.js**: 프론트엔드 및 서버 기능 구현
- **MongoDB**: 데이터베이스
- **Mongoose**: MongoDB 데이터 모델 및 Schema 관리
- **JavaScript**: 개발 언어
- **Next.js API Route / Route Handler**: Backend API 구현

Next.js 하나의 프로젝트 안에서 화면(UI), API, 데이터베이스 연결을 함께 구성하여 Full-stack 서비스를 구현합니다.

## 3. 프로젝트 파일 구조

```text
black-combat/
├── app/
│   ├── api/
│   │   ├── fighters/
│   │   │   ├── route.js
│   │   │   └── [id]/
│   │   │       └── route.js
│   │   ├── matches/
│   │   │   ├── route.js
│   │   │   └── [id]/
│   │   │       └── route.js
│   │   └── users/
│   │       ├── signup/
│   │       │   └── route.js
│   │       └── login/
│   │           └── route.js
│   │
│   ├── fighters/
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   │
│   ├── matches/
│   │   ├── page.js
│   │   └── [id]/
│   │       └── page.js
│   │
│   ├── login/
│   │   └── page.js
│   ├── signup/
│   │   └── page.js
│   ├── layout.js
│   ├── page.js
│   └── globals.css
│
├── components/
│   ├── FighterCard.js
│   ├── MatchCard.js
│   ├── Header.js
│   └── Button.js
│
├── lib/
│   └── mongodb.js
│
├── models/
│   ├── User.js
│   ├── Fighter.js
│   ├── Match.js
│   └── News.js
│
├── public/
│   └── images/
│
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

## 4. 주요 폴더 및 파일 역할

### `app/`

Next.js의 App Router를 사용하는 핵심 폴더입니다.

- `page.js`: 화면 페이지
- `layout.js`: 전체 페이지 공통 레이아웃
- `globals.css`: 전역 CSS
- `api/`: 서버 API Route Handler

### `components/`

여러 화면에서 반복해서 사용하는 UI 컴포넌트를 관리합니다.

예:

- 선수 카드
- 경기 카드
- 헤더
- 버튼

### `models/`

MongoDB에서 사용할 Mongoose Schema와 Model을 관리합니다.

예:

- `User.js`
- `Fighter.js`
- `Match.js`
- `News.js`

### `lib/`

MongoDB 연결과 같이 여러 곳에서 공통으로 사용하는 기능을 관리합니다.

- `mongodb.js`: MongoDB 연결 처리

### `public/`

선수 이미지, 로고 등 정적인 파일을 저장합니다.

## 5. MongoDB Collection

MVP에서 사용할 주요 Collection은 다음과 같습니다.

### User

회원가입 및 로그인에 필요한 사용자 정보를 저장합니다.

예상 Field:

```text
email
password
name
favoriteFighters
createdAt
updatedAt
```

### Fighter

블랙컴뱃 선수 정보를 저장합니다.

예상 Field:

```text
name
weightClass
team
record
profileImage
createdAt
updatedAt
```

### Match

경기 일정과 대진 정보를 저장합니다.

예상 Field:

```text
title
date
location
fighterIds
result
createdAt
updatedAt
```

`fighterIds`는 Fighter의 ID를 Reference하는 방식으로 구성합니다.

### News

블랙컴뱃 관련 최신 뉴스 정보를 저장합니다.

예상 Field:

```text
title
content
thumbnail
publishedAt
createdAt
updatedAt
```

## 6. 설치해야 할 패키지

### Next.js 프로젝트 생성

```bash
npx create-next-app@latest black-combat
cd black-combat
```

프로젝트 생성 과정에서는 다음과 같이 설정합니다.

```text
TypeScript? No
ESLint? Yes
Tailwind CSS? No
src/ directory? No
App Router? Yes
Turbopack? Yes
Import alias? 기본값
```

### MongoDB 관련 패키지

```bash
npm install mongoose
```

### 필요한 패키지 전체

```bash
npm install mongoose
```

이번 프로젝트는 Next.js가 프론트엔드와 서버 API 역할을 함께 담당하므로 별도의 Express 설치가 필요하지 않습니다.

## 7. 패키지별 사용 목적

| 패키지 | 사용 목적 |
|---|---|
| next | Next.js 프레임워크 |
| react | 화면 UI 구성 |
| react-dom | React 화면 렌더링 |
| mongoose | MongoDB 연결 및 Schema 관리 |

Next.js 프로젝트를 생성하면 `next`, `react`, `react-dom`은 기본적으로 설치됩니다.

## 8. package.json 예시

```json
{
  "name": "black-combat",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "mongoose": "^8.0.0",
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "eslint": "^9.0.0",
    "eslint-config-next": "latest"
  }
}
```

실제 설치 시에는 `npm install`을 통해 현재 호환되는 버전이 설치되도록 합니다.

## 9. 환경변수 설정

프로젝트 루트에 `.env.local` 파일을 생성합니다.

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blackcombat
```

MongoDB 연결 문자열은 실제 MongoDB Atlas에서 발급받은 값을 사용합니다.

`.env.local`에는 비밀번호 등의 중요한 정보가 포함될 수 있으므로 GitHub에 업로드하지 않습니다.

`.gitignore`에는 다음 항목이 포함되어야 합니다.

```text
node_modules/
.next/
.env*
```

## 10. MongoDB 연결 구조

Next.js의 서버 측 코드에서 Mongoose를 이용하여 MongoDB에 연결합니다.

```text
Next.js
   ↓
Route Handler
   ↓
Mongoose Model
   ↓
MongoDB
```

예를 들어 선수 상세 정보를 조회하면 다음과 같은 흐름으로 동작합니다.

```text
FighterDetail 화면
      ↓
GET /api/fighters/:id
      ↓
Next.js Route Handler
      ↓
Fighter Model
      ↓
MongoDB Fighter Collection
      ↓
JSON Response
      ↓
화면에 선수 정보 표시
```

## 11. 주요 API

### Fighter

```text
GET    /api/fighters
GET    /api/fighters/:id
POST   /api/fighters
PATCH  /api/fighters/:id
DELETE /api/fighters/:id
```

### Match

```text
GET    /api/matches
GET    /api/matches/:id
POST   /api/matches
PATCH  /api/matches/:id
DELETE /api/matches/:id
```

### User

```text
POST   /api/users/signup
POST   /api/users/login
PATCH  /api/users/profile
DELETE /api/users/me
```

### Favorite Fighter

```text
POST   /api/fighters/:id/likes
DELETE /api/fighters/:id/likes
```

## 12. API와 화면 연결

### 선수 목록

```text
FighterList
    ↓
GET /api/fighters
    ↓
MongoDB
    ↓
선수 데이터 Response
    ↓
FighterCard 목록 렌더링
```

### 선수 상세

```text
FighterDetail
    ↓
GET /api/fighters/:id
    ↓
MongoDB
    ↓
선수 상세 정보 Response
    ↓
프로필 / 체급 / 소속 / 전적 표시
```

### 선수 찜하기

```text
FighterDetail
    ↓
찜하기 버튼 클릭
    ↓
POST /api/fighters/:id/likes
    ↓
로그인 여부 확인
    ↓
User / Fighter 확인
    ↓
MongoDB 데이터 수정
    ↓
성공 Response
    ↓
UI의 찜 상태 변경
```

## 13. 실행 방법

패키지 설치:

```bash
npm install
```

개발 서버 실행:

```bash
npm run dev
```

실행 후 브라우저에서 다음 주소로 접속합니다.

```text
http://localhost:3000
```

## 14. MVP 개발 우선순위

### 1단계 - 개발 환경

- Next.js 프로젝트 생성
- MongoDB Atlas 데이터베이스 생성
- Mongoose 설치
- MongoDB 연결
- 기본 폴더 구조 생성

### 2단계 - Database

- Fighter Schema 작성
- Match Schema 작성
- User Schema 작성
- News Schema 작성
- Collection 관계 확인

### 3단계 - API

- 선수 목록 조회 API
- 선수 상세 조회 API
- 경기 목록 조회 API
- 경기 상세 조회 API

### 4단계 - 화면

- 메인 화면
- 선수 목록 화면
- 선수 상세 화면
- 경기 목록 화면
- 경기 상세 화면

### 5단계 - 사용자 기능

- 회원가입
- 로그인
- 인증 처리
- 관심 선수 찜하기

### 6단계 - 테스트 및 수정

- API 정상 동작 확인
- Validation 확인
- 에러 처리
- 화면과 API 연결 확인
- MongoDB 데이터 저장 및 조회 확인

## 15. 테스트할 주요 상황

### 정상 상황

- 선수 목록이 정상적으로 표시되는가?
- 특정 선수의 상세 정보가 표시되는가?
- 경기 정보가 정상적으로 표시되는가?
- 로그인한 사용자가 선수를 찜할 수 있는가?

### 실패 상황

- 존재하지 않는 선수 ID를 요청하면 `404 Not Found`가 반환되는가?
- 잘못된 ID 형식이면 `400 Bad Request`가 반환되는가?
- 로그인하지 않은 사용자가 찜하기를 요청하면 `401 Unauthorized`가 반환되는가?
- MongoDB 연결 오류가 발생하면 서버가 적절하게 처리하는가?

### 경계 상황

- 이미 찜한 선수를 다시 찜하는 경우
- 존재하지 않는 경기 상세 페이지에 접근하는 경우
- 필수 데이터가 누락된 요청을 보내는 경우

## 16. 개발 시 주의사항

- Client에서 입력값을 검증하더라도 Server에서 반드시 다시 검증합니다.
- MongoDB 연결 정보는 `.env.local`에서 관리합니다.
- `.env.local`은 GitHub에 업로드하지 않습니다.
- 여러 화면에서 공유되는 선수 정보는 MongoDB Reference 구조를 고려합니다.
- API Response의 Field와 Mongoose Schema의 Field가 일치하는지 확인합니다.
- MVP에서는 경기 정보와 선수 정보 조회 기능을 우선 구현합니다.

## 17. 프로젝트 목표

이번 프로젝트의 MVP 목표는 모든 기능을 한 번에 구현하는 것이 아니라, **블랙컴뱃 팬이 경기와 선수 정보를 빠르고 편리하게 확인할 수 있는 핵심 경험을 Next.js와 MongoDB를 이용해 Full-stack 서비스로 구현하는 것**입니다.

MVP가 완성된 이후에는 다음 기능을 추가할 수 있습니다.

- 선수 검색 및 체급별 필터
- 경기 결과 및 상세 전적
- 랭킹
- 커뮤니티
- 최신 뉴스
- 티켓 및 이벤트
- 관심 선수 알림
