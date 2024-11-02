export async function requestNaverAccessToken(code, state) {
    const client_id = localStorage.getItem("NAVER_CLIENT_ID");
    const client_secret = localStorage.getItem("NAVER_CLIENT_SECRET");
    const redirect_uri = localStorage.getItem("NAVER_REDIRECT_URI");

    try {
        const response = await fetch("/naverAuth/getNaverAccessToken", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                code,
                state,
                client_id,
                client_secret,
                redirect_uri,
            }),
        });

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Error fetching access token:", error);
    }
}
