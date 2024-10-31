export default async function getAccessToken(code, state) {
    const naver_client_id = process.env.NAVER_CLIENT_ID;
    const naver_client_secret = process.env.NAVER_CLIENT_SECRET;
    const redirect_uri = process.env.NAVER_REDIRECT_URI;

    try {
        const tokenUrl = `https://nid.naver.com/oauth2.0/token`;
        const params = {
            grant_type: "authorization_code",
            client_id: naver_client_id,
            client_secret: naver_client_secret,
            code: code,
            state: state,
            redirect_uri: redirect_uri,
        };

        // Access Token 요청
        const response = await axios.get(tokenUrl, { params });
        const { accessToken } = response.data;

        console.log("Access Token:", accessToken);
        return accessToken;
    } catch (error) {
        console.error("Error fetching access token:", error);
    }
}
