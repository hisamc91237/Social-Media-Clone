import { getFeed } from "../services/post.api";
import { useContext } from "react";
import { PostContext } from "../post.context";

export const usePost = () => {
  const context = useContext(PostContext);

  const { loading, setLoading, post, setPost, feed, setFeed } = context;

  const handleGetFeed = async () => {
    setLoading(true);
    const response = await getFeed();
    console.log(response);
    setFeed(response.posts);
    setLoading(false);
  };

  return { loading, feed, post, handleGetFeed };
};
