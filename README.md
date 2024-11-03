# authly

## 터미널

cd /Users/deokim/Documents/코딩/project-my/authly
npm start

<br>

## 설정

1. .env
   SESSION_SECRET=""
   NODE_ENV="development"

<br>

## 로그인하기 실행

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

## 프로젝트 구조

```
project-root/
├── app.js # Express 서버 엔트리 파일
├── public/ # HTML 파일과 정적 파일을 포함하는 폴더
│ ├── html/
│ └── js/ # JavaScript 파일을 포함하는 폴더
├── routes/
│ └── naverAuthRoutes.js # 네이버 토큰 요청 라우트 파일
└── services/
│ └── naverAuthService.js # 네이버 API 요청 로직 파일
├── .env                          # 환경 변수 설정 파일
└── package.json
```
