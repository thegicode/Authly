import { requestNaverAccessToken } from "./naverAuthAccessToken.js";
import { requestNaverUserInfo } from "./naverUserInfo.js";

// URL에서 code와 state를 추출하는 함수
function getCodeAndStateFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        code: urlParams.get("code"),
        state: urlParams.get("state"),
    };
}

// 실행 로직: 인증 코드 -> Access Token -> 사용자 정보
const { code, state } = getCodeAndStateFromUrl();
console.log("Code:", code, "State:", state);

const accessToken = await requestNaverAccessToken(code, state);
if (accessToken) {
    console.log("Access Token:", accessToken);

    const userInfo = await requestNaverUserInfo(accessToken);
    console.log("User Info:", userInfo);
}

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
