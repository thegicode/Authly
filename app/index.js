import generateNaverAuthUrl from "../auth/naver/naver_generateAuthUrl";

document.querySelector("#naver-login_button").addEventListener("click", () => {
    //  2. 네이버 로그인 요청 URL 구성
    generateNaverAuthUrl();
});
