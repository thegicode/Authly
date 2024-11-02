export async function requestNaverUserInfo(accessToken) {
    try {
        const response = await fetch("/auth/getNaverUserInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                accessToken,
            }),
        });

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("Error fetching access token:", error);
    }
}
