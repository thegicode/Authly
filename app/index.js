// import generateNaverAuthUrl from "../auth/naver/naver_generateAuthUrl.js";

// document.querySelector("#naver-login_button").addEventListener("click", () => {
//     //  2. 네이버 로그인 요청 URL 구성
//     generateNaverAuthUrl();
// });

var naverLogin = new naver.LoginWithNaverId({
    clientId: window.env.NAVER_CLIENT_ID, // 네이버 개발자 센터에서 발급받은 Client ID
    callbackUrl: window.env.NAVER_REDIRECT_URI, // 설정한 Redirect URI와 동일하게 설정
    isPopup: false, // 팝업 형태로 로그인을 사용할지 여부
    loginButton: { color: "green", type: 3, height: 45 }, // 로그인 버튼 스타일 지정
});

// 네이버 로그인 초기화
naverLogin.init();

// 로그인 후 처리
naverLogin.getLoginStatus((status) => {
    if (status) {
        // 로그인 성공 시, 사용자 정보 출력
        var userId = naverLogin.user.getId();
        var userName = naverLogin.user.getName();
        alert("로그인 성공: " + userName + "님");
    } else {
        console.log("로그인 실패");
    }
});
