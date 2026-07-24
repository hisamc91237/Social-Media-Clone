const followModel = require("../models/follow.model");

const followUserController = async (req, res) => {
  const followerUserName = req.user.username;
  const followeeUserName = req.params.username;

  if (followerUserName === followeeUserName) {
    return res.status(400).json({
      message: " User cannot follow themselves",
    });
  }

  const isUserFollowing = await followModel.findOne({
    $or: [{ follower: followeeUserName }, { followee: followeeUserName }],
  });

  if (isUserFollowing) {
    return res.status(409).json({
      message: `You are already following ${followeeUserName}`,
    });
  }

  const followRecord = await followModel.create({
    follower: followerUserName,
    followee: followeeUserName,
  });

  res.status(201).json({
    message: `You are following ${followeeUserName}`,
    followRecord,
  });
};

const unfollowUserController = async (req, res) => {
  const followerUserName = req.user.username;
  const followeeUserName = req.params.username;

  if (followeeUserName == followerUserName) {
    return res.status(400).json({
      message: " You cannot unfollow yourself",
    });
  }

  const isUserFollowing = await followModel.findOne({
    $or: [{ follower: followeeUserName }, { followee: followeeUserName }],
  });

  if (!isUserFollowing) {
    return res.status(400).json({
      message: `You are not follwing ${followeeUserName}`,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `You have unfollowed ${followeeUserName}`,
    isUserFollowing,
  });
};

module.exports = {
  followUserController,
  unfollowUserController,
};
