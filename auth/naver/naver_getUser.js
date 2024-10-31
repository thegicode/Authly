async function getUserInfo(accessToken) {
    const response = await fetch("https://openapi.naver.com/v1/nid/me", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    const userInfo = await response.json();
    return userInfo.response; // 사용자 정보가 "response" 객체에 포함됨
}
