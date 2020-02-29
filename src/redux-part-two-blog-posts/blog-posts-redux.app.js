import React from "react";
import PostList from "./components/post-list.component";

/**
 * @component functional
 * @name BlogPosts
 * @description
 * @author adam.caldwell
 */
const BlogPosts = () => {
  return (
    <div className="ui container">
      <PostList />
    </div>
  );
};

export default BlogPosts