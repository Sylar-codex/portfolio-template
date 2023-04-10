import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import postList from "../../posts.json";
import rehypeRaw from "rehype-raw";
import "../../css/blog-post.css";
import remarkGfm from "remark-gfm";
import NavBar from "../NavBar";

function BlogPage() {
  const [blogPageContent, setBlogPageContent] = useState({
    img: "",
    title: "",
    date: "",
    content: "",
  });
  const { name } = useParams();

  useEffect(() => {
    console.log(name);
    let obj;
    postList.forEach((post) => {
      if (post.title === name) {
        obj = {
          img: post.img,
          title: post.title,
          date: post.date,
          content: post.content,
        };
      }
    });
    const { img, title, date, content } = obj;
    setBlogPageContent({
      img: img,
      title: title,
      date: date,
      content: content,
    });
  }, [name]);

  return (
    <div>
      <div
        style={{
          background: "#2d2e32",
          padding: "1rem",
          position: "fixed",
          width: "100%",
          top: "0",
          color: "#ffffff",
        }}
      >
        <NavBar />
      </div>
      <div className="blog-page">
        <div className={blogPageContent.img ? "page-img-div" : ""}>
          <div className={blogPageContent.img ? "page-img" : ""}>
            {blogPageContent.img &&
              (blogPageContent.img.substring(0, 6) === "https" ? (
                <img src={blogPageContent.img} />
              ) : (
                <img
                  src={require(`../../content/assets/img/${blogPageContent.img}`)}
                />
              ))}
          </div>
        </div>
        <div className="page-content">
          <h2 className="content-title"> {blogPageContent.title} </h2>
          <p className="content-date">{blogPageContent.date}</p>
          <div>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              className="react-markdown"
              children={blogPageContent.content}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
