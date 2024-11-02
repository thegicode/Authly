const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/getNaverAccessToken", async (req, res) => {
    const { code, state, client_id, client_secret, redirect_uri } = req.body;

    const tokenUrl = `https://nid.naver.com/oauth2.0/token`;
    const params = new URLSearchParams({
        grant_type: "authorization_code",
        client_id: client_id,
        client_secret: client_secret,
        code: code,
        state: state,
        redirect_uri: redirect_uri,
    });

    try {
        const response = await fetch(`${tokenUrl}?${params.toString()}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching access token:", error);
        res.status(500).json({ error: "Failed to fetch access token" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
