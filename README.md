# authly

## 실행

-   네이버
    https://thegicode.github.io/authly/app/pages/html/index.html

<br>

## 참고 자료

### 네이버

-   [네이버 개발자 센터 / 애플리케이션 등록](https://developers.naver.com/apps/#/register)

-   서비스 URL : https://thegicode.github.io/authly/app
-   callback URL : https://thegicode.github.io/authly/callback

<br>
## 프로젝트 구조

```
project-root/
├── app.js # Express 서버 엔트리 파일
├── public/ # HTML 파일과 정적 파일을 포함하는 폴더
│ ├── index.html # 클라이언트에서 사용할 HTML 파일
│ └── js/ # JavaScript 파일을 포함하는 폴더
│ └── main.js # HTML 파일용 JavaScript 파일
├── routes/
│ └── auth.js # 네이버 토큰 요청 라우트 파일
└── services/
└── naverAuth.js # 네이버 API 요청 로직 파일
```
