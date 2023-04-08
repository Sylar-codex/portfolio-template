import React, { useState } from "react";
import postList from "../../posts.json";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";

function GetPost() {
  const [post, setPost] = useState(postList);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerpage, setPostPerPage] = useState(7);

  // current page
  const lastIndexOfPost = currentPage * postPerpage;
  const firstIndexOfPost = lastIndexOfPost - postPerpage;
  const currentPosts = post.slice(firstIndexOfPost, lastIndexOfPost);

  //paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <BlogPost posts={currentPosts} />
      <Pagination
        postPerpage={postPerpage}
        totalPosts={post.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default GetPost;
