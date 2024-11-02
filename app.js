// app.js
const express = require("express");
const path = require("path");
const naverAuthRouter = require("./routes/naverAuth");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/naverAuth", naverAuthRouter);

// public 폴더를 정적 파일 경로로 설정
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
