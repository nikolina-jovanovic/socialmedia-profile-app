import React from "react";
import { useState } from "react";

const Post = ({ post }) => {
  const [count, setCount] = useState(0);

  const likes = () => {
    setCount(count + 1);
  };

  const dislikes = () => {
    setCount(count - 1);
  };

  return (
    <div className="post">
      <h3>{post.text}</h3>
      <p
        className={count >= 0 ? "green" : "red"}
        style={{ marginLeft: "450px", fontFamily: "verdana" }}
      >
        {count}
      </p>
      <button className="dislike buttons" onClick={dislikes}>
        <span role="img">👎</span>
      </button>
      <button className="like buttons" onClick={likes}>
        <span role="img">👍</span>
      </button>
    </div>
  );
};

export default Post;
