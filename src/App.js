import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import BlogPost from "./components/blog/BlogPost";
import BlogPage from "./components/blog/BlogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog-posts" element={<BlogPost />} />
      <Route path="/blog-page/:name" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
