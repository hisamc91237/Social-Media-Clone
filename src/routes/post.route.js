const express = require("express");

const postRouter = express.Router();

const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");

/* 
POST /api/posts [protected]
*/
postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.createPostController,
);

/* 
GET /api/posts [protected]
*/
postRouter.get("/", identifyUser, postController.getPostController);

/* 
GET /api/posts/details/:postId
*/
postRouter.get(
  "/details/:postId",
  identifyUser,
  postController.getPostDetailsController,
);

module.exports = postRouter;
