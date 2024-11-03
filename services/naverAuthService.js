// 네이버 API 기본 URL 설정
const NAVER_TOKEN_URL = "https://nid.naver.com/oauth2.0/token";
const NAVER_USER_INFO_URL = "https://openapi.naver.com/v1/nid/me";

// 네이버 액세스 토큰 가져오기 함수
async function getNaverAccessToken(
    code,
    state,
    client_id,
    client_secret,
    redirect_uri
) {
    const params = new URLSearchParams({
        grant_type: "authorization_code",
        client_id,
        client_secret,
        code,
        state,
        redirect_uri,
    });

    try {
        const response = await fetch(
            `${NAVER_TOKEN_URL}?${params.toString()}`,
            {
                method: "GET",
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `Failed to fetch access token: ${response.status}. ${errorText}`
            );
        }

        return await response.json(); // { access_token, refresh_token, ... }
    } catch (error) {
        console.error("Error in getNaverAccessToken:", error);
        throw error;
    }
}

// 네이버 사용자 정보 가져오기 함수
async function getNaverUserInfo(accessToken) {
    try {
        const response = await fetch(NAVER_USER_INFO_URL, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `Failed to fetch user info: ${response.status}. ${errorText}`
            );
        }

        const data = await response.json();
        return data.response; // { id, nickname, email, ... }
    } catch (error) {
        console.error("Error in getNaverUserInfo:", error);
        throw error;
    }
}

module.exports = { getNaverAccessToken, getNaverUserInfo };
