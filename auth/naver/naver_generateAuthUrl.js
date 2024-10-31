// require("dotenv").config();

export default function generateNaverAuthUrl() {
    // 환경 변수에서 네이버 클라이언트 ID, 리디렉션 URI를 가져옵니다
    // const naver_client_id = process.env.NAVER_CLIENT_ID;
    // const redirect_uri = process.env.NAVER_REDIRECT_URI;

    const naver_client_id = window.env.NAVER_CLIENT_ID;
    const redirect_uri = window.env.NAVER_REDIRECT_URI;

    // CSRF 방지를 위한 고유한 state 문자열을 생성합니다
    const generateRandomState = () => {
        return (
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
        );
    };

    const state = generateRandomState();

    const naverAuthUrl = "https://nid.naver.com/oauth2.0/authorize";
    const params = {
        response_type: "code",
        client_id: naver_client_id,
        redirect_uri: redirect_uri,
        state: state, // 생성된 state를 사용
    };

    // URLSearchParams로 파라미터를 문자열로 변환하고, 네이버 인증 URL에 추가
    const url = `${naverAuthUrl}?${new URLSearchParams(params)}`;
    window.location.href = url;
}
