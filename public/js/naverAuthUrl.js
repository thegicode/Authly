export async function requestNaverAuthUrl() {
    const params = new URLSearchParams({
        naver_client_id: localStorage.getItem("NAVER_CLIENT_ID"),
        redirect_uri: localStorage.getItem("NAVER_REDIRECT_URI"),
    });

    try {
        const response = await fetch(
            `/naverAuth/getNaverAuthUrl?${params.toString()}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await response.json();
        if (data.url) {
            window.location.href = data.url;
        }
    } catch (error) {
        console.error("Error fetching naver auth url:", error);
    }
}
