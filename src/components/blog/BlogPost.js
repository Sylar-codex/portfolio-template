import React from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "../../css/blog-post.css";

function BlogPost({ posts }) {
  const navigate = useNavigate();
  const excerptList = posts.map((post) => {
    return post.content.split(" ").slice(0, 14).join(" ");
  });

  return (
    <div className="blog-post">
      {posts.map((post, i) => (
        <div className="card" key={i}>
          <div className={post.img ? "post-img-div" : ""}>
            <div className={post.img ? "post-img" : ""}>
              {post.img &&
                (post.img.substring(0, 6) === "https" ? (
                  <img src={post.img} />
                ) : (
                  <img src={require(`../../content/assets/img/${post.img}`)} />
                ))}
            </div>
          </div>
          <div className="post-info">
            <h2
              onClick={() => {
                navigate(`/blog-page/${post.title}`);
              }}
            >
              {post.title}
            </h2>
            <div className="post-content">
              <ReactMarkdown
                className="markdown-post"
                components={{
                  // Map `h` (`# heading`) to use `p`s.
                  h1: "span",
                  h2: "span",
                  h3: "span",
                  h4: "span",
                  h5: "span",
                  h6: "span",
                  center: "span",
                  p: "span",
                  // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                  em: ({ node, ...props }) => (
                    <i style={{ color: "red" }} {...props} />
                  ),
                  a: ({ node }) => <i style={{ textDecoration: "none" }} />,
                  ul: ({ node }) => <i style={{ listStyle: "none" }} />,
                  img: ({ node }) => <i style={{ display: "none" }} />,
                  img: ({ node }) => (
                    <i style={{ marginTop: "0px", marginBottom: "0px" }} />
                  ),
                }}
                children={excerptList[i].trim() + "..."}
                rehypePlugins={[rehypeRaw]}
              />
            </div>
            <div className="date-info">
              <p>{`${post.date} - 4 minute read`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPost;
