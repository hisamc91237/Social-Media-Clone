const mongoose = require("mongoose");

const folloeSchema = new mongoose.Schema(
  {
    followers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Follower is required"],
    },
    followee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Followee is required"],
    },
  },
  {
    timestamps: true,
  },
);

const followModel = mongoose.model("folllows", folloeSchema);

module.exports = followModel;
