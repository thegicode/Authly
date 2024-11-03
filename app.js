// app.js
const express = require("express");
const path = require("path");
const session = require("express-session");
const naverAuthRouter = require("./routes/naverAuthRoutes");
const app = express();
const PORT = 3000;

// 세션 설정
app.use(
    session({
        secret: "authly", // 비밀 키 (변경 필요)
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // HTTPS 환경에서는 true로 설정
    })
);

app.use(express.json());
app.use("/naverAuth", naverAuthRouter);

// public 폴더를 정적 파일 경로로 설정
app.use(express.static(path.join(__dirname, "public")));

// 특정 라우터 설정하여 /naver-index로 접근 시 HTML 파일 제공
app.get("/naver", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/naver-index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
