// routes/auth.js
const express = require("express");
const crypto = require("crypto"); // state 값 생성용
const router = express.Router();

const {
    fetchNaverAccessToken,
    fetchNaverUserInfo,
} = require("../services/naverAuthService");

router.get("/getNaverAuthUrl", (req, res) => {
    const naver_client_id = process.env.NAVER_CLIENT_ID;
    const redirect_uri = process.env.NAVER_REDIRECT_URI;

    // state 값 생성
    const state = crypto.randomBytes(20).toString("hex");
    req.session.state = state; // 세션에 state 값을 저장하여 검증에 사용

    const naverAuthUrl = "https://nid.naver.com/oauth2.0/authorize";
    const params = new URLSearchParams({
        response_type: "code",
        client_id: naver_client_id,
        redirect_uri: redirect_uri,
        state: state,
    });

    res.json({ url: `${naverAuthUrl}?${params.toString()}` });
});

router.post("/getNaverAccessToken", async (req, res) => {
    const { code, state } = req.body;

    const client_id = process.env.NAVER_CLIENT_ID;
    const client_secret = process.env.NAVER_CLIENT_SECRET;
    const redirect_uri = process.env.NAVER_REDIRECT_URI;

    // 1. 세션에서 저장한 state 값과 콜백으로 받은 state 값을 비교
    if (state !== req.session.state) {
        return res.status(400).send("Invalid state parameter.");
    }

    // 2. state 검증이 성공한 경우 세션에서 state 삭제
    delete req.session.state;

    try {
        const data = await fetchNaverAccessToken(
            code,
            state,
            client_id,
            client_secret,
            redirect_uri
        );
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch access token" });
    }
});

router.post("/getNaverUserInfo", async (req, res) => {
    const { accessToken } = req.body;

    try {
        const data = await fetchNaverUserInfo(accessToken);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch access token" });
    }
});

module.exports = router;
