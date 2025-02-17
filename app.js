require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require("express-session");
const naverAuthRouter = require("./src/routes/naverAuthRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// 세션 설정
app.use(
    session({
        secret: process.env.SESSION_SECRET || "default_secret",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: process.env.NODE_ENV === "production" },
    })
);

// 정적 파일 경로 설정
app.use(express.static(path.join(__dirname, "public")));

// JSON 요청 파싱
app.use(express.json());

// 네이버 인증 라우트
app.use("/naverAuth", naverAuthRouter);

// HTML 파일 제공 라우트
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/login.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
