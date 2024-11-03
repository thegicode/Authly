export async function requestNaverAccessToken(code, state) {
    try {
        const response = await fetch(`/naverAuth/getNaverAccessToken`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                code,
                state,
            }),
        });

        const data = await response.json();
        return data.access_token;
    } catch (error) {
        console.error("Error fetching access token:", error);
    }
}
