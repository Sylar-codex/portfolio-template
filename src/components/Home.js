import React, { Fragment } from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

function Home() {
  return (
    <Fragment>
      <Header />
      <About />
      <Footer />
    </Fragment>
  );
}

export default Home;
