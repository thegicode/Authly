import {
    getCodeAndStateFromUrl,
    fetchNaverUserInfo,
} from "../modules/naverAuthClient.js";

// URL에서 code와 state 값 추출
const { code, state } = getCodeAndStateFromUrl();
console.log("Code:", code, "State:", state);

if (!code || !state) {
    // code나 state가 없으면 로그인 실패 메시지를 표시하거나 리디렉션 처리
    console.error("Naver login failed: missing code or state.");
    document.body.innerHTML = `<p>로그인에 실패했습니다. 다시 시도해주세요.</p>`;
} else {
    try {
        // 사용자 정보 가져오기
        const userInfo = await fetchNaverUserInfo(code, state);
        if (userInfo) {
            console.log("User Info:", userInfo);
            document.body.innerHTML = `<p><strong>${userInfo.nickname}</strong>님</p><p>로그인에 성공했습니다.</p><p>${userInfo.email}</p>`;
        } else {
            document.body.innerHTML = `<p>로그인에 실패했습니다. 다시 시도해주세요.</p>`;
        }
    } catch (error) {
        console.error("Error fetching user info:", error);
        document.body.innerHTML = `<p>로그인 처리 중 오류가 발생했습니다. 다시 시도해주세요.</p>`;
    }
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
