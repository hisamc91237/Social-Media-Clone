const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const authRouter = express.Router();

/* 
POST /api/auth/register
*/
authRouter.post("/register", async (req, res) => {
  const { username, email, password, bio, profile_image } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        "User already exists" + (isUserAlreadyExists.email == email)
          ? "email already exists"
          : "username already exists",
    });
  }

  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await userModel.create({
    username,
    email,
    password: hash,
    bio,
    profile_image,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user registered successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profile_image: user.profile_image,
    },
    token,
  });
});

module.exports = authRouter;
