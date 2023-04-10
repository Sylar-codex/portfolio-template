import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/" className="link">
        <h2>Skander Blaiti</h2>
      </Link>
      <div>
        <ul className="space-x">
          <li>
            <a className="green-text" href="/">
              {"< Home />"}
            </a>
          </li>
          <li>
            <a href="#about">About Me.</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
