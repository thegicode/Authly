// services/naverAuth.js

async function getNaverAccessToken(
    code,
    state,
    client_id,
    client_secret,
    redirect_uri
) {
    const tokenUrl = `https://nid.naver.com/oauth2.0/token`;
    const params = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: client_id,
        client_secret: client_secret,
        code: code,
        state: state,
        redirect_uri: redirect_uri,
    });

    try {
        const response = await fetch(`${tokenUrl}?${params.toString()}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching access token:", error);
        throw error;
    }
}

async function getNaverUserInfo(accessToken) {
    try {
        const response = await fetch("https://openapi.naver.com/v1/nid/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return await response.json();
        // email :
        // id :
        // nickname:
    } catch (error) {
        console.error("Error fetching access user info:", error);
        throw error;
    }
}

module.exports = { getNaverAccessToken, getNaverUserInfo };
