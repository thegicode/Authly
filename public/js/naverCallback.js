import { getCodeAndStateFromUrl, fetchNaverUserInfo } from "./naverAuth.js";

const { code, state } = getCodeAndStateFromUrl();
console.log("Code:", code, "State:", state);

const userInfo = await fetchNaverUserInfo(code, state);
if (userInfo) {
    console.log("User Info:", userInfo);
    document.body.innerHTML = `<p><strong>${userInfo.nickname}</strong>님</p><p>로그인에 성공했습니다.</p><p>${userInfo.email}</p>`;
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
