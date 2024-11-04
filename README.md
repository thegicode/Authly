# Authly

## 터미널

cd /Users/deokim/Documents/코딩/project-my/authly
npm start

<br>

---

<br>

## 설정

1. .env
    ```
    SESSION_SECRET=""
    NODE_ENV="development"
    ```

<br>

---

<br>

## 로그인

### 네이버

1.  어플리케이션 등록
    [네이버 개발자 센터 / 애플리케이션 등록](https://developers.naver.com/apps/#/register)
    pc웹

    -   서비스 URL : http://localhost:3000/login
    -   네이버 로그인 Callback URL : http://localhost:3000/html/naver-callback.html

2.  .env 설정

    ```
    NAVER_CLIENT_ID=""
    NAVER_CLIENT_SECRET=""
    NAVER_REDIRECT_URI="http://localhost:3000/html/naver-callback.html"

    ```

3.  http://localhost:3000/naver

<br>

---

<br>

## 프로젝트 구조

```
project-root/
├── app.js                           # Express 서버 엔트리 파일
├── src/                             # 서버 코드와 설정 파일을 포함하는 폴더
│   ├── routes/                      # 서버 라우트 파일들을 포함하는 폴더
│   │   └── naverAuthRoutes.js       # 네이버 인증 라우트 파일
│   ├── services/                    # 외부 서비스와의 통신 로직을 포함하는 폴더
│   │   └── naverAuthService.js      # 네이버 API 통신 로직 파일
├── public/                          # 정적 파일을 포함하는 폴더
│   ├── html/                       # HTML 파일을 포함하는 폴더
│   │   ├── login.html               # 로그인 페이지
│   │   └── naver-callback.html      # 네이버 인증 콜백 페이지
│   └── js/                          # JavaScript 파일을 포함하는 폴더
│       ├── modules/                 # 공통 모듈 폴더
│       │   └── naverAuthClient.js   # 네이버 인증 관련 클라이언트 모듈
│       └── pages/                   # 특정 페이지용 JavaScript 파일 폴더
│           ├── login.js             # login.html과 연결된 스크립트
│           └── naverCallback.js     # naver-callback.html과 연결된 스크립트
├── .env                             # 환경 변수 설정 파일
└── package.json                     # 프로젝트 메타 정보와 종속성 관리 파일

```

<br>

---

<br>
