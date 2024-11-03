export async function requestNaverAuthUrl() {
    try {
        const response = await fetch(`/naverAuth/getNaverAuthUrl`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        if (data.url) {
            window.location.href = data.url;
        }
    } catch (error) {
        console.error("Error fetching naver auth url:", error);
    }
}
