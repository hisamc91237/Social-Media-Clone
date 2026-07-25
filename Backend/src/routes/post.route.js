const express = require("express");

const postRouter = express.Router();

const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");

/*
 * @route POST /api/posts [protected]
 * @description : Create a user post
 */
postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.createPostController,
);

/*
 * @route GET /api/posts/
 * @description : Get the post details
 */
postRouter.get("/", identifyUser, postController.getPostController);

/*
 * @route GET /api/posts/details/:postID
 */
postRouter.get(
  "/details/:postId",
  identifyUser,
  postController.getPostDetailsController,
);

/*
 * @route PUT /api/posts/like/:postId
 * @description : Like a post
 */
postRouter.post(
  "/like/:postId",
  identifyUser,
  postController.createLikeController,
);

module.exports = postRouter;
