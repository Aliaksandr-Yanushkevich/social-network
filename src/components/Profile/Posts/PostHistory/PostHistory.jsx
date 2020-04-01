import React from "react";
import Post from "../Post/Post";

const PostHistory = ({ posts }) => {
  debugger;
  const postsElements = posts.map(({ author, text, likeCount }) => (
    <Post author={author} text={text} likeCount={likeCount} />
  ));
  return postsElements;
};

export default PostHistory;
