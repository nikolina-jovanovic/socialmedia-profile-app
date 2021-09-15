import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div>
      <h3>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </h3>
    </div>
  );
};

export default Posts;
