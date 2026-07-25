const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "username already exists"],
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  bio: String,
  profile_image: {
    type: String,
    default: "https://ik.imagekit.io/elvhoc8eg/images.jpg",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
