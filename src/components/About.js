import React from "react";
import AboutCard from "./AboutCard";
import phone from "../assets/icons/mobile-screen-button-solid.svg";
import design from "../assets/icons/pen-nib-solid.svg";
import code from "../assets/icons/code-solid.svg";
import artisty from "../assets/images/partners/artisty.png";
import directy from "../assets/images/partners/directy.png";
import khedmaLik from "../assets/images/partners/khedma-lik.png";
import wallety from "../assets/images/partners/wallety.png";
import telefy from "../assets/images/partners/telefy.png";

function About() {
  return (
    <section id="about">
      <div className="about-info space-x-1">
        <div className="about-cards">
          <AboutCard
            title="UX/UI Design"
            desc="I create designs with products with unique ideas."
            icon={design}
            projects={7}
          />
          <AboutCard
            title="Web Design"
            desc="I develop Front-End with coding super smooth."
            icon={code}
            projects={10}
          />
          <AboutCard
            title="Mobile"
            desc="I develop cross-platform mobile applications."
            icon={phone}
            projects={7}
          />
        </div>
        <div className="about-info-1">
          <p>Introduce</p>
          <h1>Hello, I'm Skander Blaiti</h1>
          <h3>Design is not just what it looks like. Design is how it works</h3>
          <p>
            I have proceeded my dream to be developer as it has been my lifelong
            ambition. I am a talented Front-End developer with a UI/UX design
            background. During my 4 years of work as a freelancer, I had the
            opportunity to enhance my expertise by collaborating with different
            companies and by creating useful content for both business and
            customer use.
            <br />
            <br />I am naturally perserved, self-confident quietly curious,
            innovative and constantly challenging my skills.
          </p>
        </div>
      </div>
      <div className="partner space-x">
        <div className="pat-img ">
          <img src={wallety} alt="wallety" />
        </div>
        <div className="pat-img marg-top-2">
          <img src={artisty} alt="artisty" />
        </div>
        <div className="pat-img marg-top-2">
          <img src={khedmaLik} alt="khedma-lik" />
        </div>
        <div className="pat-img marg-top-2">
          <img src={directy} alt="directy" />
        </div>
        <div className="pat-img marg-top-2">
          <img src={telefy} alt="telefy" />
        </div>
      </div>
    </section>
  );
}

export default About;
