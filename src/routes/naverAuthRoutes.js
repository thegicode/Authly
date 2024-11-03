const express = require("express");
const crypto = require("crypto");
const router = express.Router();

const {
    getNaverAccessToken,
    getNaverUserInfo,
} = require("../services/naverAuthService");

// 환경 변수와 네이버 인증 URL 상수화
const NAVER_AUTH_URL = "https://nid.naver.com/oauth2.0/authorize";
const client_id = process.env.NAVER_CLIENT_ID;
const client_secret = process.env.NAVER_CLIENT_SECRET;
const redirect_uri = process.env.NAVER_REDIRECT_URI;

// 네이버 인증 URL 생성
router.get("/authUrl", (req, res) => {
    const state = crypto.randomBytes(20).toString("hex");
    req.session.state = state; // 세션에 state 값 저장

    const params = new URLSearchParams({
        response_type: "code",
        client_id,
        redirect_uri,
        state,
    });

    res.json({ url: `${NAVER_AUTH_URL}?${params.toString()}` });
});

// 네이버 사용자 정보 요청
router.post("/userInfo", async (req, res) => {
    const { code, state } = req.body;

    if (state !== req.session.state) {
        return res.status(400).json({ error: "Invalid state parameter" });
    }
    delete req.session.state; // 사용된 state 값 삭제

    try {
        const accessTokenData = await getNaverAccessToken(
            code,
            state,
            client_id,
            client_secret,
            redirect_uri
        );

        const userInfo = await getNaverUserInfo(accessTokenData.access_token);
        res.json(userInfo); // id, nickname, email
    } catch (error) {
        console.error("Error fetching user info:", error);
        res.status(500).json({ error: "Failed to fetch user info" });
    }
});

module.exports = router;
