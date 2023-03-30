import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Blog />
      <Footer />
    </Fragment>
  );
}

export default App;
