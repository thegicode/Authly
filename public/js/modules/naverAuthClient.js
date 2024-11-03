// 네이버 인증 URL을 가져와 리디렉션하는 함수
export async function fetchNaverAuthUrl() {
    try {
        const response = await fetch(`/naverAuth/authUrl`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(
                `Failed to fetch Naver auth URL: ${response.status}`
            );
        }

        const data = await response.json();
        if (data.url) {
            window.location.href = data.url;
        }
    } catch (error) {
        console.error("Error fetching Naver auth URL:", error);
    }
}

// URL에서 code와 state를 추출하는 함수
export function getCodeAndStateFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        code: urlParams.get("code"),
        state: urlParams.get("state"),
    };
}

// 네이버 사용자 정보를 가져오는 함수
export async function fetchNaverUserInfo(code, state) {
    try {
        const response = await fetch(`/naverAuth/userInfo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ code, state }),
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch user info: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user info:", error);
        return null; // 오류 발생 시 null 반환
    }
}
