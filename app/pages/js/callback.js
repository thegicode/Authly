import getAccessToken from "../../scripts/auth/naver/naver_accesToken.js";
import getUserInfo from "../../scripts/auth/naver/naver_getUser.js";

// URL에서 code와 state를 추출하는 함수
function getCodeAndStateFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        code: urlParams.get("code"),
        state: urlParams.get("state"),
    };
}

// document.addEventListener("DOMContentLoaded", async () => {
// 3. 네이버에서 인증 코드 받기
const { code, state } = getCodeAndStateFromUrl();
console.log("Code:", code);
console.log("State:", state);

// 4. 인증 코드로 Access Token 발급
const accessToken = await getAccessToken(code, state);
console.log("accessToken", accessToken);

// 5. 사용자 정보 요청
const userInfo = await getUserInfo(accessToken);
console.log("userInfo", userInfo);

// 6. 사용자 정보로 회원 가입/로그인 처리
// 네이버에서 가져온 사용자 정보를 바탕으로 세션을 생성하고, 기존 회원이 아니라면 회원 가입 절차를 진행합니다.
// });

// var naverLogin = new naver.LoginWithNaverId({
//     clientId: localStorage.getItem("NAVER_CLIENT_ID"), // 로컬 스토리지에서 Client ID 불러오기
//     callbackUrl: localStorage.getItem("NAVER_REDIRECT_URI"),
// });

// naverLogin.init();

// naverLogin.getLoginStatus((status) => {
//     if (status) {
//         var userId = naverLogin.user.getId();
//         var userName = naverLogin.user.getName();
//         document.body.innerHTML = "<h3>" + userName + "님, 로그인 성공!</h3>";
//     } else {
//         console.log("로그인 실패");
//     }
// });
