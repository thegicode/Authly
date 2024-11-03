// app.js
require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require("express-session");
const naverAuthRouter = require("./routes/naverAuthRoutes");
const app = express();
const PORT = 3000;

// 세션 설정
app.use(
    session({
        secret: process.env.SESSION_SECRET || "default_secret",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: process.env.NODE_ENV === "production" }, // 배포 환경에서는 true 설정
    })
);

app.use(express.json());
app.use("/naverAuth", naverAuthRouter);

// public 폴더를 정적 파일 경로로 설정
app.use(express.static(path.join(__dirname, "public")));

// 라우터 설정, HTML 파일 제공
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public/html/login.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
