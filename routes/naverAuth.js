// routes/auth.js
const express = require("express");
const router = express.Router();
const {
    getNaverAccessToken,
    getNaverUserInfo,
} = require("../services/naverAuth.js");

router.post("/getNaverAccessToken", async (req, res) => {
    const { code, state, client_id, client_secret, redirect_uri } = req.body;

    try {
        const data = await getNaverAccessToken(
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
        const data = await getNaverUserInfo(accessToken);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch access token" });
    }
});

module.exports = router;
