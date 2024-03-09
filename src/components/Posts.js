import React from "react";
import "../Styles/Task2.css";

const Posts = ({ posts }) => {
  return (
    <>
      <div className="container1">
        {posts.map((post) => (
          <div key={post.id} className="posts-container">
            <h2>{post.author}</h2>
            <h3>{post.url}</h3>
            <img src={post.download_url} width="100" height="100" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
