const express = require("express");

const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json()); // Middleware
app.use(cookieParser()); // Middleware to use cookies

/* require routers */
const authRouter = require("../src/routes/auth.route");
const postRouter = require("../src/routes/post.route");
const userRouter = require("../src/routes/user.route");

/* Middleware for Routers */
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

module.exports = app;
