import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Footer />
    </Fragment>
  );
}

export default App;
