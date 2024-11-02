import generateNaverAuthUrl from "../../scripts/auth/naver/naver_generateAuthUrl.js";

document.querySelector("#naver-login_button").addEventListener("click", () => {
    //  2. 네이버 로그인 요청 URL 구성
    generateNaverAuthUrl();
});

// var naverLogin = new naver.LoginWithNaverId({
//     clientId: localStorage.getItem("NAVER_CLIENT_ID"), // 로컬 스토리지에서 Client ID 불러오기
//     callbackUrl: localStorage.getItem("NAVER_REDIRECT_URI"),
//     isPopup: false, // 팝업 형태로 로그인을 사용할지 여부
//     loginButton: { color: "green", type: 3, height: 45 }, // 로그인 버튼 스타일 지정
// });

// // 네이버 로그인 초기화
// naverLogin.init();

// // 로그인 후 처리
// naverLogin.getLoginStatus((status) => {
//     if (status) {
//         // 로그인 성공 시, 사용자 정보 출력
//         var userId = naverLogin.user.getId();
//         var userName = naverLogin.user.getName();
//         alert("로그인 성공: " + userName + "님");
//     } else {
//         console.log("로그인 실패");
//     }
// });
