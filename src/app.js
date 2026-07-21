const express = require("express");
const authRouter = require("../src/routes/auth.route");
const cookieParser = require("cookie-parser");
const postRouter = require("../src/routes/post.route");

const app = express();
app.use(express.json()); // Middleware
app.use("/api/auth", authRouter);
app.use(cookieParser()); // Middleware to use cookies
app.use("/api", postRouter);

module.exports = app;
