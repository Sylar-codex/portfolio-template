import React from "react";
import facebook from "../assets/icons/facebook.svg";
import github from "../assets/icons/github.svg";
import instagram from "../assets/icons/instagram.svg";
import youtube from "../assets/icons/youtube.svg";
import linkedin from "../assets/icons/linkedin.svg";

function Footer() {
  return (
    <footer>
      <div className="copyright">
        <h3>copyright © 2023 Blaiti - All rights reserved.</h3>
      </div>
      <div className="foot-icons space-x-rem">
        <div className="foot-icon">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="foot-icon">
          <img src={instagram} alt="instagram" />
        </div>
        <div className="foot-icon">
          <img src={linkedin} alt="linkedin" />
        </div>
        <div className="foot-icon">
          <img src={github} alt="github" />
        </div>
        <div className="foot-icon">
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
