import React from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import postList from "../../posts.json";
import rehypeRaw from "rehype-raw";
import "../../css/blog-post.css";

function BlogPost() {
  const navigate = useNavigate();
  const excerptList = postList.map((post) => {
    return post.content.split(" ").slice(0, 14).join(" ");
  });

  return (
    <div className="blog-post">
      {postList.map((post, i) => (
        <div
          onClick={() => {
            navigate(`/blog-page/${post.title}`);
          }}
          className="card"
          key={i}
        >
          <div className={post.img ? "post-img" : ""}>
            {post.img &&
              (post.img.substring(0, 6) === "https" ? (
                <img src={post.img} />
              ) : (
                <img src={require(`../../content/assets/img/${post.img}`)} />
              ))}
          </div>
          <div className="post-info">
            <h2>{post.title}</h2>
            <div className="post-content">
              <ReactMarkdown
                className="markdown-post"
                components={{
                  // Map `h` (`# heading`) to use `p`s.
                  h1: "p",
                  h2: "p",
                  h3: "p",
                  h4: "p",
                  h5: "p",
                  h6: "p",
                  center: "p",
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
                children={excerptList[i] + "..."}
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
