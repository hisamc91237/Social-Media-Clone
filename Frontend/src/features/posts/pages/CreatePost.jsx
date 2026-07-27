import React, { useRef, useState } from "react";
import "../style/createPost.scss";
import { usePost } from "../hooks/usePost";
import { useNavigate } from "react-router";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const postImageInoutFieldRef = useRef(null);
  const navigate = useNavigate();

  const { loading, handleCreatePost } = usePost();

  const handleSubmit = (e) => {
    e.preventDefault();

    const file = postImageInoutFieldRef.current.files[0];

    handleCreatePost(file, caption);
    navigate("/");
  };

  if (loading) {
    return (
      <main>
        <h1>Creating Post...</h1>
      </main>
    );
  }

  return (
    <main className="create-post-page">
      <div className="form-container">
        <h1>Create Post </h1>
        <form onSubmit={handleSubmit}>
          <label className="post-image-label" htmlFor="postImage">
            Select Image
          </label>
          <input
            ref={postImageInoutFieldRef}
            hidden
            type="file"
            name="postImage"
            id="postImage"
          />
          <input
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            value={caption}
            type="text"
            name="caption"
            id="caption"
            placeholder="Enter caption"
          />
          <button className="button primary-button">Create Post</button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
