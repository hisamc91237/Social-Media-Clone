const express = require("express");

const app = express();
app.use(express.json()); // Middleware

module.exports = app;
