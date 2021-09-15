import React from "react";
import { useState } from "react";
import Posts from "./Posts";

const Form = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  const [post, setPost] = useState({
    id: "",
    text: ""
  });

  const handleChange = (e) => {
    setPost({ ...post, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.text.trim()) {
      addPost({ ...post, id: Math.floor(Math.random() * 10000) });
      setPost({ ...post, text: "" });
    } else {
      alert("Oops. You didn't type anything.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <textarea
          autoFocus
          type="text"
          onChange={handleChange}
          placeholder="Tell us what you think..."
          name="text"
          value={post.text}
          className="input-form"
        ></textarea>
        <button className="buttons" type="submit" style={{ width: "90px" }}>
          <b>POST</b>
        </button>
      </form>
      <Posts posts={posts} />
    </div>
  );
};

export default Form;
