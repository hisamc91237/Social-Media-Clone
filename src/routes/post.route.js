const express = require("express");

const postRouter = express.Router();

const postController = require("../controllers/post.controller");

/* 
POST /api/posts [protected]
*/

postRouter.post("/posts", postController.createPostController);

module.exports = postRouter;
