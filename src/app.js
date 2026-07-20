const express = require("express");
const authRouter = require("../src/routes/auth.route");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json()); // Middleware
app.use("/api/auth", authRouter);
app.use(cookieParser()); // Middleware to use cookies

module.exports = app;
