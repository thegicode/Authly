export async function fetchNaverAuthUrl() {
    try {
        const response = await fetch(`/naverAuth/authUrl`, {
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

export function getCodeAndStateFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        code: urlParams.get("code"),
        state: urlParams.get("state"),
    };
}

export async function fetchNaverUserInfo(code, state) {
    try {
        const response = await fetch(`/naverAuth/userInfo`, {
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
        return data;
    } catch (error) {
        console.error("Error fetching user info:", error);
    }
}
